import React from 'react';

const TaskSort = ({ onSortChange, currentSort }) => {
    //Funções que manipulam a mudança
    const handleSortChange = (e) => {
        // Envia o novo valor do select para o App.jsx
        onSortChange(e.target.value);
    };

    return (
        <div className="max-w-xl mx-auto mb-8">
            <div className="flex items-center space-x-3 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-md">
                <label htmlFor="sort" className="text-gray-700 dark:text-gray-300 font-semibold text-sm mr-2 whitespace-nowrap">
                    Ordenar por:
                </label>

                {/* 🔑 Ligar o valor atual do filtro (value) e o evento de mudança (onChange) */}
                <select id="sort"
                    name="sort"
                    onChange={handleSortChange}
                    value={currentSort} // Faz o select refletir o estado do App.jsx
                    className="block w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-700 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 focus:ring-blue-800 focus:border-blue-800 transition duration-150">

                    <option value="Prioridade">Prioridade (Alta-Baixa)</option>
                    <option value="ID">Mais Recente (ID)</option>
                    {/*Adicionar mais opções aqui no futuro, como "Alfabética" */}

                </select>
            </div>
        </div>
    );
};

export default TaskSort;