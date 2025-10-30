export const PRIORITIES = {
    ALTA: 'Alta',
    MEDIA: 'Média',
    BAIXA: 'Baixa',
  };

  export const PRIORITY_ORDER = {
    [PRIORITIES.ALTA]: 3,
    [PRIORITIES.MEDIA]: 2,
    [PRIORITIES.BAIXA]: 1,
  };

  export const getPriorityColor = (priority) => {
    switch (priority) {
      case PRIORITIES.ALTA:
        return 'border-red-600 dark:border-red-500';
      case PRIORITIES.MEDIA:
        return 'border-yellow-500 dark:border-yellow-400';
      case PRIORITIES.BAIXA:
        return 'border-blue-500 dark:border-blue-400';
      default:
        return 'border-gray-300 dark:border-gray-600';
    }
  };
