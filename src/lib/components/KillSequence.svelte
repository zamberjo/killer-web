<script lang="ts">
	import SectionHeading from './SectionHeading.svelte';
	import type { Phase } from '$lib/content';

	interface Props {
		phases: readonly Phase[];
	}

	let { phases }: Props = $props();
</script>

<section id="la-ejecucion" class="relative border-t border-line">
	<div aria-hidden="true" class="pointer-events-none absolute inset-0 overflow-hidden">
		<div
			class="absolute top-1/3 -right-40 h-[32rem] w-[32rem] rounded-full bg-blood/10 blur-[130px]"
		></div>
	</div>

	<div class="relative mx-auto max-w-6xl px-6 py-24">
		<SectionHeading
			eyebrow="La ejecución"
			title="Cinco segundos que se pueden torcer"
			lead="Matar no es pulsar un botón: es sostenerlo mientras el mundo mira."
		/>

		<ol class="mt-16 border-l border-line">
			{#each phases as phase (phase.label)}
				<li class="reveal relative py-8 pl-8 sm:pl-12">
					<span
						class="absolute top-10 -left-[5px] size-[9px] rotate-45 {phase.danger
							? 'bg-blood'
							: 'bg-neon'}"
						aria-hidden="true"
					></span>

					<div class="flex flex-wrap items-baseline gap-x-4 gap-y-1">
						<span
							class="font-mono text-xs tracking-[0.3em] uppercase {phase.danger
								? 'text-blood'
								: 'text-neon'}"
						>
							{phase.label}
						</span>
						<h3 class="font-mono text-xl font-bold text-ink">{phase.title}</h3>
					</div>

					<p class="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
						{phase.body}
					</p>
				</li>
			{/each}
		</ol>
	</div>
</section>
