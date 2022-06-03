declare type noop = (this: any, ...args: any[]) => any;
declare function useMemoizedHandle<T extends noop>(fn: T): T;
export default useMemoizedHandle;
