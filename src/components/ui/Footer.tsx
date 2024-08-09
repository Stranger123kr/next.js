import Image from "next/image";
import React from "react";
import { FaGithub, FaInstagram, FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <>
        {/* component */}
        <footer className="bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100">
          <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div>
                <Image
                  src="https://cdn1.iconfinder.com/data/icons/social-media-vol-3/24/_spotify-256.png"
                  alt="logo"
                  width={38}
                  height={38}
                  className="mr-5 h-6 sm:h-9"
                />
                <p className="max-w-xs mt-4 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas, accusantium.
                </p>
                <div className="flex mt-8 space-x-6 text-gray-600">
                  <a
                    className="hover:opacity-75"
                    href=""
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="sr-only"> Instagram </span>
                    <FaInstagram />
                  </a>
                  <a
                    className="hover:opacity-75"
                    href=""
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="sr-only"> Twitter </span>
                    <FaTwitterSquare />
                  </a>
                  <a
                    className="hover:opacity-75"
                    href=""
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="sr-only"> GitHub </span>
                    <FaGithub />
                  </a>
                  <a
                    className="hover:opacity-75"
                    href=""
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="sr-only">Linkedin</span>
                    <FaLinkedin />
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <p className="font-medium text-black">Company</p>
                  <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                    <a className="hover:opacity-75" href="">
                      {" "}
                      About{" "}
                    </a>
                    <a className="hover:opacity-75" href="">
                      {" "}
                      Meet the Team{" "}
                    </a>
                    <a className="hover:opacity-75" href="">
                      {" "}
                      History{" "}
                    </a>
                    <a className="hover:opacity-75" href="">
                      {" "}
                      Careers{" "}
                    </a>
                  </nav>
                </div>
                <div>
                  <p className="font-medium text-black">Services</p>
                  <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                    <a className="hover:opacity-75" href="">
                      {" "}
                      1on1 Coaching{" "}
                    </a>
                    <a className="hover:opacity-75" href="">
                      {" "}
                      Company Review{" "}
                    </a>
                    <a className="hover:opacity-75" href="">
                      {" "}
                      Accounts Review{" "}
                    </a>
                    <a className="hover:opacity-75" href="">
                      {" "}
                      HR Consulting{" "}
                    </a>
                    <a className="hover:opacity-75" href="">
                      {" "}
                      SEO Optimisation{" "}
                    </a>
                  </nav>
                </div>
                <div>
                  <p className="font-medium text-black">Helpful Links</p>
                  <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                    <a className="hover:opacity-75" href="">
                      {" "}
                      Contact{" "}
                    </a>
                    <a className="hover:opacity-75" href="">
                      {" "}
                      FAQs{" "}
                    </a>
                    <a className="hover:opacity-75" href="">
                      {" "}
                      Live Chat{" "}
                    </a>
                  </nav>
                </div>
                <div>
                  <p className="font-medium text-black">Legal</p>
                  <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                    <a className="hover:opacity-75" href="">
                      {" "}
                      Privacy Policy{" "}
                    </a>
                    <a className="hover:opacity-75" href="">
                      {" "}
                      Terms &amp; Conditions{" "}
                    </a>
                    <a className="hover:opacity-75" href="">
                      {" "}
                      Returns Policy{" "}
                    </a>
                    <a className="hover:opacity-75" href="">
                      {" "}
                      Accessibility{" "}
                    </a>
                  </nav>
                </div>
              </div>
            </div>
            <p className="mt-8 text-sm text-gray-800">
              © 2024 Apnna Music Club
            </p>
          </div>
        </footer>
      </>
    </>
  );
};

export default Footer;
