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

<footer>
	<ul>
		<li>
			<a href="https://github.com/DanteDeLordran" target="_blank">GitHub</a>
		</li>
		<li>
			<a href="https://www.linkedin.com/in/dantelopezlugo/" target="_blank">LinkedIn</a>
		</li>
		<li>
			<a href="https://twitter.com/DanteDeLordran" target="_blank">Twitter</a>
		</li>
	</ul>
</footer>
