# bgoff1/pokeapi-types

This package contains the types for the [PokeAPI](https://pokeapi.co/docs/v2).

To install, run one of the following, depending on your preferred node package manager.

- `npm install -D @bgoff1/pokeapi-types`
- `yarn add -D @bgoff1/pokeapi-types`
- `pnpm add -D @bgoff1/pokeapi-types`

After you've installed it, you can use it in your project like this:

```typescript
import { Endpoints } from '@bgoff1/pokeapi-types';
```

## Endpoints and FetchFunction
Endpoints is a helper type that maps the endpoint to the response type.

FetchFunction is another helper type that is a function that takes an endpoint and the parameters, and gives the return type. This will give you intellisense, and the inferred return type based on the first argument.

```typescript
import type { FetchFunction } from '@bgoff1/pokeapi-types';

// implementation omitted
let myFetch: FetchFunction;

const bulbasaur = await myFetch(
  '/pokemon/:id',
  { path: { id: 'bulbasaur' }}
);

const fireType = await myFetch(
  '/type/:id',
  { path: { id: 'fire' }}
);

bulbasaur;
// ^? const bulbasaur: Pokemon

fireType;
// ^? const fireType: Type
```