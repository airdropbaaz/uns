## 0.2.0-alpha.4
- ProxyReader@0.2.2 receives unbreakable resolve's data reading

## 0.2.0-alpha.3
- UNSRegistry@0.3.0 receives the ability to withdraw tokens from L2
- SafeMath is redundant for solidity v0.8 (ProxyReader and TwitterValidationOperator affected)
- Remove WhitelistedMinter from deployment of CNS

## 0.2.0-alpha.2
- Remove legacy meta-transactions from UNSRegistryForwarder
- Remove Relayer contract, release MintingManager@0.3.0

### Migration notes
- MintingManager contract requires post-upgrade operation. MintingManager minter role should be removed from MintingManager.

## v0.2.0-alpha.1
- Disable minting legacy free domains (`udtestdev-` legacy free domain prefix). New free domain prefix `uns-devtest-`

## v0.2.0-alpha.0
- UNSRegistry@0.3.0 receives L2 Polygon support
    - RootRigistry - abstract contract implements L1-side Polygon support
    - ChildRegistry - abstract contract implements L2-side Polygon support

### Migration notes
- UNSRegistry contract requires post-upgrade operations:
    - CNSRegistry address should be added by calling function `setCNSRegistry`
    - RootChainManager address should be added by calling function `setRootChainManager`

## v0.1.0
NOTE: the version aggregates different project's iterations
- Contracts:
    - UNSRegistry
    - MintingManager
    - ProxyReader
    - Forwarders
    - ReverseResolver
- Supported networks:
    - mainnet:1
    - rinkeby:4
    - goerli:5
    - sandbox:1337
    - polygon:137
    - mumbai:80001
- [Sandbox](./sandbox/README.md)
- [UNS config](./uns-config.json)
- [Resolver keys](./resolver-keys.json)