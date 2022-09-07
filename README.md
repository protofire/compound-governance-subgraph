## Venus Governance Subgraph

This repo has been archived. All venus subgraphs are now managed in a monorepo. The code for this subgraph has moved [here](https://github.com/VenusProtocol/subgraphs/tree/master/subgraphs/venus-governance).

---

This subgraph indexes and exposes in GraphQL all the event data related to the GovernorAlpha and VenusToken contracts from VenusProtocol, providing an easy access to Token holder and Delegates information, Proposals and votes casted, and all the relationships between those entities.

A live version of this subgraph can be found [here](https://thegraph.com/explorer/subgraph/venusprotocol/venus-governance), along with useful queries and examples already available on the playground.

### Historical data

We don't keep track of historical data via entities, since as of the v0.17 GraphNode update they implemented "time-travel" queries, which allow to access the subgraph state for any block number, which allows to get any historical data that you might need from subgraphs, and also calculate with any granularity the data changes that happen on the subgraph.

We recommend [this article](https://blocklytics.org/blog/ethereum-blocks-subgraph-made-for-time-travel/) from the Blocklytics team, which explains how to take advantage of "time-travel" queries and also how to translate timestamps to block numbers, which might be better suited for some use cases!
