import React from "react";

const Footer = () => {
  return (
    <footer class=" rounded-lg bg-white shadow">
      <div class="mx-auto w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span class="text-sm text-black sm:text-center">
          © 2023{" "}
          <a href="https://flowbite.com/" class="hover:underline">
            Duck Design
          </a>
          . All Rights Reserved.
        </span>
        <ul class="mt-3 flex flex-wrap items-center text-sm font-medium text-black sm:mt-0 dark:text-black">
          <li>
            <a href="#" class="me-4 hover:underline md:me-6">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" class="me-4 hover:underline md:me-6">
              Capabilities{" "}
            </a>
          </li>
          <li>
            <a href="#" class="me-4 hover:underline md:me-6">
              Our work
            </a>
          </li>
          <li>
            <a href="#" class="hover:underline">
              Signup
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
