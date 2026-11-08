# Política de privacidad de KOMOKI

Sitio legal estático y público de KOMOKI. Contiene la política `index.html` y la página de solicitudes `eliminar-datos.html`; no incluye código fuente de la aplicación, analítica ni recursos remotos. Solo la página de invitaciones usa un script local para abrir la app y copiar el código. Se publica desde la rama `main`, carpeta raíz, mediante GitHub Pages.

URL estable: `https://eromillo.github.io/komoki-privacy/`.

`invitacion.html` e `invitacion.js` permiten abrir una invitación en la app mediante el esquema `komoki://invite`. El token queda en el fragmento del enlace; no hay analítica, peticiones externas ni aceptación de acceso desde esta web. Las URLs de tiendas quedan pendientes de verificar las fichas publicadas; no se inventan identificadores de App Store.

URL de solicitudes de eliminación para Play Console: `https://eromillo.github.io/komoki-privacy/eliminar-datos.html`.

Las solicitudes llegan a `sapiproyectos@gmail.com` y requieren atención manual por SAPI. No hay un backend de borrado ni una integración de eliminación con AdMob. Revisar el buzón, determinar los datos bajo control de SAPI, tramitar la petición y explicar las excepciones/plazos aplicables. No prometer el borrado general de datos de Google ni de otros proveedores; facilitar al usuario su canal correspondiente y atender las obligaciones que procedan. Eliminar un identificador publicitario o retirar el consentimiento no equivale a borrar todo el historial. No se afirma eliminación automática en 90 días.

Para actualizarlo, modifica `index.html`, revisa la fecha de actualización y envía el cambio a `main`. Verifica después la URL sin iniciar sesión y en un móvil. El correo de contacto figura en las secciones 1 y 7 y en el pie de la página; actualiza las tres apariciones si cambia.

La política describe la integración Android de AdMob/UMP desde KOMOKI 0.7.0. Antes de distribuir una versión con anuncios reales en Google Play, revisa los proveedores definitivos de AdMob, los formularios y opciones de consentimiento y la declaración de datos de Google Play. Las APK internas 0.7.0 usan anuncios de prueba oficiales.
