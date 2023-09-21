export default function Footer() {
    return (
        <div>
           
<footer class="bg-white dark:bg-gray-900">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
              <a href="/" class="flex items-center">
                  <img src="/rsv_white.svg" class="h-[100px] mr-3" alt="rsv Logo" />
                  {/* <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span> */}
              </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="/about-us" class="hover:underline">About Us</a>
                      </li>
                      <li className="mb-4">
                          <a href="/allProjects" class="hover:underline">Projects</a>
                      </li>
                      <li>
                          <a href="/contact-us" class="hover:underline">Contact Us</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="https://www.linkedin.com/company/rsv-engineering-group-ltd/" class="hover:underline ">Linked In</a>
                      </li>
                      
                  </ul>
              </div>
             
          </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">RSV Group</a>. All Rights Reserved.
          </span>
         
      </div>
    </div>
</footer>

        </div>
    )
}