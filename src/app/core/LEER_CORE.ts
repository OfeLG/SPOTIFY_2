/* 
La carpeta "core" en una aplicación Angular generalmente contiene elementos esenciales para el funcionamiento 
de toda la aplicación. Aquí hay un resumen de lo que podría ir en la carpeta "core":

    - Servicios comunes: Coloca servicios que son necesarios en toda la aplicación, como servicios de 
    autenticación, servicios de manejo de datos globales o servicios de notificación.

    - Interceptores HTTP: Si necesitas realizar acciones globales en cada solicitud HTTP (como agregar 
    encabezados de autorización), los interceptores HTTP se colocan en la carpeta "core".

    - Guards de rutas: Si necesitas proteger rutas específicas de tu aplicación (por ejemplo, asegurarte de 
    que solo los usuarios autenticados puedan acceder a ciertas páginas), los guards de rutas se definen 
    en "core".

    - Modelos de datos: Puedes definir modelos de datos compartidos que representen la estructura de los datos 
    utilizados en diferentes partes de la aplicación.

    - Configuración global: Si tienes configuración global que afecta a toda la aplicación (por ejemplo, 
    configuración de idioma o configuración de temas), puedes gestionarla desde la carpeta "core".

    - Funciones de utilidad: Coloca funciones de utilidad comunes que se utilizan en varios lugares de la 
    aplicación.
*/