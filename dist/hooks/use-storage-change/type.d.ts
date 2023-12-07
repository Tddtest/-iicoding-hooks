import type { TStorageListenersType } from "@iicoding/utils";
export interface IDefinedEvent extends Event {
    newKey: string;
    newValue: any;
    triggerAction: TStorageListenersType;
}
export type TAnyFn = (...args: any[]) => void;
