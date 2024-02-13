var express = require("express")
var { graphqlHTTP } = require("express-graphql")
var { buildSchema } = require("graphql")
var cors = require('cors')

var schema = buildSchema(`
    type Query {
        name: String
    }
`)

var root = {
    name: ()=> {
        return "Youne"
    },
}

var app = express()

app.use(cors())

app.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true,
    })
)

app.listen(4000)

module.exports = app;

console.log("Running GraphQL at http://localhost:4000/graphql")