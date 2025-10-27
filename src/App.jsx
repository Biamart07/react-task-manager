import { useState } from 'react'
import './App.css'
import TaskCard from './components/TaskCard';
import TaskInput from './components/TaskInput';


  const MOCK_TAREFAS_INICIAIS = [
    {
      id: 1,
      titulo: "Configurar Tailwind CSS no Vite",
      descricao: "Inserir @tailwind base, components e utilities no src/index.css.",
      prioridade: 'Alta', // Usaremos para filtros
      concluida: true,
    },
    {
      id: 2,
      titulo: "Criar componente TaskCard",
      descricao: "Componente responsável por exibir a tarefa.",
      prioridade: 'Média',
      concluida: false,
    },
    {
      id: 3,
      titulo: "Ajustar lógica de ordenação e filtros",
      descricao: "Implementar a ordenação por prioridade no estado do React.",
      prioridade: 'Alta',
      concluida: false,
    },
  ];

function App() {
  // Estado Principal: A lista de tarefas que será manipulada
  const [tasks, setTasks] = useState(MOCK_TAREFAS_INICIAIS);

  // Em seguida, virão estados para filtros, como:
  const [filter, setFilter] = useState('Todas');
  const [sortBy, setSortBy] = useState('Prioridade');

  //Função de comunicação de volta
  const handleAddTask = (newTaskData) => {
    //Criar um novo ID (Simulando o Banco de Dados)
    const newId = tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 1;

    //Criar o objeto de nova tarefa completo
    const newTask = {
      ...newTaskData, // Dados recebidos (titulo, descricao, prioridade)
      id: newId,
      concluida: false, // Toda nova tarefa começa como não concluída
    };

    //Atualizar o estado principal (CRÍTICO: Não use .push(), crie um novo array!)
    setTasks([...tasks, newTask]);
    // Usamos o spread operator para pegar todas as tarefas antigas e adicionar a nova.
  }

  //Função para deletar tarefas
  const handleDeleteTask = (idToDelete) => {
    // Retorna um NOVO array contendo APENAS as tarefas cujo ID não seja o ID a ser excluído
    const updatedTasks = tasks.filter(task => task.id !== idToDelete);
    setTasks(updatedTasks);
  }

  //Função para marcar tarefas como concluídas
  const handleToggleComplete = (idToToggle) => {
    const updatedTasks = tasks.map(task => {
      // Se a tarefa for a que queremos alterar:
      if (task.id === idToToggle) {
        //Retorna um NOVO objeto de tarefa com a propriedade 'concluida' invertida
        return {
          ...task, // Copia todas as propriedades existentes (spread operator)
          concluida: !task.concluida, // Inverte o valor booleano
        }; 
      }
      // Se não for a tarefa, retorna a tarefa original sem alterações
      return task;
    });
    setTasks(updatedTasks);
  };


  return (

    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans p-4">
      <h1 className="text-3xl font-bold text-blue-800 dark:text-blue-100 mb-8 text-center">
        React Task Manager (Praticando Hooks)
      </h1>
      
      {/* Aqui virão os componentes de input e listagem */}
      <TaskInput onAddTask={handleAddTask} />
      
      <div className="max-w-xl mx-auto space-y-4">
        {tasks.map(task => (
          // Por enquanto, apenas um texto simples para verificação:
          <TaskCard 
          key={task.id} 
          task={task}
          onDelete={handleDeleteTask}
          onToggleComplete={handleToggleComplete}
          />
        ))}
      </div>
    </div>
  );
}

export default App
