<script>

    import { projects } from "../../utils/projects";

</script>
<svelte:head>
    <title>Projects</title>
    <meta name="description" content="Projects">
</svelte:head>

<section class="flex flex-col items-center justify-center font-sans px-6 mx-auto w-full lg:max-w-screen-lg sm:max-w-screen-sm md:max-w-screen-md pb-16 pt-20 text-center">
    <h1 class="text-4xl font-bold text-white mb-10">Projects</h1>
    <p class="text-lg text-gray-300 leading-relaxed lg:text-xl mb-7">
        These are my personal projects, where I apply what I learn while exploring new technologies and concepts. 
        Each project is a step in my journey, covering areas like backend development, machine learning and cloud systems.
    </p>
    

    <div class="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
        {#each projects as { status, title, description, stack, url }}
            <div class="bg-lordran-blue rounded-lg shadow-md p-7 border border-lordran-green transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <div class="mb-4">
                    <span class="px-3 py-1 rounded-full text-sm font-semibold text-white bg-lordran-green"
                    >
                        status: {status}
                    </span>
                </div>
                <h2 class="text-2xl font-bold text-lordran-green mb-4">{title}</h2>
                <p class="text-gray-300 mb-4">{description}</p>
                <p class="text-gray-400 text-sm mb-4">
                    <span class="font-bold text-white">Stack:</span> {stack.join(", ")}
                </p>
                <a
                    href="{url}"
                    target="_blank"
                    class="inline-block bg-lordran-green text-white font-semibold py-2 px-4 rounded-lg hover:bg-lordran-green-light transition duration-300"
                >
                    View Project
                </a>
            </div>
        {/each}
    </div>
</section>
