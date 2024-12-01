<script lang="ts">
	import "../app.css";
	import { routes } from "../utils/routes";
	let { children } = $props();
</script>

<header>
	<ul>
		{#each routes as route}
			<li>
				<a href={route.path}>{route.name}</a>
			</li>
		{/each}
	</ul>
</header>

<main>
	{@render children()}
</main>

<footer></footer>
