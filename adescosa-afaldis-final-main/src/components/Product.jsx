import React from "react";

const Product = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Nos produits 
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 transform hover:scale-105">
          <img
            src="/images/product-1.jpg"
            alt="Product"
            className="w-full h-1/2 rounded-t-lg"
          />

          <div className="p-4">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Fût moins de 20L
            </h2>

            {/* Product Description */}
            <p className="text-gray-600 mb-4">
              Pour toute quantité en dessous de 20 litres
            </p>

            {/* Buy Button */}
            <div className="flex justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Acheter
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 transform hover:scale-105">
          <img
            src="/images/product-2.jpg"
            alt="Product"
            className="w-full h-1/2 rounded-t-lg"
          />

          <div className="p-4">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Fûts de 20L – 25L – 210 L
            </h2>

            {/* Product Description */}
            <p className="text-gray-600 mb-4">
              Pour toute quantité comprise entre 20 et 200 litres
            </p>

            {/* Buy Button */}
            <div className="flex justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Acheter
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 transform hover:scale-105">
          <img
            src="/images/product-3.jpg"
            alt="Product"
            className="w-full h-1/2 rounded-t-lg"
          />

          <div className="p-4">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Conteneur 1000L
            </h2>

            {/* Product Description */}
            <p className="text-gray-600 mb-4">Capacité de 1000 litres</p>

            {/* Buy Button */}
            <div className="flex justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Acheter
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 transform hover:scale-105">
          <img
            src="/images/product-4.png"
            alt="Product"
            className="w-full h-1/2 rounded-t-lg"
          />

          <div className="p-4">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Eau en Citerne
            </h2>

            {/* Product Description */}
            <p className="text-gray-600 mb-4">
              Service de livraison d'eau distillée en citernes
            </p>

            {/* Buy Button */}
            <div className="flex justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Acheter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
