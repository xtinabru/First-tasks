let fruitarray = ["banana", "apple", "kiwi", "orange", "blueberries"];


fruitarray.push("pomogranate");
process.stdout.write("\nItem added\n");

for (let i = 0; i < fruitarray.length; i++) {
  process.stdout.write(fruitarray[i] + '\n');
}