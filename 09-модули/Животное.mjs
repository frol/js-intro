export default class Животное {
  constructor(имя, дата_рождения) {
    this.имя = имя
    this.дата_рождения = дата_рождения
  }

  покажи_своё_имя() {
    console.log(this.имя)
  }

  покажи_дату_рождения() {
    console.log(this.дата_рождения)
  }
}
