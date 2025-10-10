import React, { useState } from 'react';

const Formulario2A5 = () => {
  // Initialize with three empty rows. Each row has its own state for data and errors.
  const [rows, setRows] = useState([
    { year: '', project: '', financing: '', amount: '', deliveryDate: '', submissionDate: '', website: '', errors: {} },
    { year: '', project: '', financing: '', amount: '', deliveryDate: '', submissionDate: '', website: '', errors: {} },
    { year: '', project: '', financing: '', amount: '', deliveryDate: '', submissionDate: '', website: '', errors: {} },
    { year: '', project: '', financing: '', amount: '', deliveryDate: '', submissionDate: '', website: '', errors: {} },
    { year: '', project: '', financing: '', amount: '', deliveryDate: '', submissionDate: '', website: '', errors: {} },
    { year: '', project: '', financing: '', amount: '', deliveryDate: '', submissionDate: '', website: '', errors: {} },
  ]);

  /**
   * Handles changes for the year input field.
   * @param {number} index - The index of the row being edited.
   * @param {string} value - The 2-digit year value from the input.
   */
  const handleYearChange = (index, value) => {
    const digits = value.replace(/[^0-9]/g, '').slice(0, 2);
    const updatedRows = rows.map((row, i) => {
      if (i === index) {
        // Clear year-dependent errors when year is changed.
        const newErrors = { ...row.errors };
        delete newErrors.year;
        delete newErrors.deliveryDate;
        delete newErrors.submissionDate;
        return { ...row, year: digits ? `20${digits}` : '', errors: newErrors };
      }
      return row;
    });
    setRows(updatedRows);
  };

  /**
   * Validates the year when the user moves focus away from the input.
   * @param {number} index - The index of the row to validate.
   */
  const handleYearBlur = (index) => {
    const row = rows[index];
    let error = null;

    if (row.year) { // Only validate if there is input
      const yearValue = parseInt(row.year, 10);
      const currentSystemYear = new Date().getFullYear();

      if (row.year.length !== 4) {
        error = 'Debe ingresar 2 dígitos.';
      } else if (yearValue > currentSystemYear) {
        error = `El año no puede ser futuro.`;
      } else if (yearValue < currentSystemYear - 2) {
        error = `Debe ser de los últimos 3 años.`;
      }
    }
    
    const updatedRows = rows.map((r, i) => (
      i === index ? { ...r, errors: { ...r.errors, year: error } } : r
    ));
    setRows(updatedRows);
  };
  
  /**
   * Validates date fields to ensure they match the selected year.
   * @param {number} index - The index of the row to validate.
   * @param {'deliveryDate' | 'submissionDate'} fieldName - The date field to validate.
   */
  const handleDateBlur = (index, fieldName) => {
    const row = rows[index];
    const dateValue = row[fieldName];
    const yearValue = row.year;
    let error = null;

    if (dateValue) { // Only validate if there is a date
      if (!yearValue || row.errors.year) {
        error = "Ingrese un año válido primero.";
      } else {
        const dateYear = new Date(dateValue).getUTCFullYear();
        if (dateYear.toString() !== yearValue) {
          error = `La fecha no corresponde al año ${yearValue}.`;
        }
      }
      // Additional validation: submission date cannot be before delivery date
      if (fieldName === 'submissionDate' && row.deliveryDate && !error) {
        const submission = new Date(row.submissionDate);
        const delivery = new Date(row.deliveryDate);
        if (submission < delivery) {
          error = "No puede ser anterior a la fecha de entrega.";
        }
      }
    }

    const updatedRows = rows.map((r, i) => (
      i === index ? { ...r, errors: { ...r.errors, [fieldName]: error } } : r
    ));
    setRows(updatedRows);
  };

  /**
   * Handles input changes for all fields and clears existing errors for that field.
   * @param {number} index - The index of the row being edited.
   * @param {string} field - The name of the field to update.
   * @param {string} value - The new value for the field.
   */
  const handleInputChange = (index, field, value) => {
    const updatedRows = rows.map((row, i) => {
      if (i === index) {
        const newErrors = { ...row.errors };
        delete newErrors[field]; // Clear error on new input
        return { ...row, [field]: value, errors: newErrors };
      }
      return row;
    });
    setRows(updatedRows);
  };

  return (
    <div className="w-full mx-auto p-6 bg-white">
      {/* Header */}
      <h2 className="text-blue-800 text-lg font-bold mb-2">
        V.- RESEÑA HISTÓRICA DE DESEMPEÑO EN OTROS PROGRAMAS O PROYECTOS
      </h2>
      <p className="text-blue-800 text-sm  mb-6">
        El presente ítem debe reflejar el comportamiento de la organización postulante en los últimos tres años, 
        respecto de otros proyectos.
      </p>

      {/* Table */}
      <div className="text-black overflow-x-auto border border-gray-300 rounded-lg">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="border border-gray-300 px-4 py-2 font-semibold text-center" rowSpan={2}>
                AÑO
              </th>
              <th className="border border-gray-300 px-4 py-2 font-semibold text-center" rowSpan={2}>
                NOMBRE PROYECTO O PROGRAMA
              </th>
              <th className="border border-gray-300 px-4 py-2 font-semibold text-center" rowSpan={2}>
                ORIGEN DEL FINANCIAMIENTO<br />
                <span className="text-xs font-normal">
                  (Subvención I.M.A. o aporte de una institución pública)
                </span>
              </th>
              <th className="border border-gray-300 px-4 py-2 font-semibold text-center" rowSpan={2}>
                MONTO DEL APORTE
              </th>
              <th className="border border-gray-300 px-4 py-2 font-semibold text-center" rowSpan={2}>
                FECHA DE ENTREGA DEL APORTE
              </th>
              <th className="border border-gray-300 px-4 py-2 font-semibold text-center" colSpan={2}>
                RENDICIONES
              </th>
            </tr>
            <tr>
              <th className="border border-gray-300 px-4 py-2 font-semibold text-center">
                Fecha de presentación de rendición
              </th>
              <th className="border border-gray-300 px-4 py-2 font-semibold text-center">
                Sitio web publicación rendición
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50">
                {/* Year */}
                <td className="border border-gray-300 p-1 align-top">
                  <div className={`flex items-center justify-center bg-white border border-transparent rounded focus-within:ring-2 ${row.errors.year ? 'ring-red-500' : 'focus-within:ring-blue-500'}`}>
                    <span className="text-gray-500 font-mono pl-2">20</span>
                    <input
                      type="text"
                      value={row.year.substring(2) || ''}
                      onChange={(e) => handleYearChange(index, e.target.value)}
                      onBlur={() => handleYearBlur(index)}
                      className="w-12 p-2 border-0 focus:outline-none text-left font-mono bg-transparent"
                      maxLength={2}
                      placeholder="YY"
                    />
                  </div>
                  {row.errors.year && (
                    <p className="text-xs text-red-500 mt-1 text-center">{row.errors.year}</p>
                  )}
                </td>
                
                {/* Project Name */}
                <td className="border border-gray-300 p-1">
                  <input
                    type="text"
                    value={row.project}
                    onChange={(e) => handleInputChange(index, 'project', e.target.value)}
                    className="w-full px-3 py-2 border-0 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                    placeholder="Nombre del proyecto..."
                  />
                </td>
                
                {/* Financing Source */}
                <td className="border border-gray-300 p-1">
                  <input
                    type="text"
                    value={row.financing}
                    onChange={(e) => handleInputChange(index, 'financing', e.target.value)}
                    className="w-full px-3 py-2 border-0 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                    placeholder="Fuente de financiamiento..."
                  />
                </td>
                
                {/* Amount */}
                <td className="border border-gray-300 p-1">
                  <input
                    type="text"
                    value={row.amount}
                    onChange={(e) => handleInputChange(index, 'amount', e.target.value)}
                    className="w-full px-3 py-2 border-0 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                    placeholder="Ej: 500000"
                  />
                </td>

                {/* Delivery Date */}
                <td className="border border-gray-300 p-1 align-top">
                   <div className={`bg-white border border-transparent rounded focus-within:ring-2 ${row.errors.deliveryDate ? 'ring-red-500' : 'focus-within:ring-blue-500'}`}>
                    <input
                      type="date"
                      value={row.deliveryDate}
                      onChange={(e) => handleInputChange(index, 'deliveryDate', e.target.value)}
                      onBlur={() => handleDateBlur(index, 'deliveryDate')}
                      className="w-full px-3 py-2 border-0 focus:outline-none bg-transparent"
                      min={row.year ? `${row.year}-01-01` : undefined}
                      max={row.year ? `${row.year}-12-31` : undefined}
                    />
                  </div>
                  {row.errors.deliveryDate && (
                    <p className="text-xs text-red-500 mt-1">{row.errors.deliveryDate}</p>
                  )}
                </td>
                
                {/* Submission Date */}
                <td className="border border-gray-300 p-1 align-top">
                  <div className={`bg-white border border-transparent rounded focus-within:ring-2 ${row.errors.submissionDate ? 'ring-red-500' : 'focus-within:ring-blue-500'}`}>
                    <input
                      type="date"
                      value={row.submissionDate}
                      onChange={(e) => handleInputChange(index, 'submissionDate', e.target.value)}
                      onBlur={() => handleDateBlur(index, 'submissionDate')}
                      className="w-full px-3 py-2 border-0 focus:outline-none bg-transparent"
                      min={row.year ? `${row.year}-01-01` : undefined}
                      max={row.year ? `${row.year}-12-31` : undefined}
                    />
                  </div>
                   {row.errors.submissionDate && (
                    <p className="text-xs text-red-500 mt-1">{row.errors.submissionDate}</p>
                  )}
                </td>
                
                {/* Website */}
                <td className="border border-gray-300 p-1">
                  <input
                    type="text"
                    value={row.website}
                    onChange={(e) => handleInputChange(index, 'website', e.target.value)}
                    className="w-full px-3 py-2 border-0 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                    placeholder="https://..."
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Instructions */}
      <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p className="text-sm text-yellow-800">
          <strong>Instrucciones:</strong> En la columna "AÑO", escriba los últimos dos dígitos de uno de los últimos tres años (ej: 25 para 2025). Las fechas deben corresponder al año ingresado.
        </p>
      </div>
    </div>
  );
}

export default Formulario2A5;

