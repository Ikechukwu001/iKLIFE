import React, { useEffect, useRef } from "react";
import Companies from "../Components/Companies";
import Hero from "../Components/Hero";
import Content from "../Components/Content";
import Faq from "../Components/Faq";

import Antihistamine from "../assets/Antihistamine.jpg";
import Booster from "../assets/Booster.jpg";
import ColdandFlu from "../assets/ColdandFlu.jpg";
import FirstAid from "../assets/FirstAid.jpg";
import Immunity from "../assets/Immunity.jpg";

export default function Home() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollBy({
          left: 200, // Adjust based on item width
          behavior: "smooth",
        });

        // Optional: Scroll back to start if at end
        if (
          carouselRef.current.scrollLeft + carouselRef.current.offsetWidth >=
          carouselRef.current.scrollWidth
        ) {
          carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 2000); // every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <Hero />

      <div
        ref={carouselRef}
        className="carousel gap-1 carousel-end rounded-box overflow-x-auto scroll-smooth whitespace-nowrap"
        style={{ scrollBehavior: "smooth" }}
      >
        <div className="carousel-item inline-block">
          <img src={Antihistamine} alt="Antihistamine" />
        </div>
        <div className="carousel-item inline-block">
          <img src={Booster} alt="Booster" />
        </div>
        <div className="carousel-item inline-block">
          <img src={ColdandFlu} alt="Cold and Flu" />
        </div>
        <div className="carousel-item inline-block">
          <img src={FirstAid} alt="First Aid" />
        </div>
        <div className="carousel-item inline-block">
          <img src={Immunity} alt="Immunity" />
        </div>
        <div className="carousel-item inline-block">
          <img src={Antihistamine} alt="Antihistamine" />
        </div>
        <div className="carousel-item inline-block">
          <img src={Booster} alt="Booster" />
        </div>
      </div>

      <Content />
      <Companies />
      <Faq />
    </div>
  );
}
