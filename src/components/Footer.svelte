<script>
    import { contacts } from "../utils/contacts";
    import { routes } from "../utils/routes";
</script>

<footer class="bg-gray-800 pt-5 sm:mt-10 w-full">
    <div class="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
        <!-- Col-1 -->
        <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            <!-- Col Title -->
            <div class="text-xs uppercase text-gray-400 font-medium mb-6">
                Sections
            </div>

            {#each routes as route}
                <a
                    href={route.path}
                    class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
                >
                    {route.name}
                </a>
            {/each}
        </div>

        <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            <div class="text-xs uppercase text-gray-400 font-medium mb-6">
                Contact
            </div>
            {#each contacts as contact}
                <a
                    href={contact.path}
                    target="_blank"
                    class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
                >
                    {contact.name}
                </a>
            {/each}
        </div>
    </div>

    <!-- Copyright Bar -->
    <div class="pt-2">
        <div
            class="flex pb-5 px-3 m-auto pt-5 border-t border-gray-500 text-gray-400 text-sm flex-col md:flex-row max-w-6xl"
        >
            <div class="mt-2">Last updated 12-26-2024</div>
        </div>
    </div>
</footer>
