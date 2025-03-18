import { AlphabetMap } from "AlphabetMap";
import { AlphabetEnum } from "./enum";

type AlphabetMap2 = { [K in AlphabetEnum]: K };

type SwitchKey = "s0" | "s1" | "s2";

type Switch<T extends SwitchKey> = {
  s0: AlphabetMap;
  s1: AlphabetMap2;
  s2: { [K in AlphabetEnum]: `${K}1` };
}[T];

export type EnumMap<T extends SwitchKey> = {
  [K in keyof Switch<T>]: {
    char: K;
    type: {
      name: string;
      value: number;
      x: Switch<T>[K];
    };
  };
};

export type EnumMap2<T extends SwitchKey> = {
  [K in keyof EnumMap<T>]: {
    char: K;
    type: {
      name: string;
      value: number;
      origin: EnumMap<T>[K];
    };
  };
};
