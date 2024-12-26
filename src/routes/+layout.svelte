<script lang="ts">
	import "../app.css";
	import Footer from "../components/Footer.svelte";
	import Header from "../components/Header.svelte";
	const { children } = $props();
</script>

<div class="bg-gradient-to-r from-[#0A1026] to-[#01C979]">
	<Header />

	<main class="flex flex-col items-center justify-center sm:pt-36 sm:pb-32 pt-56 pb-56">
		{@render children()}
	</main>

	<Footer />
</div>
