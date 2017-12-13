var Client = require('coinbase').Client;
var client = new Client({
    'apiKey': 'API KEY',
    'apiSecret': 'API SECRET'
});

var coins = process.env.COINS || 1;
var initial = process.env.INITIAL || 100;
var currency = process.env.CURRENCY || 'LTC';

client.getSellPrice({'currencyPair': `${currency}-USD`}, function(err, rates) {
    var price = rates['data']['amount'];
    var value = coins * price;
    var profit = value - initial;
    console.log(`Current price is \$${price}`);
    console.log(`${coins} LTC at \$${price}/LTC is \$${value}`)
    console.log(`Profit: \$${profit}`)
});
