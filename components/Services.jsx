import { IconChevronRight } from "@tabler/icons-react";
import React from "react";

const Services = () => {
  const service = [
    {
      imgsrc: "https://flowbite.com/docs/images/blog/image-1.jpg",
      title: "Spoken English",
      description:
        "Our Learn Speaking English course is designed meticulously to assist students in speaking fluent English.",
    },
    {
      imgsrc: "https://flowbite.com/docs/images/blog/image-1.jpg",
      title: "IELTS",
      description:
        "The International English Language Testing System (IELTS) is the most coveted English language test that helps you make your dream of studying abroad come true.",
    },
    {
      imgsrc: "https://flowbite.com/docs/images/blog/image-1.jpg",
      title: "PTE",
      description:
        "PTE is a computer-based academic English language test for non-native English speakers who wish to study abroad.",
    },
  ];
  return (
    <section class="py-8 ">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-2">
          <div class="relative w-full text-center">
            <h2 class="text-4xl font-bold text-gray-900 leading-[3.25rem]">
              Learn English
            </h2>
          </div>
          <div class="relative w-full text-center">
            <p class="text-lg font-normal text-gray-500 mb-5">
              The exchange of ideas and information is an excellent catalyst for
              the development of brighter minds. From preparation to
              examination, avail of a plethora of services by the best career
              consultant for those who wish to get admission to top foreign
              universities.
            </p>
          </div>
        </div>
        <div class="flex justify-center items-center  gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
          {service.map((item, index) => (
            <div class="bg-white rounded-lg max-w-sm mb-5" key={index}>
              <img class="rounded-lg" src={item.imgsrc} alt="" />

              <div class="p-5">
                <a href="#">
                  <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                    {item.title}
                  </h5>
                </a>
                <p class="font-normal text-gray-700 mb-3">{item.description}</p>
                <a class="text-blue-600 flex items-center gap-2" href="#">
                  Learn More <IconChevronRight />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
