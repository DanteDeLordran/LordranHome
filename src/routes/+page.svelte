<script>
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
    class="flex flex-wrap items-center font-sans px-4 mx-auto w-full lg:max-w-screen-lg sm:max-w-screen-sm md:max-w-screen-md pb-36 pt-36"
>
    <!-- Column-1 -->
    <div class="px-3 w-full lg:w-2/5">
        <div
            class="mx-auto mb-8 max-w-lg text-center lg:mx-0 lg:max-w-md lg:text-left"
        >
            <h2
                class="mb-4 text-3xl text-white font-bold text-left lg:text-5xl"
            >
                Software Engineer Building
                <span class="text-5xl text-lordran-green leading-relaxeds"
                    >Armored Software
                </span>
            </h2>
        </div>

        <div class="text-center lg:text-left">
            <a
                href="/about"
                class="block visible py-4 px-8 mb-4 text-xs font-semibold tracking-wide leading-none text-lordran-blue bg-lordran-green rounded cursor-pointer sm:mr-3 sm:mb-0 sm:inline-block hover:bg-lordran-blue hover:text-lordran-green transition-colors duration-300"
                >About</a
            >

            <a
                href="/services"
                class="block visible py-4 px-8 text-xs font-semibold leading-none bg-lordran-blue rounded border border-solid cursor-pointer sm:inline-block border-lordran-green text-lordran-green hover:bg-lordran-green hover:text-lordran-blue hover:border-lordran-blue transition-colors duration-300"
                >Services</a
            >
        </div>
    </div>

    <!-- Column-2 -->
    <div class="px-3 mb-12 w-full lg:mb-0 lg:w-3/5">
        <div class="flex justify-center items-center">
            
        </div>
    </div>
</section>

<section
    class="flex flex-wrap items-center font-sans px-4 mx-auto w-full lg:max-w-screen-lg sm:max-w-screen-sm md:max-w-screen-md pb-24 pt-36"
>

    <div class="px-3 mb-12 w-full lg:mb-0 lg:w-3/5">
        <div class="flex justify-center items-center text-white">
            <Rust/>
            <Svelte/>
            <Python/>
            <TypeScript/>
        </div>
    </div>

    <div class="px-3 w-full lg:w-2/5">
        <div
            class="mx-auto mb-8 max-w-lg text-center lg:mx-0 lg:max-w-md lg:text-left"
        >
            <h2
                class="mb-4 text-3xl text-white font-bold text-left lg:text-5xl"
            >
                I Believe In
                <span class="text-5xl text-lordran-green leading-relaxeds"
                    >Fast
                </span>
                and
                <span class="text-5xl text-lordran-green leading-relaxeds"
                    >Reliable
                </span>
                Software
            </h2>
            <div class="flex justify-center items-center text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iusto, debitis veritatis iure maxime unde excepturi minima enim cum, blanditiis odit. Est magnam sequi accusamus odit distinctio aut optio. Quo!
            </div>
        </div>
    </div>
</section>