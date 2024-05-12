var express = require("express")
var { createHandler } = require("graphql-http/lib/use/express")
var { buildSchema } = require("graphql")
var { ruruHTML } = require("ruru/server")
var cors = require('cors')
 
var schema = buildSchema(`
  type Query {
    name: String
  }
`)
 
var root = {
  name() {
    return "Youne"
  },
}
 
var app = express()

app.use(cors())
 
app.all(
  "/graphql",
  createHandler({
    schema: schema,
    rootValue: root,
  })
)

app.get("/", (_req, res) => {
  res.type("html")
  res.end(ruruHTML({ endpoint: "/graphql" }))
})

app.listen(4000)
console.log("Running a GraphQL API server at http://localhost:4000/graphql")