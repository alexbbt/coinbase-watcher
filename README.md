# coinbase-watcher
Watch the Coinbase price for a Crypto Currency and report your current status in that market.

## Docker

This tool can also be found and run via Docker.
``` bash
docker run -it -e COINS="1" -e INITIAL="100" -e CURRENCY="LTC" docker.io/alexbbt/coinbase-watcher
```

## Environmental Variables

We use three environmental variables to pass values to the tool:

- `COINS` is the number of coins you own, this should be the exact decimal (it can be super long)
- `INITIAL` is the amount of money you have payed into the system, i.e. the USD you have invested
- `CURRENCY` is optional, but allows you to specify a coin other than `LTC`

## Watching

This tool utalizes the watch command (inside of docker) to rerun the command every second. This is not the best method and will be updated in future version to support a continuous watcher inside of the node script.
