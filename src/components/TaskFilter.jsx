import React from 'react';


// Recebe onFilterChange (a função que muda o estado do filtro no App.jsx)
// Recebe currentFilter (o valor atual do filtro para que o select exiba a opção correta)
const TaskFilter = ({ onFilterChange, currentFilter }) => {

    //Função para mudança de filtro
    const handleFilterChange = (e) => {
        onFilterChange(e.target.value);
    };

    return (
        <div className="max-w-xl mx-auto mb-6">
            <div className="flex items-center space-x-3 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-md">

                <label htmlFor="filter" className="text-gray-700 dark:text-gray-300 font-semibold text-sm mr-2 whitespace-nowrap">
                    Filtrar por:
                </label>

                <select id="filter"
                    name="filter"
                    value={currentFilter}
                    onChange={handleFilterChange}
                    className="block w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-700 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 focus:ring-blue-800 focus:border-blue-800 transition duration-150">
                    {/* Opções de Status */}
                    <option value="Todas">Todas</option>
                    <option value="Concluídas">Concluídas</option>
                    <option value="Pendentes">Pendentes</option>

                    {/* Separador Visual (apenas para UX) */}
                    <option disabled>--- Por Prioridade ---</option>

                    {/* Opções de Prioridade */}
                    <option value="Alta">Prioridade Alta</option>
                    <option value="Média">Prioridade Média</option>
                    <option value="Baixa">Prioridade Baixa</option>
                </select>
            </div>
        </div>
    );
};

export default TaskFilter;