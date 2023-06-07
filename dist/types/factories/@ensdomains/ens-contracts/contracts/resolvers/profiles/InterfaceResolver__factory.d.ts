import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { InterfaceResolver, InterfaceResolverInterface } from "../../../../../../@ensdomains/ens-contracts/contracts/resolvers/profiles/InterfaceResolver";
export declare class InterfaceResolver__factory {
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
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
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): InterfaceResolverInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): InterfaceResolver;
}
//# sourceMappingURL=InterfaceResolver__factory.d.ts.map