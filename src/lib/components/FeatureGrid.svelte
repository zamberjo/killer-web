<script lang="ts">
	import SectionHeading from './SectionHeading.svelte';
	import type { Feature } from '$lib/content';

	interface Props {
		features: readonly Feature[];
	}

	let { features }: Props = $props();
</script>

<section id="por-que" class="border-t border-line">
	<div class="mx-auto max-w-6xl px-6 py-24">
		<SectionHeading
			eyebrow="Por qué es distinto"
			title="Un juego que no puedes ganar desde el sofá"
		/>

		<ul class="mt-16 grid gap-px sm:grid-cols-2 lg:grid-cols-3">
			{#each features as feature (feature.title)}
				<li class="reveal panel p-7">
					<h3 class="font-mono text-sm tracking-widest text-neon uppercase">
						{feature.title}
					</h3>
					<p class="mt-3 text-sm leading-relaxed text-muted">{feature.body}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>
