import { useNavigate } from "react-router-dom";
import styles from "../../css/login.module.css";
import { useState } from "react";
import { useForm } from "../../context/numero_context";

const Formulario2A3 = () => {
  const [selectedItem, setSelectedItem] = useState("");

  const tableData = [
    [
      "Educación y Cultura",
      "Salud pública y protección del medio ambiente",
      "Asistencia social, que no refiera a ayuda social.",
      "Capacitación, promoción del empleo y el fomento productivo",
    ],
    [
      "Turismo, deporte y recreación",
      "Gestión de riesgos de desastres en la comuna de Arica.",
      "Urbanización y vialidad urbana y rural (estudios de suelo, diseño de ingeniería, entre otros.)",
      "Construcción de Viviendas sociales e infraestructura sanitarias",
    ],
    [
      "Transporte y tránsito público (que no implique intervención en Bien Nacional de Uso Público).",
      "Promoción derechos de los niños, niñas y adolescentes.",
      "Medidas de prevención social y situacional o en materia de seguridad pública a nivel comunal.",
      "Promoción de la igualdad entre hombres y mujeres.",
    ],
    ["El desarrollo de actividades de interés común en el ámbito local."],
  ];

  const handleSelectItem = (item) => {
    setSelectedItem(item === selectedItem ? "" : item);
  };

  const isSelected = (item) => item === selectedItem;

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
        III.- AREA DE DESTINO DE SUBVENCIÓN: (Art. 4° Ley N°18.695, sobre
        funciones de las municipalidades)
      </h2>

      {/* Single Selection Table */}
      <div className="overflow-hidden border border-gray-300 rounded-lg">
        <table className="w-full">
          <tbody>
            {tableData.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="border-b border-gray-300 last:border-b-0"
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={`p-4 border-r border-gray-300 last:border-r-0 cursor-pointer hover:bg-blue-50 transition-colors ${
                      isSelected(cell)
                        ? "bg-blue-100 border-blue-300"
                        : "bg-white"
                    }`}
                    onClick={() => handleSelectItem(cell)}
                  >
                    <div className="flex items-start space-x-3">
                      {/* Radio Button */}
                      <div
                        className={`flex-shrink-0 w-5 h-5 mt-1 rounded-full border-2 flex items-center justify-center ${
                          isSelected(cell)
                            ? "bg-blue-500 border-blue-500"
                            : "border-gray-400"
                        }`}
                      >
                        {isSelected(cell) && (
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        )}
                      </div>

                      {/* Cell Text */}
                      <span
                        className={`text-sm leading-relaxed ${
                          isSelected(cell)
                            ? "text-blue-800 font-medium"
                            : "text-gray-700"
                        }`}
                      >
                        {cell}
                      </span>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Selected Item Display */}
      {selectedItem && (
        <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
          <h3 className="text-lg font-semibold text-green-800 mb-2">
            Área seleccionada:
          </h3>
          <p className="text-green-700 font-medium">{selectedItem}</p>
        </div>
      )}

      {/* Instructions */}
      <div className="mt-6 text-center text-gray-600 text-sm">
        <p>
          💡 Haga clic en una celda para seleccionarla (solo se puede
          seleccionar una)
        </p>
      </div>
      <div className="p-4">
        <label
          for="message"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          INDICAR LA FORMA EN QUE LA INSTITUCIÓN COLABORA DIRECTAMENTE EN EL CUMPLIMIENTO DE LAS FUNCIONES MUNICIPALES:
        </label>
        <textarea
          id="message"
          rows="4"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="..."
      ></textarea>
      </div>
    </div>
  );
};

export default Formulario2A3;
