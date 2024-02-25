import type { Dispatch } from 'react';
import type { TStorageType } from "@iicoding/utils";
export interface IRequestState<R> {
    loading: boolean;
    data?: R;
}
export interface IRequestOptions<R> {
    code?: boolean;
    codeData?: boolean;
    conversionFn?: (params: any) => R;
    defaultData?: any;
    needLoading?: boolean;
}
export interface IRequestListState<R> extends IPaging, Omit<IRequestState<R>, 'data'> {
    data: {
        list: R;
        [key: string]: any;
    };
}
interface IPaging {
    total?: number;
    current?: number;
    pageSize?: number;
    pageNumber?: number;
}
export interface IRequestListOptions<R> extends Omit<IRequestOptions<R>, 'defaultData' | 'conversionFn'> {
    initLoading?: boolean;
    storeKey?: string;
    storeType?: TStorageType;
    conversionFn?: (params: any) => IRequestListState<R>['data'];
    paging?: IPaging;
}
type TNoop = (...args: any[]) => any;
export type TService = (...args: Parameters<TNoop>) => Promise<any>;
export interface IResponse<R, P> {
    loading: boolean;
    data: R | undefined;
    caller: (params?: P) => Promise<R>;
    setData: Dispatch<R>;
}
export interface IResponseListOptions<R, P> extends Omit<IResponse<R, P>, 'data' | 'caller'> {
    data: IRequestListState<R>['data'];
    caller: (params?: P) => Promise<IRequestListState<R>['data']>;
}
export {};
