"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MintingManagerForwarder__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "mintingManager",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
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
];
const _bytecode = "0x608060405234801561001057600080fd5b50604051610bdd380380610bdd83398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b610b4a806100936000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80631bf7e13e146100465780636ccbae5f1461006f578063a42474001461009d575b600080fd5b610059610054366004610771565b6100c0565b6040516100669190610860565b60405180910390f35b61008f61007d366004610873565b60009081526001602052604090205490565b604051908152602001610066565b6100b06100ab366004610771565b6101de565b6040519015158152602001610066565b606060005a90506100d28585856101de565b6101365760405162461bcd60e51b815260206004820152602a60248201527f4d696e74696e674d616e61676572466f727761726465723a205349474e415455604482015269149157d253959053125160b21b60648201526084015b60405180910390fd5b6101d361014660208701876108a8565b6000546001600160a01b031660408801358461016560608b018b6108c3565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8e018190048102820181019092528c815292508c91508b908190840183828082843760009201919091525061023d92505050565b9150505b9392505050565b60006102356101ec8561097a565b600054604080516020601f88018190048102820181019092528681526001600160a01b039092169190879087908190840183828082843760009201919091525061031e92505050565b949350505050565b606061024885610467565b600080876001600160a01b0316866102628b8a8989610494565b60405161026f9190610a3b565b60006040518083038160008787f1925050503d80600081146102ad576040519150601f19603f3d011682016040523d82523d6000602084013e6102b2565b606091505b5090925090506102c3603f87610a57565b5a116102d1576102d1610a79565b61031182826040518060400160405280601a81526020017f42617365466f727761726465723a2043414c4c5f4641494c45440000000000008152506104c4565b9998505050505050505050565b6040838101519051636ccbae5f60e01b8152600481019190915260009081903090636ccbae5f90602401602060405180830381865afa158015610365573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103899190610a8f565b905060006104378660600151805190602001208688602001516040516020016103d79392919092835260609190911b6bffffffffffffffffffffffff19166020830152603482015260540190565b60408051601f1981840301815282825280516020918201207f19457468657265756d205369676e6564204d6573736167653a0a33320000000084830152603c8085019190915282518085039091018152605c909301909152815191012090565b905081866020015114801561045d5750855161045d906001600160a01b031682866104fd565b9695505050505050565b60008181526001602081905260409091205461048291610aa8565b60009182526001602052604090912055565b60608285856040516020016104ab93929190610acf565b6040516020818303038152906040529050949350505050565b606083156104d35750816101d7565b8251156104e35782518084602001fd5b8160405162461bcd60e51b815260040161012d9190610860565b600080600061050c858561063f565b9092509050600081600481111561052557610525610b0e565b1480156105435750856001600160a01b0316826001600160a01b0316145b15610553576001925050506101d7565b600080876001600160a01b0316631626ba7e60e01b888860405160240161057b929190610b24565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199094169390931790925290516105b99190610a3b565b600060405180830381855afa9150503d80600081146105f4576040519150601f19603f3d011682016040523d82523d6000602084013e6105f9565b606091505b509150915081801561060c575080516020145b801561063357508051630b135d3f60e11b906106319083016020908101908401610a8f565b145b98975050505050505050565b60008082516041036106755760208301516040840151606085015160001a61066987828585610684565b9450945050505061067d565b506000905060025b9250929050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08311156106bb5750600090506003610768565b8460ff16601b141580156106d357508460ff16601c14155b156106e45750600090506004610768565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015610738573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811661076157600060019250925050610768565b9150600090505b94509492505050565b60008060006040848603121561078657600080fd5b833567ffffffffffffffff8082111561079e57600080fd5b90850190608082880312156107b257600080fd5b909350602085013590808211156107c857600080fd5b818601915086601f8301126107dc57600080fd5b8135818111156107eb57600080fd5b8760208285010111156107fd57600080fd5b6020830194508093505050509250925092565b60005b8381101561082b578181015183820152602001610813565b50506000910152565b6000815180845261084c816020860160208601610810565b601f01601f19169290920160200192915050565b6020815260006101d76020830184610834565b60006020828403121561088557600080fd5b5035919050565b80356001600160a01b03811681146108a357600080fd5b919050565b6000602082840312156108ba57600080fd5b6101d78261088c565b6000808335601e198436030181126108da57600080fd5b83018035915067ffffffffffffffff8211156108f557600080fd5b60200191503681900382131561067d57600080fd5b634e487b7160e01b600052604160045260246000fd5b6040516080810167ffffffffffffffff811182821017156109435761094361090a565b60405290565b604051601f8201601f1916810167ffffffffffffffff811182821017156109725761097261090a565b604052919050565b60006080823603121561098c57600080fd5b610994610920565b61099d8361088c565b81526020808401358183015260408401356040830152606084013567ffffffffffffffff808211156109ce57600080fd5b9085019036601f8301126109e157600080fd5b8135818111156109f3576109f361090a565b610a05601f8201601f19168501610949565b91508082523684828501011115610a1b57600080fd5b808484018584013760009082019093019290925250606082015292915050565b60008251610a4d818460208701610810565b9190910192915050565b600082610a7457634e487b7160e01b600052601260045260246000fd5b500490565b634e487b7160e01b600052600160045260246000fd5b600060208284031215610aa157600080fd5b5051919050565b80820180821115610ac957634e487b7160e01b600052601160045260246000fd5b92915050565b60008451610ae1818460208901610810565b60609490941b6bffffffffffffffffffffffff191691909301908152601481019190915260340192915050565b634e487b7160e01b600052602160045260246000fd5b828152604060208201526000610235604083018461083456fea164736f6c6343000811000a";
const isSuperArgs = (xs) => xs.length > 1;
class MintingManagerForwarder__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(mintingManager, overrides) {
        return super.deploy(mintingManager, overrides || {});
    }
    getDeployTransaction(mintingManager, overrides) {
        return super.getDeployTransaction(mintingManager, overrides || {});
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
exports.MintingManagerForwarder__factory = MintingManagerForwarder__factory;
MintingManagerForwarder__factory.bytecode = _bytecode;
MintingManagerForwarder__factory.abi = _abi;
