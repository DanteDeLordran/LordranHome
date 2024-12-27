<script lang="ts">
	import "../app.css";
	import Footer from "../components/Footer.svelte";
	import Header from "../components/Header.svelte";
	const { children } = $props();
</script>

<div class="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-lordran-blue via-lordran-green to-lordran-blue">
	<Header />

	<main class="flex flex-col items-center justify-center sm:pt-36 sm:pb-32 pt-56 pb-56">
		{@render children()}
	</main>

	<Footer />
</div>
