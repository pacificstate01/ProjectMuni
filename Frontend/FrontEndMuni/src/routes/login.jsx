import styles from '../css/login.module.css';
import { useState, useEffect, useRef } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [userrut,setUserrut] = useState('')
  const [password,setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const navigate = useNavigate();
  
  const handleLogin = (e) => {
    e.preventDefault();
    if(!userrut.trim()){
      setErrors({userrut: "RUT requerido"})
      return;
    }
    if(!password.trim()){
      setErrors({ password: "Contraseña requerida" });
      return;
    }
    setErrors({});
    navigate('/menu');
  };


    return (
      <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl w-full mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-blue-700 text-white py-6 px-8 text-center">
            <div className="flex justify-start mb-6">
              <img
                src="./images/cnca-top.png"
                alt="Logo"
                className="h-6 w-auto"
              />
            </div>
            <h1 className="text-3xl font-bold">Sistema Cuenta Cultura</h1>
            <p className="mt-2">
              Ministerio de las Culturas, las Artes y el Patrimonio
            </p>
          </div>

          <div className="md:flex">
            {/* Left Panel - Login Form */}
            <div className="md:w-1/2 p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Bienvenido(a) al Sistema Cuenta de Cultura
              </h2>
              <p className="text-gray-600 mb-6">
                Ingresa con tus datos, si aún no tienes cuenta{" "}
                <a
                  href="#"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  regístrate aquí
                </a>
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  INGRESA TUS DATOS PARA INICIAR SESIÓN
                </h3>

                <div className="flex justify-center mb-6">
                  <div
                    className="inline-flex rounded-md shadow-sm"
                    role="group"
                  >
                    <button
                      type="button"
                      className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 transition-colors"
                    >
                      RUT
                    </button>
                  </div>
                </div>

                <form>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="username"
                    >
                      RUT <span className="text-red-500">*</span>
                    </label>
                    <input
                      onChange = {(e) => setUserrut(e.target.value)}
                      value= {userrut}
                      className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500 transition-colors"
                      id="username"
                      type="text"
                      placeholder="Ingresa tu RUT"
                    />
                    {errors.userrut && <p className="text-red-500">RUT requerido</p>}
                  </div>
                  <div className="mb-6">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="password"
                    >
                      Contraseña <span className="text-red-500">*</span>
                    </label>
                    <input
                      onChange = {(e) => setPassword(e.target.value)}
                      value = {password}
                      className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500 transition-colors"
                      id="password"
                      type="password"
                      placeholder="Ingresa tu contraseña"
                    />
                    {errors.password && <p className="text-red-500">Contraseña requerida</p>}
                  </div>
                  <button
                    type="button"
                    onClick = {handleLogin}
                    className={`w-full relative py-2.5 px-5 rounded-lg font-medium group overflow-hidden ${styles.gradientBorder}`}
                  >
                    {/* Gradient fill (hidden initially) */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

                    {/* White background (visible initially) */}
                    <div className="absolute inset-0 bg-white rounded-lg group-hover:opacity-0 transition-opacity duration-300 z-20"></div>

                    {/* Text */}
                    <span className="relative text-gray-900 group-hover:text-white transition-colors duration-300 z-30">
                      INGRESAR
                    </span>
                  </button>
                </form>
              </div>

              <div className="text-center mb-8">
                <p className="text-gray-600 mb-4">
                  Puedes Ingresar utilizando tu Clave Única
                </p>
                <button
                  className={`py-3 px-6 rounded-full inline-flex items-center transition-colors transform hover:-translate-y-0.5 ${styles.claveUnicaButton}`}
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                    />
                  </svg>
                  <span className="relative text-gray-900 group-hover:text-white transition-colors duration-300 z-30">
                    Iniciar sesión con Clave Única
                  </span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg text-center transition-colors hover:bg-gray-100">
                  <p className="text-gray-700 mb-2">
                    Si aún no has creado tu cuenta cultura
                  </p>
                  <a
                    href="#"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    Ingresa aquí »
                  </a>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center transition-colors hover:bg-gray-100">
                  <p className="text-gray-700 mb-2">
                    Si desea recuperar su contraseña
                  </p>
                  <a
                    href="#"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    Ingresa aquí »
                  </a>
                </div>
              </div>
            </div>

            {/* Right Panel - Information */}
            <div className="md:w-1/2 bg-gradient-to-b from-blue-100 to-blue-200 p-8">
              <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:-translate-y-1">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <svg
                    className="w-6 h-6 mr-2 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Postulaciones Fondos Cultura 2025
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
                  <li>Paso 1: Marca RUT según corresponda.</li>
                  <li>Paso 2: Ingresa Rut y contraseña.</li>
                  <li>Paso 3: Completa o actualiza tu perfil.</li>
                  <li>
                    Paso 4: Ingresa a Concursos Disponibles y elige el concurso
                    al que deseas postular.
                  </li>
                </ul>

                <div className="space-y-3">
                  <a
                    href="#"
                    className="flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    Descarga Manual de Perfil
                  </a>
                  <a
                    href="#"
                    className="flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    Descarga Manual de Plataforma
                  </a>
                </div>
              </div>

              <div className="mt-8 bg-white p-6 rounded-lg shadow-md transition-transform hover:-translate-y-1">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <svg
                    className="w-6 h-6 mr-2 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  Información de Contacto
                </h3>
                <div className="text-gray-700 space-y-2">
                  <p>
                    <strong>
                      Ministerio de las Culturas, las Artes y el Patrimonio
                    </strong>
                  </p>
                  <p>
                    <strong>Gobierno de Chile</strong>
                  </p>
                  <p>
                    Dirección Valparaíso: Plaza Sotomayor 233. Teléfono: (32)
                    232 6400.
                  </p>
                  <p>
                    Dirección Santiago: Paseo Ahumada 48, Pisos 4, 5, 6, 7, 8 y
                    11, Santiago. Teléfono: (2) 2618 9000 / 9001
                  </p>
                  <p>
                    Contáctanos:{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      Formulario de atención ciudadana
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-blue-600 hover:underline">
                      Política de Privacidad
                    </a>
                  </p>
                  <p className="text-sm mt-4">v2.3.1.4</p>
                </div>
              </div>
              <div className="bg-blue-700 p-4 mt-4 rounded-lg text-center">
                <div className="flex justify-center div2">
                  <img
                    src="./images/Untitled.png"
                    alt="Contacto"
                    className="h-12 w-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Login;