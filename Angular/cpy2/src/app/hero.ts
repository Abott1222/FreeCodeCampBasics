export class Hero {
  constructor(
    //if we had used public id and public name we would no have had to define them
    public id: number,
    public name: string) {
      //this.id = id;
      //this.name = name;
    }
}