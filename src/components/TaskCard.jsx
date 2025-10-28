import React from 'react';
// Usar desestruturação das 'props' para pegar o objeto 'task' diretamente.
const TaskCard = ({ task, onDelete, onToggleComplete, onEdit }) => {

    //Lógica para determinar a cor da prioridade
    const prioridadeCor = () => {
        switch (task.prioridade) {
            case 'Alta':
                return 'border-red-600 dark:border-red-500';
            case 'Média':
                return 'border-yellow-500 dark:border-yellow-400';
            case 'Baixa':
                return 'border-blue-500 dark:border-blue-400';
            default:
                return 'border-gray-300 dark:border-gray-600';
        }
    };

    //Condição para a linha de tarefas concluídas
    const estiloCompletado = task.concluida ? 'opacity-60 line-through' : '';

    //Combinação das classes estáticas e dinâmicas
    const cardClasses = `
    p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg 
    border-l-4 
    ${prioridadeCor()} 
    ${estiloCompletado}
    flex justify-between items-start 
    transition duration-300 hover:shadow-lg
  `;


    return (
        <section className={cardClasses}>

            {/* Informações da Tarefa */}
            <div className="flex-1 min-w-0 pr-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1 font-['Montserrat']">
                    {task.titulo}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-['Roboto']">
                    {task.descricao}
                </p>
                <span className="text-xs font-medium mt-2 inline-block px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 font-['Roboto']">
                    Prioridade: {task.prioridade}
                </span>
            </div>

            {/* Botões de Ação (Placeholder) */}
            <div className='flex space-x-2'>
                {/* EDIÇÃO (Chama a função de abrir o modal) */}
                <button className="text-gray-400 hover:text-blue-800 dark:hover:text-blue-400"
                    title="Editar Tarefa"
                    onClick={() => onEdit(task.id)} // LIGAÇÃO COM A LÓGICA DO App.jsx
                >
                    {/* Ícone de Edição (Pencil SVG) */}
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                </button>
                <button className="text-gray-400 hover:text-green-500 dark:hover:text-green-400"
                    title="Marcar como Concluída" onClick={() => onToggleComplete(task.id)}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </button>
                <button className="text-gray-400 hover:text-red-500 dark:hover:text-red-400"
                    title="Excluir Tarefa" onClick={() => onDelete(task.id)}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                </button>
            </div>
        </section>
    );
};

export default TaskCard;