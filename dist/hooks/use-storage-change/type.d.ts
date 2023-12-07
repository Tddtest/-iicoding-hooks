import { _localStorage, _sessionStorage } from "@iicoding/utils";
import type { TStorageListenersType } from "@iicoding/utils";
export interface IDefinedEvent extends Event {
    newKey: string;
    newValue: any;
    triggerAction: TStorageListenersType;
}
export type TAnyFn = (...args: any[]) => void;
declare global {
    interface Window {
        sessionStorage: Storage & typeof _sessionStorage;
        localStorage: Storage & typeof _localStorage;
    }
}
