```
[/contracts/MiniMeToken.sol](/contracts/MiniMeToken.sol) as at
7619e30d5247fd0f2743577884b387df7a464607

|------------------------------------------------------------------------------------------------------------------------------------------------|
|      Contract      |                          Function                          | Visibility | Constant |   Returns   |       Modifiers        |
|--------------------|------------------------------------------------------------|------------|----------|-------------|------------------------|
| MiniMeToken        | MiniMeToken(address,address,uint,string,uint8,string,bool) | public     | false    |             |                        |
| MiniMeToken        | transfer(address,uint256)                                  | public     | false    | success     |                        |
| MiniMeToken        | transferFrom(address,address,uint256)                      | public     | false    | success     |                        |
| MiniMeToken        | doTransfer(address,address,uint)                           | internal   | false    | bool        |                        |
| MiniMeToken        | balanceOf(address)                                         | public     | true     | balance     |                        |
| MiniMeToken        | approve(address,uint256)                                   | public     | false    | success     |                        |
| MiniMeToken        | allowance(address,address)                                 | public     | true     | remaining   |                        |
| MiniMeToken        | approveAndCall(address,uint256,bytes)                      | public     | false    | success     |                        |
| MiniMeToken        | totalSupply()                                              | public     | true     | uint        |                        |
| MiniMeToken        | balanceOfAt(address,uint)                                  | public     | true     | uint        |                        |
| MiniMeToken        | totalSupplyAt(uint)                                        | public     | true     | uint        |                        |
| MiniMeToken        | createCloneToken(string,uint8,string,uint,bool)            | public     | false    | address     |                        |
| MiniMeToken        | generateTokens(address,uint)                               | public     | false    | bool        | onlyController         |
| MiniMeToken        | destroyTokens(address,uint)                                | public     | false    | bool        | onlyControllerOrBurner |
| MiniMeToken        | enableTransfers(bool)                                      | public     | false    |             | onlyController         |
| MiniMeToken        | getValueAt(Checkpoint,uint)                                | internal   | true     | uint        |                        |
| MiniMeToken        | updateValueAtNow(Checkpoint,uint)                          | internal   | false    |             |                        |
| MiniMeToken        | isContract(address)                                        | internal   | true     | bool        |                        |
| MiniMeToken        | min(uint,uint)                                             | internal   | false    | uint        |                        |
| MiniMeToken        | ()                                                         | public     | false    |             | payable                |
| MiniMeToken        | getBlockNumber()                                           | internal   | true     | uint256     |                        |
| MiniMeToken        | claimTokens(address)                                       | public     | false    |             | onlyController         |
| MiniMeTokenFactory | createCloneToken(address,uint,string,uint8,string,bool)    | public     | false    | MiniMeToken |                        |
'------------------------------------------------------------------------------------------------------------------------------------------------'

[/contracts/SIT.sol](/contracts/SIT.sol) as at
7619e30d5247fd0f2743577884b387df7a464607

|-------------------------------------------------------------------------|
| Contract |   Function   | Visibility | Constant | Returns |  Modifiers  |
|----------|--------------|------------|----------|---------|-------------|
| SIT      | SIT(address) | public     | false    |         | MiniMeToken |
'-------------------------------------------------------------------------'


[/contracts/MSP.sol](/contracts.sol) as at    
7619e30d5247fd0f2743577884b387df7a464607  

|-------------------------------------------------------------------------|
| Contract |   Function   | Visibility | Constant | Returns |  Modifiers  |
|----------|--------------|------------|----------|---------|-------------|
| MSP      | MSP(address) | public     | false    |         | MiniMeToken |
'-------------------------------------------------------------------------'
```
