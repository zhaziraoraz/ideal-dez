const contents = [
  {
    id: 1,
    name: "Дезинфекция",
    text: "Уничтожение возбудителей заразных болезней в окружающей среде.",
  },
  {
    id: 2,
    name: "Дезинсекция",
    text: "Уничтожение клопов, тараканов, блох и других насекомых.",
  },
  {
    id: 3,
    name: "Дератизация",
    text: "Уничтожение крыс, мышей и прочих вредоносных грызунов.",
  },
  {
    id: 4,
    name: "Клининговые услуги",
    text: "Уборка в домах, квартирах, офисах. Химчистка мягкой мебели ковров.",
  },
  {
    id: 5,
    name: "Чистка вентиляции",
    text: "Профессиональная очистка вентиляции от любых типов отложений.",
  },
];
function OurServices() {
  return (
    <section className="our-service py-16">
      <div className="container mx-auto">
        <div className="flex flex-row">
          <div className="photo-section w-1/2 relative">
            <img src="/services/service_bg_first.svg" />
            <img
              src="/services/service_bg_second.svg"
              className="absolute top-[200px] left-[200px]"
            />
            <div className="flex absolute top-[200px] left-[200px] bg-white p-4 rounded-md w-1/4">
              <strong className="text-center text-blue">
                Мы имеем большой опыт
              </strong>
            </div>
          </div>
          <div className="text-section flex flex-col">
          <div className="flex flex-wrap justify-center items-center">
            <div className="w-1/3"><hr className="border-blue"></hr></div>
            <div className="w-1/3 px-16 text-center"><h1 className="text-blue text-2xl">Наши услуги</h1></div>
            <div className="w-1/3"><hr className="border-blue"></hr></div>
          </div>
            {contents.map((content) => (
              <div className="service-types" key={`${content.id}`}>
                <div className="flex flex-row mt-4">
                  <img src="/services/check.svg" />
                  <h2 className="mt-2 text-darkGray text-2xl m-4">
                    {content.name}
                  </h2>
                </div>
                <p className="text-lightGray w-4/5">{content.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurServices;
