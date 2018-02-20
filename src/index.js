// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var res = {};
    var midQ, midD, midP;

    if(currency>10000){
      return {error :"You are rich, my friend! We don't have so much coins for exchange"};
    }

    if(currency<=0){
      return res;
    }


    if (currency>=50){
    res.H = parseInt(currency/50);
    currency = currency-res.H*50;
    }

    if (currency>=25){
    res.Q = parseInt(currency/25);
    currency = currency-res.Q*25;
    }

    if (currency>=10){
    res.D = parseInt(currency/10);
    currency = currency-res.D*10;
    }

    if (currency>=5){
    res.N = parseInt(currency/5);
    currency = currency-res.N*5;
    }

    if (currency>=1){
    res.P = parseInt(currency/1);
    currency = currency-res.P*1;
    }

    return res;

}
