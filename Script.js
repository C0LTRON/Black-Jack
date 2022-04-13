const suit = ["Diamonds", "Spades", "Hearts", "Clubs"];
const name = ["Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King", "Ace"];
const value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];

let shoe = generateShoe();

//This function creates all the cards we will play with
//For clarity, a "shoe" is the name casino's use for multiple decks of cards shuffled together. 
//For this program, our "shoe" will consist of 8 decks shuffled together
function generateShoe() {
    // declare empty shoe array to insert cards into
    let shoe = new Array();
    // this creates 8 decks of cards
    for(let e = 0; e < 8; e++){
        //This creates one card of each suit, of which there are only 4
        for(let i = 0; i < suit.length; i++){
            //this creates a card of each name/value, of which there are 13
            for(let x = 0; x < value.length; x++){
                // this pushes the new card created into the shoe
                let card = {Value: value[x], Name: name[x], Suit: suit[i]};
                shoe.push(card);
            }
        }
    }
    return shoe;
}
for(let i = 0; i < 416; i++){
  let x = JSON.stringify (shoe[i]);
  document.writeln(x)  
}