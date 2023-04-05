"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UNSRegistryMock__factory = void 0;
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
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "getTokenName",
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
                internalType: "uint256[]",
                name: "tokenIds",
                type: "uint256[]",
            },
        ],
        name: "upgradeAll",
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
const _bytecode = "0x608060405234801561001057600080fd5b50615163806100206000396000f3fe608060405234801561001057600080fd5b50600436106103995760003560e01c80637e37479e116101e9578063ba5d40b71161010f578063e985e9c5116100ad578063f5c1f76e1161007c578063f5c1f76e1461086d578063f7df5c6014610880578063f8c8765e14610893578063ffa1ad74146108a657600080fd5b8063e985e9c51461080f578063ebf0c7171461084b578063ec129eea14610852578063f25eb5c11461086557600080fd5b8063c87b56dd116100e9578063c87b56dd146107c3578063ce92b33e146107d6578063cf2c52cb146107e9578063dbe16c07146107fc57600080fd5b8063ba5d40b71461078a578063bb5b27e11461079d578063bebec6b4146107b057600080fd5b8063a3f4df7e11610187578063ae31844a11610156578063ae31844a14610730578063b3f9e4cb14610743578063b85afd2814610756578063b88d4fde1461077757600080fd5b8063a3f4df7e146106be578063a4247400146106ea578063ab3b87fe146106fd578063ac9650d81461071057600080fd5b80639559c0bd116101c35780639559c0bd1461068857806395d89b411461069057806399e0dd7c14610698578063a22cb465146106ab57600080fd5b80637e37479e1461064f57806394d008ef146106625780639508b1c41461067557600080fd5b806342842e0e116102ce578063509602391161026c578063663f7b2a1161023b578063663f7b2a146105e7578063672b9f81146105fa5780636ccbae5f1461061b57806370a082311461063c57600080fd5b80635096023914610592578063572b6c05146105a55780636352211e146105c1578063638e5c78146105d457600080fd5b806347c81699116102a857806347c81699146105465780634a72584d146105595780634f558e791461056c57806350382c1a1461057f57600080fd5b806342842e0e1461050d57806342966c6814610520578063430c20811461053357600080fd5b80631bf7e13e1161033b578063276fabb111610315578063276fabb1146104b357806327f18975146104d4578063310bd74b146104e757806340c10f19146104fa57600080fd5b80631bf7e13e1461047a5780631f71be061461048d57806323b872dd146104a057600080fd5b8063095ea7b311610377578063095ea7b314610406578063150b7a021461041b5780631bd8cc1a146104475780631be5e7ed1461046757600080fd5b806301ffc9a71461039e57806306fdde03146103c6578063081812fc146103db575b600080fd5b6103b16103ac3660046146e5565b6108ca565b60405190151581526020015b60405180910390f35b6103ce6108db565b6040516103bd9190614c70565b6103ee6103e9366004614913565b61096d565b6040516001600160a01b0390911681526020016103bd565b610419610414366004614460565b610994565b005b61042e610429366004614252565b6109ad565b6040516001600160e01b031990911681526020016103bd565b61045a610455366004614593565b610b08565b6040516103bd9190614c0b565b6103ce61047536600461484d565b610c28565b6103ce6104883660046148b4565b610c73565b61041961049b36600461432b565b610d7e565b6104196104ae366004614212565b610e25565b6104c66104c13660046144e4565b610e78565b6040519081526020016103bd565b6104196104e2366004614523565b610e87565b6104196104f5366004614913565b610ecf565b610419610508366004614460565b610f0a565b61041961051b366004614212565b610f57565b61041961052e366004614913565b610f72565b6103b1610541366004614460565b610fb6565b6104196105543660046147ef565b610fc2565b61041961056736600461495b565b611001565b6103b161057a366004614913565b611047565b61041961058d366004614882565b611066565b6104196105a0366004614147565b61109c565b6103b16105b3366004614147565b6001600160a01b0316301490565b6103ee6105cf366004614913565b6110fc565b6104196105e2366004614913565b61115c565b6104196105f53660046145dc565b6111a7565b61060d6106083660046149ab565b6111e0565b6040516103bd929190614c83565b6104c6610629366004614913565b6000908152610100602052604090205490565b6104c661064a366004614147565b6111f8565b6104c661065d366004614147565b61127e565b61041961067036600461448b565b6112af565b61041961068336600461471d565b6112fe565b6104c6601481565b6103ce611385565b6104196106a63660046147bc565b611394565b6104196106b93660046143e3565b61141a565b6103ce6040518060400160405280600d81526020016c554e533a20526567697374727960981b81525081565b6103b16106f83660046148b4565b61142c565b61041961070b366004614460565b611477565b61072361071e3660046144e4565b6114bc565b6040516103bd9190614baa565b61041961073e3660046144e4565b6115b5565b6103ee610751366004614913565b611661565b610769610764366004614593565b61168b565b6040516103bd929190614c1e565b6104196107853660046142c2565b6117f3565b61041961079836600461432b565b61183a565b6103ce6107ab366004614913565b6118ab565b6103ce6107be366004614147565b61194d565b6103ce6107d1366004614913565b611a17565b6104196107e4366004614523565b611a7d565b6104196107f736600461440e565b611abc565b6103ce61080a366004614913565b611b99565b6103b161081d36600461417f565b6001600160a01b039182166000908152606a6020908152604080832093909416825291909152205460ff1690565b60006104c6565b610419610860366004614523565b611bb7565b610419611bf6565b61045a61087b3660046144e4565b611c7c565b61041961088e36600461492b565b611d59565b6104196108a13660046141b7565b611dea565b6103ce604051806040016040528060058152602001640302e382e360dc1b81525081565b60006108d582611fc0565b92915050565b6060606580546108ea9061503e565b80601f01602080910402602001604051908101604052809291908181526020018280546109169061503e565b80156109635780601f1061093857610100808354040283529160200191610963565b820191906000526020600020905b81548152906001019060200180831161094657829003601f168201915b5050505050905090565b600061097882612010565b506000908152606960205260409020546001600160a01b031690565b8061099e8161206f565b6109a883836120d6565b505050565b60007f8ffb960699dc2ba88f34d0e41c029c3c36c95149679fe1d0153a9582bec92378546001600160a01b03166109e26121f9565b6001600160a01b03161415610aa4576109f96121f9565b6001600160a01b03166342966c68856040518263ffffffff1660e01b8152600401610a2691815260200190565b600060405180830381600087803b158015610a4057600080fd5b505af1158015610a54573d6000803e3d6000fd5b505050821580159150610a6e5750610a6e828401846146b3565b15610a8c57610a7d3085612208565b610a878585612356565b610a96565b610a968585612208565b50630a85bd0160e11b610aff565b60405162461bcd60e51b815260206004820152602560248201527f52656769737472793a204552433732315f524543454956494e475f50524f4849604482015264109255115160da1b60648201526084015b60405180910390fd5b95945050505050565b6060826001600160401b03811115610b3057634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610b6357816020015b6060815260200190600190039081610b4e5790505b50905060005b83811015610c2057610be2858583818110610b9457634e487b7160e01b600052603260045260246000fd5b9050602002810190610ba69190614e17565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250879250612401915050565b828281518110610c0257634e487b7160e01b600052603260045260246000fd5b60200260200101819052508080610c1890615073565b915050610b69565b509392505050565b6060610c6b84848080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250869250612401915050565b949350505050565b606060005a9050610c8585858561142c565b610ce15760405162461bcd60e51b815260206004820152602760248201527f554e535265676973747279466f727761726465723a205349474e41545552455f6044820152661253959053125160ca1b6064820152608401610af6565b610d73610cf16020870187614147565b30604088013584610d0560608b018b614e17565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8e018190048102820181019092528c815292508c91508b908190840183828082843760009201919091525061243692505050565b9150505b9392505050565b610134546001600160a01b0316610d936121f9565b6001600160a01b031614610db95760405162461bcd60e51b8152600401610af690614d43565b6000610dcd610dc8888a614f66565b612525565b9050610dd881612582565b610deb610de4826110fc565b8a836125ef565b610df88686868685612796565b8115610e1a57610e1a8982610e15610e108b8d614f66565b612820565b6128bd565b505050505050505050565b80610e37610e316121f9565b826128ff565b610e535760405162461bcd60e51b8152600401610af690614ca8565b81610e5d8161206f565b610e6683612582565b610e718585856125ef565b5050505050565b6000610d77610dc88385614f66565b80610e93610e316121f9565b610eaf5760405162461bcd60e51b8152600401610af690614ca8565b81610eb98161206f565b610ec6878787878761297d565b50505050505050565b80610edb610e316121f9565b610ef75760405162461bcd60e51b8152600401610af690614ca8565b81610f018161206f565b6109a883612582565b610f126129fc565b6001600160a01b0316610f236121f9565b6001600160a01b031614610f495760405162461bcd60e51b8152600401610af690614dd5565b610f538282612208565b5050565b6109a8838383604051806020016040528060008152506117f3565b80610f7e610e316121f9565b610f9a5760405162461bcd60e51b8152600401610af690614ca8565b81610fa48161206f565b610fad83612582565b6109a883612b0f565b6000610d7783836128ff565b80610fce610e316121f9565b610fea5760405162461bcd60e51b8152600401610af690614ca8565b81610ff48161206f565b610ec68787878787612bb6565b8061100d610e316121f9565b6110295760405162461bcd60e51b8152600401610af690614ca8565b816110338161206f565b61103f86868686612c95565b505050505050565b6000818152606760205260408120546001600160a01b031615156108d5565b6110998160405160200161107a9190614a75565b6040516020818303038152906040528051906020012060001c82612d35565b50565b610134546001600160a01b03166110b16121f9565b6001600160a01b0316146110d75760405162461bcd60e51b8152600401610af690614d43565b6001600160a01b0316600090815261013660205260409020805460ff19166001179055565b6000818152606760205260408120546001600160a01b0316806108d55760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606401610af6565b80611168610e316121f9565b6111845760405162461bcd60e51b8152600401610af690614ca8565b61119661118f6121f9565b30846125ef565b610f536111a16121f9565b83612356565b60006111b282612525565b90506111bd81612d61565b6111c68161206f565b610f536111d16121f9565b826111db85612820565b612dd1565b6060806111ed8484612e5e565b909590945092505050565b60006001600160a01b0382166112625760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b6064820152608401610af6565b506001600160a01b031660009081526068602052604090205490565b6001600160a01b038116600090815261013560205260408120546112a181612e7f565b6112a9578091505b50919050565b6112b76129fc565b6001600160a01b03166112c86121f9565b6001600160a01b0316146112ee5760405162461bcd60e51b8152600401610af690614dd5565b6112f88484612208565b50505050565b6113088787612ec9565b6113106121f9565b6001600160a01b0316611322866110fc565b6001600160a01b0316146113785760405162461bcd60e51b815260206004820152601d60248201527f52656769737472793a2053454e4445525f49535f4e4f545f4f574e45520000006044820152606401610af6565b610ec68484848489612796565b6060606680546108ea9061503e565b610134546001600160a01b03166113a96121f9565b6001600160a01b0316146113cf5760405162461bcd60e51b8152600401610af690614d43565b6113dc6101338383613ebf565b507f4b120d6a959a84a520fa48f5f937cca0e79129423487af7901213b5d2e89313b828260405161140e929190614c5c565b60405180910390a15050565b610f536114256121f9565b8383612f38565b6000610c6b61143a85614f73565b3085858080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061300792505050565b80611483610e316121f9565b61149f5760405162461bcd60e51b8152600401610af690614ca8565b816114a98161206f565b6112f86114b5846110fc565b85856125ef565b606060006114ca8385614ef1565b9050303314156115ac5760005b838110156115aa5761156c6114ea6121f9565b6114f261315f565b87878581811061151257634e487b7160e01b600052603260045260246000fd5b90506020028101906115249190614e17565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092018290525060408051602081019091529081529250613174915050565b82828151811061158c57634e487b7160e01b600052603260045260246000fd5b602002602001018190525080806115a290615073565b9150506114d7565b505b610c6b816131a4565b610134546001600160a01b03166115ca6121f9565b6001600160a01b0316146115f05760405162461bcd60e51b8152600401610af690614d43565b60005b818110156109a8576001610137600085858581811061162257634e487b7160e01b600052603260045260246000fd5b90506020020135815260200190815260200160002060006101000a81548160ff021916908315150217905550808061165990615073565b9150506115f3565b6000818152606760205260408120546001600160a01b03166116845760006108d5565b3092915050565b606080836001600160401b038111156116b457634e487b7160e01b600052604160045260246000fd5b6040519080825280602002602001820160405280156116e757816020015b60608152602001906001900390816116d25790505b509150836001600160401b0381111561171057634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561174357816020015b606081526020019060019003908161172e5790505b50905060005b848110156117ea5761178186868381811061177457634e487b7160e01b600052603260045260246000fd5b9050602002013585612e5e565b8483815181106117a157634e487b7160e01b600052603260045260246000fd5b602002602001018484815181106117c857634e487b7160e01b600052603260045260246000fd5b60200260200101829052829052505080806117e290615073565b915050611749565b50935093915050565b816117ff610e316121f9565b61181b5760405162461bcd60e51b8152600401610af690614ca8565b826118258161206f565b61182e84612582565b61103f868686866132f9565b610134546001600160a01b031661184f6121f9565b6001600160a01b0316146118755760405162461bcd60e51b8152600401610af690614d43565b6000611884610dc8888a614f66565b905061189e8982611898610e108b8d614f66565b8561332c565b610e1a8686868685612796565b600081815260c9602052604090208054606091906118c89061503e565b80601f01602080910402602001604051908101604052809291908181526020018280546118f49061503e565b80156119415780601f1061191657610100808354040283529160200191611941565b820191906000526020600020905b81548152906001019060200180831161192457829003601f168201915b50505050509050919050565b6001600160a01b0381166000908152610135602052604090205460609061197381612e7f565b6112a95760008181526101386020526040902080546119919061503e565b80601f01602080910402602001604051908101604052809291908181526020018280546119bd9061503e565b8015611a0a5780601f106119df57610100808354040283529160200191611a0a565b820191906000526020600020905b8154815290600101906020018083116119ed57829003601f168201915b5050505050915050919050565b6060611a2282612010565b6000611a2c61337f565b90506000815111611a4c5760405180602001604052806000815250610d77565b80611a568461338f565b604051602001611a67929190614b1c565b6040516020818303038152906040529392505050565b80611a89610e316121f9565b611aa55760405162461bcd60e51b8152600401610af690614ca8565b81611aaf8161206f565b610ec68787878787612796565b7f8bea9a6f8afd34f4e29c585f854e0cc5161431bf5fc299d468454d33dce53b87546001600160a01b0316611aef6121f9565b6001600160a01b031614611b155760405162461bcd60e51b8152600401610af690614dd5565b6020811415611b38576000611b2c82840184614913565b90506112f88482612208565b6000611b4682840184614621565b805190915060005b8181101561103f57611b8786848381518110611b7a57634e487b7160e01b600052603260045260246000fd5b6020026020010151612208565b80611b9181615073565b915050611b4e565b6000818152610138602052604090208054606091906118c89061503e565b80611bc3610e316121f9565b611bdf5760405162461bcd60e51b8152600401610af690614ca8565b81611be98161206f565b610ec687878787876134a8565b6000611c006121f9565b6001600160a01b03811660009081526101356020526040902054909150611c735760405162461bcd60e51b815260206004820152602160248201527f52656769737472793a20524556455253455f5245434f52445f49535f454d50546044820152605960f81b6064820152608401610af6565b611099816134be565b6060816001600160401b03811115611ca457634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015611cd757816020015b6060815260200190600190039081611cc25790505b50905060005b82811015611d5257611d14848483818110611d0857634e487b7160e01b600052603260045260246000fd5b905060200201356118ab565b828281518110611d3457634e487b7160e01b600052603260045260246000fd5b60200260200101819052508080611d4a90615073565b915050611cdd565b5092915050565b610134546001600160a01b0316611d6e6121f9565b6001600160a01b031614611d945760405162461bcd60e51b8152600401610af690614d43565b61013454611dab906001600160a01b031684612208565b827fc5beef08f693b11c316c0c8394a377a0033c9cf701b8cd8afd79cecef60c39528383604051611ddd929190614c5c565b60405180910390a2505050565b600054610100900460ff1615808015611e0a5750600054600160ff909116105b80611e245750303b158015611e24575060005460ff166001145b611e875760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610af6565b6000805460ff191660011790558015611eaa576000805461ff0019166101001790555b61013480546001600160a01b0319166001600160a01b038716179055837f8ffb960699dc2ba88f34d0e41c029c3c36c95149679fe1d0153a9582bec9237880546001600160a01b0319166001600160a01b03929092169190911790556040805180820182526013815272556e73746f707061626c6520446f6d61696e7360681b60208083019190915282518084019093526002835261155160f21b90830152611f5291613503565b611f5a613551565b611f62613551565b611f6b8361357a565b611f74826135aa565b8015610e71576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050505050565b60006001600160e01b031982166380ac58cd60e01b1480611ff157506001600160e01b03198216635b5e139f60e01b145b806108d557506301ffc9a760e01b6001600160e01b03198316146108d5565b6000818152606760205260409020546001600160a01b03166110995760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606401610af6565b303314156120cd5761207f61315f565b81146110995760405162461bcd60e51b815260206004820152601760248201527f52656769737472793a20544f4b454e5f494e56414c49440000000000000000006044820152606401610af6565b611099816135da565b60006120e1826110fc565b9050806001600160a01b0316836001600160a01b0316141561214f5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152608401610af6565b806001600160a01b03166121616121f9565b6001600160a01b0316148061217d575061217d8161081d6121f9565b6121ef5760405162461bcd60e51b815260206004820152603e60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c00006064820152608401610af6565b6109a88383613608565b6000612203613676565b905090565b6001600160a01b03821661225e5760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610af6565b6000818152606760205260409020546001600160a01b0316156122c35760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610af6565b6122cf60008383613692565b6001600160a01b03821660009081526068602052604081208054600192906122f8908490614eae565b909155505060008181526067602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b60006123606129fc565b905061236c8183613608565b60008051602061511083398151915254604080516020808201869052825180830390910181528183019283905263e3dec8fb60e01b9092526001600160a01b0390921691829163e3dec8fb916123c9918891309190604401614b4b565b600060405180830381600087803b1580156123e357600080fd5b505af11580156123f7573d6000803e3d6000fd5b5050505050505050565b6060610d77836040516020016124179190614a75565b6040516020818303038152906040528051906020012060001c8361372f565b6060612441856135da565b600080876001600160a01b03168661245b8b8a8989613174565b6040516124689190614a75565b60006040518083038160008787f1925050503d80600081146124a6576040519150601f19603f3d011682016040523d82523d6000602084013e6124ab565b606091505b5090925090506124bc603f87614ec6565b5a116124d857634e487b7160e01b600052600160045260246000fd5b61251882826040518060400160405280601a81526020017f42617365466f727761726465723a2043414c4c5f4641494c4544000000000000815250613811565b9998505050505050505050565b805160009081905b8015611d525761256e8285612543600185614eda565b8151811061256157634e487b7160e01b600052603260045260246000fd5b602002602001015161384a565b91508061257a81615027565b91505061252d565b61258b816138f7565b60405160200161259d91815260200190565b60408051601f198184030181528282528051602091820120600085815260cb9092529181209190915582917f185c30856dadb58bf097c1f665a52ada7029752dbcad008ea3fefc73bee8c9fe9190a250565b826001600160a01b0316612602826110fc565b6001600160a01b0316146126665760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b6064820152608401610af6565b6001600160a01b0382166126c85760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610af6565b6126d3838383613692565b6126de600082613608565b6001600160a01b0383166000908152606860205260408120805460019290612707908490614eda565b90915550506001600160a01b0382166000908152606860205260408120805460019290612735908490614eae565b909155505060008181526067602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b60005b8481101561103f5761280e8686838181106127c457634e487b7160e01b600052603260045260246000fd5b90506020028101906127d69190614e17565b8686858181106127f657634e487b7160e01b600052603260045260246000fd5b90506020028101906128089190614e17565b86612bb6565b8061281881615073565b915050612799565b606060008260008151811061284557634e487b7160e01b600052603260045260246000fd5b602002602001015190506000600190505b8351811015611d52578184828151811061288057634e487b7160e01b600052603260045260246000fd5b6020026020010151604051602001612899929190614ad0565b604051602081830303815290604052915080806128b590615073565b915050612856565b61dead6001600160a01b038416148015906128ef57506001600160a01b03831660009081526101356020526040902054155b156109a8576109a8838383612dd1565b60008061290b836110fc565b9050806001600160a01b0316846001600160a01b0316148061295257506001600160a01b038082166000908152606a602090815260408083209388168352929052205460ff165b80610c6b5750836001600160a01b031661296b8461096d565b6001600160a01b031614949350505050565b60005b8481101561103f576129ea8686838181106129ab57634e487b7160e01b600052603260045260246000fd5b905060200201358585848181106129d257634e487b7160e01b600052603260045260246000fd5b90506020028101906129e49190614e17565b85612c95565b806129f481615073565b915050612980565b6000806000805160206151108339815191525460405163721804d360e11b81523060048201526001600160a01b039091169150600090829063e43009a69060240160206040518083038186803b158015612a5557600080fd5b505afa158015612a69573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a8d91906146cd565b60405163e66f960360e01b8152600481018290529091506001600160a01b0383169063e66f96039060240160206040518083038186803b158015612ad057600080fd5b505afa158015612ae4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612b089190614163565b9250505090565b6000612b1a826110fc565b9050612b2881600084613692565b612b33600083613608565b6001600160a01b0381166000908152606860205260408120805460019290612b5c908490614eda565b909155505060008281526067602052604080822080546001600160a01b0319169055518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b60008585604051602001612bcb929190614b0c565b60408051601f198184030181528282528051602091820120601f8901829004820284018201909252878352909250612c1f9183918990899081908401838280828437600092019190915250612d3592505050565b61103f8187878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8b018190048102820181019092528981529250899150889081908401838280828437600092019190915250889250613923915050565b612c9e84613a5e565b612cea5760405162461bcd60e51b815260206004820152601c60248201527f5265636f726453746f726167653a204b45595f4e4f545f464f554e44000000006044820152606401610af6565b6112f884612cf7866118ab565b85858080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250879250613923915050565b612d3e82613a5e565b610f5357600082815260c96020908152604090912082516109a892840190613f3f565b612d696121f9565b6001600160a01b0316612d7b826110fc565b6001600160a01b0316146110995760405162461bcd60e51b815260206004820152601d60248201527f52656769737472793a2053454e4445525f49535f4e4f545f4f574e45520000006044820152606401610af6565b6000828152610138602052604090208054612deb9061503e565b15159050612e15576000828152610138602090815260409091208251612e1392840190613f3f565b505b6001600160a01b03831660008181526101356020526040808220859055518492917feb76a21470988c474a21f690cc28fee1ed511bd812dc3c21fd0f49c5e5d4708a91a3505050565b606080612e6a846118ab565b9150612e76848461372f565b90509250929050565b6000818152610137602052604081205460ff1680156108d557506101366000612ea66121f9565b6001600160a01b0316815260208101919091526040016000205460ff1692915050565b60008051602061511083398151915254604051633805550f60e01b81526001600160a01b03909116908190633805550f90612f0a9086908690600401614c5c565b600060405180830381600087803b158015612f2457600080fd5b505af1158015610ec6573d6000803e3d6000fd5b816001600160a01b0316836001600160a01b03161415612f9a5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610af6565b6001600160a01b038381166000818152606a6020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6040838101519051636ccbae5f60e01b8152600481019190915260009081903090636ccbae5f9060240160206040518083038186803b15801561304957600080fd5b505afa15801561305d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061308191906146cd565b9050600061312f8660600151805190602001208688602001516040516020016130cf9392919092835260609190911b6bffffffffffffffffffffffff19166020830152603482015260540190565b60408051601f1981840301815282825280516020918201207f19457468657265756d205369676e6564204d6573736167653a0a33320000000084830152603c8085019190915282518085039091018152605c909301909152815191012090565b905081866020015114801561315557508551613155906001600160a01b03168286613a84565b9695505050505050565b6000303314156131715750601f193601355b90565b606082858560405160200161318b93929190614a91565b6040516020818303038152906040529050949350505050565b606081516001600160401b038111156131cd57634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561320057816020015b60608152602001906001900390816131eb5790505b50905060005b82518110156112a957600080306001600160a01b031685848151811061323c57634e487b7160e01b600052603260045260246000fd5b60200260200101516040516132519190614a75565b600060405180830381855af49150503d806000811461328c576040519150601f19603f3d011682016040523d82523d6000602084013e613291565b606091505b50915091506132b9828260405180606001604052806027815260200161513060279139613811565b8484815181106132d957634e487b7160e01b600052603260045260246000fd5b6020026020010181905250505080806132f190615073565b915050613206565b6133048484846125ef565b61331084848484613bd4565b6112f85760405162461bcd60e51b8152600401610af690614cf1565b6133368484612208565b827fc5beef08f693b11c316c0c8394a377a0033c9cf701b8cd8afd79cecef60c3952836040516133669190614c70565b60405180910390a280156112f8576112f88484846128bd565b606061013380546108ea9061503e565b6060816133b35750506040805180820190915260018152600360fc1b602082015290565b8160005b81156133dd57806133c781615073565b91506133d69050600a83614ec6565b91506133b7565b6000816001600160401b0381111561340557634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f19166020018201604052801561342f576020820181803683370190505b5090505b8415610c6b57613444600183614eda565b9150613451600a8661508e565b61345c906030614eae565b60f81b81838151811061347f57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a9053506134a1600a86614ec6565b9450613433565b6134b181612582565b610e718585858585612796565b6001600160a01b03811660008181526101356020526040808220829055517ffcf5eec0cfa3e6332f5f0e63ec242d71f866a61d121d6cdf5c2eb3b668a26c4f9190a250565b600054610100900460ff1661352a5760405162461bcd60e51b8152600401610af690614d8a565b815161353d906065906020850190613f3f565b5080516109a8906066906020840190613f3f565b600054610100900460ff166135785760405162461bcd60e51b8152600401610af690614d8a565b565b600054610100900460ff166135a15760405162461bcd60e51b8152600401610af690614d8a565b61109981613ce5565b600054610100900460ff166135d15760405162461bcd60e51b8152600401610af690614d8a565b61109981613d3e565b600081815261010060205260409020546135f5906001614eae565b6000918252610100602052604090912055565b600081815260696020526040902080546001600160a01b0319166001600160a01b038416908117909155819061363d826110fc565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60003033141561368d575060331936013560601c90565b503390565b6000818152610137602052604090205460ff1615806136b957506001600160a01b03821615155b6137055760405162461bcd60e51b815260206004820152601860248201527f52656769737472793a20544f4b454e5f555047524144454400000000000000006044820152606401610af6565b6001600160a01b038316600090815261013560205260409020548114156109a8576109a8836134be565b606061373a82612e7f565b1561375457506040805160208101909152600081526108d5565b60ca6000613761846138f7565b81526020019081526020016000206000848152602001908152602001600020805461378b9061503e565b80601f01602080910402602001604051908101604052809291908181526020018280546137b79061503e565b80156138045780601f106137d957610100808354040283529160200191613804565b820191906000526020600020905b8154815290600101906020018083116137e757829003601f168201915b5050505050905092915050565b60608315613820575081610d77565b8251156138305782518084602001fd5b8160405162461bcd60e51b8152600401610af69190614c70565b60008151600014156138965760405162461bcd60e51b815260206004820152601560248201527452656769737472793a204c4142454c5f454d50545960581b6044820152606401610af6565b82826040516020016138a89190614a75565b604051602081830303815290604052805190602001206040516020016138d8929190918252602082015260400190565b60408051601f1981840301815291905280516020909101209392505050565b600081815260cb60205260408120541561391f57600082815260cb60205260409020546108d5565b5090565b60ca6000613930836138f7565b81526020019081526020016000206000858152602001908152602001600020805461395a9061503e565b151590506139b157826040516139709190614a75565b6040518091039020817f7ae4f661958fbecc2f77be6b0eb280d2a6f604b29e1e7221c82b9da0c4af7f86856040516139a89190614c70565b60405180910390a35b8160ca60006139bf846138f7565b8152602001908152602001600020600086815260200190815260200160002090805190602001906139f1929190613f3f565b5081604051613a009190614a75565b604051809103902083604051613a169190614a75565b6040518091039020827f851ffe8e74d5015261dba0a1f9e1b0e5d42c5af5d2ad1908fee897c7d80a0d928686604051613a50929190614c83565b60405180910390a450505050565b600081815260c9602052604081208054829190613a7a9061503e565b9050119050919050565b6000806000613a938585613d8c565b90925090506000816004811115613aba57634e487b7160e01b600052602160045260246000fd5b148015613ad85750856001600160a01b0316826001600160a01b0316145b15613ae857600192505050610d77565b600080876001600160a01b0316631626ba7e60e01b8888604051602401613b10929190614c43565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909416939093179092529051613b4e9190614a75565b600060405180830381855afa9150503d8060008114613b89576040519150601f19603f3d011682016040523d82523d6000602084013e613b8e565b606091505b5091509150818015613ba1575080516020145b8015613bc857508051630b135d3f60e11b90613bc690830160209081019084016146cd565b145b98975050505050505050565b60006001600160a01b0384163b15613cdd57836001600160a01b031663150b7a02613bfd6121f9565b8786866040518563ffffffff1660e01b8152600401613c1f9493929190614b77565b602060405180830381600087803b158015613c3957600080fd5b505af1925050508015613c69575060408051601f3d908101601f19168201909252613c6691810190614701565b60015b613cc3573d808015613c97576040519150601f19603f3d011682016040523d82523d6000602084013e613c9c565b606091505b508051613cbb5760405162461bcd60e51b8152600401610af690614cf1565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610c6b565b506001610c6b565b600054610100900460ff16613d0c5760405162461bcd60e51b8152600401610af690614d8a565b806000805160206151108339815191525b80546001600160a01b0319166001600160a01b039290921691909117905550565b600054610100900460ff16613d655760405162461bcd60e51b8152600401610af690614d8a565b807f8bea9a6f8afd34f4e29c585f854e0cc5161431bf5fc299d468454d33dce53b87613d1d565b600080825160411415613dc35760208301516040840151606085015160001a613db787828585613dd2565b94509450505050613dcb565b506000905060025b9250929050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115613e095750600090506003613eb6565b8460ff16601b14158015613e2157508460ff16601c14155b15613e325750600090506004613eb6565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015613e86573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116613eaf57600060019250925050613eb6565b9150600090505b94509492505050565b828054613ecb9061503e565b90600052602060002090601f016020900481019282613eed5760008555613f33565b82601f10613f065782800160ff19823516178555613f33565b82800160010185558215613f33579182015b82811115613f33578235825591602001919060010190613f18565b5061391f929150613fb3565b828054613f4b9061503e565b90600052602060002090601f016020900481019282613f6d5760008555613f33565b82601f10613f8657805160ff1916838001178555613f33565b82800160010185558215613f33579182015b82811115613f33578251825591602001919060010190613f98565b5b8082111561391f5760008155600101613fb4565b6000613fdb613fd684614e8b565b614e5b565b9050808382526020808301915083868660051b86011115613ffb57600080fd5b6000805b8781101561403b5782356001600160401b0381111561401c578283fd5b6140288a828a016140dd565b8652509383019391830191600101613fff565b50505050509392505050565b60008083601f840112614058578182fd5b5081356001600160401b0381111561406e578182fd5b6020830191508360208260051b8501011115613dcb57600080fd5b8035801515811461409957600080fd5b919050565b60008083601f8401126140af578182fd5b5081356001600160401b038111156140c5578182fd5b602083019150836020828501011115613dcb57600080fd5b600082601f8301126140ed578081fd5b81356001600160401b03811115614106576141066150ce565b614119601f8201601f1916602001614e5b565b81815284602083860101111561412d578283fd5b816020850160208301379081016020019190915292915050565b600060208284031215614158578081fd5b8135610d77816150e4565b600060208284031215614174578081fd5b8151610d77816150e4565b60008060408385031215614191578081fd5b823561419c816150e4565b915060208301356141ac816150e4565b809150509250929050565b600080600080608085870312156141cc578182fd5b84356141d7816150e4565b935060208501356141e7816150e4565b925060408501356141f7816150e4565b91506060850135614207816150e4565b939692955090935050565b600080600060608486031215614226578081fd5b8335614231816150e4565b92506020840135614241816150e4565b929592945050506040919091013590565b600080600080600060808688031215614269578283fd5b8535614274816150e4565b94506020860135614284816150e4565b93506040860135925060608601356001600160401b038111156142a5578182fd5b6142b18882890161409e565b969995985093965092949392505050565b600080600080608085870312156142d7578182fd5b84356142e2816150e4565b935060208501356142f2816150e4565b92506040850135915060608501356001600160401b03811115614313578182fd5b61431f878288016140dd565b91505092959194509250565b60008060008060008060008060a0898b031215614346578586fd5b8835614351816150e4565b975060208901356001600160401b038082111561436c578788fd5b6143788c838d01614047565b909950975060408b0135915080821115614390578485fd5b61439c8c838d01614047565b909750955060608b01359150808211156143b4578485fd5b506143c18b828c01614047565b90945092506143d4905060808a01614089565b90509295985092959890939650565b600080604083850312156143f5578182fd5b8235614400816150e4565b9150612e7660208401614089565b600080600060408486031215614422578081fd5b833561442d816150e4565b925060208401356001600160401b03811115614447578182fd5b6144538682870161409e565b9497909650939450505050565b60008060408385031215614472578182fd5b823561447d816150e4565b946020939093013593505050565b600080600080606085870312156144a0578182fd5b84356144ab816150e4565b93506020850135925060408501356001600160401b038111156144cc578283fd5b6144d88782880161409e565b95989497509550505050565b600080602083850312156144f6578182fd5b82356001600160401b0381111561450b578283fd5b61451785828601614047565b90969095509350505050565b60008060008060006060868803121561453a578283fd5b85356001600160401b0380821115614550578485fd5b61455c89838a01614047565b90975095506020880135915080821115614574578485fd5b5061458188828901614047565b96999598509660400135949350505050565b6000806000604084860312156145a7578081fd5b83356001600160401b038111156145bc578182fd5b6145c886828701614047565b909790965060209590950135949350505050565b6000602082840312156145ed578081fd5b81356001600160401b03811115614602578182fd5b8201601f81018413614612578182fd5b610c6b84823560208401613fc8565b60006020808385031215614633578182fd5b82356001600160401b03811115614648578283fd5b8301601f81018513614658578283fd5b8035614666613fd682614e8b565b80828252848201915084840188868560051b8701011115614685578687fd5b8694505b838510156146a7578035835260019490940193918501918501614689565b50979650505050505050565b6000602082840312156146c4578081fd5b610d7782614089565b6000602082840312156146de578081fd5b5051919050565b6000602082840312156146f6578081fd5b8135610d77816150f9565b600060208284031215614712578081fd5b8151610d77816150f9565b60008060008060008060006080888a031215614737578081fd5b87356001600160401b038082111561474d578283fd5b6147598b838c0161409e565b909950975060208a0135965060408a0135915080821115614778578283fd5b6147848b838c01614047565b909650945060608a013591508082111561479c578283fd5b506147a98a828b01614047565b989b979a50959850939692959293505050565b600080602083850312156147ce578182fd5b82356001600160401b038111156147e3578283fd5b6145178582860161409e565b600080600080600060608688031215614806578283fd5b85356001600160401b038082111561481c578485fd5b61482889838a0161409e565b90975095506020880135915080821115614840578485fd5b506145818882890161409e565b600080600060408486031215614861578081fd5b83356001600160401b03811115614876578182fd5b6145c88682870161409e565b600060208284031215614893578081fd5b81356001600160401b038111156148a8578182fd5b610c6b848285016140dd565b6000806000604084860312156148c8578081fd5b83356001600160401b03808211156148de578283fd5b90850190608082880312156148f1578283fd5b90935060208501359080821115614906578283fd5b506144538682870161409e565b600060208284031215614924578081fd5b5035919050565b60008060006040848603121561493f578081fd5b8335925060208401356001600160401b03811115614447578182fd5b60008060008060608587031215614970578182fd5b8435935060208501356001600160401b0381111561498c578283fd5b6149988782880161409e565b9598909750949560400135949350505050565b600080604083850312156149bd578182fd5b50508035926020909101359150565b600081518084526020808501808196508360051b81019150828601855b85811015614a13578284038952614a01848351614a49565b988501989350908401906001016149e9565b5091979650505050505050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b60008151808452614a61816020860160208601614ffb565b601f01601f19169290920160200192915050565b60008251614a87818460208701614ffb565b9190910192915050565b60008451614aa3818460208901614ffb565b60609490941b6bffffffffffffffffffffffff191691909301908152601481019190915260340192915050565b60008351614ae2818460208801614ffb565b601760f91b9083019081528351614b00816001840160208801614ffb565b01600101949350505050565b8183823760009101908152919050565b60008351614b2e818460208801614ffb565b835190830190614b42818360208801614ffb565b01949350505050565b6001600160a01b03848116825283166020820152606060408201819052600090610aff90830184614a49565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061315590830184614a49565b6000602080830181845280855180835260408601915060408160051b8701019250838701855b82811015614bfe57603f19888603018452614bec858351614a49565b94509285019290850190600101614bd0565b5092979650505050505050565b602081526000610d7760208301846149cc565b604081526000614c3160408301856149cc565b8281036020840152610d7381856149cc565b828152604060208201526000610c6b6040830184614a49565b602081526000610c6b602083018486614a20565b602081526000610d776020830184614a49565b604081526000614c966040830185614a49565b8281036020840152610d738185614a49565b60208082526029908201527f52656769737472793a2053454e4445525f49535f4e4f545f415050524f5645446040820152682fa7a92fa7aba722a960b91b606082015260800190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b60208082526027908201527f52656769737472793a2053454e4445525f49535f4e4f545f4d494e54494e475f60408201526626a0a720a3a2a960c91b606082015260800190565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b60208082526022908201527f52656769737472793a20494e53554646494349454e545f5045524d495353494f6040820152614e5360f01b606082015260800190565b6000808335601e19843603018112614e2d578283fd5b8301803591506001600160401b03821115614e46578283fd5b602001915036819003821315613dcb57600080fd5b604051601f8201601f191681016001600160401b0381118282101715614e8357614e836150ce565b604052919050565b60006001600160401b03821115614ea457614ea46150ce565b5060051b60200190565b60008219821115614ec157614ec16150a2565b500190565b600082614ed557614ed56150b8565b500490565b600082821015614eec57614eec6150a2565b500390565b6000614eff613fd684614e8b565b808482526020808301925084368760051b87011115614f1c578485fd5b845b87811015614f5a5781356001600160401b03811115614f3b578687fd5b614f4736828a016140dd565b8652509382019390820190600101614f1e565b50919695505050505050565b6000610d77368484613fc8565b600060808236031215614f84578081fd5b604051608081016001600160401b038282108183111715614fa757614fa76150ce565b8160405284359150614fb8826150e4565b81835260208501356020840152604085013560408401526060850135915080821115614fe2578384fd5b50614fef368286016140dd565b60608301525092915050565b60005b83811015615016578181015183820152602001614ffe565b838111156112f85750506000910152565b600081615036576150366150a2565b506000190190565b600181811c9082168061505257607f821691505b602082108114156112a957634e487b7160e01b600052602260045260246000fd5b6000600019821415615087576150876150a2565b5060010190565b60008261509d5761509d6150b8565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461109957600080fd5b6001600160e01b03198116811461109957600080fdfebe2bb46ac0377341a1ec5c3116d70fd5029d704bd46292e58f6265dd177ebafe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a164736f6c6343000804000a";
const isSuperArgs = (xs) => xs.length > 1;
class UNSRegistryMock__factory extends ethers_1.ContractFactory {
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
exports.UNSRegistryMock__factory = UNSRegistryMock__factory;
UNSRegistryMock__factory.bytecode = _bytecode;
UNSRegistryMock__factory.abi = _abi;
