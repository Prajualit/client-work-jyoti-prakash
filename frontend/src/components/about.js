"use client";

import Image from "next/image";
import owner1 from "../app/assets/owner1.jpg";
import owner2 from "../app/assets/owner2.png";
import owner3 from "../app/assets/owner3.jpg";
import owner4 from "../app/assets/owner4.jpg";
import owner5 from "../app/assets/owner5.jpg";
import cert1 from "../app/assets/certifications/img1.jpeg";
import cert2 from "../app/assets/certifications/img2.jpeg";
import cert3 from "../app/assets/certifications/img3.jpeg";
import cert4 from "../app/assets/certifications/img4.png";
import cert5 from "../app/assets/certifications/img5.jpeg";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const certifications = [cert1, cert2, cert3, cert4, cert5];

const aboutList = [
  {
    description:
      "Hi, I’m Poonam, a dedicated Wellness and Lifestyle Coach with 2 years of experience helping individuals achieve healthier, more balanced lives.",
    points: [
      "2 years of experience as a Wellness and Lifestyle Coach",
      "Supportive guidance for nutrition, fitness, and mindset",
    ],
    socials: [
      { label: "Instagram", href: "" },
      { label: "Facebook", href: "" },
    ],
    image: owner2,
  },
  {
    description:
      "Hi, I’m Pamnesh Sharma, an energetic Wellness and Lifestyle Coach with 2 years of experience, specializing in helping busy professionals enhance their performance and prevent burnout.",
    points: [
      "2 years of experience coaching professionals and executives",
      "Expert in stress management and energy optimization techniques",
    ],
    socials: [
      { label: "Instagram", href: "" },
      { label: "Facebook", href: "" },
    ],
    image: owner3,
  },
  {
    description:
      "Hi, I’m Puja, an empathetic and certified Wellness and Lifestyle Coach with 2 years of experience focused on guiding individuals towards inner peace and emotional balance.",
    points: [
      "2 years of experience in holistic and mindful coaching",
      "Specialist in mindfulness practices and stress reduction",
    ],
    socials: [
      { label: "Instagram", href: "" },
      { label: "Facebook", href: "" },
    ],
    image: owner4,
  },
  {
    description:
      "Hi, I’m Karam Chand Verma, a seasoned and certified Wellness and Lifestyle Coach with over 2 years of experience in facilitating profound, long-term health transformations.",
    points: [
      "2 years of experience in transformational health coaching",
      "Expert in advanced nutrition and the science of habit formation",
    ],
    socials: [
      { label: "Instagram", href: "" },
      { label: "Facebook", href: "" },
    ],
    image: owner5,
  },
  // Add more trainers here if needed
];

const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-black"
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="check"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
  >
    <path
      fill="currentColor"
      d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
    ></path>
  </svg>
);

export default function About() {
  return (
    <div>
      <section
        id="about"
        className="w-full py-32 flex flex-col gap-10 px-8 relative overflow-hidden"
      >
        <div className="text-center mb-4">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Meet Your Trainers
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Expert wellness and lifestyle coaches dedicated to guiding you towards a healthier, more balanced life
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto w-full mb-12 relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".cert-swiper-next",
              prevEl: ".cert-swiper-prev",
            }}
            pagination={{
              clickable: true,
            }}
            className="cert-swiper pb-14"
          >
            {certifications.map((cert, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-[500px] md:h-[600px]">
                  <Image
                    src={cert}
                    alt={`Certification ${index + 1}`}
                    fill
                    sizes="100vw"
                    className="object-contain"
                    priority={index < 3}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="cert-swiper-prev absolute left-0 top-1/2 -translate-y-1/2 z-30 w-11 h-11 bg-white/80 shadow-lg rounded-full flex items-center justify-center text-emerald-600 hover:bg-emerald-50 hover:shadow-emerald-200/50 transition-all duration-300 group">
            <svg
              className="w-5 h-5 transform group-hover:-translate-x-0.5 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button className="cert-swiper-next absolute right-0 top-1/2 -translate-y-1/2 z-30 w-11 h-11 bg-white/80 shadow-lg rounded-full flex items-center justify-center text-emerald-600 hover:bg-emerald-50 hover:shadow-emerald-200/50 transition-all duration-300 group">
            <svg
              className="w-5 h-5 transform group-hover:translate-x-0.5 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col items-center justify-center space-y-10 xl:space-y-20">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:space-x-5 space-y-5">
            <div
              className="flex items-center justify-center"
              id="about-avatar-block"
            >
              <div className="w-40 h-52 rounded-2xl shadow-lg border-4 border-black overflow-hidden flex items-center justify-center">
                <Image
                  src={owner1}
                  alt="Owner"
                  width={160}
                  height={208}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="" id="about-owner-content-block">
              <p className="text-md text-gray-700 mb-4">
                Hi, I’m Jyoti Parkash, a Certified Wellness Coach specializing
                in Nutrigenomics. With 3 years of experience, I have helped over
                300 clients achieve their health goals by personalizing
                nutrition based on their unique genetic makeup.
              </p>
              <ul className="space-y-2 mb-6 text-sm">
                {[
                  "Certified Wellness Coach in Nutrigenomics",
                  "3+ years of professional coaching experience",
                ].map((point, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-800">
                    <CheckIcon /> {point}
                  </li>
                ))}
              </ul>
              <div className="flex gap-4 text-black mt-2">
                {[
                  {
                    label: "Instagram",
                    href: "https://www.instagram.com/jp3793?igsh=MTdkcjlpemlvd25oaw==",
                  },
                  {
                    label: "Facebook",
                    href: "https://www.facebook.com/share/1GZCZW8pCq/",
                  },
                ].map((social, i) => (
                  <Link key={i} href={social.href}>
                    <span className="text-black hover:underline font-semibold flex items-center gap-1 cursor-pointer">
                      {social.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="grid  xl:grid-cols-2 space-y-16 ">
          {aboutList.map((about, idx) => (
            <div
              key={idx}
              className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:space-x-5 space-y-5"
            >
              <div
                className="flex items-center justify-center"
                id="about-avatar-block"
              >
                <div className="w-40 h-52 rounded-2xl shadow-lg border-4 border-black overflow-hidden flex items-center justify-center">
                  <Image
                    src={about.image}
                    alt="Owner"
                    width={160}
                    height={208}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="" id="about-owner-content-block">
                <p className="text-md text-gray-700 mb-4">
                  {about.description}
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  {about.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-gray-800"
                    >
                      <CheckIcon /> {point}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-4 text-black mt-2">
                  {about.socials.map((social, i) => (
                    <Link key={i} href={social.href}>
                      <span className="text-black hover:underline font-semibold flex items-center gap-1 cursor-pointer">
                        {social.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style jsx global>{`
        .cert-swiper .swiper-pagination {
          bottom: 0 !important;
        }

        .cert-swiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #059669;
          opacity: 0.4;
          transition: all 0.3s ease;
          border-radius: 100%;
        }

        .cert-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scale(1.2);
        }

        .cert-swiper {
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
