import React from "react";
import { IoLogoSteam } from "react-icons/io";
import { SiValve } from "react-icons/si";

function Footer() {
  return (
    <div>
      <footer className="bg-[#0F0F0F] rounded-lg shadow dark:bg-gray-900 m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex items-center justify-between">
              <a href="#" className="flex items-center mb-4 sm:mb-0">
                <IoLogoSteam className="h-10 mr-3 text-white" size={50} />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-white">
                  Steam
                </span>
              </a>
              <a href="#" className="flex items-center mb-4 sm:mb-0 ml-4">
                <SiValve className="h-10 mr-3 text-white" size={50} />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-white">
                  Valve
                </span>
              </a>
            </div>

            <ul className="md:ml-10 flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a
                  href="https://store.steampowered.com/privacy_agreement/?snr=1_44_44_"
                  className="mr-4 hover:underline md:mr-6"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://store.steampowered.com/legal/?snr=1_44_44_"
                  className="mr-4 hover:underline md:mr-6 "
                >
                  Legal
                </a>
              </li>
              <li>
                <a
                  href="https://store.steampowered.com/subscriber_agreement/?snr=1_44_44_"
                  className="mr-4 hover:underline md:mr-6 "
                >
                  Steam Subscriber Agreement
                </a>
              </li>
              <li>
                <a
                  href="https://store.steampowered.com/steam_refunds/?snr=1_44_44_"
                  className="hover:underline"
                >
                  Refunds
                </a>{" "}
              </li>
              {/* <li>
                <a
                  href="https://store.steampowered.com/account/cookiepreferences/?snr=1_44_44_"
                  className="hover:underline"
                >
                  Cookies
                </a>
              </li> */}
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="break-words block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023 Valve Corporation. All rights reserved. All trademarks are
            property of their respective owners in the US and other countries.
            VAT included in all prices where applicable.{" "}
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
