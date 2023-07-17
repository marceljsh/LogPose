import Logo from "@public/logo.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="shadow">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://github.com/marceljsh"
            className="flex items-center mb-4 sm:mb-0"
          >
            <Image src={Logo} className="h-8 mr-3" alt="LogPose Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              LogPose
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 text-gray-400">
            <li>
              <a
                href="https://linkedin.com/in/marceljsh"
                className="mr-4 hover:underline md:mr-6 "
              >
                Developer
              </a>
            </li>
            <li>
              <a
                href="https://github.com/marceljsh"
                className="mr-4 hover:underline md:mr-6"
              >
                Github
              </a>
            </li>
            <li>
              <a href="https://wa.me/6281396177991" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
        <span className="block text-sm sm:text-center text-gray-400">
          © 2023{" "}
          <a href="https://github.com/marceljsh" className="hover:underline">
            LogPose
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
