import { useState, useRef, useEffect } from "react";
import Card from "./Card";
import Next from "@/public/whoWillUse/next.svg";
import Previous from "@/public/whoWillUse/previous.svg";

const cards = [
  {
    id: 1,
    name: "Отели, гостиницы, хостелы",
    img: "/whoWillUse/hotel.svg",
  },
  {
    id: 2,
    name: "Фудкорты, Рестораны, Кафе, Столовые",
    img: "/whoWillUse/aparts.svg",
  },
  {
    id: 3,
    name: "Больницы, клиники аптеки, школы, колледжи, садики",
    img: "/whoWillUse/univer.svg",
  },
  {
    id: 1,
    name: "Отели, гостиницы, хостелы",
    img: "/whoWillUse/hotel.svg",
  },
  {
    id: 2,
    name: "Фудкорты, Рестораны, Кафе, Столовые",
    img: "/whoWillUse/aparts.svg",
  },
  {
    id: 3,
    name: "Больницы, клиники аптеки, школы, колледжи, садики",
    img: "/whoWillUse/univer.svg",
  },
];

function WhoWillUse() {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className="carousel py-16 container mx-auto">
      <div className="flex flex-wrap justify-center items-center mx-64">
        <div className="w-1/3">
          <hr className="border-blue"></hr>
        </div>
        <div className="w-1/3 px-16 mb-4">
          <h1 className="text-center text-blue text-2xl">Для кого наши услуги?</h1>
        </div>
        <div className="w-1/3">
          <hr className="border-blue"></hr>
        </div>
      </div>
      <div className="relative overflow-hidden flex justify-center">
        <div className="flex justify-between absolute top left w-full h-full">
          <button
            onClick={movePrev}
            className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled("prev")}
          >
            <Previous />
          </button>
          <button
            onClick={moveNext}
            className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled("next")}
          >
            <Next />
          </button>
        </div>
        <div
          ref={carousel}
          className="carousel-container mx-20 relative flex gap-1 scroll-smooth overflow-hidden snap-x snap-mandatory touch-pan-x z-0 "
        >
          {cards.map((card, index) => {
            return (
              <div
                key={index}
                className="carousel-item items-center relative h-full py-4 snap-start mx-12"
              >
                <Card img={card.img} name={card.name} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default WhoWillUse;