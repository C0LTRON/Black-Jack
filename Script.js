const suit = ["Diamonds", "Spades", "Hearts", "Clubs"];
const name = ["Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King", "Ace"];
const value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];



//This creates the Shoe that the cards will be dealt from.
let shoe = generateShoe();
//bet will be changed to user input, for temporarry debugging a static value will be okay.
let bet = 10;








//Call this if debugging shuffle state of the shoe
function debugShoe(shoe){
    for(let i = 0; i < 25; i++){
        let x = JSON.stringify (shoe[i]);
        console.log(x);
    }
console.log("\n");
}

//This function creates all the cards we will play with
//For clarity, a "shoe" is the name casino's use for multiple decks of cards shuffled together. 
//For this program, our "shoe" will consist of 8 decks shuffled together
function generateShoe() {
    // declare empty shoe array to insert cards into
    let shoe = new Array();
    // this creates 8 decks of cards
    for(let e = 0; e < 8; e++){
        //This creates one of each card per suit, of which there are only 4
        for(let i = 0; i < suit.length; i++){
            //this creates a card of each name/value, of which there are 13
            for(let x = 0; x < value.length; x++){
                // this pushes the new card created into the shoe
                let card = {Value: value[x], Name: name[x], Suit: suit[i]};
                //this pushes the new card into the shoe array
                shoe.push(card);
            }
        }
    }
    shoe = shuffle(shoe);
    shoe = cut(shoe);
    return shoe;
}   
//Now that our shoe has been built, it needs to be shuffled.
//This can be done in O(n) by utilizing the Fisher-Yates algorithm. This algorithm moves every card at least once to a random index within the shoe array. https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
function shuffle(shoe){  
    let x = shoe.length, a, b; 
        while (x){
          
          a = Math.floor((Math.random() * x--));
          
          b = shoe[x];
          shoe[x] = shoe[a];
          shoe[a] = b;
        }
    debugShoe(shoe);
    return shoe;
}
    
function cut(shoe){
    //this variable is the user input, accepted range is 1 - 100 as a percentage of the total shoe. 
    let input = 75;
    //this calculation determines how many cards will remain in the shoe after cut
    let shoeSize = Math.round(((input/100)*shoe.length));
    console.log(shoeSize);
    // this loops the pop() function until the shoe is the correct size
    do {
        shoe.pop();
      } while (shoe.length > shoeSize);
      
      console.log(shoe.length);
      return shoe;
}




    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
