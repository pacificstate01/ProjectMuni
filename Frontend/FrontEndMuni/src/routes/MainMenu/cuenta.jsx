import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Cuenta = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    cambiarClave: false,
    nuevaClave: "",
    confirmarClave: ""
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form data:", formData);
    // Add your save logic here
  };

  const handleBack = () => {
    navigate(-1); // Go back to previous page
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      {/* Header */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden mb-6">
        <div className="bg-blue-700 text-white py-6 px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img
                src="./images/cnca-top.png"
                alt="Logo CNCA"
                className="h-8 w-auto mr-4"
              />
              <div>
                <h1 className="text-2xl font-bold">Consejo Nacional de la Cultura y las Artes</h1>
                <p className="text-blue-100 text-sm mt-1">SISTEMA AUTENTIFICACIÓN</p>
              </div>
            </div>
            <button
              onClick={handleBack}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center transition-colors"
            >
              <span>Volver</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="p-8">
          {/* Page Title */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Actualizar Mis Datos
            </h2>
            <div className="w-24 h-1 bg-gray-300 mx-auto"></div>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Tipo de Persona - Display only (from RUT identification) */}
            <div className="mb-8">
              <label className="block text-gray-700 text-sm font-bold mb-4">
                Tipo de Persona *
              </label>
              <div className="text-gray-700 bg-gray-50 p-3 rounded-md border border-gray-300">
                {/* This will be populated automatically based on RUT */}
                [Se determinará automáticamente por RUT]
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-300 my-6"></div>

            {/* Form Fields */}
            <div className="space-y-6">
              {/* Nombre */}
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Nombre *
                </label>
                <input
                  type="text"
                  name="nombre"
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Se cargará automáticamente"
                  // Remove value prop to keep it blank
                />
              </div>

              {/* Apellidos */}
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Apellidos *
                </label>
                <input
                  type="text"
                  name="apellidos"
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Se cargará automáticamente"
                  // Remove value prop to keep it blank
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  E-Mail *
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Se cargará desde el login"
                  // Remove value prop to keep it blank
                />
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-300 my-6"></div>

            {/* Cambiar Clave */}
            <div className="mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="cambiarClave"
                  checked={formData.cambiarClave}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="ml-2 text-gray-700 font-bold">Cambiar Clave</span>
              </label>
            </div>

            {/* Password Fields - Conditionally Rendered */}
            {formData.cambiarClave && (
              <div className="space-y-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Nueva Clave
                  </label>
                  <input
                    type="password"
                    name="nuevaClave"
                    value={formData.nuevaClave}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ingresa nueva clave"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Confirmar Clave
                  </label>
                  <input
                    type="password"
                    name="confirmarClave"
                    value={formData.confirmarClave}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Confirma tu nueva clave"
                  />
                </div>
              </div>
            )}

            {/* Divider */}
            <div className="border-t border-gray-300 my-6"></div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cuenta;