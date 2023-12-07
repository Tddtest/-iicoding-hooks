import { IRequestListOptions, IResponseListOptions, TService } from '../use-request/interface';
export declare const useRequestList: <P, R = any>(service: TService, options?: IRequestListOptions<R> | undefined) => IResponseListOptions<R, P>;
export default useRequestList;
