<script lang="ts">
	interface Props {
		/** Etiqueta corta tipo terminal que precede al título. */
		eyebrow: string;
		title: string;
		lead?: string;
	}

	let { eyebrow, title, lead }: Props = $props();
</script>

<div class="max-w-2xl">
	<p class="font-mono text-xs tracking-[0.4em] text-neon uppercase">
		{eyebrow}<span class="caret" aria-hidden="true">_</span>
	</p>
	<h2 class="mt-5 font-mono text-3xl font-bold tracking-tight text-balance text-ink sm:text-4xl">
		{title}
	</h2>
	{#if lead}
		<p class="mt-4 text-base leading-relaxed text-pretty text-muted">{lead}</p>
	{/if}
</div>
