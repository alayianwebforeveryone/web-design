import React from "react";

const Footer = () => {
    return (


        <footer class="bg-white rounded-lg shadow m-4  fixed bottom-0 left-0 w-full ">
            <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span class="text-sm sm:text-center text-black">© 2023 <a href="https://flowbite.com/" class="hover:underline">Duck Design</a>. All Rights Reserved.
                </span>
                <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-black dark:text-black  sm:mt-0">
                    <li>
                        <a href="#" class="hover:underline me-4 md:me-6">Pricing</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline me-4 md:me-6">Capabilities </a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline me-4 md:me-6">Our work</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline">Signup</a>
                    </li>
                </ul>
            </div>
        </footer>

    )
}

export default Footer