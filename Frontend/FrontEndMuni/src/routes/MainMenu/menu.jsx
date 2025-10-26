import { useNavigate } from "react-router-dom";
import { useAuth } from '../../context/authContext'; // Import AuthContext

const MainMenu = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth(); // Get user and logout from AuthContext
  
  const handleNavigation = (path) => (e) => {
    e.preventDefault();
    navigate(path);
  };

  const handleSalir = (e) => {
    e.preventDefault();
    logout(); // Clear user data
    navigate('/'); // Redirect to login page
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      {/* Header */}
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden mb-6">
        <div className="bg-blue-700 text-white py-6 px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center">
              <img
                src="./images/cnca-top.png"
                alt="Logo CNCA"
                className="h-8 w-auto mr-4"
              />
              <h1 className="text-2xl font-bold">Sistema Cuenta Cultura</h1>
            </div>
            <button
              onClick={handleSalir} // Use the new handleSalir function
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center transition-colors"
            >
              <span>Salir</span>
              <span className="ml-2">×</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden mb-8">
        <div className="p-6 md:p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Inicio
          </h2>
          
          {/* Welcome message */}
          <div className="text-center mb-8">
            <p className="text-black text-lg mb-2">
              Bienvenido, <span className="font-semibold">{user ? `${user.nombre} ${user.apellidos}` : 'Usuario'}</span>
            </p>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Completa tus datos personales, de formación, experiencia laboral y portafolio en "Tu Perfil", 
              posteriormente podrás revisar los concursos abiertos en "Concursos Disponibles"
            </p>
          </div>
          
          {/* Menu Grid - Updated layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            
            {/* TU PERFIL Card */}
            <div 
              className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200 hover:shadow-lg transition-all cursor-pointer hover:scale-[1.02] group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  <img
                    src="./images/cuenta.png"
                    alt="Icono Perfil"
                    className="h-20 w-auto mx-auto"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">TU PERFIL</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Completa tu perfil para que puedas acceder a la oferta del CNCA.
                </p>
              </div>
            </div>

            {/* Concursos Disponibles Card */}
            <div 
              className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200 hover:shadow-lg transition-all cursor-pointer hover:scale-[1.02] group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  <img
                    src="./images/concursos.png"
                    alt="Icono Concursos"
                    className="h-20 w-auto mx-auto"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Concursos Disponibles
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Busca la convocatoria a la que deseas postular.
                </p>
              </div>
            </div>

            {/* TU CUENTA Card */}
            <div 
              onClick={handleNavigation('/cuenta')}
              className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200 hover:shadow-lg transition-all cursor-pointer hover:scale-[1.02] group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  <img
                    src="./images/perfil.png"
                    alt="Icono Cuenta"
                    className="h-20 w-auto mx-auto"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">TU CUENTA</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Actualiza tu cuenta y contraseña de acceso
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto bg-white text-black p-6 rounded-xl border border-gray-200">
        <div className="flex flex-col md:flex-row items-center">
          <img
            src="./images/cnca-footer.jpg"
            alt="CNCA Footer"
            className="w-40 h-36 object-contain mr-6 mb-4 md:mb-0"
          />
          
          <div className="text-sm text-center md:text-left flex-1">
            <p className="leading-relaxed">
              <a 
                href="http://www.cultura.gob.cl/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Subsecretaría de las Culturas y las Artes
              </a>
              <br />
              <a 
                href="http://www.gob.cl/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Gobierno de Chile
              </a>
              <br />
              Dirección Valparaíso: Plaza Sotomayor 233. Teléfono: (32) 232 6400.
              <br />
              Dirección Santiago: Paseo Ahumada 11, Pisos 9, 10 y 11. Santiago. Teléfono: (2) 2618 9000 / 9001
              <br />
              Contáctanos:{" "}
              <a 
                href="http://formulariosiac.cultura.gob.cl/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Formulario de atención ciudadana
              </a>
              <br />
              <a 
                href="http://www.cultura.gob.cl/politica-de-privacidad/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Política de Privacidad
              </a>
              <span className="block mt-1 text-gray-500">v2.3.1.4</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;