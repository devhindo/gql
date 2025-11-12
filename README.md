# GraphQL Games API

A simple GraphQL API built with Apollo Server, featuring games, authors, and reviews data.

## Installation

1. Clone the repository.
2. Install dependencies:
   ```sh
   bun install
   ```
3. Run the server:
   ```sh
   bun run index.ts
   ```

The server will start at `http://localhost:4000`.

## Schema

The GraphQL schema is defined in [`schema.ts`](schema.ts ), including types for [`Game`](index.ts ), [`Review`](index.ts ), [`Author`](index.ts ), and mutations for managing games.

## Queries

- [`games`](_db.ts ): Fetch all games.
- [`game(id: ID!)`](index.ts ): Fetch a specific game by ID.
- [`authors`](_db.ts ): Fetch all authors.
- [`author(id: ID!)`](index.ts ): Fetch a specific author by ID.
- [`reviews`](_db.ts ): Fetch all reviews.
- [`review(id: ID!)`](index.ts ): Fetch a specific review by ID.

## Mutations

- [`addGame(game: AddGameInput!)`](index.ts ): Add a new game.
- [`deleteGame(id: ID!)`](index.ts ): Delete a game by ID.
- [`updateGame(id: ID!, edits: EditGameInput!)`](index.ts ): Update a game.

## Data

Sample data is stored in [`_db.ts`](_db.ts ).
