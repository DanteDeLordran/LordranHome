<script>
import Docker from "../components/logos/Docker.svelte";
import GoogleCloud from "../components/logos/GoogleCloud.svelte";
import Kubernetes from "../components/logos/Kubernetes.svelte";
import Postgres from "../components/logos/Postgres.svelte";
import PyTorch from "../components/logos/PyTorch.svelte";
import Python from "../components/logos/Python.svelte";
import Rust from "../components/logos/Rust.svelte";
import Svelte from "../components/logos/Svelte.svelte";
import TypeScript from "../components/logos/TypeScript.svelte";
</script>
<svelte:head>
    <title>Home</title>
    <meta name="description" content="Home" />
</svelte:head>

<section
    class="flex flex-col items-center justify-center font-sans px-4 mx-auto w-full lg:max-w-screen-lg sm:max-w-screen-sm md:max-w-screen-md pb-36 pt-36 text-center"
>
    <!-- Content -->
    <div class="px-3 w-full max-w-3xl">
        <h2
            class="mb-6 text-3xl text-white font-bold lg:text-5xl"
        >
            Software Engineer Building
            <span class="text-5xl text-lordran-green leading-relaxeds"
                >Armored Software
            </span>
        </h2>

        <div class="mt-4">
            <a
                href="/about"
                class="inline-block py-4 px-8 mb-4 text-xs font-semibold tracking-wide leading-none text-lordran-blue bg-lordran-green rounded cursor-pointer hover:bg-lordran-blue hover:text-lordran-green transition-colors duration-300"
                >About</a
            >

            <a
                href="/services"
                class="inline-block py-4 px-8 text-xs font-semibold leading-none bg-lordran-blue rounded border border-solid cursor-pointer border-lordran-green text-lordran-green hover:bg-lordran-green hover:text-lordran-blue hover:border-lordran-blue transition-colors duration-300"
                >Services</a
            >
        </div>
    </div>
</section>


<section
    class="flex flex-wrap items-center font-sans px-4 mx-auto w-full lg:max-w-screen-lg sm:max-w-screen-sm md:max-w-screen-md pb-3 pt-36"
>
    <!-- Technology Icons Section -->
    <div class="px-3 mb-12 w-full lg:mb-0 lg:w-3/5">
        <div class="flex justify-center items-center gap-6 flex-wrap text-white">
            <Rust classname="hover:scale-125 transition-transform duration-300" />
            <Python classname="hover:scale-125 transition-transform duration-300" />
            <TypeScript classname="hover:scale-125 transition-transform duration-300" />
            <PyTorch classname="hover:scale-125 transition-transform duration-300" />
            <Svelte classname="hover:scale-125 transition-transform duration-300" />
            <Docker classname="hover:scale-125 transition-transform duration-300" />
            <Kubernetes classname="hover:scale-125 transition-transform duration-300" />
            <GoogleCloud classname="hover:scale-125 transition-transform duration-300" />
            <Postgres classname="hover:scale-125 transition-transform duration-300" />
        </div>
    </div>

    <!-- Beliefs and Mission Section -->
    <div class="px-3 w-full lg:w-2/5">
        <div
            class="mx-auto mb-8 max-w-lg text-center lg:mx-0 lg:max-w-md lg:text-left"
        >
            <h2
                class="mb-6 text-4xl lg:text-5xl font-bold leading-tight text-white"
            >
                I Believe In 
                <span class="text-lordran-green">Fast</span> and 
                <span class="text-lordran-green">Reliable</span> Software
            </h2>
            <p class="text-lg text-white leading-relaxed">
                Crafting scalable, efficient, and maintainable solutions using cutting-edge technologies. With a focus on speed and reliability, I strive to build software that empowers businesses and inspires trust.
            </p>
        </div>
    </div>
</section>
