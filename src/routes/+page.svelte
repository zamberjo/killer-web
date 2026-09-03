<script lang="ts">
	import CallToAction from '$lib/components/CallToAction.svelte';
	import FaqList from '$lib/components/FaqList.svelte';
	import FeatureGrid from '$lib/components/FeatureGrid.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import HowItWorks from '$lib/components/HowItWorks.svelte';
	import KillSequence from '$lib/components/KillSequence.svelte';
	import SiteFooter from '$lib/components/SiteFooter.svelte';
	import SiteHeader from '$lib/components/SiteHeader.svelte';
	import { faq, features, phases, pitch, stats, steps, tagline } from '$lib/content';

	const navLinks = [
		{ id: 'como-funciona', label: 'Cómo funciona' },
		{ id: 'la-ejecucion', label: 'La ejecución' },
		{ id: 'por-que', label: 'Por qué' },
		{ id: 'faq', label: 'Dudas' }
	] as const;

	const platforms = [
		{ name: 'Android', note: 'En desarrollo', available: false },
		{ name: 'iOS', note: 'Después de Android', available: false }
	] as const;

	// Fijo, no `new Date()`: el año se resuelve en el build y así el HTML
	// prerenderizado no depende de cuándo se sirva.
	const year = 2026;
</script>

<svelte:head>
	<title>Killer — el battle royale que se juega con los pies</title>
	<meta
		name="description"
		content="Battle royale por geolocalización: un objetivo asignado, una zona real sobre tu ciudad y cinco segundos para ejecutar. Con testigos que pueden impedirlo."
	/>
	<meta property="og:title" content="Killer — battle royale geolocalizado" />
	<meta property="og:description" content={tagline} />
	<meta property="og:type" content="website" />
	<meta name="theme-color" content="#05060b" />
</svelte:head>

<SiteHeader links={navLinks} />

<main>
	<Hero {tagline} {pitch} {stats} />
	<HowItWorks {steps} />
	<KillSequence {phases} />
	<FeatureGrid {features} />
	<FaqList items={faq} />
	<CallToAction {platforms} />
</main>

<SiteFooter {year} />
