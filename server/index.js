import express from 'express';
import {graphqlHTTP} from "express-graphql"
import cors from "cors"
import schema from "./schema.js"

const todos = [{id: 1, text: "Hello relay", completed: true}, {id: 2, text: "Hello react", completed: false}]

const app = express()
app.use(cors())

const createTodo = (input) => {
    const id = Date.now()
    return {
        id, ...input
    }
}
const root = {
    getTodos: () => {
        return todos
    },
    createTodo: ({input}) => {
        const todo = createTodo(input)
        todos.push(todo)
        return todo
    }
}


app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root
}))

app.listen(5000, () => console.log('server started on port 5000'))
