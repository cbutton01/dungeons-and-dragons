export class Character {
  name: string;
  race: string;
  classId: number;
  castingLevel: number;
  spellCount: number;
  preparedSpells: string;
  id: number;
  constructor(public name: string, public race: string, public classId: number, public castingLevel: number, public spellCount: number, public preparedSpells: string, public id: number) {}
}
