import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../context/authContext';

const Registro = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [formData, setFormData] = useState({
    identificationType: "rut",
    rut: "",
    rutVerificador: "",
    passport: "",
    personType: "natural",
    primerNombre: "",
    segundoNombre: "",
    primerApellido: "",
    segundoApellido: "",
    razonSocial: "",
    email: "",
    contraseña: "",
    repetirContraseña: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    // Special handling for RUT field - only allow numbers and limit to 8 digits
    if (name === "rut") {
      // Remove any non-digit characters and limit to 8 digits
      const onlyNumbers = value.replace(/\D/g, '').slice(0, 8);
      setFormData(prev => ({
        ...prev,
        [name]: onlyNumbers
      }));
    }
    // Special handling for DV field - only allow 1 character (K, k, or 0-9)
    else if (name === "rutVerificador") {
      // Allow only K, k, or digits, and limit to 1 character
      const cleanValue = value.replace(/[^0-9Kk]/g, '').toUpperCase().slice(0, 1);
      setFormData(prev => ({
        ...prev,
        [name]: cleanValue
      }));
    }
    else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
    
    // Clear errors when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // RUT/Passport validation
    if (formData.identificationType === "rut") {
      if (!formData.rut.trim()) newErrors.rut = "RUT requerido";
      else if (formData.rut.length !== 8) newErrors.rut = "El RUT debe tener 8 dígitos";
      
      if (!formData.rutVerificador.trim()) newErrors.rutVerificador = "Dígito verificador requerido";
      else if (!/^[0-9K]$/i.test(formData.rutVerificador)) newErrors.rutVerificador = "DV debe ser un número o K";
    } else {
      if (!formData.passport.trim()) newErrors.passport = "Pasaporte requerido";
    }

    // Name validation for Persona Natural
    if (formData.personType === "natural") {
      if (!formData.primerNombre.trim()) newErrors.primerNombre = "Primer nombre requerido";
      if (!formData.primerApellido.trim()) newErrors.primerApellido = "Primer apellido requerido";
      if (!formData.segundoApellido.trim()) newErrors.segundoApellido = "Segundo apellido requerido";
    } else {
      if (!formData.razonSocial.trim()) newErrors.razonSocial = "Razón social requerida";
    }

    // Email validation
    if (!formData.email.trim()) newErrors.email = "Email requerido";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email inválido";

    // Password validation
    if (!formData.contraseña.trim()) newErrors.contraseña = "Contraseña requerida";
    else if (formData.contraseña.length < 6) newErrors.contraseña = "La contraseña debe tener al menos 6 caracteres";
    
    if (!formData.repetirContraseña.trim()) newErrors.repetirContraseña = "Confirmar contraseña requerida";
    else if (formData.contraseña !== formData.repetirContraseña) newErrors.repetirContraseña = "Las contraseñas no coinciden";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setLoading(true);
    setErrors({});
    setSuccessMessage("");

    try {
      // Combine RUT and DV for storage
      const registrationData = {
        ...formData,
        // Store the complete RUT for login purposes
        rutCompleto: formData.identificationType === "rut" ? 
          `${formData.rut}${formData.rutVerificador.toUpperCase()}` : null,
      };

      await register(registrationData);
      setSuccessMessage("¡Usuario registrado exitosamente! Redirigiendo al login...");
      
      setTimeout(() => {
        navigate('/');
      }, 2000);
      
    } catch (error) {
      setErrors({ general: error.message });
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
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
              onClick={handleCancel}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center transition-colors"
            >
              <span>Cancelar</span>
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
              Crear usuario
            </h2>
            <div className="w-24 h-1 bg-gray-300 mx-auto"></div>
          </div>

          {/* Success Message */}
          {successMessage && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
              {successMessage}
            </div>
          )}

          {/* Error Message */}
          {errors.general && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
              {errors.general}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* RUT/Passport Section */}
            <div className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="identificationType"
                    value="rut"
                    checked={formData.identificationType === "rut"}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <span className="ml-2 text-gray-700">RUT</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="identificationType"
                    value="passport"
                    checked={formData.identificationType === "passport"}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <span className="ml-2 text-gray-700">Pasaporte</span>
                </label>
              </div>

              {formData.identificationType === "rut" ? (
                <div className="grid grid-cols-4 gap-4">
                  <div className="col-span-3">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      RUT * (8 dígitos)
                    </label>
                    <input
                      type="text"
                      name="rut"
                      value={formData.rut}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.rut ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="20973028"
                      disabled={loading}
                      maxLength={8}
                    />
                    {errors.rut && <p className="text-red-500 text-xs mt-1">{errors.rut}</p>}
                    <p className="text-gray-500 text-xs mt-1">
                      Solo números, sin puntos ni guión
                    </p>
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      DV *
                    </label>
                    <input
                      type="text"
                      name="rutVerificador"
                      value={formData.rutVerificador}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.rutVerificador ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="K"
                      disabled={loading}
                      maxLength={1}
                    />
                    {errors.rutVerificador && <p className="text-red-500 text-xs mt-1">{errors.rutVerificador}</p>}
                    <p className="text-gray-500 text-xs mt-1">
                      0-9 o K
                    </p>
                  </div>
                </div>
              ) : (
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Pasaporte *
                  </label>
                  <input
                    type="text"
                    name="passport"
                    value={formData.passport}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.passport ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="EJ. AA00251253"
                    disabled={loading}
                  />
                  {errors.passport && <p className="text-red-500 text-xs mt-1">{errors.passport}</p>}
                </div>
              )}
            </div>

            {/* Person Type */}
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
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <span className="ml-2 text-gray-700">Persona Natural</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="personType"
                    value="juridica"
                    checked={formData.personType === "juridica"}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <span className="ml-2 text-gray-700">Persona Jurídica</span>
                </label>
              </div>
            </div>

            {/* Dynamic Fields based on Person Type */}
            {formData.personType === "natural" ? (
              /* Persona Natural Fields */
              <div className="space-y-6 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Primer Nombre *
                    </label>
                    <input
                      type="text"
                      name="primerNombre"
                      value={formData.primerNombre}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.primerNombre ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Primer nombre"
                      disabled={loading}
                    />
                    {errors.primerNombre && <p className="text-red-500 text-xs mt-1">{errors.primerNombre}</p>}
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Segundo Nombre
                    </label>
                    <input
                      type="text"
                      name="segundoNombre"
                      value={formData.segundoNombre}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Segundo nombre"
                      disabled={loading}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Primer Apellido *
                    </label>
                    <input
                      type="text"
                      name="primerApellido"
                      value={formData.primerApellido}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.primerApellido ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Primer apellido"
                      disabled={loading}
                    />
                    {errors.primerApellido && <p className="text-red-500 text-xs mt-1">{errors.primerApellido}</p>}
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Segundo Apellido *
                    </label>
                    <input
                      type="text"
                      name="segundoApellido"
                      value={formData.segundoApellido}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.segundoApellido ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Segundo apellido"
                      disabled={loading}
                    />
                    {errors.segundoApellido && <p className="text-red-500 text-xs mt-1">{errors.segundoApellido}</p>}
                  </div>
                </div>
              </div>
            ) : (
              /* Persona Jurídica Fields */
              <div className="mb-6">
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Razón Social *
                  </label>
                  <input
                    type="text"
                    name="razonSocial"
                    value={formData.razonSocial}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.razonSocial ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Razón social"
                    disabled={loading}
                  />
                  {errors.razonSocial && <p className="text-red-500 text-xs mt-1">{errors.razonSocial}</p>}
                </div>
              </div>
            )}

            {/* Email */}
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                E-Mail *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="ejemplo@email.com"
                disabled={loading}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            {/* Passwords */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Contraseña *
                </label>
                <input
                  type="password"
                  name="contraseña"
                  value={formData.contraseña}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.contraseña ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Contraseña"
                  disabled={loading}
                />
                {errors.contraseña && <p className="text-red-500 text-xs mt-1">{errors.contraseña}</p>}
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Repita Contraseña *
                </label>
                <input
                  type="password"
                  name="repetirContraseña"
                  value={formData.repetirContraseña}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.repetirContraseña ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Repita contraseña"
                  disabled={loading}
                />
                {errors.repetirContraseña && <p className="text-red-500 text-xs mt-1">{errors.repetirContraseña}</p>}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-center space-x-4">
              <button
                type="submit"
                disabled={loading || successMessage}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'REGISTRANDO...' : 'Guardar'}
              </button>
              <button
                type="button"
                onClick={handleCancel}
                disabled={loading}
                className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registro;