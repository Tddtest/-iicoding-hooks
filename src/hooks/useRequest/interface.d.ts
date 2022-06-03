import type { Dispatch } from 'react';
export interface IRequestState<R> {
    loading: boolean;
    data?: R;
}
export interface IRequestOptions<R> {
    code?: boolean;
    codeData?: boolean;
    conversionFn?: (params: any) => R;
    defaultData?: any;
}
declare type TNoop = (...args: any[]) => any;
export declare type TService = (...args: Parameters<TNoop>) => Promise<any>;
export interface IResponse<R, P> {
    loading: boolean;
    data: R | undefined;
    caller: (params?: P) => Promise<R>;
    setData: Dispatch<R>;
}
export {};
