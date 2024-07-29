"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebook,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import CustomeButton from "./CustomeButton";
import { motion } from "framer-motion";

// variants
const footerContainerVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.6,
      duration: 0.5,
      ease: "linear",
    },
  },
};

const footerItem = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.6, 0.3, 0.8],
    },
  },
};

const Footer = () => {
  return (
    <footer className=" bg-primary-300 py-24">
      <div className="container md:ml-[350px] mx-auto pb-24">
        <motion.div
          variants={footerContainerVariant}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="text-white grid grid-cols-1 xl:grid-cols-4 gap-x-8 gap-y-12"
        >
          {/* info */}
          <motion.div variants={footerItem} className=" flex flex-col gap-4">
            <Link href="#">
              <Image
                src={"/assets/img/logo.png"}
                alt=""
                width={117}
                height={55}
              />
            </Link>
            <p className=" max-w-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
              adipisci.
            </p>
            <ul className=" flex flex-col gap-4">
              <li className=" flex items-center gap-4">
                <FaMapMarkerAlt className="text-xl text-accent" />
                <span>Lincoln Park Chicago, Illainois</span>
              </li>
              <li className=" flex items-center gap-4">
                <FaPhoneAlt className="text-xl text-accent" />
                <span>(510) 710-3464 (510) 640-6326</span>
              </li>
              <li>
                <Link href="#" className=" flex items-center gap-4">
                  <FaEnvelope className="text-xl text-accent" />
                  <span>sayhello@email.com</span>
                </Link>
              </li>
            </ul>
          </motion.div>
          {/* blog */}
          <motion.div variants={footerItem}>
            <h4 className="h4 text-accent mb-4">Recent blog posts</h4>
            {/* post */}
            <div className=" border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
              <Link href="#" className=" hover:text-accent transition-all">
                <h5 className="h5 leading-snug">
                  How to stay motivated for all exercise
                </h5>
                <p className=" text-gray-400 text-[12px] tracking-[3px] uppercase">
                  Septemper 22, 2024
                </p>
              </Link>
            </div>
            <div className=" border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
              <Link href="#" className=" hover:text-accent transition-all">
                <h5 className="h5 leading-snug">
                  How to stay motivated for all exercise
                </h5>
                <p className=" text-gray-400 text-[12px] tracking-[3px] uppercase">
                  Septemper 22, 2024
                </p>
              </Link>
            </div>
            <div className=" flex flex-col gap-3 pb-3 mb-4">
              <Link href="#" className=" hover:text-accent transition-all">
                <h5 className="h5 leading-snug">
                  How to stay motivated for all exercise
                </h5>
                <p className=" text-gray-400 text-[12px] tracking-[3px] uppercase">
                  Septemper 22, 2024
                </p>
              </Link>
            </div>
          </motion.div>
          {/* gallery */}

          {/* newsletter */}
          <motion.div variants={footerItem}>
            <h4 className="h4 text-accent mb-4">Newsletter</h4>
            <div className=" flex flex-col gap-4">
              <p className="">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam itaque officiis amet.
              </p>
              <form className="flex items-center">
                <input
                  type="text"
                  placeholder="Your email address"
                  className="h-[50px] outline-none px-4 text-primary-300"
                />
                <CustomeButton
                  containerStyles="h-[50px] px-8"
                  text="send"
                ></CustomeButton>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
      {/* copyrights */}
      <div className=" text-white border-t border-white/20 py-12">
        <div className="container mx-auto h-full">
          <div className=" flex items-center justify-between h-full">
            <span>&copy; Copyright 2024 Fitphysique</span>
            <ul className="flex gap-4 text-xl">
              <li>
                <Link
                  href="#"
                  className=" text-white hover:text-accent transition-all"
                >
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className=" text-white hover:text-accent transition-all"
                >
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className=" text-white hover:text-accent transition-all"
                >
                  <FaYoutube />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
