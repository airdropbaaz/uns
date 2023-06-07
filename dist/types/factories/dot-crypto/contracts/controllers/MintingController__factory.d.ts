import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { MintingController, MintingControllerInterface } from "../../../../dot-crypto/contracts/controllers/MintingController";
declare type MintingControllerConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MintingController__factory extends ContractFactory {
    constructor(...args: MintingControllerConstructorParams);
    deploy(registry: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<MintingController>;
    getDeployTransaction(registry: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): MintingController;
    connect(signer: Signer): MintingController__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b50604051620015bd380380620015bd833981810160405260208110156200003757600080fd5b50516200004d336001600160e01b036200007316565b600180546001600160a01b0319166001600160a01b0392909216919091179055620001ef565b6200008e816000620000c560201b6200120c1790919060201c565b6040516001600160a01b038216907f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f690600090a250565b620000da82826001600160e01b036200016c16565b156200014757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015290519081900360640190fd5b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b60006001600160a01b038216620001cf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806200159b6022913960400191505060405180910390fd5b506001600160a01b03166000908152602091909152604090205460ff1690565b61139c80620001ff6000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c806398650275116100665780639865027514610305578063aa271e1a1461030d578063b2da297914610347578063be362e2e146103c5578063c36c2125146104fe5761009e565b80634c0b0ed2146100a35780637b103999146101595780637caf3ad81461017d5780638ad364f814610258578063983b2d56146102df575b600080fd5b610157600480360360408110156100b957600080fd5b6001600160a01b038235169190810190604081016020820135600160201b8111156100e357600080fd5b8201836020820111156100f557600080fd5b803590602001918460018302840111600160201b8311171561011657600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506105bd945050505050565b005b61016161074c565b604080516001600160a01b039092168252519081900360200190f35b6101576004803603608081101561019357600080fd5b6001600160a01b038235169190810190604081016020820135600160201b8111156101bd57600080fd5b8201836020820111156101cf57600080fd5b803590602001918460018302840111600160201b831117156101f057600080fd5b919390926001600160a01b0383351692604081019060200135600160201b81111561021a57600080fd5b82018360208201111561022c57600080fd5b803590602001918460018302840111600160201b8311171561024d57600080fd5b50909250905061075b565b6101576004803603606081101561026e57600080fd5b6001600160a01b038235169190810190604081016020820135600160201b81111561029857600080fd5b8201836020820111156102aa57600080fd5b803590602001918460018302840111600160201b831117156102cb57600080fd5b9193509150356001600160a01b0316610957565b610157600480360360208110156102f557600080fd5b50356001600160a01b0316610b2b565b610157610b7b565b6103336004803603602081101561032357600080fd5b50356001600160a01b0316610b86565b604080519115158252519081900360200190f35b6101576004803603604081101561035d57600080fd5b6001600160a01b038235169190810190604081016020820135600160201b81111561038757600080fd5b82018360208201111561039957600080fd5b803590602001918460018302840111600160201b831117156103ba57600080fd5b509092509050610b9e565b610157600480360360608110156103db57600080fd5b6001600160a01b038235169190810190604081016020820135600160201b81111561040557600080fd5b82018360208201111561041757600080fd5b803590602001918460018302840111600160201b8311171561043857600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b81111561048a57600080fd5b82018360208201111561049c57600080fd5b803590602001918460018302840111600160201b831117156104bd57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610bf1945050505050565b6101576004803603606081101561051457600080fd5b6001600160a01b038235169190810190604081016020820135600160201b81111561053e57600080fd5b82018360208201111561055057600080fd5b803590602001918460018302840111600160201b8311171561057157600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550505090356001600160a01b03169150610dec9050565b6105c633610b86565b6106015760405162461bcd60e51b81526004018080602001828103825260308152602001806112f56030913960400191505060405180910390fd5b6001546040805163ebf0c71760e01b815290516001600160a01b039092169163b5466669918591849163ebf0c717916004808301926020929190829003018186803b15801561064f57600080fd5b505afa158015610663573d6000803e3d6000fd5b505050506040513d602081101561067957600080fd5b50516040516001600160e01b031960e085901b1681526001600160a01b0383166004820190815260248201839052606060448301908152875160648401528751889360840190602085019080838360005b838110156106e25781810151838201526020016106ca565b50505050905090810190601f16801561070f5780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b15801561073057600080fd5b505af1158015610744573d6000803e3d6000fd5b505050505050565b6001546001600160a01b031690565b6107cf8686868080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f89018190048102820181019092528781529250879150869081908401838280828437600092019190915250610bf192505050565b6001546040805163ebf0c71760e01b815290516001600160a01b0390921691632525d06a91869184916368b62d3291839163ebf0c717916004808301926020929190829003018186803b15801561082557600080fd5b505afa158015610839573d6000803e3d6000fd5b505050506040513d602081101561084f57600080fd5b5051604080516001600160e01b031960e085901b1681526004810183815260248201928352604482018d90528d928d92606401848480828437600083820152604051601f909101601f1916909201965060209550909350505081840390508186803b1580156108bd57600080fd5b505afa1580156108d1573d6000803e3d6000fd5b505050506040513d60208110156108e757600080fd5b5051604080516001600160e01b031960e086901b1681526001600160a01b039093166004840152602483019190915251604480830192600092919082900301818387803b15801561093757600080fd5b505af115801561094b573d6000803e3d6000fd5b50505050505050505050565b6109a58484848080601f016020809104026020016040519081016040528093929190818152602001838380828437600092018290525060408051602081019091529081529250610bf1915050565b6001546040805163ebf0c71760e01b815290516001600160a01b0390921691632525d06a91849184916368b62d3291839163ebf0c717916004808301926020929190829003018186803b1580156109fb57600080fd5b505afa158015610a0f573d6000803e3d6000fd5b505050506040513d6020811015610a2557600080fd5b5051604080516001600160e01b031960e085901b1681526004810183815260248201928352604482018b90528b928b92606401848480828437600083820152604051601f909101601f1916909201965060209550909350505081840390508186803b158015610a9357600080fd5b505afa158015610aa7573d6000803e3d6000fd5b505050506040513d6020811015610abd57600080fd5b5051604080516001600160e01b031960e086901b1681526001600160a01b039093166004840152602483019190915251604480830192600092919082900301818387803b158015610b0d57600080fd5b505af1158015610b21573d6000803e3d6000fd5b5050505050505050565b610b3433610b86565b610b6f5760405162461bcd60e51b81526004018080602001828103825260308152602001806112f56030913960400191505060405180910390fd5b610b7881611115565b50565b610b843361115d565b565b6000610b98818363ffffffff6111a516565b92915050565b610bec8383838080601f016020809104026020016040519081016040528093929190818152602001838380828437600092018290525060408051602081019091529081529250610bf1915050565b505050565b610bfa33610b86565b610c355760405162461bcd60e51b81526004018080602001828103825260308152602001806112f56030913960400191505060405180910390fd5b6001546040805163ebf0c71760e01b815290516001600160a01b0390921691630467e014918691849163ebf0c717916004808301926020929190829003018186803b158015610c8357600080fd5b505afa158015610c97573d6000803e3d6000fd5b505050506040513d6020811015610cad57600080fd5b50516040516001600160e01b031960e085901b1681526001600160a01b0383166004820190815260248201839052608060448301908152885160848401528851899389939291606482019160a40190602087019080838360005b83811015610d1f578181015183820152602001610d07565b50505050905090810190601f168015610d4c5780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b83811015610d7f578181015183820152602001610d67565b50505050905090810190601f168015610dac5780820380516001836020036101000a031916815260200191505b509650505050505050600060405180830381600087803b158015610dcf57600080fd5b505af1158015610de3573d6000803e3d6000fd5b50505050505050565b610df533610b86565b610e305760405162461bcd60e51b81526004018080602001828103825260308152602001806112f56030913960400191505060405180910390fd5b6001546040805163ebf0c71760e01b815290516001600160a01b039092169163b5466669918691849163ebf0c717916004808301926020929190829003018186803b158015610e7e57600080fd5b505afa158015610e92573d6000803e3d6000fd5b505050506040513d6020811015610ea857600080fd5b50516040516001600160e01b031960e085901b1681526001600160a01b0383166004820190815260248201839052606060448301908152885160648401528851899360840190602085019080838360005b83811015610f11578181015183820152602001610ef9565b50505050905090810190601f168015610f3e5780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b158015610f5f57600080fd5b505af1158015610f73573d6000803e3d6000fd5b50506001546040805163ebf0c71760e01b815290516001600160a01b039092169350632525d06a9250849184916368b62d3291839163ebf0c717916004808301926020929190829003018186803b158015610fcd57600080fd5b505afa158015610fe1573d6000803e3d6000fd5b505050506040513d6020811015610ff757600080fd5b5051604080516001600160e01b031960e085901b16815260048101838152602482019283528a5160448301528a518b93919260640190602085019080838360005b83811015611050578181015183820152602001611038565b50505050905090810190601f16801561107d5780820380516001836020036101000a031916815260200191505b50935050505060206040518083038186803b15801561109b57600080fd5b505afa1580156110af573d6000803e3d6000fd5b505050506040513d60208110156110c557600080fd5b5051604080516001600160e01b031960e086901b1681526001600160a01b039093166004840152602483019190915251604480830192600092919082900301818387803b158015610dcf57600080fd5b61112660008263ffffffff61120c16565b6040516001600160a01b038216907f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f690600090a250565b61116e60008263ffffffff61128d16565b6040516001600160a01b038216907fe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb6669290600090a250565b60006001600160a01b0382166111ec5760405162461bcd60e51b81526004018080602001828103825260228152602001806113466022913960400191505060405180910390fd5b506001600160a01b03166000908152602091909152604090205460ff1690565b61121682826111a5565b15611268576040805162461bcd60e51b815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015290519081900360640190fd5b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b61129782826111a5565b6112d25760405162461bcd60e51b81526004018080602001828103825260218152602001806113256021913960400191505060405180910390fd5b6001600160a01b0316600090815260209190915260409020805460ff1916905556fe4d696e746572526f6c653a2063616c6c657220646f6573206e6f74206861766520746865204d696e74657220726f6c65526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c65526f6c65733a206163636f756e7420697320746865207a65726f2061646472657373a265627a7a72315820c058d70355f7d37ff6b3b61cd850cc4a41893e30048389698c062148bf3d2ff464736f6c634300050c0032526f6c65733a206163636f756e7420697320746865207a65726f2061646472657373";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        payable: boolean;
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        constant?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        payable?: undefined;
        stateMutability?: undefined;
        constant?: undefined;
        outputs?: undefined;
    } | {
        constant: boolean;
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        payable: boolean;
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): MintingControllerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MintingController;
}
export {};
//# sourceMappingURL=MintingController__factory.d.ts.map