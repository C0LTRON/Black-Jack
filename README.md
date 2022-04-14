This is my attempt to optimize, and rebuild an old Java project in JavaScript.

The completed version of this App will will implement user login authentication, along with account information stored in a database.

This App will perform all CRUD functions necessary to implement said features. 





Javascript Blackjack conversion from Java
-------------------------------------------------------
Required Objects

 Shoe[] --one array containing 416 shuffled card objects (that's the equivilent of 8 decks of cards) https://en.wikipedia.org/wiki/Shoe_(cards)
 
 Card(name, suit, value) --object which contains all necessary information to determine win/loss state in gameplay

 Dealerhand(ace counter, cards[]) -- slimmed down version of the hand object assigned to the player

 Playerhand[] -- this object will act as a container for our hand objects that can be passed into the play() function 
 
 hand(cards[], aceCounter, bet, betMultiplier) -- Hand objects are nested within Playerhand object due to SPLIT mechanic

  aceCounter: required due to aces having conditional value. If the players hand.value goes over 21 while having an ace, the ace changes value from 11   to 1. 
    
    if(hand.value > 21 && aceCounter > 0){
      hand.value = hand.value - 10
      aceCounter--
      } else {
      player loses the game
    }
  
  bet: required for win/loss calculations
  
  betMultiplier: required since blackjack has a conditional payout depending on the players hand.
  
    if(player loses) betMultiplier = 0 (player loses their bet
    if(player wins) betMultiplier = 1 (player wins their bet, i.e. $10 bet wins $10)
    if(blackjack) betMultiplier = 1.5 (player wins 1.5x their bet, i.e. $10 bet wins $15)
  

------------------------------------------------------------------------------------------------------------------------------------------------------------

Before Play -- (last priority, will create after gameplay is functional.)

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
            -> if user inputs 70%, shoe will loop a pop() function until the shoe is 70% of it's original size

    The game will generate a new Shoe once Shoe.length() < 20
------------------------------------------------------------------------------------------------------------------------------------------------------------
    
betOrQuit()
    -> if bet,  then bet is subtracted from chips
    -> if quit, then chips are stored in DB
        -> say thanks for playing and then log the user out.

play(playerhand[], Shoe)

  playerhand[] will contain hand objects. This is necessary because the player can play more than one hand if they decide to SPLIT their hand.
  This allows us to track all player hands using one object. A vast majority of the time however the playerhand[] array will only contain one hand object.

    Deal cards
        -> 1 card dealt to each player, dealers first card will be face down, or otherwise concealed.
        -> 2nd card dealt to each player
    
    Players Turn - Active gamestate until player choses STAY or hand > 21
        
        Check if hand is able to split (check name, not value. you can split any pair of cards, but you cannot split Jack/King even though they're the same value)

        Present OPTIONS to player -- DOUBLE DOWN will only be presented if hand <= 2
        (HIT, STAY, DOUBLE DOWN) 

        if HIT
            -> pop card out of shoe into players hand -- shoe.pop() => hand[]
                ->evaluate hand.value, if hand > 21 player loses hand
                --If player hand < 21, present OPTIONS (except double down)
        
        if DOUBLEDOWN
            -> check that player has enough chips to double their bet, and only has 2 cards in hand
            -> if allowed, double bet 
                -> pop only one card out of deck into players hand
                -> end the players turn
        
        if STAY
            -> continue to dealers turn

        if SPLIT
            -> check that player has enough chips to double their bet
            -> create new hand called hand2
            -> playerhand.pop() card out of player hand 1 into player hand 2
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
        
And finally after returning hand.bet, we can loop gameplay for as long as the player likes by calling betOrPlay() at the end of the play() function.

        playOrBet();
        
        
        
        
