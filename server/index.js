const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const { schemas } = require("./schema");
const { resolvers } = require("./resolvers");
const data = require("./data");
const path = require("path");

async function startServer() {
    try {
      const app = express();
        // middlewares
        app.use(express.json());
        app.set("view engine", "ejs");
        app.use(express.static(path.join(__dirname, "../client")));
 
        // app and apollo server
        const server = new ApolloServer({
            typeDefs: schemas,
            resolvers: resolvers,
        });
        await server.start();

        //routes
        app.get("/", (req, res) => {
            res.render("index");
        });
        app.use("/graphql", expressMiddleware(server));

        app.get("/personalinfo", (req, res) => {
            res.send(data.personalInfo);
        });

        app.listen(8000, () => console.log("Server Started at PORT 8000"));
    } catch (error) {
        console.log(error);
    }
}

startServer();
