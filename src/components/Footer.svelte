<script>
    import { contacts } from "../utils/contacts";
    import { routes } from "../utils/routes";
</script>

<footer class="bg-[#0A1026] pt-5 sm:mt-10 w-full">
    <div class="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
        <!-- Col-1 -->
        <div class="p-4 w-1/2 sm:w-4/12 md:w-3/12">
            <!-- Col Title -->
            <div class="text-xs uppercase text-white hover:text-[#01C979] mb-5 cursor-pointer transition-colors duration-300">
                Sections
            </div>

            {#each routes as route}
                <a
                    href={route.path}
                    class="my-2 block text-white hover:text-[#01C979] text-sm cursor-pointer transition-colors duration-300"
                >
                    {route.name}
                </a>
            {/each}
        </div>

        <div class="p-4 w-1/2 sm:w-4/12 md:w-3/12">
            <div class="text-xs uppercase text-white hover:text-[#01C979] font-medium mb-5 cursor-pointer transition-colors duration-300">
                Contact
            </div>
            {#each contacts as contact}
                <a
                    href={contact.path}
                    target="_blank"
                    class="my-2 block text-white hover:text-[#01C979] text-sm cursor-pointer transition-colors duration-300"
                >
                    {contact.name}
                </a>
            {/each}
        </div>
    </div>

    <!-- Copyright Bar -->
    <div class="pt-1">
        <div
            class="flex pb-5 px-3 m-auto pt-4 border-t border-[#01C979] text-white text-sm flex-col md:flex-row max-w-6xl"
        >
            <div class="mt-2">Last updated 12-26-2024</div>
        </div>
    </div>
</footer>
