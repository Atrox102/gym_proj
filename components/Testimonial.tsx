"use client";

import { fadeIn } from "@/lib/variants";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa6";

// impoty swiper components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

// testimonial data
const testimonialData = [
  {
    img: "/assets/img/testimonial/lucy.jpg",
    message:
      "Thanks to the dedicated trainers and top-notch facilities, I achieved my fitness goals faster than I ever imagined. Highly recommend this gym!",
    name: "Lucy Brown",
  },
  {
    img: "/assets/img/testimonial/michael.jpg",
    message:
      "Joining this gym was a game-changer for me. The supportive community and excellent equipment have made my fitness journey enjoyable and effective.",
    name: "Micheal Smith",
  },
  {
    img: "/assets/img/testimonial/maria.jpg",
    message:
      "The trainers here truly care about your progress and push you to do your best. I've never felt more motivated and accomplished in my fitness journey.",
    name: "Maria Garcia",
  },
  {
    img: "/assets/img/testimonial/lucy.jpg",
    message:
      "This gym has everything you need to succeed, from expert trainers to modern equipment. I've seen amazing results and couldn't be happier with my progress.",
    name: "Lucy Brown",
  },
  {
    img: "/assets/img/testimonial/michael.jpg",
    message:
      "The clean, modern equipment and variety of classes keep me coming back. I've seen significant improvements in my fitness and overall health.",
    name: "Micheal Smith",
  },
  {
    img: "/assets/img/testimonial/maria.jpg",
    message:
      "The positive atmosphere and knowledgeable trainers have made all the difference. I feel stronger, fitter, and more confident than ever before.",
    name: "Maria Garcia",
  },
];

const Testimonial = () => {
  return (
    <section className=" py-12 xl:py-28" id="testimonial">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="h2 text-center"
        >
          Our Testimonials
        </motion.h2>
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Swiper
            className=" h-[320px]"
            slidesPerView={1}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {testimonialData.map((person, index) => (
              <SwiperSlide key={index} className=" h-full">
                <div className=" flex flex-col justify-center items-center gap-6 text-center h-full">
                  <Image
                    src={person.img}
                    alt=""
                    width={90}
                    height={90}
                    className=" rounded-full border-2 border-accent"
                  />
                  <div className=" flex flex-col justify-center items-center">
                    <FaQuoteLeft className=" text-2xl text-gray-300" />
                    <p className=" max-w-[380px] mb-4">{person.message}</p>
                    <span className=" text-2xl text-accent">{person.name}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
