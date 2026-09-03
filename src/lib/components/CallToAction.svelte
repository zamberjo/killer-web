<script lang="ts">
	interface Props {
		/** Plataformas y su disponibilidad. `available: false` se pinta apagado. */
		platforms: readonly { name: string; note: string; available: boolean }[];
	}

	let { platforms }: Props = $props();
</script>

<section id="descargar" class="relative border-t border-line">
	<div aria-hidden="true" class="pointer-events-none absolute inset-0 overflow-hidden">
		<div class="absolute inset-0 bg-grid opacity-30"></div>
		<div class="absolute inset-0 bg-gradient-to-t from-void to-transparent"></div>
	</div>

	<div class="relative mx-auto max-w-3xl px-6 py-28 text-center">
		<h2
			class="font-mono text-4xl font-black tracking-tight text-balance text-neon uppercase glow-neon sm:text-5xl"
		>
			Sal a la calle
		</h2>
		<p class="mx-auto mt-6 max-w-xl text-base leading-relaxed text-pretty text-muted">
			Killer está en desarrollo. Todavía no hay build pública ni fecha de lanzamiento — cuando la
			haya, aparecerá aquí.
		</p>

		<ul class="mt-12 flex flex-wrap justify-center gap-4">
			{#each platforms as platform (platform.name)}
				<!-- El estado no se codifica solo en la opacidad: la nota
				     ("En desarrollo") lo dice con palabras. -->
				<li class="panel px-7 py-4 text-left {platform.available ? '' : 'opacity-45'}">
					<span class="block font-mono text-sm font-bold text-ink">{platform.name}</span>
					<span class="mt-1 block font-mono text-xs tracking-widest text-muted uppercase">
						{platform.note}
					</span>
				</li>
			{/each}
		</ul>
	</div>
</section>
