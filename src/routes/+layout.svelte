<script lang="ts">
	import "../app.css";
	import Footer from "../components/Footer.svelte";
	import Header from "../components/Header.svelte";
	const { children } = $props();
</script>

<div class="bg-custom-radial bg-lordran-blue">
	<Header />

	<main
		class="flex flex-col items-center justify-center sm:pt-36 sm:pb-32 pt-56 pb-56"
	>
		{@render children()}
	</main>

	<Footer />
</div>
