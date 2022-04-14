/*Javascript Blackjack conversion from Java
-------------------------------------------------------
Required Objects

Shoe[] one array containing 416 shuffled card objects (that's the equivilent of 8 decks of cards) https://en.wikipedia.org/wiki/Shoe_(cards)
 
Card(string name, string suit, Int value)

Dealerhand(int ace counter, array[cards])

Playerhand(hands[])
 ->hand(array[cards], int ace counter, int bet, int betMultiplier) -- Hand objects are nested within Playerhand object due to SPLIT mechanic

------------------------------------------------------------------------------------------------------------------------------------------------------------

Before Play -- will create after gameplay is functional.

    Log in
        -> verify account data

    Show accountt balance
        -> connect with database 
            -> customer makes withdrawl from database 
            -> withdrawl will be reffered to as chips
------------------------------------------------------------------------------------------------------------------------------------------------------------
Generate Shoe -- done 4/13/2022

    loop that generates 8 decks of cards, and then shuffles all 416 card objects into the shoe object

    User can cut shoe
        -> user inputs percentage of shoe they will play with
            -> if user inputs 70%, shoe will loop a popfunction until the shoe is 70% of it's original size

    The game will generate a new Shoe once Shoe.length() < 20
------------------------------------------------------------------------------------------------------------------------------------------------------------
    
Place Bet OR quit game
    -> if bet,  then bet is subtracted from chips
    -> if quit, then chips are stored in DB
        -> say thanks for playing or something else, and then log the user out.

Begin play(playerhand, Shoe)

    Deal cards
        -> 1 card dealt to each player, dealers first card will be face down
        -> 2nd card dealt to each player
    
    Players Turn - Active gamestate until player choses STAY or hand > 21
        
        Check if hand is able to split (check name, not value. you can split a pair of anything, but you cannot split Jack/King even though they're the same value)

        Present OPTIONS to player
        (HIT, STAY, DOUBLEDOWN)

        if HIT
            -> pop card out of deck into players hand
                ->evaluate hand value, if hand > 21 player loses hand
                --If player hand < 21, present OPTIONS
        
        if DOUBLEDOWN
            -> check that player has enough chips to double their bet, and only has 2 cards in hand
            -> if allowed, double bet 
                -> pop only one card out of deck into players hand
                -> end the players turn
        
        if STAY
            -> continue to dealers turn

        if SPLIT
            -> check that player has enough chips to double their bet
            -> create empty playerhand, playerhand2
            -> pop one card out of player hand 1 into player hand 2
                -> continue playloop while player hand still has OPTIONS
    
Dealers turn --the dealer choses hit on 16 or lower. 17 or lower if they have an ace--

    If Acecounter > 0 and dealerhand <= 17 then they hit
    
    If Acecounter == 0 and dealerhand  <= 16 then they hit

    If dealer hand is not eligible to hit, and is <= 21 then the dealer turn is over.

Finish play(Playerhand)

        If playerhand.hand(value) > Dealerhand - player wins

        If Dealerhand > playerhand.hand(value) - Dealer wins

        If Dealerhand == playerhand - Push

        hand.bet += (bet*betMultiplier)

        Return hand.bet

        

        




        
        
        




*/
