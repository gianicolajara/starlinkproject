# Starlink UNET Project

### Link

[Ir a Pagina Web](https://gianicolajara.github.io/starlinkproject/)

### Explicación breve

Creación de una página web informativa sobre Starlink con un diseño moderno donde muestre sus productos, precios, tutoriales y ofrecer al usuario tales productos mediante la geolocalización, el aspecto de la página seguirá el estilo de SpaceX con sus típicos colores, blanco, negro y gris, añadiendo muchas imagenes y un video principal.

### Paleta de colores

**Negro**: #0E0E0E
**Blanco**: #FAFAFA
**Gris**: #474747

### Tipografia

Poppins y Sans Serif

### Tecnologias usadas

1. HTML
2. CSS
3. JAVASCRIPT
4. TAILWIND
5. [TOASTIFY](https://apvarun.github.io/toastify-js/)

### Wireframe

[Descargar Wireframe](https://www.mediafire.com/file/gp8g28v845ot0eq/starlinkunet-maqueta.pdf/file)

## Explicación detallada

Al ingresar por primera vez a la pagina web veremos esto:

![foto-1](https://img001.prntscr.com/file/img001/eoCeZawUTOqq_U1wNyIvYg.png)

Veremos un botón con el texto **Find Your Location**, un botón con una **Luna** que dice **Light Mode**, un video reproduciéndose de fondo y un título que dice **HIGH-SPEED INTERNET AROUND THE WORLD**, cada uno de estos elementos cumple un comportamiento administrado mediante Javascript.

Debemos tener en cuenta que si el internet se llega a desconectar, esto se detectará mediante Javascript y se enviará un mensaje al usuario avisando que no tiene internet, por lo cual no podrá pulsar el botón.

El **DarkMode** está activado en esta página web. Se guardará la preferencia del usuario en [LocalStorage](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage).

Si el usuario tiene internet podra pulsar el boton **Find Your Location** que llamara a [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API) para obtener datos de geolocalización del usuario, luego se llaman dos Apis, uno llamado [Weather Api](https://www.weatherapi.com/) (Una API para obtener datos del clima según una posición actual) y otro llamado [Nominatim Api](https://nominatim.org/) (Api para obtener datos de la posición actual según la Longitud y Latitud del usuario) todo esto mediante [Fetch Api](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API), estos datos se guardaran en [LocalStorage](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage) para ser usados luego, estos datos tienen 1 dia de validez, luego de un dia los datos se borran y se vuelven a cargar mediante la API, asi no nos preocupamos de sobrecargar Apis gratuitas que son muy delicadas al momento de hacer muchas llamadas, obtenido todos los datos se mostraran en pantalla y el usuario podra ver tanto su posición como el clima actual (**el clima solo se puede ver en desktop y mobile**)

![foto-2](https://img001.prntscr.com/file/img001/KvxAJclNQo2tg8bFTvYZAw.png)
Ahora nos saldrá un botón que dice Order Now que nos abrirá una ventana modal con un formulario sencillo, que tiene validación tanto en el HTML como en el Javascript, si ponemos bien los datos, nos saldrá un [Toast](https://apvarun.github.io/toastify-js/) con un mensaje informativo.

![foto-3](https://img001.prntscr.com/file/img001/WX-dijcSTMeD6-e9fy91qQ.png)
Luego, cuando scrolleamos para seguir viendo la página, veremos 3 secciones: **About**, **Prices** y **Installation**, es importante aclarar que tanto **About** como **Prices** están construidas con [Templates](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template) para facilitar su expansión si así se requiere en un futuro, en **About** las imagenes mostradas tienen una animación con hover, la tabla de **Prices** también está construida mediante templates.

![foto-4](https://img001.prntscr.com/file/img001/EFVwYofcTYORBZEz_nuHHQ.png)

**Installation** Es una sección hecha totalmente en HTML, que tiene una miniatura, cuando pulsamos sobre esta miniatura se abrirá un modal con un video de YouTube que contiene un tutorial de Starlink.
![foto-5](https://img001.prntscr.com/file/img001/jA-ZAYHNS6SQng60WvyUEw.png)

Luego tenemos el **Footer**, este elemento es muy simple, solo tiene un logo, los links (**Estos links funcionan como anclas**) y un formulario pequeño de Newsletter que tiene una validación de email tanto en Javascript como en HTML, si el usuario envia un correo valido obtendrá una notificación de envío.

Esta página web está hecha para teléfono, tablet y escritorio, es decir, es totalmente responsive y todos los elementos se ordenan mediante [Grid](https://developer.mozilla.org/es/docs/Web/CSS/CSS_grid_layout) y [Flexbox](https://developer.mozilla.org/es/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) para que se vea perfecto en estos dispositivos. También haciendo un poco de _"Responsible Design"_ todos los elementos multimedias fueron manipulados para bajar la carga de datos, es decir, que no consuma mucho ancho de banda al momento de abrir la página y muchos datos de llamadas de API fueron almacenados para no tener que sobrecargar APIs gratuitas.

![foto-6](https://img001.prntscr.com/file/img001/5lvCpS_6RWGLur7QMeM9AA.png)
