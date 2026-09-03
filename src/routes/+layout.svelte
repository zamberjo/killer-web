<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<!-- Salto al contenido: primer elemento enfocable de la página, visible solo
     al recibir foco por teclado. -->
<a
	href="#top"
	class="sr-only rounded-none bg-neon px-4 py-2 font-mono text-sm font-bold text-void focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[100] focus-visible:ring-ink"
>
	Saltar al contenido
</a>

{@render children()}
