export class CountryM {
  name: string;
  nativeName: string;
  capital: string;
  region: string;
  population: number;
  area: number;
  flag: string;
  languages: string[];
  constructor(
    name: string ='',
    nativeName: string='',
    capital: string='',
    region: string='',
    population: number=0,
    area: number=0,
    flag: string='',
    languages: string[]=[]
  ){
    this.name = name;
    this.nativeName = nativeName;
    this.capital = capital;
    this.region = region;
    this.population = population;
    this.area = area;
    this.flag = flag;
    this.languages = languages;
  }
 }
