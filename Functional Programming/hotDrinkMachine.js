// This program makes drinks based on users choice of tea or coffee and number ordered

// functions to make drink - Start
const makeTea = () => {
console.log("Tea")
};

const makeCoffee = () => {
console.log("Coffee")
};
// functions to make drink - End

// This function takes in the type of drink & number inputted by user
const getDrink = (makeDrink, numOfCups) => {
  // Create an array to hold drinks made.
  let drinksMade = []

// For loop takes user input and adds up how many drinks need to be made.
for(let cups = 1; cups <= numOfCups; cups++){
  // create a variable to hold the drink option wanting to be made
    const hotDrink = makeDrink()
  // push the drink choice to be made to "drinksMade"
  drinksMade.push(hotDrink)

}
//return all drinks made
return drinksMade
}

const marshallsOrder = getDrink(makeTea, 6)
const rhodasOrder = getDrink(makeCoffee, 2)

