import type { Guide } from './guides';

/**
 * Spanish-language guides for TekSure.
 * Written in natural Latin American / US Hispanic Spanish using the "tú" form.
 * Slugs are prefixed with `es-` for language routing.
 */
export const guidesSpanish: Guide[] = [
  // ─── 1. How to Connect to WiFi ──────────────────────────────────────────────
  {
    slug: 'es-connect-wifi',
    title: 'Cómo conectarse a una red WiFi',
    excerpt: 'Aprende a conectar tu computadora o teléfono a una red WiFi en pocos pasos sencillos.',
    category: 'internet-connectivity' as any,
    tags: ['wifi', 'internet', 'connectivity', 'networking', 'beginner'],
    readTime: '4 min',
    thumbnailEmoji: '📶',
    difficulty: 'Beginner',
    publishedAt: '2026-04-16',
    body: `Conectarse a una red WiFi es uno de los pasos más importantes para usar internet en tu hogar, en una cafetería o en cualquier lugar público. WiFi es simplemente una forma de conectar tu dispositivo a internet sin cables. Cuando ves el símbolo de abanico (📶) en la pantalla de tu teléfono o computadora, significa que estás conectado.

Antes de empezar, necesitas dos cosas: el nombre de la red WiFi (también llamado SSID) y la contraseña. Si estás en tu casa, esta información suele estar en una etiqueta pegada en tu router — esa cajita con luces que te dio tu proveedor de internet como Spectrum, Xfinity o AT&T. Si estás en un lugar público como Starbucks o la biblioteca, pregunta al personal por la contraseña.

En un teléfono iPhone, ve a Ajustes > Wi-Fi y asegúrate de que el interruptor esté activado (en verde). Aparecerá una lista de redes disponibles. Toca el nombre de tu red e ingresa la contraseña. En Android, ve a Configuración > Redes e Internet > Wi-Fi. El proceso es muy similar.

En una computadora con Windows, haz clic en el ícono de WiFi en la esquina inferior derecha de la barra de tareas. Selecciona tu red y haz clic en "Conectar". Escribe la contraseña y listo. En una Mac, haz clic en el ícono de WiFi en la barra de menú superior y selecciona tu red.

Un consejo importante: si la red no pide contraseña, ten cuidado. Las redes abiertas pueden ser inseguras. Evita hacer compras o ingresar a tu banco cuando estés en una red pública sin contraseña.`,
    steps: [
      {
        title: 'Localiza el nombre y contraseña de tu red WiFi',
        content: 'Busca una etiqueta en tu router (la cajita con luces de tu proveedor de internet). Ahí encontrarás el nombre de la red (SSID) y la contraseña. Si estás en un lugar público, pregunta al personal.',
      },
      {
        title: 'Abre la configuración de WiFi en tu dispositivo',
        content: 'En iPhone: ve a Ajustes > Wi-Fi. En Android: ve a Configuración > Redes e Internet > Wi-Fi. En Windows: haz clic en el ícono de WiFi en la esquina inferior derecha. En Mac: haz clic en el ícono de WiFi en la barra superior.',
      },
      {
        title: 'Activa el WiFi si está desactivado',
        content: 'Asegúrate de que el interruptor de WiFi esté encendido. En iPhone y Android, el interruptor debe estar en verde o azul. En computadoras, verifica que WiFi no esté apagado.',
      },
      {
        title: 'Selecciona tu red de la lista',
        content: 'Aparecerá una lista de redes WiFi cercanas. Busca el nombre exacto de tu red y tócala o haz clic en ella. Si no aparece, asegúrate de estar cerca del router.',
      },
      {
        title: 'Ingresa la contraseña',
        content: 'Escribe la contraseña exactamente como aparece en la etiqueta del router. Las contraseñas distinguen entre mayúsculas y minúsculas. Usa el ícono del ojito para ver lo que escribes y verificar que sea correcto.',
      },
      {
        title: 'Confirma la conexión',
        content: 'Una vez conectado, verás el símbolo de WiFi (📶) en la parte superior de tu pantalla. Abre el navegador y visita cualquier página web para confirmar que tienes internet.',
      },
    ],
  },

  // ─── 2. How to Set Up a Strong Password ─────────────────────────────────────
  {
    slug: 'es-strong-password',
    title: 'Cómo crear una contraseña segura',
    excerpt: 'Protege tus cuentas creando contraseñas fuertes que sean difíciles de adivinar pero fáciles de recordar.',
    category: 'safety-guides' as any,
    tags: ['password', 'security', 'safety', 'accounts', 'beginner'],
    readTime: '5 min',
    thumbnailEmoji: '🔐',
    difficulty: 'Beginner',
    publishedAt: '2026-04-16',
    body: `Una contraseña segura es tu primera línea de defensa contra los hackers y los estafadores en internet. Piensa en tu contraseña como la cerradura de tu casa: si es débil, cualquiera puede entrar. Crear contraseñas fuertes es más fácil de lo que piensas, y aquí te vamos a enseñar cómo hacerlo.

La regla número uno es que tu contraseña debe tener al menos 12 caracteres. Mientras más larga, más segura. Una buena técnica es usar una frase que puedas recordar fácilmente. Por ejemplo, "MiGatoTiene3Bigotes!" es mucho más segura que "gato123". La frase tiene mayúsculas, minúsculas, un número y un signo de exclamación.

Nunca uses información personal como tu nombre, fecha de nacimiento, número de teléfono o el nombre de tus hijos o mascotas. Los estafadores pueden encontrar esta información en tus redes sociales. Tampoco uses contraseñas comunes como "123456", "password" o "qwerty".

Lo más importante: usa una contraseña diferente para cada cuenta. Si usas la misma contraseña en todas partes y un sitio web es hackeado, los delincuentes pueden acceder a todas tus cuentas. Sabemos que es difícil recordar muchas contraseñas, por eso te recomendamos un administrador de contraseñas como el que viene incluido en tu iPhone o Android. Estas herramientas guardan todas tus contraseñas de forma segura y las llenan automáticamente cuando las necesitas.

Si prefieres escribir tus contraseñas en papel, guárdalas en un lugar seguro dentro de tu casa, nunca en tu billetera o cerca de tu computadora.`,
    steps: [
      {
        title: 'Elige una frase memorable como base',
        content: 'Piensa en una frase que puedas recordar, como "A mi abuela le gustan las flores rojas". Toma las primeras letras o palabras y crea algo como "AmiAbuela&FloresRojas2024".',
      },
      {
        title: 'Asegúrate de incluir variedad de caracteres',
        content: 'Tu contraseña debe tener al menos 12 caracteres e incluir: letras mayúsculas (A, B, C), letras minúsculas (a, b, c), números (1, 2, 3) y símbolos especiales (!, @, #, $).',
      },
      {
        title: 'Evita información personal',
        content: 'No uses tu nombre, fecha de nacimiento, dirección ni el nombre de familiares o mascotas. Los estafadores buscan esta información en Facebook y otras redes sociales.',
      },
      {
        title: 'Usa una contraseña diferente para cada cuenta',
        content: 'Nunca repitas la misma contraseña en varios sitios. Si una cuenta es hackeada, las demás seguirán protegidas. Esto es especialmente importante para tu correo electrónico y tu banco.',
      },
      {
        title: 'Considera usar un administrador de contraseñas',
        content: 'Tu iPhone tiene "Contraseñas" en Ajustes y Android tiene Google Password Manager. Estas herramientas crean y guardan contraseñas seguras automáticamente. Solo necesitas recordar una contraseña maestra.',
      },
      {
        title: 'Cambia tus contraseñas si sospechas algo raro',
        content: 'Si recibes un correo diciendo que tu cuenta fue comprometida, o si notas actividad sospechosa, cambia tu contraseña inmediatamente desde el sitio web oficial (nunca desde un enlace en un correo).',
      },
    ],
  },

  // ─── 3. How to Spot a Phishing Email ────────────────────────────────────────
  {
    slug: 'es-spot-phishing-email',
    title: 'Cómo detectar un correo electrónico fraudulento',
    excerpt: 'Aprende a reconocer correos falsos que intentan robarte información personal o dinero.',
    category: 'safety-guides' as any,
    tags: ['phishing', 'email', 'scam', 'security', 'safety', 'beginner'],
    readTime: '6 min',
    thumbnailEmoji: '🎣',
    difficulty: 'Beginner',
    publishedAt: '2026-04-16',
    body: `Los correos electrónicos fraudulentos, conocidos como "phishing", son mensajes falsos diseñados para engañarte y robarte información personal como tu contraseña, número de tarjeta de crédito o número de Seguro Social. Estos correos parecen venir de empresas legítimas como tu banco, Amazon, Netflix o incluso del gobierno, pero en realidad son de estafadores.

La buena noticia es que estos correos casi siempre tienen señales de alerta que puedes aprender a reconocer. La primera señal es la urgencia: "Tu cuenta será cerrada en 24 horas", "Acción inmediata requerida" o "Has ganado un premio". Los estafadores quieren que actúes rápido sin pensar.

La segunda señal es la dirección del remitente. Aunque el nombre puede decir "Bank of America" o "Chase", mira la dirección de correo completa. Si dice algo como "seguridad@bank0famerica-alerta.com" en lugar de una dirección oficial que termine en @bankofamerica.com, es falso.

La tercera señal son los errores de ortografía y gramática. Las empresas reales tienen equipos que revisan cada mensaje. Si un correo tiene errores obvios, probablemente es falso.

Nunca hagas clic en enlaces dentro de un correo sospechoso. Si crees que puede ser real, abre tu navegador y escribe la dirección del sitio web directamente. Por ejemplo, si recibes un correo de "tu banco", abre el navegador y escribe www.chase.com tú mismo en lugar de hacer clic en el enlace del correo.

Recuerda: tu banco, el IRS, Social Security y Medicare nunca te van a pedir tu contraseña, número de Seguro Social ni información de tarjeta de crédito por correo electrónico. Si tienes dudas, llama directamente al número oficial de la empresa.`,
    steps: [
      {
        title: 'Revisa quién envía el correo',
        content: 'No te fíes solo del nombre que aparece. Toca o haz clic en el nombre del remitente para ver la dirección de correo completa. Si no termina en el dominio oficial de la empresa (como @amazon.com o @chase.com), es sospechoso.',
      },
      {
        title: 'Desconfía de mensajes urgentes o amenazantes',
        content: 'Frases como "Tu cuenta será suspendida", "Confirma tu identidad ahora" o "Has ganado un premio" son tácticas de presión. Las empresas legítimas no te amenazan por correo electrónico.',
      },
      {
        title: 'Busca errores de ortografía y gramática',
        content: 'Los correos fraudulentos frecuentemente tienen errores de escritura, frases extrañas o mezclan idiomas. Las empresas reales revisan cuidadosamente sus comunicaciones.',
      },
      {
        title: 'No hagas clic en enlaces sospechosos',
        content: 'Pasa el cursor sobre el enlace (sin hacer clic) para ver a dónde lleva realmente. En tu teléfono, mantén presionado el enlace para ver la dirección. Si la dirección se ve rara o no coincide con el sitio oficial, no lo toques.',
      },
      {
        title: 'Nunca compartas información personal por correo',
        content: 'Ninguna empresa legítima, banco, el IRS ni Social Security te va a pedir tu contraseña, número de Seguro Social o datos de tarjeta de crédito por correo electrónico. Si lo hacen, es una estafa.',
      },
      {
        title: 'Reporta el correo fraudulento',
        content: 'En Gmail, haz clic en los tres puntos y selecciona "Reportar phishing". En iPhone Mail, toca la flecha de reenviar y selecciona "Mover a correo no deseado". También puedes reenviar el correo a reportphishing@apwg.org.',
      },
    ],
  },

  // ─── 4. How to Update Your Phone ────────────────────────────────────────────
  {
    slug: 'es-update-phone',
    title: 'Cómo actualizar tu teléfono',
    excerpt: 'Mantén tu teléfono seguro y funcionando bien con las últimas actualizaciones de software.',
    category: 'phone-guides' as any,
    tags: ['phone', 'update', 'ios', 'android', 'security', 'beginner'],
    readTime: '4 min',
    thumbnailEmoji: '📱',
    difficulty: 'Beginner',
    publishedAt: '2026-04-16',
    body: `Actualizar tu teléfono es como llevar tu carro al servicio: lo mantiene funcionando bien y lo protege contra problemas. Las actualizaciones de software corrigen errores, mejoran la velocidad y, lo más importante, tapan agujeros de seguridad que los hackers podrían usar para acceder a tu información.

Muchas personas ignoran las actualizaciones porque les da miedo que algo cambie o porque no quieren esperar. Pero no actualizar tu teléfono es como dejar la puerta de tu casa sin llave. Los hackers buscan teléfonos con software viejo porque saben que tienen vulnerabilidades conocidas.

Antes de actualizar, asegúrate de dos cosas: que tu teléfono tenga al menos un 50% de batería (o conéctalo al cargador) y que estés conectado a una red WiFi, ya que las actualizaciones pueden ser archivos grandes y usar muchos datos de tu plan celular.

En un iPhone, ve a Ajustes > General > Actualización de software. Si hay una actualización disponible, verás un botón que dice "Descargar e instalar". El proceso puede tomar entre 15 y 45 minutos. Tu teléfono se reiniciará solo y cuando termine verás la pantalla de inicio como siempre.

En Android, el camino exacto puede variar según la marca (Samsung, Google Pixel, Motorola, etc.), pero generalmente vas a Configuración > Sistema > Actualización de software, o Configuración > Actualización de software. Toca "Buscar actualizaciones" y sigue las instrucciones.

Te recomendamos activar las actualizaciones automáticas para que tu teléfono se actualice solo durante la noche cuando no lo estás usando.`,
    steps: [
      {
        title: 'Prepara tu teléfono para la actualización',
        content: 'Conecta tu teléfono al cargador o asegúrate de tener al menos 50% de batería. Conéctate a una red WiFi para no gastar los datos de tu plan celular. La actualización puede ser un archivo grande.',
      },
      {
        title: 'Busca actualizaciones disponibles',
        content: 'En iPhone: ve a Ajustes > General > Actualización de software. En Android: ve a Configuración > Sistema > Actualización de software (o Configuración > Actualización de software en Samsung).',
      },
      {
        title: 'Descarga e instala la actualización',
        content: 'Si hay una actualización disponible, toca "Descargar e instalar". Es posible que necesites aceptar los términos y condiciones. La descarga puede tomar varios minutos dependiendo de tu conexión de internet.',
      },
      {
        title: 'Espera a que el teléfono se reinicie',
        content: 'Tu teléfono se reiniciará automáticamente durante la instalación. Esto es normal. No lo apagues ni lo desconectes del cargador. El proceso puede tomar de 15 a 45 minutos.',
      },
      {
        title: 'Verifica que la actualización fue exitosa',
        content: 'Después de reiniciar, regresa a Ajustes > General > Actualización de software (iPhone) o Configuración > Sistema > Actualización de software (Android). Debe decir que tu software está actualizado.',
      },
      {
        title: 'Activa las actualizaciones automáticas',
        content: 'En iPhone: Ajustes > General > Actualización de software > Actualizaciones automáticas y activa todo. En Android: Configuración > Sistema > Actualización de software > ícono de engranaje y activa la descarga automática.',
      },
    ],
  },

  // ─── 5. How to Take a Screenshot ────────────────────────────────────────────
  {
    slug: 'es-take-screenshot',
    title: 'Cómo tomar una captura de pantalla',
    excerpt: 'Aprende a capturar lo que ves en la pantalla de tu teléfono o computadora para guardarlo o compartirlo.',
    category: 'essential-skills' as any,
    tags: ['screenshot', 'phone', 'computer', 'beginner', 'essential'],
    readTime: '4 min',
    thumbnailEmoji: '📸',
    difficulty: 'Beginner',
    publishedAt: '2026-04-16',
    body: `Una captura de pantalla es como tomarle una foto a lo que aparece en la pantalla de tu teléfono o computadora. Es muy útil cuando quieres guardar una receta, un comprobante de pago, las instrucciones de un correo, o simplemente compartir algo que estás viendo con alguien más.

Tomar capturas de pantalla es muy fácil una vez que sabes qué botones presionar. Cada dispositivo usa una combinación diferente, pero el resultado es el mismo: una imagen de todo lo que está en tu pantalla en ese momento.

En un iPhone con Face ID (sin botón de inicio), presiona al mismo tiempo el botón lateral derecho y el botón de subir volumen. Suéltalos rápido. Verás una pequeña imagen de la captura aparecer en la esquina inferior izquierda de la pantalla. Si tienes un iPhone con botón de inicio, presiona al mismo tiempo el botón de inicio y el botón de encendido.

En un teléfono Android, presiona al mismo tiempo el botón de encendido y el botón de bajar volumen. Mantenlos presionados por un segundo y suéltalos. Escucharás un sonido de cámara o verás una animación en la pantalla.

En una computadora con Windows, presiona la tecla Windows + la tecla Impr Pant (Print Screen). La captura se guardará en la carpeta Imágenes > Capturas de pantalla. También puedes presionar Windows + Shift + S para seleccionar solo una parte de la pantalla.

En una Mac, presiona Command + Shift + 3 para capturar toda la pantalla, o Command + Shift + 4 para seleccionar un área específica. La captura aparecerá en tu escritorio.

Todas las capturas de pantalla se guardan automáticamente. En tu teléfono, las encontrarás en la aplicación de Fotos.`,
    steps: [
      {
        title: 'Abre lo que quieres capturar',
        content: 'Primero, navega hasta la pantalla exacta que quieres guardar. Puede ser un mensaje, una página web, un recibo, un mapa, una receta, o cualquier cosa que aparezca en tu pantalla.',
      },
      {
        title: 'Presiona los botones correctos según tu dispositivo',
        content: 'iPhone con Face ID: botón lateral + subir volumen. iPhone con botón de inicio: botón de inicio + botón de encendido. Android: botón de encendido + bajar volumen. Presiónalos al mismo tiempo y suéltalos rápido.',
      },
      {
        title: 'En computadora, usa los atajos de teclado',
        content: 'Windows: tecla Windows + Impr Pant para toda la pantalla, o Windows + Shift + S para seleccionar un área. Mac: Command + Shift + 3 para toda la pantalla, o Command + Shift + 4 para seleccionar un área.',
      },
      {
        title: 'Confirma que la captura se tomó correctamente',
        content: 'En iPhone, verás una miniatura en la esquina inferior izquierda. En Android, verás una animación breve. En computadoras, escucharás un sonido o verás una notificación.',
      },
      {
        title: 'Encuentra tu captura de pantalla',
        content: 'En iPhone y Android: abre la app Fotos (o Galería) y busca en el álbum "Capturas de pantalla". En Windows: ve a la carpeta Imágenes > Capturas de pantalla. En Mac: busca en el Escritorio.',
      },
      {
        title: 'Comparte tu captura de pantalla',
        content: 'Abre la captura, toca el botón de compartir (un cuadro con una flecha hacia arriba en iPhone, o tres puntos conectados en Android), y elige cómo enviarla: por mensaje de texto, WhatsApp, correo electrónico, etc.',
      },
    ],
  },

  // ─── 6. How to Use Zelle ────────────────────────────────────────────────────
  {
    slug: 'es-use-zelle',
    title: 'Cómo usar Zelle para enviar dinero',
    excerpt: 'Envía y recibe dinero al instante usando Zelle desde la aplicación de tu banco.',
    category: 'financial-tech' as any,
    tags: ['zelle', 'money', 'banking', 'payments', 'finance', 'beginner'],
    readTime: '5 min',
    thumbnailEmoji: '💸',
    difficulty: 'Beginner',
    publishedAt: '2026-04-16',
    body: `Zelle es una forma rápida y segura de enviar dinero directamente de tu cuenta de banco a la cuenta de otra persona. Es como darle dinero en efectivo a alguien, pero de forma digital. El dinero llega en minutos, no en días, y lo mejor de todo es que es gratis.

Zelle ya viene incluido en la aplicación de la mayoría de los bancos grandes de Estados Unidos como Chase, Bank of America, Wells Fargo, Capital One, Citi y muchos más. No necesitas descargar una aplicación adicional si tu banco ya lo tiene. Si tu banco no tiene Zelle integrado, puedes descargar la aplicación de Zelle por separado desde la App Store o Google Play.

Para enviar dinero, necesitas el número de teléfono o correo electrónico de la persona a quien quieres pagarle. No necesitas su número de cuenta bancaria. La persona debe tener una cuenta en un banco de Estados Unidos y estar registrada en Zelle.

Zelle es ideal para dividir la cuenta de un restaurante, pagarle a alguien por un servicio, enviar dinero a un familiar, o pagar la renta. Sin embargo, hay algo muy importante: una vez que envías dinero por Zelle, no puedes cancelar el pago si la persona ya lo recibió. Por eso, asegúrate siempre de que estás enviando dinero a la persona correcta.

Nunca uses Zelle para pagarle a alguien que no conoces personalmente. Los estafadores frecuentemente piden pagos por Zelle porque saben que no se pueden revertir. Si alguien que no conoces te pide que le pagues por Zelle, probablemente es una estafa.`,
    steps: [
      {
        title: 'Abre la aplicación de tu banco',
        content: 'Abre la app de tu banco en tu teléfono (Chase, Bank of America, Wells Fargo, etc.). Si no la tienes instalada, descárgala desde la App Store o Google Play. Inicia sesión con tu usuario y contraseña.',
      },
      {
        title: 'Busca la opción de Zelle dentro de tu banco',
        content: 'En la mayoría de los bancos, encontrarás Zelle en el menú principal, en la sección de "Transferencias" o "Enviar dinero". En Chase, busca "Pay & Transfer". En Bank of America, busca "Transfer" y luego "Send money with Zelle".',
      },
      {
        title: 'Registra tu número de teléfono o correo electrónico',
        content: 'La primera vez que uses Zelle, te pedirá que registres tu número de teléfono o dirección de correo electrónico. Este será el dato que otras personas usarán para enviarte dinero. Recibirás un código de verificación por mensaje de texto o correo.',
      },
      {
        title: 'Agrega a la persona que quieres pagarle',
        content: 'Toca "Enviar" y escribe el número de teléfono o correo electrónico de la persona. Si ya está registrada en Zelle, verás su nombre. Verifica que sea la persona correcta antes de continuar.',
      },
      {
        title: 'Ingresa la cantidad y envía el dinero',
        content: 'Escribe la cantidad que deseas enviar. Puedes agregar una nota como "Para la cena" o "Renta de abril". Revisa todo cuidadosamente y toca "Enviar". El dinero llegará en minutos.',
      },
      {
        title: 'Protégete de estafas con Zelle',
        content: 'Solo envía dinero a personas que conoces y en las que confías. Nunca uses Zelle para compras en línea con desconocidos. Si alguien te pide dinero por Zelle y no lo conoces personalmente, no lo hagas — es probablemente una estafa.',
      },
    ],
  },

  // ─── 7. How to Set Up Apple Pay / Google Pay ────────────────────────────────
  {
    slug: 'es-setup-apple-google-pay',
    title: 'Cómo configurar Apple Pay o Google Pay',
    excerpt: 'Paga en tiendas y en línea con tu teléfono de forma rápida y segura usando Apple Pay o Google Pay.',
    category: 'financial-tech' as any,
    tags: ['apple-pay', 'google-pay', 'mobile-payment', 'contactless', 'finance', 'beginner'],
    readTime: '5 min',
    thumbnailEmoji: '💳',
    difficulty: 'Beginner',
    publishedAt: '2026-04-16',
    body: `Apple Pay y Google Pay son formas de pagar en tiendas usando tu teléfono en lugar de una tarjeta de crédito o débito física. Funcionan acercando tu teléfono a la terminal de pago — esa maquinita donde normalmente pasas tu tarjeta. Es más rápido y, en muchos casos, más seguro que usar la tarjeta directamente.

Estos servicios son gratuitos y funcionan en millones de tiendas en Estados Unidos, incluyendo Walmart, Target, Walgreens, McDonald's, Subway, gasolineras y muchas más. También puedes usarlos para comprar cosas en aplicaciones y sitios web.

La seguridad es una de las grandes ventajas. Cuando pagas con Apple Pay o Google Pay, la tienda nunca ve tu número de tarjeta real. En su lugar, tu teléfono crea un número temporal que se usa solo para esa compra. Además, necesitas desbloquear tu teléfono con tu cara, huella digital o código para autorizar cada pago.

Para configurar Apple Pay en tu iPhone, necesitas agregar una tarjeta de crédito o débito. Puedes tomar una foto de tu tarjeta con la cámara del teléfono y el sistema leerá los números automáticamente. Tu banco verificará la tarjeta y en pocos minutos estará lista para usar.

Para Google Pay en Android, el proceso es muy similar. Descargas la aplicación Google Wallet desde Google Play, agregas tu tarjeta y listo. Algunos teléfonos Android ya vienen con Google Wallet preinstalado.

Aunque tengas tu tarjeta en tu teléfono, tu tarjeta física seguirá funcionando normalmente. Tener Apple Pay o Google Pay es simplemente una opción adicional para pagar.`,
    steps: [
      {
        title: 'Abre la aplicación de pagos en tu teléfono',
        content: 'En iPhone: abre la app "Wallet" (Cartera) — tiene un ícono de tarjeta de crédito. En Android: busca y abre "Google Wallet". Si no la tienes, descárgala gratis desde Google Play Store.',
      },
      {
        title: 'Agrega tu tarjeta de crédito o débito',
        content: 'Toca el botón "+" o "Agregar tarjeta". Puedes usar la cámara de tu teléfono para escanear la tarjeta o escribir los números manualmente. Ingresa el nombre, número de tarjeta, fecha de vencimiento y código de seguridad (CVV).',
      },
      {
        title: 'Verifica tu tarjeta con el banco',
        content: 'Tu banco necesita verificar que eres el dueño de la tarjeta. Puede enviarte un código por mensaje de texto, correo electrónico o llamarte. Ingresa el código cuando lo recibas. Algunos bancos verifican automáticamente.',
      },
      {
        title: 'Configura tu método de autenticación',
        content: 'Para proteger tus pagos, asegúrate de tener activado Face ID, Touch ID (huella digital) o un código de acceso en tu teléfono. Esto evita que alguien más pueda hacer pagos con tu teléfono.',
      },
      {
        title: 'Haz tu primer pago en una tienda',
        content: 'En la caja, busca el símbolo de pago sin contacto (ondas como WiFi). En iPhone: acerca el teléfono a la terminal y mira la pantalla para confirmar con Face ID. En Android: desbloquea el teléfono y acércalo a la terminal.',
      },
      {
        title: 'Usa Apple Pay o Google Pay en compras por internet',
        content: 'Cuando compres en línea o en una app, busca el botón "Pagar con Apple Pay" o "Pagar con Google Pay". Tócalo y confirma con tu cara, huella o código. No necesitas escribir los números de tu tarjeta.',
      },
    ],
  },

  // ─── 8. How to Block Spam Calls ─────────────────────────────────────────────
  {
    slug: 'es-block-spam-calls',
    title: 'Cómo bloquear llamadas no deseadas',
    excerpt: 'Deja de recibir llamadas molestas de estafadores y vendedores en tu teléfono celular.',
    category: 'phone-guides' as any,
    tags: ['spam', 'calls', 'block', 'phone', 'scam', 'beginner'],
    readTime: '5 min',
    thumbnailEmoji: '🚫',
    difficulty: 'Beginner',
    publishedAt: '2026-04-16',
    body: `Las llamadas no deseadas son una de las molestias más grandes de tener un teléfono celular. Pueden ser vendedores que quieren ofrecerte algo, grabaciones automáticas (llamadas "robocalls"), o peor aún, estafadores tratando de robarte información o dinero. En Estados Unidos, los estadounidenses reciben miles de millones de llamadas spam cada mes.

La buena noticia es que hay varias formas de reducir significativamente estas llamadas molestas. Tu teléfono tiene herramientas integradas para bloquear números específicos y filtrar llamadas sospechosas, y hay servicios gratuitos del gobierno que también pueden ayudar.

Lo primero que debes hacer es registrar tu número en la Lista Nacional "No Llame" (National Do Not Call Registry) del gobierno federal. Es gratis y puedes hacerlo llamando al 1-888-382-1222 desde el teléfono que quieres registrar, o visitando donotcall.gov. Esto reduce las llamadas de vendedores legítimos, aunque no detiene a los estafadores ilegales.

En tu iPhone, puedes activar "Silenciar llamadas desconocidas" en Ajustes > Teléfono. Esto envía automáticamente al buzón de voz las llamadas de números que no están en tus contactos. Las llamadas legítimas dejarán un mensaje de voz. En Android, abre la app Teléfono, toca los tres puntos > Configuración > Identificador de llamadas y spam, y activa "Filtrar llamadas spam".

Tu compañía de teléfono también ofrece herramientas gratuitas. T-Mobile tiene Scam Shield, AT&T tiene ActiveArmor, y Verizon tiene Call Filter. Estas aplicaciones identifican y bloquean llamadas spam automáticamente. Descarga la aplicación correspondiente a tu compañía desde la App Store o Google Play.

Si recibes una llamada sospechosa, nunca presiones ningún número cuando una grabación te lo pida, ya que eso confirma que tu número está activo y recibirás más llamadas.`,
    steps: [
      {
        title: 'Regístrate en la Lista Nacional "No Llame"',
        content: 'Llama al 1-888-382-1222 desde tu teléfono celular o visita donotcall.gov. Es un servicio gratuito del gobierno que reduce las llamadas de vendedores. Tu registro no expira.',
      },
      {
        title: 'Activa el filtro de llamadas en tu teléfono',
        content: 'En iPhone: Ajustes > Teléfono > Silenciar llamadas desconocidas. En Android: abre la app Teléfono > tres puntos > Configuración > Identificador de llamadas y spam > activa "Filtrar llamadas spam".',
      },
      {
        title: 'Descarga la app de protección de tu compañía',
        content: 'T-Mobile: descarga "Scam Shield". AT&T: descarga "ActiveArmor". Verizon: descarga "Call Filter". Estas aplicaciones son gratuitas y bloquean automáticamente llamadas identificadas como spam.',
      },
      {
        title: 'Bloquea números específicos que te molestan',
        content: 'En iPhone: abre Recientes, toca la "i" junto al número > "Bloquear este contacto". En Android: mantén presionado el número en el historial de llamadas > "Bloquear número". El número ya no podrá llamarte.',
      },
      {
        title: 'No interactúes con llamadas sospechosas',
        content: 'Si contestas y escuchas una grabación, cuelga inmediatamente. Nunca presiones ningún número (ni siquiera para "salir de la lista"). Nunca des información personal por teléfono a alguien que te llamó a ti.',
      },
      {
        title: 'Reporta las llamadas fraudulentas',
        content: 'Reporta llamadas estafa a la FTC en reportfraud.ftc.gov o llamando al 1-877-382-4357. En tu teléfono, marca la llamada como spam para ayudar a que otros también estén protegidos.',
      },
    ],
  },

  // ─── 9. How to Use WhatsApp Video Calls ─────────────────────────────────────
  {
    slug: 'es-whatsapp-video-calls',
    title: 'Cómo hacer videollamadas en WhatsApp',
    excerpt: 'Haz videollamadas gratuitas con familiares y amigos usando WhatsApp en tu teléfono.',
    category: 'communication' as any,
    tags: ['whatsapp', 'video-call', 'communication', 'messaging', 'beginner'],
    readTime: '4 min',
    thumbnailEmoji: '📹',
    difficulty: 'Beginner',
    publishedAt: '2026-04-16',
    body: `WhatsApp es una de las aplicaciones más populares del mundo para comunicarse, especialmente entre familias hispanas en Estados Unidos y sus seres queridos en otros países. Una de sus mejores funciones es la videollamada, que te permite ver y hablar con alguien cara a cara sin importar dónde esté, totalmente gratis.

Las videollamadas de WhatsApp usan internet (WiFi o datos celulares), no minutos de tu plan telefónico. Esto significa que puedes hacer una videollamada a México, El Salvador, Colombia, República Dominicana o cualquier otro país sin pagar ni un centavo adicional, siempre y cuando tengas conexión a internet.

Para usar WhatsApp, ambas personas deben tener la aplicación instalada en su teléfono. Puedes descargarla gratis desde la App Store (iPhone) o Google Play (Android). Al configurarla por primera vez, necesitas verificar tu número de teléfono con un código que llega por mensaje de texto.

Una vez configurado, WhatsApp importa automáticamente los contactos de tu teléfono que también usan WhatsApp. Así que si tu hijo, tu hermana o tu comadre ya tienen WhatsApp, aparecerán en tu lista de contactos de la aplicación.

Las videollamadas pueden ser entre dos personas o en grupo con hasta 8 personas al mismo tiempo. Esto es perfecto para reuniones familiares virtuales, cumpleaños o simplemente para platicar con varios familiares a la vez.

Para la mejor calidad de video, te recomendamos usar WiFi en lugar de datos celulares, y estar en un lugar con buena iluminación para que la otra persona te vea bien.`,
    steps: [
      {
        title: 'Descarga e instala WhatsApp',
        content: 'Abre la App Store (iPhone) o Google Play Store (Android) y busca "WhatsApp". Descarga la aplicación gratis. Ábrela y sigue las instrucciones para verificar tu número de teléfono con el código que recibirás por texto.',
      },
      {
        title: 'Permite el acceso a contactos y cámara',
        content: 'WhatsApp te pedirá permiso para acceder a tus contactos, cámara y micrófono. Acepta todos los permisos para poder hacer videollamadas. Sin estos permisos, la app no puede funcionar correctamente.',
      },
      {
        title: 'Busca a la persona que quieres llamar',
        content: 'Abre WhatsApp y toca la pestaña "Llamadas" en la parte inferior de la pantalla. Toca el ícono de teléfono con un "+" para hacer una nueva llamada. Busca el nombre de la persona en tu lista de contactos.',
      },
      {
        title: 'Inicia la videollamada',
        content: 'Junto al nombre de la persona, verás dos íconos: un teléfono (llamada de voz) y una cámara de video (videollamada). Toca el ícono de la cámara de video para iniciar la videollamada. Espera a que la otra persona conteste.',
      },
      {
        title: 'Durante la llamada: controles básicos',
        content: 'Durante la videollamada puedes: silenciar tu micrófono (ícono de micrófono), apagar tu cámara (ícono de cámara), cambiar entre cámara frontal y trasera (ícono de flechas), o colgar (botón rojo).',
      },
      {
        title: 'Haz una videollamada grupal',
        content: 'Durante una videollamada, toca el botón "+" para agregar más personas (hasta 8 en total). También puedes iniciar una llamada grupal desde un grupo de chat tocando el ícono de cámara en la esquina superior.',
      },
    ],
  },

  // ─── 10. How to Set Up Medicare.gov ─────────────────────────────────────────
  {
    slug: 'es-setup-medicare-gov',
    title: 'Cómo usar Medicare.gov',
    excerpt: 'Crea tu cuenta en Medicare.gov para revisar tu cobertura, buscar médicos y manejar tus beneficios.',
    category: 'government-civic' as any,
    tags: ['medicare', 'healthcare', 'government', 'insurance', 'seniors', 'beginner'],
    readTime: '6 min',
    thumbnailEmoji: '🏥',
    difficulty: 'Beginner',
    publishedAt: '2026-04-16',
    body: `Medicare.gov es el sitio web oficial del gobierno federal donde puedes manejar todo lo relacionado con tu seguro médico de Medicare. Si tienes 65 años o más, o si tienes ciertas discapacidades, probablemente calificas para Medicare. Este sitio te permite revisar tu cobertura, buscar médicos que acepten Medicare, comparar planes, y verificar tus reclamaciones.

Tener una cuenta en Medicare.gov te da acceso a información importante sin tener que llamar por teléfono y esperar en la línea. Puedes ver qué servicios cubre tu plan, cuánto has pagado, cuánto cubrió Medicare, y encontrar doctores y hospitales cerca de ti.

Para crear tu cuenta, necesitas tu número de Medicare (que está en tu tarjeta roja, blanca y azul de Medicare) y tu información de login.gov o ID.me. Estas son las formas oficiales que usa el gobierno para verificar tu identidad en línea. Si no tienes una cuenta de login.gov o ID.me, la crearás durante el proceso.

Necesitarás: tu tarjeta de Medicare, tu licencia de conducir o identificación con foto, tu número de Seguro Social, y un teléfono celular o correo electrónico para recibir códigos de verificación. Todo el proceso toma alrededor de 15 a 20 minutos la primera vez.

Una vez que tengas tu cuenta, puedes acceder desde cualquier computadora, tablet o teléfono. Te recomendamos guardar tu nombre de usuario y contraseña en un lugar seguro.

Si necesitas ayuda, puedes llamar al 1-800-MEDICARE (1-800-633-4227). El servicio está disponible las 24 horas, los 7 días de la semana, y tienen asistencia en español.`,
    steps: [
      {
        title: 'Reúne los documentos que necesitas',
        content: 'Antes de comenzar, ten a la mano: tu tarjeta de Medicare (número que empieza con letras y números), tu licencia de conducir o ID con foto, tu número de Seguro Social, y tu teléfono celular para recibir códigos de verificación.',
      },
      {
        title: 'Visita Medicare.gov',
        content: 'Abre tu navegador de internet y escribe medicare.gov en la barra de direcciones. Busca el botón "Log in" o "Iniciar sesión" en la esquina superior derecha. El sitio tiene opción de verse en español.',
      },
      {
        title: 'Crea tu cuenta con login.gov o ID.me',
        content: 'Medicare usa login.gov para verificar tu identidad. Si no tienes una cuenta, haz clic en "Create an account". Necesitarás ingresar tu correo electrónico, crear una contraseña segura, y verificar tu identidad con tu licencia o ID.',
      },
      {
        title: 'Verifica tu identidad',
        content: 'Sigue los pasos para verificar tu identidad. Puede que te pidan tomar una foto de tu licencia de conducir y una selfie. Este paso es para proteger tu información personal. Solo tienes que hacerlo una vez.',
      },
      {
        title: 'Conecta tu información de Medicare',
        content: 'Una vez verificada tu identidad, ingresa tu número de Medicare cuando te lo soliciten. El sistema conectará tu cuenta con tu información de Medicare. Ahora puedes ver tu cobertura, médicos y reclamaciones.',
      },
      {
        title: 'Explora tu cuenta de Medicare',
        content: 'Desde tu cuenta puedes: revisar qué cubre tu plan, buscar médicos y hospitales que acepten Medicare en tu área, ver el historial de tus reclamaciones, y comparar planes durante el período de inscripción abierta (15 de octubre al 7 de diciembre).',
      },
    ],
  },

  // ─── 11. How to File Taxes Free Online ──────────────────────────────────────
  {
    slug: 'es-file-taxes-free',
    title: 'Cómo declarar impuestos gratis por internet',
    excerpt: 'Presenta tu declaración de impuestos federales gratis usando herramientas oficiales del IRS.',
    category: 'financial-tech' as any,
    tags: ['taxes', 'irs', 'free-file', 'government', 'finance', 'beginner'],
    readTime: '7 min',
    thumbnailEmoji: '📋',
    difficulty: 'Beginner',
    publishedAt: '2026-04-16',
    body: `Declarar tus impuestos no tiene que ser caro ni complicado. El IRS (Internal Revenue Service, la agencia de impuestos del gobierno federal) ofrece varias opciones para que presentes tu declaración de impuestos completamente gratis si cumples ciertos requisitos. No necesitas pagar a un contador ni comprar software costoso.

La opción principal es IRS Free File, disponible en irs.gov/freefile. Si tu ingreso anual es de $84,000 o menos, puedes usar uno de los programas de software gratuitos que el IRS ofrece en colaboración con empresas como TaxAct y otros. Estos programas te guían paso a paso con preguntas sencillas en español.

Otra opción nueva es IRS Direct File, que es un sistema creado directamente por el IRS. Es completamente gratuito sin importar tu nivel de ingreso, pero actualmente solo está disponible en ciertos estados. Revisa si tu estado participa en directfile.irs.gov.

Para declarar tus impuestos, necesitarás: tu formulario W-2 de cada empleador (lo recibes en enero), cualquier formulario 1099 de ingresos adicionales, tu número de Seguro Social, y la información de tu cuenta bancaria si quieres recibir tu reembolso por depósito directo, que es la forma más rápida.

Si prefieres ayuda en persona, el programa VITA (Volunteer Income Tax Assistance) ofrece preparación gratuita de impuestos en comunidades de todo el país. Los voluntarios hablan español y te ayudan a completar tu declaración. Busca un sitio VITA cerca de ti en irs.gov/vita.

La fecha límite para declarar impuestos federales es generalmente el 15 de abril de cada año. Si necesitas más tiempo, puedes solicitar una extensión gratis, pero recuerda que la extensión es para presentar, no para pagar — si debes impuestos, el pago sigue siendo el 15 de abril.`,
    steps: [
      {
        title: 'Reúne tus documentos de impuestos',
        content: 'Necesitas: tu formulario W-2 de cada trabajo, formularios 1099 (si tienes ingresos por cuenta propia o inversiones), tu número de Seguro Social, números de Seguro Social de tus dependientes, y la información de tu cuenta de banco para el depósito directo.',
      },
      {
        title: 'Elige tu método de declaración gratuita',
        content: 'Visita irs.gov/freefile para ver las opciones. Si ganas $84,000 o menos, usa uno de los programas de software gratuitos. También puedes usar IRS Direct File en directfile.irs.gov si está disponible en tu estado.',
      },
      {
        title: 'Crea una cuenta y comienza',
        content: 'Selecciona el programa que quieras y crea una cuenta. El sistema te hará preguntas sencillas sobre tu situación: estado civil, dependientes, ingresos, etc. Responde una pregunta a la vez — no necesitas saber de impuestos.',
      },
      {
        title: 'Ingresa tu información de ingresos',
        content: 'El programa te pedirá la información de tus formularios W-2 y 1099. Copia los números exactamente como aparecen en los formularios. Algunos programas te permiten importar la información directamente de tu empleador.',
      },
      {
        title: 'Revisa y envía tu declaración',
        content: 'El programa calculará automáticamente si te deben un reembolso o si debes dinero. Revisa toda la información cuidadosamente antes de enviar. Necesitarás firmar electrónicamente con tu AGI (ingreso bruto ajustado) del año anterior.',
      },
      {
        title: 'Rastrea tu reembolso',
        content: 'Después de enviar, puedes rastrear el estado de tu reembolso en irs.gov/refunds o con la aplicación IRS2Go. Si elegiste depósito directo, tu reembolso puede llegar en 21 días o menos. Un cheque por correo tarda más.',
      },
      {
        title: 'Busca ayuda gratuita en persona si la necesitas',
        content: 'El programa VITA ofrece preparación de impuestos gratis con voluntarios que hablan español. Visita irs.gov/vita para encontrar un sitio cerca de ti. También puedes llamar al IRS al 1-800-829-1040 para ayuda en español.',
      },
    ],
  },

  // ─── 12. How to Set Up Alexa ────────────────────────────────────────────────
  {
    slug: 'es-setup-alexa',
    title: 'Cómo configurar Amazon Alexa',
    excerpt: 'Configura tu bocina Echo con Alexa para controlar tu hogar, escuchar música y obtener respuestas.',
    category: 'smart-home' as any,
    tags: ['alexa', 'echo', 'amazon', 'smart-home', 'voice-assistant', 'beginner'],
    readTime: '5 min',
    thumbnailEmoji: '🔊',
    difficulty: 'Beginner',
    publishedAt: '2026-04-16',
    body: `Amazon Alexa es un asistente de voz que vive dentro de las bocinas Echo de Amazon. Puedes hablarle para pedirle que ponga música, te diga el clima, ponga alarmas, haga llamadas, controle las luces de tu casa y mucho más — todo con solo usar tu voz, sin tocar nada.

Para empezar, necesitas una bocina Amazon Echo (como el Echo Dot, Echo, o Echo Show), la aplicación Amazon Alexa en tu teléfono, una cuenta de Amazon (puedes usar la misma que usas para comprar en Amazon.com), y una conexión WiFi. Si no tienes cuenta de Amazon, puedes crear una gratis.

Lo mejor de Alexa es que habla español. Puedes configurarla para que entienda español, inglés, o ambos idiomas al mismo tiempo. Así puedes hablarle en el idioma que te sea más cómodo.

Para hablar con Alexa, solo di "Alexa" seguido de lo que quieres. Por ejemplo: "Alexa, ¿qué hora es?", "Alexa, pon música mexicana", "Alexa, ¿cómo está el clima hoy?", "Alexa, pon un timer de 10 minutos", o "Alexa, llama a María". No necesitas presionar ningún botón.

Alexa también puede ayudar con recordatorios de medicamentos, algo muy útil para la salud. Puedes decir "Alexa, recuérdame tomar mi medicina a las 8 de la mañana todos los días" y te avisará cada día a esa hora.

Si tienes un Echo Show (el que tiene pantalla), también puedes hacer videollamadas, ver recetas de cocina con video, y ver las cámaras de seguridad de tu casa.`,
    steps: [
      {
        title: 'Conecta tu bocina Echo y descarga la app',
        content: 'Saca la bocina Echo de la caja y conéctala a la corriente. La luz se pondrá naranja cuando esté lista. En tu teléfono, descarga la app "Amazon Alexa" gratis desde la App Store o Google Play.',
      },
      {
        title: 'Inicia sesión con tu cuenta de Amazon',
        content: 'Abre la app Amazon Alexa e inicia sesión con tu cuenta de Amazon (la misma que usas para comprar). Si no tienes una cuenta de Amazon, puedes crear una gratis dentro de la app.',
      },
      {
        title: 'Conecta la bocina a tu WiFi',
        content: 'La app te guiará para conectar tu Echo al WiFi. Selecciona tu red WiFi de la lista e ingresa la contraseña. Espera un momento mientras se conecta. Alexa te confirmará con un mensaje de voz cuando esté lista.',
      },
      {
        title: 'Configura el idioma español',
        content: 'En la app, ve a Dispositivos > selecciona tu Echo > Idioma. Puedes elegir "Español (Estados Unidos)" o "Español e Inglés" para que Alexa entienda ambos idiomas. Alexa te responderá en el idioma en que le hables.',
      },
      {
        title: 'Prueba tu primer comando de voz',
        content: 'Di "Alexa, ¿qué hora es?" o "Alexa, pon música". Si Alexa responde, todo está funcionando correctamente. Prueba también: "Alexa, cuéntame un chiste" o "Alexa, ¿cómo está el clima?".',
      },
      {
        title: 'Configura funciones útiles para tu día a día',
        content: 'Prueba configurar alarmas ("Alexa, pon una alarma para las 7 de la mañana"), recordatorios ("Alexa, recuérdame tomar mi medicina a las 9"), temporizadores de cocina ("Alexa, pon un timer de 15 minutos"), y listas de compras ("Alexa, agrega leche a mi lista de compras").',
      },
    ],
  },

  // ─── 13. How to Use a Patient Portal ────────────────────────────────────────
  {
    slug: 'es-patient-portal-mychart',
    title: 'Cómo usar el portal de pacientes MyChart',
    excerpt: 'Accede a tus resultados médicos, programa citas y comunícate con tu doctor usando MyChart.',
    category: 'health-tech' as any,
    tags: ['mychart', 'patient-portal', 'healthcare', 'medical', 'health', 'beginner'],
    readTime: '6 min',
    thumbnailEmoji: '🩺',
    difficulty: 'Beginner',
    publishedAt: '2026-04-16',
    body: `MyChart es un portal de pacientes en línea que te permite acceder a tu información médica desde tu teléfono o computadora. Miles de hospitales y clínicas en Estados Unidos usan MyChart, incluyendo sistemas como Kaiser Permanente, Cleveland Clinic, y muchos centros médicos locales. Si tu doctor usa MyChart, puedes ver tus resultados de laboratorio, programar citas, pedir recetas, y enviarle mensajes a tu médico sin tener que llamar por teléfono.

Uno de los beneficios más grandes de MyChart es que puedes ver tus resultados de laboratorio tan pronto como estén listos, sin esperar a que tu doctor te llame. También puedes ver tu historial médico, vacunas, medicamentos actuales, y notas de tus visitas anteriores.

Para empezar, necesitas que tu consultorio médico o hospital te dé un código de activación. Este código viene en un papel que recibes durante tu visita, o puedes pedirlo llamando a la oficina de tu doctor. Algunos consultorios también te permiten crear tu cuenta directamente en línea verificando tu identidad.

MyChart también tiene la función de "Proxy Access" que permite que un familiar de confianza vea tu información médica y te ayude a manejar tus citas. Esto es útil si un hijo o familiar te ayuda con temas de salud.

La aplicación está disponible en español. Puedes cambiar el idioma en la configuración de tu cuenta. Los mensajes a tu doctor se envían en el idioma que escribas.

Recuerda: MyChart no es para emergencias. Si tienes una emergencia médica, llama al 911. Para situaciones urgentes pero que no son emergencias, muchos portales ofrecen visitas virtuales por video con un doctor.`,
    steps: [
      {
        title: 'Obtén tu código de activación',
        content: 'Llama a la oficina de tu doctor o al hospital y pide tu código de activación de MyChart. Algunos consultorios lo dan impreso después de tu visita. También pregunta si puedes crearte la cuenta directamente en línea.',
      },
      {
        title: 'Descarga la aplicación MyChart',
        content: 'Busca "MyChart" en la App Store (iPhone) o Google Play (Android) y descárgala gratis. También puedes acceder desde una computadora visitando el sitio web de MyChart de tu hospital.',
      },
      {
        title: 'Crea tu cuenta con el código de activación',
        content: 'Abre la app y toca "Sign Up" o "Registrarse". Selecciona tu hospital o sistema de salud de la lista. Ingresa tu código de activación y sigue las instrucciones para crear tu nombre de usuario y contraseña.',
      },
      {
        title: 'Cambia el idioma a español',
        content: 'Dentro de la app, ve a tu perfil o configuración y busca la opción de idioma. Selecciona "Español" para que los menús y la interfaz aparezcan en español. Los resultados médicos pueden seguir apareciendo en inglés.',
      },
      {
        title: 'Explora las funciones principales',
        content: 'Revisa las secciones más útiles: "Resultados" para ver análisis de sangre y laboratorios, "Citas" para programar o ver próximas citas, "Medicamentos" para ver tus recetas actuales, y "Mensajes" para escribirle a tu doctor.',
      },
      {
        title: 'Envía un mensaje a tu doctor',
        content: 'En la sección "Mensajes", toca "Nuevo mensaje", selecciona a tu doctor y escribe tu pregunta o preocupación. Los doctores generalmente responden en 1 a 3 días hábiles. Para asuntos urgentes, llama a la oficina directamente.',
      },
      {
        title: 'Configura el acceso para un familiar (opcional)',
        content: 'Si necesitas que un hijo o familiar te ayude, pregunta en la oficina de tu doctor sobre "Proxy Access". Esto les permite ver tu información y ayudarte a programar citas. Deberás firmar un formulario de autorización.',
      },
    ],
  },

  // ─── 14. How to Set Up a New iPhone ─────────────────────────────────────────
  {
    slug: 'es-setup-new-iphone',
    title: 'Cómo configurar un iPhone nuevo',
    excerpt: 'Guía paso a paso para configurar tu iPhone nuevo y transferir tus datos del teléfono anterior.',
    category: 'phone-guides' as any,
    tags: ['iphone', 'apple', 'setup', 'phone', 'ios', 'beginner'],
    readTime: '7 min',
    thumbnailEmoji: '🍎',
    difficulty: 'Beginner',
    publishedAt: '2026-04-16',
    body: `Configurar un iPhone nuevo puede parecer intimidante, pero Apple ha diseñado el proceso para que sea lo más sencillo posible. Ya sea que vengas de otro iPhone o sea tu primer teléfono Apple, esta guía te llevará paso a paso por todo el proceso. Al terminar, tendrás tu nuevo teléfono listo para usar con todas tus fotos, contactos y aplicaciones.

Lo primero que necesitas es asegurarte de que tu iPhone nuevo esté cargado. Sácalo de la caja, inserta tu tarjeta SIM (si tu compañía de teléfono te dio una), y enciende el teléfono manteniendo presionado el botón lateral derecho hasta que aparezca el logo de Apple.

Cuando veas la pantalla de "Hola" en diferentes idiomas, desliza hacia arriba o presiona el botón de inicio para comenzar. Selecciona "Español" como tu idioma y "Estados Unidos" como tu país. Luego conecta el teléfono a tu red WiFi.

Si vienes de otro iPhone, la forma más fácil de transferir todo es usando "Inicio rápido". Coloca tu iPhone viejo cerca del nuevo (ambos deben tener iOS 12.4 o posterior). El iPhone viejo detectará el nuevo automáticamente y te ofrecerá transferir todo: fotos, apps, mensajes, contactos y configuraciones. Este proceso puede tomar de 30 minutos a una hora dependiendo de cuánta información tengas.

Necesitarás tu Apple ID (tu cuenta de Apple) y su contraseña. Si no recuerdas tu contraseña, puedes restablecerla en iforgot.apple.com. Tu Apple ID es crucial porque conecta todos tus servicios de Apple: iCloud, App Store, iMessage y FaceTime.

No olvides configurar Face ID (reconocimiento facial) o crear un código de acceso de 6 dígitos para proteger tu teléfono. También te recomendamos activar "Buscar mi iPhone" que te ayuda a encontrar tu teléfono si lo pierdes.`,
    steps: [
      {
        title: 'Enciende tu iPhone nuevo',
        content: 'Saca el iPhone de la caja y cárgalo si es necesario. Mantén presionado el botón lateral (a la derecha) hasta que aparezca el logo de Apple. Cuando veas "Hola" en la pantalla, desliza hacia arriba para comenzar.',
      },
      {
        title: 'Elige tu idioma y región',
        content: 'Selecciona "Español" de la lista de idiomas y "Estados Unidos" como tu país o región. Esto configura el formato de fecha, moneda y teclado correctamente para uso en EE.UU.',
      },
      {
        title: 'Conecta a WiFi y transfiere tus datos',
        content: 'Selecciona tu red WiFi e ingresa la contraseña. Si tienes un iPhone anterior, acércalo al nuevo y sigue las instrucciones de "Inicio rápido" para transferir todo automáticamente. Si es tu primer iPhone, selecciona "Configurar manualmente".',
      },
      {
        title: 'Inicia sesión con tu Apple ID',
        content: 'Ingresa tu Apple ID (generalmente tu correo electrónico) y contraseña. Si no tienes un Apple ID, toca "¿No tienes un Apple ID?" para crear uno gratis. Tu Apple ID conecta todos los servicios de Apple.',
      },
      {
        title: 'Configura Face ID y un código de acceso',
        content: 'Sigue las instrucciones para configurar Face ID moviendo tu cara en círculo frente a la cámara. También crea un código de acceso de 6 dígitos como respaldo. Esto protege tu teléfono si alguien lo encuentra.',
      },
      {
        title: 'Activa "Buscar mi iPhone" y iCloud',
        content: 'Cuando te pregunte sobre iCloud, actívalo para hacer copias de seguridad automáticas de tus fotos, contactos y datos. Activa "Buscar mi iPhone" para poder localizar tu teléfono si lo pierdes o te lo roban.',
      },
      {
        title: 'Personaliza y descarga tus apps favoritas',
        content: 'Tu iPhone ya viene con aplicaciones básicas. Abre la App Store para descargar las apps que necesites: WhatsApp, Facebook, tu app del banco, etc. Organiza tu pantalla de inicio moviendo las apps que más usas a la primera página.',
      },
    ],
  },

  // ─── 15. How to Set Up a New Android ────────────────────────────────────────
  {
    slug: 'es-setup-new-android',
    title: 'Cómo configurar un teléfono Android nuevo',
    excerpt: 'Configura tu teléfono Android nuevo paso a paso y transfiere tus fotos, contactos y aplicaciones.',
    category: 'phone-guides' as any,
    tags: ['android', 'samsung', 'google', 'setup', 'phone', 'beginner'],
    readTime: '7 min',
    thumbnailEmoji: '🤖',
    difficulty: 'Beginner',
    publishedAt: '2026-04-16',
    body: `Los teléfonos Android vienen en muchas marcas como Samsung, Google Pixel, Motorola, y OnePlus, pero el proceso de configuración inicial es muy similar en todos. Esta guía te ayudará a poner en marcha tu nuevo teléfono Android, ya sea que vengas de otro Android o de un iPhone.

Antes de empezar, asegúrate de tener tu tarjeta SIM (si tu compañía te dio una) y acceso a una red WiFi. También necesitarás tu cuenta de Google (tu correo de Gmail) y su contraseña. Si no tienes una cuenta de Google, la crearás durante la configuración.

Enciende tu teléfono nuevo manteniend presionado el botón de encendido hasta que la pantalla se ilumine. Selecciona "Español" como idioma y sigue las instrucciones en pantalla. El teléfono te pedirá que te conectes a WiFi — selecciona tu red e ingresa la contraseña.

Para transferir datos de tu teléfono anterior, Android te ofrece la opción de conectar ambos teléfonos con un cable USB o de transferir datos de forma inalámbrica. En teléfonos Samsung, la app "Smart Switch" facilita aún más el proceso y puede transferir datos incluso desde un iPhone.

Tu cuenta de Google es el corazón de tu teléfono Android. Con ella accedes a Gmail, Google Maps, Google Photos, YouTube, la Play Store y mucho más. Si ya tenías un teléfono Android, al iniciar sesión con la misma cuenta de Google, muchas de tus apps se descargarán automáticamente.

Tómate unos minutos para configurar la seguridad de tu teléfono: huella digital, reconocimiento facial, o al menos un PIN de 6 dígitos. También activa "Encontrar mi dispositivo" de Google para poder localizar tu teléfono si lo pierdes.`,
    steps: [
      {
        title: 'Enciende tu teléfono Android nuevo',
        content: 'Inserta tu tarjeta SIM si tienes una. Mantén presionado el botón de encendido (generalmente en el lado derecho) hasta que la pantalla se encienda. Sigue las instrucciones iniciales para seleccionar español como idioma.',
      },
      {
        title: 'Conéctate a WiFi',
        content: 'Selecciona tu red WiFi de la lista de redes disponibles e ingresa la contraseña. Necesitas WiFi para descargar actualizaciones y transferir datos. Si no tienes WiFi, puedes usar los datos de tu plan celular.',
      },
      {
        title: 'Transfiere datos de tu teléfono anterior',
        content: 'Si vienes de otro Android: conecta los teléfonos con cable USB o elige transferencia inalámbrica. Si vienes de iPhone: descarga la app "Pasar a Android" en tu iPhone. Samsung: usa Smart Switch para transferir todo.',
      },
      {
        title: 'Inicia sesión con tu cuenta de Google',
        content: 'Ingresa tu dirección de Gmail y contraseña. Si no tienes una cuenta de Google, toca "Crear cuenta" para hacer una gratis. Tu cuenta de Google sincroniza tus contactos, fotos, correo y apps automáticamente.',
      },
      {
        title: 'Configura la seguridad del teléfono',
        content: 'Configura al menos una forma de desbloqueo: huella digital (toca el sensor con tu dedo varias veces), reconocimiento facial, o un PIN de al menos 6 dígitos. Esto protege tu información si pierdes el teléfono.',
      },
      {
        title: 'Activa "Encontrar mi dispositivo"',
        content: 'Ve a Configuración > Seguridad > Encontrar mi dispositivo y actívalo. Esto te permite localizar tu teléfono en un mapa, hacerlo sonar, o borrar tus datos a distancia si lo pierdes o te lo roban.',
      },
      {
        title: 'Descarga tus aplicaciones favoritas',
        content: 'Abre Google Play Store y descarga las apps que necesitas: WhatsApp, Facebook, la app de tu banco, etc. Muchas apps se habrán instalado automáticamente si transferiste datos de tu teléfono anterior.',
      },
    ],
  },

  // ─── 16. How to Use Facebook Marketplace Safely ─────────────────────────────
  {
    slug: 'es-facebook-marketplace-safe',
    title: 'Cómo usar Facebook Marketplace de forma segura',
    excerpt: 'Compra y vende artículos cerca de ti en Facebook Marketplace protegiendo tu seguridad y tu dinero.',
    category: 'social-media' as any,
    tags: ['facebook', 'marketplace', 'safety', 'buy-sell', 'scam-prevention', 'beginner'],
    readTime: '6 min',
    thumbnailEmoji: '🛒',
    difficulty: 'Beginner',
    publishedAt: '2026-04-16',
    body: `Facebook Marketplace es como un mercado de pulgas digital donde puedes comprar y vender cosas cerca de ti: muebles, electrónicos, ropa, carros, y mucho más. Es gratis publicar anuncios y no hay comisiones como en eBay. Millones de personas lo usan todos los días en Estados Unidos.

Sin embargo, como en cualquier mercado, hay que tener cuidado. Aunque la mayoría de los vendedores y compradores son personas honestas, existen estafadores que buscan aprovecharse. Seguir unas reglas básicas de seguridad te protegerá de malas experiencias.

Para comprar, abre la app de Facebook y toca el ícono de Marketplace (una tiendita) en el menú. Puedes buscar artículos específicos o explorar categorías. Cada anuncio muestra el precio, fotos, descripción y el perfil del vendedor. Revisa el perfil del vendedor: ¿cuándo creó su cuenta? ¿Tiene amigos? ¿Ha vendido antes? Un perfil nuevo sin amigos ni actividad es sospechoso.

Para vender, toma fotos claras del artículo con buena iluminación, escribe una descripción honesta incluyendo cualquier defecto, pon un precio justo, y publica tu anuncio. Cuando alguien esté interesado, coordinarás por Messenger.

La regla de oro es: nunca envíes dinero por adelantado. Si un vendedor te pide que pagues por Zelle, CashApp, tarjeta de regalo, o criptomonedas antes de ver el artículo, es casi seguro una estafa. Siempre insiste en pagar en persona al momento de recoger el artículo.

Para encuentros en persona, elige un lugar público durante el día: el estacionamiento de una estación de policía, un centro comercial, o una gasolinera con cámaras. Muchas estaciones de policía tienen "zonas de intercambio seguro" designadas para este propósito. Nunca vayas solo a la casa de un desconocido.`,
    steps: [
      {
        title: 'Accede a Facebook Marketplace',
        content: 'Abre la app de Facebook en tu teléfono y toca el ícono de la tiendita (Marketplace) en el menú inferior. En computadora, busca "Marketplace" en el menú lateral izquierdo. Puedes buscar artículos por nombre o explorar categorías.',
      },
      {
        title: 'Investiga al vendedor antes de comprar',
        content: 'Toca el nombre del vendedor para ver su perfil. Revisa: ¿cuándo creó su cuenta de Facebook? ¿Tiene amigos y publicaciones reales? ¿Tiene calificaciones de ventas anteriores? Desconfía de perfiles nuevos sin actividad.',
      },
      {
        title: 'Comunícate solo por Facebook Messenger',
        content: 'Toda la comunicación debe ser por Messenger dentro de Facebook. Si el vendedor insiste en hablar por otro medio (WhatsApp, correo, texto), ten precaución. Facebook puede rastrear la conversación si algo sale mal.',
      },
      {
        title: 'Nunca pagues antes de ver el artículo',
        content: 'La regla más importante: NO envíes dinero por adelantado. No pagues por Zelle, CashApp, Venmo, tarjeta de regalo ni criptomonedas antes de tener el artículo en tus manos. Paga en efectivo al momento de recoger.',
      },
      {
        title: 'Reúnete en un lugar público y seguro',
        content: 'Encuentra al vendedor en un lugar público y durante el día: estacionamiento de una estación de policía (muchas tienen "zonas de intercambio"), Walmart, centro comercial, o gasolinera con cámaras. Nunca vayas solo a la casa de un desconocido.',
      },
      {
        title: 'Inspecciona el artículo antes de pagar',
        content: 'Revisa el artículo cuidadosamente. Enciéndelo si es electrónico, prueba todas las funciones, busca daños. Si el artículo no es lo que esperabas o el vendedor se niega a dejar que lo inspecciones, no compres y retírate.',
      },
      {
        title: 'Reporta anuncios o vendedores sospechosos',
        content: 'Si encuentras un anuncio fraudulento, toca los tres puntos en la publicación y selecciona "Reportar". Si fuiste víctima de una estafa, también reporta a la FTC en reportfraud.ftc.gov y presenta un reporte policial.',
      },
    ],
  },

  // ─── 17. How to Get Free Audiobooks from the Library ────────────────────────
  {
    slug: 'es-free-audiobooks-library',
    title: 'Cómo obtener audiolibros gratis de la biblioteca',
    excerpt: 'Escucha miles de audiolibros gratis usando tu tarjeta de biblioteca y la app Libby.',
    category: 'entertainment' as any,
    tags: ['audiobooks', 'library', 'libby', 'free', 'reading', 'entertainment', 'beginner'],
    readTime: '5 min',
    thumbnailEmoji: '🎧',
    difficulty: 'Beginner',
    publishedAt: '2026-04-16',
    body: `¿Sabías que puedes escuchar miles de audiolibros completamente gratis con tu tarjeta de biblioteca pública? Así es: las bibliotecas de Estados Unidos ofrecen libros digitales y audiolibros que puedes descargar desde tu teléfono sin tener que ir físicamente a la biblioteca. Todo lo que necesitas es una tarjeta de biblioteca válida y una aplicación gratuita llamada Libby.

Libby es una aplicación creada por OverDrive que funciona con la mayoría de las bibliotecas públicas del país. Tiene una colección enorme de audiolibros, libros electrónicos y revistas digitales en español e inglés. Puedes escuchar audiolibros mientras caminas, cocinas, haces ejercicio, o antes de dormir.

Si no tienes tarjeta de biblioteca, no te preocupes. Obtener una es fácil y gratis. Visita tu biblioteca local con una identificación con foto y un comprobante de domicilio (como una factura de servicios). En muchas bibliotecas, también puedes obtener una tarjeta digital completamente en línea sin tener que ir en persona.

Los audiolibros funcionan como un préstamo de la biblioteca: los "pides prestados" por un tiempo limitado (generalmente 14 o 21 días). Cuando se vence el préstamo, el libro simplemente desaparece de tu app — no hay multas por devolución tardía. Si no terminas un libro, puedes renovarlo si nadie más lo está esperando.

Algunos libros populares pueden tener lista de espera, similar a cuando vas a la biblioteca y un libro ya está prestado. Puedes ponerte en la lista y Libby te avisará cuando el libro esté disponible.

Libby también te permite ajustar la velocidad de narración, poner un temporizador para dormir, y marcar tu progreso. Es como tener una biblioteca entera en tu bolsillo.`,
    steps: [
      {
        title: 'Obtén tu tarjeta de biblioteca',
        content: 'Si aún no tienes una, visita tu biblioteca pública local con una identificación con foto y un comprobante de domicilio. Es gratis. Muchas bibliotecas también ofrecen tarjetas digitales que puedes obtener en línea desde su sitio web.',
      },
      {
        title: 'Descarga la aplicación Libby',
        content: 'Busca "Libby" en la App Store (iPhone) o Google Play (Android) y descárgala gratis. Libby es la aplicación oficial para préstamos digitales de bibliotecas. También funciona en tablets y computadoras.',
      },
      {
        title: 'Agrega tu biblioteca y tarjeta',
        content: 'Abre Libby y toca "Encontrar mi biblioteca". Escribe el nombre de tu ciudad o biblioteca. Selecciona tu biblioteca de la lista. Luego ingresa el número de tu tarjeta de biblioteca (está en la tarjeta física o en tu cuenta en línea).',
      },
      {
        title: 'Busca audiolibros en español',
        content: 'Usa el buscador para encontrar libros por título, autor o tema. Puedes filtrar por formato: selecciona "Audiolibros". Para encontrar libros en español, busca por título en español o usa el filtro de idioma si está disponible.',
      },
      {
        title: 'Pide prestado y empieza a escuchar',
        content: 'Toca "Pedir prestado" en el audiolibro que quieras. Si está disponible, se descargará y podrás escucharlo de inmediato. Si tiene lista de espera, toca "Reservar" y recibirás una notificación cuando esté disponible.',
      },
      {
        title: 'Disfruta las funciones de reproducción',
        content: 'Mientras escuchas puedes: ajustar la velocidad (más rápido o más lento), poner un temporizador de sueño para que se detenga después de cierto tiempo, agregar marcadores en partes importantes, y reanudar donde lo dejaste en cualquier dispositivo.',
      },
    ],
  },

  // ─── 18. How to Protect Your Phone if Stolen ───────────────────────────────
  {
    slug: 'es-protect-phone-stolen',
    title: 'Cómo proteger tu teléfono si lo roban',
    excerpt: 'Actúa rápido para proteger tu información personal si pierdes tu teléfono o te lo roban.',
    category: 'safety-guides' as any,
    tags: ['phone', 'theft', 'security', 'find-my-phone', 'safety', 'beginner'],
    readTime: '5 min',
    thumbnailEmoji: '🔒',
    difficulty: 'Beginner',
    publishedAt: '2026-04-16',
    body: `Perder tu teléfono o que te lo roben es una experiencia terrible, pero no solo por el valor del aparato. Tu teléfono contiene tus fotos personales, acceso a tu banco, correos electrónicos, cuentas de redes sociales y mucha información privada. Actuar rápido puede proteger toda esa información, incluso si no puedes recuperar el teléfono.

Lo más importante que puedes hacer es prepararte antes de que algo pase. Configura el rastreo de tu teléfono ahora mismo: "Buscar mi iPhone" en iPhone o "Encontrar mi dispositivo" en Android. Estas funciones te permiten localizar tu teléfono en un mapa, hacerlo sonar (incluso si está en silencio), bloquearlo remotamente, o borrar todos tus datos a distancia si es necesario.

Si tu teléfono ya fue robado o lo perdiste, lo primero que debes hacer es intentar localizarlo. Desde cualquier computadora o teléfono prestado, ve a icloud.com/find (iPhone) o google.com/android/find (Android). Inicia sesión con tu Apple ID o cuenta de Google. Si el teléfono está encendido y conectado a internet, verás su ubicación en un mapa.

Si no puedes recuperarlo, usa la opción de "Borrar dispositivo" para eliminar toda tu información remotamente. Esto protege tus fotos, cuentas bancarias y datos personales. Si tienes una copia de seguridad (iCloud o Google Drive), no perderás nada permanentemente.

También debes llamar a tu compañía de teléfono (T-Mobile, AT&T, Verizon, etc.) para que bloqueen tu línea. Esto evita que alguien use tu número para hacer llamadas, enviar mensajes o recibir códigos de verificación de tus cuentas bancarias.

Si sospechas que fue un robo, presenta un reporte policial. Necesitarás el número IMEI de tu teléfono, que puedes encontrar en la caja original o en la configuración de tu cuenta de la compañía de teléfono.`,
    steps: [
      {
        title: 'Intenta localizar tu teléfono inmediatamente',
        content: 'Desde una computadora o teléfono prestado, visita icloud.com/find (iPhone) o google.com/android/find (Android). Inicia sesión con tu cuenta. Si el teléfono está encendido, verás su ubicación en un mapa. Puedes hacerlo sonar para encontrarlo si está cerca.',
      },
      {
        title: 'Bloquea tu teléfono de forma remota',
        content: 'Desde el mismo sitio web, selecciona "Bloquear" o "Modo perdido". Esto pone un mensaje en la pantalla con un número donde pueden contactarte si alguien lo encuentra. Nadie podrá acceder a tu información sin tu código.',
      },
      {
        title: 'Llama a tu compañía de teléfono',
        content: 'Llama a tu proveedor para suspender tu línea: T-Mobile (1-800-937-8997), AT&T (1-800-331-0500), Verizon (1-800-922-0204). Pide que bloqueen tu número y tu tarjeta SIM para que nadie pueda usar tu línea.',
      },
      {
        title: 'Cambia las contraseñas de tus cuentas importantes',
        content: 'Desde otra computadora o teléfono, cambia las contraseñas de: tu correo electrónico (Gmail, Yahoo, etc.), tu banco, redes sociales (Facebook, Instagram), y cualquier otra cuenta importante. Empieza por el correo electrónico, ya que se usa para restablecer otras contraseñas.',
      },
      {
        title: 'Borra los datos del teléfono remotamente (si es necesario)',
        content: 'Si no puedes recuperar el teléfono, usa la opción "Borrar dispositivo" en iCloud o Google Find My Device. Esto elimina toda tu información del teléfono. Tus fotos y datos estarán seguros si tenías activada la copia de seguridad de iCloud o Google.',
      },
      {
        title: 'Presenta un reporte policial',
        content: 'Ve a tu estación de policía local y presenta un reporte. Lleva el número IMEI de tu teléfono (está en la caja original, o en tu cuenta de la compañía telefónica). El reporte policial puede ser necesario para el reclamo de seguro.',
      },
      {
        title: 'Prevención: configura estas protecciones ahora',
        content: 'No esperes a que pase algo. Activa ahora: "Buscar mi iPhone" (Ajustes > tu nombre > Buscar) o "Encontrar mi dispositivo" (Configuración > Seguridad) en Android. Activa copias de seguridad automáticas. Usa un código de acceso de 6 dígitos o huella digital.',
      },
    ],
  },

  // ─── 19. How to Set Up Two-Factor Authentication ────────────────────────────
  {
    slug: 'es-two-factor-authentication',
    title: 'Cómo activar la verificación en dos pasos',
    excerpt: 'Protege tus cuentas con una capa extra de seguridad que evita que hackers accedan a tu información.',
    category: 'safety-guides' as any,
    tags: ['2fa', 'security', 'authentication', 'safety', 'accounts', 'beginner'],
    readTime: '5 min',
    thumbnailEmoji: '🛡️',
    difficulty: 'Beginner',
    publishedAt: '2026-04-16',
    body: `La verificación en dos pasos (también conocida como autenticación de dos factores o 2FA) es como ponerle un segundo candado a tu puerta. Incluso si alguien descubre tu contraseña, no podrá entrar a tu cuenta porque necesitará un segundo código que solo tú tienes.

Funciona así: cuando inicias sesión con tu contraseña, el sitio web te pide un código adicional. Este código puede llegarte por mensaje de texto a tu teléfono, por correo electrónico, o a través de una aplicación especial. El código cambia cada vez, así que aunque alguien lo vea una vez, no le servirá después.

Esta protección es especialmente importante para tus cuentas más valiosas: tu correo electrónico (porque se usa para restablecer otras contraseñas), tu banco, tu Social Security en línea, y tus redes sociales. Si un hacker entra a tu correo, puede restablecer las contraseñas de todas tus otras cuentas.

La forma más común es por mensaje de texto (SMS). Cuando activas la verificación en dos pasos, el sitio web envía un código de 6 dígitos a tu teléfono cada vez que inicias sesión desde un dispositivo nuevo. Simplemente escribes el código y listo.

Otra opción más segura es usar una aplicación de autenticación como Google Authenticator o Microsoft Authenticator. Estas apps generan códigos que cambian cada 30 segundos y funcionan incluso sin conexión a internet.

No te preocupes, no tendrás que poner el código cada vez que abras la app. La mayoría de los sitios web te permiten "recordar este dispositivo" para que solo te pida el código cuando inicies sesión desde un teléfono o computadora nueva.`,
    steps: [
      {
        title: 'Empieza con tu cuenta de correo electrónico',
        content: 'Tu correo es la cuenta más importante de proteger. En Gmail: ve a myaccount.google.com > Seguridad > Verificación en 2 pasos > Comenzar. En Yahoo: Configuración de cuenta > Seguridad de cuenta > Verificación en dos pasos.',
      },
      {
        title: 'Elige tu método de verificación',
        content: 'La opción más fácil es por mensaje de texto (SMS). El sitio te enviará un código de 6 dígitos a tu teléfono cada vez que inicies sesión desde un dispositivo nuevo. Solo escribe el código cuando te lo pida.',
      },
      {
        title: 'Verifica que funciona correctamente',
        content: 'Después de activar la verificación, cierra sesión e intenta entrar de nuevo. Deberás recibir un código en tu teléfono. Escríbelo para confirmar que todo funciona. Si no recibes el código, verifica que el número de teléfono sea correcto.',
      },
      {
        title: 'Activa la verificación en tu banco y redes sociales',
        content: 'Repite el proceso en: la app de tu banco (busca en Seguridad o Configuración), Facebook (Configuración > Seguridad e inicio de sesión), Instagram (Configuración > Seguridad > Autenticación en dos pasos), y Amazon.',
      },
      {
        title: 'Guarda los códigos de respaldo',
        content: 'La mayoría de los sitios te dan "códigos de respaldo" cuando activas la verificación. Son códigos de un solo uso para cuando no tengas tu teléfono. Imprímelos o escríbelos y guárdalos en un lugar seguro en tu casa.',
      },
      {
        title: 'Considera usar una app de autenticación (opcional)',
        content: 'Para mayor seguridad, descarga Google Authenticator o Microsoft Authenticator desde la App Store o Google Play. Estas apps generan códigos que cambian cada 30 segundos y son más seguros que los mensajes de texto.',
      },
    ],
  },

  // ─── 20. How to Check Your Credit Score Free ───────────────────────────────
  {
    slug: 'es-check-credit-score-free',
    title: 'Cómo revisar tu puntaje de crédito gratis',
    excerpt: 'Revisa tu puntaje de crédito sin pagar usando sitios web oficiales y seguros.',
    category: 'financial-tech' as any,
    tags: ['credit-score', 'finance', 'free', 'credit-report', 'financial-literacy', 'beginner'],
    readTime: '5 min',
    thumbnailEmoji: '📊',
    difficulty: 'Beginner',
    publishedAt: '2026-04-16',
    body: `Tu puntaje de crédito es un número entre 300 y 850 que los bancos y prestamistas usan para decidir si te prestan dinero y a qué tasa de interés. Un puntaje alto (generalmente 670 o más) significa que eres responsable con tus deudas, y te ofrecerán mejores tasas en préstamos de auto, hipotecas y tarjetas de crédito. Un puntaje bajo puede hacer que te cobren más intereses o que te nieguen crédito.

La buena noticia es que revisar tu puntaje de crédito es completamente gratis y no afecta tu puntaje. Hay varios sitios web legítimos y seguros donde puedes verlo sin pagar ni un centavo.

El sitio más importante es AnnualCreditReport.com, el único sitio autorizado por el gobierno federal para darte tu reporte de crédito completo gratis de las tres agencias principales: Equifax, Experian y TransUnion. Tienes derecho a un reporte gratis de cada agencia cada semana. Tu reporte de crédito muestra todas tus cuentas, pagos, deudas, y si hay algún error o actividad sospechosa.

Para ver tu puntaje numérico (el número entre 300 y 850), puedes usar sitios gratuitos como Credit Karma (creditkarma.com) o Credit Sesame. Muchos bancos y tarjetas de crédito también muestran tu puntaje gratis dentro de su aplicación. Chase, Bank of America, Capital One, Discover y otros incluyen esta función sin costo adicional.

Nunca pagues para ver tu puntaje de crédito. Si un sitio web te pide dinero para mostrarte tu puntaje, probablemente es una estafa o un servicio innecesario. Los sitios mencionados arriba son completamente gratuitos.

Revisa tu reporte de crédito al menos una vez al año para verificar que no haya errores ni cuentas que no reconozcas. Si encuentras algo sospechoso, podría ser señal de robo de identidad y debes reportarlo inmediatamente.`,
    steps: [
      {
        title: 'Visita AnnualCreditReport.com',
        content: 'Abre tu navegador y escribe annualcreditreport.com (todo junto). Este es el único sitio autorizado por el gobierno federal. Ten cuidado con sitios que se parecen pero tienen nombres diferentes — son imitaciones.',
      },
      {
        title: 'Solicita tu reporte de crédito gratuito',
        content: 'Haz clic en "Request your free credit reports" e ingresa tu nombre, dirección, número de Seguro Social y fecha de nacimiento. Puedes solicitar el reporte de las tres agencias: Equifax, Experian y TransUnion.',
      },
      {
        title: 'Verifica tu identidad respondiendo preguntas',
        content: 'Para confirmar que eres tú, el sitio te hará preguntas sobre tu historial financiero: "¿Cuál de estas direcciones has tenido?" o "¿Cuál de estos préstamos reconoces?". Responde lo mejor que puedas.',
      },
      {
        title: 'Revisa tu reporte cuidadosamente',
        content: 'Lee cada sección de tu reporte: cuentas abiertas, historial de pagos, deudas, y consultas recientes. Busca cuentas que no reconozcas, pagos reportados como atrasados que sí hiciste a tiempo, o direcciones donde nunca has vivido.',
      },
      {
        title: 'Ve tu puntaje numérico en Credit Karma',
        content: 'Para ver tu puntaje de crédito (el número de 300 a 850), visita creditkarma.com o descarga la app Credit Karma gratis. Crea una cuenta y podrás ver tu puntaje de TransUnion y Equifax actualizado semanalmente.',
      },
      {
        title: 'Revisa si tu banco ofrece el puntaje gratis',
        content: 'Muchos bancos muestran tu puntaje de crédito gratis en su app. Revisa la app de Chase, Bank of America, Capital One, Discover o Wells Fargo. Busca una sección llamada "Credit Score" o "Puntaje de crédito".',
      },
      {
        title: 'Disputa errores si los encuentras',
        content: 'Si encuentras información incorrecta, puedes disputarla gratis directamente con la agencia de crédito. En cada reporte hay un enlace de "Disputar". Si sospechas robo de identidad, visita identitytheft.gov o llama al 1-877-438-4338.',
      },
    ],
  },

  // ─── 21. Cómo usar Facebook para principiantes ────────────────────────────────
  {
    slug: 'es-facebook-beginners',
    title: 'Cómo usar Facebook para principiantes',
    excerpt: 'Aprende a usar Facebook paso a paso: publicar, conectarte con familia y amigos, y mantenerte seguro.',
    category: 'social-media' as any,
    tags: ['facebook', 'social-media', 'redes-sociales', 'beginner', 'familia'],
    readTime: '6 min',
    thumbnailEmoji: '👤',
    difficulty: 'Beginner',
    publishedAt: '2026-04-16',
    body: `Facebook es la red social más popular del mundo y es una herramienta increíble para mantenerte en contacto con tu familia, amigos y comunidad. Millones de personas en Estados Unidos la usan todos los días para compartir fotos, ver noticias y participar en grupos de interés. No necesitas ser experto en tecnología para usarla — aquí te explicamos todo desde cero.

Para empezar, necesitas una cuenta de Facebook. Si todavía no tienes una, puedes crearla gratis en facebook.com o descargando la app de Facebook desde la App Store (iPhone) o Google Play (Android). Solo necesitas un correo electrónico o número de teléfono, tu nombre y tu fecha de nacimiento.

Una vez dentro, verás tu "Muro" o "Feed de noticias". Aquí aparecen las publicaciones de tus amigos, familiares y páginas que sigues. Puedes darle "Me gusta" tocando el ícono del pulgar arriba, dejar un comentario o compartir la publicación con otros.

Para encontrar a tus familiares y amigos, usa la barra de búsqueda en la parte superior. Escribe su nombre y envíales una solicitud de amistad. También puedes buscar grupos de tu comunidad, iglesia, o intereses como cocina, jardinería o noticias locales.

Es importante que revises tu configuración de privacidad. Ve a Configuración > Privacidad y asegúrate de que solo tus amigos puedan ver tus publicaciones. Nunca aceptes solicitudes de amistad de personas que no conoces, y nunca compartas información personal como tu dirección o número de seguro social en Facebook.`,
    steps: [
      {
        title: 'Descarga la app o visita facebook.com',
        content: 'En tu teléfono, abre la App Store (iPhone) o Google Play (Android) y busca "Facebook". Descárgala gratis. Si prefieres usar tu computadora, ve a facebook.com en tu navegador.',
      },
      {
        title: 'Crea tu cuenta o inicia sesión',
        content: 'Si ya tienes cuenta, ingresa tu correo y contraseña. Si no, toca "Crear cuenta nueva" y sigue las instrucciones. Necesitarás un correo electrónico o número de teléfono, tu nombre y fecha de nacimiento.',
      },
      {
        title: 'Busca a tu familia y amigos',
        content: 'Usa la lupa de búsqueda en la parte superior para buscar personas por nombre. Cuando encuentres a alguien que conoces, toca "Agregar amigo". Ellos recibirán la solicitud y la pueden aceptar.',
      },
      {
        title: 'Publica algo en tu muro',
        content: 'Toca donde dice "¿Qué estás pensando?" en la parte superior. Escribe un mensaje, agrega una foto tocando el ícono de la cámara, y luego toca "Publicar". Tus amigos podrán verlo y comentar.',
      },
      {
        title: 'Ajusta tu privacidad',
        content: 'Ve a tu foto de perfil > Configuración y privacidad > Configuración > Privacidad. Cambia "¿Quién puede ver tus publicaciones futuras?" a "Amigos". Así solo las personas que conoces verán lo que compartes.',
      },
      {
        title: 'Únete a grupos de tu interés',
        content: 'Busca grupos escribiendo temas como "recetas mexicanas", "comunidad hispana [tu ciudad]" o "jardinería". Únete a los que te interesen para ver publicaciones y participar en conversaciones con personas que comparten tus gustos.',
      },
    ],
  },

  // ─── 22. Cómo configurar un televisor inteligente ─────────────────────────────
  {
    slug: 'es-smart-tv-setup',
    title: 'Cómo configurar un televisor inteligente',
    excerpt: 'Conecta tu Smart TV a WiFi y aprende a ver Netflix, YouTube y más sin complicaciones.',
    category: 'smart-home' as any,
    tags: ['smart-tv', 'television', 'streaming', 'wifi', 'beginner'],
    readTime: '6 min',
    thumbnailEmoji: '📺',
    difficulty: 'Beginner',
    publishedAt: '2026-04-16',
    body: `Un televisor inteligente (o Smart TV) es un televisor que se conecta a internet y te permite ver programas, películas y videos sin necesidad de cable tradicional. Marcas como Samsung, LG, TCL, Vizio y Roku hacen televisores inteligentes muy populares en Estados Unidos. Si acabas de comprar uno, esta guía te ayuda a configurarlo desde cero.

Lo primero es conectar tu Smart TV a tu red WiFi. Cuando enciendes el televisor por primera vez, generalmente te pide que selecciones tu idioma y te conectes a WiFi. Usa el control remoto para navegar a tu red WiFi, selecciónala e ingresa la contraseña. Si no sabes la contraseña, búscala en la etiqueta de tu router (la cajita con luces de tu proveedor de internet).

Una vez conectado a internet, tu televisor te pedirá que inicies sesión o crees una cuenta. Dependiendo de la marca, puede ser una cuenta Samsung, LG, Roku o Google. Si ya tienes un correo de Gmail, puedes usar esa cuenta para televisores con Google TV o Android TV.

Después de la configuración inicial, podrás descargar apps como Netflix, YouTube, Hulu, Disney+, Peacock, Tubi (gratis), y Pluto TV (gratis). Cada app tiene su propia suscripción, pero hay varias opciones gratuitas como Tubi y Pluto TV que tienen muchos programas en español.

Un consejo importante: mantén tu televisor actualizado. Ve a Configuración > Sistema > Actualización de software y revisa si hay actualizaciones disponibles. Esto mantiene tu televisor funcionando bien y con las apps más recientes.`,
    steps: [
      {
        title: 'Enciende tu televisor y selecciona el idioma',
        content: 'Al encender tu Smart TV por primera vez, aparecerá una pantalla de bienvenida. Usa las flechas del control remoto para seleccionar "Español" como idioma y presiona OK o Enter.',
      },
      {
        title: 'Conéctalo a tu red WiFi',
        content: 'El televisor buscará redes WiFi cercanas. Selecciona el nombre de tu red e ingresa la contraseña usando el teclado en pantalla. La contraseña está en la etiqueta de tu router si no la recuerdas.',
      },
      {
        title: 'Crea o inicia sesión en tu cuenta del televisor',
        content: 'Dependiendo de la marca, necesitarás una cuenta Samsung, LG, Roku o Google. Si tienes Gmail, puedes usarla para televisores Google TV. Si no tienes cuenta, el televisor te guiará para crear una gratis.',
      },
      {
        title: 'Descarga las apps que quieras ver',
        content: 'Ve a la tienda de aplicaciones de tu televisor. Busca Netflix, YouTube, Hulu, Tubi (gratis) o Pluto TV (gratis). Selecciona la app y toca "Instalar" o "Descargar". Se agregarán a tu pantalla principal.',
      },
      {
        title: 'Inicia sesión en cada app de streaming',
        content: 'Abre la app que descargaste (como Netflix). Te pedirá iniciar sesión o activar el dispositivo visitando un sitio web en tu teléfono. Sigue las instrucciones en pantalla para vincular tu cuenta.',
      },
      {
        title: 'Actualiza el software de tu televisor',
        content: 'Ve a Configuración > Sistema > Actualización de software. Si hay una actualización disponible, descárgala e instálala. Esto arregla problemas y agrega funciones nuevas. Es como actualizar tu teléfono.',
      },
    ],
  },

  // ─── 23. Cómo usar Google Maps en tu teléfono ────────────────────────────────
  {
    slug: 'es-google-maps',
    title: 'Cómo usar Google Maps en tu teléfono',
    excerpt: 'Aprende a usar Google Maps para encontrar direcciones, navegar en el carro y buscar lugares cercanos.',
    category: 'essential-skills' as any,
    tags: ['google-maps', 'navigation', 'directions', 'gps', 'beginner'],
    readTime: '5 min',
    thumbnailEmoji: '🗺️',
    difficulty: 'Beginner',
    publishedAt: '2026-04-16',
    body: `Google Maps es como tener un mapa y un GPS gratis en tu teléfono. Te dice cómo llegar a cualquier lugar, te muestra el tráfico en tiempo real, y te ayuda a encontrar restaurantes, tiendas, gasolineras y más cerca de ti. Es una de las aplicaciones más útiles que puedes tener, y aquí te enseñamos a usarla.

Google Maps viene preinstalado en la mayoría de los teléfonos Android. Si tienes un iPhone, descárgala gratis desde la App Store. Cuando la abras por primera vez, te pedirá permiso para usar tu ubicación — di que sí, porque así el mapa sabe dónde estás y puede darte direcciones precisas.

Para buscar un lugar, toca la barra de búsqueda en la parte superior y escribe la dirección, el nombre del lugar o algo como "farmacia cerca de mí". Google Maps te mostrará el lugar en el mapa con opciones para navegar en carro, transporte público, a pie o en bicicleta.

Cuando toques "Iniciar" o "Comenzar navegación", Google Maps te dará instrucciones paso a paso con voz. Te dirá cuándo doblar, en cuántas millas, y te avisará si hay tráfico o accidentes en el camino. Es como tener un copiloto que nunca se equivoca.

También puedes guardar lugares frecuentes como tu casa y tu trabajo. Así, cuando quieras ir a casa, solo tocas el ícono de casa y Google Maps automáticamente te da la ruta más rápida.`,
    steps: [
      {
        title: 'Abre Google Maps en tu teléfono',
        content: 'Busca el ícono de Google Maps (un pin rojo sobre un mapa). En Android ya viene instalado. En iPhone, descárgalo gratis desde la App Store. Cuando lo abras, permite el acceso a tu ubicación.',
      },
      {
        title: 'Busca el lugar a donde quieres ir',
        content: 'Toca la barra de búsqueda arriba y escribe la dirección completa o el nombre del lugar, como "Walmart" o "DMV cerca de mí". Google Maps te mostrará resultados con dirección, horarios y calificaciones.',
      },
      {
        title: 'Selecciona cómo quieres llegar',
        content: 'Toca "Cómo llegar" o "Directions". Verás opciones: carro, transporte público, caminar o bicicleta. Selecciona la que prefieras. Google Maps te mostrará la ruta y cuánto tiempo tomará.',
      },
      {
        title: 'Inicia la navegación con voz',
        content: 'Toca el botón azul "Iniciar" para comenzar la navegación. Una voz te irá diciendo paso a paso hacia dónde ir. Asegúrate de tener el volumen alto. Puedes montar tu teléfono en el tablero del carro con un soporte.',
      },
      {
        title: 'Guarda tus lugares frecuentes',
        content: 'Toca tu foto de perfil > Configuración > Editar casa o trabajo. Ingresa la dirección de tu hogar y tu trabajo. Así, la próxima vez solo tienes que tocar "Casa" o "Trabajo" para obtener la ruta rápidamente.',
      },
    ],
  },

  // ─── 24. Cómo enviar fotos por mensaje de texto ──────────────────────────────
  {
    slug: 'es-send-photos-text',
    title: 'Cómo enviar fotos por mensaje de texto',
    excerpt: 'Aprende a compartir fotos con tu familia y amigos por mensaje de texto desde tu teléfono.',
    category: 'communication' as any,
    tags: ['photos', 'text-message', 'mms', 'sharing', 'beginner'],
    readTime: '4 min',
    thumbnailEmoji: '📸',
    difficulty: 'Beginner',
    publishedAt: '2026-04-16',
    body: `Compartir fotos por mensaje de texto es una de las formas más rápidas y sencillas de mandarle una imagen a un familiar o amigo. No necesitas ninguna app especial — puedes hacerlo directamente desde la aplicación de Mensajes que ya viene en tu teléfono. Aquí te enseñamos cómo hacerlo tanto en iPhone como en Android.

En un iPhone, abre la app de Mensajes (el ícono verde con un globo de texto blanco). Selecciona la conversación con la persona a quien quieres enviarle la foto, o toca el ícono de nuevo mensaje para empezar una nueva. Junto al campo donde escribes, verás un ícono de cámara y un ícono de "+". Toca el "+" y luego "Fotos" para elegir una foto de tu galería, o toca la cámara para tomar una foto nueva en ese momento.

En un teléfono Android, abre Google Messages o la app de mensajes que uses. Abre la conversación y toca el ícono de la imagen o el clip (📎) junto al campo de texto. Selecciona "Galería" o "Fotos" para elegir una imagen guardada, o "Cámara" para tomar una nueva.

Una vez que selecciones la foto, aparecerá como vista previa en el mensaje. Puedes agregar un texto si quieres y luego tocar la flecha de enviar. La foto se enviará como un mensaje multimedia (MMS), que es diferente a un mensaje de texto normal. La mayoría de los planes de T-Mobile, AT&T, Verizon y otros proveedores incluyen MMS sin costo adicional.

Si la foto es muy pesada o quieres enviar muchas fotos a la vez, considera usar WhatsApp, que es gratis y muy popular entre la comunidad hispana.`,
    steps: [
      {
        title: 'Abre tu app de Mensajes',
        content: 'En iPhone, toca el ícono verde de Mensajes. En Android, abre Google Messages o tu app de mensajes. Selecciona la conversación con la persona a quien quieres enviarle la foto.',
      },
      {
        title: 'Toca el ícono para agregar una foto',
        content: 'En iPhone: toca el "+" junto al campo de texto y luego "Fotos". En Android: toca el ícono de la imagen (📷) o el clip (📎). Esto te abrirá la galería de fotos de tu teléfono.',
      },
      {
        title: 'Selecciona la foto que quieres enviar',
        content: 'Navega por tu galería de fotos y toca la imagen que quieres enviar. Puedes seleccionar varias fotos a la vez en la mayoría de los teléfonos. La foto aparecerá como vista previa en tu mensaje.',
      },
      {
        title: 'Agrega un mensaje si quieres',
        content: 'Puedes escribir algo debajo de la foto, como "¡Mira qué bonita salió!" o "Aquí estamos en la fiesta". Esto es opcional — puedes enviar solo la foto si prefieres.',
      },
      {
        title: 'Toca enviar',
        content: 'Toca la flecha azul (iPhone) o el ícono de enviar (Android) para mandar la foto. Puede tardar unos segundos si la foto es grande. Verás "Enviado" cuando se complete.',
      },
    ],
  },

  // ─── 25. Cómo hacer una copia de seguridad de tu teléfono ────────────────────
  {
    slug: 'es-phone-backup',
    title: 'Cómo hacer una copia de seguridad de tu teléfono',
    excerpt: 'Protege tus fotos, contactos y datos importantes haciendo una copia de seguridad de tu teléfono.',
    category: 'phone-guides' as any,
    tags: ['backup', 'cloud', 'icloud', 'google', 'data-protection', 'beginner'],
    readTime: '5 min',
    thumbnailEmoji: '☁️',
    difficulty: 'Beginner',
    publishedAt: '2026-04-16',
    body: `Imagina que pierdes tu teléfono o se te cae al agua. Si no tienes una copia de seguridad, podrías perder todas tus fotos, contactos, mensajes y todo lo que guardas en él. Una copia de seguridad (o "backup") es como hacer una copia de todo lo importante de tu teléfono y guardarla en un lugar seguro en internet, llamado "la nube".

Si tienes un iPhone, Apple te da un servicio llamado iCloud. Tu teléfono puede hacer copias automáticas todas las noches mientras está conectado al cargador y al WiFi. Para activarlo, ve a Ajustes > toca tu nombre arriba > iCloud > Copia en iCloud y actívala. Apple te da 5 GB gratis, pero si necesitas más espacio, puedes pagar $0.99 al mes por 50 GB.

Si tienes un teléfono Android, Google te da 15 GB gratis con tu cuenta de Google. Ve a Configuración > Google > Copia de seguridad y actívala. Google guardará tus contactos, apps, fotos (con Google Photos) y configuraciones importantes.

Además de la copia en la nube, puedes guardar tus fotos más importantes en Google Photos (gratis hasta cierto límite) o en Amazon Photos (gratis con Amazon Prime). También puedes copiar fotos importantes a tu computadora conectando el teléfono con un cable USB.

Lo más importante es que hagas la copia de seguridad regularmente. Configúrala para que sea automática y así nunca tendrás que preocuparte por perder tus recuerdos y contactos.`,
    steps: [
      {
        title: 'Verifica que estés conectado a WiFi',
        content: 'Las copias de seguridad usan mucho internet, así que asegúrate de estar conectado a tu WiFi de casa. No uses datos móviles porque puede salirte caro o ir muy lento.',
      },
      {
        title: 'Activa la copia de seguridad en tu teléfono',
        content: 'iPhone: ve a Ajustes > tu nombre > iCloud > Copia en iCloud > Activar. Android: ve a Configuración > Google > Copia de seguridad > Activar. Esto guardará tus datos en la nube automáticamente.',
      },
      {
        title: 'Haz tu primera copia ahora mismo',
        content: 'iPhone: en la misma pantalla de Copia en iCloud, toca "Realizar copia ahora". Android: toca "Crear copia de seguridad ahora". Esto puede tomar varios minutos la primera vez.',
      },
      {
        title: 'Activa Google Photos o iCloud Photos para tus fotos',
        content: 'iPhone: en Ajustes > tu nombre > iCloud > Fotos, activa "Fotos en iCloud". Android: abre la app Google Photos > tu foto de perfil > Configuración de Fotos > Copia de seguridad > Activar.',
      },
      {
        title: 'Verifica que tu copia de seguridad funcionó',
        content: 'iPhone: ve a Ajustes > tu nombre > iCloud > Copia en iCloud y mira la fecha de la última copia. Android: en Configuración > Google > Copia de seguridad verás cuándo fue la última copia exitosa.',
      },
      {
        title: 'Configura las copias automáticas',
        content: 'Deja la copia de seguridad activada y conecta tu teléfono al cargador cada noche con WiFi encendido. Tu teléfono hará la copia automáticamente mientras duermes.',
      },
    ],
  },

  // ─── 26. Cómo usar FaceTime para videollamadas ───────────────────────────────
  {
    slug: 'es-facetime-video-calls',
    title: 'Cómo usar FaceTime para videollamadas',
    excerpt: 'Aprende a hacer videollamadas con FaceTime para ver a tu familia y amigos cara a cara.',
    category: 'communication' as any,
    tags: ['facetime', 'video-call', 'videollamada', 'apple', 'beginner'],
    readTime: '5 min',
    thumbnailEmoji: '📱',
    difficulty: 'Beginner',
    publishedAt: '2026-04-16',
    body: `FaceTime es la aplicación de Apple para hacer videollamadas gratis. Es como hablar por teléfono, pero puedes ver a la otra persona en la pantalla. Es perfecta para hablar con familiares que viven lejos, ver a los nietos, o simplemente ponerte al día con amigos. Y lo mejor: es completamente gratis — solo necesitas WiFi o datos.

FaceTime viene incluido en todos los iPhones, iPads y Mac. No necesitas descargarlo ni pagar nada. Para usarlo, la otra persona también necesita un dispositivo Apple (iPhone, iPad o Mac). Sin embargo, desde hace poco, también puedes invitar a personas con teléfonos Android o computadoras Windows a unirse a una llamada de FaceTime a través de un enlace.

Para hacer una videollamada, abre la app de FaceTime (el ícono verde con una cámara de video blanca). Toca "Nueva FaceTime" o el botón de "+" arriba. Escribe el nombre, número de teléfono o correo electrónico de la persona a quien quieres llamar. Luego toca el botón verde de video.

Durante la llamada, puedes voltear la cámara para mostrar algo a tu alrededor (tocando el ícono de flechas circulares), silenciar tu micrófono, o poner la cámara en modo horizontal para que se vea más grande. Para colgar, toca el botón rojo.

Si tienes problemas con la calidad de video, asegúrate de estar en un lugar con buena señal WiFi y con suficiente luz para que la otra persona te pueda ver bien.`,
    steps: [
      {
        title: 'Abre la app de FaceTime',
        content: 'Busca el ícono verde con la cámara blanca en tu iPhone o iPad. Si no lo encuentras, desliza hacia abajo en tu pantalla principal y escribe "FaceTime" en la búsqueda.',
      },
      {
        title: 'Inicia una nueva llamada',
        content: 'Toca "Nueva FaceTime" o el botón de "+" en la esquina superior. Escribe el nombre del contacto, su número de teléfono o su correo electrónico en el campo de búsqueda.',
      },
      {
        title: 'Elige videollamada',
        content: 'Toca el botón verde de video (📹) para iniciar la videollamada. Espera a que la otra persona conteste. Verás tu imagen en una ventanita pequeña y a la otra persona en la pantalla grande.',
      },
      {
        title: 'Usa los controles durante la llamada',
        content: 'Durante la llamada verás botones en la pantalla: el micrófono (para silenciarte), la cámara (para apagarla), las flechas (para voltear la cámara) y el altavoz. Toca la pantalla si los botones desaparecen.',
      },
      {
        title: 'Invita a alguien con Android usando un enlace',
        content: 'En la pantalla principal de FaceTime, toca "Crear enlace". Comparte ese enlace por mensaje de texto o WhatsApp. La persona con Android puede abrirlo en su navegador Chrome para unirse a la llamada.',
      },
      {
        title: 'Cuelga la llamada',
        content: 'Cuando termines de hablar, toca el botón rojo con el ícono de teléfono para colgar. La llamada se terminará para ambos. Verás un resumen con la duración de la llamada.',
      },
    ],
  },

  // ─── 27. Cómo usar el correo de voz en tu teléfono ───────────────────────────
  {
    slug: 'es-voicemail-setup',
    title: 'Cómo usar el correo de voz en tu teléfono',
    excerpt: 'Configura y escucha tu correo de voz para no perder llamadas importantes.',
    category: 'phone-guides' as any,
    tags: ['voicemail', 'phone', 'calls', 'setup', 'beginner'],
    readTime: '4 min',
    thumbnailEmoji: '📞',
    difficulty: 'Beginner',
    publishedAt: '2026-04-16',
    body: `El correo de voz (voicemail) es un servicio que graba mensajes cuando no puedes contestar el teléfono. Es como una contestadora automática que vive dentro de tu teléfono. Cuando alguien te llama y no contestas, pueden dejar un mensaje de voz que puedes escuchar después. Es muy útil para no perder llamadas importantes del doctor, la escuela o el trabajo.

La mayoría de los planes de T-Mobile, AT&T, Verizon y otros proveedores en Estados Unidos incluyen el correo de voz gratis. Solo necesitas configurarlo una vez y después funciona automáticamente.

En un iPhone, el correo de voz viene integrado como "Visual Voicemail". Esto significa que puedes ver una lista de todos tus mensajes de voz y tocar el que quieras escuchar, sin tener que escucharlos en orden. En Android, algunos teléfonos también tienen Visual Voicemail, o puedes escuchar tus mensajes marcando el número de correo de voz.

Para grabar tu saludo personal, necesitas decidir qué quieres que la gente escuche cuando no contestas. Puede ser algo como "Hola, soy María. No puedo contestar en este momento. Deja tu mensaje y te llamo de regreso". Grabar tu propio saludo ayuda a que la gente sepa que llamó al número correcto.

Si no configuras un saludo, tu proveedor usará un mensaje genérico automático que solo dice tu número de teléfono.`,
    steps: [
      {
        title: 'Abre la app de Teléfono',
        content: 'Busca la app de Teléfono (el ícono verde con un teléfono blanco en iPhone, o el ícono azul del teléfono en Android). En iPhone, toca la pestaña "Correo de voz" abajo a la derecha.',
      },
      {
        title: 'Configura tu correo de voz por primera vez',
        content: 'iPhone: toca "Configurar ahora" en la pestaña de Correo de voz. Crea un PIN de 4 a 6 dígitos que puedas recordar. Android: mantén presionada la tecla 1 en el teclado del teléfono y sigue las instrucciones de voz.',
      },
      {
        title: 'Graba tu saludo personal',
        content: 'iPhone: toca "Saludo" arriba a la izquierda > "Personalizado" > "Grabar". Graba tu mensaje y toca "Guardar". Android: llama a tu correo de voz (tecla 1) y sigue las opciones del menú para grabar tu saludo.',
      },
      {
        title: 'Escucha tus mensajes de voz',
        content: 'iPhone: ve a Teléfono > Correo de voz. Verás una lista de mensajes. Toca cualquiera para escucharlo. Android: mantén presionado el 1 o abre la app de Visual Voicemail si la tienes.',
      },
      {
        title: 'Devuelve la llamada o borra el mensaje',
        content: 'Después de escuchar un mensaje, puedes tocar el nombre o número para devolver la llamada. Si ya no necesitas el mensaje, deslízalo a la izquierda (iPhone) o toca "Borrar" para eliminarlo.',
      },
    ],
  },

  // ─── 28. Cómo proteger tu teléfono con una contraseña ────────────────────────
  {
    slug: 'es-phone-lock-password',
    title: 'Cómo proteger tu teléfono con una contraseña',
    excerpt: 'Aprende a ponerle contraseña, PIN o huella digital a tu teléfono para proteger tu información.',
    category: 'safety-guides' as any,
    tags: ['security', 'password', 'lock-screen', 'fingerprint', 'beginner'],
    readTime: '4 min',
    thumbnailEmoji: '🔒',
    difficulty: 'Beginner',
    publishedAt: '2026-04-16',
    body: `Proteger tu teléfono con una contraseña o PIN es como ponerle llave a tu casa. Si alguien encuentra tu teléfono o te lo roban, no podrán ver tus fotos, mensajes, correos electrónicos, apps bancarias ni nada personal. En Estados Unidos, el robo de teléfonos es un problema común, así que es muy importante que tu teléfono esté protegido.

Hay varias formas de proteger tu teléfono. La más común es un PIN (un número de 4 o 6 dígitos). También puedes usar un patrón (dibujar una forma en la pantalla), una contraseña con letras y números, tu huella digital (Touch ID o sensor de huella), o reconocimiento facial (Face ID en iPhone).

Te recomendamos usar al menos un PIN de 6 dígitos junto con tu huella digital o Face ID. La huella y el reconocimiento facial son los más rápidos — solo tocas el botón o miras tu teléfono y se desbloquea instantáneamente. Pero siempre necesitas un PIN como respaldo en caso de que la huella o el rostro no funcionen.

Evita usar PINs fáciles de adivinar como 123456, 000000, tu año de nacimiento o los últimos dígitos de tu número de teléfono. Los ladrones prueban estos primero. Escoge un número que puedas recordar pero que no sea obvio para otros.

Además, configura tu teléfono para que se bloquee automáticamente después de 30 segundos o 1 minuto de no usarlo. Así, aunque lo dejes en la mesa y te distraigas, nadie podrá abrirlo.`,
    steps: [
      {
        title: 'Abre la configuración de bloqueo de pantalla',
        content: 'iPhone: ve a Ajustes > Face ID y código (o Touch ID y código). Android: ve a Configuración > Seguridad > Bloqueo de pantalla. Aquí podrás elegir cómo proteger tu teléfono.',
      },
      {
        title: 'Configura un PIN de 6 dígitos',
        content: 'Selecciona "Código" o "PIN" y escoge un número de 6 dígitos que puedas recordar. Evita números obvios como 123456 o tu cumpleaños. Tendrás que escribirlo dos veces para confirmarlo.',
      },
      {
        title: 'Activa la huella digital o Face ID',
        content: 'iPhone: en Ajustes > Face ID y código, sigue las instrucciones para escanear tu rostro o huella. Android: en Seguridad > Huella digital, coloca tu dedo varias veces en el sensor. Esto te permitirá desbloquear tu teléfono instantáneamente.',
      },
      {
        title: 'Configura el bloqueo automático',
        content: 'iPhone: ve a Ajustes > Pantalla y brillo > Bloqueo automático y selecciona "30 segundos" o "1 minuto". Android: en Configuración > Seguridad > Bloqueo automático, selecciona el menor tiempo posible.',
      },
      {
        title: 'Prueba que el bloqueo funcione',
        content: 'Presiona el botón lateral de tu teléfono para apagar la pantalla. Luego enciéndela de nuevo. Debería pedirte el PIN, huella o rostro antes de dejarte entrar. Si funciona, tu teléfono está protegido.',
      },
    ],
  },

  // ─── 29. Cómo descargar aplicaciones de forma segura ─────────────────────────
  {
    slug: 'es-download-apps-safely',
    title: 'Cómo descargar aplicaciones de forma segura',
    excerpt: 'Aprende a descargar apps confiables y evitar aplicaciones peligrosas o fraudulentas.',
    category: 'safety-guides' as any,
    tags: ['apps', 'download', 'app-store', 'google-play', 'safety', 'beginner'],
    readTime: '5 min',
    thumbnailEmoji: '⬇️',
    difficulty: 'Beginner',
    publishedAt: '2026-04-16',
    body: `Las aplicaciones (o "apps") agregan funciones a tu teléfono — desde ver el clima hasta hacer videollamadas con tu familia. Pero no todas las apps son seguras. Algunas apps falsas pueden robar tu información personal, llenar tu teléfono de anuncios molestos, o cobrarte sin tu permiso. Por eso es importante saber cómo descargar apps de forma segura.

La regla número uno es descargar apps solamente de las tiendas oficiales: la App Store de Apple (iPhone) o Google Play Store (Android). Estas tiendas revisan las apps antes de publicarlas para asegurarse de que no sean peligrosas. Nunca descargues apps desde enlaces que te lleguen por mensaje de texto, correo electrónico o redes sociales — esto es una táctica común de estafadores.

Antes de descargar una app, revisa tres cosas importantes. Primero, mira las calificaciones (las estrellas). Una app con 4 estrellas o más generalmente es confiable. Segundo, lee algunos comentarios de otros usuarios. Si ves quejas de cobros inesperados o anuncios excesivos, no la descargues. Tercero, verifica quién publicó la app. Por ejemplo, la app oficial de tu banco debe estar publicada por el banco mismo, no por un desarrollador desconocido.

También presta atención a los permisos que pide la app. Si una app de linterna te pide acceso a tus contactos y mensajes, eso es sospechoso. Una app solo debería pedir permisos que tengan sentido para lo que hace.

Ten cuidado con las apps "gratis" que luego te piden suscripciones caras. Lee bien antes de tocar "Aceptar" o "Suscribirse". Puedes cancelar suscripciones no deseadas en Ajustes > tu nombre > Suscripciones (iPhone) o Google Play > Pagos y suscripciones (Android).`,
    steps: [
      {
        title: 'Abre la tienda oficial de aplicaciones',
        content: 'En iPhone, busca el ícono azul de la App Store. En Android, busca el ícono de la bolsa de colores de Google Play Store. Estas son las únicas tiendas seguras para descargar apps.',
      },
      {
        title: 'Busca la app que necesitas',
        content: 'Toca la lupa de búsqueda y escribe el nombre de la app que quieres, como "WhatsApp" o "Facebook". También puedes buscar por categoría, como "app del clima" o "traductor".',
      },
      {
        title: 'Revisa la calificación y los comentarios',
        content: 'Antes de descargar, mira las estrellas (4 o más es bueno) y lee algunos comentarios. Fíjate en quejas sobre cobros, virus o mal funcionamiento. También verifica que el creador sea la empresa oficial.',
      },
      {
        title: 'Descarga la app',
        content: 'Toca "Obtener" (iPhone) o "Instalar" (Android). Es posible que te pida tu contraseña o huella digital para confirmar. La app se descargará y aparecerá en tu pantalla principal.',
      },
      {
        title: 'Revisa los permisos que pide',
        content: 'Cuando abras la app por primera vez, te pedirá permisos (cámara, ubicación, contactos, etc.). Solo acepta los que tengan sentido. Si una app de recetas te pide acceso a tus llamadas, es sospechoso — niégale el permiso.',
      },
      {
        title: 'Borra apps que no uses o parezcan sospechosas',
        content: 'Si descargaste una app y no te gusta o es sospechosa, bórrala. iPhone: mantén presionado el ícono > Eliminar app. Android: mantén presionado > Desinstalar. Revisa tu teléfono cada mes y borra lo que no usas.',
      },
    ],
  },

  // ─── 30. Cómo conectar audífonos Bluetooth ───────────────────────────────────
  {
    slug: 'es-connect-bluetooth-headphones',
    title: 'Cómo conectar audífonos Bluetooth',
    excerpt: 'Conecta tus audífonos inalámbricos a tu teléfono por Bluetooth en unos pasos.',
    category: 'phone-guides' as any,
    tags: ['bluetooth', 'headphones', 'wireless', 'audio', 'beginner'],
    readTime: '4 min',
    thumbnailEmoji: '🎧',
    difficulty: 'Beginner',
    publishedAt: '2026-04-16',
    body: `Los audífonos Bluetooth son audífonos inalámbricos que se conectan a tu teléfono sin cables. Son muy prácticos para escuchar música, hacer llamadas con las manos libres, o ver videos sin molestar a los demás. Bluetooth es la tecnología que permite que tus audífonos y tu teléfono se "hablen" sin necesidad de un cable.

Hay muchos tipos de audífonos Bluetooth: los AirPods de Apple, los Galaxy Buds de Samsung, los de JBL, Sony, Beats y muchas marcas más. Todos se conectan de forma muy similar. El proceso se llama "emparejar" (pairing en inglés), y solo necesitas hacerlo una vez. Después de emparejarlos, se conectan automáticamente cada vez que los enciendes.

Antes de empezar, asegúrate de que tus audífonos estén cargados. La mayoría vienen con un estuche de carga — coloca los audífonos dentro del estuche y conéctalo al cargador hasta que la luz indique que están llenos. La primera carga puede tomar entre 1 y 2 horas.

El paso clave es poner los audífonos en "modo de emparejamiento". Esto le dice a los audífonos que busquen un teléfono nuevo al cual conectarse. Cada marca tiene una forma diferente de activar este modo — generalmente es mantener presionado un botón durante unos segundos hasta que una luz parpadee.

Si tienes AirPods y un iPhone, el proceso es aún más fácil: simplemente abre el estuche de los AirPods cerca de tu iPhone y aparecerá una ventana automática para conectarlos.`,
    steps: [
      {
        title: 'Carga tus audífonos completamente',
        content: 'Coloca los audífonos en su estuche de carga y conéctalo a la corriente con el cable incluido. Espera hasta que la luz del estuche indique carga completa (generalmente cambia a verde o deja de parpadear).',
      },
      {
        title: 'Pon los audífonos en modo de emparejamiento',
        content: 'Para la mayoría de audífonos: mantén presionado el botón de encendido por 5 segundos hasta que la luz parpadee en azul o blanco. Para AirPods: abre el estuche con los audífonos dentro y mantén presionado el botón trasero del estuche.',
      },
      {
        title: 'Activa Bluetooth en tu teléfono',
        content: 'iPhone: ve a Ajustes > Bluetooth y actívalo (verde). Android: ve a Configuración > Conexiones > Bluetooth y actívalo. Tu teléfono empezará a buscar dispositivos cercanos.',
      },
      {
        title: 'Selecciona tus audífonos de la lista',
        content: 'En la lista de dispositivos Bluetooth, aparecerá el nombre de tus audífonos (como "AirPods de María" o "JBL Tune 510"). Toca el nombre para conectarlos. Escucharás un sonido de confirmación.',
      },
      {
        title: 'Prueba el sonido',
        content: 'Abre Spotify, YouTube o cualquier app de música y reproduce algo. El sonido debería salir por tus audífonos. Si sigue saliendo por el teléfono, revisa que los audífonos aparezcan como "Conectados" en la configuración Bluetooth.',
      },
    ],
  },

  // ─── 31. Cómo usar Spotify para escuchar música ──────────────────────────────
  {
    slug: 'es-spotify-music',
    title: 'Cómo usar Spotify para escuchar música',
    excerpt: 'Descubre cómo escuchar música gratis o con suscripción usando Spotify en tu teléfono.',
    category: 'entertainment' as any,
    tags: ['spotify', 'music', 'streaming', 'entertainment', 'beginner'],
    readTime: '5 min',
    thumbnailEmoji: '🎵',
    difficulty: 'Beginner',
    publishedAt: '2026-04-16',
    body: `Spotify es una de las aplicaciones más populares para escuchar música en Estados Unidos y el mundo. Piensa en Spotify como una biblioteca gigante de música donde puedes escuchar casi cualquier canción, artista o género que quieras — desde música regional mexicana y reggaetón hasta country, pop y música clásica. Hay millones de canciones disponibles.

Spotify tiene dos versiones: la gratuita y la de pago (Premium). La versión gratuita te permite escuchar música con anuncios entre canciones, similar a la radio. La versión Premium cuesta $11.99 al mes (hay planes familiares de $19.99 para hasta 6 personas) y te permite escuchar sin anuncios, descargar música para escuchar sin internet, y escoger las canciones exactas que quieras.

Para empezar, descarga Spotify desde la App Store (iPhone) o Google Play (Android). Puedes crear una cuenta con tu correo electrónico o usar tu cuenta de Google, Facebook o Apple para registrarte más rápido.

Una vez dentro, puedes buscar música por artista, canción, álbum o género. Spotify también tiene "playlists" o listas de reproducción creadas por ellos y por otros usuarios. Por ejemplo, puedes buscar "Éxitos de los 80s en español" o "Música para cocinar" y encontrar horas de música seleccionada.

Una función muy útil es "Descubrimiento semanal" — una playlist que Spotify crea especialmente para ti cada lunes con canciones nuevas basadas en lo que te gusta escuchar. Mientras más uses Spotify, mejor aprenderá tus gustos.`,
    steps: [
      {
        title: 'Descarga Spotify en tu teléfono',
        content: 'Abre la App Store (iPhone) o Google Play (Android) y busca "Spotify". Descárgala gratis. Cuando la abras, toca "Registrarte" para crear una cuenta nueva o "Iniciar sesión" si ya tienes una.',
      },
      {
        title: 'Crea tu cuenta',
        content: 'Puedes registrarte con tu correo electrónico o usar tu cuenta de Google, Facebook o Apple. Escoge un nombre de usuario y una contraseña. La app te pedirá que selecciones algunos artistas que te gustan para personalizar tus recomendaciones.',
      },
      {
        title: 'Busca tu música favorita',
        content: 'Toca la lupa de "Buscar" en la parte inferior. Escribe el nombre de un artista como "Vicente Fernández", "Bad Bunny" o "Luis Miguel". Toca su nombre para ver sus canciones y álbumes.',
      },
      {
        title: 'Crea tu propia playlist',
        content: 'Ve a "Tu biblioteca" abajo a la derecha. Toca el "+" para crear una playlist nueva. Ponle un nombre como "Mis favoritas" y agrega canciones buscándolas y tocando los tres puntitos > "Agregar a playlist".',
      },
      {
        title: 'Explora playlists hechas por Spotify',
        content: 'En la pantalla de Inicio, verás secciones como "Hecho para ti", "Éxitos", y listas por género. Toca cualquier playlist y dale "Play" para escucharla. Si te gusta, toca el corazón para guardarla.',
      },
      {
        title: 'Conecta Spotify a una bocina o audífonos',
        content: 'Para escuchar en una bocina Bluetooth, conéctala en los ajustes de Bluetooth de tu teléfono. Luego abre Spotify y reproduce música — el sonido saldrá por la bocina. También puedes usar Spotify con Alexa o Google Home.',
      },
    ],
  },

  // ─── 32. Cómo configurar Amazon Alexa en español ─────────────────────────────
  {
    slug: 'es-amazon-alexa-setup',
    title: 'Cómo configurar Amazon Alexa en español',
    excerpt: 'Aprende a configurar tu bocina Alexa para que entienda y responda en español.',
    category: 'smart-home' as any,
    tags: ['alexa', 'amazon', 'smart-speaker', 'smart-home', 'spanish', 'beginner'],
    readTime: '5 min',
    thumbnailEmoji: '🔊',
    difficulty: 'Beginner',
    publishedAt: '2026-04-16',
    body: `Amazon Alexa es un asistente de voz que vive dentro de las bocinas Echo de Amazon. Le puedes hablar y ella responde: pone música, te dice el clima, configura temporizadores, te recuerda citas, controla luces inteligentes y mucho más. Y lo mejor es que Alexa habla español, así que puedes usarla completamente en tu idioma.

Para empezar, necesitas una bocina Amazon Echo (los modelos más populares son Echo Dot, Echo y Echo Show). Se venden en Amazon.com, Best Buy, Target y Walmart. El Echo Dot básico cuesta alrededor de $50 y es perfecto para empezar.

La configuración se hace desde tu teléfono usando la app de Amazon Alexa, que es gratuita. Necesitas una cuenta de Amazon — si ya compras en Amazon, puedes usar esa misma cuenta. También necesitas WiFi en tu casa.

Una vez configurada en español, puedes hablarle diciendo "Alexa, ¿qué tiempo hace hoy?", "Alexa, pon música de Marco Antonio Solís", "Alexa, pon un temporizador de 10 minutos", o "Alexa, recuérdame tomar mi medicina a las 8 de la noche". Es como tener un asistente personal en tu casa.

Alexa también puede hacer llamadas a otros dispositivos Alexa o teléfonos, lo cual es muy útil para comunicarte con familiares que también tengan un Echo. Simplemente dices "Alexa, llama a María" y ella marca automáticamente.`,
    steps: [
      {
        title: 'Conecta tu bocina Echo a la corriente',
        content: 'Saca la bocina de la caja y conecta el cable de corriente a la pared. Espera un minuto hasta que la luz azul se encienda y Alexa diga "Hola, estoy lista para configurarse" o algo similar.',
      },
      {
        title: 'Descarga la app Amazon Alexa',
        content: 'En tu teléfono, abre la App Store (iPhone) o Google Play (Android) y busca "Amazon Alexa". Descárgala gratis e inicia sesión con tu cuenta de Amazon.',
      },
      {
        title: 'Conecta la bocina a tu WiFi',
        content: 'En la app de Alexa, toca "Dispositivos" abajo > "+" arriba > "Agregar dispositivo" > "Amazon Echo". La app buscará tu bocina y te guiará para conectarla a tu red WiFi.',
      },
      {
        title: 'Cambia el idioma a español',
        content: 'En la app de Alexa, ve a Dispositivos > selecciona tu Echo > Configuración del dispositivo (⚙️) > Idioma. Selecciona "Español (Estados Unidos)". Alexa ahora te hablará y entenderá en español.',
      },
      {
        title: 'Prueba con comandos de voz',
        content: 'Di "Alexa, ¿qué hora es?" o "Alexa, pon música en español". Si responde correctamente, ya está lista. Prueba también: "Alexa, pon un temporizador de 5 minutos" y "Alexa, ¿cómo está el clima?".',
      },
      {
        title: 'Configura rutinas y recordatorios',
        content: 'En la app de Alexa, ve a "Más" > "Rutinas" para crear automatizaciones. Por ejemplo, puedes hacer que al decir "Alexa, buenos días" ella te diga el clima, las noticias y encienda las luces. También puedes decir "Alexa, recuérdame tomar mi medicina a las 8 PM".',
      },
    ],
  },

  // ─── 34. Cómo liberar espacio en tu teléfono ─────────────────────────────────
  {
    slug: 'es-free-phone-storage',
    title: 'Cómo liberar espacio en tu teléfono',
    excerpt: 'Tu teléfono dice que está lleno. Aprende a liberar espacio eliminando lo que no necesitas.',
    category: 'phone-guides' as any,
    tags: ['storage', 'space', 'cleanup', 'phone', 'beginner'],
    readTime: '5 min',
    thumbnailEmoji: '🗑️',
    difficulty: 'Beginner',
    publishedAt: '2026-04-16',
    body: `Si tu teléfono te muestra un aviso de "Almacenamiento lleno" o notas que funciona más lento de lo normal, probablemente necesitas liberar espacio. Con el tiempo, las fotos, videos, apps y archivos se van acumulando y llenan la memoria de tu teléfono. Pero no te preocupes — hay varias formas de recuperar espacio sin perder nada importante.

Lo que más espacio ocupa generalmente son las fotos y los videos. Un solo video de un minuto puede ocupar más espacio que cientos de fotos. Las apps también ocupan mucho, especialmente las redes sociales como Facebook, Instagram y TikTok que guardan datos temporales llamados "caché" que se acumulan con el uso.

Antes de borrar cualquier cosa, asegúrate de tener una copia de seguridad de tus fotos en la nube (iCloud para iPhone o Google Photos para Android). Así, aunque borres las fotos de tu teléfono, seguirán guardadas en internet y podrás verlas desde cualquier dispositivo.

En iPhone, puedes ver qué ocupa más espacio en Ajustes > General > Almacenamiento del iPhone. Te mostrará una lista de todo lo que ocupa espacio, ordenado de mayor a menor. En Android, ve a Configuración > Almacenamiento para ver el mismo resumen.

Una regla sencilla: si no has usado una app en los últimos 3 meses, probablemente no la necesitas. Bórrala y siempre la puedes volver a descargar gratis si la necesitas en el futuro.`,
    steps: [
      {
        title: 'Revisa cuánto espacio te queda',
        content: 'iPhone: ve a Ajustes > General > Almacenamiento del iPhone. Android: ve a Configuración > Almacenamiento. Verás una barra que muestra cuánto espacio estás usando y cuánto queda libre.',
      },
      {
        title: 'Borra fotos y videos que no necesitas',
        content: 'Abre tu app de Fotos y revisa tus imágenes. Borra las fotos borrosas, duplicadas o que ya no quieras. Recuerda que los videos ocupan mucho más que las fotos. Después, ve a "Eliminados recientemente" y vacía esa carpeta también.',
      },
      {
        title: 'Desinstala apps que no uses',
        content: 'Mira la lista de apps en tu almacenamiento. Las que no hayas abierto en meses, bórralas. iPhone: mantén presionado el ícono > Eliminar app. Android: mantén presionado > Desinstalar. Siempre las puedes volver a descargar.',
      },
      {
        title: 'Limpia la caché de tus apps',
        content: 'Android: ve a Configuración > Aplicaciones > selecciona una app (como Facebook) > Almacenamiento > Borrar caché. iPhone: la forma más fácil es desinstalar y reinstalar la app. La caché de WhatsApp y Facebook puede ocupar varios gigabytes.',
      },
      {
        title: 'Usa la nube para guardar tus fotos',
        content: 'Activa Google Photos (Android) o iCloud Photos (iPhone) para que tus fotos se guarden en la nube. Después puedes borrar las fotos del teléfono sabiendo que siguen seguras en internet.',
      },
      {
        title: 'Borra mensajes y archivos de WhatsApp',
        content: 'WhatsApp guarda muchos videos y fotos que te envían. Abre WhatsApp > Ajustes > Almacenamiento y datos > Administrar almacenamiento. Verás los archivos más pesados y podrás borrar los que no necesites.',
      },
    ],
  },

  // ─── 35. Cómo usar la aplicación de Uber o Lyft ──────────────────────────────
  {
    slug: 'es-uber-lyft-app',
    title: 'Cómo usar la aplicación de Uber o Lyft',
    excerpt: 'Pide un viaje con Uber o Lyft desde tu teléfono de forma segura y paso a paso.',
    category: 'essential-skills' as any,
    tags: ['uber', 'lyft', 'rideshare', 'transportation', 'beginner'],
    readTime: '6 min',
    thumbnailEmoji: '🚗',
    difficulty: 'Beginner',
    publishedAt: '2026-04-16',
    body: `Uber y Lyft son aplicaciones que te permiten pedir un carro con chofer desde tu teléfono. Es como pedir un taxi, pero más fácil y generalmente más barato. No necesitas llamar por teléfono ni ir a parar un taxi en la calle — simplemente abres la app, pones a dónde quieres ir, y un conductor llega a recogerte en minutos.

Ambas apps funcionan de manera muy similar. Descargas la app, creas una cuenta, agregas una forma de pago (tarjeta de débito, crédito o PayPal), y listo. Cuando necesites un viaje, la app te muestra cuánto costará y cuánto tardará en llegar el conductor antes de que confirmes el viaje.

Uber y Lyft están disponibles en la mayoría de ciudades grandes y medianas en Estados Unidos. Los precios varían según la distancia, el tráfico y la hora del día. En horas pico (como las mañanas y tardes entre semana), los precios pueden ser más altos. La app siempre te muestra el precio estimado antes de confirmar para que no haya sorpresas.

Para tu seguridad, ambas apps te muestran el nombre del conductor, su foto, la placa del carro y el modelo del vehículo. Siempre verifica que el carro que llega coincida con la información en tu pantalla antes de subirte. Nunca te subas a un carro que no coincida. También puedes compartir tu viaje en vivo con un familiar para que sepan dónde estás.

Tanto Uber como Lyft están disponibles en español. Puedes cambiar el idioma en la configuración de la app.`,
    steps: [
      {
        title: 'Descarga Uber o Lyft',
        content: 'Abre la App Store (iPhone) o Google Play (Android) y busca "Uber" o "Lyft". Descarga la que prefieras (o ambas para comparar precios). Crea una cuenta con tu número de teléfono y correo electrónico.',
      },
      {
        title: 'Agrega una forma de pago',
        content: 'En la app, ve a la sección de "Pago" o "Billetera". Agrega una tarjeta de débito, crédito, o conecta PayPal. Todo se cobra automáticamente — no necesitas pagar en efectivo (aunque algunas ciudades lo permiten).',
      },
      {
        title: 'Pide tu viaje',
        content: 'Abre la app y escribe a dónde quieres ir en "¿A dónde quieres ir?". La app te mostrará opciones de viaje (económico, compartido, premium) con el precio y tiempo estimado. Selecciona la opción que prefieras.',
      },
      {
        title: 'Confirma y espera al conductor',
        content: 'Toca "Confirmar" para pedir el viaje. Verás el nombre del conductor, su foto, el modelo y color del carro, y la placa. La app te muestra en tiempo real dónde está el conductor y cuánto falta para que llegue.',
      },
      {
        title: 'Verifica el carro antes de subirte',
        content: 'Cuando llegue el carro, verifica que la placa, el modelo y el conductor coincidan con lo que dice la app. Pregunta "¿Viaje para [tu nombre]?" antes de subirte. Nunca te subas a un carro que no coincida.',
      },
      {
        title: 'Comparte tu viaje con alguien de confianza',
        content: 'Dentro de la app durante el viaje, busca "Compartir mi viaje" o "Share trip". Selecciona un contacto de confianza y ellos recibirán un enlace para ver tu ruta en tiempo real. Es una buena medida de seguridad.',
      },
    ],
  },

  // ─── 36. Cómo configurar el correo electrónico en tu teléfono ────────────────
  {
    slug: 'es-setup-email-phone',
    title: 'Cómo configurar el correo electrónico en tu teléfono',
    excerpt: 'Recibe y envía correos desde tu teléfono configurando tu cuenta de email paso a paso.',
    category: 'communication' as any,
    tags: ['email', 'gmail', 'outlook', 'yahoo', 'setup', 'beginner'],
    readTime: '5 min',
    thumbnailEmoji: '📧',
    difficulty: 'Beginner',
    publishedAt: '2026-04-16',
    body: `Tener tu correo electrónico en tu teléfono es como tener un buzón de correo que llevas contigo a todas partes. Puedes recibir y enviar correos al instante sin necesidad de prender la computadora. Esto es especialmente útil para recibir confirmaciones de citas médicas, recibos de compras, mensajes del trabajo o la escuela de tus hijos, y avisos importantes.

Los correos más populares en Estados Unidos son Gmail (de Google), Outlook/Hotmail (de Microsoft) y Yahoo Mail. Si ya tienes un correo electrónico, solo necesitas agregarlo a tu teléfono. Si no tienes correo, te recomendamos crear uno de Gmail porque es gratis y funciona muy bien con teléfonos Android, y también es compatible con iPhone.

En un iPhone, puedes usar la app de Mail que ya viene instalada, o descargar la app de Gmail, Outlook o Yahoo Mail desde la App Store. En Android, Gmail ya viene preinstalado y funciona con cualquier tipo de correo, no solo Gmail.

La configuración es muy sencilla: abres la app de correo, ingresas tu dirección de email (como tunombre@gmail.com) y tu contraseña, y la app hace el resto automáticamente. En pocos segundos, todos tus correos aparecerán en tu teléfono.

Un consejo importante: activa las notificaciones para que tu teléfono te avise cuando llegue un correo nuevo. Así nunca te perderás un mensaje importante.`,
    steps: [
      {
        title: 'Decide qué app de correo usar',
        content: 'iPhone: puedes usar la app "Mail" que ya viene incluida, o descargar "Gmail" o "Outlook" de la App Store. Android: usa la app "Gmail" que ya está instalada. Gmail puede manejar correos de Gmail, Outlook, Yahoo y más.',
      },
      {
        title: 'Abre la app y agrega tu cuenta',
        content: 'Abre la app de correo. Toca "Agregar cuenta" o "Iniciar sesión". Selecciona tu proveedor de correo: Google (Gmail), Microsoft (Outlook/Hotmail), Yahoo, u otro. Si no ves tu proveedor, selecciona "Otro".',
      },
      {
        title: 'Ingresa tu correo y contraseña',
        content: 'Escribe tu dirección de correo completa (ejemplo: maria.garcia@gmail.com) y tu contraseña. Si tienes activada la verificación en dos pasos, te pedirá un código que recibirás por mensaje de texto.',
      },
      {
        title: 'Permite que la app acceda a tu correo',
        content: 'La app te pedirá permisos para acceder a tu correo, calendario y contactos. Acepta todos para que funcione correctamente. Esto es seguro — solo le das acceso a la app oficial de correo.',
      },
      {
        title: 'Activa las notificaciones',
        content: 'Si la app te pregunta si quieres recibir notificaciones, di que sí. Así tu teléfono te avisará con un sonido o vibración cada vez que recibas un correo nuevo. Puedes ajustar esto después en Ajustes > Notificaciones.',
      },
      {
        title: 'Envía un correo de prueba',
        content: 'Toca el ícono de "+" o "Redactar" (generalmente un lápiz o un cuadrado con un lápiz). Escribe la dirección de un familiar en "Para", un asunto como "Prueba", y un mensaje como "¡Hola! Estoy probando mi correo nuevo". Toca Enviar.',
      },
    ],
  },

  // ─── 37. Cómo usar la cámara de tu teléfono ─────────────────────────────────
  {
    slug: 'es-phone-camera',
    title: 'Cómo usar la cámara de tu teléfono',
    excerpt: 'Toma fotos y videos claros con la cámara de tu teléfono, incluso si eres principiante.',
    category: 'essential-skills' as any,
    tags: ['camera', 'photos', 'video', 'photography', 'beginner'],
    readTime: '5 min',
    thumbnailEmoji: '📸',
    difficulty: 'Beginner',
    publishedAt: '2026-04-16',
    body: `La cámara de tu teléfono es una herramienta increíble que llevas contigo a todos lados. Los teléfonos modernos toman fotos de excelente calidad — en muchos casos, mejores que las cámaras digitales de hace unos años. Ya sea para capturar un momento familiar, tomar una foto de una receta, o grabar un video del recital de tus nietos, tu teléfono puede hacerlo todo.

La app de cámara es una de las más fáciles de usar. La mayoría de los teléfonos te permiten abrirla rápidamente sin desbloquear el teléfono — en iPhone, desliza a la izquierda desde la pantalla de bloqueo; en Android, presiona dos veces el botón de encendido.

Para tomar una buena foto, lo más importante es la luz. Trata de tener la luz frente a lo que estás fotografiando, no detrás. Por ejemplo, si quieres tomarle una foto a alguien, no los pongas frente a una ventana con el sol detrás porque saldrán oscuros. También asegúrate de que la lente de la cámara esté limpia — con frecuencia se ensucia con huellas de dedos.

Tu teléfono tiene dos cámaras: la trasera (que toma las mejores fotos) y la frontal o "selfie" (para tomarte fotos a ti mismo o hacer videollamadas). Puedes cambiar entre ellas tocando el ícono de flechas circulares en la app de cámara.

Además de fotos, puedes grabar videos deslizando al modo "Video" en la app de cámara. También puedes tomar fotos panorámicas (para paisajes anchos) y fotos en modo retrato (que desenfocan el fondo como las fotos profesionales).`,
    steps: [
      {
        title: 'Abre la cámara rápidamente',
        content: 'iPhone: desde la pantalla de bloqueo, desliza a la izquierda. Android: presiona dos veces el botón de encendido. También puedes tocar el ícono de la cámara en tu pantalla principal. No necesitas desbloquear el teléfono.',
      },
      {
        title: 'Encuadra la foto y enfoca',
        content: 'Apunta tu teléfono hacia lo que quieres fotografiar. Toca la pantalla en el objeto principal para enfocarlo — verás un cuadrito amarillo que indica dónde está el enfoque. Sostén el teléfono con ambas manos para que no salga movida.',
      },
      {
        title: 'Toma la foto',
        content: 'Toca el botón grande y redondo en la parte inferior de la pantalla (el "obturador"). Escucharás un sonido de clic y la foto se guardará automáticamente en tu galería. Puedes tomar varias fotos seguidas.',
      },
      {
        title: 'Cambia a la cámara frontal para selfies',
        content: 'Toca el ícono de flechas circulares (🔄) para cambiar entre la cámara trasera y la frontal. La cámara frontal es perfecta para tomarte fotos a ti mismo, con familia, o para videollamadas.',
      },
      {
        title: 'Graba un video',
        content: 'Desliza a la derecha en la app de cámara hasta que diga "Video" o toca "Video" en las opciones. Toca el botón rojo para empezar a grabar y tócalo de nuevo para detener. El video se guardará en tu galería.',
      },
      {
        title: 'Revisa y comparte tus fotos',
        content: 'Toca la miniatura de la última foto en la esquina inferior de la cámara para verla. Desde ahí puedes deslizar para ver todas tus fotos, borrar las que no te gusten, o tocar el ícono de compartir para enviarla.',
      },
    ],
  },

  // ─── 38. Cómo imprimir desde tu teléfono ─────────────────────────────────────
  {
    slug: 'es-print-from-phone',
    title: 'Cómo imprimir desde tu teléfono',
    excerpt: 'Imprime documentos, fotos y correos directamente desde tu teléfono sin cables.',
    category: 'essential-skills' as any,
    tags: ['printing', 'wireless', 'airprint', 'documents', 'beginner'],
    readTime: '5 min',
    thumbnailEmoji: '🖨️',
    difficulty: 'Beginner',
    publishedAt: '2026-04-16',
    body: `Imprimir desde tu teléfono es más fácil de lo que piensas. No necesitas cables ni una computadora — si tu impresora se conecta a WiFi (la mayoría de las impresoras modernas lo hacen), puedes enviar documentos, fotos, correos y más directamente desde tu teléfono. Es muy útil para imprimir recetas, cupones, formularios del gobierno, cartas, y fotos familiares.

Para que funcione, tu teléfono y tu impresora deben estar conectados a la misma red WiFi. Es decir, ambos deben usar el mismo internet de tu casa. Si tienes un iPhone, la función se llama AirPrint y funciona automáticamente con impresoras compatibles de HP, Canon, Epson y Brother. En Android, se llama Google Cloud Print o simplemente "Imprimir".

Las marcas de impresoras más populares en Estados Unidos son HP, Canon, Epson y Brother. Todas tienen sus propias apps gratuitas que puedes descargar para tener más opciones de impresión: HP Smart, Canon PRINT, Epson iPrint, y Brother iPrint&Scan.

Si no tienes impresora en casa, puedes imprimir en tiendas como FedEx Office, Staples, CVS, Walgreens o la biblioteca pública. Muchas de estas tiendas tienen apps donde puedes enviar tus documentos para recogerlos ya impresos.

Un consejo: antes de imprimir, revisa la vista previa en tu pantalla para asegurarte de que el documento se ve bien y no vas a gastar tinta y papel innecesariamente.`,
    steps: [
      {
        title: 'Verifica que tu impresora esté conectada al WiFi',
        content: 'Enciende tu impresora y asegúrate de que esté conectada a la misma red WiFi que tu teléfono. Busca el ícono de WiFi en la pantalla de la impresora. Si no está conectada, usa el menú de configuración de la impresora para conectarla.',
      },
      {
        title: 'Abre lo que quieres imprimir',
        content: 'Puede ser una foto en tu galería, un correo electrónico, un documento PDF, o una página web. Abre el archivo que quieras imprimir en la app correspondiente.',
      },
      {
        title: 'Busca la opción de imprimir',
        content: 'Toca el ícono de compartir (cuadrado con flecha en iPhone, tres puntos en Android) y busca "Imprimir" en las opciones. En algunas apps, la opción está en el menú de tres puntos (⋯) arriba a la derecha.',
      },
      {
        title: 'Selecciona tu impresora',
        content: 'Tu teléfono buscará impresoras disponibles en tu red WiFi. Toca el nombre de tu impresora cuando aparezca. Si no aparece, verifica que ambos dispositivos estén en la misma red WiFi.',
      },
      {
        title: 'Ajusta las opciones y toca Imprimir',
        content: 'Puedes cambiar el número de copias, elegir blanco y negro o color, y seleccionar qué páginas imprimir. Cuando todo esté listo, toca "Imprimir". El documento saldrá de tu impresora en unos segundos.',
      },
    ],
  },

  // ─── 39. Cómo usar Venmo de forma segura ─────────────────────────────────────
  {
    slug: 'es-venmo-safely',
    title: 'Cómo usar Venmo de forma segura',
    excerpt: 'Envía y recibe dinero con Venmo de manera segura, paso a paso.',
    category: 'financial-tech' as any,
    tags: ['venmo', 'payments', 'money', 'safety', 'beginner'],
    readTime: '5 min',
    thumbnailEmoji: '💸',
    difficulty: 'Beginner',
    publishedAt: '2026-04-16',
    body: `Venmo es una de las aplicaciones más populares en Estados Unidos para enviar y recibir dinero entre personas. Es perfecta para dividir la cuenta de un restaurante, pagarle a alguien por un mandado, enviar dinero a tus hijos, o recibir pagos por cosas que vendas. Millones de estadounidenses la usan todos los días.

Venmo es propiedad de PayPal, una empresa muy conocida y confiable. La app es gratuita y enviar dinero desde tu cuenta de Venmo, banco o tarjeta de débito no tiene costo. Solo cobran una pequeña comisión (alrededor de 3%) si usas tarjeta de crédito.

Para empezar, descarga Venmo desde la App Store o Google Play y crea una cuenta con tu número de teléfono y correo electrónico. Luego necesitas conectar tu banco o tarjeta de débito para poder agregar fondos y enviar dinero.

Cuando quieras enviarle dinero a alguien, buscas a la persona por su nombre, usuario de Venmo o número de teléfono, escribes la cantidad, agregas una nota (como "renta de abril" o "pizza de anoche"), y tocas "Pagar". El dinero llega al instante a su cuenta de Venmo.

Para mantener tu dinero seguro, es muy importante que actives la verificación en dos pasos y que uses un PIN o huella digital para abrir la app. Nunca envíes dinero a personas que no conoces personalmente, y desconfía de mensajes de extraños pidiéndote dinero — es una estafa muy común.`,
    steps: [
      {
        title: 'Descarga Venmo y crea tu cuenta',
        content: 'Busca "Venmo" en la App Store (iPhone) o Google Play (Android). Descárgala gratis. Regístrate con tu número de teléfono, correo electrónico y crea una contraseña segura.',
      },
      {
        title: 'Conecta tu banco o tarjeta de débito',
        content: 'Ve al menú (☰) > Configuración > Métodos de pago > Agregar banco o tarjeta. Puedes conectar tu banco directamente ingresando tu usuario y contraseña de banca en línea, o agregar una tarjeta de débito manualmente.',
      },
      {
        title: 'Activa la seguridad de la app',
        content: 'Ve a Configuración > Seguridad. Activa el PIN o la huella digital para que nadie pueda abrir la app sin tu permiso. También activa la verificación en dos pasos para proteger tu cuenta.',
      },
      {
        title: 'Envía dinero a alguien',
        content: 'Toca el botón de "Pagar o solicitar" (el ícono de lápiz arriba). Busca a la persona por nombre, teléfono o usuario. Ingresa la cantidad, escribe una nota (como "cena"), y toca "Pagar".',
      },
      {
        title: 'Cambia tu privacidad',
        content: 'Por defecto, Venmo muestra tus transacciones a todos. Para cambiar esto, ve a Configuración > Privacidad y selecciona "Privado". Así nadie más podrá ver a quién le envías dinero.',
      },
      {
        title: 'Transfiere dinero a tu banco',
        content: 'Si recibes dinero en Venmo, puedes transferirlo a tu banco. Ve a tu saldo de Venmo y toca "Transferir". La transferencia estándar (gratis) tarda 1-3 días. La transferencia instantánea cobra $0.25.',
      },
    ],
  },

  // ─── 40. Cómo configurar un router WiFi nuevo ────────────────────────────────
  {
    slug: 'es-setup-wifi-router',
    title: 'Cómo configurar un router WiFi nuevo',
    excerpt: 'Configura tu nuevo router WiFi paso a paso para tener internet en toda tu casa.',
    category: 'internet-connectivity' as any,
    tags: ['router', 'wifi', 'internet', 'setup', 'networking', 'beginner'],
    readTime: '6 min',
    thumbnailEmoji: '📡',
    difficulty: 'Beginner',
    publishedAt: '2026-04-16',
    body: `Un router WiFi es la cajita que reparte la señal de internet a todos los dispositivos de tu casa — tu teléfono, computadora, televisor, tableta y más. Si acabas de contratar internet con un proveedor como Spectrum, Xfinity (Comcast), AT&T o T-Mobile Home Internet, probablemente te dieron un router o compraste uno nuevo. Aquí te enseñamos a configurarlo.

El router se conecta a internet a través de un cable que viene de la pared (cable coaxial o fibra óptica) o del módem que te dio tu proveedor. El módem recibe la señal de internet y el router la reparte por toda tu casa vía WiFi. Algunos proveedores te dan un aparato que es módem y router combinado — esto es lo más común.

Para la configuración inicial, necesitarás el router, el cable de corriente, un cable Ethernet (un cable plano con un conector transparente de plástico que generalmente viene incluido), y la información de tu cuenta de internet.

Una vez configurado, es importante que cambies el nombre de la red WiFi y la contraseña que vienen por defecto. Los nombres y contraseñas de fábrica son fáciles de adivinar para los hackers. Elige un nombre de red que puedas identificar fácilmente (como "WiFi_Casa_Garcia") y una contraseña de al menos 12 caracteres.

La ubicación del router también importa. Colócalo en un lugar central de tu casa, preferiblemente en alto (como un estante), lejos de paredes gruesas y del microondas (el microondas puede interferir con la señal WiFi).`,
    steps: [
      {
        title: 'Conecta el router a la corriente y al internet',
        content: 'Conecta el cable de corriente del router a la pared. Luego conecta el cable de internet: si tienes un módem separado, usa el cable Ethernet para conectar el puerto "WAN" o "Internet" del router al módem. Espera 2-3 minutos hasta que las luces se estabilicen.',
      },
      {
        title: 'Encuentra el nombre y contraseña predeterminados',
        content: 'Busca una etiqueta en la parte de abajo o trasera del router. Ahí verás el nombre de la red WiFi (SSID) y la contraseña predeterminados. También puede venir en una tarjeta dentro de la caja del router.',
      },
      {
        title: 'Conéctate al WiFi desde tu teléfono',
        content: 'En tu teléfono, ve a Ajustes > WiFi. Busca el nombre de la red que leíste en la etiqueta del router y conéctate usando la contraseña predeterminada. Esto es temporal — luego la cambiarás.',
      },
      {
        title: 'Configura el router desde la app o el navegador',
        content: 'La mayoría de los routers tienen una app (como Xfinity My Account, My Spectrum, AT&T Smart Home Manager). Descárgala y sigue las instrucciones. Si no hay app, abre el navegador y escribe 192.168.1.1 o la dirección que indique el manual.',
      },
      {
        title: 'Cambia el nombre y contraseña del WiFi',
        content: 'En la app o configuración del router, busca la opción de "Red WiFi" o "Wireless Settings". Cambia el nombre de la red a algo que reconozcas (como "WiFi_Casa") y crea una contraseña fuerte de al menos 12 caracteres.',
      },
      {
        title: 'Reconecta todos tus dispositivos',
        content: 'Después de cambiar el nombre y contraseña, todos los dispositivos se desconectarán. Ve a Ajustes > WiFi en cada dispositivo (teléfono, tableta, TV, computadora) y conéctate con el nuevo nombre y contraseña.',
      },
    ],
  },

  // ─── 41. Cómo usar Cash App paso a paso ──────────────────────────────────────
  {
    slug: 'es-cash-app-guide',
    title: 'Cómo usar Cash App paso a paso',
    excerpt: 'Aprende a enviar, recibir dinero y usar tu Cash App Card con esta guía completa.',
    category: 'financial-tech' as any,
    tags: ['cash-app', 'payments', 'money-transfer', 'debit-card', 'beginner'],
    readTime: '6 min',
    thumbnailEmoji: '💵',
    difficulty: 'Beginner',
    publishedAt: '2026-04-16',
    body: `Cash App es una aplicación gratuita de Block (antes Square) que te permite enviar y recibir dinero instantáneamente. Es muy popular en Estados Unidos, especialmente entre personas que quieren una forma rápida de mandar dinero a familiares y amigos, pagar por servicios, o incluso recibir pagos del gobierno. Más de 50 millones de personas en EE.UU. la usan.

Con Cash App puedes hacer varias cosas: enviar dinero a cualquier persona que tenga la app, recibir pagos, pedir una tarjeta de débito gratuita llamada "Cash Card" que puedes usar en cualquier tienda que acepte Visa, e incluso depositar cheques tomándoles una foto. Algunos empleadores también usan Cash App para pagar a sus trabajadores.

Para empezar, descarga Cash App desde la App Store o Google Play. Te pedirá tu número de teléfono o correo electrónico para crear la cuenta. Luego necesitas elegir un "Cash Tag" — es como tu nombre de usuario (empieza con $, por ejemplo $MariaGarcia). Este es el nombre que le das a la gente para que te envíen dinero.

Después, conecta tu banco o tarjeta de débito para poder agregar fondos y retirar dinero. Cash App usa el sistema bancario de EE.UU., así que necesitas una cuenta en un banco estadounidense.

Un aspecto importante de seguridad: Cash App nunca te llamará por teléfono para pedirte tu PIN, contraseña o código de verificación. Si alguien te llama diciendo que es de Cash App, es una estafa. El soporte real de Cash App solo se contacta a través de la app.`,
    steps: [
      {
        title: 'Descarga Cash App y crea tu cuenta',
        content: 'Busca "Cash App" en la App Store o Google Play. Descárgala gratis. Ábrela, ingresa tu número de teléfono o correo, y sigue las instrucciones. Crea un Cash Tag único (como $TuNombre) — esto es lo que le darás a la gente para que te paguen.',
      },
      {
        title: 'Conecta tu banco o tarjeta de débito',
        content: 'Toca el ícono del banco en la pantalla principal. Selecciona "Agregar banco" e ingresa el número de tu cuenta bancaria y número de ruta (routing number). También puedes agregar una tarjeta de débito ingresando el número de la tarjeta.',
      },
      {
        title: 'Envía dinero a alguien',
        content: 'Toca "$" en la pantalla principal, escribe la cantidad (ejemplo: 25), toca "Pagar", busca a la persona por su Cash Tag, teléfono o nombre, y toca "Pagar". El dinero llega al instante a su cuenta de Cash App.',
      },
      {
        title: 'Pide tu Cash Card gratis',
        content: 'Toca el ícono de la tarjeta en la parte inferior. Selecciona "Obtener Cash Card". Es una tarjeta de débito Visa gratuita que te envían por correo. La puedes usar en tiendas, gasolineras, restaurantes y cajeros automáticos.',
      },
      {
        title: 'Deposita un cheque con tu cámara',
        content: 'Toca el ícono del banco > "Depositar cheque". Endosa el cheque (firma atrás y escribe "Solo para depósito móvil"). Toma una foto del frente y reverso del cheque. Los fondos generalmente están disponibles en 1-2 días.',
      },
      {
        title: 'Activa la seguridad de tu cuenta',
        content: 'Ve a tu foto de perfil > Privacidad y seguridad. Activa el "Security Lock" (bloqueo de seguridad) para que te pida un PIN antes de cada pago. También activa las notificaciones para saber cada vez que se mueva dinero en tu cuenta.',
      },
    ],
  },

  // ─── 42. Cómo proteger tu cuenta de banco en línea ───────────────────────────
  {
    slug: 'es-online-banking-security',
    title: 'Cómo proteger tu cuenta de banco en línea',
    excerpt: 'Protege tu dinero con estos consejos de seguridad para tu banca en línea y app del banco.',
    category: 'financial-tech' as any,
    tags: ['banking', 'security', 'online-banking', 'fraud', 'safety', 'beginner'],
    readTime: '6 min',
    thumbnailEmoji: '🏦',
    difficulty: 'Beginner',
    publishedAt: '2026-04-16',
    body: `La banca en línea (online banking) te permite manejar tu dinero desde tu teléfono o computadora sin ir al banco. Puedes ver tu saldo, pagar facturas, transferir dinero y depositar cheques desde la comodidad de tu casa. Los bancos más grandes de Estados Unidos como Chase, Bank of America, Wells Fargo, Citibank y Capital One tienen apps excelentes y seguras.

Sin embargo, es importante tomar precauciones para proteger tu cuenta. Los estafadores están constantemente inventando nuevas formas de robar información bancaria, y la comunidad hispana es uno de sus blancos principales. Según la FTC (Comisión Federal de Comercio), los hispanos en EE.UU. reportaron más de $1 mil millones en pérdidas por fraude en años recientes.

La primera regla de seguridad: tu banco nunca te llamará, enviará un mensaje de texto o correo electrónico pidiéndote tu contraseña, PIN, número de seguro social o código de verificación. Si alguien te contacta diciendo que es de tu banco y te pide esta información, es una estafa — cuelga inmediatamente y llama al número que aparece detrás de tu tarjeta bancaria.

Siempre descarga la app oficial de tu banco desde la App Store o Google Play. Nunca descargues una app bancaria desde un enlace que te llegue por mensaje de texto o correo electrónico — esto es "phishing", una técnica que usan los estafadores para crear apps falsas que se parecen a las de tu banco.

Revisa tu cuenta bancaria al menos una vez por semana. Si ves alguna transacción que no reconoces, llama a tu banco inmediatamente al número que está detrás de tu tarjeta. Mientras más rápido reportes actividad sospechosa, más fácil es recuperar tu dinero.`,
    steps: [
      {
        title: 'Descarga la app oficial de tu banco',
        content: 'Abre la App Store o Google Play y busca el nombre exacto de tu banco (Chase, Bank of America, Wells Fargo, etc.). Verifica que el creador de la app sea el banco oficial. Descárgala e inicia sesión con tus credenciales.',
      },
      {
        title: 'Crea una contraseña fuerte y única',
        content: 'Tu contraseña del banco debe ser diferente a todas las demás. Usa al menos 12 caracteres con mayúsculas, minúsculas, números y símbolos. Nunca uses la misma contraseña del banco para Facebook, correo u otras cuentas.',
      },
      {
        title: 'Activa la verificación en dos pasos',
        content: 'En la app de tu banco, ve a Seguridad o Configuración > Verificación en dos pasos. Actívala. Cada vez que inicies sesión, te enviarán un código por mensaje de texto o llamada que debes ingresar. Esto evita que alguien entre a tu cuenta aunque sepa tu contraseña.',
      },
      {
        title: 'Activa alertas de transacciones',
        content: 'Configura tu app para que te envíe una notificación cada vez que se haga un cobro, transferencia o retiro. Así sabrás al instante si alguien usa tu cuenta sin permiso. Búscalo en Configuración > Alertas.',
      },
      {
        title: 'Nunca uses WiFi público para tu banco',
        content: 'No entres a tu cuenta del banco cuando estés conectado al WiFi de Starbucks, el aeropuerto, hoteles u otros lugares públicos. Los hackers pueden interceptar tu información. Usa tus datos celulares (4G/5G) o espera a llegar a tu casa.',
      },
      {
        title: 'Revisa tu cuenta semanalmente',
        content: 'Abre la app de tu banco al menos una vez por semana y revisa las transacciones recientes. Si ves algo que no reconoces, llama inmediatamente al número de atrás de tu tarjeta bancaria. No esperes — reporta cualquier actividad sospechosa de inmediato.',
      },
    ],
  },

  // ─── 43. Cómo configurar el modo No Molestar ────────────────────────────────
  {
    slug: 'es-do-not-disturb',
    title: 'Cómo configurar el modo No Molestar',
    excerpt: 'Silencia llamadas y notificaciones cuando necesitas descansar o concentrarte.',
    category: 'phone-guides' as any,
    tags: ['do-not-disturb', 'notifications', 'quiet', 'sleep', 'beginner'],
    readTime: '4 min',
    thumbnailEmoji: '🌙',
    difficulty: 'Beginner',
    publishedAt: '2026-04-16',
    body: `El modo "No Molestar" (o "Do Not Disturb" en inglés) es una función de tu teléfono que silencia llamadas, mensajes de texto, notificaciones y alertas temporalmente. Es perfecto para cuando quieres dormir sin que te despierten, cuando estás en una cita médica, en la iglesia, en una reunión, o simplemente cuando necesitas un rato de tranquilidad.

Cuando activas el modo No Molestar, tu teléfono no sonará ni vibrará. Las llamadas y mensajes siguen llegando — simplemente no te notifican hasta que desactives el modo. Es como poner tu teléfono en silencio, pero con más opciones de personalización.

La mejor parte es que puedes permitir que ciertas personas te llamen incluso cuando No Molestar está activado. Por ejemplo, puedes configurarlo para que las llamadas de tus hijos, tu pareja o tu médico siempre suenen, mientras que las llamadas de números desconocidos o de spam se silencian completamente.

En iPhone, la función se llama "Modos de concentración" (Focus) y No Molestar es uno de ellos. En Android, la función se llama simplemente "No Molestar" o "Do Not Disturb".

También puedes programar un horario para que No Molestar se active y desactive automáticamente. Por ejemplo, puedes configurarlo para que se active todas las noches a las 10 PM y se desactive a las 7 AM. Así no tienes que acordarte de activarlo cada noche.`,
    steps: [
      {
        title: 'Encuentra la opción de No Molestar',
        content: 'iPhone: ve a Ajustes > Modos de concentración > No Molestar. También puedes deslizar desde arriba a la derecha y tocar el ícono de la luna (🌙). Android: ve a Configuración > Sonido > No Molestar. También puedes deslizar hacia abajo y tocar el ícono de No Molestar.',
      },
      {
        title: 'Actívalo manualmente',
        content: 'La forma más rápida es desde el Centro de Control. iPhone: desliza desde la esquina superior derecha y toca la luna. Android: desliza hacia abajo desde arriba y toca "No Molestar". El ícono de la luna aparecerá en tu barra de estado.',
      },
      {
        title: 'Permite llamadas de tus contactos importantes',
        content: 'iPhone: en Modos de concentración > No Molestar > Personas > Llamadas de, selecciona "Favoritos" o agrega personas específicas. Android: en No Molestar > Excepciones > Llamadas, selecciona "Solo de contactos favoritos".',
      },
      {
        title: 'Programa un horario automático',
        content: 'iPhone: en No Molestar, toca "Agregar horario". Android: en No Molestar, toca "Horarios" o "Activar automáticamente". Configura la hora de inicio (como 10 PM) y la hora de fin (como 7 AM) para que se active solo durante la noche.',
      },
      {
        title: 'Permite llamadas repetidas de emergencia',
        content: 'Activa la opción de "Llamadas repetidas" en la configuración de No Molestar. Si alguien te llama dos veces en 3 minutos, la segunda llamada sonará. Esto permite que las llamadas de emergencia reales te lleguen.',
      },
    ],
  },

  // ─── 44. Cómo usar la aplicación del clima ───────────────────────────────────
  {
    slug: 'es-weather-app',
    title: 'Cómo usar la aplicación del clima',
    excerpt: 'Consulta el clima actual y el pronóstico de la semana usando la app del clima en tu teléfono.',
    category: 'essential-skills' as any,
    tags: ['weather', 'clima', 'forecast', 'app', 'beginner'],
    readTime: '4 min',
    thumbnailEmoji: '🌤️',
    difficulty: 'Beginner',
    publishedAt: '2026-04-16',
    body: `La aplicación del clima te dice la temperatura actual, si va a llover, si hará frío o calor, y el pronóstico para los próximos días. Es como tener un meteorólogo personal en tu bolsillo. Es especialmente útil para planear qué ropa ponerte, si debes llevar sombrilla, o si es un buen día para actividades al aire libre.

Tu teléfono ya viene con una app del clima preinstalada. En iPhone, se llama "Clima" (Weather) y tiene un ícono azul con nubes y sol. En Android, la app de Google ya incluye información del clima, y muchos teléfonos Samsung y otros traen su propia app del clima.

La app te muestra la temperatura en grados Fahrenheit (que es lo que se usa en Estados Unidos) o Celsius. Si ves un número como 75°F, eso es una temperatura agradable, perfecta para estar afuera. Si ves 32°F o menos, hace mucho frío y puede haber hielo. Si ves 90°F o más, hace mucho calor y debes hidratarte bien.

También puedes ver alertas de clima severo como tormentas, huracanes, tornados y olas de calor. Estas alertas son importantes para tu seguridad, especialmente si vives en áreas propensas a este tipo de eventos climáticos. Tu teléfono te enviará una notificación de emergencia automáticamente si hay un peligro en tu zona, pero la app del clima te da más detalles.

Si quieres más opciones, apps gratuitas como Weather Channel, AccuWeather y Weather Underground ofrecen pronósticos más detallados, radar de lluvia en tiempo real y alertas personalizadas.`,
    steps: [
      {
        title: 'Abre la app del clima en tu teléfono',
        content: 'iPhone: busca el ícono azul de "Clima" (Weather). Android: busca "Clima" o "Weather" en tu pantalla principal, o pregúntale a Google Assistant "¿Qué clima hace hoy?". Si no la encuentras, descarga "The Weather Channel" gratis.',
      },
      {
        title: 'Permite el acceso a tu ubicación',
        content: 'La app te preguntará si puede usar tu ubicación para darte el clima de donde estás. Di que sí ("Permitir mientras se usa la app"). Así te mostrará la temperatura exacta de tu zona.',
      },
      {
        title: 'Lee la temperatura actual',
        content: 'La pantalla principal te muestra la temperatura actual en grande. Debajo verás si está soleado, nublado, lloviendo, etc. También verás la temperatura máxima y mínima del día. Recuerda: en EE.UU. se usa Fahrenheit, no Celsius.',
      },
      {
        title: 'Revisa el pronóstico de la semana',
        content: 'Desliza hacia abajo para ver el pronóstico de los próximos 7-10 días. Cada día muestra la temperatura alta y baja, y si se esperan lluvias. Esto te ayuda a planear actividades y saber qué ropa usar.',
      },
      {
        title: 'Agrega otras ciudades',
        content: 'Si tienes familia en otra ciudad o estado, puedes agregar su ubicación. Toca el ícono de lista o el "+" y busca la ciudad (como "Houston, TX" o "Los Angeles, CA"). Así puedes ver el clima de varias ciudades.',
      },
    ],
  },

  // ─── 45. Cómo copiar y pegar en tu teléfono ─────────────────────────────────
  {
    slug: 'es-copy-paste',
    title: 'Cómo copiar y pegar en tu teléfono',
    excerpt: 'Domina una de las funciones más útiles: copiar texto, imágenes y enlaces para pegarlos donde quieras.',
    category: 'essential-skills' as any,
    tags: ['copy', 'paste', 'clipboard', 'essential', 'beginner'],
    readTime: '4 min',
    thumbnailEmoji: '📋',
    difficulty: 'Beginner',
    publishedAt: '2026-04-16',
    body: `Copiar y pegar es una de las funciones más útiles que puedes aprender en tu teléfono. Te permite tomar un texto, una dirección, un enlace web, un número de teléfono o casi cualquier información de un lugar y ponerla en otro, sin tener que escribirla de nuevo. Es como recortar algo de un papel y pegarlo en otro.

Por ejemplo, si alguien te envía una dirección por mensaje de texto y quieres buscarla en Google Maps, no necesitas memorizar la dirección y escribirla letra por letra. Simplemente la copias del mensaje y la pegas en Google Maps. También es muy útil para copiar contraseñas largas, números de confirmación, o recetas.

El proceso es muy similar en iPhone y Android. Primero, mantienes presionado el dedo sobre el texto que quieres copiar hasta que se resalte en azul. Luego ajustas los "manijitas" (esos círculos azules al inicio y fin del texto) para seleccionar exactamente lo que quieres. Después, tocas "Copiar" en el menú que aparece.

Para pegar lo que copiaste, ve a la otra app o campo de texto donde lo quieres poner, mantén presionado el dedo en el espacio vacío, y toca "Pegar". El texto aparecerá como si lo hubieras escrito.

También puedes copiar y pegar imágenes en muchas apps. En WhatsApp, por ejemplo, puedes copiar una imagen y pegarla en otra conversación. Y en el navegador, puedes copiar la dirección de una página web (la URL) y pegarla en un mensaje para compartirla.`,
    steps: [
      {
        title: 'Selecciona el texto que quieres copiar',
        content: 'Mantén presionado el dedo sobre la palabra o número que quieres copiar. Espera hasta que se resalte en azul y aparezcan dos "manijitas" o bolitas azules. No levantes el dedo hasta que veas el resaltado.',
      },
      {
        title: 'Ajusta la selección si es necesario',
        content: 'Si se resaltó más o menos texto del que necesitas, arrastra las bolitas azules al inicio y fin del texto que quieres copiar. Puedes seleccionar una palabra, una oración completa o un párrafo entero.',
      },
      {
        title: 'Toca "Copiar"',
        content: 'Aparecerá un menú con opciones como "Copiar", "Cortar", "Seleccionar todo". Toca "Copiar". El texto se guardará temporalmente en la memoria de tu teléfono (esto se llama "portapapeles"). No verás ningún cambio visible, pero el texto ya está copiado.',
      },
      {
        title: 'Ve al lugar donde quieres pegar',
        content: 'Abre la app donde quieres pegar el texto — puede ser un mensaje de texto, WhatsApp, un correo electrónico, Google Maps, notas, o cualquier otro lugar donde puedas escribir.',
      },
      {
        title: 'Pega el texto',
        content: 'Toca el campo donde quieres escribir y mantén presionado el dedo por un segundo. Aparecerá la opción "Pegar". Tócala y el texto que copiaste aparecerá instantáneamente. Ya puedes enviarlo o editarlo.',
      },
    ],
  },

  // ─── 46. Cómo configurar recordatorios de medicamentos ───────────────────────
  {
    slug: 'es-medication-reminders',
    title: 'Cómo configurar recordatorios de medicamentos',
    excerpt: 'Usa tu teléfono para recordarte cuándo tomar tus medicinas y nunca olvidar una dosis.',
    category: 'health-tech' as any,
    tags: ['medication', 'reminders', 'health', 'alarms', 'beginner'],
    readTime: '5 min',
    thumbnailEmoji: '💊',
    difficulty: 'Beginner',
    publishedAt: '2026-04-16',
    body: `Si tomas medicamentos todos los días, sabes lo fácil que es olvidar una dosis. Tu teléfono puede ayudarte a recordar exactamente cuándo tomar cada medicina, haciendo que tu salud sea una prioridad sin tener que depender solo de tu memoria. Es como tener una enfermera personal que te avisa a la hora exacta.

Hay varias formas de configurar recordatorios. La más sencilla es usar las alarmas de tu teléfono, pero hay opciones mejores como la app de Salud de Apple (iPhone), Google Clock (Android), o apps especializadas como Medisafe que están diseñadas específicamente para esto.

La app de Salud de Apple (iPhone) tiene una función llamada "Medicamentos" que te permite registrar cada medicina que tomas, incluyendo el nombre, la dosis y los horarios. Te envía recordatorios automáticos y lleva un registro de cuándo tomaste cada dosis. Esto puede ser muy útil cuando vas al doctor y te pregunta si estás tomando tu medicina regularmente.

En Android, puedes usar Google Clock para poner alarmas con etiquetas como "Tomar medicina de la presión" o descargar Medisafe, que es gratuita y muy popular. Medisafe te muestra una bandeja virtual de pastillas y te envía alertas con sonido hasta que confirmes que tomaste tu medicina.

Si tomas varias medicinas al día, los recordatorios son aún más importantes. Configurar un recordatorio para cada medicina evita confusiones y te ayuda a mantener el tratamiento correcto que te recetó tu doctor.`,
    steps: [
      {
        title: 'Decide qué método usar',
        content: 'iPhone: usa la app "Salud" (el ícono blanco con un corazón rojo) > pestaña "Explorar" > "Medicamentos". Android: usa la app de Reloj para alarmas o descarga "Medisafe" gratis desde Google Play. Ambas opciones funcionan muy bien.',
      },
      {
        title: 'Agrega tu medicamento',
        content: 'iPhone (Salud): toca "Agregar un medicamento", escribe el nombre y selecciona la forma (pastilla, cápsula, líquido). Android (Medisafe): toca "+" y busca tu medicamento. Ingresa la dosis que te recetó tu doctor.',
      },
      {
        title: 'Configura los horarios',
        content: 'Ingresa a qué hora debes tomar cada medicina. Si es una vez al día, pon la hora. Si son dos o tres veces al día, agrega cada horario. Por ejemplo: "Metformina" a las 8:00 AM y 8:00 PM.',
      },
      {
        title: 'Activa las notificaciones',
        content: 'Asegúrate de que las notificaciones estén activadas para la app. Cuando sea hora de tu medicina, tu teléfono sonará y mostrará una notificación en la pantalla. No la ignores — toca para confirmar que la tomaste.',
      },
      {
        title: 'Confirma cuando tomes tu medicina',
        content: 'Cada vez que suene el recordatorio, toca "Tomada" o "Listo" para registrar que tomaste tu dosis. Esto crea un historial que puedes mostrarle a tu doctor. Si no puedes tomarla en ese momento, la app te recordará de nuevo.',
      },
      {
        title: 'Revisa tu historial de medicamentos',
        content: 'iPhone: en Salud > Medicamentos, ve tu registro de las últimas semanas. Medisafe: toca "Historial" para ver qué días tomaste tus medicinas y cuáles olvidaste. Esta información es valiosa para tus citas médicas.',
      },
    ],
  },

  // ─── 47. Cómo usar Netflix en tu teléfono o televisor ────────────────────────
  {
    slug: 'es-netflix-guide',
    title: 'Cómo usar Netflix en tu teléfono o televisor',
    excerpt: 'Aprende a ver películas y series en Netflix desde tu teléfono, tableta o Smart TV.',
    category: 'entertainment' as any,
    tags: ['netflix', 'streaming', 'movies', 'tv-shows', 'entertainment', 'beginner'],
    readTime: '5 min',
    thumbnailEmoji: '🎬',
    difficulty: 'Beginner',
    publishedAt: '2026-04-16',
    body: `Netflix es uno de los servicios de entretenimiento más populares del mundo. Te permite ver miles de películas, series, documentales y programas cuando quieras, sin comerciales. En lugar de esperar a que un programa pase por televisión, tú decides qué ver y cuándo verlo. Funciona en tu teléfono, tableta, computadora, y Smart TV.

Netflix requiere una suscripción mensual. El plan más económico (con anuncios) cuesta $7.99 al mes, el plan estándar cuesta $17.99 al mes, y el plan premium $24.99. Puedes cancelar en cualquier momento sin penalidad. Netflix tiene mucho contenido en español, incluyendo series originales, películas dobladas y subtituladas, y contenido de toda Latinoamérica.

Para ver Netflix en tu televisor inteligente (Smart TV), busca la app de Netflix que generalmente ya viene preinstalada. Si no la tiene, descárgala desde la tienda de apps de tu televisor. También puedes usar dispositivos como Roku, Amazon Fire Stick o Chromecast, que se conectan a tu televisor y te permiten ver Netflix.

Una función muy útil es la de descargar películas y series para verlas sin internet. Esto es perfecto para viajes largos en carro o avión. Solo funciona en teléfonos y tabletas con la app de Netflix.

Netflix te recomienda películas y series basándose en lo que ves. Mientras más uses Netflix, mejores serán las recomendaciones. También puedes crear perfiles separados para cada persona de la familia, incluyendo un perfil especial para niños con contenido apropiado para su edad.`,
    steps: [
      {
        title: 'Crea tu cuenta de Netflix',
        content: 'Ve a netflix.com en tu navegador o descarga la app de Netflix. Toca "Comenzar" y sigue los pasos para crear una cuenta. Necesitarás un correo electrónico, una contraseña y una forma de pago (tarjeta de débito o crédito).',
      },
      {
        title: 'Descarga la app en tu dispositivo',
        content: 'En tu teléfono: busca "Netflix" en la App Store o Google Play. En tu Smart TV: busca Netflix en la tienda de apps del televisor. En Roku o Fire Stick: Netflix generalmente ya está instalado. Inicia sesión con tu correo y contraseña.',
      },
      {
        title: 'Crea perfiles para tu familia',
        content: 'Netflix permite hasta 5 perfiles por cuenta. Toca "Agregar perfil" para crear uno para cada familiar. Para niños, activa la opción "Perfil infantil" para que solo vean contenido apropiado para su edad.',
      },
      {
        title: 'Busca algo para ver',
        content: 'Usa la lupa de búsqueda para buscar una película o serie por nombre. También puedes explorar por categoría: acción, comedia, drama, documentales, telenovelas, etc. Netflix tiene una sección de "Tendencias" que muestra lo más popular.',
      },
      {
        title: 'Cambia el idioma y los subtítulos',
        content: 'Mientras ves algo, toca la pantalla y busca el ícono de diálogo o "Audio y subtítulos". Puedes cambiar el audio a español latinoamericano y activar subtítulos en español o inglés. Muchas películas están disponibles en ambos idiomas.',
      },
      {
        title: 'Descarga contenido para ver sin internet',
        content: 'En tu teléfono o tableta, busca el ícono de descarga (↓) junto a las películas y episodios. Descárgalos mientras estés conectado al WiFi y podrás verlos después sin internet, perfecto para viajes.',
      },
    ],
  },

  // ─── 48. Cómo encontrar tu teléfono perdido ─────────────────────────────────
  {
    slug: 'es-find-lost-phone',
    title: 'Cómo encontrar tu teléfono perdido',
    excerpt: 'Localiza tu teléfono perdido, hazlo sonar o protege tus datos si fue robado.',
    category: 'safety-guides' as any,
    tags: ['find-my-phone', 'lost-phone', 'gps', 'security', 'beginner'],
    readTime: '5 min',
    thumbnailEmoji: '🔍',
    difficulty: 'Beginner',
    publishedAt: '2026-04-16',
    body: `Perder tu teléfono es una situación muy estresante, pero no te desesperes — hay herramientas que te pueden ayudar a encontrarlo. Tanto Apple como Google tienen servicios gratuitos que te permiten localizar tu teléfono en un mapa, hacerlo sonar aunque esté en silencio, e incluso borrar toda tu información remotamente si crees que fue robado.

Si tienes un iPhone, el servicio se llama "Buscar mi iPhone" (Find My iPhone). Si tienes un Android, se llama "Encontrar mi dispositivo" (Find My Device). Ambos funcionan de manera similar: desde otro teléfono o una computadora, puedes ver dónde está tu teléfono en un mapa en tiempo real.

Para que estos servicios funcionen, necesitas haberlos activado antes de perder el teléfono. La buena noticia es que en la mayoría de los teléfonos nuevos, estas funciones vienen activadas automáticamente. Pero vale la pena verificar que estén encendidas ahora, antes de que necesites usarlas.

Si perdiste tu teléfono en tu casa, la función más útil es hacerlo sonar. Aunque tu teléfono esté en silencio o en modo No Molestar, esta función lo hará sonar a todo volumen durante varios minutos para que puedas seguir el sonido y encontrarlo.

Si crees que te lo robaron, puedes poner tu teléfono en "Modo perdido" (Lost Mode), que lo bloquea con un mensaje en la pantalla mostrando un número de teléfono alternativo para que alguien te llame si lo encuentra. Si no hay esperanza de recuperarlo, puedes borrar todos tus datos remotamente para proteger tu información personal.`,
    steps: [
      {
        title: 'Verifica que la función de localización esté activada ahora',
        content: 'iPhone: ve a Ajustes > tu nombre > Buscar > Buscar mi iPhone y asegúrate de que esté activado. Android: ve a Configuración > Google > Encontrar mi dispositivo y actívalo. Hazlo ahora, antes de perder tu teléfono.',
      },
      {
        title: 'Si perdiste tu teléfono, usa una computadora o el teléfono de alguien',
        content: 'iPhone: ve a icloud.com/find en cualquier navegador e inicia sesión con tu Apple ID. Android: ve a google.com/android/find e inicia sesión con tu cuenta de Google. Verás tu teléfono en un mapa.',
      },
      {
        title: 'Haz sonar tu teléfono',
        content: 'En la pantalla del mapa, selecciona tu teléfono y toca "Reproducir sonido" o "Hacer sonar". Tu teléfono sonará a todo volumen durante varios minutos, aunque esté en silencio. Esto es perfecto si lo perdiste en casa o en el carro.',
      },
      {
        title: 'Activa el Modo Perdido si no lo encuentras',
        content: 'Si crees que lo perdiste fuera de casa, activa el "Modo perdido" (iPhone) o "Bloquear dispositivo" (Android). Esto bloquea tu teléfono y muestra un mensaje con tu número alternativo en la pantalla para que alguien te contacte.',
      },
      {
        title: 'Borra tus datos si crees que fue robado',
        content: 'Como último recurso, puedes seleccionar "Borrar iPhone" o "Borrar dispositivo" para eliminar toda tu información remotamente. Esto protege tus fotos, cuentas bancarias, correos y datos personales. Solo hazlo si estás seguro de que no lo vas a recuperar.',
      },
      {
        title: 'Reporta el robo si corresponde',
        content: 'Si te lo robaron, haz una denuncia policial y llama a tu proveedor de teléfono (T-Mobile, AT&T, Verizon) para que bloqueen la línea. También cambia las contraseñas de tus cuentas importantes (banco, correo, redes sociales) desde otro dispositivo.',
      },
    ],
  },

  // ─── 49. Cómo usar la calculadora en tu teléfono ─────────────────────────────
  {
    slug: 'es-phone-calculator',
    title: 'Cómo usar la calculadora en tu teléfono',
    excerpt: 'Aprende a usar la calculadora de tu teléfono para operaciones básicas y cálculos de propinas.',
    category: 'essential-skills' as any,
    tags: ['calculator', 'math', 'tips', 'essential', 'beginner'],
    readTime: '3 min',
    thumbnailEmoji: '🔢',
    difficulty: 'Beginner',
    publishedAt: '2026-04-16',
    body: `Tu teléfono tiene una calculadora incorporada que puedes usar para cualquier operación matemática, desde sumar la cuenta del supermercado hasta calcular la propina en un restaurante. Es gratuita, ya viene instalada, y es mucho más rápida que buscar una calculadora de mano.

En iPhone, la calculadora es una app con un fondo negro y botones de colores (naranja, gris y blanco). La encuentras buscando "Calculadora" en tu pantalla o deslizando desde arriba a la derecha para abrir el Centro de Control, donde también hay un ícono de calculadora.

En Android, la app se llama "Calculadora" y generalmente tiene un ícono con el símbolo de igual (=) o un signo de más (+). Si no la encuentras, búscala en tu lista de aplicaciones o descarga "Google Calculator" gratis desde Google Play.

Los botones básicos son: números del 0 al 9, + (sumar), - (restar), × (multiplicar), ÷ (dividir), y = (obtener el resultado). El botón "C" o "AC" borra todo para empezar un cálculo nuevo. Si te equivocas en un número, puedes tocar el botón de borrar (generalmente una flecha con una "x") para borrar el último dígito.

Un truco muy útil: si giras tu teléfono horizontalmente (de lado), la calculadora se convierte en una calculadora científica con más funciones como porcentajes, raíces cuadradas y más. Esto funciona en iPhone; en Android depende de la app que uses.`,
    steps: [
      {
        title: 'Abre la calculadora',
        content: 'iPhone: busca el ícono negro de la calculadora en tu pantalla, o desliza desde arriba a la derecha y toca el ícono de calculadora. Android: busca "Calculadora" en tu lista de apps. Si no la tienes, descarga "Google Calculator" gratis.',
      },
      {
        title: 'Haz una operación básica',
        content: 'Para sumar: toca los números, luego "+", luego los otros números, y finalmente "=". Ejemplo: para sumar 25 + 13, toca 2, 5, +, 1, 3, =. El resultado (38) aparecerá en la pantalla.',
      },
      {
        title: 'Calcula un porcentaje o propina',
        content: 'Para calcular el 20% de propina en una cuenta de $45: toca 45, luego ×, luego 20, luego %. El resultado es $9 de propina. O multiplica la cuenta por 0.20 (45 × 0.20 = 9).',
      },
      {
        title: 'Borra si te equivocas',
        content: 'Si escribes un número equivocado, toca la tecla de borrar (⌫) para quitar el último dígito. Si quieres empezar de cero, toca "C" o "AC" (All Clear) para borrar todo el cálculo.',
      },
      {
        title: 'Usa la calculadora científica (iPhone)',
        content: 'Si necesitas funciones avanzadas, gira tu iPhone de lado (horizontal). La calculadora mostrará más botones como paréntesis, raíz cuadrada, porcentaje y funciones trigonométricas. Asegúrate de que el bloqueo de rotación esté desactivado.',
      },
    ],
  },

  // ─── 50. Cómo configurar el ahorro de batería ───────────────────────────────
  {
    slug: 'es-battery-saver',
    title: 'Cómo configurar el ahorro de batería',
    excerpt: 'Haz que la batería de tu teléfono dure más tiempo con estos ajustes y consejos.',
    category: 'phone-guides' as any,
    tags: ['battery', 'power', 'settings', 'optimization', 'beginner'],
    readTime: '5 min',
    thumbnailEmoji: '🔋',
    difficulty: 'Beginner',
    publishedAt: '2026-04-16',
    body: `Si tu teléfono se queda sin batería antes de que termine el día, no estás solo — es uno de los problemas más comunes. La buena noticia es que tu teléfono tiene funciones de ahorro de batería que pueden hacer que dure mucho más tiempo. Con unos ajustes sencillos, puedes ganar horas adicionales de uso.

Lo que más gasta batería en tu teléfono es la pantalla, especialmente si el brillo está muy alto. Las apps de redes sociales como Facebook, Instagram y TikTok también consumen mucha batería porque están constantemente actualizándose en segundo plano. Y la señal de WiFi o datos celulares también usa energía, especialmente en áreas donde la señal es débil.

El modo de ahorro de batería (Low Power Mode en iPhone, Battery Saver en Android) es la forma más rápida de extender la vida de tu batería. Cuando lo activas, tu teléfono reduce el brillo, limita las actualizaciones en segundo plano, desactiva algunas animaciones visuales y baja el rendimiento del procesador un poco. No te preocupes — tu teléfono sigue funcionando normalmente para llamadas, mensajes y lo esencial.

En iPhone, puedes configurar el modo de ahorro de energía para que se active automáticamente cuando la batería llegue al 20%. En Android, puedes personalizarlo para que se active al 15% o 20%.

Otro consejo importante: no dejes tu teléfono cargando toda la noche regularmente. Aunque los teléfonos modernos están diseñados para manejar esto, mantener la batería entre 20% y 80% ayuda a preservar su vida útil a largo plazo. Muchos teléfonos nuevos tienen la opción de "Carga optimizada" que se encarga de esto automáticamente.`,
    steps: [
      {
        title: 'Activa el modo de ahorro de batería',
        content: 'iPhone: ve a Ajustes > Batería > Modo de bajo consumo y actívalo. Android: ve a Configuración > Batería > Ahorro de batería y actívalo. También puedes activarlo rápidamente desde el Centro de Control deslizando hacia abajo.',
      },
      {
        title: 'Reduce el brillo de la pantalla',
        content: 'La pantalla es lo que más batería gasta. Desliza hacia abajo (Android) o desde la esquina superior derecha (iPhone) y baja la barra de brillo. También activa el "Brillo automático" para que se ajuste solo según la luz del ambiente.',
      },
      {
        title: 'Revisa qué apps gastan más batería',
        content: 'iPhone: ve a Ajustes > Batería y desplázate hacia abajo para ver qué apps gastan más. Android: ve a Configuración > Batería > Uso de batería. Si una app que no usas mucho gasta demasiada batería, considera desinstalarla.',
      },
      {
        title: 'Desactiva la actualización en segundo plano',
        content: 'iPhone: ve a Ajustes > General > Actualizar en segundo plano y desactívala para las apps que no necesitas que se actualicen constantemente. Android: ve a Configuración > Aplicaciones > selecciona la app > Batería > Restringir uso en segundo plano.',
      },
      {
        title: 'Reduce el tiempo de pantalla encendida',
        content: 'iPhone: ve a Ajustes > Pantalla y brillo > Bloqueo automático y selecciona "30 segundos". Android: ve a Configuración > Pantalla > Tiempo de espera de pantalla y selecciona "15 segundos" o "30 segundos". Así la pantalla se apaga rápido cuando no la usas.',
      },
      {
        title: 'Activa la carga optimizada',
        content: 'iPhone: ve a Ajustes > Batería > Salud y carga de la batería > Carga optimizada. Android: ve a Configuración > Batería > Carga adaptable. Esta función cuida la salud de tu batería a largo plazo aprendiendo tus hábitos de carga.',
      },
    ],
  },
];
