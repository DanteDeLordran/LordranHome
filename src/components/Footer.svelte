<script>
    import { contacts } from "../utils/contacts";
    import { routes } from "../utils/routes";
</script>

<footer class="bg-lordran-blue pt-5 sm:mt-10 w-full border-t border-lordran-green">
    <div class="max-w-6xl m-auto flex flex-wrap justify-start">
        <div class="p-4 w-1/2 sm:w-4/12 md:w-3/12">
            <div
                class="text-xs uppercase text-white hover:text-lordran-green mb-5 cursor-pointer transition-colors duration-300"
            >
                Sections
            </div>

            {#each routes as route}
                <a
                    href={route.path}
                    class="my-2 block text-white hover:text-lordran-green text-sm cursor-pointer transition-colors duration-300"
                >
                    {route.name}
                </a>
            {/each}
        </div>

        <div class="p-4 w-1/2 sm:w-4/12 md:w-3/12">
            <div
                class="text-xs uppercase text-white hover:text-lordran-green font-medium mb-5 cursor-pointer transition-colors duration-300"
            >
                Contact
            </div>
            {#each contacts as contact}
                <a
                    href={contact.path}
                    target="_blank"
                    class="my-2 block text-white hover:text-lordran-green text-sm cursor-pointer transition-colors duration-300"
                >
                    {contact.name}
                </a>
            {/each}
        </div>
    </div>

</footer>
