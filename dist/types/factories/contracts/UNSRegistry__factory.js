"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UNSRegistry__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "previousAdmin",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "newAdmin",
                type: "address",
            },
        ],
        name: "AdminChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "approved",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "operator",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "approved",
                type: "bool",
            },
        ],
        name: "ApprovalForAll",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint8",
                name: "version",
                type: "uint8",
            },
        ],
        name: "Initialized",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "string",
                name: "keyIndex",
                type: "string",
            },
            {
                indexed: false,
                internalType: "string",
                name: "key",
                type: "string",
            },
        ],
        name: "NewKey",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "string",
                name: "uri",
                type: "string",
            },
        ],
        name: "NewURI",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "string",
                name: "prefix",
                type: "string",
            },
        ],
        name: "NewURIPrefix",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "addr",
                type: "address",
            },
        ],
        name: "RemoveReverse",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "ResetRecords",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "string",
                name: "keyIndex",
                type: "string",
            },
            {
                indexed: true,
                internalType: "string",
                name: "valueIndex",
                type: "string",
            },
            {
                indexed: false,
                internalType: "string",
                name: "key",
                type: "string",
            },
            {
                indexed: false,
                internalType: "string",
                name: "value",
                type: "string",
            },
        ],
        name: "Set",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "addr",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "SetReverse",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "implementation",
                type: "address",
            },
        ],
        name: "Upgraded",
        type: "event",
    },
    {
        inputs: [],
        name: "BATCH_LIMIT",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "NAME",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "VERSION",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "key",
                type: "string",
            },
        ],
        name: "addKey",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "addr",
                type: "address",
            },
        ],
        name: "addProxyReader",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "approve",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
        ],
        name: "balanceOf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "burn",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "user",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "depositData",
                type: "bytes",
            },
        ],
        name: "deposit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "depositToPolygon",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "from",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "nonce",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes",
                        name: "data",
                        type: "bytes",
                    },
                ],
                internalType: "struct IForwarder.ForwardRequest",
                name: "req",
                type: "tuple",
            },
            {
                internalType: "bytes",
                name: "signature",
                type: "bytes",
            },
        ],
        name: "execute",
        outputs: [
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "exists",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "key",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "get",
        outputs: [
            {
                internalType: "string",
                name: "value",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "getApproved",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "keyHash",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "getByHash",
        outputs: [
            {
                internalType: "string",
                name: "key",
                type: "string",
            },
            {
                internalType: "string",
                name: "value",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "keyHash",
                type: "uint256",
            },
        ],
        name: "getKey",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256[]",
                name: "hashes",
                type: "uint256[]",
            },
        ],
        name: "getKeys",
        outputs: [
            {
                internalType: "string[]",
                name: "values",
                type: "string[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string[]",
                name: "keys",
                type: "string[]",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "getMany",
        outputs: [
            {
                internalType: "string[]",
                name: "values",
                type: "string[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256[]",
                name: "keyHashes",
                type: "uint256[]",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "getManyByHash",
        outputs: [
            {
                internalType: "string[]",
                name: "keys",
                type: "string[]",
            },
            {
                internalType: "string[]",
                name: "values",
                type: "string[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "mintingManager",
                type: "address",
            },
            {
                internalType: "address",
                name: "cnsRegistry",
                type: "address",
            },
            {
                internalType: "address",
                name: "rootChainManager",
                type: "address",
            },
            {
                internalType: "address",
                name: "childChainManager",
                type: "address",
            },
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "operator",
                type: "address",
            },
        ],
        name: "isApprovedForAll",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "isApprovedOrOwner",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "forwarder",
                type: "address",
            },
        ],
        name: "isTrustedForwarder",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "user",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "mint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "user",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        name: "mint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                internalType: "string",
                name: "uri",
                type: "string",
            },
        ],
        name: "mintTLD",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "string[]",
                name: "labels",
                type: "string[]",
            },
            {
                internalType: "string[]",
                name: "keys",
                type: "string[]",
            },
            {
                internalType: "string[]",
                name: "values",
                type: "string[]",
            },
            {
                internalType: "bool",
                name: "withReverse",
                type: "bool",
            },
        ],
        name: "mintWithRecords",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes[]",
                name: "data",
                type: "bytes[]",
            },
        ],
        name: "multicall",
        outputs: [
            {
                internalType: "bytes[]",
                name: "results",
                type: "bytes[]",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string[]",
                name: "labels",
                type: "string[]",
            },
        ],
        name: "namehash",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "nonceOf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "onERC721Received",
        outputs: [
            {
                internalType: "bytes4",
                name: "",
                type: "bytes4",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "ownerOf",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string[]",
                name: "keys",
                type: "string[]",
            },
            {
                internalType: "string[]",
                name: "values",
                type: "string[]",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "reconfigure",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "removeReverse",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "reset",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "resolverOf",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "addr",
                type: "address",
            },
        ],
        name: "reverseNameOf",
        outputs: [
            {
                internalType: "string",
                name: "reverseUri",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "addr",
                type: "address",
            },
        ],
        name: "reverseOf",
        outputs: [
            {
                internalType: "uint256",
                name: "reverse",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "root",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "key",
                type: "string",
            },
            {
                internalType: "string",
                name: "value",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "set",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "operator",
                type: "address",
            },
            {
                internalType: "bool",
                name: "approved",
                type: "bool",
            },
        ],
        name: "setApprovalForAll",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "keyHash",
                type: "uint256",
            },
            {
                internalType: "string",
                name: "value",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "setByHash",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string[]",
                name: "keys",
                type: "string[]",
            },
            {
                internalType: "string[]",
                name: "values",
                type: "string[]",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "setMany",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256[]",
                name: "keyHashes",
                type: "uint256[]",
            },
            {
                internalType: "string[]",
                name: "values",
                type: "string[]",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "setManyByHash",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "setOwner",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string[]",
                name: "labels",
                type: "string[]",
            },
        ],
        name: "setReverse",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "prefix",
                type: "string",
            },
        ],
        name: "setTokenURIPrefix",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "interfaceId",
                type: "bytes4",
            },
        ],
        name: "supportsInterface",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "symbol",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "tokenURI",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "transferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "string[]",
                name: "labels",
                type: "string[]",
            },
            {
                internalType: "string[]",
                name: "keys",
                type: "string[]",
            },
            {
                internalType: "string[]",
                name: "values",
                type: "string[]",
            },
            {
                internalType: "bool",
                name: "withReverse",
                type: "bool",
            },
        ],
        name: "unlockWithRecords",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "from",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "nonce",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes",
                        name: "data",
                        type: "bytes",
                    },
                ],
                internalType: "struct IForwarder.ForwardRequest",
                name: "req",
                type: "tuple",
            },
            {
                internalType: "bytes",
                name: "signature",
                type: "bytes",
            },
        ],
        name: "verify",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "inputData",
                type: "bytes",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                internalType: "string[]",
                name: "keys",
                type: "string[]",
            },
            {
                internalType: "string[]",
                name: "values",
                type: "string[]",
            },
        ],
        name: "withdrawFromPolygon",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b5061505d806100206000396000f3fe608060405234801561001057600080fd5b50600436106103835760003560e01c806370a08231116101de578063b88d4fde1161010f578063e985e9c5116100ad578063f5c1f76e1161007c578063f5c1f76e14610831578063f7df5c6014610844578063f8c8765e14610857578063ffa1ad741461086a57600080fd5b8063e985e9c5146107d3578063ebf0c7171461080f578063ec129eea14610816578063f25eb5c11461082957600080fd5b8063bebec6b4116100e9578063bebec6b414610787578063c87b56dd1461079a578063ce92b33e146107ad578063cf2c52cb146107c057600080fd5b8063b88d4fde1461074e578063ba5d40b714610761578063bb5b27e11461077457600080fd5b8063a22cb4651161017c578063ab3b87fe11610156578063ab3b87fe146106e7578063ac9650d8146106fa578063b3f9e4cb1461071a578063b85afd281461072d57600080fd5b8063a22cb46514610695578063a3f4df7e146106a8578063a4247400146106d457600080fd5b80639508b1c4116101b85780639508b1c41461065f5780639559c0bd1461067257806395d89b411461067a57806399e0dd7c1461068257600080fd5b806370a08231146106265780637e37479e1461063957806394d008ef1461064c57600080fd5b806342842e0e116102b85780635096023911610256578063638e5c7811610230578063638e5c78146105be578063663f7b2a146105d1578063672b9f81146105e45780636ccbae5f1461060557600080fd5b8063509602391461057c578063572b6c051461058f5780636352211e146105ab57600080fd5b806347c816991161029257806347c81699146105305780634a72584d146105435780634f558e791461055657806350382c1a1461056957600080fd5b806342842e0e146104f757806342966c681461050a578063430c20811461051d57600080fd5b80631bf7e13e11610325578063276fabb1116102ff578063276fabb11461049d57806327f18975146104be578063310bd74b146104d157806340c10f19146104e457600080fd5b80631bf7e13e146104645780631f71be061461047757806323b872dd1461048a57600080fd5b8063095ea7b311610361578063095ea7b3146103f0578063150b7a02146104055780631bd8cc1a146104315780631be5e7ed1461045157600080fd5b806301ffc9a71461038857806306fdde03146103b0578063081812fc146103c5575b600080fd5b61039b6103963660046145df565b61088e565b60405190151581526020015b60405180910390f35b6103b861089f565b6040516103a79190614b6a565b6103d86103d336600461480d565b610931565b6040516001600160a01b0390911681526020016103a7565b6104036103fe36600461435a565b610958565b005b61041861041336600461414c565b610971565b6040516001600160e01b031990911681526020016103a7565b61044461043f36600461448d565b610acc565b6040516103a79190614b05565b6103b861045f366004614747565b610bec565b6103b86104723660046147ae565b610c37565b610403610485366004614225565b610d42565b61040361049836600461410c565b610de9565b6104b06104ab3660046143de565b610e3c565b6040519081526020016103a7565b6104036104cc36600461441d565b610e4b565b6104036104df36600461480d565b610e93565b6104036104f236600461435a565b610ece565b61040361050536600461410c565b610f1b565b61040361051836600461480d565b610f36565b61039b61052b36600461435a565b610f7a565b61040361053e3660046146e9565b610f86565b610403610551366004614855565b610fc5565b61039b61056436600461480d565b61100b565b61040361057736600461477c565b61102a565b61040361058a366004614041565b611060565b61039b61059d366004614041565b6001600160a01b0316301490565b6103d86105b936600461480d565b6110c0565b6104036105cc36600461480d565b611120565b6104036105df3660046144d6565b61116b565b6105f76105f23660046148a5565b6111a4565b6040516103a7929190614b7d565b6104b061061336600461480d565b6000908152610100602052604090205490565b6104b0610634366004614041565b6111bc565b6104b0610647366004614041565b611242565b61040361065a366004614385565b611273565b61040361066d366004614617565b6112c2565b6104b0601481565b6103b8611349565b6104036106903660046146b6565b611358565b6104036106a33660046142dd565b6113de565b6103b86040518060400160405280600d81526020016c554e533a20526567697374727960981b81525081565b61039b6106e23660046147ae565b6113f0565b6104036106f536600461435a565b61143b565b61070d6107083660046143de565b611480565b6040516103a79190614aa4565b6103d861072836600461480d565b611579565b61074061073b36600461448d565b6115a3565b6040516103a7929190614b18565b61040361075c3660046141bc565b61170b565b61040361076f366004614225565b611752565b6103b861078236600461480d565b6117c3565b6103b8610795366004614041565b611865565b6103b86107a836600461480d565b61192f565b6104036107bb36600461441d565b611995565b6104036107ce366004614308565b6119d4565b61039b6107e1366004614079565b6001600160a01b039182166000908152606a6020908152604080832093909416825291909152205460ff1690565b60006104b0565b61040361082436600461441d565b611ab1565b610403611af0565b61044461083f3660046143de565b611b76565b610403610852366004614825565b611c53565b6104036108653660046140b1565b611ce4565b6103b8604051806040016040528060058152602001640302e382e360dc1b81525081565b600061089982611eba565b92915050565b6060606580546108ae90614f38565b80601f01602080910402602001604051908101604052809291908181526020018280546108da90614f38565b80156109275780601f106108fc57610100808354040283529160200191610927565b820191906000526020600020905b81548152906001019060200180831161090a57829003601f168201915b5050505050905090565b600061093c82611f0a565b506000908152606960205260409020546001600160a01b031690565b8061096281611f69565b61096c8383611fd0565b505050565b60007f8ffb960699dc2ba88f34d0e41c029c3c36c95149679fe1d0153a9582bec92378546001600160a01b03166109a66120f3565b6001600160a01b03161415610a68576109bd6120f3565b6001600160a01b03166342966c68856040518263ffffffff1660e01b81526004016109ea91815260200190565b600060405180830381600087803b158015610a0457600080fd5b505af1158015610a18573d6000803e3d6000fd5b505050821580159150610a325750610a32828401846145ad565b15610a5057610a413085612102565b610a4b8585612250565b610a5a565b610a5a8585612102565b50630a85bd0160e11b610ac3565b60405162461bcd60e51b815260206004820152602560248201527f52656769737472793a204552433732315f524543454956494e475f50524f4849604482015264109255115160da1b60648201526084015b60405180910390fd5b95945050505050565b6060826001600160401b03811115610af457634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610b2757816020015b6060815260200190600190039081610b125790505b50905060005b83811015610be457610ba6858583818110610b5857634e487b7160e01b600052603260045260246000fd5b9050602002810190610b6a9190614d11565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508792506122fb915050565b828281518110610bc657634e487b7160e01b600052603260045260246000fd5b60200260200101819052508080610bdc90614f6d565b915050610b2d565b509392505050565b6060610c2f84848080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508692506122fb915050565b949350505050565b606060005a9050610c498585856113f0565b610ca55760405162461bcd60e51b815260206004820152602760248201527f554e535265676973747279466f727761726465723a205349474e41545552455f6044820152661253959053125160ca1b6064820152608401610aba565b610d37610cb56020870187614041565b30604088013584610cc960608b018b614d11565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8e018190048102820181019092528c815292508c91508b908190840183828082843760009201919091525061233092505050565b9150505b9392505050565b610134546001600160a01b0316610d576120f3565b6001600160a01b031614610d7d5760405162461bcd60e51b8152600401610aba90614c3d565b6000610d91610d8c888a614e60565b61241f565b9050610d9c8161247c565b610daf610da8826110c0565b8a836124e9565b610dbc8686868685612690565b8115610dde57610dde8982610dd9610dd48b8d614e60565b61271a565b6127b7565b505050505050505050565b80610dfb610df56120f3565b826127f9565b610e175760405162461bcd60e51b8152600401610aba90614ba2565b81610e2181611f69565b610e2a8361247c565b610e358585856124e9565b5050505050565b6000610d3b610d8c8385614e60565b80610e57610df56120f3565b610e735760405162461bcd60e51b8152600401610aba90614ba2565b81610e7d81611f69565b610e8a8787878787612877565b50505050505050565b80610e9f610df56120f3565b610ebb5760405162461bcd60e51b8152600401610aba90614ba2565b81610ec581611f69565b61096c8361247c565b610ed66128f6565b6001600160a01b0316610ee76120f3565b6001600160a01b031614610f0d5760405162461bcd60e51b8152600401610aba90614ccf565b610f178282612102565b5050565b61096c8383836040518060200160405280600081525061170b565b80610f42610df56120f3565b610f5e5760405162461bcd60e51b8152600401610aba90614ba2565b81610f6881611f69565b610f718361247c565b61096c83612a09565b6000610d3b83836127f9565b80610f92610df56120f3565b610fae5760405162461bcd60e51b8152600401610aba90614ba2565b81610fb881611f69565b610e8a8787878787612ab0565b80610fd1610df56120f3565b610fed5760405162461bcd60e51b8152600401610aba90614ba2565b81610ff781611f69565b61100386868686612b8f565b505050505050565b6000818152606760205260408120546001600160a01b03161515610899565b61105d8160405160200161103e919061496f565b6040516020818303038152906040528051906020012060001c82612c2f565b50565b610134546001600160a01b03166110756120f3565b6001600160a01b03161461109b5760405162461bcd60e51b8152600401610aba90614c3d565b6001600160a01b0316600090815261013660205260409020805460ff19166001179055565b6000818152606760205260408120546001600160a01b0316806108995760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606401610aba565b8061112c610df56120f3565b6111485760405162461bcd60e51b8152600401610aba90614ba2565b61115a6111536120f3565b30846124e9565b610f176111656120f3565b83612250565b60006111768261241f565b905061118181612c5b565b61118a81611f69565b610f176111956120f3565b8261119f8561271a565b612ccb565b6060806111b18484612d58565b909590945092505050565b60006001600160a01b0382166112265760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b6064820152608401610aba565b506001600160a01b031660009081526068602052604090205490565b6001600160a01b0381166000908152610135602052604081205461126581612d79565b61126d578091505b50919050565b61127b6128f6565b6001600160a01b031661128c6120f3565b6001600160a01b0316146112b25760405162461bcd60e51b8152600401610aba90614ccf565b6112bc8484612102565b50505050565b6112cc8787612dc3565b6112d46120f3565b6001600160a01b03166112e6866110c0565b6001600160a01b03161461133c5760405162461bcd60e51b815260206004820152601d60248201527f52656769737472793a2053454e4445525f49535f4e4f545f4f574e45520000006044820152606401610aba565b610e8a8484848489612690565b6060606680546108ae90614f38565b610134546001600160a01b031661136d6120f3565b6001600160a01b0316146113935760405162461bcd60e51b8152600401610aba90614c3d565b6113a06101338383613db9565b507f4b120d6a959a84a520fa48f5f937cca0e79129423487af7901213b5d2e89313b82826040516113d2929190614b56565b60405180910390a15050565b610f176113e96120f3565b8383612e32565b6000610c2f6113fe85614e6d565b3085858080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250612f0192505050565b80611447610df56120f3565b6114635760405162461bcd60e51b8152600401610aba90614ba2565b8161146d81611f69565b6112bc611479846110c0565b85856124e9565b6060600061148e8385614deb565b9050303314156115705760005b8381101561156e576115306114ae6120f3565b6114b6613059565b8787858181106114d657634e487b7160e01b600052603260045260246000fd5b90506020028101906114e89190614d11565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201829052506040805160208101909152908152925061306e915050565b82828151811061155057634e487b7160e01b600052603260045260246000fd5b6020026020010181905250808061156690614f6d565b91505061149b565b505b610c2f8161309e565b6000818152606760205260408120546001600160a01b031661159c576000610899565b3092915050565b606080836001600160401b038111156115cc57634e487b7160e01b600052604160045260246000fd5b6040519080825280602002602001820160405280156115ff57816020015b60608152602001906001900390816115ea5790505b509150836001600160401b0381111561162857634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561165b57816020015b60608152602001906001900390816116465790505b50905060005b848110156117025761169986868381811061168c57634e487b7160e01b600052603260045260246000fd5b9050602002013585612d58565b8483815181106116b957634e487b7160e01b600052603260045260246000fd5b602002602001018484815181106116e057634e487b7160e01b600052603260045260246000fd5b60200260200101829052829052505080806116fa90614f6d565b915050611661565b50935093915050565b81611717610df56120f3565b6117335760405162461bcd60e51b8152600401610aba90614ba2565b8261173d81611f69565b6117468461247c565b611003868686866131f3565b610134546001600160a01b03166117676120f3565b6001600160a01b03161461178d5760405162461bcd60e51b8152600401610aba90614c3d565b600061179c610d8c888a614e60565b90506117b689826117b0610dd48b8d614e60565b85613226565b610dde8686868685612690565b600081815260c9602052604090208054606091906117e090614f38565b80601f016020809104026020016040519081016040528092919081815260200182805461180c90614f38565b80156118595780601f1061182e57610100808354040283529160200191611859565b820191906000526020600020905b81548152906001019060200180831161183c57829003601f168201915b50505050509050919050565b6001600160a01b0381166000908152610135602052604090205460609061188b81612d79565b61126d5760008181526101386020526040902080546118a990614f38565b80601f01602080910402602001604051908101604052809291908181526020018280546118d590614f38565b80156119225780601f106118f757610100808354040283529160200191611922565b820191906000526020600020905b81548152906001019060200180831161190557829003601f168201915b5050505050915050919050565b606061193a82611f0a565b6000611944613279565b905060008151116119645760405180602001604052806000815250610d3b565b8061196e84613289565b60405160200161197f929190614a16565b6040516020818303038152906040529392505050565b806119a1610df56120f3565b6119bd5760405162461bcd60e51b8152600401610aba90614ba2565b816119c781611f69565b610e8a8787878787612690565b7f8bea9a6f8afd34f4e29c585f854e0cc5161431bf5fc299d468454d33dce53b87546001600160a01b0316611a076120f3565b6001600160a01b031614611a2d5760405162461bcd60e51b8152600401610aba90614ccf565b6020811415611a50576000611a448284018461480d565b90506112bc8482612102565b6000611a5e8284018461451b565b805190915060005b8181101561100357611a9f86848381518110611a9257634e487b7160e01b600052603260045260246000fd5b6020026020010151612102565b80611aa981614f6d565b915050611a66565b80611abd610df56120f3565b611ad95760405162461bcd60e51b8152600401610aba90614ba2565b81611ae381611f69565b610e8a87878787876133a2565b6000611afa6120f3565b6001600160a01b03811660009081526101356020526040902054909150611b6d5760405162461bcd60e51b815260206004820152602160248201527f52656769737472793a20524556455253455f5245434f52445f49535f454d50546044820152605960f81b6064820152608401610aba565b61105d816133b8565b6060816001600160401b03811115611b9e57634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015611bd157816020015b6060815260200190600190039081611bbc5790505b50905060005b82811015611c4c57611c0e848483818110611c0257634e487b7160e01b600052603260045260246000fd5b905060200201356117c3565b828281518110611c2e57634e487b7160e01b600052603260045260246000fd5b60200260200101819052508080611c4490614f6d565b915050611bd7565b5092915050565b610134546001600160a01b0316611c686120f3565b6001600160a01b031614611c8e5760405162461bcd60e51b8152600401610aba90614c3d565b61013454611ca5906001600160a01b031684612102565b827fc5beef08f693b11c316c0c8394a377a0033c9cf701b8cd8afd79cecef60c39528383604051611cd7929190614b56565b60405180910390a2505050565b600054610100900460ff1615808015611d045750600054600160ff909116105b80611d1e5750303b158015611d1e575060005460ff166001145b611d815760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610aba565b6000805460ff191660011790558015611da4576000805461ff0019166101001790555b61013480546001600160a01b0319166001600160a01b038716179055837f8ffb960699dc2ba88f34d0e41c029c3c36c95149679fe1d0153a9582bec9237880546001600160a01b0319166001600160a01b03929092169190911790556040805180820182526013815272556e73746f707061626c6520446f6d61696e7360681b60208083019190915282518084019093526002835261155160f21b90830152611e4c916133fd565b611e5461344b565b611e5c61344b565b611e6583613474565b611e6e826134a4565b8015610e35576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050505050565b60006001600160e01b031982166380ac58cd60e01b1480611eeb57506001600160e01b03198216635b5e139f60e01b145b8061089957506301ffc9a760e01b6001600160e01b0319831614610899565b6000818152606760205260409020546001600160a01b031661105d5760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606401610aba565b30331415611fc757611f79613059565b811461105d5760405162461bcd60e51b815260206004820152601760248201527f52656769737472793a20544f4b454e5f494e56414c49440000000000000000006044820152606401610aba565b61105d816134d4565b6000611fdb826110c0565b9050806001600160a01b0316836001600160a01b031614156120495760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152608401610aba565b806001600160a01b031661205b6120f3565b6001600160a01b031614806120775750612077816107e16120f3565b6120e95760405162461bcd60e51b815260206004820152603e60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c00006064820152608401610aba565b61096c8383613502565b60006120fd613570565b905090565b6001600160a01b0382166121585760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610aba565b6000818152606760205260409020546001600160a01b0316156121bd5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610aba565b6121c96000838361358c565b6001600160a01b03821660009081526068602052604081208054600192906121f2908490614da8565b909155505060008181526067602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b600061225a6128f6565b90506122668183613502565b60008051602061500a83398151915254604080516020808201869052825180830390910181528183019283905263e3dec8fb60e01b9092526001600160a01b0390921691829163e3dec8fb916122c3918891309190604401614a45565b600060405180830381600087803b1580156122dd57600080fd5b505af11580156122f1573d6000803e3d6000fd5b5050505050505050565b6060610d3b83604051602001612311919061496f565b6040516020818303038152906040528051906020012060001c83613629565b606061233b856134d4565b600080876001600160a01b0316866123558b8a898961306e565b604051612362919061496f565b60006040518083038160008787f1925050503d80600081146123a0576040519150601f19603f3d011682016040523d82523d6000602084013e6123a5565b606091505b5090925090506123b6603f87614dc0565b5a116123d257634e487b7160e01b600052600160045260246000fd5b61241282826040518060400160405280601a81526020017f42617365466f727761726465723a2043414c4c5f4641494c454400000000000081525061370b565b9998505050505050505050565b805160009081905b8015611c4c57612468828561243d600185614dd4565b8151811061245b57634e487b7160e01b600052603260045260246000fd5b6020026020010151613744565b91508061247481614f21565b915050612427565b612485816137f1565b60405160200161249791815260200190565b60408051601f198184030181528282528051602091820120600085815260cb9092529181209190915582917f185c30856dadb58bf097c1f665a52ada7029752dbcad008ea3fefc73bee8c9fe9190a250565b826001600160a01b03166124fc826110c0565b6001600160a01b0316146125605760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b6064820152608401610aba565b6001600160a01b0382166125c25760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610aba565b6125cd83838361358c565b6125d8600082613502565b6001600160a01b0383166000908152606860205260408120805460019290612601908490614dd4565b90915550506001600160a01b038216600090815260686020526040812080546001929061262f908490614da8565b909155505060008181526067602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b60005b84811015611003576127088686838181106126be57634e487b7160e01b600052603260045260246000fd5b90506020028101906126d09190614d11565b8686858181106126f057634e487b7160e01b600052603260045260246000fd5b90506020028101906127029190614d11565b86612ab0565b8061271281614f6d565b915050612693565b606060008260008151811061273f57634e487b7160e01b600052603260045260246000fd5b602002602001015190506000600190505b8351811015611c4c578184828151811061277a57634e487b7160e01b600052603260045260246000fd5b60200260200101516040516020016127939291906149ca565b604051602081830303815290604052915080806127af90614f6d565b915050612750565b61dead6001600160a01b038416148015906127e957506001600160a01b03831660009081526101356020526040902054155b1561096c5761096c838383612ccb565b600080612805836110c0565b9050806001600160a01b0316846001600160a01b0316148061284c57506001600160a01b038082166000908152606a602090815260408083209388168352929052205460ff165b80610c2f5750836001600160a01b031661286584610931565b6001600160a01b031614949350505050565b60005b84811015611003576128e48686838181106128a557634e487b7160e01b600052603260045260246000fd5b905060200201358585848181106128cc57634e487b7160e01b600052603260045260246000fd5b90506020028101906128de9190614d11565b85612b8f565b806128ee81614f6d565b91505061287a565b60008060008051602061500a8339815191525460405163721804d360e11b81523060048201526001600160a01b039091169150600090829063e43009a69060240160206040518083038186803b15801561294f57600080fd5b505afa158015612963573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061298791906145c7565b60405163e66f960360e01b8152600481018290529091506001600160a01b0383169063e66f96039060240160206040518083038186803b1580156129ca57600080fd5b505afa1580156129de573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a02919061405d565b9250505090565b6000612a14826110c0565b9050612a228160008461358c565b612a2d600083613502565b6001600160a01b0381166000908152606860205260408120805460019290612a56908490614dd4565b909155505060008281526067602052604080822080546001600160a01b0319169055518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b60008585604051602001612ac5929190614a06565b60408051601f198184030181528282528051602091820120601f8901829004820284018201909252878352909250612b199183918990899081908401838280828437600092019190915250612c2f92505050565b6110038187878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8b01819004810282018101909252898152925089915088908190840183828082843760009201919091525088925061381d915050565b612b9884613958565b612be45760405162461bcd60e51b815260206004820152601c60248201527f5265636f726453746f726167653a204b45595f4e4f545f464f554e44000000006044820152606401610aba565b6112bc84612bf1866117c3565b85858080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525087925061381d915050565b612c3882613958565b610f1757600082815260c960209081526040909120825161096c92840190613e39565b612c636120f3565b6001600160a01b0316612c75826110c0565b6001600160a01b03161461105d5760405162461bcd60e51b815260206004820152601d60248201527f52656769737472793a2053454e4445525f49535f4e4f545f4f574e45520000006044820152606401610aba565b6000828152610138602052604090208054612ce590614f38565b15159050612d0f576000828152610138602090815260409091208251612d0d92840190613e39565b505b6001600160a01b03831660008181526101356020526040808220859055518492917feb76a21470988c474a21f690cc28fee1ed511bd812dc3c21fd0f49c5e5d4708a91a3505050565b606080612d64846117c3565b9150612d708484613629565b90509250929050565b6000818152610137602052604081205460ff16801561089957506101366000612da06120f3565b6001600160a01b0316815260208101919091526040016000205460ff1692915050565b60008051602061500a83398151915254604051633805550f60e01b81526001600160a01b03909116908190633805550f90612e049086908690600401614b56565b600060405180830381600087803b158015612e1e57600080fd5b505af1158015610e8a573d6000803e3d6000fd5b816001600160a01b0316836001600160a01b03161415612e945760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610aba565b6001600160a01b038381166000818152606a6020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6040838101519051636ccbae5f60e01b8152600481019190915260009081903090636ccbae5f9060240160206040518083038186803b158015612f4357600080fd5b505afa158015612f57573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612f7b91906145c7565b90506000613029866060015180519060200120868860200151604051602001612fc99392919092835260609190911b6bffffffffffffffffffffffff19166020830152603482015260540190565b60408051601f1981840301815282825280516020918201207f19457468657265756d205369676e6564204d6573736167653a0a33320000000084830152603c8085019190915282518085039091018152605c909301909152815191012090565b905081866020015114801561304f5750855161304f906001600160a01b0316828661397e565b9695505050505050565b60003033141561306b5750601f193601355b90565b60608285856040516020016130859392919061498b565b6040516020818303038152906040529050949350505050565b606081516001600160401b038111156130c757634e487b7160e01b600052604160045260246000fd5b6040519080825280602002602001820160405280156130fa57816020015b60608152602001906001900390816130e55790505b50905060005b825181101561126d57600080306001600160a01b031685848151811061313657634e487b7160e01b600052603260045260246000fd5b602002602001015160405161314b919061496f565b600060405180830381855af49150503d8060008114613186576040519150601f19603f3d011682016040523d82523d6000602084013e61318b565b606091505b50915091506131b3828260405180606001604052806027815260200161502a6027913961370b565b8484815181106131d357634e487b7160e01b600052603260045260246000fd5b6020026020010181905250505080806131eb90614f6d565b915050613100565b6131fe8484846124e9565b61320a84848484613ace565b6112bc5760405162461bcd60e51b8152600401610aba90614beb565b6132308484612102565b827fc5beef08f693b11c316c0c8394a377a0033c9cf701b8cd8afd79cecef60c3952836040516132609190614b6a565b60405180910390a280156112bc576112bc8484846127b7565b606061013380546108ae90614f38565b6060816132ad5750506040805180820190915260018152600360fc1b602082015290565b8160005b81156132d757806132c181614f6d565b91506132d09050600a83614dc0565b91506132b1565b6000816001600160401b038111156132ff57634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015613329576020820181803683370190505b5090505b8415610c2f5761333e600183614dd4565b915061334b600a86614f88565b613356906030614da8565b60f81b81838151811061337957634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535061339b600a86614dc0565b945061332d565b6133ab8161247c565b610e358585858585612690565b6001600160a01b03811660008181526101356020526040808220829055517ffcf5eec0cfa3e6332f5f0e63ec242d71f866a61d121d6cdf5c2eb3b668a26c4f9190a250565b600054610100900460ff166134245760405162461bcd60e51b8152600401610aba90614c84565b8151613437906065906020850190613e39565b50805161096c906066906020840190613e39565b600054610100900460ff166134725760405162461bcd60e51b8152600401610aba90614c84565b565b600054610100900460ff1661349b5760405162461bcd60e51b8152600401610aba90614c84565b61105d81613bdf565b600054610100900460ff166134cb5760405162461bcd60e51b8152600401610aba90614c84565b61105d81613c38565b600081815261010060205260409020546134ef906001614da8565b6000918252610100602052604090912055565b600081815260696020526040902080546001600160a01b0319166001600160a01b0384169081179091558190613537826110c0565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600030331415613587575060331936013560601c90565b503390565b6000818152610137602052604090205460ff1615806135b357506001600160a01b03821615155b6135ff5760405162461bcd60e51b815260206004820152601860248201527f52656769737472793a20544f4b454e5f555047524144454400000000000000006044820152606401610aba565b6001600160a01b0383166000908152610135602052604090205481141561096c5761096c836133b8565b606061363482612d79565b1561364e5750604080516020810190915260008152610899565b60ca600061365b846137f1565b81526020019081526020016000206000848152602001908152602001600020805461368590614f38565b80601f01602080910402602001604051908101604052809291908181526020018280546136b190614f38565b80156136fe5780601f106136d3576101008083540402835291602001916136fe565b820191906000526020600020905b8154815290600101906020018083116136e157829003601f168201915b5050505050905092915050565b6060831561371a575081610d3b565b82511561372a5782518084602001fd5b8160405162461bcd60e51b8152600401610aba9190614b6a565b60008151600014156137905760405162461bcd60e51b815260206004820152601560248201527452656769737472793a204c4142454c5f454d50545960581b6044820152606401610aba565b82826040516020016137a2919061496f565b604051602081830303815290604052805190602001206040516020016137d2929190918252602082015260400190565b60408051601f1981840301815291905280516020909101209392505050565b600081815260cb60205260408120541561381957600082815260cb6020526040902054610899565b5090565b60ca600061382a836137f1565b81526020019081526020016000206000858152602001908152602001600020805461385490614f38565b151590506138ab578260405161386a919061496f565b6040518091039020817f7ae4f661958fbecc2f77be6b0eb280d2a6f604b29e1e7221c82b9da0c4af7f86856040516138a29190614b6a565b60405180910390a35b8160ca60006138b9846137f1565b8152602001908152602001600020600086815260200190815260200160002090805190602001906138eb929190613e39565b50816040516138fa919061496f565b604051809103902083604051613910919061496f565b6040518091039020827f851ffe8e74d5015261dba0a1f9e1b0e5d42c5af5d2ad1908fee897c7d80a0d92868660405161394a929190614b7d565b60405180910390a450505050565b600081815260c960205260408120805482919061397490614f38565b9050119050919050565b600080600061398d8585613c86565b909250905060008160048111156139b457634e487b7160e01b600052602160045260246000fd5b1480156139d25750856001600160a01b0316826001600160a01b0316145b156139e257600192505050610d3b565b600080876001600160a01b0316631626ba7e60e01b8888604051602401613a0a929190614b3d565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909416939093179092529051613a48919061496f565b600060405180830381855afa9150503d8060008114613a83576040519150601f19603f3d011682016040523d82523d6000602084013e613a88565b606091505b5091509150818015613a9b575080516020145b8015613ac257508051630b135d3f60e11b90613ac090830160209081019084016145c7565b145b98975050505050505050565b60006001600160a01b0384163b15613bd757836001600160a01b031663150b7a02613af76120f3565b8786866040518563ffffffff1660e01b8152600401613b199493929190614a71565b602060405180830381600087803b158015613b3357600080fd5b505af1925050508015613b63575060408051601f3d908101601f19168201909252613b60918101906145fb565b60015b613bbd573d808015613b91576040519150601f19603f3d011682016040523d82523d6000602084013e613b96565b606091505b508051613bb55760405162461bcd60e51b8152600401610aba90614beb565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610c2f565b506001610c2f565b600054610100900460ff16613c065760405162461bcd60e51b8152600401610aba90614c84565b8060008051602061500a8339815191525b80546001600160a01b0319166001600160a01b039290921691909117905550565b600054610100900460ff16613c5f5760405162461bcd60e51b8152600401610aba90614c84565b807f8bea9a6f8afd34f4e29c585f854e0cc5161431bf5fc299d468454d33dce53b87613c17565b600080825160411415613cbd5760208301516040840151606085015160001a613cb187828585613ccc565b94509450505050613cc5565b506000905060025b9250929050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115613d035750600090506003613db0565b8460ff16601b14158015613d1b57508460ff16601c14155b15613d2c5750600090506004613db0565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015613d80573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116613da957600060019250925050613db0565b9150600090505b94509492505050565b828054613dc590614f38565b90600052602060002090601f016020900481019282613de75760008555613e2d565b82601f10613e005782800160ff19823516178555613e2d565b82800160010185558215613e2d579182015b82811115613e2d578235825591602001919060010190613e12565b50613819929150613ead565b828054613e4590614f38565b90600052602060002090601f016020900481019282613e675760008555613e2d565b82601f10613e8057805160ff1916838001178555613e2d565b82800160010185558215613e2d579182015b82811115613e2d578251825591602001919060010190613e92565b5b808211156138195760008155600101613eae565b6000613ed5613ed084614d85565b614d55565b9050808382526020808301915083868660051b86011115613ef557600080fd5b6000805b87811015613f355782356001600160401b03811115613f16578283fd5b613f228a828a01613fd7565b8652509383019391830191600101613ef9565b50505050509392505050565b60008083601f840112613f52578182fd5b5081356001600160401b03811115613f68578182fd5b6020830191508360208260051b8501011115613cc557600080fd5b80358015158114613f9357600080fd5b919050565b60008083601f840112613fa9578182fd5b5081356001600160401b03811115613fbf578182fd5b602083019150836020828501011115613cc557600080fd5b600082601f830112613fe7578081fd5b81356001600160401b0381111561400057614000614fc8565b614013601f8201601f1916602001614d55565b818152846020838601011115614027578283fd5b816020850160208301379081016020019190915292915050565b600060208284031215614052578081fd5b8135610d3b81614fde565b60006020828403121561406e578081fd5b8151610d3b81614fde565b6000806040838503121561408b578081fd5b823561409681614fde565b915060208301356140a681614fde565b809150509250929050565b600080600080608085870312156140c6578182fd5b84356140d181614fde565b935060208501356140e181614fde565b925060408501356140f181614fde565b9150606085013561410181614fde565b939692955090935050565b600080600060608486031215614120578081fd5b833561412b81614fde565b9250602084013561413b81614fde565b929592945050506040919091013590565b600080600080600060808688031215614163578283fd5b853561416e81614fde565b9450602086013561417e81614fde565b93506040860135925060608601356001600160401b0381111561419f578182fd5b6141ab88828901613f98565b969995985093965092949392505050565b600080600080608085870312156141d1578182fd5b84356141dc81614fde565b935060208501356141ec81614fde565b92506040850135915060608501356001600160401b0381111561420d578182fd5b61421987828801613fd7565b91505092959194509250565b60008060008060008060008060a0898b031215614240578586fd5b883561424b81614fde565b975060208901356001600160401b0380821115614266578788fd5b6142728c838d01613f41565b909950975060408b013591508082111561428a578485fd5b6142968c838d01613f41565b909750955060608b01359150808211156142ae578485fd5b506142bb8b828c01613f41565b90945092506142ce905060808a01613f83565b90509295985092959890939650565b600080604083850312156142ef578182fd5b82356142fa81614fde565b9150612d7060208401613f83565b60008060006040848603121561431c578081fd5b833561432781614fde565b925060208401356001600160401b03811115614341578182fd5b61434d86828701613f98565b9497909650939450505050565b6000806040838503121561436c578182fd5b823561437781614fde565b946020939093013593505050565b6000806000806060858703121561439a578182fd5b84356143a581614fde565b93506020850135925060408501356001600160401b038111156143c6578283fd5b6143d287828801613f98565b95989497509550505050565b600080602083850312156143f0578182fd5b82356001600160401b03811115614405578283fd5b61441185828601613f41565b90969095509350505050565b600080600080600060608688031215614434578283fd5b85356001600160401b038082111561444a578485fd5b61445689838a01613f41565b9097509550602088013591508082111561446e578485fd5b5061447b88828901613f41565b96999598509660400135949350505050565b6000806000604084860312156144a1578081fd5b83356001600160401b038111156144b6578182fd5b6144c286828701613f41565b909790965060209590950135949350505050565b6000602082840312156144e7578081fd5b81356001600160401b038111156144fc578182fd5b8201601f8101841361450c578182fd5b610c2f84823560208401613ec2565b6000602080838503121561452d578182fd5b82356001600160401b03811115614542578283fd5b8301601f81018513614552578283fd5b8035614560613ed082614d85565b80828252848201915084840188868560051b870101111561457f578687fd5b8694505b838510156145a1578035835260019490940193918501918501614583565b50979650505050505050565b6000602082840312156145be578081fd5b610d3b82613f83565b6000602082840312156145d8578081fd5b5051919050565b6000602082840312156145f0578081fd5b8135610d3b81614ff3565b60006020828403121561460c578081fd5b8151610d3b81614ff3565b60008060008060008060006080888a031215614631578081fd5b87356001600160401b0380821115614647578283fd5b6146538b838c01613f98565b909950975060208a0135965060408a0135915080821115614672578283fd5b61467e8b838c01613f41565b909650945060608a0135915080821115614696578283fd5b506146a38a828b01613f41565b989b979a50959850939692959293505050565b600080602083850312156146c8578182fd5b82356001600160401b038111156146dd578283fd5b61441185828601613f98565b600080600080600060608688031215614700578283fd5b85356001600160401b0380821115614716578485fd5b61472289838a01613f98565b9097509550602088013591508082111561473a578485fd5b5061447b88828901613f98565b60008060006040848603121561475b578081fd5b83356001600160401b03811115614770578182fd5b6144c286828701613f98565b60006020828403121561478d578081fd5b81356001600160401b038111156147a2578182fd5b610c2f84828501613fd7565b6000806000604084860312156147c2578081fd5b83356001600160401b03808211156147d8578283fd5b90850190608082880312156147eb578283fd5b90935060208501359080821115614800578283fd5b5061434d86828701613f98565b60006020828403121561481e578081fd5b5035919050565b600080600060408486031215614839578081fd5b8335925060208401356001600160401b03811115614341578182fd5b6000806000806060858703121561486a578182fd5b8435935060208501356001600160401b03811115614886578283fd5b61489287828801613f98565b9598909750949560400135949350505050565b600080604083850312156148b7578182fd5b50508035926020909101359150565b600081518084526020808501808196508360051b81019150828601855b8581101561490d5782840389526148fb848351614943565b988501989350908401906001016148e3565b5091979650505050505050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b6000815180845261495b816020860160208601614ef5565b601f01601f19169290920160200192915050565b60008251614981818460208701614ef5565b9190910192915050565b6000845161499d818460208901614ef5565b60609490941b6bffffffffffffffffffffffff191691909301908152601481019190915260340192915050565b600083516149dc818460208801614ef5565b601760f91b90830190815283516149fa816001840160208801614ef5565b01600101949350505050565b8183823760009101908152919050565b60008351614a28818460208801614ef5565b835190830190614a3c818360208801614ef5565b01949350505050565b6001600160a01b03848116825283166020820152606060408201819052600090610ac390830184614943565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061304f90830184614943565b6000602080830181845280855180835260408601915060408160051b8701019250838701855b82811015614af857603f19888603018452614ae6858351614943565b94509285019290850190600101614aca565b5092979650505050505050565b602081526000610d3b60208301846148c6565b604081526000614b2b60408301856148c6565b8281036020840152610d3781856148c6565b828152604060208201526000610c2f6040830184614943565b602081526000610c2f60208301848661491a565b602081526000610d3b6020830184614943565b604081526000614b906040830185614943565b8281036020840152610d378185614943565b60208082526029908201527f52656769737472793a2053454e4445525f49535f4e4f545f415050524f5645446040820152682fa7a92fa7aba722a960b91b606082015260800190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b60208082526027908201527f52656769737472793a2053454e4445525f49535f4e4f545f4d494e54494e475f60408201526626a0a720a3a2a960c91b606082015260800190565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b60208082526022908201527f52656769737472793a20494e53554646494349454e545f5045524d495353494f6040820152614e5360f01b606082015260800190565b6000808335601e19843603018112614d27578283fd5b8301803591506001600160401b03821115614d40578283fd5b602001915036819003821315613cc557600080fd5b604051601f8201601f191681016001600160401b0381118282101715614d7d57614d7d614fc8565b604052919050565b60006001600160401b03821115614d9e57614d9e614fc8565b5060051b60200190565b60008219821115614dbb57614dbb614f9c565b500190565b600082614dcf57614dcf614fb2565b500490565b600082821015614de657614de6614f9c565b500390565b6000614df9613ed084614d85565b808482526020808301925084368760051b87011115614e16578485fd5b845b87811015614e545781356001600160401b03811115614e35578687fd5b614e4136828a01613fd7565b8652509382019390820190600101614e18565b50919695505050505050565b6000610d3b368484613ec2565b600060808236031215614e7e578081fd5b604051608081016001600160401b038282108183111715614ea157614ea1614fc8565b8160405284359150614eb282614fde565b81835260208501356020840152604085013560408401526060850135915080821115614edc578384fd5b50614ee936828601613fd7565b60608301525092915050565b60005b83811015614f10578181015183820152602001614ef8565b838111156112bc5750506000910152565b600081614f3057614f30614f9c565b506000190190565b600181811c90821680614f4c57607f821691505b6020821081141561126d57634e487b7160e01b600052602260045260246000fd5b6000600019821415614f8157614f81614f9c565b5060010190565b600082614f9757614f97614fb2565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461105d57600080fd5b6001600160e01b03198116811461105d57600080fdfebe2bb46ac0377341a1ec5c3116d70fd5029d704bd46292e58f6265dd177ebafe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a164736f6c6343000804000a";
const isSuperArgs = (xs) => xs.length > 1;
class UNSRegistry__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.UNSRegistry__factory = UNSRegistry__factory;
UNSRegistry__factory.bytecode = _bytecode;
UNSRegistry__factory.abi = _abi;
