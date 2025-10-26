import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../context/authContext';

const Cuenta = () => {
  const navigate = useNavigate();
  const { user, updateUser } = useAuth(); // Add updateUser function
  const [formData, setFormData] = useState({
    personType: "natural",
    nombre: "",
    apellidos: "", 
    email: "",
    cambiarClave: false,
    claveActual: "",
    nuevaClave: "",
    confirmarClave: ""
  });
  const [successMessage, setSuccessMessage] = useState("");

  // Load user data when component mounts
  useEffect(() => {
    if (user) {
      setFormData(prev => ({
        ...prev,
        nombre: user.primerNombre || user.nombre || "",
        apellidos: user.apellidos || `${user.primerApellido || ""} ${user.segundoApellido || ""}`.trim(),
        email: user.email || "",
        personType: user.tipoPersona || "natural"
      }));
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated user data:", formData);
    
    // Update user in AuthContext and localStorage
    const updatedUser = {
      ...user,
      nombre: formData.nombre,
      apellidos: formData.apellidos,
      email: formData.email,
      tipoPersona: formData.personType,
      // Split names for registration compatibility
      primerNombre: formData.nombre.split(' ')[0],
      primerApellido: formData.apellidos.split(' ')[0],
      segundoApellido: formData.apellidos.split(' ').slice(1).join(' ') || formData.apellidos.split(' ')[1] || ""
    };
    
    // Update in AuthContext
    if (updateUser) {
      updateUser(updatedUser);
    }
    
    // Also update in localStorage directly
    localStorage.setItem('user', JSON.stringify(updatedUser));
    
    // Update registeredUsers in localStorage too
    const storedUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    const updatedUsers = storedUsers.map(storedUser => 
      storedUser.id === user.id ? { ...storedUser, ...updatedUser } : storedUser
    );
    localStorage.setItem('registeredUsers', JSON.stringify(updatedUsers));
    
    // Show success message
    setSuccessMessage("¡Datos actualizados correctamente!");
    
    // Redirect to menu after 1.5 seconds
    setTimeout(() => {
      navigate('/menu');
    }, 1500);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      {/* Header */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden mb-6">
        <div className="bg-blue-700 text-white py-6 px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img
                src="./images/cnca-footer.jpg"
                alt="Logo CNCA"
                className="h-32 mr-4"
              />
              <div>
                <h1 className="text-2xl font-bold">Consejo Nacional de la Cultura y las Artes</h1>
                <p className="text-blue-100 text-sm mt-1">
                  SISTEMA AUTENTIFICACIÓN {user && `| ${formData.nombre} ${formData.apellidos}`}
                </p>
              </div>
            </div>
            <button
              onClick={handleBack}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center transition-colors ml-4"
            >
              <span>Volver</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Actualizar Mis Datos
            </h2>
            <div className="w-24 h-1 bg-gray-300 mx-auto"></div>
          </div>

          {/* Success Message */}
          {successMessage && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6 text-center">
              {successMessage}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Tipo de Persona */}
            <div className="mb-8">
              <label className="block text-gray-700 text-sm font-bold mb-4">
                Tipo de Persona
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="personType"
                    value="natural"
                    checked={formData.personType === "natural"}
                    onChange={() => {}} // Disabled - no function
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 cursor-not-allowed"
                    disabled
                  />
                  <span className="ml-2 text-gray-700">
                    Persona Natural 
                    {formData.personType === "natural" && <span className="text-green-600 ml-2">✓</span>}
                  </span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="personType"
                    value="juridica"
                    checked={formData.personType === "juridica"}
                    onChange={() => {}} // Disabled - no function
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 cursor-not-allowed"
                    disabled
                  />
                  <span className="ml-2 text-gray-700">
                    Persona Jurídica
                    {formData.personType === "juridica" && <span className="text-green-600 ml-2">✓</span>}
                  </span>
                </label>
              </div>
            </div>

            <div className="border-t border-gray-300 my-6"></div>

            {/* Form Fields */}
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Nombre *
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Apellidos *
                </label>
                <input
                  type="text"
                  name="apellidos"
                  value={formData.apellidos}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  E-Mail *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div className="border-t border-gray-300 my-6"></div>

            {/* Cambiar Clave Checkbox */}
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
              <div className="mb-8">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Cambio de Clave
                  </h3>
                  <div className="w-16 h-1 bg-gray-300 mx-auto"></div>
                </div>

                <div className="space-y-4 bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Clave Actual *
                    </label>
                    <input
                      type="password"
                      name="claveActual"
                      value={formData.claveActual}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder=""
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Nueva Clave *
                    </label>
                    <input
                      type="password"
                      name="nuevaClave"
                      value={formData.nuevaClave}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder=""
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Confirmar Clave *
                    </label>
                    <input
                      type="password"
                      name="confirmarClave"
                      value={formData.confirmarClave}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder=""
                      required
                    />
                  </div>
                </div>
              </div>
            )}

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