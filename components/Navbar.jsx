"use client";
import { Box, Drawer, List, ListItemText } from "@mui/material";
import { IconArrowRight, IconChevronRight, IconX } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      if (scrollYProgress.get() > 0.03) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    }
  });
  const items = [
    {
      name: "Home",
      linkto: "/",
    },
    {
      name: "About",
      linkto: "/about-us",
    },
    {
      name: "Contact Us",
      linkto: "/contact-us",
    },
  ];
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(open ? false : true);
  };
  const list = () => (
    <Box
      sx={{
        width: 300,
        height: "100%",
      }}
      role="presentation"
    >
      <Box
        sx={{
          width: 300,
        }}
        role="presentation"
        onClick={() => setOpen(false)}
        onKeyDown={() => setOpen(false)}
      >
        <div className="flex justify-between p-3 pt-4 ">
          <div>
            {/* <Image
              src={theme === "dark" ? "/genvdark.png" : "/genvlight.png"}
              loading="eager"
              alt="Logo"
              width={300}
              height={300}
              className="lg:w-full w-[80%]"
            /> */}
          </div>
          <IconX className="w-8 h-8 ml-3 mr-4 b-3 cursor-pointer  text-slate-300" />
        </div>

        <List>
          {items.map((item, index) => (
            <Link href={item.linkto} key={index}>
              <div className="p-2">
                <div className="p-2 pl-5 border-b">
                  <ListItemText primary={item.name} />
                </div>
              </div>
            </Link>
          ))}

          <Link href="#">
            <div className="p-2">
              <div className="p-2 pl-5 border-b ">
                <ListItemText primary={"Enroll Now"} />
              </div>
            </div>
          </Link>
        </List>
      </Box>
    </Box>
  );
  return (
    <>
      <Drawer open={open} onClose={() => setOpen(false)}>
        {list()}
      </Drawer>

      <div
        className="sticky flex justify-center top-0 z-[52] bg-transparent "
        style={{ top: visible ? "0" : "10px" }}
      >
        <motion.header
          animate={
            !visible
              ? {
                  width: "70%",
                  borderRadius: "40px",
                  background: "rgba(245,245,245,0.5)",
                  backdropFilter: "blur(2px)",
                  boxShadow: "4.0px 8.0px 8.0px rgba(0,0,0,0.38)",
                }
              : {
                  width: "100%",
                  background: "transparent",
                  boxShadow: "none",
                }
          }
          transition={{
            type: "tween",
            ease: [0.33, 1, 0.68, 1], // This bezier curve gives a snappy acceleration with a smooth deceleration
            duration: 0.4, // Slightly faster duration for a tighter snap
          }}
          className="py-3 w-full "
        >
          <div className="px-4 sm:px-6 lg:px-8">
            <div className={`flex items-center justify-between`}>
              <div className="shrink-0">
                <Link
                  href="/"
                  className="flex justify-center items-center gap-10"
                >
                  <div className="text-2xl font-bold text-blue-700">
                    AS Immigrations
                  </div>
                </Link>
              </div>

              <div className="flex gap-10 items-center">
                <nav className="hidden space-x-10 md:flex md:items-center md:justify-center lg:space-x-12">
                  {items.map((item, index) => (
                    <Link
                      href={item.linkto}
                      key={index}
                      className="text-base group relative font-normal text-black transition-all duration-200 hover:text-gray-600"
                    >
                      <span className="group-hover:text-blue-600">
                        {item.name}
                      </span>
                      <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-blue-600 group-hover:w-3/6"></span>
                      <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-blue-600 group-hover:w-3/6"></span>
                    </Link>
                  ))}
                </nav>
                <div className="flex md:hidden" onClick={toggleDrawer}>
                  <button type="button" className="text-black">
                    <span>
                      <svg
                        className="w-7 h-7"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                <Link
                  href="/contact-us"
                  className=" relative items-center justify-start hidden lg:inline-block px-5 py-2.5 overflow-hidden font-medium transition-all bg-indigo-600 rounded-lg hover:bg-indigo-50 group"
                  role="button"
                >
                  <button class="">
                    <span class="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-indigo-50 rounded-lg"></span>
                    <span class="relative flex w-full text-base font-semibold text-left text-white transition-colors duration-200 ease-in-out group-hover:text-indigo-600">
                      Book Consultation <IconChevronRight />
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </motion.header>
      </div>
    </>
  );
};

export default Navbar;
