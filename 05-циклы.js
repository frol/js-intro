console.log("Цикл while:")

let сколько_раз_осталось_повторить = 5

while (сколько_раз_осталось_повторить > 0) {
  console.log("Повторяю!")
  console.log(`Осталось ещё ${сколько_раз_осталось_повторить - 1} раз`)
  сколько_раз_осталось_повторить -= 1
}




console.log("\nЦикл for:")

for (let сколько_раз_осталось_повторить = 5; сколько_раз_осталось_повторить > 0; сколько_раз_осталось_повторить -= 1) {
  console.log("Повторяю!")
  console.log(`Осталось ещё ${сколько_раз_осталось_повторить - 1} раз`)
}




console.log("\nЦикл for в обратную сторону:")

for (let сколько_раз_уже_повторили = 0; сколько_раз_уже_повторили < 5; сколько_раз_уже_повторили += 1) {
  console.log("Повторяю!")
  console.log(`Я уже повторил ${сколько_раз_уже_повторили + 1} раз`)
}




// Задание со звёздочкой: декларативный способ повторения заданного действия
console.log("\nЦикл с использованием декларативного подхода:")

function действие(_, сколько_раз_уже_повторили) {
  console.log("Повторяю!")
  console.log(`Я уже повторил ${сколько_раз_уже_повторили + 1} раз`)
}

Array(5).fill().forEach(действие)



// Задание со звёздочкой: декларативный способ повторения заданного действия (то же самое, "в одну строчку")
console.log("\nЦикл с использованием декларативного подхода \"в одну строчку\":")

Array(5).fill().forEach((_, сколько_раз_уже_повторили) => {
  console.log("Повторяю!")
  console.log(`Я уже повторил ${сколько_раз_уже_повторили + 1} раз`)
})
