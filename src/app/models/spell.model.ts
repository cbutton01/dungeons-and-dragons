export class Spell{
  name: string;
  description: string;
  school: string;
  level: number;
  castTime: string;
  ritual: boolean;
  concentration: boolean;
  duration: string;
  range: string;
  verbal: boolean;
  somatic: boolean;
  material: string;
  id: number
  constructor(public name: string, public description: string, public school: string, public level: number, public castTime: string, public ritual: boolean, public concentration: boolean, public duration: string, public range: string, public verbal: boolean, public somatic: boolean, public material: string, public id: number){}
}
