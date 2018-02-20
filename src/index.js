// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var res = {};
    console.log(currency);
    if(currency>10000){
      return {error :"You are rich, my friend! We don't have so much coins for exchange"};
    }
    if(currency<=0){
      return res;
    }
    //console.log(currency/50)
    if (currency>=50){
    res.H = parseInt(currency/50);
    }
    console.log(res)
    var midQ = currency%50;
    console.log(midQ)
    if (midQ>0&& midQ/25>1) {
      res.Q = parseInt(midQ/25)
    }
    var midD = midQ%25;

    if (midQ>0 && midD/10>1) {
      res.D = parseInt(midD/10)
    }
    var midP = midD%10;

    if (midP>0) {
      res.P = midP;
    }

    //res.Q = praseInt((currency%50)/25)
    //res.D = praseInt((currency%25)/10)
    console.log(res, 'FINAL')

    return res;

    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
}
