<svelte:head>
    <title>Services</title>
    <meta name="description" content="Services" />
</svelte:head>

<section
    class="flex flex-col items-center justify-center font-sans px-6 mx-auto w-full lg:max-w-screen-lg sm:max-w-screen-sm md:max-w-screen-md pb-16 pt-20 text-center"
>
    <h1 class="text-4xl font-bold text-white mb-10">Services</h1>
    <p class="text-lg text-gray-300 leading-relaxed lg:text-xl mb-7">
        I offer tailored services to help businesses and individuals achieve
        their goals through technology. With expertise in backend development,
        machine learning, cloud systems, and frontend design, I create robust
        and scalable solutions. Explore my core offerings below.
    </p>

    <div class="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-2">
        <!-- Backend Development -->
        <div
            class="bg-lordran-blue rounded-lg shadow-md p-7 border border-lordran-green transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
        >
            <h2 class="text-2xl font-bold text-lordran-green mb-4">
                Backend Development
            </h2>
            <p class="text-gray-300 mb-4">
                Crafting scalable and efficient APIs and microservices using 
                <span class="font-bold text-white">Java, TypeScript,</span> and 
                <span class="font-bold text-white">Rust</span>. I specialize in 
                designing RESTful APIs, database optimization, and distributed 
                systems for modern applications. I use frameworks like 
                <span class="font-bold text-white">Hono, Actix Web,</span> and 
                <span class="font-bold text-white">Spring Boot</span>. All backend 
                projects are fully <span class="font-bold text-white">Dockerized</span> 
                for consistency and easy deployment across environments.
            </p>
        </div>

        <!-- SaaS & Custom Software -->
        <div
            class="bg-lordran-blue rounded-lg shadow-md p-7 border border-lordran-green transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
        >
            <h2 class="text-2xl font-bold text-lordran-green mb-4">
                SaaS & Custom Software
            </h2>
            <p class="text-gray-300 mb-4">
                Designing and implementing SaaS platforms and custom software 
                for enterprises. I use <span class="font-bold text-white">SvelteKit</span> 
                with <span class="font-bold text-white">Bun</span> for high-performance 
                and modern web applications. All projects are backed by a 
                <span class="font-bold text-white">PostgreSQL</span> database and are 
                <span class="font-bold text-white">Dockerized</span> to ensure seamless 
                scaling and reliable deployments.
            </p>
        </div>

        <!-- Machine Learning -->
        <div
            class="bg-lordran-blue rounded-lg shadow-md p-7 border border-lordran-green transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
        >
            <div class="mb-4">
                <span
                    class="px-3 py-1 rounded-full text-sm font-semibold text-white bg-lordran-green"
                >
                    coming soon
                </span>
            </div>
            <h2 class="text-2xl font-bold text-lordran-green mb-4">
                Machine Learning
            </h2>
            <p class="text-gray-300 mb-4">
                Building and training ML models with <span class="font-bold text-white">PyTorch</span>, 
                <span class="font-bold text-white">Python</span>, and 
                <span class="font-bold text-white">NumPy</span>. From scalable 
                pipelines to custom AI solutions, I focus on real-world 
                applications like predictive analytics, computer vision, and 
                natural language processing. All projects include 
                <span class="font-bold text-white">Docker</span> support for reproducible 
                environments.
            </p>
        </div>

        <!-- Blockchain Solutions -->
        <div
            class="bg-lordran-blue rounded-lg shadow-md p-7 border border-lordran-green transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
        >
            <div class="mb-4">
                <span
                    class="px-3 py-1 rounded-full text-sm font-semibold text-white bg-lordran-green"
                >
                    coming soon
                </span>
            </div>
            <h2 class="text-2xl font-bold text-lordran-green mb-4">
                Blockchain Solutions
            </h2>
            <p class="text-gray-300 mb-4">
                Developing secure and lightweight blockchain applications using 
                <span class="font-bold text-white">Rust</span> and 
                <span class="font-bold text-white">WebAssembly</span>. I focus on 
                wallet solutions, smart contracts, and decentralized systems 
                tailored for modern use cases. All blockchain solutions are 
                <span class="font-bold text-white">Dockerized</span> for efficient 
                testing and deployment.
            </p>
        </div>
    </div>
</section>
