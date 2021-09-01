<template>
    <div class="bg-blue-300 p-6 text-gray-800 flex justify-center">
        <div class="w-full max-w-2xl">
            <div class="aspect-w-1 aspect-h-1 mb-6">
                <div class="grid grid-cols-3 grid-rows-3 gap-6">
                    <img class="w-full h-full object-cover object-center col-span-2 row-span-2" src="@/assets/beach.jpg" alt="Beach">
                    <img class="w-full h-full object-cover object-center" src="@/assets/beach.jpg" alt="Beach">
                    <img class="w-full h-full object-cover object-center" src="@/assets/beach.jpg" alt="Beach">
                    <img class="w-full h-full object-cover object-center col-span-3" src="@/assets/beach.jpg" alt="Beach">
                </div>
            </div>
            <div>
                <h2 class="text-2xl uppercase font-bold tracking-wider text-center mb-2">More about me.</h2>
                <p>First off, <span class="text-xl font-bold">thank you</span> for making it this far down! Other than web developement I'm usually playing games or going on a nice run that ends in places where I wish I had my camera on me! While I am wrapping up my degree I'd love to get in contact with you</p>
            </div>
            <div class="mt-4 flex gap-6 justify-center">
                <img class="w-6" src="@/assets/github-icon.svg" alt="Github Logog">
                <img class="w-6" src="@/assets/linkedin-icon.svg" alt="Linkedin">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            </div>
        </div>
    </div>
</template>