function ContactModal({ setChoice, setModalOn }) {

  const handleSubmit = () => {
    setModalOn(true);
    setChoice(true);
  };

  const handleLater = () => {
    setModalOn(false);
    setChoice(false);
  };

  return (
    <div className="bg-zinc-500 opacity-95 fixed inset-0 z-50">
      <div className="flex h-screen justify-center items-center">
        <div className="flex-col justify-center bg-white py-12 px-24 border-2 border-blue">
          <div className="flex text-2xl font-bold mb-8">Оставить заявку</div>
          <input
            className="flex w-full border border-lightGray p-2 rounded-2xl"
            placeholder="Имя"
            type="text"
          />
          <input
            className="flex w-full border border-lightGray p-2 rounded-2xl mt-4"
            placeholder="Номер телефона"
            type="tel"
          />
          <div className="flex m-8 ">
          <button
              onClick={handleLater}
              className="rounded-md px-6 py-4 text-white bg-yellow mr-4"
            >
              Позжe
            </button>
            <button
              onClick={handleSubmit}
              className="rounded-md px-6 py-4 text-white bg-yellow"
            >
              Оставить заявку
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactModal;
