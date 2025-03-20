import type { Berry } from "./pokeapi/berries/berry";
import type { BerryFirmness } from "./pokeapi/berries/berry-firmness";
import type { BerryFlavor } from "./pokeapi/berries/berry-flavor";
import type { ContestEffect } from "./pokeapi/contests/contest-effect";
import type { ContestType } from "./pokeapi/contests/contest-type";
import type { EncounterCondition } from "./pokeapi/encounters/encounter-condition";
import type { EncounterConditionValue } from "./pokeapi/encounters/encounter-condition-value";
import type { EncounterMethod } from "./pokeapi/encounters/encounter-method";
import type { EvolutionChain } from "./pokeapi/evolution/evolution-chain";
import type { EvolutionTrigger } from "./pokeapi/evolution/evolution-trigger";
import type { Generation } from "./pokeapi/games/generation";
import type { Item } from "./pokeapi/items/item";
import type { ItemAttribute } from "./pokeapi/items/item-attribute";
import type { ItemCategory } from "./pokeapi/items/item-category";
import type { ItemFlingEffect } from "./pokeapi/items/item-fling-effect";
import type { ItemPocket } from "./pokeapi/items/item-pocket";
import type { Pokedex } from "./pokeapi/games/pokedex";
import type { Pokemon } from "./pokeapi/pokemon/pokemon";
import type { PokemonSpecies } from "./pokeapi/pokemon/pokemon-species";
import type { NamedAPIResourceList } from "./pokeapi/common/named-api-resource-list";
import type { SuperContestEffect } from "./pokeapi/contests/super-contest-effect";
import type { Type } from "./pokeapi/pokemon/type";
import type { Version } from "./pokeapi/games/version";
import type { Location } from "./pokeapi/locations/location";
import type { VersionGroup } from "./pokeapi/games/version-group";
import type { LocationArea } from "./pokeapi/locations/location-area";
import type { PalParkArea } from "./pokeapi/locations/pal-park-area";
import type { Region } from "./pokeapi/locations/region";
import type { Machine } from "./pokeapi/machine/machine";
import type { Move } from "./pokeapi/moves/move";
import type { MoveAilment } from "./pokeapi/moves/move-ailment";
import type { MoveBattleStyle } from "./pokeapi/moves/move-battle-style";
import type { MoveCategory } from "./pokeapi/moves/move-category";
import type { MoveDamageClass } from "./pokeapi/moves/move-damage-class";
import type { MoveLearnMethod } from "./pokeapi/moves/move-learn-method";
import type { MoveTarget } from "./pokeapi/moves/move-target";
import type { Ability } from "./pokeapi/pokemon/ability";
import type { Characteristic } from "./pokeapi/pokemon/characteristic";
import type { EggGroup } from "./pokeapi/pokemon/egg-group";
import type { Gender } from "./pokeapi/pokemon/gender";
import type { GrowthRate } from "./pokeapi/pokemon/growth-rate";
import type { Nature } from "./pokeapi/pokemon/nature";
import type { PokeathlonStat } from "./pokeapi/pokemon/pokeathlon-stat";
import type { LocationAreaEncounter } from "./pokeapi/pokemon/location-area-encounter";
import type { PokemonColor } from "./pokeapi/pokemon/pokemon-color";
import type { PokemonForm } from "./pokeapi/pokemon/pokemon-form";
import type { PokemonHabitat } from "./pokeapi/pokemon/pokemon-habitat";
import type { PokemonShape } from "./pokeapi/pokemon/pokemon-shape";
import type { Stat } from "./pokeapi/pokemon/stat";
import type { Language } from "./pokeapi/languages/language";

type PaginatedEndpoints = {
  ability: Ability;
  berry: Berry;
  "berry-firmness": BerryFirmness;
  "berry-flavor": BerryFlavor;
  characteristic: Characteristic;
  "contest-effect": ContestEffect;
  "contest-type": ContestType;
  "egg-group": EggGroup;
  "encounter-condition": EncounterCondition;
  "encounter-condition-value": EncounterConditionValue;
  "encounter-method": EncounterMethod;
  "evolution-chain": EvolutionChain;
  "evolution-trigger": EvolutionTrigger;
  gender: Gender;
  generation: Generation;
  "growth-rate": GrowthRate;
  item: Item;
  "item-attribute": ItemAttribute;
  "item-category": ItemCategory;
  "item-fling-effect": ItemFlingEffect;
  "item-pocket": ItemPocket;
  language: Language;
  location: Location;
  "location-area": LocationArea;
  machine: Machine;
  move: Move;
  "move-ailment": MoveAilment;
  "move-battle-style": MoveBattleStyle;
  "move-category": MoveCategory;
  "move-damage-class": MoveDamageClass;
  "move-learn-method": MoveLearnMethod;
  "move-target": MoveTarget;
  nature: Nature;
  "pal-park-area": PalParkArea;
  "pokeathlon-stat": PokeathlonStat;
  pokedex: Pokedex;
  pokemon: Pokemon;
  "pokemon-color": PokemonColor;
  "pokemon-form": PokemonForm;
  "pokemon-habitat": PokemonHabitat;
  "pokemon-shape": PokemonShape;
  "pokemon-species": PokemonSpecies;
  region: Region;
  stat: Stat;
  "super-contest-effect": SuperContestEffect;
  type: Type;
  version: Version;
  "version-group": VersionGroup;
};

export type Endpoints = {
  [Key in keyof PaginatedEndpoints as `/${Key}`]: {
    data: NamedAPIResourceList;
    parameters: WithQueryPagination;
  };
} & {
  [Key in keyof PaginatedEndpoints as `/${Key}/:id`]: {
    data: PaginatedEndpoints[Key];
    parameters: WithPathID;
  };
} & {
  "/pokemon/:id/encounters": {
    data: LocationAreaEncounter;
    parameters: WithPathID;
  };
  "/": {
    data: Record<keyof PaginatedEndpoints, string>;
    parameters: Record<string, never>;
  };
};

export type EndpointKey = keyof Endpoints;

type WithPathID = {
  path: {
    id: number | string;
  };
};

type WithQueryPagination = {
  query?: {
    limit?: number;
    offset?: number;
  };
};

export type FetchFunction = <T extends EndpointKey>(
  key: T,
  parameters: Endpoints[T]["parameters"],
) => Promise<Endpoints[T]["data"]>;
