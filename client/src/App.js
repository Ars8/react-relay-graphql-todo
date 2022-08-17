import React from 'react';
import { ListItem } from './components/ListItem';
import { TaskField } from './components/TaskField';
import './App.css';
import graphql from 'babel-plugin-relay/macro';
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
} from 'react-relay/hooks';
import RelayEnvironment from './RelayEnvironment';

const { Suspense } = React;

const RepositoryNameQuery = graphql`
    query AppgetTodoQuery {
      getTodos {
        text
        completed
      }
    }
`;

const preloadedQuery = loadQuery(RelayEnvironment, RepositoryNameQuery, {
  /* query variables */
});

function App(props) {
  const data = usePreloadedQuery(RepositoryNameQuery, props.preloadedQuery);
  
  const [tasks, setTasks] = React.useState([data.getTodos]);

  const onToggleCompleted = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, curIdx) =>
        index === curIdx
          ? {
              ...task,
              completed: !task.completed,
            }
          : task,
      ),
    );
  };

  const onRemoveTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, curIdx) => index !== curIdx));
  };

  const onAddTask = (text) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        text,
        completed: false,
      },
    ]);

  };

  return (
    <div className="todo">
      <div className="todo__header">
        <h4>Список задач</h4>
      </div>
      <TaskField onAddTask={onAddTask} />
      <div className="todo__list">
        {tasks.map((task, index) => (
          <ListItem
            key={index}
            index={index}
            text={task.text}
            completed={task.completed}
            onToggleCompleted={onToggleCompleted}
            onRemoveTask={onRemoveTask}
          />
        ))}
      </div>
    </div>
  );
}

function AppRoot(props) {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={'Loading...'}>
        <App preloadedQuery={preloadedQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;




/* import React, { useEffect } from 'react';
import { ListItem } from './components/ListItem';
import { TaskField } from './components/TaskField';
import fetchGraphQL from './fetchGraphQL';

function App() {
  const [tasks, setTasks] = React.useState([]);

  useEffect(() => {
    fetchGraphQL(`
    query getTodo {
      getTodos {
        text
        completed
      }
    }
    `).then(response => {
      const data = response.data;
      setTasks(data.getTodos);
    }).catch(error => {
      console.error(error);
    });
  }, []);

  const onToggleCompleted = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, curIdx) =>
        index === curIdx
          ? {
              ...task,
              completed: !task.completed,
            }
          : task,
      ),
    );
  };

  const onRemoveTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, curIdx) => index !== curIdx));
  };

  const onAddTask = (text) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        text,
        completed: false,
      },
    ]);

    fetchGraphQL(`
      mutation($input: ${text}) {
        createTodo(input: {
          text: $input
          completed: false
        }) {
          text
          completed
        }
      }    
    `).then(response => {
      const data = response.data;
      console.error(data);
    }).catch(error => {
      console.error(error);
    });

  };

  return (
    <div className="todo">
      <div className="todo__header">
        <h4>Список задач</h4>
      </div>
      <TaskField onAddTask={onAddTask} />
      <div className="todo__list">
        {tasks.map((task, index) => (
          <ListItem
            key={index}
            index={index}
            text={task.text}
            completed={task.completed}
            onToggleCompleted={onToggleCompleted}
            onRemoveTask={onRemoveTask}
          />
        ))}
      </div>
    </div>
  );
}

export default App; */
