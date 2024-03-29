import { Berry } from "./pokeapi/berries/berry";
import { BerryFirmness } from "./pokeapi/berries/berry-firmness";
import { BerryFlavor } from "./pokeapi/berries/berry-flavor";
import { ContestEffect } from "./pokeapi/contests/contest-effect";
import { ContestType } from "./pokeapi/contests/contest-type";
import { EncounterCondition } from "./pokeapi/encounters/encounter-condition";
import { EncounterConditionValue } from "./pokeapi/encounters/encounter-condition-value";
import { EncounterMethod } from "./pokeapi/encounters/encounter-method";
import { EvolutionChain } from "./pokeapi/evolution/evolution-chain";
import { EvolutionTrigger } from "./pokeapi/evolution/evolution-trigger";
import { Generation } from "./pokeapi/games/generation";
import { Item } from "./pokeapi/items/item";
import { ItemAttribute } from "./pokeapi/items/item-attribute";
import { ItemCategory } from "./pokeapi/items/item-category";
import { ItemFlingEffect } from "./pokeapi/items/item-fling-effect";
import { ItemPocket } from "./pokeapi/items/item-pocket";
import { Pokedex } from "./pokeapi/games/pokedex";
import type { Pokemon } from "./pokeapi/pokemon/pokemon";
import type { PokemonSpecies } from "./pokeapi/pokemon/pokemon-species";
import type { NamedAPIResourceList } from "./pokeapi/common/named-api-resource-list";
import { SuperContestEffect } from "./pokeapi/contests/super-contest-effect";
import { Type } from "./pokeapi/pokemon/type";
import { Version } from "./pokeapi/games/version";
import { Location } from "./pokeapi/locations/location";
import { VersionGroup } from "./pokeapi/games/version-group";
import { LocationArea } from "./pokeapi/locations/location-area";
import { PalParkArea } from "./pokeapi/locations/pal-park-area";
import { Region } from "./pokeapi/locations/region";
import { Machine } from "./pokeapi/machine/machine";
import { Move } from "./pokeapi/moves/move";
import { MoveAilment } from "./pokeapi/moves/move-ailment";
import { MoveBattleStyle } from "./pokeapi/moves/move-battle-style";
import { MoveCategory } from "./pokeapi/moves/move-category";
import { MoveDamageClass } from "./pokeapi/moves/move-damage-class";
import { MoveLearnMethod } from "./pokeapi/moves/move-learn-method";
import { MoveTarget } from "./pokeapi/moves/move-target";
import { Ability } from "./pokeapi/pokemon/ability";
import { Characteristic } from "./pokeapi/pokemon/characteristic";
import { EggGroup } from "./pokeapi/pokemon/egg-group";
import { Gender } from "./pokeapi/pokemon/gender";
import { GrowthRate } from "./pokeapi/pokemon/growth-rate";
import { Nature } from "./pokeapi/pokemon/nature";
import { PokeathlonStat } from "./pokeapi/pokemon/pokeathlon-stat";
import { LocationAreaEncounter } from "./pokeapi/pokemon/location-area-encounter";
import { PokemonColor } from "./pokeapi/pokemon/pokemon-color";
import { PokemonForm } from "./pokeapi/pokemon/pokemon-form";
import { PokemonHabitat } from "./pokeapi/pokemon/pokemon-habitat";
import { PokemonShape } from "./pokeapi/pokemon/pokemon-shape";
import { Stat } from "./pokeapi/pokemon/stat";
import { Language } from "./pokeapi/languages/language";

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
  }
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
