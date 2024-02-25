/********************************************** use-request-all ************************************************/
/**
 * 此 hooks  批量请求，将来将要废弃或重新定义，请谨慎使用
 */
export * from "./hooks/use-request-all";
export { default as useRequestAll } from "./hooks/use-request-all";
/********************************************** use-request-all ************************************************/

/******************************************** use-memoized-handle **********************************************/
/**
 * 此 hooks 规避 hooks 闭包陷阱使用
 */
export * from "./hooks/use-memoized-handle";
export { default as useMemoizedHandle } from "./hooks/use-memoized-handle";
/******************************************** use-memoized-handle **********************************************/

/************************************************ use-request **************************************************/
/**
 * 此 hooks 就是请求hooks ，返回 loading 状态 错误信息（出错时） 数据（正确时）如只需要 code码 则初始化调用时传入相应 options 即可
 */
export * from "./hooks/use-request";
export * from "./hooks/use-request/interface";
export { default as useRequest } from "./hooks/use-request";
/************************************************ use-request **************************************************/

/********************************************** useRequestList *************************************************/
/**
 * 此 hooks 可单独使用，也可以结合 useStorageChange，一般用作列表数据请求，如表格。搭配useStorageChange 当列表 分页/搜索 等条件变化时，可以设置本地 store 数据，来自动请求数据
 */
export * from "./hooks/use-request-list";
export { default as useRequestList } from "./hooks/use-request-list";
/********************************************** useRequestList *************************************************/

/********************************************* useStorageChange ************************************************/
/**
 * 此 hooks 结合 @iicoding-utils 包中的 extendStorageMethod 方法，可以让本地存储变更时，出发hooks执行
 * 在应用入口 执行 extendStorageMethod('all')[ all ---> [sessionStorage 和 localStorage], localStorage ---> [localStorage], sessionStorage ---> [sessionStorage] ] 会让相应的本地存储变成可扩展的，调用时，根据类型提示，传入相应的参数，即可出发hook 更新
 * useStorageChange 中 会监听传入的 storeKey 如发生变化，则执行相应的逻辑
 */
export * from "./hooks/use-storage-change";
export * from "./hooks/use-storage-change/type";
export { default as useStorageChange } from "./hooks/use-storage-change";
/********************************************* useStorageChange ************************************************/