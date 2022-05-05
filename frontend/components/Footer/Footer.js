import Logo from "@/public/Logo.svg";
import Map from "@/public/map.svg";
import Phone from "@/public/contactUs/phone.svg";
import Email from "@/public/contactUs/email.svg";

function Footer() {
    const content = [
        {
            id:1,
            text:"+7 701 338 40 67",
            icon: <Phone/>
        },
        {
            id:2,
            text:"г. Астана, ул. Б. Момышулы 26",
            icon: <Map/>
        },
        {
            id:3, 
            text:"contact@ideal-dez.kz",
            icon: <Email/>
        }
    ]
  return (
    <div className="footer bg-blue py-16 mt-auto">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-1/3 p-4">
            <div className="flex flex-row items-center">
              <Logo />
              <h1 className="text-2xl text-yellow">
                <strong>IDEAL-DEZ</strong>
              </h1>
            </div>
          </div>
          <div className="w-1/3 p-4">
            <p className="text-xl text-yellow">
              <strong>Сервисы</strong>
            </p>
            <div className="flex flex-col">
              {[
                "Дезинфекция",
                "Дезинсекция",
                "Дератизация",
                "Клининговые услуги",
                "Чистка вентиляции",
              ].map((item) => (
                <a className="text-white mt-2">{item}</a>
              ))}
            </div>
          </div>
          <div className="w-1/3 p-4">
            <p className="text-xl text-yellow"><strong>Контакты</strong></p>
            <div className="flex flex-col">
            {
                content.map((item) => (
                    <div className="flex flex-row" key={`${item.id}`}>
                        <div className="mt-4">{item.icon}</div>
                        <p className="text-white mt-4 ml-4">{item.text}</p>
                    </div>
                ))
            }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
