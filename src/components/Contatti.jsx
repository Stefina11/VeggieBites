function Contatti() {
    return (
      <div className="flex flex-col items-center justify-center text-center mx-auto m-4 md:m-60 mt-32 sm:mt-16">
        <h1 className="text-custom font-bold font-nunito text-4xl mb-4">
          Contacts
        </h1>
  
        <p className="text-lg mb-1 mt-4">
        Fill out the form with your information request,
        you will be contacted as soon as possible.
        </p>
  
        <form className="w-full max-w-md mx-auto m-4 md:m-60 mt-8 sm:mt-16 px-4">
          <div className="mb-4">
            <label
              htmlFor="nome"
              className="block text-lg font-medium text-custom font-nunito"
            >
              Name
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              className="mt-1 p-2 border rounded w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="cognome"
              className="block text-lg font-medium text-custom font-nunito"
            >
              Surname
            </label>
            <input
              type="text"
              id="cognome"
              name="cognome"
              className="mt-1 p-2 border rounded w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-lg font-medium text-custom font-nunito"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 border rounded w-full"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="messaggio"
              className="block text-lg font-medium text-custom font-nunito"
            >
              Message
            </label>
            <textarea
              id="messaggio"
              name="messaggio"
              rows="4"
              className="mt-1 p-2 border rounded w-full"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-customGold text-custom font-semibold py-2 px-4 rounded hover:bg-yellow-600 font-nunito"
          >
            Send
          </button>
        </form>
  
        <p className="text-lg mb-8 mt-8">
        Or, you can email us at: <br /> <br />
          <span className="text-customGold font-semibold text-2xl">
            info@VeggieBites.it
          </span>
        </p>
      </div>
    );
  }
  
  export default Contatti;
  
  