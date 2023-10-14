/*Create a method that prints out Lorem ipsum
sentence (”Lorem Ipsum dolor sit amet, consectetur
  adipiscing elit. ”) ten times. Call this method.*/

  //создаем функцию
  function printLoremIpsum() {
    //выводит в принт
    process.stdout.write("\nLorem Ipsum dolor sit amet, consectetur adipiscing elit.");
  }
  //затем запускаем цикл для 10 раз с помощью for
  for (let i = 0; i < 10; i++){
    //вывод функции
    printLoremIpsum();
  }
  process.stdout.write("\n\n")
  