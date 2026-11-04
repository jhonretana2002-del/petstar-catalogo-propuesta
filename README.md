# PetStar · Tienda de mascotas

La portada actual se presenta como una tienda para el visitante. El menú contiene **Visítanos, Contáctanos, Productos y Servicio express**; conserva el buscador y elimina la franja superior de ubicación/teléfono y los enlaces comerciales «Ver la propuesta».

## Versión actual

- 38 fichas entre alimentación, arenas, húmedos/atunes, paseo, juguetes, peluches, higiene y snacks.
- Fotografías facilitadas por el cliente de Balance, NutriSource, PureVita, Dog Chow, Cat Chow, Pro Plan, Ownat, Diamond, Fresh Step, Hola Pets, Cat Litter y bentonita.
- Accesorios y húmedos sin referencia confirmada se muestran con imágenes genéricas ilustrativas. No constituyen inventario confirmado de la tienda.
- Banners manuales, recorrido de productos, filtros por mascota, categoría y marca, búsqueda y detalle ampliado.
- Cantidades por peso para alimentos habilitados en la demo; unidades/empaques para arenas y accesorios. Carrito con subtotal y consulta copiable.
- WhatsApp de contacto y chatbot **Estrella**, un asistente guiado local que orienta por categorías, ubicación y express. No usa un modelo externo ni accede a inventario en tiempo real. No confirma existencias ni responde como representante humano.
- Formulario de consulta express por distrito/zona. Abre un borrador en WhatsApp; no envía mensajes automáticamente. Cobertura, tarifas y tiempos pendientes de confirmación.
- La web no cobra, reserva existencias ni transmite el chat del asistente a un servidor.
- Los banners cambian automáticamente cada seis segundos. El recorrido de productos se desplaza de forma continua, con controles, pausa al interactuar y respeto a la preferencia de movimiento reducido.
- Las 33 referencias con fotografía se presentan sin fondo: 26 recortes de productos y una lámina transparente con los siete accesorios ilustrativos. Los originales se conservan aparte para cotejar los empaques antes de usar el catálogo comercialmente. Se utilizó la herramienta integrada de imágenes para retirar fondos, publicidad y elementos externos al empaque; los archivos WebP conservan transparencia.

## Datos y referencias

