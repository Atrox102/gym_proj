"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import CustomeButton from "./CustomeButton";
import { fadeIn } from "@/lib/variants";

const trainerData = [
  {
    image: "/assets/img/trainers/david.jpg",
    name: "David Williams",
    role: "Body Builder Coach",
    description:
      "With over 10 years of experience, John specializes in strength training and muscle building. His dynamic approach and motivational style will push you to new heights. Transform your body with John's expert guidance!",
    social: [
      { icon: FaFacebook, link: "https://facebook.com" },
      { icon: FaTwitter, link: "https://twitter.com" },
      { icon: FaYoutube, link: "https://youtube.com" },
    ],
  },
  {
    image: "/assets/img/trainers/rosy.jpg",
    name: "Rosy Rivera",
    role: "Body Builder Coach",
    description:
      "Emily brings her passion for fitness and high-energy routines to every session. As a certified personal trainer, she excels in cardio and functional training. Let Emily's enthusiasm inspire you to achieve your goals!",
    social: [
      { icon: FaFacebook, link: "https://facebook.com" },
      { icon: FaTwitter, link: "https://twitter.com" },
      { icon: FaYoutube, link: "https://youtube.com" },
    ],
  },
  {
    image: "/assets/img/trainers/matt.jpg",
    name: "Matt Stone",
    role: "Body Builder Coach",
    description:
      "Mark's expertise lies in Crossfit and high-intensity interval training. Known for his disciplined approach and relentless drive, he will help you surpass your fitness limits. Get ready to work hard and see results with Mark!",
    social: [
      { icon: FaFacebook, link: "https://facebook.com" },
      { icon: FaTwitter, link: "https://twitter.com" },
      { icon: FaYoutube, link: "https://youtube.com" },
    ],
  },
  {
    image: "/assets/img/trainers/sofia.jpg",
    name: "Sofia Lauren",
    role: "Body Builder Coach",
    description:
      "Sarah is a certified fitness coach with a focus on bodybuilding and nutrition. Her personalized programs and attention to detail ensure you get the best results. Sculpt your dream physique with Sarah's expert support!",
    social: [
      { icon: FaFacebook, link: "https://facebook.com" },
      { icon: FaTwitter, link: "https://twitter.com" },
      { icon: FaYoutube, link: "https://youtube.com" },
    ],
  },
];

const Team = () => {
  return (
    <section className=" py-12 xl:h-[110vh]" id="team">
      <div className="container mx-auto h-full flex flex-col items-center justify-center">
        <motion.h2
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="h2 text-center mb-6"
        >
          Our Trainers
        </motion.h2>
        {/* trainers grid */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 mb-12"
        >
          {trainerData.map((trainer, index) => (
            <div
              key={index}
              className=" flex flex-col items-center text-center"
            >
              <div className=" relative w-[320px] h-[360px] mx-auto mb-4">
                <Image src={trainer.image} alt="" fill />
              </div>
              {/* name */}
              <h4 className=" h4 mb-2">{trainer.name}</h4>
              {/* role */}
              <p className=" uppercase text-xs tracking-[3px] mb-2">
                {trainer.role}
              </p>
              {/* desc */}
              <p className=" mb-6 max-w-[320px] mx-auto">
                {trainer.description}
              </p>
              {/* socials */}
              <div className=" flex gap-12 justify-center">
                {trainer.social.map((social, index) => (
                  <div key={index}>
                    <Link
                      href={social.link}
                      className=" hover:text-accent transition-all"
                    >
                      <social.icon className="text-lg" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
        {/* btn */}
        {/* <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <CustomeButton
            containerStyles="w-[196px] h-[62px]"
            text="See all trainers"
          />
        </motion.div> */}
      </div>
    </section>
  );
};

export default Team;
