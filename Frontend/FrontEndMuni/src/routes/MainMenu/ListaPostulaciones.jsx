import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
const ListaPostulaciones = () => {
  const currentYear = new Date().getFullYear();
  const years = [currentYear, currentYear + 1, currentYear + 2];
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    year: '',
    fondo: '',
    linea: '',
    modalidad: '',
    estado: ''
  });

  const handleFilterChange = (field, value) => {
    setFilters(prev => ({
      ...prev,
      [field]: value
    }));
  };
  const handleNavigation = (path) => (e) => {
    e.preventDefault();
    navigate(path);
  }
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="mb-8">
          {/* Logo and title side by side */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <img
                src="./images/cnca-footer.jpg"
                alt="Logo"
                className="h-auto w-auto"
              />
              <div className="text-left">
                <h1 className="text-xl font-bold text-gray-900">
                  Subsecretaría de las Culturas y las Artes
                </h1>
                <p className="text-sm text-gray-600">
                  Ministerio de las Culturas, las Artes y el Patrimonio
                </p>
                <p className="text-sm text-gray-600">
                  Sistemas de Postulaciones
                </p>
              </div>
            </div>
          </div>
          {/* Navigation */}
          <div className="flex justify-center space-x-8 border-b border-gray-200 pb-4">
            <button className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-2">
              Concursos Abiertos
            </button>
            <button className="text-gray-500 hover:text-gray-700 font-medium">
              Mis Postulaciones
            </button>
            <button 
            className="text-gray-500 hover:text-gray-700 font-medium"
            onClick={handleNavigation('/menu')}>
              Sistemas
            </button>
          </div>
        </div>

        {/* Search Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Búsqueda de Concursos Abiertos
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {/* Año Presupuestario */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Año Presupuestario
              </label>
              <select
                value={filters.year}
                onChange={(e) => handleFilterChange('year', e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Selección...</option>
                {years.map(year => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            {/* Fondo */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Fondo
              </label>
              <select
                value={filters.fondo}
                onChange={(e) => handleFilterChange('fondo', e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Selección...</option>
              </select>
            </div>

            {/* Línea */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Línea
              </label>
              <select
                value={filters.linea}
                onChange={(e) => handleFilterChange('linea', e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Selección...</option>
              </select>
            </div>

            {/* Modalidad */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Modalidad
              </label>
              <select
                value={filters.modalidad}
                onChange={(e) => handleFilterChange('modalidad', e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Selección...</option>
              </select>
            </div>
          </div>

          {/* Text Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Filtrar Texto
            </label>
            <input
              type="text"
              placeholder="Buscar..."
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Concursos Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nombre Concurso
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fecha Apertura
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fecha Cierre
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* Empty state - will be populated later */}
              <tr>
                <td colSpan="4" className="px-6 py-12 text-center text-gray-500">
                  No hay concursos disponibles
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Record Count */}
        <div className="mt-4 text-sm text-gray-600">
          Mostrando <span className="font-semibold">0</span> de <span className="font-semibold">0</span> registros
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-2 mt-6">
          <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50">
            Inicio
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50">
            Anterior
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50">
            Siguiente
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50">
            Fin
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-sm text-gray-600">
            <div className="flex justify-center mb-4">
              <img
                src="./images/cnca-top.png"
                alt="Logo"
                className="h-6 w-auto"
              />
            </div>
            <p className="font-semibold mb-2">
              Ministerio de las Culturas, las Artes y el Patrimonio
            </p>
            <p className="mb-2">Gobierno de Chile</p>
            <p className="mb-2">
              Dirección Valparaíso: Plaza Sotomayor 233. Teléfono: (32) 232 6400.
            </p>
            <p className="mb-2">
              Dirección Santiago: Ahumada 48, Piso 6. Santiago. Teléfono: (2) 2618 9000 / 9001
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              <button className="text-blue-600 hover:text-blue-800 text-sm">
                Contactanos: Formulario de atención ciudadana
              </button>
              <button className="text-blue-600 hover:text-blue-800 text-sm">
                Política de Privacidad
              </button>
            </div>
            <p className="mt-4 text-xs text-gray-500">v2.0.1.4</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ListaPostulaciones;