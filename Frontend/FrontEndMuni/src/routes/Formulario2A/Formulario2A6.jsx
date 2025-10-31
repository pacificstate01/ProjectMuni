import React, { useState } from 'react';

const Formulario2A6 = () => {
  const [nonResidentInfo, setNonResidentInfo] = useState('');
  const [documents, setDocuments] = useState({
    doc1: null, doc2: null, doc3: null,
    doc4: null, doc5: null, doc6: null, doc7: null, doc8: null,
    doc9: null, doc10: null, doc11: null, doc12: null, doc13: null, doc14: null
  });
  const [submissionDate, setSubmissionDate] = useState({
    day: '',
    month: '',
    year: ''
  });
  const [legalRepresentative, setLegalRepresentative] = useState('');

  const handleFileChange = (docNumber, file) => {
    setDocuments(prev => ({
      ...prev,
      [`doc${docNumber}`]: file
    }));
  };

  const handleDateChange = (field, value) => {
    setSubmissionDate(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const FileUploadWithLabel = ({ docNumber, label, isOptional = false }) => {
    const hasFile = documents[`doc${docNumber}`];
    
    return (
      <tr className="hover:bg-gray-50">
        <td className="border border-gray-300 p-4">
          <div className="space-y-2 relative">
            <label className="block">
              <input
                className="block w-full text-sm text-gray-500
                          file:mr-4 file:py-2 file:px-4
                          file:rounded-full file:border-0
                          file:text-sm file:font-semibold
                          file:bg-blue-50 file:text-blue-700
                          hover:file:bg-blue-100
                          cursor-pointer"
                type="file"
                onChange={(e) => handleFileChange(docNumber, e.target.files[0])}
              />
            </label>
            {hasFile && (
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}
            {hasFile && (
              <p className="text-xs text-green-600 font-medium truncate">
                {documents[`doc${docNumber}`].name}
              </p>
            )}
            {isOptional && (
              <p className="text-xs text-gray-500 italic">
                Opcional
              </p>
            )}
          </div>
        </td>
        <td className="border border-gray-300 px-4 py-3">
          {label}
          {isOptional && (
            <span className="text-xs text-gray-500 italic ml-2">(Opcional)</span>
          )}
        </td>
        <td className="border border-gray-300 p-2">
          <input
            type="text"
            className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </td>
      </tr>
    );
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
      <div className="text-black border border-gray-300 rounded-lg overflow-hidden">
        <h2 className="text-blue-800 text-lg font-bold p-4 bg-gray-50 border-b border-gray-300">
          ANTECEDENTES OBLIGATORIOS QUE ADJUNTA:
        </h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="border border-gray-300 px-4 py-2 font-semibold text-center">
                  DOCUMENTO QUE PRESENTA
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
              {/* Document 1*/}
              <FileUploadWithLabel
                docNumber={1}
                label="1. Fotocopia del RUT de la organización postulante."
              />

              {/* Document 2 */}
              <FileUploadWithLabel
                docNumber={2}
                label="2. Fotocopia de la Cédula de Identidad del representante legal."
              />

              {/* Document 3 */}
              <FileUploadWithLabel
                docNumber={3}
                label="3. Documento que acredite domicilio de la organización postulante."
              />

              {/* Document 14*/}
              <FileUploadWithLabel
                docNumber={14}
                label="4. Certificado que acredite que tanto la Personalidad Jurídica y el Directorio se encuentran vigentes, emitido por el Servicio de Registro Civil e Identificación, cuya fecha de emisión no sea anterior a 60 días a la fecha de presentación del mismo."
              />

              {/* Document 4*/}
              <FileUploadWithLabel
                docNumber={4}
                label="5. Certificado de inscripción en el Registro de Personas Jurídicas receptoras de fondos públicos, cuya fecha de emisión no sea anterior a 60 días a la fecha de presentación del mismo. (www.registros19662.cl)."
              />

              {/* Document 5 */}
              <FileUploadWithLabel
                docNumber={5}
                label="6. Documento que acredite haber presentado rendiciones de cuenta o que ésta se encuentra aprobada, según sea el caso, respecto de aquellos proyectos financiados con aportes provenientes de subvención, presupuesto participativo, FONDEVE o cualquier otro aporte municipal."
              />

              {/* Document 6 */}
              <FileUploadWithLabel
                docNumber={6}
                label="7. Constancia de publicación en un sitio electrónico de la rendición de fondos públicos o municipales entregados por subvenciones u otros aportes."
              />

              {/* Document 7 */}
              <FileUploadWithLabel
                docNumber={7}
                label="8. Copia de instrumento bancario o financiero, ya sea libreta de ahorro, cuenta corriente o vista, a nombre de la organización postulante, que contenga el tipo y número de cuenta, y el nombre de la institución bancaria o financiera."
              />

              {/* Document 8 */}
              <FileUploadWithLabel
                docNumber={8}
                label="9. Copia de los Estatutos de la organización y sus modificaciones, si las hubiere (salvo organizaciones regidas por la Ley 19.418 y las entidades que hayan acompañado sus estatutos en postulaciones anteriores, y siempre que éstos se mantengan vigentes)."
              />

              {/* Document 9 */}
              <FileUploadWithLabel
                docNumber={9}
                label="10. Tres (3) cotizaciones por ítem de gastos, en que se funde y justifique el cálculo del financiamiento solicitado. Si la solicitud consiste en financiar gasto en prestación de servicios, adjuntar currículum vitae debidamente firmado y certificado de título debidamente registrado y reconocido, si este ha sido obtenido en el extranjero, y si la solicitud consiste en financiar gasto en personal, adjuntar contrato de trabajo, liquidaciones de sueldo y documentos que respalden el pago de las leyes sociales."
              />

              {/* Document 10 */}
              <FileUploadWithLabel
                docNumber={10}
                label="11. Listado de los beneficiarios directos del proyecto (Ej.: Registro de Socios)."
              />

              {/* Document 11 */}
              <FileUploadWithLabel
                docNumber={11}
                label="12. Informes de la Comisión Técnica."
              />

              {/* Document 12 */}
              <FileUploadWithLabel
                docNumber={12}
                label="13. Memoria del proyecto o programa."
                isOptional={true}
              />

              {/* Document 13 */}
              <FileUploadWithLabel
                docNumber={13}
                label="14. Antecedentes varios según estime la organización."
              />
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