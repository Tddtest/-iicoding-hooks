import type { TStorageListenersType } from "@iicoding/utils";
import type { TAnyFn } from "./type";
export declare function useStorageChange(storageKey: string): void;
export declare function useStorageChange(storageKey: string, triggerAction: TAnyFn): void;
export declare function useStorageChange(storageKey: string, triggerAction: TStorageListenersType[]): number;
export declare function useStorageChange(storageKey: string, triggerAction: TStorageListenersType): number;
export default useStorageChange;
