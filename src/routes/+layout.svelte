<script lang="ts">
import "../app.css";
import Footer from "../components/Footer.svelte";
import Header from "../components/Header.svelte";
const { children } = $props();
</script>

<Header />

<main class="flex flex-col items-center justify-center mt-32">
	{@render children()}
</main>

<Footer />
