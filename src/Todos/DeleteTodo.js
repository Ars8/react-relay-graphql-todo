import { useMutation } from "react-relay/hooks";
import graphql from "babel-plugin-relay/macro";
import { ConnectionHandler } from "relay-runtime";

const deleteTodoMutation = graphql`
  mutation DeleteTodo_Mutation($input: DeleteTodoInput!) {
    deleteTodo(input: $input) {
      deletedTodoId
    }
  }
`;

function DeleteTodo({ id }) {
  const [commit] = useMutation(deleteTodoMutation);
  function clickHandler(e) {
    e.preventDefault();
    commit({
      variables: {
        input: {
          todoId: id,
        },
      },
      onCompleted(data) {
        console.log(data, "!!!");
      },
      updater: (store) => {
        const proxy = store.getRoot();
        const conn = ConnectionHandler.getConnection(proxy, "TodoList_todos");
        ConnectionHandler.deleteNode(conn, id);
      },
    });
  }
  return <button className="" onClick={clickHandler}></button>;
}

export default DeleteTodo;
