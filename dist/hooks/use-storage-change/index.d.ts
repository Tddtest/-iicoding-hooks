import type { TStorageListenersType, TStorageType } from "@iicoding/utils";
import type { TAnyFn } from "./type";
export declare function useStorageChange(storageKey: string): void;
export declare function useStorageChange(storageKey: string, triggerAction: TAnyFn): void;
export declare function useStorageChange(storageKey: string, triggerAction: TStorageListenersType[]): number;
export declare function useStorageChange(storageKey: string, triggerAction: TStorageListenersType): number;
export declare function initExtendStorage(storeType?: TStorageType | 'all'): void;
export default useStorageChange;
