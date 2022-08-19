import {buildSchema} from 'graphql'

const schema = buildSchema(`
    
    type Todo {
        id: ID
        text: String
        completed: Boolean
    }

    input TodoInput {
        id: ID
        text: String!
        completed: Boolean!
    }
    
    type Query {
        getTodos: [Todo]
    }

    type Mutation {
        createTodo(input: TodoInput): Todo
        removeTodo(id: ID): [Todo]
        toggleCompleted(id: ID): [Todo]
    }

`)

export default schema