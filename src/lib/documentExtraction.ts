export interface ExtractedDocument {
  title: string;
  content: string;
  sourceType: 'upload';
  originalFilename: string;
}

function baseTitle(fileName: string) {
  return fileName.replace(/\.[^.]+$/, '') || fileName;
}

async function extractTextFile(file: File): Promise<ExtractedDocument> {
  return {
    title: baseTitle(file.name),
    content: await file.text(),
    sourceType: 'upload',
    originalFilename: file.name,
  };
}

async function extractDocxFile(file: File): Promise<ExtractedDocument> {
  const mammoth = await import('mammoth/mammoth.browser.js');
  const arrayBuffer = await file.arrayBuffer();
  const result = await mammoth.extractRawText({ arrayBuffer });

  return {
    title: baseTitle(file.name),
    content: result.value.trim(),
    sourceType: 'upload',
    originalFilename: file.name,
  };
}

async function extractImageFile(file: File): Promise<ExtractedDocument> {
  const { createWorker } = await import('tesseract.js');
  const worker = await createWorker('eng');

  try {
    const imageUrl = URL.createObjectURL(file);
    try {
      const result = await worker.recognize(imageUrl);

      return {
        title: baseTitle(file.name),
        content: result.data.text.trim(),
        sourceType: 'upload',
        originalFilename: file.name,
      };
    } finally {
      URL.revokeObjectURL(imageUrl);
    }
  } finally {
    await worker.terminate();
  }
}

async function extractPdfFile(file: File): Promise<ExtractedDocument> {
  const pdfjs = await import('pdfjs-dist');
  pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.mjs', import.meta.url).toString();

  const typedArray = new Uint8Array(await file.arrayBuffer());
  const pdf = await pdfjs.getDocument({ data: typedArray }).promise;
  const pages: string[] = [];

  for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
    const page = await pdf.getPage(pageNumber);
    const content = await page.getTextContent();
    const text = content.items
      .map((item) => ('str' in item ? item.str : ''))
      .join(' ')
      .replace(/\s+/g, ' ')
      .trim();

    if (text) {
      pages.push(text);
    }
  }

  return {
    title: baseTitle(file.name),
    content: pages.join('\n\n'),
    sourceType: 'upload',
    originalFilename: file.name,
  };
}

export async function extractDocumentFile(file: File): Promise<ExtractedDocument> {
  const lower = file.name.toLowerCase();

  if (lower.endsWith('.md') || lower.endsWith('.txt')) {
    return extractTextFile(file);
  }

  if (lower.endsWith('.docx')) {
    return extractDocxFile(file);
  }

  if (lower.endsWith('.pdf')) {
    return extractPdfFile(file);
  }

  if (/\.(png|jpe?g|webp)$/i.test(lower)) {
    return extractImageFile(file);
  }

  throw new Error('Unsupported file type. Use .md, .txt, .pdf, .docx, .png, .jpg, .jpeg, or .webp.');
}
