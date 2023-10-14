//Write code for a function shoppingList(numberOfGuests) for the following scenario: There is going to be a party. Based on the number of participants, calculate the amounts of food and drink to be bought. You will buy 3 sausages, 5 bottles of drink, 2 tomatoes and 1 egg for each guest. Define constants for the numbers of items for each guest. Print the shopping list as shown in the examples.

function shoppingList(numberOfGuests) {
  const itemsPerPerson = {
    sausages: 3,
    drinks: 5,
    tomatoes: 2,
    eggs: 1,
  }
  console.log("Shopping List for " + numberOfGuests + " guest(s) :");
  for (const item in itemsPerPerson) {
    const total = itemsPerPerson[item] * numberOfGuests;
    console.log(`* ${total} ${item}`);
  }
}

shoppingList(1);
shoppingList(5);
shoppingList(100);
