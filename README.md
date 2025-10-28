# 🚀 React Task Manager: Aplicação de Domínio com Gestão de Estado

## 🎯 Objetivo do Projeto

Este projeto foi desenvolvido com o foco principal em consolidar os fundamentos do **React.js** e demonstrar proficiência em **Gestão de Estado**, **Imutabilidade** e **Arquitetura de Componentes**.

O Task Manager simula uma aplicação de domínio onde o usuário pode gerenciar tarefas, aplicar filtros em tempo real e ordenar a lista, tudo controlado pelo estado do React (State Hooks), sem a necessidade de um Back-End conectado neste MVP.

---

## ✨ Destaques Técnicos (O que o Recrutador Procura)

* **Gestão de Estado Complexa (Hooks):** Utilização eficiente do `useState` para gerenciar o array principal de tarefas e múltiplos estados secundários (Filtro, Ordenação e Modal de Edição).
* **Imutabilidade no Array:** Todas as operações de **Criação, Exclusão e Atualização (CRUD)** são feitas respeitando a imutabilidade do estado, utilizando os métodos `.filter()`, `.map()`, e o *Spread Operator* (`...`).
* **Controle de Fluxo (Lifting State Up):** Implementação clara da comunicação entre componentes (Ex: `<TaskInput />` envia dados para o `App.jsx` através de *props* de callback).
* **UX Avançada:** Implementação de **Filtros e Ordenação Dinâmicos** (ex: ordenar por Prioridade, filtrar por Status) que reprocessam a lista instantaneamente, demonstrando controle sobre o *rendering* do React.
* **Interface Interativa (UPDATE):** Uso do `useState` e `useEffect` em conjunto para controlar a visibilidade e o estado local do formulário de Edição dentro do **Modal**.
* **Estilização Profissional:** Design **Mobile-First** com **Tailwind CSS**, incluindo suporte completo a **Dark Mode** (Modo Escuro), o que é um grande diferencial de acessibilidade e qualidade visual.

---

## ⚙️ Tecnologias Utilizadas

| Categoria | Tecnologia | Propósito |
| :--- | :--- | :--- |
| **Framework** | **React.js** | Criação da interface de usuário baseada em componentes. |
| **Build Tool** | **Vite** | Ferramenta moderna e rápida para ambiente de desenvolvimento. |
| **Hooks Essenciais** | `useState`, `useEffect` | Gerenciamento de estado local e efeitos colaterais. |
| **Estilização** | **Tailwind CSS** | Estilização utilitária, design responsivo e Dark Mode. |
| **Padrão de Dados** | Imutabilidade | Garantir a performance e previsibilidade do estado da aplicação. |

---

## 💻 Funcionalidades Implementadas (CRUD + Filtros/Sort)

1.  **Criar (Create):** Adiciona novas tarefas à lista.
2.  **Ler (Read):** Lista de tarefas renderizada via `.map()` e componentes `<TaskCard />`.
3.  **Atualizar (Update):**
    * **Simples:** Marcar/Desmarcar tarefa como concluída (`onToggleComplete`).
    * **Completa:** Edição de Título e Prioridade via `<EditModal />`.
4.  **Excluir (Delete):** Remoção de tarefas do estado (`onDelete` com `.filter()`).
5.  **Filtros:** Opções para filtrar por **Status** (Pendentes/Concluídas) e **Prioridade** (Alta/Média/Baixa).
6.  **Ordenação (Sort):** Ordena a lista por **Prioridade** (Alta > Baixa) ou **Recência** (ID).

---

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos
* Node.js (LTS recomendado)
* npm ou yarn

### Instalação

1.  Clone o repositório:
    ```bash
    git clone [INSIRA O LINK DO SEU REPOSITÓRIO AQUI] react-task-manager
    ```
2.  Navegue para o diretório e instale as dependências:
    ```bash
    cd react-task-manager
    npm install
    # ou yarn install
    ```

### Execução

1.  Inicie o servidor de desenvolvimento do Vite:
    ```bash
    npm run dev
    # ou yarn dev
    ```
2.  Abra seu navegador no endereço local exibido pelo console (geralmente `http://localhost:5173/`).
