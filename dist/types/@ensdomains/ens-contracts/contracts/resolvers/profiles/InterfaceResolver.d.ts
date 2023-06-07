import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../../common";
export interface InterfaceResolverInterface extends utils.Interface {
    functions: {
        "addr(bytes32)": FunctionFragment;
        "addr(bytes32,uint256)": FunctionFragment;
        "clearRecords(bytes32)": FunctionFragment;
        "interfaceImplementer(bytes32,bytes4)": FunctionFragment;
        "recordVersions(bytes32)": FunctionFragment;
        "setAddr(bytes32,uint256,bytes)": FunctionFragment;
        "setAddr(bytes32,address)": FunctionFragment;
        "setInterface(bytes32,bytes4,address)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addr(bytes32)" | "addr(bytes32,uint256)" | "clearRecords" | "interfaceImplementer" | "recordVersions" | "setAddr(bytes32,uint256,bytes)" | "setAddr(bytes32,address)" | "setInterface" | "supportsInterface"): FunctionFragment;
    encodeFunctionData(functionFragment: "addr(bytes32)", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "addr(bytes32,uint256)", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "clearRecords", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "interfaceImplementer", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "recordVersions", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "setAddr(bytes32,uint256,bytes)", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "setAddr(bytes32,address)", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setInterface", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [PromiseOrValue<BytesLike>]): string;
    decodeFunctionResult(functionFragment: "addr(bytes32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addr(bytes32,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "clearRecords", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "interfaceImplementer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "recordVersions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAddr(bytes32,uint256,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAddr(bytes32,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    events: {
        "AddrChanged(bytes32,address)": EventFragment;
        "AddressChanged(bytes32,uint256,bytes)": EventFragment;
        "InterfaceChanged(bytes32,bytes4,address)": EventFragment;
        "VersionChanged(bytes32,uint64)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddrChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AddressChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "InterfaceChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "VersionChanged"): EventFragment;
}
export interface AddrChangedEventObject {
    node: string;
    a: string;
}
export declare type AddrChangedEvent = TypedEvent<[
    string,
    string
], AddrChangedEventObject>;
export declare type AddrChangedEventFilter = TypedEventFilter<AddrChangedEvent>;
export interface AddressChangedEventObject {
    node: string;
    coinType: BigNumber;
    newAddress: string;
}
export declare type AddressChangedEvent = TypedEvent<[
    string,
    BigNumber,
    string
], AddressChangedEventObject>;
export declare type AddressChangedEventFilter = TypedEventFilter<AddressChangedEvent>;
export interface InterfaceChangedEventObject {
    node: string;
    interfaceID: string;
    implementer: string;
}
export declare type InterfaceChangedEvent = TypedEvent<[
    string,
    string,
    string
], InterfaceChangedEventObject>;
export declare type InterfaceChangedEventFilter = TypedEventFilter<InterfaceChangedEvent>;
export interface VersionChangedEventObject {
    node: string;
    newVersion: BigNumber;
}
export declare type VersionChangedEvent = TypedEvent<[
    string,
    BigNumber
], VersionChangedEventObject>;
export declare type VersionChangedEventFilter = TypedEventFilter<VersionChangedEvent>;
export interface InterfaceResolver extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: InterfaceResolverInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        "addr(bytes32)"(node: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        "addr(bytes32,uint256)"(node: PromiseOrValue<BytesLike>, coinType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        clearRecords(node: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        interfaceImplementer(node: PromiseOrValue<BytesLike>, interfaceID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        recordVersions(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber]>;
        "setAddr(bytes32,uint256,bytes)"(node: PromiseOrValue<BytesLike>, coinType: PromiseOrValue<BigNumberish>, a: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "setAddr(bytes32,address)"(node: PromiseOrValue<BytesLike>, a: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setInterface(node: PromiseOrValue<BytesLike>, interfaceID: PromiseOrValue<BytesLike>, implementer: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
    };
    "addr(bytes32)"(node: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    "addr(bytes32,uint256)"(node: PromiseOrValue<BytesLike>, coinType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    clearRecords(node: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    interfaceImplementer(node: PromiseOrValue<BytesLike>, interfaceID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    recordVersions(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    "setAddr(bytes32,uint256,bytes)"(node: PromiseOrValue<BytesLike>, coinType: PromiseOrValue<BigNumberish>, a: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "setAddr(bytes32,address)"(node: PromiseOrValue<BytesLike>, a: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setInterface(node: PromiseOrValue<BytesLike>, interfaceID: PromiseOrValue<BytesLike>, implementer: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        "addr(bytes32)"(node: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        "addr(bytes32,uint256)"(node: PromiseOrValue<BytesLike>, coinType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        clearRecords(node: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        interfaceImplementer(node: PromiseOrValue<BytesLike>, interfaceID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        recordVersions(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        "setAddr(bytes32,uint256,bytes)"(node: PromiseOrValue<BytesLike>, coinType: PromiseOrValue<BigNumberish>, a: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        "setAddr(bytes32,address)"(node: PromiseOrValue<BytesLike>, a: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setInterface(node: PromiseOrValue<BytesLike>, interfaceID: PromiseOrValue<BytesLike>, implementer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "AddrChanged(bytes32,address)"(node?: PromiseOrValue<BytesLike> | null, a?: null): AddrChangedEventFilter;
        AddrChanged(node?: PromiseOrValue<BytesLike> | null, a?: null): AddrChangedEventFilter;
        "AddressChanged(bytes32,uint256,bytes)"(node?: PromiseOrValue<BytesLike> | null, coinType?: null, newAddress?: null): AddressChangedEventFilter;
        AddressChanged(node?: PromiseOrValue<BytesLike> | null, coinType?: null, newAddress?: null): AddressChangedEventFilter;
        "InterfaceChanged(bytes32,bytes4,address)"(node?: PromiseOrValue<BytesLike> | null, interfaceID?: PromiseOrValue<BytesLike> | null, implementer?: null): InterfaceChangedEventFilter;
        InterfaceChanged(node?: PromiseOrValue<BytesLike> | null, interfaceID?: PromiseOrValue<BytesLike> | null, implementer?: null): InterfaceChangedEventFilter;
        "VersionChanged(bytes32,uint64)"(node?: PromiseOrValue<BytesLike> | null, newVersion?: null): VersionChangedEventFilter;
        VersionChanged(node?: PromiseOrValue<BytesLike> | null, newVersion?: null): VersionChangedEventFilter;
    };
    estimateGas: {
        "addr(bytes32)"(node: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        "addr(bytes32,uint256)"(node: PromiseOrValue<BytesLike>, coinType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        clearRecords(node: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        interfaceImplementer(node: PromiseOrValue<BytesLike>, interfaceID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        recordVersions(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        "setAddr(bytes32,uint256,bytes)"(node: PromiseOrValue<BytesLike>, coinType: PromiseOrValue<BigNumberish>, a: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "setAddr(bytes32,address)"(node: PromiseOrValue<BytesLike>, a: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setInterface(node: PromiseOrValue<BytesLike>, interfaceID: PromiseOrValue<BytesLike>, implementer: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        "addr(bytes32)"(node: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "addr(bytes32,uint256)"(node: PromiseOrValue<BytesLike>, coinType: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        clearRecords(node: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        interfaceImplementer(node: PromiseOrValue<BytesLike>, interfaceID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        recordVersions(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "setAddr(bytes32,uint256,bytes)"(node: PromiseOrValue<BytesLike>, coinType: PromiseOrValue<BigNumberish>, a: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "setAddr(bytes32,address)"(node: PromiseOrValue<BytesLike>, a: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setInterface(node: PromiseOrValue<BytesLike>, interfaceID: PromiseOrValue<BytesLike>, implementer: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceID: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=InterfaceResolver.d.ts.map