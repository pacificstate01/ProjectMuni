import React, { useState } from "react";

const Formulario2A4 = () => {
  const [formData, setFormData] = useState({
    montoTotal: "",
    numeroCuotas: "",
    plazoMaximo: "",
    programaCaja: {
      enero: "",
      febrero: "",
      marzo: "",
      abril: "",
      mayo: "",
      junio: "",
      julio: "",
      agosto: "",
      septiembre: "",
      octubre: "",
      noviembre: "",
    },
  });

  // State for the validation error message on "Número de cuotas"
  const [numeroCuotasError, setNumeroCuotasError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Allow only numbers or an empty string
    if (value === "" || /^\d*$/.test(value)) {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleNumeroCuotasChange = (e) => {
    const { value } = e.target;

    // We only want to allow typing numbers and not more than 1 character
    if ((value === "" || /^\d*$/.test(value)) && value.length <= 1) {
        setFormData((prev) => ({
            ...prev,
            numeroCuotas: value,
        }));

        // After updating the value, we perform validation
        if (value === "") {
            // If the field is empty, there's no error
            setNumeroCuotasError("");
        } else {
            const numValue = parseInt(value, 10);
            if (numValue < 1 || numValue > 6) {
                // If the number is out of the 1-6 range, show an error
                setNumeroCuotasError("Por favor ingrese un número entre 1 y 6.");
            } else {
                // If the number is valid, clear the error
                setNumeroCuotasError("");
            }
        }
    }
    // If the user tries to type a non-numeric character, the input simply won't change.
  };

  const handleProgramaCajaChange = (e) => {
    const { name, value } = e.target;
    if (value === "" || /^\d*$/.test(value)) {
      setFormData((prev) => ({
        ...prev,
        programaCaja: {
          ...prev.programaCaja,
          [name]: value,
        },
      }));
    }
  };

  const handlePlazoMaximoChange = (plazo) => {
    setFormData((prev) => ({
      ...prev,
      plazoMaximo: plazo,
    }));
  };

  const calculateTotal = () => {
    const values = Object.values(formData.programaCaja);
    return values.reduce((total, value) => total + (parseFloat(value) || 0), 0);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md font-sans">
      <h2 className="text-blue-800 text-xl font-bold mb-6 text-center border-b pb-2">
        IV.- DETALLE MONTO Y CUOTA DE LA SUBVENCIÓN:
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Monto Total */}
          <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-gray-700">
                1. Monto Total solicitado:
              </span>
            </div>
            <input
              type="text"
              inputMode="numeric"
              name="montoTotal"
              value={formData.montoTotal}
              onChange={handleInputChange}
              className="w-full h-8 px-2 border border-gray-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ingrese monto total"
            />
          </div>

          {/* Número de cuotas */}
          <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-gray-700">
                2. Número de cuotas (Máx. 6):
              </span>
            </div>
            <input
              type="text"
              inputMode="numeric"
              name="numeroCuotas"
              value={formData.numeroCuotas}
              onChange={handleNumeroCuotasChange}
              className="w-full h-8 px-2 border border-gray-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="1-6"
            />
            {/* Display validation error message */}
            {numeroCuotasError && (
              <p className="text-red-500 text-xs mt-1">{numeroCuotasError}</p>
            )}
          </div>


          {/* Plazo máximo */}
          <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
            <div className="mb-2">
              <span className="font-medium text-gray-700">
                4. Plazo máximo de rendición: (marque 1 opción)
              </span>
            </div>
            <div className="space-y-2 mt-3">
              {[
                "10 días hábiles antes de la siguiente cuota.",
                "20 días hábiles a partir del término de la ejecución del programa o proyecto (N°7 del Formulario F-2.B).",
              ].map((plazo) => (
                <label key={plazo} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="plazoMaximo"
                    value={plazo}
                    checked={formData.plazoMaximo === plazo}
                    onChange={() => handlePlazoMaximoChange(plazo)}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-gray-600">{plazo}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Programa de Caja */}
        <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
          <h3 className="font-bold mb-4 text-center text-gray-700">
            3. Programa de Caja:
          </h3>
          <div className="space-y-3">
            {Object.entries(formData.programaCaja).map(([month, value]) => (
              <div
                key={month}
                className="flex justify-between items-center border-b border-gray-200 pb-2"
              >
                <span className="font-medium text-gray-700 capitalize">
                  {month}
                </span>
                <input
                  type="text"
                  inputMode="numeric"
                  name={month}
                  value={value}
                  onChange={handleProgramaCajaChange}
                  className="w-32 h-6 px-2 border border-gray-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  placeholder="$"
                />
              </div>
            ))}
            <div className="flex justify-between items-center border-t border-gray-400 pt-2 font-bold mt-2">
              <span className="text-gray-700">Total anual</span>
              <div className="w-32 h-6 px-2 border border-gray-300 rounded bg-gray-200 flex items-center justify-end text-sm font-normal">
                ${calculateTotal().toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Notes Section */}
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p className="text-sm font-semibold mb-2 text-gray-700">NOTAS:</p>
        <ul className="text-sm space-y-1 text-gray-600 list-disc list-inside">
          <li>
            Si se solicita cuotas definir su distribución según cuadro N°3,
            Programa de Caja.
          </li>
          <li>
            Respecto de subvenciones extraordinarias, la primera cuota no podrá
            fijarse en el mes de enero.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Formulario2A4;

