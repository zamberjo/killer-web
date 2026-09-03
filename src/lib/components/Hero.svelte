<script lang="ts">
	import type { Step } from '$lib/content';

	interface Props {
		tagline: string;
		pitch: string;
		stats: readonly Step[];
	}

	let { tagline, pitch, stats }: Props = $props();
</script>

<section id="top" class="relative overflow-hidden">
	<!-- Capas decorativas: retícula del mapa, horizonte y barrido CRT. Sin
	     contenido y fuera del árbol de accesibilidad. -->
	<div aria-hidden="true" class="pointer-events-none absolute inset-0">
		<div class="absolute inset-0 bg-grid opacity-40"></div>
		<div class="absolute inset-0 bg-gradient-to-b from-void via-void/40 to-void"></div>
		<div
			class="absolute top-1/2 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon/10 blur-[140px]"
		></div>
		<div class="absolute inset-0 scanlines"></div>
	</div>

	<div class="relative mx-auto max-w-6xl px-6 pt-24 pb-20 sm:pt-32 sm:pb-28">
		<p class="font-mono text-xs tracking-[0.4em] text-neon uppercase">
			Battle royale geolocalizado
		</p>

		<h1
			class="mt-6 font-mono text-6xl leading-[0.9] font-black tracking-tighter uppercase sm:text-8xl lg:text-9xl"
		>
			<span class="block text-neon glow-neon">Killer</span>
		</h1>

		<p
			class="mt-8 max-w-2xl text-2xl leading-tight font-semibold text-balance text-ink sm:text-3xl"
		>
			{tagline}
		</p>

		<p class="mt-5 max-w-xl text-base leading-relaxed text-pretty text-muted">
			{pitch}
		</p>

		<div class="mt-10 flex flex-wrap items-center gap-4">
			<a
				href="#descargar"
				class="bg-neon px-7 py-3.5 font-mono text-sm font-bold tracking-widest text-void uppercase transition-colors hover:bg-ink"
			>
				Quiero jugar
			</a>
			<a
				href="#como-funciona"
				class="border border-line px-7 py-3.5 font-mono text-sm tracking-widest text-ink uppercase transition-colors hover:border-neon hover:text-neon"
			>
				Cómo funciona
			</a>
		</div>

		<dl class="mt-20 grid gap-px border-t border-line sm:grid-cols-3">
			{#each stats as stat (stat.title)}
				<div class="reveal pt-8">
					<dt class="font-mono text-4xl font-bold text-neon tabular-nums glow-neon">
						{stat.index}
					</dt>
					<dd class="mt-3">
						<span class="block font-mono text-xs tracking-widest text-ink uppercase">
							{stat.title}
						</span>
						<span class="mt-2 block text-sm leading-relaxed text-muted">
							{stat.body}
						</span>
					</dd>
				</div>
			{/each}
		</dl>
	</div>
</section>
