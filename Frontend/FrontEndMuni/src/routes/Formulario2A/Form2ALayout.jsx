import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../context/numero_context";
import { useState, useEffect, useRef } from "react";
import styles from "../../css/login.module.css";

const Form2ALayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // Contexto numero de año 
  const { formData, updateFormData } = useForm();
  // Validacion pasos
  const currentStep = location.pathname.split("/").pop();
  const isPaso1 = currentStep === "paso1";
  const isLastStep = currentStep === "paso6";
  const [error, setError] = useState("");
  const yearInputRef = useRef(null);

  // Efecto para poner color negro en los inputs de este layout + hijos vía Outlet
  useEffect(() => {
    // Cambiar color de texto de todos los inputs en la página
    const fixInputTextColor = () => {
      const allInputs = document.querySelectorAll('input:not([type="checkbox"]):not([type="radio"]), textarea, select');
      allInputs.forEach(input => {
        input.style.color = "#000";
      });
    };
    fixInputTextColor();
    // También cada vez que naveguemos a un nuevo paso
    return () => {};
  }, [currentStep]);

  // Manejo del input para el año en el header
  const handleYearInputChange = (e) => {
    let val = e.target.value.replace(/\D/g, "").slice(0, 2);
    if (
      val === "" ||
      (val.length === 2 && parseInt(val) >= 25)
    ) {
      updateFormData("yearNumber", val);
      setError("");
    } else if (val.length === 2) {
      setError("El año debe ser 25 o mayor");
    } else {
      updateFormData("yearNumber", val);
      setError("");
    }
  };

  const handleSiguiente = (e) => {
    const currentStepNumber = parseInt(currentStep.replace('paso',''));
    const nextStep = currentStepNumber + 1;
    if(nextStep <= 6){
      navigate(`/form2a/paso${nextStep}`)
    }
  };

  const handleAtras = (e) => {
    const currentStepNumber = parseInt(currentStep.replace('paso',''));
    const prevStep = currentStepNumber - 1;
    if(prevStep >= 1){
      navigate(`/form2a/paso${prevStep}`);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl w-full mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="relative border-b border-gray-200 py-4 px-8">
          {/* Logo */}
          <div className="flex justify-start mb-2">
            <div>
              <img
                src="../images/Picture1.png"
                alt="Logo"
                className="h-auto w-auto"
              />
            </div>
          </div>
          {/* Steps numbers */}
          <div className="absolute top-4 right-8 flex flex-col items-end space-y-2">
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => navigate(`/form2a/paso${num}`)}
                  className={`w-8 h-8 rounded-full focus:outline-none ${
                    currentStep === `paso${num}` ||
                    (currentStep === "" && num === 1)
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200"
                  } flex items-center justify-center text-sm font-medium transition-colors duration-200 hover:bg-blue-400 hover:text-white`}
                  aria-label={`Ir al paso ${num}`}
                >
                  {num}
                </button>
              ))}
            </div>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors text-lg font-bold">
              Guardar Borrador
            </button>
          </div>

          <h1 className="text-3xl font-bold text-blue-800">Anexo N°1</h1>
          <p className="mt-2 text-blue-800 text-lg font-bold ">FORMULARIO DE POSTULACIÓN F-2.A</p>
          <div className="mt-2">
            <span className="text-blue-800 text-lg font-bold">SUBVENCIONES MUNICIPALES AÑO 20</span>
            {isPaso1 ? (
              <div className="inline-block">
                <span
                  className="text-blue-800 text-lg font-bold"
                  style={{background: "transparent", display: "inline-block", textAlign: "center" }}
                >
                  {formData.yearNumber && formData.yearNumber.length === 2
                    ? formData.yearNumber
                    : new Date().getFullYear().toString().slice(-2)
                  }
                </span>
                {error && <span className="text-red-500 text-sm ml-2">{error}</span>}
              </div>
            ) : (
              <span className="text-blue-800 text-lg font-bold">
                {formData.yearNumber && formData.yearNumber.length === 2
                  ? formData.yearNumber
                  : new Date().getFullYear().toString().slice(-2)
                }
              </span>
            )}
          </div>
        </div>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          {/* 
            El color negro de texto en los inputs internos será corregido
            con el useEffect arriba y/o puedes poner en tus input:
            className="text-black" 
            (ver instrucciones para desarrolladores de pasos hijos) 
          */}
          <Outlet />
          <div className="grid grid-cols-3 gap-4 mt-10">
            {!isPaso1 && (
              <button
                onClick={handleAtras}
                className={`w-full relative py-2.5 px-5 rounded-lg font-medium group overflow-hidden border border-gray-300 ${styles.gradientBorderYellow}`}
                type="button"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <div className="absolute inset-0 bg-white rounded-lg group-hover:opacity-0 transition-opacity duration-300 z-20"></div>
                <span className="relative text-gray-900 group-hover:text-white transition-colors duration-300 z-30">
                  Atras
                </span>
              </button>
            )}
            {!isLastStep && (
              <button
                onClick={handleSiguiente}
                className={`w-full relative py-2.5 px-5 rounded-lg font-medium group overflow-hidden ${styles.gradientBorder}`}
                type="button"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <div className="absolute inset-0 bg-white rounded-lg group-hover:opacity-0 transition-opacity duration-300 z-20"></div>
                <span className="relative text-gray-900 group-hover:text-white transition-colors duration-300 z-30">
                  Siguiente
                </span>
              </button>
            )}
            {isLastStep && (
              <button
                onClick={() => {/* Handle form submission */}}
                className={`w-full relative py-2.5 px-5 rounded-lg font-medium group overflow-hidden ${styles.gradientBorderGreen}`}
                type="button"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <div className="absolute inset-0 bg-white rounded-lg group-hover:opacity-0 transition-opacity duration-300 z-20"></div>
                <span className="relative text-gray-900 group-hover:text-white transition-colors duration-300 z-30">
                  Enviar
                </span>
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form2ALayout;
