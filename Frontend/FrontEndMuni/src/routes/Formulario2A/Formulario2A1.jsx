import { useNavigate } from "react-router-dom";
import styles from "../../css/login.module.css";
import { useState } from "react";

const Formulario2A1 = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [rows, setRows] = useState([
    { cargo: "", nombre: "", cedula: "", telefono: "" },
  ]);

  const addRow = () => {
    setRows([...rows, { cargo: "", nombre: "", cedula: "", telefono: "" }]);
  };

  const removeRow = (index) => {
    if (rows.length > 1) {
      setRows(rows.filter((_, i) => i !== index));
    }
  };

  const updateRow = (index, field, value) => {
    const newRows = [...rows];
    newRows[index][field] = value;
    setRows(newRows);
  };
  const options = ["De ahorro", "Corriente", "A la vista"];


  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
        I. IDENTIFICACIÓN DE LA INSTITUCIÓN:
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 h-10">
            1. Nombre de la Institución:
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 h-10">
            2. Número del Decreto o Resolución que otorga la Personalidad
            Jurídica:
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          2.1 Fecha del Decreto o Resolución que otorga la Personalidad
          Jurídica:
        </label>
        <input
          type="date"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            3. RUT
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            4. Domicilio
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            6. Telefono
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            7. Correo Electronico
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            8. Cuenta Institucion
          </label>
          <div className="space-y-2">
            <div className="max-w-sm">
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue="" >
                <option value="" disabled>
                  Banco o institucion
                </option>
                <option value="BE">Banco Estado</option>
                <option value="BC">Banco de chile</option>
                <option value="SA">Banco Santander</option>
                <option value="BCI">
                  Banco de Creditos e Inversiones (BCI)
                </option>
              </select>
            </div>
          </div>
        </div>

        {/* Single Selection Dropdown with Disabled Title */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            8.1 Tipo de cuenta
          </label>
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="w-full px-3 py-2 text-left border border-gray-300 rounded-md outline-none focus:outline-none focus:border-gray-300 hover:border-gray-300 flex items-center justify-between"
            >
              {" "}
              <span
                className={`${!selectedOption ? "text-black" : "text-black"}`}
              >
                {selectedOption || "Tipo de cuenta"}
              </span>
              <svg
                className={`w-4 h-4 text-gray-500 transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isOpen && (
              <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                {/* Disabled Title Option */}
                <div className="px-3 py-2 text-sm text-gray-400 border-b border-gray-200 bg-gray-50">
                  Tipo de cuenta
                </div>

                {/* Options List */}
                {options.map((option) => (
                  <div
                    key={option}
                    onClick={() => handleOptionSelect(option)}
                    className="flex items-center px-3 py-2 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                  >
                    <div
                      className={`w-4 h-4 border-2 rounded-full flex items-center justify-center mr-3 ${
                        selectedOption === option
                          ? "border-blue-600 bg-blue-600"
                          : "border-gray-300"
                      }`}
                    >
                      {selectedOption === option && (
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      )}
                    </div>
                    <span className="text-sm text-gray-700">{option}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          9. Objetivos estatutarios de la Organización postulante, que se
          relacionen con los objetivos del proyecto:
        </label>
        <textarea
          id="message"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        ></textarea>
      </div>
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">
          10. Miembros de la Directiva:
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">
                  Cargo
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">
                  Nombre completo
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">
                  Cédula de Identidad
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">
                  Teléfono
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700 w-20">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 p-0">
                    <input
                      type="text"
                      value={row.cargo}
                      onChange={(e) =>
                        updateRow(index, "cargo", e.target.value)
                      }
                      className="w-full px-3 py-2 border-0 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </td>
                  <td className="border border-gray-300 p-0">
                    <input
                      type="text"
                      value={row.nombre}
                      onChange={(e) =>
                        updateRow(index, "nombre", e.target.value)
                      }
                      className="w-full px-3 py-2 border-0 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </td>
                  <td className="border border-gray-300 p-0">
                    <input
                      type="text"
                      value={row.cedula}
                      onChange={(e) =>
                        updateRow(index, "cedula", e.target.value)
                      }
                      className="w-full px-3 py-2 border-0 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </td>
                  <td className="border border-gray-300 p-0">
                    <input
                      type="text"
                      value={row.telefono}
                      onChange={(e) =>
                        updateRow(index, "telefono", e.target.value)
                      }
                      className="w-full px-3 py-2 border-0 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </td>
                  <td className="border border-gray-300 p-2 text-center">
                    {rows.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeRow(index)}
                        className="text-white-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-red dark:hover:bg-red-600 dark:focus:ring-red-900"
                      >
                        Eliminar
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button
          type="button"
          onClick={addRow}
          className="text-black-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-black dark:hover:bg-green-600 dark:focus:ring-green-800"
        >
          Agregar Fila
        </button>
      </div>
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          11. Indicar N°, fecha e institución que emite certificado de vigencia:
        </label>
        <div className="grid grid-cols-3 flex-row gap-4">
          <input
            type="text"
            className="placeholder-gray-400 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Numero"
          />
          <input
            type="date"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            className=" placeholder-gray-400 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Institucion"
          />
        </div>
      </div>
    </div>
  );
};

export default Formulario2A1;
