// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import '../roles/BulkWhitelistedRole.sol';

contract BulkWhitelistedRoleMock is BulkWhitelistedRole {
    function initialize() public initializer {
        __WhitelistedRole_init_unchained();
    }
}
