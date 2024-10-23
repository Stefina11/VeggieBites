function Contatti() {
    return (
      <div className="flex flex-col items-center justify-center text-center mx-auto m-4 md:m-60 mt-32 sm:mt-16">
        <h1 className="text-custom font-bold font-nunito text-4xl mb-4">
          Contatti
        </h1>
  
        <p className="text-lg mb-8 mt-8">
          Compila il form con la tua richiesta di informazioni, <br />
          verrai contattato nel minor tempo possibile.
        </p>
  
        <form className="w-full max-w-md mx-auto  m-4 md:m-60 mt-32 sm:mt-16 px-4">
          <div className="mb-4">
            <label
              htmlFor="nome"
              className="block text-lg font-medium text-custom font-nunito"
            >
              Nome
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              className="mt-1 p-2 border rounded w-full sm:w-full md:w-3/4" 
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="cognome"
              className="block text-lg font-medium text-custom font-nunito"
            >
              Cognome
            </label>
            <input
              type="text"
              id="cognome"
              name="cognome"
              className="mt-1 p-2 border rounded w-full sm:w-full md:w-3/4" 
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
              className="mt-1 p-2 border rounded w-full sm:w-full md:w-3/4" 
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="messaggio"
              className="block text-lg font-medium text-custom font-nunito"
            >
              Messaggio
            </label>
            <textarea
              id="messaggio"
              name="messaggio"
              rows="4"
              className="mt-1 p-2 border rounded w-full sm:w-full md:w-3/4" 
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-customGold text-custom font-semibold py-2 px-4 rounded hover:bg-yellow-600 font-nunito"
          >
            Invia
          </button>
        </form>
  
        <p className="text-lg mb-8 mt-8">
          In alternativa puoi scrivere al seguente indirizzo email: <br /> <br />
          <span className="text-customGold font-semibold text-2xl">
            info@VeggieBites.it
          </span>
        </p>
      </div>
    );
  }
  
  export default Contatti;
  