"use client";
import Image from "next/image";
import Cat1 from "@/public/assets/cat-1.gif";
import Cat2 from "@/public/assets/cat-2.gif";
import Cat3 from "@/public/assets/cat-3.gif";
import Cat4 from "@/public/assets/cat-4.gif";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const slides = [
    {
      title: "My Dearest Maryam,",
      text: `I've been wanting to tell you this but I've been nervous and overthinking everything to the point it almost ruined everything. You are the most amazing, funny, kind, caring, prettiest person I've met. Every moment we share together I can't help but keep smiling and want to remember it always.`,
      img: Cat1,
    },
    {
      title: "My Dearest Maryam,",
      text: "We are both not the type of people to rush things, but in my opinion this isn't rushed at all. I know we have something special and I want to take it to the next level together. I make excuses to see you, talk to you, and spend time with you because I enjoy being around you more than you think.",
      img: Cat2,
    },
    {
      title: "My Dearest Maryam,",
      text: "We can still take things slow still and not rush everything and get to know each other more and more I would love to know everything about you even. I just want to be with you and make you happy and that would make ME happy as well. And I never asked this officially but...",
      img: Cat3,
    },
    {
      title: "Will you be my girlfriend?",
      text: "Choose wisely 💖",
      img: Cat4,
      isFinal: true,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [noPosition, setNoPosition] = useState({ top: "0px", left: "120px" });

  const handleNext = () => {
    setCurrentSlide((prev) => {
      if (prev < slides.length - 1) return prev + 1;
      return prev;
    });
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => {
      if (prev > 0) return prev - 1;
      return prev;
    });
  };
  const moveNoButton = () => {
    const maxTop = window.innerHeight - 20;
    const maxLeft = window.innerWidth - 20;

    const top = Math.floor((Math.random() * maxTop) / 3) + "px";
    const left = Math.floor((Math.random() * maxLeft) / 3) + "px";

    setNoPosition({ top, left });
  };
  const current = slides[currentSlide];
  return (
    <div className="bg-[url('/assets/paper.jpg')] min-h-screen flex flex-col items-center justify-center text-black transition-all duration-500 px-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
        {current.title}
      </h1>

      <p
        key={currentSlide}
        className="w-full sm:w-4/5 md:w-3/5 lg:w-1/2 text-lg sm:text-xl md:text-2xl mt-6 mb-6 text-center transition-opacity opacity-100 duration-300"
      >
        {current.text}
      </p>

      {current.img && (
        <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 relative">
          <Image
            src={current.img}
            alt=""
            className="object-contain w-full h-full"
          />
        </div>
      )}

      {!current.isFinal ? (
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <button
            onClick={handlePrev}
            disabled={currentSlide === 0}
            className={`text-base sm:text-lg font-semibold cursor-pointer w-24 h-10 flex items-center justify-center rounded-md transition ${
              currentSlide === 0 ? "hidden" : "bg-pink-300 hover:bg-pink-500"
            }`}
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            disabled={currentSlide === slides.length - 1}
            className={`text-base sm:text-lg font-semibold cursor-pointer w-24 h-10 flex items-center justify-center rounded-md transition ${
              currentSlide === slides.length - 1
                ? "hidden"
                : "bg-pink-300 hover:bg-pink-500"
            }`}
          >
            Next
          </button>
        </div>
      ) : (
        <div className="relative mt-6 w-full max-w-sm h-48 flex items-center justify-center">
          <button
            onClick={() =>
              alert(
                "Yay! She said YES! 💖. I actually haven't implemented a way to know what you answered so you'll have to show me.. oops."
              )
            }
            className="text-base sm:text-lg font-semibold w-24 h-12 bg-green-400 hover:bg-green-500 rounded-md transition"
          >
            Yes
          </button>

          <button
            onMouseEnter={moveNoButton}
            onClick={moveNoButton}
            className="text-base sm:text-lg font-semibold w-24 h-12 bg-red-400 hover:bg-red-500 rounded-md transition absolute"
            style={{
              top: noPosition.top,
              left: noPosition.left,
              transition: "top 0.3s ease, left 0.3s ease",
            }}
          >
            No
          </button>
        </div>
      )}
    </div>
  );
}
