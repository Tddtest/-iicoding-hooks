type TNoop = (this: any, ...args: any[]) => any;
export declare function useMemoizedHandle<T extends TNoop>(fn: T): T;
export default useMemoizedHandle;
