import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <footer className="bg-white dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link href="/" className="flex items-center">
                <div className="mr-3 relative">
                  <Image
                    src="/rsv_white.svg"
                    width={200}
                    height={100}
                    alt="rsv Logo"
                    className="object-cover"
                  />
                </div>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Resources
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link href="/about-us" className="hover:underline">
                      About Us
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/allProjects" className="hover:underline">
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact-us" className="hover:underline">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow us
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link
                      href="https://www.linkedin.com/company/rsv-engineering-group-ltd/"
                      className="hover:underline "
                    >
                      Linked In
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="https://flowbite.com/" className="hover:underline">
                RSV Group
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
