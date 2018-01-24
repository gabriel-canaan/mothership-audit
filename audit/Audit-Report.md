# CLIENT Audit Report

## Preamble
This audit report was undertaken by BlockchainLabs.nz for the purpose of providing feedback to MOTHERSHIP. It has subsequently been shared publicly without any express or implied warranty.

Solidity contracts were sourced from the public Github repo [mothershipcx/contracts](https://github.com/sabakaio/mothership-contracts.git) prior to commit [d8705de4](https://github.com/sabakaio/mothership-contracts.git/tree/d8705de4de9da3200a417cc1dc55f35d6286ed49) - we would encourage all community members and token holders to make their own assessment of the contracts.

## Scope
All Solidity code contained in [/contracts](https://github.com/gabriel-canaan/mothership-audit/tree/master/contracts) was considered in scope along with the tests contained in [/tests](https://github.com/gabriel-canaan/mothership-audit/tree/master/test) as a basis for static and dynamic analysis.

## Focus Areas
The audit report is focused on the following key areas - though this is not an exhaustive list.
### Correctness
- No correctness defects uncovered during static analysis?
- No implemented contract violations uncovered during execution?
- No other generic incorrect behaviour detected during execution?
- Adherence to adopted standards such as ERC20?
### Testability
- Test coverage across all functions and events?
- Test cases for both expected behaviour and failure modes?
- Settings for easy testing of a range of parameters?
- No reliance on nested callback functions or console logs?
- Avoidance of test scenarios calling other test scenarios?
### Security
- No presence of known security weaknesses?
- No funds at risk of malicious attempts to withdraw/transfer?
- No funds at risk of control fraud?
- Prevention of Integer Overflow or Underflow?
### Best Practice
- Explicit labeling for the visibility of functions and state variables?
- Proper management of gas limits and nested execution?
- Latest version of the Solidity compiler?

## Focus Areas
The audit report is focused on the following key areas - though this is not an exhaustive list.
### Correctness
- No correctness defects uncovered during static analysis?
- No implemented contract violations uncovered during execution?
- No other generic incorrect behaviour detected during execution?
- Adherence to adopted standards such as ERC20?
### Testability
- Test coverage across all functions and events?
- Test cases for both expected behaviour and failure modes?
- Settings for easy testing of a range of parameters?
- No reliance on nested callback functions or console logs?
- Avoidance of test scenarios calling other test scenarios?
### Security
- No presence of known security weaknesses?
- No funds at risk of malicious attempts to withdraw/transfer?
- No funds at risk of control fraud?
- Prevention of Integer Overflow or Underflow?
### Best Practice
- Explicit labeling for the visibility of functions and state variables?
- Proper management of gas limits and nested execution?
- Latest version of the Solidity compiler?

## Classification
### Defect Severity
- Minor - A defect that does not have a material impact on the contract execution and is likely to be subjective.
- Moderate - A defect that could impact the desired outcome of the contract execution in a specific scenario.
- Major - A defect that impacts the desired outcome of the contract execution or introduces a weakness that may be exploited.
- Critical - A defect that presents a significant security vulnerability or failure of the contract across a range of scenarios.

## Findings
<!-- Here goes a list of issues -->
### Minor
- **Depreciated Throw Syntax** - `lorem ipsum` throw syntax used throught all files is depreciated.Consider using revert(),
  assert() or require()   [View on GitHub](https://github.com/ethereum/solidity/issues/1793)
 - [ ] Not Fixed

### Moderate
- None found

### Major
- None found

### Critical
- None found

## Testing

To further satisfy test coverage, both `MiniMeToken.sol`, `SIT.sol` and `MSP.sol` were deployed onto the Kovan Test Network to achieve simulation of a mock sale. This can be viewed in the [kovan-passing-tests.md](https://github.com/gabriel-canaan/mothership-audit/blob/master/audit/kovan-passing-tests.md) checklist.

## Conclusion

Overall we have been fully satisfied with the resulting contracts following the audit feedback period. We took part in carefully reviewing all source code provided, including deployment testing.

We are pleased to report that no potential vulnerabilities were uncovered during the audit. That the token complies with the recently finalised ERC20 Token Standards. The code has excellent testability and the developers have followed common best practices.

Of the issues we have raised all of them are minor. This crowdsale has a low risk of ethereum being hacked or stolen.
