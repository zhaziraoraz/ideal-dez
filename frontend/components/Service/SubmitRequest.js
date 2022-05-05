function SubmitRequest() {
  return (
    <div className="container mx-auto py-16">
      <div className="flex flex-wrap justify-center items-center mx-64">
        <div className="w-1/3">
          <hr className="border-blue"></hr>
        </div>
        <div className="w-1/3 px-8 mb-4">
          <h1 className="text-center text-blue text-2xl">
            Как оставить заявку?
          </h1>
        </div>
        <div className="w-1/3">
          <hr className="border-blue"></hr>
        </div>
      </div>
      <div className="flex flex-wrap mt-12">
        {[
          "Оставьте заявку на сайте или позвоните 8 (775) 680 67 89",
          "Назовите удобное для Вас время",
          "Приезд специалиста в точноe назначенное время",
        ].map((item, index) => (
          <div
            className="w-1/3 flex bg-[#F7F8F9] drop-shadow w-80 h-32 mx-12 justify-center items-center"
            key={`${index}`}
          >
            <div className="flex absolute bottom-24 bg-blue rounded-full border-8 border-white w-16 h-16 justify-center items-center">
              <p className="text-white">{index + 1}</p>
            </div>
            <p className="text-lightGray text-center">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SubmitRequest;
