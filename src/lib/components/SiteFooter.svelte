<script lang="ts">
	interface Props {
		year: number;
	}

	let { year }: Props = $props();
</script>

<footer class="border-t border-line">
	<div
		class="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 font-mono text-xs text-muted sm:flex-row sm:items-center sm:justify-between"
	>
		<p>
			<span class="tracking-[0.3em] text-neon uppercase">Killer</span>
			<span class="mx-2 opacity-40">/</span>
			<span>© {year}</span>
		</p>
		<p class="max-w-md leading-relaxed">
			Juega con cabeza: respeta la propiedad privada, el tráfico y a quien no está jugando.
		</p>
	</div>
</footer>
