export const MOCK_TAREFAS_INICIAIS = [
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
