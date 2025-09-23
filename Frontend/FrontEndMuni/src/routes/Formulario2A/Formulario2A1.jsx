import { useNavigate, Outlet, useLocation } from "react-router-dom";
import styles from "../../css/login.module.css";
import { useState } from "react";

const Formulario2A1 = () => {
  const navigate = useNavigate();
  const location = useLocation();
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

  const handleSiguiente = (e) => {
    e.preventDefault();
    navigate("/form2a/paso2");
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  // Check if we're on the main form route or a nested route
  const isMainForm = location.pathname === "/form2a/paso1";
  const currentStep = location.pathname.split("/").pop();

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl w-full mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Header siempre mostrandose*/}
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

          {/*Numeros de pasos*/}
          <div className="absolute top-4 right-8 flex space-x-1">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div
                key={num}
                className={`w-8 h-8 rounded-full ${
                  currentStep === `paso${num}` ||
                  (currentStep === "" && num === 1)
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200"
                } flex items-center justify-center text-sm font-medium`}
              >
                {num}
              </div>
            ))}
          </div>
          <h1 className="text-3xl font-bold">Anexo N°1</h1>
          <p className="mt-2">FORMULARIO DE POSTULACIÓN F-2.A</p>
          <p className="mt-2">
            SUBVENCIONES MUNICIPALES AÑO 20
            <input
              type="text"
              className=" placeholder-gray-400 ml-1 w-12 border-none focus:outline-none bg-transparent font-bold underline"
              maxLength="2"
              placeholder="N°"
            />
          </p>
        </div>
        {/*Formulario principal*/}
        {isMainForm && (
          <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
              IDENTIFICACIÓN DE LA INSTITUCIÓN:
            </h2>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
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
                    2. Número del Decreto o Resolución que otorga la
                    Personalidad Jurídica:
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
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option selected disabled>
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
                        className={`${
                          !selectedOption ? "text-black" : "text-black"
                        }`}
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
                            <span className="text-sm text-gray-700">
                              {option}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label
                  for="message"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  9. Objetivos estatutarios de la Organización postulante, que
                  se relacionen con los objetivos del proyecto:
                </label>
                <textarea
                  id="message"
                  rows="4"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                                className="text-red-700 hover:text-red border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-red dark:hover:bg-red-600 dark:focus:ring-red-900"
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
                  className="text-green-700 hover:text-green border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-green dark:hover:bg-green-600 dark:focus:ring-green-800"
                >
                  Agregar Fila
                </button>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  11. Indicar N°, fecha e institución que emite certificado de
                  vigencia:
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
              <div className="grid grid-cols-3 gap-4 mt-10">
                <button
                  onClick={handleSiguiente}
                  className={`w-full relative py-2.5 px-5 rounded-lg font-medium group overflow-hidden ${styles.gradientBorder}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <div className="absolute inset-0 bg-white rounded-lg group-hover:opacity-0 transition-opacity duration-300 z-20"></div>
                  <span className="relative text-gray-900 group-hover:text-white transition-colors duration-300 z-30">
                    Siguiente
                  </span>
                </button>

                <button
                  //onClick={handleBorrador} GUARDAR BORRADOR AMARILLO
                  className={`"w-full relative py-2.5 px-5 rounded-lg font-medium group overflow-hidden border border-gray-300 ${styles.gradientBorderYellow}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <div className="absolute inset-0 bg-white rounded-lg group-hover:opacity-0 transition-opacity duration-300 z-20"></div>
                  <span className="relative text-gray-900 group-hover:text-white transition-colors duration-300 z-30">
                    Guardar Borrador
                  </span>
                </button>

                <button
                  //onClick={handleCancelar} CANCELAR ROJO
                  className={`w-full relative py-2.5 px-5 rounded-lg font-medium group overflow-hidden border border-gray-300" ${styles.gradientBorderRed}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <div className="absolute inset-0 bg-white rounded-lg group-hover:opacity-0 transition-opacity duration-300 z-20"></div>
                  <span className="relative text-gray-900 group-hover:text-white transition-colors duration-300 z-30">
                    Cancelar
                  </span>
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Show nested routes (Formulario2A1, etc.) */}
        <Outlet />
      </div>
    </div>
  );
};

export default Formulario2A1;
