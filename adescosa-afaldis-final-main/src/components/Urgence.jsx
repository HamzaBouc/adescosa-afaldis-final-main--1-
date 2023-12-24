import React from "react";
import { FaPhone } from "react-icons/fa";
import { TbDeviceLandlinePhone } from "react-icons/tb";

const Urgence = () => {
  return (
    <section className="relative">
      <div className="flex justify-center">
        <div className="text-center md:max-w-xl lg:max-w-3xl">
          <h2 className="px-6 text-3xl font-bold">Urgences</h2>
        </div>
      </div>
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameborder="0"
            title="map"
            marginheight="0"
            marginwidth="0"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4);" }}
          ></iframe>
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                Photo booth tattooed prism, portland taiyaki hoodie neutra
                typewriter
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-blue-500 leading-relaxed">example@email.com</a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">123-456-7890</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Nous disposons d'un service d'urgence de livraison d'eau déminéralisée
            dans une citerne
          </h2>

          <div className="relative mb-4">
            <div
              className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4"
              role="alert"
            >
              <p className="font-bold">Heures de Travail</p>
              <p>24 h / 24</p>
              <p className="text-l mt-2">
                7j/7, du Lundi au Dimanche , Nuits , Week-end et fériés{" "}
              </p>
            </div>
          </div>
          <button
            className="flex items-center justify-center text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg mb-3"
            onClick={() => (window.location.href = "tel:+212661384405")}
          >
            <FaPhone />
            <span className="ml-2">Appeler : +212 522 34 30 17</span>
          </button>

          <button
            className="flex items-center justify-center text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg mb-3"
            onClick={() => (window.location.href = "tel:+212522359925")}
          >
            <TbDeviceLandlinePhone />
            <span className="ml-2">Appeler : +212 522 35 99 25</span>
          </button>

          <p className="text-xs text-gray-500 mt-3">
            Vous serez servis dans le plus bref des délais.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Urgence;
