<script lang="ts">
	import SectionHeading from './SectionHeading.svelte';
	import type { Step } from '$lib/content';

	interface Props {
		steps: readonly Step[];
	}

	let { steps }: Props = $props();
</script>

<section id="como-funciona" class="border-t border-line">
	<div class="mx-auto max-w-6xl px-6 py-24">
		<SectionHeading
			eyebrow="Cómo funciona"
			title="Tres pasos y estás en la calle"
			lead="Killer no simula un mapa: usa el tuyo. La partida ocurre en el sitio donde vives."
		/>

		<ol class="mt-16 grid gap-px sm:grid-cols-3">
			{#each steps as step (step.index)}
				<li class="reveal panel p-8">
					<span class="font-mono text-6xl font-black text-line tabular-nums" aria-hidden="true">
						{step.index}
					</span>
					<h3 class="mt-4 font-mono text-lg font-bold text-ink">{step.title}</h3>
					<p class="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
				</li>
			{/each}
		</ol>
	</div>
</section>
