/* eslint-disable no-unused-vars */
import React from "react";
import image1 from "../assets/desktop/image-interactive.jpg";
import image2 from "../assets/mobile/image-interactive.jpg";

const About = () => {
  return (
    <section className="mx-auto container p-5 mt-14">
      <div className="flex flex-col gap-4 justify-between items-center lg:items-end lg:flex-row">
        <div>
          <img src={image2} className="block lg:hidden" />
          <img src={image1} className="hidden w-[150rem] lg:block" />
        </div>
        <div className="text-center bg-white lg:text-left lg:relative md:px-16 md:pt-6 md:-left-36">
          <h1 className="uppercase text-4xl font-light my-4 xl:text-6xl">
            The leader in interactive vr
          </h1>
          <p className="font-alata opacity-50 w-[90%] mx-auto lg:mx-0 lg:w-full">
            Founded in 2011, Loopstudios has beed producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
