import { useNavigate, Outlet, useLocation } from "react-router-dom";
import styles from "../../css/login.module.css";

const Formulario2A2 = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSiguiente = (e) => {
    e.preventDefault();
    navigate("/form2a/paso3");
  };

  // Check if we're on the main form route or a nested route
  const isMainForm = location.pathname === "/form2a/paso2";
  const currentStep = location.pathname.split('/').pop();
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl w-full mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Header - Always show */}
        <div className="relative border-b border-gray-200 py-4 px-8">
          {/* Logo */}
          <div className="flex justify-start mb-2">
            <div>
              <img
                src="./images/Picture1.png"
                alt="Logo"
                className="h-auto w-auto"
              />
            </div>
          </div>
          
          {/* Number sequence positioned correctly in top right */}
          <div className="absolute top-4 right-8 flex space-x-1">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div 
                key={num}
                className={`w-8 h-8 rounded-full ${
                  currentStep === `paso${num}` || 
                  (currentStep === "" && num === 1) ? 
                  'bg-blue-600 text-white' : 'bg-gray-200'
                } flex items-center justify-center text-sm font-medium`}
              >
                {num}
              </div>
            ))}
          </div>
          <h1 className="text-3xl font-bold">Anexo N°1</h1>
          <p className="mt-2">FORMULARIO DE POSTULACIÓN F-2.A</p>
          <p className="mt-2">SUBVENCIONES MUNICIPALES AÑO 20___</p>
        </div>
        {/* Show the EXCLUSIVO I.M.A. form only on main route */}
        {isMainForm && (
          <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-blue-800 mb-6 border-b-2 border-blue-200 pb-2">
              EXCLUSIVO I.M.A.
            </h2>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    CUENTA PRESUPUESTARIA
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    CUENTA CONTABLE
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  FECHA DE ACTA
                </label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Nº DE ACTA DE CONCEJO
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Nº DE ACUERDO
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Nº DE REGISTRO P.J.R.F.P.(Persona Jurídica Receptora de Fondos Públicos)
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="pt-4">
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

export default Formulario2A2;