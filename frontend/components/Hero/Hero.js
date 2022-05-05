import Logo from "@/public/Logo.svg";
import ContactModal from "../ContactUs/Modal";
import {useState} from "react";

function Hero() {
  const [modalOn, setModalOn] = useState(false);
  const [choice, setChoice] = useState(false);

  const clicked = () => {
    setModalOn(true);
  };

  return (
    <section className="bg-[url('/hero.svg')] bg-cover bg-center h-full min-h-screen">
      <div className="container mx-auto">
        <header className="header flex flex-row justify-between items-center">
          <div className="logo flex flex-row items-center">
            <Logo />
            <h1 className="text-yellow text-2xl">
              <strong>IDEAL-DEZ</strong>
            </h1>
          </div>
          <div className="phone-number flex flex-col">
            <p className="text-white">
              <strong>+7 (775) 680 6789</strong>
            </p>
            <p className="text-white">
              <strong>+7 (700) 246 3194</strong>
            </p>
          </div>
        </header>
        <div className="py-60">
          <div className="hero flex flex-col w-1/2">
            <h1 className="text-5xl	text-white m-4">
              <strong>Защитим ваш дом от вредителей</strong>
            </h1>
            <p className="text-xl text-white m-4">
              Дезинфекцию населению и организациям
            </p>
            <a className="m-4 p-2 inline-flex bg-yellow rounded-md text-white justify-center font-medium w-60" onClick={clicked}>
              Оставить заявку
            </a>
          </div>
        </div>
      </div>
      {modalOn && (
        <ContactModal setModalOn={setModalOn} setChoice={setChoice} />
      )}
    </section>
  );
}

export default Hero;
