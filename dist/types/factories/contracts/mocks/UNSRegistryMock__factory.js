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
                internalType: "string[][]",
                name: "domains",
                type: "string[][]",
            },
        ],
        name: "backfillReverseNames",
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
const _bytecode = "0x608060405234801561001057600080fd5b50614faa806100206000396000f3fe608060405234801561001057600080fd5b50600436106103995760003560e01c806370a08231116101e9578063ba5d40b71161010f578063e985e9c5116100ad578063f5c1f76e1161007c578063f5c1f76e14610860578063f7df5c6014610873578063f8c8765e14610886578063ffa1ad741461089957600080fd5b8063e985e9c514610802578063ebf0c7171461083e578063ec129eea14610845578063f25eb5c11461085857600080fd5b8063c87b56dd116100e9578063c87b56dd146107b6578063ce92b33e146107c9578063cf2c52cb146107dc578063dbe16c07146107ef57600080fd5b8063ba5d40b71461077d578063bb5b27e114610790578063bebec6b4146107a357600080fd5b8063a22cb46511610187578063ae31844a11610156578063ae31844a14610723578063b3f9e4cb14610736578063b85afd2814610749578063b88d4fde1461076a57600080fd5b8063a22cb465146106be578063a3f4df7e146106d1578063a4247400146106fd578063ab3b87fe1461071057600080fd5b80639508b1c4116101c35780639508b1c4146106885780639559c0bd1461069b57806395d89b41146106a357806399e0dd7c146106ab57600080fd5b806370a082311461064f5780637e37479e1461066257806394d008ef1461067557600080fd5b806342842e0e116102ce57806350382c1a1161026c578063638e5c781161023b578063638e5c78146105e7578063663f7b2a146105fa578063672b9f811461060d5780636ccbae5f1461062e57600080fd5b806350382c1a1461059257806350960239146105a5578063572b6c05146105b85780636352211e146105d457600080fd5b806344d5f66c116102a857806344d5f66c1461054657806347c81699146105595780634a72584d1461056c5780634f558e791461057f57600080fd5b806342842e0e1461050d57806342966c6814610520578063430c20811461053357600080fd5b80631bf7e13e1161033b578063276fabb111610315578063276fabb1146104b357806327f18975146104d4578063310bd74b146104e757806340c10f19146104fa57600080fd5b80631bf7e13e1461047a5780631f71be061461048d57806323b872dd146104a057600080fd5b8063095ea7b311610377578063095ea7b314610406578063150b7a021461041b5780631bd8cc1a146104475780631be5e7ed1461046757600080fd5b806301ffc9a71461039e57806306fdde03146103c6578063081812fc146103db575b600080fd5b6103b16103ac366004614626565b6108bd565b60405190151581526020015b60405180910390f35b6103ce6108ce565b6040516103bd9190614b53565b6103ee6103e9366004614854565b610960565b6040516001600160a01b0390911681526020016103bd565b610419610414366004614304565b610987565b005b61042e6104293660046140f6565b6109a0565b6040516001600160e01b031990911681526020016103bd565b61045a6104553660046144e7565b610afb565b6040516103bd9190614aee565b6103ce61047536600461478e565b610c1b565b6103ce6104883660046147f5565b610c66565b61041961049b3660046141cf565b610d71565b6104196104ae3660046140b6565b610e18565b6104c66104c1366004614438565b610e6b565b6040519081526020016103bd565b6104196104e2366004614477565b610e7a565b6104196104f5366004614854565b610ec2565b610419610508366004614304565b610efd565b61041961051b3660046140b6565b610f4a565b61041961052e366004614854565b610f65565b6103b1610541366004614304565b610fa9565b610419610554366004614388565b610fb5565b610419610567366004614730565b611095565b61041961057a36600461489c565b6110d4565b6103b161058d366004614854565b61111a565b6104196105a03660046147c3565b611139565b6104196105b3366004613feb565b61116f565b6103b16105c6366004613feb565b6001600160a01b0316301490565b6103ee6105e2366004614854565b6111cf565b6104196105f5366004614854565b61122f565b610419610608366004614530565b61127a565b61062061061b3660046148ec565b6112b3565b6040516103bd929190614b66565b6104c661063c366004614854565b6000908152610100602052604090205490565b6104c661065d366004613feb565b6112cb565b6104c6610670366004613feb565b611351565b61041961068336600461432f565b611382565b61041961069636600461465e565b6113d1565b6104c6601481565b6103ce611458565b6104196106b93660046146fd565b611467565b6104196106cc366004614287565b6114ed565b6103ce6040518060400160405280600d81526020016c554e533a20526567697374727960981b81525081565b6103b161070b3660046147f5565b6114ff565b61041961071e366004614304565b61154a565b610419610731366004614438565b61158f565b6103ee610744366004614854565b61163b565b61075c6107573660046144e7565b611665565b6040516103bd929190614b01565b610419610778366004614166565b6117cd565b61041961078b3660046141cf565b611814565b6103ce61079e366004614854565b611885565b6103ce6107b1366004613feb565b611927565b6103ce6107c4366004614854565b6119f1565b6104196107d7366004614477565b611a57565b6104196107ea3660046142b2565b611a96565b6103ce6107fd366004614854565b611b73565b6103b1610810366004614023565b6001600160a01b039182166000908152606a6020908152604080832093909416825291909152205460ff1690565b60006104c6565b610419610853366004614477565b611b91565b610419611bd0565b61045a61086e366004614438565b611c56565b61041961088136600461486c565b611d33565b61041961089436600461405b565b611dc4565b6103ce604051806040016040528060058152602001640302e372e360dc1b81525081565b60006108c882611f9a565b92915050565b6060606580546108dd90614eac565b80601f016020809104026020016040519081016040528092919081815260200182805461090990614eac565b80156109565780601f1061092b57610100808354040283529160200191610956565b820191906000526020600020905b81548152906001019060200180831161093957829003601f168201915b5050505050905090565b600061096b82611fea565b506000908152606960205260409020546001600160a01b031690565b8061099181612049565b61099b83836120b0565b505050565b60007f8ffb960699dc2ba88f34d0e41c029c3c36c95149679fe1d0153a9582bec92378546001600160a01b03166109d56121d3565b6001600160a01b03161415610a97576109ec6121d3565b6001600160a01b03166342966c68856040518263ffffffff1660e01b8152600401610a1991815260200190565b600060405180830381600087803b158015610a3357600080fd5b505af1158015610a47573d6000803e3d6000fd5b505050821580159150610a615750610a61828401846145f4565b15610a7f57610a7030856121e2565b610a7a8585612330565b610a89565b610a8985856121e2565b50630a85bd0160e11b610af2565b60405162461bcd60e51b815260206004820152602560248201527f52656769737472793a204552433732315f524543454956494e475f50524f4849604482015264109255115160da1b60648201526084015b60405180910390fd5b95945050505050565b6060826001600160401b03811115610b2357634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610b5657816020015b6060815260200190600190039081610b415790505b50905060005b83811015610c1357610bd5858583818110610b8757634e487b7160e01b600052603260045260246000fd5b9050602002810190610b999190614cfa565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508792506123db915050565b828281518110610bf557634e487b7160e01b600052603260045260246000fd5b60200260200101819052508080610c0b90614ee1565b915050610b5c565b509392505050565b6060610c5e84848080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508692506123db915050565b949350505050565b606060005a9050610c788585856114ff565b610cd45760405162461bcd60e51b815260206004820152602760248201527f554e535265676973747279466f727761726465723a205349474e41545552455f6044820152661253959053125160ca1b6064820152608401610ae9565b610d66610ce46020870187613feb565b30604088013584610cf860608b018b614cfa565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8e018190048102820181019092528c815292508c91508b908190840183828082843760009201919091525061241092505050565b9150505b9392505050565b610134546001600160a01b0316610d866121d3565b6001600160a01b031614610dac5760405162461bcd60e51b8152600401610ae990614c26565b6000610dc0610dbb888a614dd4565b6124ff565b9050610dcb8161255c565b610dde610dd7826111cf565b8a836125c9565b610deb8686868685612770565b8115610e0d57610e0d8982610e08610e038b8d614dd4565b6127fa565b612897565b505050505050505050565b80610e2a610e246121d3565b826128d9565b610e465760405162461bcd60e51b8152600401610ae990614b8b565b81610e5081612049565b610e598361255c565b610e648585856125c9565b5050505050565b6000610d6a610dbb8385614dd4565b80610e86610e246121d3565b610ea25760405162461bcd60e51b8152600401610ae990614b8b565b81610eac81612049565b610eb98787878787612957565b50505050505050565b80610ece610e246121d3565b610eea5760405162461bcd60e51b8152600401610ae990614b8b565b81610ef481612049565b61099b8361255c565b610f056129d6565b6001600160a01b0316610f166121d3565b6001600160a01b031614610f3c5760405162461bcd60e51b8152600401610ae990614cb8565b610f4682826121e2565b5050565b61099b838383604051806020016040528060008152506117cd565b80610f71610e246121d3565b610f8d5760405162461bcd60e51b8152600401610ae990614b8b565b81610f9781612049565b610fa08361255c565b61099b83612ae9565b6000610d6a83836128d9565b610134546001600160a01b0316610fca6121d3565b6001600160a01b031614610ff05760405162461bcd60e51b8152600401610ae990614c26565b60005b8151811015610f465761102c82828151811061101f57634e487b7160e01b600052603260045260246000fd5b60200260200101516127fa565b610138600061106185858151811061105457634e487b7160e01b600052603260045260246000fd5b60200260200101516124ff565b81526020019081526020016000209080519060200190611082929190613d44565b508061108d81614ee1565b915050610ff3565b806110a1610e246121d3565b6110bd5760405162461bcd60e51b8152600401610ae990614b8b565b816110c781612049565b610eb98787878787612b90565b806110e0610e246121d3565b6110fc5760405162461bcd60e51b8152600401610ae990614b8b565b8161110681612049565b61111286868686612c6f565b505050505050565b6000818152606760205260408120546001600160a01b031615156108c8565b61116c8160405160200161114d91906149b9565b6040516020818303038152906040528051906020012060001c82612d0f565b50565b610134546001600160a01b03166111846121d3565b6001600160a01b0316146111aa5760405162461bcd60e51b8152600401610ae990614c26565b6001600160a01b0316600090815261013660205260409020805460ff19166001179055565b6000818152606760205260408120546001600160a01b0316806108c85760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606401610ae9565b8061123b610e246121d3565b6112575760405162461bcd60e51b8152600401610ae990614b8b565b6112696112626121d3565b30846125c9565b610f466112746121d3565b83612330565b6000611285826124ff565b905061129081612d3b565b61129981612049565b610f466112a46121d3565b826112ae856127fa565b612dab565b6060806112c08484612e38565b909590945092505050565b60006001600160a01b0382166113355760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b6064820152608401610ae9565b506001600160a01b031660009081526068602052604090205490565b6001600160a01b0381166000908152610135602052604081205461137481612e59565b61137c578091505b50919050565b61138a6129d6565b6001600160a01b031661139b6121d3565b6001600160a01b0316146113c15760405162461bcd60e51b8152600401610ae990614cb8565b6113cb84846121e2565b50505050565b6113db8787612ea3565b6113e36121d3565b6001600160a01b03166113f5866111cf565b6001600160a01b03161461144b5760405162461bcd60e51b815260206004820152601d60248201527f52656769737472793a2053454e4445525f49535f4e4f545f4f574e45520000006044820152606401610ae9565b610eb98484848489612770565b6060606680546108dd90614eac565b610134546001600160a01b031661147c6121d3565b6001600160a01b0316146114a25760405162461bcd60e51b8152600401610ae990614c26565b6114af6101338383613dc4565b507f4b120d6a959a84a520fa48f5f937cca0e79129423487af7901213b5d2e89313b82826040516114e1929190614b3f565b60405180910390a15050565b610f466114f86121d3565b8383612f12565b6000610c5e61150d85614de1565b3085858080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250612fe192505050565b80611556610e246121d3565b6115725760405162461bcd60e51b8152600401610ae990614b8b565b8161157c81612049565b6113cb611588846111cf565b85856125c9565b610134546001600160a01b03166115a46121d3565b6001600160a01b0316146115ca5760405162461bcd60e51b8152600401610ae990614c26565b60005b8181101561099b57600161013760008585858181106115fc57634e487b7160e01b600052603260045260246000fd5b90506020020135815260200190815260200160002060006101000a81548160ff021916908315150217905550808061163390614ee1565b9150506115cd565b6000818152606760205260408120546001600160a01b031661165e5760006108c8565b3092915050565b606080836001600160401b0381111561168e57634e487b7160e01b600052604160045260246000fd5b6040519080825280602002602001820160405280156116c157816020015b60608152602001906001900390816116ac5790505b509150836001600160401b038111156116ea57634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561171d57816020015b60608152602001906001900390816117085790505b50905060005b848110156117c45761175b86868381811061174e57634e487b7160e01b600052603260045260246000fd5b9050602002013585612e38565b84838151811061177b57634e487b7160e01b600052603260045260246000fd5b602002602001018484815181106117a257634e487b7160e01b600052603260045260246000fd5b60200260200101829052829052505080806117bc90614ee1565b915050611723565b50935093915050565b816117d9610e246121d3565b6117f55760405162461bcd60e51b8152600401610ae990614b8b565b826117ff81612049565b6118088461255c565b61111286868686613139565b610134546001600160a01b03166118296121d3565b6001600160a01b03161461184f5760405162461bcd60e51b8152600401610ae990614c26565b600061185e610dbb888a614dd4565b90506118788982611872610e038b8d614dd4565b8561316c565b610e0d8686868685612770565b600081815260c9602052604090208054606091906118a290614eac565b80601f01602080910402602001604051908101604052809291908181526020018280546118ce90614eac565b801561191b5780601f106118f05761010080835404028352916020019161191b565b820191906000526020600020905b8154815290600101906020018083116118fe57829003601f168201915b50505050509050919050565b6001600160a01b0381166000908152610135602052604090205460609061194d81612e59565b61137c57600081815261013860205260409020805461196b90614eac565b80601f016020809104026020016040519081016040528092919081815260200182805461199790614eac565b80156119e45780601f106119b9576101008083540402835291602001916119e4565b820191906000526020600020905b8154815290600101906020018083116119c757829003601f168201915b5050505050915050919050565b60606119fc82611fea565b6000611a066131bf565b90506000815111611a265760405180602001604052806000815250610d6a565b80611a30846131cf565b604051602001611a41929190614a60565b6040516020818303038152906040529392505050565b80611a63610e246121d3565b611a7f5760405162461bcd60e51b8152600401610ae990614b8b565b81611a8981612049565b610eb98787878787612770565b7f8bea9a6f8afd34f4e29c585f854e0cc5161431bf5fc299d468454d33dce53b87546001600160a01b0316611ac96121d3565b6001600160a01b031614611aef5760405162461bcd60e51b8152600401610ae990614cb8565b6020811415611b12576000611b0682840184614854565b90506113cb84826121e2565b6000611b2082840184614562565b805190915060005b8181101561111257611b6186848381518110611b5457634e487b7160e01b600052603260045260246000fd5b60200260200101516121e2565b80611b6b81614ee1565b915050611b28565b6000818152610138602052604090208054606091906118a290614eac565b80611b9d610e246121d3565b611bb95760405162461bcd60e51b8152600401610ae990614b8b565b81611bc381612049565b610eb987878787876132e8565b6000611bda6121d3565b6001600160a01b03811660009081526101356020526040902054909150611c4d5760405162461bcd60e51b815260206004820152602160248201527f52656769737472793a20524556455253455f5245434f52445f49535f454d50546044820152605960f81b6064820152608401610ae9565b61116c816132fe565b6060816001600160401b03811115611c7e57634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015611cb157816020015b6060815260200190600190039081611c9c5790505b50905060005b82811015611d2c57611cee848483818110611ce257634e487b7160e01b600052603260045260246000fd5b90506020020135611885565b828281518110611d0e57634e487b7160e01b600052603260045260246000fd5b60200260200101819052508080611d2490614ee1565b915050611cb7565b5092915050565b610134546001600160a01b0316611d486121d3565b6001600160a01b031614611d6e5760405162461bcd60e51b8152600401610ae990614c26565b61013454611d85906001600160a01b0316846121e2565b827fc5beef08f693b11c316c0c8394a377a0033c9cf701b8cd8afd79cecef60c39528383604051611db7929190614b3f565b60405180910390a2505050565b600054610100900460ff1615808015611de45750600054600160ff909116105b80611dfe5750303b158015611dfe575060005460ff166001145b611e615760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610ae9565b6000805460ff191660011790558015611e84576000805461ff0019166101001790555b61013480546001600160a01b0319166001600160a01b038716179055837f8ffb960699dc2ba88f34d0e41c029c3c36c95149679fe1d0153a9582bec9237880546001600160a01b0319166001600160a01b03929092169190911790556040805180820182526013815272556e73746f707061626c6520446f6d61696e7360681b60208083019190915282518084019093526002835261155160f21b90830152611f2c91613343565b611f34613391565b611f3c613391565b611f45836133ba565b611f4e826133ea565b8015610e64576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050505050565b60006001600160e01b031982166380ac58cd60e01b1480611fcb57506001600160e01b03198216635b5e139f60e01b145b806108c857506301ffc9a760e01b6001600160e01b03198316146108c8565b6000818152606760205260409020546001600160a01b031661116c5760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606401610ae9565b303314156120a75761205961341a565b811461116c5760405162461bcd60e51b815260206004820152601760248201527f52656769737472793a20544f4b454e5f494e56414c49440000000000000000006044820152606401610ae9565b61116c8161342f565b60006120bb826111cf565b9050806001600160a01b0316836001600160a01b031614156121295760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152608401610ae9565b806001600160a01b031661213b6121d3565b6001600160a01b031614806121575750612157816108106121d3565b6121c95760405162461bcd60e51b815260206004820152603e60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c00006064820152608401610ae9565b61099b838361345d565b60006121dd6134cb565b905090565b6001600160a01b0382166122385760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610ae9565b6000818152606760205260409020546001600160a01b03161561229d5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610ae9565b6122a9600083836134e7565b6001600160a01b03821660009081526068602052604081208054600192906122d2908490614d91565b909155505060008181526067602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b600061233a6129d6565b9050612346818361345d565b600080516020614f7e83398151915254604080516020808201869052825180830390910181528183019283905263e3dec8fb60e01b9092526001600160a01b0390921691829163e3dec8fb916123a3918891309190604401614a8f565b600060405180830381600087803b1580156123bd57600080fd5b505af11580156123d1573d6000803e3d6000fd5b5050505050505050565b6060610d6a836040516020016123f191906149b9565b6040516020818303038152906040528051906020012060001c83613584565b606061241b8561342f565b600080876001600160a01b0316866124358b8a8989613666565b60405161244291906149b9565b60006040518083038160008787f1925050503d8060008114612480576040519150601f19603f3d011682016040523d82523d6000602084013e612485565b606091505b509092509050612496603f87614da9565b5a116124b257634e487b7160e01b600052600160045260246000fd5b6124f282826040518060400160405280601a81526020017f42617365466f727761726465723a2043414c4c5f4641494c4544000000000000815250613696565b9998505050505050505050565b805160009081905b8015611d2c57612548828561251d600185614dbd565b8151811061253b57634e487b7160e01b600052603260045260246000fd5b60200260200101516136cf565b91508061255481614e95565b915050612507565b6125658161377c565b60405160200161257791815260200190565b60408051601f198184030181528282528051602091820120600085815260cb9092529181209190915582917f185c30856dadb58bf097c1f665a52ada7029752dbcad008ea3fefc73bee8c9fe9190a250565b826001600160a01b03166125dc826111cf565b6001600160a01b0316146126405760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b6064820152608401610ae9565b6001600160a01b0382166126a25760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610ae9565b6126ad8383836134e7565b6126b860008261345d565b6001600160a01b03831660009081526068602052604081208054600192906126e1908490614dbd565b90915550506001600160a01b038216600090815260686020526040812080546001929061270f908490614d91565b909155505060008181526067602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b60005b84811015611112576127e886868381811061279e57634e487b7160e01b600052603260045260246000fd5b90506020028101906127b09190614cfa565b8686858181106127d057634e487b7160e01b600052603260045260246000fd5b90506020028101906127e29190614cfa565b86612b90565b806127f281614ee1565b915050612773565b606060008260008151811061281f57634e487b7160e01b600052603260045260246000fd5b602002602001015190506000600190505b8351811015611d2c578184828151811061285a57634e487b7160e01b600052603260045260246000fd5b6020026020010151604051602001612873929190614a14565b6040516020818303038152906040529150808061288f90614ee1565b915050612830565b61dead6001600160a01b038416148015906128c957506001600160a01b03831660009081526101356020526040902054155b1561099b5761099b838383612dab565b6000806128e5836111cf565b9050806001600160a01b0316846001600160a01b0316148061292c57506001600160a01b038082166000908152606a602090815260408083209388168352929052205460ff165b80610c5e5750836001600160a01b031661294584610960565b6001600160a01b031614949350505050565b60005b84811015611112576129c486868381811061298557634e487b7160e01b600052603260045260246000fd5b905060200201358585848181106129ac57634e487b7160e01b600052603260045260246000fd5b90506020028101906129be9190614cfa565b85612c6f565b806129ce81614ee1565b91505061295a565b600080600080516020614f7e8339815191525460405163721804d360e11b81523060048201526001600160a01b039091169150600090829063e43009a69060240160206040518083038186803b158015612a2f57600080fd5b505afa158015612a43573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a67919061460e565b60405163e66f960360e01b8152600481018290529091506001600160a01b0383169063e66f96039060240160206040518083038186803b158015612aaa57600080fd5b505afa158015612abe573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612ae29190614007565b9250505090565b6000612af4826111cf565b9050612b02816000846134e7565b612b0d60008361345d565b6001600160a01b0381166000908152606860205260408120805460019290612b36908490614dbd565b909155505060008281526067602052604080822080546001600160a01b0319169055518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b60008585604051602001612ba5929190614a50565b60408051601f198184030181528282528051602091820120601f8901829004820284018201909252878352909250612bf99183918990899081908401838280828437600092019190915250612d0f92505050565b6111128187878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8b0181900481028201810190925289815292508991508890819084018382808284376000920191909152508892506137a8915050565b612c78846138e3565b612cc45760405162461bcd60e51b815260206004820152601c60248201527f5265636f726453746f726167653a204b45595f4e4f545f464f554e44000000006044820152606401610ae9565b6113cb84612cd186611885565b85858080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508792506137a8915050565b612d18826138e3565b610f4657600082815260c960209081526040909120825161099b92840190613d44565b612d436121d3565b6001600160a01b0316612d55826111cf565b6001600160a01b03161461116c5760405162461bcd60e51b815260206004820152601d60248201527f52656769737472793a2053454e4445525f49535f4e4f545f4f574e45520000006044820152606401610ae9565b6000828152610138602052604090208054612dc590614eac565b15159050612def576000828152610138602090815260409091208251612ded92840190613d44565b505b6001600160a01b03831660008181526101356020526040808220859055518492917feb76a21470988c474a21f690cc28fee1ed511bd812dc3c21fd0f49c5e5d4708a91a3505050565b606080612e4484611885565b9150612e508484613584565b90509250929050565b6000818152610137602052604081205460ff1680156108c857506101366000612e806121d3565b6001600160a01b0316815260208101919091526040016000205460ff1692915050565b600080516020614f7e83398151915254604051633805550f60e01b81526001600160a01b03909116908190633805550f90612ee49086908690600401614b3f565b600060405180830381600087803b158015612efe57600080fd5b505af1158015610eb9573d6000803e3d6000fd5b816001600160a01b0316836001600160a01b03161415612f745760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610ae9565b6001600160a01b038381166000818152606a6020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6040838101519051636ccbae5f60e01b8152600481019190915260009081903090636ccbae5f9060240160206040518083038186803b15801561302357600080fd5b505afa158015613037573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061305b919061460e565b905060006131098660600151805190602001208688602001516040516020016130a99392919092835260609190911b6bffffffffffffffffffffffff19166020830152603482015260540190565b60408051601f1981840301815282825280516020918201207f19457468657265756d205369676e6564204d6573736167653a0a33320000000084830152603c8085019190915282518085039091018152605c909301909152815191012090565b905081866020015114801561312f5750855161312f906001600160a01b03168286613909565b9695505050505050565b6131448484846125c9565b61315084848484613a59565b6113cb5760405162461bcd60e51b8152600401610ae990614bd4565b61317684846121e2565b827fc5beef08f693b11c316c0c8394a377a0033c9cf701b8cd8afd79cecef60c3952836040516131a69190614b53565b60405180910390a280156113cb576113cb848484612897565b606061013380546108dd90614eac565b6060816131f35750506040805180820190915260018152600360fc1b602082015290565b8160005b811561321d578061320781614ee1565b91506132169050600a83614da9565b91506131f7565b6000816001600160401b0381111561324557634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f19166020018201604052801561326f576020820181803683370190505b5090505b8415610c5e57613284600183614dbd565b9150613291600a86614efc565b61329c906030614d91565b60f81b8183815181106132bf57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a9053506132e1600a86614da9565b9450613273565b6132f18161255c565b610e648585858585612770565b6001600160a01b03811660008181526101356020526040808220829055517ffcf5eec0cfa3e6332f5f0e63ec242d71f866a61d121d6cdf5c2eb3b668a26c4f9190a250565b600054610100900460ff1661336a5760405162461bcd60e51b8152600401610ae990614c6d565b815161337d906065906020850190613d44565b50805161099b906066906020840190613d44565b600054610100900460ff166133b85760405162461bcd60e51b8152600401610ae990614c6d565b565b600054610100900460ff166133e15760405162461bcd60e51b8152600401610ae990614c6d565b61116c81613b6a565b600054610100900460ff166134115760405162461bcd60e51b8152600401610ae990614c6d565b61116c81613bc3565b60003033141561342c5750601f193601355b90565b6000818152610100602052604090205461344a906001614d91565b6000918252610100602052604090912055565b600081815260696020526040902080546001600160a01b0319166001600160a01b0384169081179091558190613492826111cf565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000303314156134e2575060331936013560601c90565b503390565b6000818152610137602052604090205460ff16158061350e57506001600160a01b03821615155b61355a5760405162461bcd60e51b815260206004820152601860248201527f52656769737472793a20544f4b454e5f555047524144454400000000000000006044820152606401610ae9565b6001600160a01b0383166000908152610135602052604090205481141561099b5761099b836132fe565b606061358f82612e59565b156135a957506040805160208101909152600081526108c8565b60ca60006135b68461377c565b8152602001908152602001600020600084815260200190815260200160002080546135e090614eac565b80601f016020809104026020016040519081016040528092919081815260200182805461360c90614eac565b80156136595780601f1061362e57610100808354040283529160200191613659565b820191906000526020600020905b81548152906001019060200180831161363c57829003601f168201915b5050505050905092915050565b606082858560405160200161367d939291906149d5565b6040516020818303038152906040529050949350505050565b606083156136a5575081610d6a565b8251156136b55782518084602001fd5b8160405162461bcd60e51b8152600401610ae99190614b53565b600081516000141561371b5760405162461bcd60e51b815260206004820152601560248201527452656769737472793a204c4142454c5f454d50545960581b6044820152606401610ae9565b828260405160200161372d91906149b9565b6040516020818303038152906040528051906020012060405160200161375d929190918252602082015260400190565b60408051601f1981840301815291905280516020909101209392505050565b600081815260cb6020526040812054156137a457600082815260cb60205260409020546108c8565b5090565b60ca60006137b58361377c565b8152602001908152602001600020600085815260200190815260200160002080546137df90614eac565b1515905061383657826040516137f591906149b9565b6040518091039020817f7ae4f661958fbecc2f77be6b0eb280d2a6f604b29e1e7221c82b9da0c4af7f868560405161382d9190614b53565b60405180910390a35b8160ca60006138448461377c565b815260200190815260200160002060008681526020019081526020016000209080519060200190613876929190613d44565b508160405161388591906149b9565b60405180910390208360405161389b91906149b9565b6040518091039020827f851ffe8e74d5015261dba0a1f9e1b0e5d42c5af5d2ad1908fee897c7d80a0d9286866040516138d5929190614b66565b60405180910390a450505050565b600081815260c96020526040812080548291906138ff90614eac565b9050119050919050565b60008060006139188585613c11565b9092509050600081600481111561393f57634e487b7160e01b600052602160045260246000fd5b14801561395d5750856001600160a01b0316826001600160a01b0316145b1561396d57600192505050610d6a565b600080876001600160a01b0316631626ba7e60e01b8888604051602401613995929190614b26565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199094169390931790925290516139d391906149b9565b600060405180830381855afa9150503d8060008114613a0e576040519150601f19603f3d011682016040523d82523d6000602084013e613a13565b606091505b5091509150818015613a26575080516020145b8015613a4d57508051630b135d3f60e11b90613a4b908301602090810190840161460e565b145b98975050505050505050565b60006001600160a01b0384163b15613b6257836001600160a01b031663150b7a02613a826121d3565b8786866040518563ffffffff1660e01b8152600401613aa49493929190614abb565b602060405180830381600087803b158015613abe57600080fd5b505af1925050508015613aee575060408051601f3d908101601f19168201909252613aeb91810190614642565b60015b613b48573d808015613b1c576040519150601f19603f3d011682016040523d82523d6000602084013e613b21565b606091505b508051613b405760405162461bcd60e51b8152600401610ae990614bd4565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610c5e565b506001610c5e565b600054610100900460ff16613b915760405162461bcd60e51b8152600401610ae990614c6d565b80600080516020614f7e8339815191525b80546001600160a01b0319166001600160a01b039290921691909117905550565b600054610100900460ff16613bea5760405162461bcd60e51b8152600401610ae990614c6d565b807f8bea9a6f8afd34f4e29c585f854e0cc5161431bf5fc299d468454d33dce53b87613ba2565b600080825160411415613c485760208301516040840151606085015160001a613c3c87828585613c57565b94509450505050613c50565b506000905060025b9250929050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115613c8e5750600090506003613d3b565b8460ff16601b14158015613ca657508460ff16601c14155b15613cb75750600090506004613d3b565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015613d0b573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116613d3457600060019250925050613d3b565b9150600090505b94509492505050565b828054613d5090614eac565b90600052602060002090601f016020900481019282613d725760008555613db8565b82601f10613d8b57805160ff1916838001178555613db8565b82800160010185558215613db8579182015b82811115613db8578251825591602001919060010190613d9d565b506137a4929150613e38565b828054613dd090614eac565b90600052602060002090601f016020900481019282613df25760008555613db8565b82601f10613e0b5782800160ff19823516178555613db8565b82800160010185558215613db8579182015b82811115613db8578235825591602001919060010190613e1d565b5b808211156137a45760008155600101613e39565b6000613e60613e5b84614d6e565b614d3e565b9050808382526020808301915083868660051b86011115613e8057600080fd5b6000805b87811015613ec05782356001600160401b03811115613ea1578283fd5b613ead8a828a01613f81565b8652509383019391830191600101613e84565b50505050509392505050565b60008083601f840112613edd578182fd5b5081356001600160401b03811115613ef3578182fd5b6020830191508360208260051b8501011115613c5057600080fd5b600082601f830112613f1e578081fd5b610d6a83833560208501613e4d565b80358015158114613f3d57600080fd5b919050565b60008083601f840112613f53578182fd5b5081356001600160401b03811115613f69578182fd5b602083019150836020828501011115613c5057600080fd5b600082601f830112613f91578081fd5b81356001600160401b03811115613faa57613faa614f3c565b613fbd601f8201601f1916602001614d3e565b818152846020838601011115613fd1578283fd5b816020850160208301379081016020019190915292915050565b600060208284031215613ffc578081fd5b8135610d6a81614f52565b600060208284031215614018578081fd5b8151610d6a81614f52565b60008060408385031215614035578081fd5b823561404081614f52565b9150602083013561405081614f52565b809150509250929050565b60008060008060808587031215614070578182fd5b843561407b81614f52565b9350602085013561408b81614f52565b9250604085013561409b81614f52565b915060608501356140ab81614f52565b939692955090935050565b6000806000606084860312156140ca578081fd5b83356140d581614f52565b925060208401356140e581614f52565b929592945050506040919091013590565b60008060008060006080868803121561410d578283fd5b853561411881614f52565b9450602086013561412881614f52565b93506040860135925060608601356001600160401b03811115614149578182fd5b61415588828901613f42565b969995985093965092949392505050565b6000806000806080858703121561417b578182fd5b843561418681614f52565b9350602085013561419681614f52565b92506040850135915060608501356001600160401b038111156141b7578182fd5b6141c387828801613f81565b91505092959194509250565b60008060008060008060008060a0898b0312156141ea578586fd5b88356141f581614f52565b975060208901356001600160401b0380821115614210578788fd5b61421c8c838d01613ecc565b909950975060408b0135915080821115614234578485fd5b6142408c838d01613ecc565b909750955060608b0135915080821115614258578485fd5b506142658b828c01613ecc565b9094509250614278905060808a01613f2d565b90509295985092959890939650565b60008060408385031215614299578182fd5b82356142a481614f52565b9150612e5060208401613f2d565b6000806000604084860312156142c6578081fd5b83356142d181614f52565b925060208401356001600160401b038111156142eb578182fd5b6142f786828701613f42565b9497909650939450505050565b60008060408385031215614316578182fd5b823561432181614f52565b946020939093013593505050565b60008060008060608587031215614344578182fd5b843561434f81614f52565b93506020850135925060408501356001600160401b03811115614370578283fd5b61437c87828801613f42565b95989497509550505050565b6000602080838503121561439a578182fd5b82356001600160401b03808211156143b0578384fd5b818501915085601f8301126143c3578384fd5b81356143d1613e5b82614d6e565b80828252858201915085850189878560051b88010111156143f0578788fd5b875b848110156144295781358681111561440857898afd5b6144168c8a838b0101613f0e565b85525092870192908701906001016143f2565b50909998505050505050505050565b6000806020838503121561444a578182fd5b82356001600160401b0381111561445f578283fd5b61446b85828601613ecc565b90969095509350505050565b60008060008060006060868803121561448e578283fd5b85356001600160401b03808211156144a4578485fd5b6144b089838a01613ecc565b909750955060208801359150808211156144c8578485fd5b506144d588828901613ecc565b96999598509660400135949350505050565b6000806000604084860312156144fb578081fd5b83356001600160401b03811115614510578182fd5b61451c86828701613ecc565b909790965060209590950135949350505050565b600060208284031215614541578081fd5b81356001600160401b03811115614556578182fd5b610c5e84828501613f0e565b60006020808385031215614574578182fd5b82356001600160401b03811115614589578283fd5b8301601f81018513614599578283fd5b80356145a7613e5b82614d6e565b80828252848201915084840188868560051b87010111156145c6578687fd5b8694505b838510156145e85780358352600194909401939185019185016145ca565b50979650505050505050565b600060208284031215614605578081fd5b610d6a82613f2d565b60006020828403121561461f578081fd5b5051919050565b600060208284031215614637578081fd5b8135610d6a81614f67565b600060208284031215614653578081fd5b8151610d6a81614f67565b60008060008060008060006080888a031215614678578081fd5b87356001600160401b038082111561468e578283fd5b61469a8b838c01613f42565b909950975060208a0135965060408a01359150808211156146b9578283fd5b6146c58b838c01613ecc565b909650945060608a01359150808211156146dd578283fd5b506146ea8a828b01613ecc565b989b979a50959850939692959293505050565b6000806020838503121561470f578182fd5b82356001600160401b03811115614724578283fd5b61446b85828601613f42565b600080600080600060608688031215614747578283fd5b85356001600160401b038082111561475d578485fd5b61476989838a01613f42565b90975095506020880135915080821115614781578485fd5b506144d588828901613f42565b6000806000604084860312156147a2578081fd5b83356001600160401b038111156147b7578182fd5b61451c86828701613f42565b6000602082840312156147d4578081fd5b81356001600160401b038111156147e9578182fd5b610c5e84828501613f81565b600080600060408486031215614809578081fd5b83356001600160401b038082111561481f578283fd5b9085019060808288031215614832578283fd5b90935060208501359080821115614847578283fd5b506142f786828701613f42565b600060208284031215614865578081fd5b5035919050565b600080600060408486031215614880578081fd5b8335925060208401356001600160401b038111156142eb578182fd5b600080600080606085870312156148b1578182fd5b8435935060208501356001600160401b038111156148cd578283fd5b6148d987828801613f42565b9598909750949560400135949350505050565b600080604083850312156148fe578182fd5b50508035926020909101359150565b600082825180855260208086019550808260051b840101818601855b8481101561495757601f1986840301895261494583835161498d565b98840198925090830190600101614929565b5090979650505050505050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b600081518084526149a5816020860160208601614e69565b601f01601f19169290920160200192915050565b600082516149cb818460208701614e69565b9190910192915050565b600084516149e7818460208901614e69565b60609490941b6bffffffffffffffffffffffff191691909301908152601481019190915260340192915050565b60008351614a26818460208801614e69565b601760f91b9083019081528351614a44816001840160208801614e69565b01600101949350505050565b8183823760009101908152919050565b60008351614a72818460208801614e69565b835190830190614a86818360208801614e69565b01949350505050565b6001600160a01b03848116825283166020820152606060408201819052600090610af29083018461498d565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061312f9083018461498d565b602081526000610d6a602083018461490d565b604081526000614b14604083018561490d565b8281036020840152610d66818561490d565b828152604060208201526000610c5e604083018461498d565b602081526000610c5e602083018486614964565b602081526000610d6a602083018461498d565b604081526000614b79604083018561498d565b8281036020840152610d66818561498d565b60208082526029908201527f52656769737472793a2053454e4445525f49535f4e4f545f415050524f5645446040820152682fa7a92fa7aba722a960b91b606082015260800190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b60208082526027908201527f52656769737472793a2053454e4445525f49535f4e4f545f4d494e54494e475f60408201526626a0a720a3a2a960c91b606082015260800190565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b60208082526022908201527f52656769737472793a20494e53554646494349454e545f5045524d495353494f6040820152614e5360f01b606082015260800190565b6000808335601e19843603018112614d10578283fd5b8301803591506001600160401b03821115614d29578283fd5b602001915036819003821315613c5057600080fd5b604051601f8201601f191681016001600160401b0381118282101715614d6657614d66614f3c565b604052919050565b60006001600160401b03821115614d8757614d87614f3c565b5060051b60200190565b60008219821115614da457614da4614f10565b500190565b600082614db857614db8614f26565b500490565b600082821015614dcf57614dcf614f10565b500390565b6000610d6a368484613e4d565b600060808236031215614df2578081fd5b604051608081016001600160401b038282108183111715614e1557614e15614f3c565b8160405284359150614e2682614f52565b81835260208501356020840152604085013560408401526060850135915080821115614e50578384fd5b50614e5d36828601613f81565b60608301525092915050565b60005b83811015614e84578181015183820152602001614e6c565b838111156113cb5750506000910152565b600081614ea457614ea4614f10565b506000190190565b600181811c90821680614ec057607f821691505b6020821081141561137c57634e487b7160e01b600052602260045260246000fd5b6000600019821415614ef557614ef5614f10565b5060010190565b600082614f0b57614f0b614f26565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461116c57600080fd5b6001600160e01b03198116811461116c57600080fdfebe2bb46ac0377341a1ec5c3116d70fd5029d704bd46292e58f6265dd177ebafea164736f6c6343000804000a";
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
