import React, { useState, useEffect } from 'react';

// Recebe a tarefa atual, a função de salvamento e a função para fechar
const EditModal = ({ task, onSave, onClose }) => {
    
    // 1. Estado Local para o Formulário: CRÍTICO
    // Precisamos de um estado local para editar, para que a digitação não afete o array 
    // principal de 'tasks' ANTES de o usuário clicar em Salvar.
    const [editedTask, setEditedTask] = useState(null);

    // 2. Hook useEffect: Sincroniza o estado local quando a prop 'task' mudar
    // Toda vez que o App.jsx nos envia uma nova 'task' (ou seja, quando o modal abre 
    // para um novo item), atualizamos o estado local do formulário.
    useEffect(() => {
        setEditedTask(task);
    }, [task]); // Executa sempre que a prop 'task' mudar
    
    if (!editedTask) return null; // Se não houver tarefa, não renderiza nada

    const handleChange = (e) => {
        setEditedTask({
            ...editedTask,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Chamada para a função de atualização no App.jsx, passando os dados editados.
        onSave(editedTask);
        onClose(); // Fecha o modal após salvar
    };

    return (
        // 🖼️ Estrutura do Modal (Tailwind CSS)
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-2xl max-w-lg w-full transition-all duration-300">
                <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-400 mb-4 font-['Montserrat'] border-b pb-2">
                    Editar Tarefa: {editedTask.titulo}
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Input Título */}
                    <div>
                        <label htmlFor="edit-titulo" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Título</label>
                        <input type="text" id="edit-titulo" name="titulo" value={editedTask.titulo} onChange={handleChange} required 
                               className="mt-1 block w-full border rounded-md shadow-sm p-2 dark:bg-gray-700 dark:text-gray-100 ..."/>
                    </div>
                    
                    {/* Input Prioridade */}
                    <div>
                        <label htmlFor="edit-prioridade" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Prioridade</label>
                        <select id="edit-prioridade" name="prioridade" value={editedTask.prioridade} onChange={handleChange}
                                className="mt-1 block w-full border rounded-md shadow-sm p-2 dark:bg-gray-700 dark:text-gray-100 ...">
                            <option value="Alta">Alta</option>
                            <option value="Média">Média</option>
                            <option value="Baixa">Baixa</option>
                        </select>
                    </div>

                    {/* Botões */}
                    <div className="flex justify-end space-x-3 pt-4">
                        <button type="button" onClick={onClose} className="py-2 px-4 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition">
                            Cancelar
                        </button>
                        <button type="submit" className="py-2 px-4 rounded-md text-sm font-medium text-white bg-green-600 hover:bg-green-700 transition">
                            Salvar Alterações
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditModal;