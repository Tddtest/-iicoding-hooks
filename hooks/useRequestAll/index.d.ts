import { DependencyList } from 'react';
import { IRequestOptions, TService, IResponse } from '../useRequest/interface';
export interface IServiceItem {
    service: TService;
    params?: any;
    name?: string;
}
export declare type TServiceArray = IServiceItem[];
export interface IAllResponse<R> extends IResponse<any, R> {
}
declare const useRequestAll: <R = any>(services: TServiceArray, options?: Pick<IRequestOptions<R>, "conversionFn"> | undefined, deps?: DependencyList) => IAllResponse<R>;
export default useRequestAll;
