"use client";

import { FaUsers } from "react-icons/fa";
import { IoIosPricetags } from "react-icons/io";
import { FaDumbbell } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import Achievements from "./Achievements";

const featured = [
  {
    icon: <FaUsers />,
    title: "Award-Winning Trainers",
    subtitle:
      "Train with the best! Our certified, award-winning trainers are here to guide you every step of the way, ensuring you reach your fitness goals with expert advice and personalized plans.",
  },
  {
    icon: <IoIosPricetags />,
    title: "Excellent Prices",
    subtitle:
      "Achieve your fitness goals without breaking the bank! Our membership plans are competitively priced to offer the best value, making top-tier fitness accessible to everyone.",
  },
  {
    icon: <FaDumbbell />,
    title: "Modern Equipment",
    subtitle:
      "Work out with the latest and greatest! Our gym is equipped with state-of-the-art machines and innovative fitness tools to provide you with a cutting-edge workout experience.",
  },
];

const About = () => {
  return (
    <section className=" pt-8 pb-14 lg:pt-16 lg:pb-28" id="about">
      <div className="container mx-auto">
        <div className=" flex flex-col items-center gap-2 mb-8">
          <motion.h2
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="h2 text-center"
          >
            About Us
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className=" max-w-[600px] mx-auto text-center"
          >
            Our dedication is for you to reach your fitness goals!
          </motion.p>
        </div>
        {/* featured items */}
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-16"
        >
          {featured.map((feature, index) => {
            return (
              <div
                key={index}
                className=" flex flex-col justify-center items-center gap-4 border p-10"
              >
                <div className=" text-4xl bg-primary-300 text-white w-[80px] h-[80px] rounded-full flex justify-center items-center">
                  {feature.icon}
                </div>
                <div className=" flex flex-col justify-center items-center gap-2 text-center">
                  <h4 className=" h4 text-accent">{feature.title}</h4>
                  <p>{feature.subtitle}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
        {/* achievments  */}
        <motion.div
          variants={fadeIn("up", 1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Achievements />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
