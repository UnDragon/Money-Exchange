// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (currency > 10000){
        return   {error: "You are rich, my friend! We don't have so much coins for exchange"}
    }
    var coins = {};
    function subtraction(value , letter) {
        while (currency >= value){
            currency -= value;
            if (coins[letter]){
                coins[letter]++;
            }
            else {
                coins[letter] = 1;
            }
        }
    }
    subtraction(50, "H");
    subtraction(25, "Q");
    subtraction(10, "D");
    subtraction(5, "N");
    subtraction(1, "P");
    return coins;
}
