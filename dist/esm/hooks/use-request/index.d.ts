import { DependencyList } from 'react';
import { IRequestOptions, TService, IResponse } from './interface';
export declare const useRequest: <P, R = any>(service: TService, options?: IRequestOptions<R> | undefined, deps?: DependencyList) => IResponse<R, P>;
export default useRequest;