El Facebook público de PetStar confirma ubicación general en Desamparados y contacto 8816 4568. La publicación de [Fresh Step del 1 de julio de 2025](https://www.facebook.com/petstar506/posts/pfbid035dRn21Ha2JsxpWNrkjGtiRCtfM9FfGGVrTqCJEdvf6vCYys4ZW7JU48dYvcMBrvCl) menciona arena de 7 libras. También se revisó la galería pública de productos. Las imágenes adicionales fueron aportadas por el cliente el 4 de noviembre de 2026.

Se conservaron las imágenes completas; los recuadros del diseño muestran el producto mediante el `viewBox` del SVG, sin reconstruir sus empaques. La imagen repetida de Diamond se incluyó una sola vez. Las promociones y obsequios de publicaciones anteriores no se anuncian como vigentes. Todos los precios de la demostración son ilustrativos y se deben reemplazar o confirmar antes de vender.

Las imágenes ambientales del hogar y la lámina genérica de accesorios se generaron con IA mediante la herramienta integrada. Prompts: fotografía de perro y gato en un hogar luminoso con espacio libre para texto; y ocho fotografías de producto sin marcas sobre fondo blanco (arena, lata de atún, correa, pechera, juguetes, peluche, jabón y sobre húmedo). No representan fotografías de inventario real de PetStar.

Sitio estático publicado desde `main` en GitHub Pages. `products.js` contiene los datos; `app.js`, las interacciones; `style.css`, el diseño; `index.html`, la portada. Fredoka y Nunito se distribuyen con sus licencias SIL en `assets/`.

---

El siguiente registro corresponde a las primeras versiones del concepto y conserva contexto de diseño; la portada actual ya no muestra la propuesta comercial ni descargas de PDF.

Propuesta visual preparada para PetStar, tienda de alimentos para mascotas en Desamparados, Costa Rica.

La segunda dirección visual toma las referencias indicadas por el cliente: [Ticolitas](https://www.ticolitas.com/) y la propuesta anterior de [La Bodeguita de mi Mascota](https://jhonretana2002-del.github.io/pagina-veterinaria/). Incluye amarillo protagonista, turquesa y coral del logo, tipografía redondeada, huellas ambientales, mascotas integradas en la portada, categorías con fotografías y un recorrido de productos.

## Qué incluye

- Catálogo con 16 fichas de muestra y filtros por mascota y marca.
- Selección de venta a granel o por empaque cerrado.
- Cantidades, subtotales y lista de pedido.
- Mensaje de consulta que se puede copiar; la demo no envía pedidos.
- Propuesta y catálogo PDF de 8 páginas, descargable desde la web.
- Diseño adaptable a pantallas pequeñas.
- Búsqueda desde el encabezado, accesos por marca y carrusel manual de productos.
- Detalle de cada ficha con fotografía, presentación y precios de demostración.

## Aviso de demostración

Los precios son ficticios, en colones costarricenses. Los pesos de algunos empaques y las modalidades de venta son ilustrativos. La información debe validarse con PetStar antes de activar ventas. No hay pagos, reservas de inventario, administración ni envío automático de pedidos.

Once fichas usan capturas de productos del perfil de Facebook de PetStar, aportadas por el cliente y correspondientes a publicaciones del 28 de julio de 2025. Estas referencias no confirman disponibilidad actual. Las capturas originales se muestran dentro de un recuadro que presenta solo el área del producto. No se modificaron los empaques ni se reconstruyeron partes faltantes.

Félix, ALPO y Pro Pet fueron indicados por el cliente. Las fichas de estas marcas aún requieren fotos y validación de las referencias locales. La ficha de hámster es conceptual, con marca y fórmula por confirmar.

## Editar y publicar

Sitio estático: HTML, CSS y JavaScript. No requiere dependencias ni compilación. `index.html` es la portada; `products.js` contiene las fichas, los precios de demostración y las referencias a imágenes; `style.css` contiene el diseño; `app.js` controla filtros y carrito.

GitHub Pages publica desde la rama `main`, carpeta raíz. Para revisar localmente, sirve esta carpeta con un servidor HTTP estático o abre `index.html` en un navegador.

## Fuentes

- [PetStar en Facebook](https://www.facebook.com/petstar506): ubicación y teléfono públicos, además de las capturas aportadas por el cliente.
- [Chewy](https://www.chewy.com/b/dog-288) y [Zooplus](https://www.zooplus.es/): referencias de navegación.
- [ALPO Costa Rica](https://purina.co.cr/alpo/adultos-todos-los-tamanos): referencia de producto y formato de 15 kg.
- [Félix México](https://purina.com.mx/felix/alimento-seco): nombres de líneas de alimento seco, sujetos a validación local.
- [Grupo Coris](https://products.grupocoris.com/catalogo_treats_es): Pro Pet Adulto y referencia de empaque de 18 kg.

Consulta de referencias: 4 de noviembre de 2026. El logo fue aportado por el cliente; las marcas y sus empaques pertenecen a sus titulares. La imagen de portada de perro, gato y hámster fue generada con IA mediante la herramienta integrada, con este prompt: retrato fotográfico de estudio de un golden retriever, un gato atigrado y un hámster sobre fondo durazno, sin texto ni logotipos.

En la segunda versión se generó un recorte transparente de esas mascotas y un tríptico fotográfico de categorías: perro sobre turquesa, gato sobre rosa y hámster sobre amarillo. Se conservaron como archivos locales. Las fuentes Fredoka y Nunito se distribuyen junto con sus licencias SIL Open Font License en `assets/`.
