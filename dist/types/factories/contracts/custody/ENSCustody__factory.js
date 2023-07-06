"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENSCustody__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "CustodyNotEnoughBalance",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "InvalidForwardedToken",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidSignature",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "InvalidToken",
        type: "error",
    },
    {
        inputs: [],
        name: "OperationProhibited",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "addr",
                type: "address",
            },
        ],
        name: "Unauthorised",
        type: "error",
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
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
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
                internalType: "address",
                name: "owner",
                type: "address",
            },
        ],
        name: "Parked",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "bytes32",
                name: "previousAdminRole",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "bytes32",
                name: "newAdminRole",
                type: "bytes32",
            },
        ],
        name: "RoleAdminChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address",
            },
        ],
        name: "RoleGranted",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address",
            },
        ],
        name: "RoleRevoked",
        type: "event",
    },
    {
        inputs: [],
        name: "DEFAULT_ADMIN_ROLE",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "MINTER_ROLE",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
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
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "addMinter",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "accounts",
                type: "address[]",
            },
        ],
        name: "addMinters",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address payable",
                name: "receiver",
                type: "address",
            },
        ],
        name: "closeMinter",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "commitment",
                type: "bytes32",
            },
        ],
        name: "commit",
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
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
        ],
        name: "getRoleAdmin",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "grantRole",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "hasRole",
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
                name: "controller",
                type: "address",
            },
            {
                internalType: "address",
                name: "wrapper",
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
                name: "account",
                type: "address",
            },
        ],
        name: "isMinter",
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
                internalType: "string",
                name: "name",
                type: "string",
            },
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "duration",
                type: "uint256",
            },
            {
                internalType: "bytes32",
                name: "secret",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "resolver",
                type: "address",
            },
            {
                internalType: "bytes[]",
                name: "data",
                type: "bytes[]",
            },
            {
                internalType: "bool",
                name: "reverseRecord",
                type: "bool",
            },
            {
                internalType: "uint16",
                name: "ownerControlledFuses",
                type: "uint16",
            },
            {
                internalType: "bool",
                name: "selfCustody",
                type: "bool",
            },
        ],
        name: "makeCommitment",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
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
                name: "",
                type: "address",
            },
            {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]",
            },
            {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]",
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        name: "onERC1155BatchReceived",
        outputs: [
            {
                internalType: "bytes4",
                name: "",
                type: "bytes4",
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
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        name: "onERC1155Received",
        outputs: [
            {
                internalType: "bytes4",
                name: "",
                type: "bytes4",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
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
                internalType: "string",
                name: "name",
                type: "string",
            },
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "duration",
                type: "uint256",
            },
            {
                internalType: "bytes32",
                name: "secret",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "resolver",
                type: "address",
            },
            {
                internalType: "bytes[]",
                name: "data",
                type: "bytes[]",
            },
            {
                internalType: "bool",
                name: "reverseRecord",
                type: "bool",
            },
            {
                internalType: "uint16",
                name: "ownerControlledFuses",
                type: "uint16",
            },
            {
                internalType: "bool",
                name: "selfCustody",
                type: "bool",
            },
        ],
        name: "register",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "removeMinter",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "accounts",
                type: "address[]",
            },
        ],
        name: "removeMinters",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "name",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "duration",
                type: "uint256",
            },
        ],
        name: "renew",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceMinter",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "renounceRole",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "name",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "duration",
                type: "uint256",
            },
        ],
        name: "rentPrice",
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
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "revokeRole",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address payable",
                name: "receiver",
                type: "address",
            },
        ],
        name: "rotateMinter",
        outputs: [],
        stateMutability: "payable",
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
        name: "safeTransfer",
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
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
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
        stateMutability: "payable",
        type: "receive",
    },
];
const _bytecode = "0x60806040523480156200001157600080fd5b506200001c62000022565b620000e4565b600054610100900460ff16156200008f5760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b60005460ff9081161015620000e2576000805460ff191660ff9081179091556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b565b612f6e80620000f46000396000f3fe6080604052600436106102085760003560e01c80638da5cb5b11610118578063acf1a841116100a0578063d547741f1161006f578063d547741f1461062c578063f14fcbc81461064c578063f23a6e611461066c578063f2fde38b1461068c578063ffa1ad74146106ac57600080fd5b8063acf1a84114610591578063bc197c81146105b1578063cf015853146105ea578063d53913931461060a57600080fd5b8063a0e3aef1116100e7578063a0e3aef1146104e5578063a217fddf14610505578063a3f4df7e1461051a578063a424740014610551578063aa271e1a1461057157600080fd5b80638da5cb5b1461047257806391d1485414610490578063983b2d56146104b057806398650275146104d057600080fd5b8063572b6c051161019b5780636ccbae5f1161016a5780636ccbae5f146103ea578063715018a61461040a57806371e2a6571461041f57806381c81d351461043f57806383e7f6ff1461045257600080fd5b8063572b6c05146103565780635fc1964f1461037f578063634486da1461039f5780636352211e146103b257600080fd5b80633092afd5116101d75780633092afd5146102d657806336568abe146102f6578063423f6cef14610316578063485cc9551461033657600080fd5b806301ffc9a7146102145780631bf7e13e14610249578063248a9ca3146102765780632f2ff15d146102b457600080fd5b3661020f57005b600080fd5b34801561022057600080fd5b5061023461022f366004612223565b6106dd565b60405190151581526020015b60405180910390f35b34801561025557600080fd5b5061026961026436600461228e565b610708565b604051610240919061234e565b34801561028257600080fd5b506102a6610291366004612361565b600090815260fb602052604090206001015490565b604051908152602001610240565b3480156102c057600080fd5b506102d46102cf36600461239f565b6107d4565b005b3480156102e257600080fd5b506102d46102f13660046123cf565b6107fe565b34801561030257600080fd5b506102d461031136600461239f565b610812565b34801561032257600080fd5b506102d46103313660046123ec565b6108a5565b34801561034257600080fd5b506102d4610351366004612418565b610a16565b34801561036257600080fd5b506102346103713660046123cf565b6001600160a01b0316301490565b34801561038b57600080fd5b506102d461039a3660046124af565b610b92565b6102d46103ad3660046123cf565b610bda565b3480156103be57600080fd5b506103d26103cd366004612361565b610c9d565b6040516001600160a01b039091168152602001610240565b3480156103f657600080fd5b506102a6610405366004612361565b610ca8565b34801561041657600080fd5b506102d4610cee565b34801561042b57600080fd5b506102d461043a3660046124af565b610d02565b6102d461044d3660046123cf565b610d4a565b34801561045e57600080fd5b506102a661046d36600461254d565b610dc7565b34801561047e57600080fd5b506097546001600160a01b03166103d2565b34801561049c57600080fd5b506102346104ab36600461239f565b610e6a565b3480156104bc57600080fd5b506102d46104cb3660046123cf565b610e95565b3480156104dc57600080fd5b506102d4610ea6565b3480156104f157600080fd5b506102a6610500366004612655565b610ec0565b34801561051157600080fd5b506102a6600081565b34801561052657600080fd5b506102696040518060400160405280600b81526020016a454e5320437573746f647960a81b81525081565b34801561055d57600080fd5b5061023461056c36600461228e565b610f6c565b34801561057d57600080fd5b5061023461058c3660046123cf565b610fbf565b34801561059d57600080fd5b506102d46105ac36600461254d565b610fd9565b3480156105bd57600080fd5b506105d16105cc3660046127c3565b611192565b6040516001600160e01b03199091168152602001610240565b3480156105f657600080fd5b506102d4610605366004612870565b6111f3565b34801561061657600080fd5b506102a6600080516020612f2283398151915281565b34801561063857600080fd5b506102d461064736600461239f565b61137e565b34801561065857600080fd5b506102d4610667366004612361565b6113a3565b34801561067857600080fd5b506105d1610687366004612952565b611417565b34801561069857600080fd5b506102d46106a73660046123cf565b61145b565b3480156106b857600080fd5b5061026960405180604001604052806005815260200164302e312e3160d81b81525081565b60006001600160e01b03198216630271189760e51b1480610702575061070282611477565b92915050565b606060005a905061071a858585610f6c565b61073757604051638baa579f60e01b815260040160405180910390fd5b6107c961074760208701876123cf565b3060408801358461075b60608b018b6129cd565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8e018190048102820181019092528c815292508c91508b90819084018382808284376000920191909152506114ac92505050565b9150505b9392505050565b600082815260fb60205260409020600101546107ef8161158d565b6107f9838361159e565b505050565b610806611625565b61080f8161169e565b50565b61081a6116b6565b6001600160a01b0316816001600160a01b0316146108975760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b6108a182826116c5565b5050565b806108ae6116b6565b6001600160a01b03166108c08261174a565b6001600160a01b03161461090257806108d76116b6565b604051637ea58b1160e01b815260048101929092526001600160a01b0316602482015260440161088e565b61090b826117b8565b604080517f0a8885dd093a12d378a27df09bde33e3caca641a3d6970e06805fde8e847cb46602082015290810183905260009061095f906060015b6040516020818303038152906040528051906020012090565b80546001600160a01b0319166001600160a01b03929092169190911790556000600080516020612f4283398151915254604051637921219560e11b81523060048201526001600160a01b038681166024830152604482018690526001606483015260a06084830152600060a48301529091169150819063f242432a9060c401600060405180830381600087803b1580156109f857600080fd5b505af1158015610a0c573d6000803e3d6000fd5b5050505050505050565b600054610100900460ff1615808015610a365750600054600160ff909116105b80610a505750303b158015610a50575060005460ff166001145b610ab35760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840161088e565b6000805460ff191660011790558015610ad6576000805461ff0019166101001790555b600080516020612f0283398151915280546001600160a01b038086166001600160a01b031992831617909255600080516020612f42833981519152805492851692909116919091179055610b286117f2565b610b30611820565b610b38611820565b610b40611847565b610b4861187e565b80156107f9576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a1505050565b610b9a611625565b60005b81518110156108a157610bc8828281518110610bbb57610bbb612a13565b602002602001015161169e565b80610bd281612a3f565b915050610b9d565b610be561058c6116b6565b610c015760405162461bcd60e51b815260040161088e90612a58565b6001600160a01b038116610c575760405162461bcd60e51b815260206004820152601d60248201527f4d696e746572526f6c653a2052454345495645525f49535f454d505459000000604482015260640161088e565b610c60816118b7565b610c68610ea6565b6040516001600160a01b038216903480156108fc02916000818181858888f193505050501580156108a1573d6000803e3d6000fd5b60006107028261174a565b604080517f1ee5d87a048b728f67073f282321992c260e5be4fa651d08665c5b4ee7a838156020820152908101829052600090610ce790606001610946565b5492915050565b610cf6611625565b610d0060006118cf565b565b610d0a611625565b60005b81518110156108a157610d38828281518110610d2b57610d2b612a13565b60200260200101516118b7565b80610d4281612a3f565b915050610d0d565b610d5561058c6116b6565b610d715760405162461bcd60e51b815260040161088e90612a58565b6001600160a01b038116610c605760405162461bcd60e51b815260206004820152601d60248201527f4d696e746572526f6c653a2052454345495645525f49535f454d505459000000604482015260640161088e565b600080516020612f02833981519152546040516383e7f6ff60e01b81526000916001600160a01b031690829082906383e7f6ff90610e0d90899089908990600401612ab6565b6040805180830381865afa158015610e29573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e4d9190612ada565b60208101518151919250610e6091612b28565b9695505050505050565b600091825260fb602090815260408084206001600160a01b0393909316845291905290205460ff1690565b610e9d611625565b61080f816118b7565b610d00600080516020612f228339815191526103116116b6565b600080516020612f02833981519152546000906001600160a01b0316806365a69dcf8d85610eee5730610ef0565b8d5b8d8d8d8d8d8d8d6040518a63ffffffff1660e01b8152600401610f1b99989796959493929190612bcc565b602060405180830381865afa158015610f38573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f5c9190612c3c565b9c9b505050505050505050505050565b6000610fb7610f7a85612c55565b3085858080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061192192505050565b949350505050565b6000610702600080516020612f2283398151915283610e6a565b610fe461058c6116b6565b6110005760405162461bcd60e51b815260040161088e90612a58565b6002603354036110525760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640161088e565b6002603355600080516020612f02833981519152546040516383e7f6ff60e01b81526001600160a01b039091169060009082906383e7f6ff9061109d90889088908890600401612ab6565b6040805180830381865afa1580156110b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110dd9190612ada565b602081015181519192506110f091612b28565b4710156111105760405163050205f960e01b815260040160405180910390fd5b816001600160a01b031663acf1a841826020015183600001516111339190612b28565b8787876040518563ffffffff1660e01b815260040161115493929190612ab6565b6000604051808303818588803b15801561116d57600080fd5b505af1158015611181573d6000803e3d6000fd5b505060016033555050505050505050565b6000600080516020612f42833981519152546001600160a01b03166111b56116b6565b6001600160a01b0316036111d1575063bc197c8160e01b6111ea565b6040516344e7d94960e01b815260040160405180910390fd5b95945050505050565b6111fe61058c6116b6565b61121a5760405162461bcd60e51b815260040161088e90612a58565b60026033540361126c5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640161088e565b600260338190555060006112b58c8c8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611a6092505050565b90506112c0816117b8565b6112de8c8c846112d057306112d2565b8c5b8c8c8c8c8c8c8c611ae5565b8161136b57604080517f0a8885dd093a12d378a27df09bde33e3caca641a3d6970e06805fde8e847cb4660208201529081018290528a9061132190606001610946565b80546001600160a01b0319166001600160a01b03928316179055604051908b169082907f45aa97e368889fb3527c1db60c59c2ae91e82f21778613449e46d4208c1c4b1290600090a35b5050600160335550505050505050505050565b600082815260fb60205260409020600101546113998161158d565b6107f983836116c5565b6000600080516020612f0283398151915254604051631e29f97960e31b8152600481018490526001600160a01b039091169150819063f14fcbc890602401600060405180830381600087803b1580156113fb57600080fd5b505af115801561140f573d6000803e3d6000fd5b505050505050565b6000600080516020612f42833981519152546001600160a01b031661143a6116b6565b6001600160a01b0316036111d1575063f23a6e6160e01b9695505050505050565b611463611625565b61146c81611c30565b61080f600082611ca6565b60006001600160e01b03198216637965db0b60e01b148061070257506301ffc9a760e01b6001600160e01b0319831614610702565b60606114b785611cb0565b600080876001600160a01b0316866114d18b8a8989611d16565b6040516114de9190612cdf565b60006040518083038160008787f1925050503d806000811461151c576040519150601f19603f3d011682016040523d82523d6000602084013e611521565b606091505b509092509050611532603f87612cfb565b5a1161154057611540612d1d565b61158082826040518060400160405280601a81526020017f42617365466f727761726465723a2043414c4c5f4641494c4544000000000000815250611d46565b9998505050505050505050565b61080f816115996116b6565b611d7f565b6115a88282610e6a565b6108a157600082815260fb602090815260408083206001600160a01b03851684529091529020805460ff191660011790556115e16116b6565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b61162d6116b6565b6001600160a01b03166116486097546001600160a01b031690565b6001600160a01b031614610d005760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161088e565b61080f600080516020612f228339815191528261137e565b60006116c0611de3565b905090565b6116cf8282610e6a565b156108a157600082815260fb602090815260408083206001600160a01b03851684529091529020805460ff191690556117066116b6565b6001600160a01b0316816001600160a01b0316837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45050565b604080517f0a8885dd093a12d378a27df09bde33e3caca641a3d6970e06805fde8e847cb466020820152908101829052600090819061178b90606001610946565b546001600160a01b03169050806107025760405163124bad6360e31b81526004810184905260240161088e565b3033036117e9576117c7611e01565b811461080f57604051635637b6af60e11b81526004810182905260240161088e565b61080f81611cb0565b600054610100900460ff166118195760405162461bcd60e51b815260040161088e90612d33565b6001603355565b600054610100900460ff16610d005760405162461bcd60e51b815260040161088e90612d33565b600054610100900460ff1661186e5760405162461bcd60e51b815260040161088e90612d33565b610d006118796116b6565b6118cf565b600054610100900460ff166118a55760405162461bcd60e51b815260040161088e90612d33565b610d0060006118b26116b6565b611ca6565b61080f600080516020612f2283398151915282611ca6565b609780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6040838101519051636ccbae5f60e01b8152600481019190915260009081903090636ccbae5f90602401602060405180830381865afa158015611968573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061198c9190612c3c565b90506000611a3a8660600151805190602001208688602001516040516020016119da9392919092835260609190911b6bffffffffffffffffffffffff19166020830152603482015260540190565b60408051601f1981840301815282825280516020918201207f19457468657265756d205369676e6564204d6573736167653a0a33320000000084830152603c8085019190915282518085039091018152605c909301909152815191012090565b9050818660200151148015610e6057508551610e60906001600160a01b03168286611e14565b60007f93cdeb708b7545dc668eb9280176169d1c33cfd8ed6f04690a0bcc88a93fc4ae60001b82604051602001611a979190612cdf565b60405160208183030381529060405280519060200120604051602001611ac7929190918252602082015260400190565b60408051601f19818403018152919052805160209091012092915050565b600080516020612f02833981519152546040516383e7f6ff60e01b81526001600160a01b039091169060009082906383e7f6ff90611b2b908f908f908e90600401612ab6565b6040805180830381865afa158015611b47573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b6b9190612ada565b60208101518151919250611b7e91612b28565b471015611b9e5760405163050205f960e01b815260040160405180910390fd5b816001600160a01b03166374694a2b82602001518360000151611bc19190612b28565b8e8e8e8e8e8e8e8e8e8e6040518c63ffffffff1660e01b8152600401611bf09a99989796959493929190612d7e565b6000604051808303818588803b158015611c0957600080fd5b505af1158015611c1d573d6000803e3d6000fd5b5050505050505050505050505050505050565b611c38611625565b6001600160a01b038116611c9d5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161088e565b61080f816118cf565b6108a1828261159e565b604080517f1ee5d87a048b728f67073f282321992c260e5be4fa651d08665c5b4ee7a838156020820152908101829052600090606001604051602081830303815290604052805190602001209050611d058190565b54611d11906001612b28565b905550565b6060828585604051602001611d2d93929190612df0565b6040516020818303038152906040529050949350505050565b60608315611d555750816107cd565b825115611d655782518084602001fd5b8160405162461bcd60e51b815260040161088e919061234e565b611d898282610e6a565b6108a157611da1816001600160a01b03166014611f56565b611dac836020611f56565b604051602001611dbd929190612e2f565b60408051601f198184030181529082905262461bcd60e51b825261088e9160040161234e565b6000303303611df9575060331936013560601c90565b503390565b90565b6000303303611dfe5750601f1936013590565b6000806000611e2385856120f1565b90925090506000816004811115611e3c57611e3c612ea4565b148015611e5a5750856001600160a01b0316826001600160a01b0316145b15611e6a576001925050506107cd565b600080876001600160a01b0316631626ba7e60e01b8888604051602401611e92929190612eba565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909416939093179092529051611ed09190612cdf565b600060405180830381855afa9150503d8060008114611f0b576040519150601f19603f3d011682016040523d82523d6000602084013e611f10565b606091505b5091509150818015611f23575080516020145b8015611f4a57508051630b135d3f60e11b90611f489083016020908101908401612c3c565b145b98975050505050505050565b60606000611f65836002612ed3565b611f70906002612b28565b6001600160401b03811115611f8757611f87612446565b6040519080825280601f01601f191660200182016040528015611fb1576020820181803683370190505b509050600360fc1b81600081518110611fcc57611fcc612a13565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110611ffb57611ffb612a13565b60200101906001600160f81b031916908160001a905350600061201f846002612ed3565b61202a906001612b28565b90505b60018111156120a2576f181899199a1a9b1b9c1cb0b131b232b360811b85600f166010811061205e5761205e612a13565b1a60f81b82828151811061207457612074612a13565b60200101906001600160f81b031916908160001a90535060049490941c9361209b81612eea565b905061202d565b5083156107cd5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604482015260640161088e565b60008082516041036121275760208301516040840151606085015160001a61211b87828585612136565b9450945050505061212f565b506000905060025b9250929050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083111561216d575060009050600361221a565b8460ff16601b1415801561218557508460ff16601c14155b15612196575060009050600461221a565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa1580156121ea573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166122135760006001925092505061221a565b9150600090505b94509492505050565b60006020828403121561223557600080fd5b81356001600160e01b0319811681146107cd57600080fd5b60008083601f84011261225f57600080fd5b5081356001600160401b0381111561227657600080fd5b60208301915083602082850101111561212f57600080fd5b6000806000604084860312156122a357600080fd5b83356001600160401b03808211156122ba57600080fd5b90850190608082880312156122ce57600080fd5b909350602085013590808211156122e457600080fd5b506122f18682870161224d565b9497909650939450505050565b60005b83811015612319578181015183820152602001612301565b50506000910152565b6000815180845261233a8160208601602086016122fe565b601f01601f19169290920160200192915050565b6020815260006107cd6020830184612322565b60006020828403121561237357600080fd5b5035919050565b6001600160a01b038116811461080f57600080fd5b803561239a8161237a565b919050565b600080604083850312156123b257600080fd5b8235915060208301356123c48161237a565b809150509250929050565b6000602082840312156123e157600080fd5b81356107cd8161237a565b600080604083850312156123ff57600080fd5b823561240a8161237a565b946020939093013593505050565b6000806040838503121561242b57600080fd5b82356124368161237a565b915060208301356123c48161237a565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b038111828210171561248457612484612446565b604052919050565b60006001600160401b038211156124a5576124a5612446565b5060051b60200190565b600060208083850312156124c257600080fd5b82356001600160401b038111156124d857600080fd5b8301601f810185136124e957600080fd5b80356124fc6124f78261248c565b61245c565b81815260059190911b8201830190838101908783111561251b57600080fd5b928401925b828410156125425783356125338161237a565b82529284019290840190612520565b979650505050505050565b60008060006040848603121561256257600080fd5b83356001600160401b0381111561257857600080fd5b6125848682870161224d565b909790965060209590950135949350505050565b60006001600160401b038311156125b1576125b1612446565b6125c4601f8401601f191660200161245c565b90508281528383830111156125d857600080fd5b828260208301376000602084830101529392505050565b60008083601f84011261260157600080fd5b5081356001600160401b0381111561261857600080fd5b6020830191508360208260051b850101111561212f57600080fd5b8035801515811461239a57600080fd5b803561ffff8116811461239a57600080fd5b6000806000806000806000806000806101208b8d03121561267557600080fd5b8a356001600160401b038082111561268c57600080fd5b818d0191508d601f8301126126a057600080fd5b6126af8e833560208501612598565b9b506126bd60208e0161238f565b9a5060408d0135995060608d013598506126d960808e0161238f565b975060a08d01359150808211156126ef57600080fd5b506126fc8d828e016125ef565b909650945061270f905060c08c01612633565b925061271d60e08c01612643565b915061272c6101008c01612633565b90509295989b9194979a5092959850565b600082601f83011261274e57600080fd5b8135602061275e6124f78361248c565b82815260059290921b8401810191818101908684111561277d57600080fd5b8286015b848110156127985780358352918301918301612781565b509695505050505050565b600082601f8301126127b457600080fd5b6107cd83833560208501612598565b600080600080600060a086880312156127db57600080fd5b85356127e68161237a565b945060208601356127f68161237a565b935060408601356001600160401b038082111561281257600080fd5b61281e89838a0161273d565b9450606088013591508082111561283457600080fd5b61284089838a0161273d565b9350608088013591508082111561285657600080fd5b50612863888289016127a3565b9150509295509295909350565b60008060008060008060008060008060006101208c8e03121561289257600080fd5b6001600160401b03808d3511156128a857600080fd5b6128b58e8e358f0161224d565b909c509a506128c760208e013561237a565b60208d0135995060408d0135985060608d013597506128e960808e013561237a565b60808d013596508060a08e0135111561290157600080fd5b506129128d60a08e01358e016125ef565b909550935061292360c08d01612633565b925061293160e08d01612643565b91506129406101008d01612633565b90509295989b509295989b9093969950565b60008060008060008060a0878903121561296b57600080fd5b86356129768161237a565b955060208701356129868161237a565b9450604087013593506060870135925060808701356001600160401b038111156129af57600080fd5b6129bb89828a0161224d565b979a9699509497509295939492505050565b6000808335601e198436030181126129e457600080fd5b8301803591506001600160401b038211156129fe57600080fd5b60200191503681900382131561212f57600080fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060018201612a5157612a51612a29565b5060010190565b6020808252818101527f4d696e746572526f6c653a2043414c4c45525f49535f4e4f545f4d494e544552604082015260600190565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b604081526000612aca604083018587612a8d565b9050826020830152949350505050565b600060408284031215612aec57600080fd5b604051604081018181106001600160401b0382111715612b0e57612b0e612446565b604052825181526020928301519281019290925250919050565b8082018082111561070257610702612a29565b81835260006020808501808196508560051b810191508460005b87811015612bbf5782840389528135601e19883603018112612b7657600080fd5b870185810190356001600160401b03811115612b9157600080fd5b803603821315612ba057600080fd5b612bab868284612a8d565b9a87019a9550505090840190600101612b55565b5091979650505050505050565b6000610100808352612be08184018d612322565b6001600160a01b038c81166020860152604085018c9052606085018b90528916608085015283810360a08501529050612c1a818789612b3b565b94151560c0840152505061ffff9190911660e090910152979650505050505050565b600060208284031215612c4e57600080fd5b5051919050565b600060808236031215612c6757600080fd5b604051608081016001600160401b038282108183111715612c8a57612c8a612446565b8160405284359150612c9b8261237a565b81835260208501356020840152604085013560408401526060850135915080821115612cc657600080fd5b50612cd3368286016127a3565b60608301525092915050565b60008251612cf18184602087016122fe565b9190910192915050565b600082612d1857634e487b7160e01b600052601260045260246000fd5b500490565b634e487b7160e01b600052600160045260246000fd5b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b6000610100808352612d938184018d8f612a8d565b6001600160a01b038c81166020860152604085018c9052606085018b90528916608085015283810360a08501529050612dcd818789612b3b565b94151560c0840152505061ffff9190911660e09091015298975050505050505050565b60008451612e028184602089016122fe565b60609490941b6bffffffffffffffffffffffff191691909301908152601481019190915260340192915050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351612e678160178501602088016122fe565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351612e988160288401602088016122fe565b01602801949350505050565b634e487b7160e01b600052602160045260246000fd5b828152604060208201526000610fb76040830184612322565b808202811582820484141761070257610702612a29565b600081612ef957612ef9612a29565b50600019019056fe412386de53449251cbf7ce1f4c6a038bf9c0746e62d331b08ef0c3fa7d0ab6729f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a660793a5062d506d35cc8f1beda67ee5028c16bfcd9c923d5bfc439c04bd929b1a164736f6c6343000811000a";
const isSuperArgs = (xs) => xs.length > 1;
class ENSCustody__factory extends ethers_1.ContractFactory {
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
exports.ENSCustody__factory = ENSCustody__factory;
ENSCustody__factory.bytecode = _bytecode;
ENSCustody__factory.abi = _abi;
