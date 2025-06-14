import React from "react";
import Companies from "../Components/Companies";
import Hero from "../Components/Hero";
import Content from "../Components/Content";
import Faq from "../Components/Faq";


export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
        <Hero />
         <div className="carousel gap-1 carousel-end rounded-box">
  <div className="carousel-item">
    <img src="/src/assets/Antihistamine.jpg" alt="Drink" />
  </div>
  <div className="carousel-item">
    <img
      src="/src/assets/Booster.jpg"
      alt="Drink" />
  </div>
  <div className="carousel-item">
    <img
      src="/src/assets/ColdandFlu.jpg"
      alt="Drink" />
  </div>
  <div className="carousel-item">
    <img
        src="/src/assets/FirstAid.jpg"
        alt="Drink" />
    </div>
    <div className="carousel-item">
        <img src="/src/assets/Immunity.jpg" 
        alt="Drink" />
    </div>
    <div className="carousel-item">
        <img src="/src/assets/Booster.jpg" 
        alt="Drink" />
    </div>
    <div className="carousel-item">
        <img
        src="/src/assets/Antihistamine.jpg"
        alt="Drink" />
    </div>
    </div>
        <Content />
        <Companies />
        <Faq />
        </div>
    );
    }