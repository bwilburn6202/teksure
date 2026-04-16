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
];
