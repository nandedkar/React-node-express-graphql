import express from "express";
import { ApolloServer } from "@apollo/server";
import cors from "cors";
import { expressMiddleware } from "@as-integrations/express5";
import { typeDefs } from "./schema/employeeSchema";
import { resolvers } from "./resolvers/employeeResolver";

async function startServer() {
    const server = new ApolloServer({
        typeDefs,
        resolvers
    });
    await server.start();
    const app = express();
    app.use(cors({ origin: "http://localhost:5173" }));
    app.use(express.json());
    app.use(
        "/graphql",
        expressMiddleware(server)
    );

    app.listen(4000, async () => {
        console.log("Server is running on http://localhost:4000");
    });
}

startServer().catch((error) => {
    console.error("Error starting the server:", error);
});




