type Heros = "Hulk" | "Capt" | "Thor";
type HeroAges = { [K in Heros]: number };

// type HeroAges = {
//     Hulk : number;
//     Capt: number;
//     Thor: number;
// }

const ages: HeroAges = {
  Hulk: 33,
  Capt: 100,
  Thor: 1000,
};
