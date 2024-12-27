<script>
    import { routes } from "../utils/routes";
</script>

<header class="container">
    <nav
        class="flex justify-between md:justify-around py-4 bg-lordran-blue backdrop-blur-sm shadow-md w-full px-10 fixed top-0 left-0 right-0 z-10 md:px-3"
    >
        <div class="flex items-center">
            <a class="cursor-pointer" href="/">
                <h3 class="text-2xl font-medium text-white hover:text-lordran-green">
                    DanteDeLordran
                </h3>
            </a>
        </div>
        <div
            class="ml-auto items-center md:space-x-8 justify-center justify-items-start md:justify-items-center md:flex md:pt-2 w-full md:w-auto left-0 top-16 px-5 md:px-10 py-3 md:py-0 border-t md:border-t-0"
        >
            {#each routes as route}
                <a
                    class="flex text-white hover:text-lordran-green cursor-pointer transition-colors duration-300"
                    href={route.path}>{route.name}</a
                >
            {/each}
        </div>
    </nav>
</header>
