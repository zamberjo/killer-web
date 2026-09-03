/**
 * La landing no tiene datos dinámicos: se genera entera en el build.
 *
 * `ssr` sigue activo (el HTML llega completo, bueno para SEO y para el LCP);
 * lo que se desactiva es el enrutado en cliente, innecesario en una página
 * única con anclas.
 */
export const prerender = true;
export const csr = false;
