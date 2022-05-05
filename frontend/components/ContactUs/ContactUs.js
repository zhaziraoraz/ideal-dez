import Email from "@/public/contactUs/email.svg";
import Phone from "@/public/contactUs/phone.svg";
import WhatsApp from "@/public/contactUs/whatsapp.svg";
import ContactModal from "./Modal";
import {useState} from "react";

function ContactUs() {
  const content = [
    {
      id: 1,
      name: "Позвонить",
      icon: <Phone />,
    },
    {
      id: 2,
      name: "WhatsApp",
      icon: <WhatsApp />,
    },
    {
      id: 3,
      name: "Email",
      icon: <Email />,
    },
  ];

  const [modalOn, setModalOn] = useState(false);
  const [choice, setChoice] = useState(false);

  const clicked = () => {
    setModalOn(true)
  }

  return (
    <div className="contact-us py-16 bg-[url('/contactUs/Background.svg')] bg-no-repeat bg-bottom">
      <div className="container mx-auto">
      <div className="flex flex-wrap justify-center items-center mx-64">
        <div className="w-1/3">
          <hr className="border-blue"></hr>
        </div>
        <div className="w-1/3 px-16 mb-4">
          <h1 className="text-center text-blue text-2xl">
            Свяжитесь с нами
          </h1>
        </div>
        <div className="w-1/3">
          <hr className="border-blue"></hr>
        </div>
      </div>
        <div className="flex flex-wrap mt-8">
          {content.map((item) => (
            <div className="w-1/3 p-4" key={`${item.id}`}>
              <div className="flex flex-col items-center">
                <div className="flex border border-[#F3EBEB] p-16 rounded-3xl hover:border-blue" onClick={clicked}>
                  <div className="flex flex-col items-center">
                    <div className="flex rounded-full w-32 h-32 bg-blue w- items-center justify-center">
                      {item.icon}
                    </div>
                    <p className="text-xl mt-4 text-blue">
                      <strong>{item.name}</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {
        modalOn && <ContactModal setModalOn={setModalOn} setChoice={setChoice} />
      }
    </div>
  );
}

export default ContactUs;
