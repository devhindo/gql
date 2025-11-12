import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema";
import db from "./_db";

// resolvers
const resolvers = {
    Query: {
        games() {
            return db.games;
        },
        authors() {
            return db.authors;
        }
        ,
        reviews() {
            return db.reviews;
        },
        
        review(_: any, args: { id: string }) {
            return db.reviews.find(review => review.id === args.id);
        },

        game(_: any, args: { id: string }) {
            return db.games.find(game => game.id === args.id);
        },

        author(_: any, args: { id: string }) {
            return db.authors.find(author => author.id === args.id);
        }
    },
    Game: {
        reviews(parent: { id: string }) {
            return db.reviews.filter(review => review.game_id === parent.id);
        }
    },
    Author: {
        reviews(parent: { id: string }) {
            return db.reviews.filter(review => review.author_id === parent.id);
        }
    },
    
    Review: {
        game(parent: { game_id: string }) {
            return db.games.find(game => game.id === parent.game_id);
        },
        author(parent: { author_id: string }) {
            return db.authors.find(author => author.id === parent.author_id);
        }
    },
}

// server setup
const server = new ApolloServer({
    typeDefs,
    resolvers
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);

