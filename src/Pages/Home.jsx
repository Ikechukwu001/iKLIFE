import React from "react";
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
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
        <Hero />
         <div className="carousel gap-1 carousel-end rounded-box">
  <div className="carousel-item">
    <img src={Antihistamine} alt="Drink" />
  </div>
  <div className="carousel-item">
    <img
      src={Booster}
      alt="Drink" />
  </div>
  <div className="carousel-item">
    <img
      src={ColdandFlu}
      alt="Drink" />
  </div>
  <div className="carousel-item">
    <img
        src={FirstAid}
        alt="Drink" />
    </div>
    <div className="carousel-item">
        <img src={Immunity}
        alt="Drink" />
    </div>
    <div className="carousel-item">
        <img src={Antihistamine}
        alt="Drink" />
    </div>
    <div className="carousel-item">
        <img
        src={Booster}
        alt="Drink" />
    </div>
    </div>
        <Content />
        <Companies />
        <Faq />
        </div>
    );
    }