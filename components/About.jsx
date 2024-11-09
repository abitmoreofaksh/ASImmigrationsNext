const About = () => {
  return (
    <section class="py-8 relative" id="about-us">
      <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div class="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
          <div class="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
            <div class="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
              <p className="font-semibold text-blue-600">About Us</p>
              <h2 class="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                Building a Better Future Through Immigration Services
              </h2>
              <p class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                At AS Immigrations, we believe that diversity is the cornerstone
                of a thriving community. Our mission is to help individuals and
                families achieve their dreams of relocating and building a
                prosperous life in new countries. Through our comprehensive,
                personalized immigration services, we work to remove barriers
                and make the immigration process smoother, simpler, and more
                accessible to everyone.
              </p>
              <p class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                Our team of dedicated experts is committed to guiding you every
                step of the way. From handling complex paperwork to providing
                insights on visas, residency, and citizenship, we leverage our
                expertise to ensure your journey is as seamless as possible. By
                focusing on collaboration and empowerment, we strive to create
                an inclusive environment where everyone, regardless of
                background, has the opportunity to succeed.
              </p>
            </div>
            <button class="sm:w-fit w-full px-3.5 py-2 bg-blue-400 hover:bg-blue-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
              <span class="px-1.5 text-white text-sm font-medium leading-6">
                Get Started
              </span>
            </button>
          </div>
          <img
            class="lg:mx-0 mx-auto h-full rounded-3xl object-cover"
            src="https://pagedone.io/asset/uploads/1717751272.png"
            alt="about Us image"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
