import { useRef, useMemo } from 'react';
export function useMemoizedHandle(fn) {
  var fnRef = useRef(fn);
  fnRef.current = useMemo(function () {
    return fn;
  }, [fn]);
  var memoizedHandle = useRef();
  if (!memoizedHandle.current) {
    memoizedHandle.current = function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return fnRef.current.apply(this, args);
    };
  }
  return memoizedHandle.current;
}
export default useMemoizedHandle;