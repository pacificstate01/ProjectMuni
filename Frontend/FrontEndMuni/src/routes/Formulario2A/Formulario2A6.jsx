import React, { useState } from 'react';

const Formulario2A6 = () => {
  const [nonResidentInfo, setNonResidentInfo] = useState('');
  const [documents, setDocuments] = useState({
    doc1: false, doc2: false, doc3: false, doc4: false, doc5: false,
    doc6: false, doc7: false, doc8: false, doc9: false, doc10: false,
    doc11: false, doc12: false, doc13: false, doc14: false, doc15: false
  });
  const [submissionDate, setSubmissionDate] = useState({
    day: '',
    month: '',
    year: ''
  });
  const [legalRepresentative, setLegalRepresentative] = useState('');

  const handleDocumentChange = (docNumber) => {
    setDocuments(prev => ({
      ...prev,
      [`doc${docNumber}`]: !prev[`doc${docNumber}`]
    }));
  };

  const handleDateChange = (field, value) => {
    setSubmissionDate(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="w-full mx-auto p-6 bg-white space-y-8">
      {/* Section VI - Non-resident institutions */}
      <div className="border border-gray-300 rounded-lg p-6">
        <h2 className="text-lg font-bold mb-4">
          VI.- INSTITUCIONES QUE NO TENGAN DOMICILIO EN LA COMUNA
        </h2>
        <p className="text-sm text-gray-700 mb-4">
          Las organizaciones que no cuenten con sede en la comuna de Arica, deberán señalar a continuación 
          la forma en que los beneficios del proyecto favorecerán a los habitantes de la comuna de Arica 
          (si la organización cuenta con domicilio en la comuna de Arica, dejar en blanco el presente recuadro).
        </p>
        
        <textarea
          value={nonResidentInfo}
          onChange={(e) => setNonResidentInfo(e.target.value)}
          className="w-full h-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Describa cómo los beneficios del proyecto favorecerán a los habitantes de la comuna de Arica..."
        />
      </div>

      {/* Required Documents Table */}
      <div className="border border-gray-300 rounded-lg overflow-hidden">
        <h2 className="text-lg font-bold p-4 bg-gray-50 border-b border-gray-300">
          ANTECEDENTES OBLIGATORIOS QUE ADJUNTA:
        </h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="border border-gray-300 px-4 py-2 font-semibold text-center w-24">
                  DOCUMENTO QUE PRESENTA (MARCAR CON X)
                </th>
                <th className="border border-gray-300 px-4 py-2 font-semibold text-center">
                  CHECK LIST DE DOCUMENTO(S)
                </th>
                <th className="border border-gray-300 px-4 py-2 font-semibold text-center w-64">
                  OBSERVACIONES (USO EXCLUSIVO LIM A.)
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Document 1 */}
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-300 p-2 text-center">
                  <input
                    type="checkbox"
                    checked={documents.doc1}
                    onChange={() => handleDocumentChange(1)}
                    className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                  />
                </td>
                <td className="border border-gray-300 px-4 py-3">
                  1. Formulario F-2 B de Proyecto o Programa, que contenga objetivos, actividades que pretende, plan de desarrollo, personas beneficiadas, resultados esperados, recursos necesarios, desglose de gastos, financiamiento, etc.
                </td>
                <td className="border border-gray-300 p-2">
                  <input
                    type="text"
                    className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </td>
              </tr>

              {/* Document 2 */}
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-300 p-2 text-center">
                  <input
                    type="checkbox"
                    checked={documents.doc2}
                    onChange={() => handleDocumentChange(2)}
                    className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                  />
                </td>
                <td className="border border-gray-300 px-4 py-3">
                  2. Fotocopia del RUT de la organización postulante.
                </td>
                <td className="border border-gray-300 p-2">
                  <input
                    type="text"
                    className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </td>
              </tr>

              {/* Document 3 */}
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-300 p-2 text-center">
                  <input
                    type="checkbox"
                    checked={documents.doc3}
                    onChange={() => handleDocumentChange(3)}
                    className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                  />
                </td>
                <td className="border border-gray-300 px-4 py-3">
                  3. Fotocopia de la Cédula de Identidad del representante legal.
                </td>
                <td className="border border-gray-300 p-2">
                  <input
                    type="text"
                    className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </td>
              </tr>

              {/* Document 4 */}
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-300 p-2 text-center">
                  <input
                    type="checkbox"
                    checked={documents.doc4}
                    onChange={() => handleDocumentChange(4)}
                    className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                  />
                </td>
                <td className="border border-gray-300 px-4 py-3">
                  4. Documento que acredite domicilio de la organización postulante.
                </td>
                <td className="border border-gray-300 p-2">
                  <input
                    type="text"
                    className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </td>
              </tr>

              {/* Document 5 - Internal */}
              <tr className="hover:bg-gray-50 bg-blue-50">
                <td className="border border-gray-300 p-2 text-center">
                  <span className="text-xs text-gray-500 font-medium">Se solicitará internamente</span>
                </td>
                <td className="border border-gray-300 px-4 py-3">
                  5. Certificado que acredite que tanto la Personalidad Jurídica y el Directorio se encuentran vigentes, emitido por el Servicio de Registro Civil e Identificación, cuya fecha de emisión no sea anterior a 60 días a la fecha de presentación del mismo.
                </td>
                <td className="border border-gray-300 p-2">
                  <input
                    type="text"
                    className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </td>
              </tr>

              {/* Document 6 */}
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-300 p-2 text-center">
                  <input
                    type="checkbox"
                    checked={documents.doc6}
                    onChange={() => handleDocumentChange(6)}
                    className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                  />
                </td>
                <td className="border border-gray-300 px-4 py-3">
                  6. Certificado de inscripción en el Registro de Personas Jurídicas receptoras de fondos públicos, cuya fecha de emisión no sea anterior a 60 días a la fecha de presentación del mismo. (www.registros19662.cl).
                </td>
                <td className="border border-gray-300 p-2">
                  <input
                    type="text"
                    className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </td>
              </tr>

              {/* Document 7 */}
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-300 p-2 text-center">
                  <input
                    type="checkbox"
                    checked={documents.doc7}
                    onChange={() => handleDocumentChange(7)}
                    className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                  />
                </td>
                <td className="border border-gray-300 px-4 py-3">
                  7. Documento que acredite haber presentado rendiciones de cuenta o que ésta se encuentra aprobada, según sea el caso, respecto de aquellos proyectos financiados con aportes provenientes de subvención, presupuesto participativo, FONDEVE o cualquier otro aporte municipal.
                </td>
                <td className="border border-gray-300 p-2">
                  <input
                    type="text"
                    className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </td>
              </tr>

              {/* Document 8 */}
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-300 p-2 text-center">
                  <input
                    type="checkbox"
                    checked={documents.doc8}
                    onChange={() => handleDocumentChange(8)}
                    className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                  />
                </td>
                <td className="border border-gray-300 px-4 py-3">
                  8. Constancia de publicación en un sitio electrónico de la rendición de fondos públicos o municipales entregados por subvenciones u otros aportes.
                </td>
                <td className="border border-gray-300 p-2">
                  <input
                    type="text"
                    className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </td>
              </tr>

              {/* Document 9 */}
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-300 p-2 text-center">
                  <input
                    type="checkbox"
                    checked={documents.doc9}
                    onChange={() => handleDocumentChange(9)}
                    className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                  />
                </td>
                <td className="border border-gray-300 px-4 py-3">
                  9. Copia de instrumento bancario o financiero, ya sea libreta de ahorro, cuenta corriente o vista, a nombre de la organización postulante, que contenga el tipo y número de cuenta, y el nombre de la institución bancaria o financiera.
                </td>
                <td className="border border-gray-300 p-2">
                  <input
                    type="text"
                    className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </td>
              </tr>

              {/* Document 10 */}
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-300 p-2 text-center">
                  <input
                    type="checkbox"
                    checked={documents.doc10}
                    onChange={() => handleDocumentChange(10)}
                    className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                  />
                </td>
                <td className="border border-gray-300 px-4 py-3">
                  10. Copia de los Estatutos de la organización y sus modificaciones, si las hubiere (salvo organizaciones regidas por la Ley 19.418 y las entidades que hayan acompañado sus estatutos en postulaciones anteriores, y siempre que éstos se mantengan vigentes).
                </td>
                <td className="border border-gray-300 p-2">
                  <input
                    type="text"
                    className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </td>
              </tr>

              {/* Document 11 */}
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-300 p-2 text-center">
                  <input
                    type="checkbox"
                    checked={documents.doc11}
                    onChange={() => handleDocumentChange(11)}
                    className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                  />
                </td>
                <td className="border border-gray-300 px-4 py-3">
                  11. Tres (3) cotizaciones por ítem de gastos, en que se funde y justifique el cálculo del financiamiento solicitado. Si la solicitud consiste en financiar gasto en prestación de servicios, adjuntar currículum vitae debidamente firmado y certificado de título debidamente registrado y reconocido, si este ha sido obtenido en el extranjero, y si la solicitud consiste en financiar gasto en personal, adjuntar contrato de trabajo, liquidaciones de sueldo y documentos que respalden el pago de las leyes sociales.
                </td>
                <td className="border border-gray-300 p-2">
                  <input
                    type="text"
                    className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </td>
              </tr>

              {/* Document 12 */}
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-300 p-2 text-center">
                  <input
                    type="checkbox"
                    checked={documents.doc12}
                    onChange={() => handleDocumentChange(12)}
                    className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                  />
                </td>
                <td className="border border-gray-300 px-4 py-3">
                  12. Listado de los beneficiarios directos del proyecto (Ej.: Registro de Socios).
                </td>
                <td className="border border-gray-300 p-2">
                  <input
                    type="text"
                    className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </td>
              </tr>

              {/* Document 13 - Internal */}
              <tr className="hover:bg-gray-50 bg-blue-50">
                <td className="border border-gray-300 p-2 text-center">
                  <span className="text-xs text-gray-500 font-medium">Se adjuntará internamente, iniciando el proceso</span>
                </td>
                <td className="border border-gray-300 px-4 py-3">
                  13. Informes de la Comisión Técnica.
                </td>
                <td className="border border-gray-300 p-2">
                  <input
                    type="text"
                    className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </td>
              </tr>

              {/* Document 14 - Optional */}
              <tr className="hover:bg-gray-50 bg-green-50">
                <td className="border border-gray-300 p-2 text-center">
                  <input
                    type="checkbox"
                    checked={documents.doc14}
                    onChange={() => handleDocumentChange(14)}
                    className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                  />
                </td>
                <td className="border border-gray-300 px-4 py-3">
                  14. Memoria del proyecto o programa (opcional).
                </td>
                <td className="border border-gray-300 p-2">
                  <input
                    type="text"
                    className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </td>
              </tr>

              {/* Document 15 - Optional */}
              <tr className="hover:bg-gray-50 bg-green-50">
                <td className="border border-gray-300 p-2 text-center">
                  <input
                    type="checkbox"
                    checked={documents.doc15}
                    onChange={() => handleDocumentChange(15)}
                    className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                  />
                </td>
                <td className="border border-gray-300 px-4 py-3">
                  15. Antecedentes varios según estime la organización.
                </td>
                <td className="border border-gray-300 p-2">
                  <input
                    type="text"
                    className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Submission Section */}
      <div className="border border-gray-300 rounded-lg p-6">
        <p className="text-sm text-gray-700 mb-4">
          Todos estos antecedentes deben ser depositados en Oficina de Partes, mediante Oficio Conductor dirigido al Sr. Alcalde -
        </p>
        
        <div className="flex items-center justify-center space-x-2 mb-6">
          <span className="text-sm">ARICA,</span>
          <input
            type="text"
            value={submissionDate.day}
            onChange={(e) => handleDateChange('day', e.target.value)}
            className="w-16 px-2 py-1 border border-gray-300 rounded text-center"
            placeholder="día"
            maxLength={2}
          />
          <span className="text-sm">de</span>
          <input
            type="text"
            value={submissionDate.month}
            onChange={(e) => handleDateChange('month', e.target.value)}
            className="w-24 px-2 py-1 border border-gray-300 rounded text-center"
            placeholder="mes"
          />
          <span className="text-sm">de</span>
          <input
            type="text"
            value={submissionDate.year}
            onChange={(e) => handleDateChange('year', e.target.value)}
            className="w-20 px-2 py-1 border border-gray-300 rounded text-center"
            placeholder="año"
            maxLength={4}
          />
        </div>

        <div className="text-center border-t border-gray-300 pt-6">
          <input
            type="text"
            value={legalRepresentative}
            onChange={(e) => setLegalRepresentative(e.target.value)}
            className="w-96 px-3 py-2 border border-gray-300 rounded text-center mb-2"
            placeholder="Nombre, firma y timbre del Representante Legal"
          />
          <p className="text-xs text-gray-500">Nombre, firma y timbre del Representante Legal</p>
        </div>
      </div>
    </div>
  );
}
export default Formulario2A6;