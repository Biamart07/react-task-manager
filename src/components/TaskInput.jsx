import React, { useState } from 'react';

const TaskInput = () => {
    // 1. Estado Local do Formulário
    // Por que estado local? Apenas este componente precisa saber o que está sendo digitado.
    const [taskData, setTaskData] = useState({
        titulo: '',
        descricao: '',
        prioridade: 'Baixa',
    });

    //2. Função de tratamento de mudança (handleChange)
    //Esta função será chamada sempre que um campo de input mudar.
    const handleChange = (e) => {
        //O e.target.name e e.target.value vêm do próprio input HTML!
        //Usamos o spread operator (...) para manter os outros campos intactos.
        setTaskData({
            ...taskData,
            [e.target.name]: e.target.value
        });
    };

    //3. Função de envio de formulário (handleSubmit)
    const handleSubmit = (e) => {
        e.preventDefault(); // Previne o recarregamento padrão do navegador.

        // Aqui, em breve, você chamará a função que virá do App.jsx (Passo 3)
        console.log("Dados do formulário prontos:", taskData);

        //Limpar o formulário após o envio
        setTaskData({
            titulo: '',
            descricao: '',
            prioridade: 'Baixa',
        });
    };

    return (
        <div className="max-w-xl mx-auto mb-8">
            <h2 className="text-2xl text-center font-bold text-blue-800 dark:text-blue-400 mb-4 font-['Montserrat']">Adicionar Nova Tarefa</h2>

            <form>
                {/* Campo Título */}
                <div>
                    <label htmlFor="titulo" className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-['Roboto']">Título:</label>
                    <input type="text" id="titulo" name="titulo" value={taskData.titulo} onChange={handleChange} required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 focus:ring-blue-800 focus:border-blue-800" />
                </div>
                {/* Campo Descrição */}
                <div className="mt-4">
                    <label htmlFor="descricao" className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-['Roboto']">Descrição:</label>
                    <textarea id="descricao" name="descricao" value={taskData.descricao} onChange={handleChange} rows="2"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 focus:ring-blue-800 focus:border-blue-800"></textarea>
                </div>
                {/* Campo Prioridade (Select) */}
                <div className="mt-4">
                    <label hmltFor="prioridade" className="block text-sm font-medium text-gray-700 dar:text-gray-300 font-['Roboto']">Prioridade:</label>
                    <select id="prioridade" name="prioridade" value={taskData.prioridade} onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 focus:ring-blue-800 focus:border-blue-800">
                        <option value="Alta">Alta</option>
                        <option value="Média">Média</option>
                        <option value="Baixa">Baixa</option>
                    </select>
                </div>
                {/* Botão de Submissão */}
                <button type="submit" onClick={handleSubmit} className="mt-4 w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800 transition duration-150">Adicionar Tarefa </button>
            </form>
        </div>
    );
};

export default TaskInput;