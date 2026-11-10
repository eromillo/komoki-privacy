# Política de privacidad de KOMOKI

Sitio legal estático y público de KOMOKI. Contiene la política `index.html` y la página de solicitudes `eliminar-datos.html`; no incluye código fuente de la aplicación, analítica ni recursos remotos. Solo la página de invitaciones usa un script local para abrir la app y copiar el código. Se publica desde la rama `main`, carpeta raíz, mediante GitHub Pages.

URL estable: `https://eromillo.github.io/komoki-privacy/`.

`invitacion.html` e `invitacion.js` permiten abrir una invitación en la app mediante el esquema `komoki://invite`. El token queda en el fragmento del enlace; no hay analítica, peticiones externas ni aceptación de acceso desde esta web. Las URLs de tiendas quedan pendientes de verificar las fichas publicadas; no se inventan identificadores de App Store.

URL de solicitudes de eliminación para Play Console: `https://eromillo.github.io/komoki-privacy/eliminar-datos.html`.

Las solicitudes llegan a `sapiproyectos@gmail.com` y requieren atención manual por SAPI. No hay un backend de borrado ni una integración de eliminación con AdMob. La eliminación de cuenta abarca Firebase Authentication y Firestore: perfil, todas sus subcolecciones privadas y registros de operaciones, además de la pertenencia e información personal en el hogar, con revisión del alcance si hay otros miembros. Eliminar solo Authentication no borra Firestore; borrar un documento mediante SDK tampoco borra sus descendientes. El procedimiento operativo completo se mantiene en el repositorio privado de la app, sin publicar datos de usuarios ni credenciales.

Revisar el buzón, verificar titularidad sin pedir contraseñas, tramitar la petición y explicar las excepciones/plazos aplicables. No prometer el borrado general de datos publicitarios de Google ni de otros proveedores; facilitar al usuario su canal correspondiente y atender las obligaciones que procedan. Eliminar un identificador publicitario o retirar el consentimiento no equivale a borrar todo el historial. No se afirma eliminación automática en 90 días.

Para actualizarlo, modifica `index.html`, revisa la fecha de actualización y envía el cambio a `main`. Verifica después la URL sin iniciar sesión y en un móvil. El correo de contacto figura en las secciones 1 y 7 y en el pie de la página; actualiza las tres apariciones si cambia.

La actualización del 10 de noviembre de 2026 describe el uso opcional de cuentas Firebase, hogares y sincronización privada/compartida, preferencias alimentarias sensibles, costes y presupuestos, y la integración Android de AdMob/UMP. Las funciones locales siguen disponibles sin cuenta. Antes de distribuir en Google Play, comprueba los proveedores de AdMob, mensajes de consentimiento y declaraciones de datos con la configuración efectiva. No se publican aquí datos de usuarios, credenciales ni fuentes de la app.
