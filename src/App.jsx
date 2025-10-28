import { useState } from 'react'
import './App.css'
import TaskCard from './components/TaskCard';
import TaskInput from './components/TaskInput';
import TaskFilter from './components/TaskFilter';
import TaskSort from './components/TaskSort';
import EditModal from './components/EditModal';


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

  // Armazena a opção de filtro atual
  const [currentFilter, setCurrentFilter] = useState('Todas');
  const [sortBy, setSortBy] = useState('Prioridade');
  //null pois o modal irá começar fechado
  const [editingTask, setEditingTask] = useState(null);

  //Função para ordenação por prioridade
  const handleSortChange = (newSortBy) => {
    setSortBy(newSortBy);
  }

  //Função para alterar o estado do filtro (Lifting State Up)
  const handleFilterChange = (newFilter) => {
    setCurrentFilter(newFilter);
  };

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

  //Lógica de filtragem e ordenação

  const filteredTasks = tasks.filter(task => {
    switch (currentFilter) {
      case 'Concluídas':
        return task.concluida === true;
      case 'Pendentes':
        return task.concluida === false;
      case 'Alta':
      case 'Média':
      case 'Baixa':
        // Se o filtro for uma das prioridades, verifica a prioridade
        return task.prioridade === currentFilter;
      case 'Todas':
      default:
        return true; //retorna todas as tarefas
    }
  });

  let sortedTasks =  [...filteredTasks]; //[...filteredTasks] para garantir que estamos ordenando uma CÓPIA 
  // do array, e não modificando o array original (Imutabilidade!).

  if (sortBy === 'Prioridade') {
    // ORDENAÇÃO POR PRIORIDADE: Lógica mais complexa, usando um mapa de valores
    const priorityOrder = { 'Alta': 3, 'Média': 2, 'Baixa': 1};

    sortedTasks.sort((a, b) => {
      // Compara o valor numérico da prioridade (3 > 2 > 1)
      return priorityOrder[b.prioridade] - priorityOrder[a.prioridade];
      // b - a: Ordena do maior (Alta) para o menor (Baixa)
      // a - b: Ordena do menor (Baixa) para o maior (Alta)
    });
  } else if (sortBy === 'ID') {
    sortedTasks.sort((a, b) => {
      // Ordena do ID Maior para o Menor (Mais Recente no Topo)
      return b.id - a.id;
    });
  }

  // Ordena por tarefas concluídas primeiro
  /*
  else if (sortBy === 'Concluída') {
      // Ordena por tarefas não concluídas primeiro
      sortedTasks.sort((a, b) => (a.concluida === b.concluida) ? 0 : a.concluida ? 1 : -1);
  }
  */

  const handleEditClick = (taskId) => {
    // 1. Encontra a tarefa no array de tasks
    const taskToEdit = tasks.find(task => task.id === taskId);

    //2. Define o estado para o objeto encontrado, abrindo o modal
    setEditingTask(taskToEdit);
  }

  //Função de atualização final (UPDATE)

  const handleUpdateTask = (updatedTask) => {
    //Mapear o array para encontrat e substituir a tarefa antiga pela nova
    const updatedTasks = tasks.map(task => {
      if (task.id === updatedTask.id) {
        // Se encontrar o ID, retorna o objeto atualizado
        return updatedTask;
      }
      //Caso contrário, retorna a tarefa original
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleCloseModal = () => {
    setEditingTask(null);
  };

  return (

    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans p-4">
      <h1 className="text-3xl font-bold text-blue-800 dark:text-blue-100 mb-8 text-center">
        React Task Manager (Praticando Hooks)
      </h1>

      {/* Aqui virão os componentes de input e listagem */}
      <TaskInput onAddTask={handleAddTask} />

      <TaskFilter onFilterChange={handleFilterChange} currentFilter={currentFilter} />

      <TaskSort onSortChange={handleSortChange} sortBy={sortBy} />

      <div className="max-w-xl mx-auto space-y-4">
        {sortedTasks.map(task => (
          // Por enquanto, apenas um texto simples para verificação:
          <TaskCard
            key={task.id}
            task={task}
            onDelete={handleDeleteTask}
            onToggleComplete={handleToggleComplete}
            onEdit={handleEditClick}
          />
        ))}
        {sortedTasks.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-400 p-4">
                Nenhuma tarefa encontrada com o filtro "{currentFilter}".
            </p>
        )}
      </div>

      <EditModal
      task={editingTask}
      onSave={handleUpdateTask}
      onClose={handleCloseModal} />
    </div>
  );
}

export default App
