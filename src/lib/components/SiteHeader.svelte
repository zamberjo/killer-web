<script lang="ts">
	interface NavLink {
		/** Id de la sección destino, sin `#`. */
		readonly id: string;
		readonly label: string;
	}

	interface Props {
		links: readonly NavLink[];
	}

	let { links }: Props = $props();
</script>

<header class="sticky top-0 z-50 border-b border-line/70 bg-void/80 backdrop-blur-md">
	<div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
		<a href="#top" class="font-mono text-lg font-bold tracking-[0.3em] uppercase">
			<span class="text-neon glow-neon">Killer</span>
		</a>

		<nav aria-label="Secciones">
			<ul class="flex items-center gap-6 font-mono text-xs tracking-widest uppercase">
				{#each links as link (link.id)}
					<li class="hidden sm:block">
						<!-- El `#` va fuera de la interpolación: así el destino es siempre
						     un ancla de esta página y nunca una ruta del router. -->
						<a
							href="#{link.id}"
							class="text-muted transition-colors hover:text-ink focus-visible:text-ink"
						>
							{link.label}
						</a>
					</li>
				{/each}
				<li>
					<a
						href="#descargar"
						class="border border-neon/40 px-4 py-2 text-neon transition-colors hover:bg-neon hover:text-void"
					>
						Descargar
					</a>
				</li>
			</ul>
		</nav>
	</div>
</header>
