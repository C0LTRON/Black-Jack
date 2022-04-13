const suit = ["Diamonds", "Spades", "Hearts", "Clubs"];
const name = ["Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King", "Ace"];
const value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];

let shoe = generateShoe();

function generateShoe() {
    
    let shoe = new Array();
    for(let e = 0; e < 8; e++){
        for(let i = 0; i < suit.length; i++){
            for(let x = 0; x < value.length; x++){

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