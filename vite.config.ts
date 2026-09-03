import tailwindcss from '@tailwindcss/vite';
import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},

			// La landing es 100% estática y se prerenderiza (ver src/routes/+layout.ts),
			// así que se sirve como ficheros desde cualquier CDN sin runtime Node.
			//
			// OJO: el panel de administración necesitará rutas de servidor para tocar
			// Supabase con la clave de servicio. Cuando llegue, hay que cambiar a
			// adapter-node o desplegarlo como proyecto aparte.
			adapter: adapter()
		})
	]
});
