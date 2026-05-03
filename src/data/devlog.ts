export interface DevlogEntry {
  id: string;
  title: string;
  teaser: string;
  image: string;
  date: string;
  content: string;
}

import { firstDevlog } from "./devlogs/understanding-saboteur";
import { secondDevlog } from "./devlogs/multiplayer-board";
import { outfitSelectorDevlog } from "./devlogs/outfit-selector";
import { piano} from "./devlogs/instrument";
import { fsm} from "./devlogs/fsm";
import { toonShaderDevlog } from "./devlogs/toon-shader";


export const devlogEntries: DevlogEntry[] = [
  // firstDevlog,
  // secondDevlog,
  outfitSelectorDevlog,
  piano,
  fsm,
  toonShaderDevlog,
  // Add more devlogs here by importing them
];
