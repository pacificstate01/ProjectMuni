import { useNavigate } from "react-router-dom";

const MainMenu = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      {/* Header */}
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden mb-6">
        <div className="bg-blue-700 text-white py-6 px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img
                src="./images/cnca-top.png"
                alt="Logo"
                className="h-8 w-auto mr-4"
              />
              <h1 className="text-2xl font-bold">Sistema Cuenta Cultura</h1>
            </div>
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center">
              <span>Salir</span>
              <span className="ml-2">×</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Inicio
          </h2>
          <p className="text-black text-sm">Bienvenido, [User Name]</p>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Completa tus datos personales, de formación, experiencia laboral y
            portafolio en "Tu Perfil", posteriormente podrás revisar los
            concursos abiertos en "Concursos Disponibles"
          </p>
          {/* Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* TU PERFIL Card */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-center mb-4">
                <div className="rounded-lg ">
                  <img
                    src="./images/cuenta.png"
                    alt="Logo"
                    className="h-16 w-auto mr-4"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800">TU PERFIL</h3>
              </div>
              <p className="text-gray-600">
                Completa tu perfil para que puedas acceder a la oferta del CNCA.
              </p>
            </div>

            {/* Concursos Disponibles Card */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-center mb-4">
                <div className="rounded-lg">
                  <img
                    src="./images/concursos.png"
                    alt="Logo"
                    className="h-16 w-auto mr-4"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Concursos Disponibles
                </h3>
              </div>
              <p className="text-gray-600">
                Busca la convocatoria a la que deseas postular.
              </p>
            </div>

            {/* TU CUENTA Card */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-center mb-4">
                <div className="rounded-lg ">
                  <img
                    src="./images/perfil.png"
                    alt="Logo"
                    className="h-16 w-auto mr-4"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800">TU CUENTA</h3>
              </div>
              <p className="text-gray-600">
                Actualiza tu cuenta y contraseña de acceso
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      {/* Footer */}
{/* Footer */}
{/* Footer */}
<div className="bg-white text-black mt-8 p-6 border-t border-gray-200">
  <div className="max-w-6xl mx-auto">
    <div className="flex flex-col md:flex-row items-center">
      <img
        src="./images/cnca-footer.jpg"
        alt="CNCA"
        className="w-[156px] h-[140px] mr-6 mb-4 md:mb-0"
      />
      
      <div className="text-sm text-center flex-1">
        <p>
          <a href="http://www.cultura.gob.cl/" target="_blank" className="text-blue-600 hover:underline">
            Subsecretaría de las Culturas y las Artes
          </a>
          <br />
          <a href="http://www.gob.cl/" className="text-blue-600 hover:underline">
            Gobierno de Chile
          </a>
          <br />
          Dirección Valparaíso: Plaza Sotomayor 233. Teléfono: (32) 232 6400.
          <br />
          Dirección Santiago: Paseo Ahumada 11, Pisos 9, 10 y 11. Santiago. Teléfono: (2) 2618 9000 / 9001
          <br />
          Contáctanos: <a href="http://formulariosiac.cultura.gob.cl/" className="text-blue-600 hover:underline">Formulario de atención ciudadana</a>
          <br />
          <a href="http://www.cultura.gob.cl/politica-de-privacidad/" target="_blank" className="text-blue-600 hover:underline">Política de Privacidad</a>
          <span className="block">v2.3.1.4</span>
        </p>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default MainMenu;
