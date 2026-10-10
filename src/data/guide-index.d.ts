// Typed by hand on purpose: letting tsc infer a type from the 1.8 MB generated
// JSON (resolveJsonModule) is slow and adds nothing. See src/lib/guide-data.ts.
declare module '@/data/guide-index.json' {
  const index: unknown[];
  export default index;
}
