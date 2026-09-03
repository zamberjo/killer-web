<script lang="ts">
	import SectionHeading from './SectionHeading.svelte';
	import type { QuestionAnswer } from '$lib/content';

	interface Props {
		items: readonly QuestionAnswer[];
	}

	let { items }: Props = $props();
</script>

<section id="faq" class="border-t border-line">
	<!-- Mismo contenedor que el resto de secciones para que los títulos queden
	     alineados; el ancho de lectura se limita dentro, no fuera. -->
	<div class="mx-auto max-w-6xl px-6 py-24">
		<SectionHeading eyebrow="Dudas" title="Lo que todo el mundo pregunta" />

		<div class="mt-12 max-w-3xl">
			{#each items as item (item.question)}
				<!-- <details> nativo: accesible por teclado y buscable por Ctrl+F sin
				     una línea de JavaScript. -->
				<details class="group border-b border-line">
					<summary
						class="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-mono text-sm font-semibold text-ink transition-colors hover:text-neon"
					>
						{item.question}
						<span
							class="shrink-0 text-lg text-neon transition-transform group-open:rotate-45"
							aria-hidden="true">+</span
						>
					</summary>
					<p class="pb-6 text-sm leading-relaxed text-muted">{item.answer}</p>
				</details>
			{/each}
		</div>
	</div>
</section>
