function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * @auth: iiCoding
 * @time: 2022/2/5
 * @func:
 * @params:
 * @return:
 * @updateTime:
 **/
import { useRef, useState, useEffect } from 'react';
import { extendStorageMethod } from '@iicoding/utils';
/**
 *  监听 storage 变化
 * @type: 是哪一种存储方式 sessionStorage/localStorage
 * @param storageKey
 * @param triggerAction
 * @param type
 * */
export function useStorageChange(storageKey, triggerAction) {
  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'localStorage';
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    storageChange = _useState2[0],
    setStorageChange = _useState2[1];
  var unmountedRef = useRef(false);
  // 备份原来的 store 数据，因为 store 设置过后，值的变化时机，是不可控的，响应到事件发射的时候，值已经变化了
  var oldStoreValue = useRef();
  var _action = typeof triggerAction === 'function' ? ['set'] : Array.isArray(triggerAction) ? triggerAction : [triggerAction || 'set'];
  useEffect(function () {
    // 如果没有扩展 storage 方法 则扩展一次
    if (!window.localStorage['get2Json']) {
      extendStorageMethod(type);
    }

    // 一进页面先清除相关的数据
    // window[type].removeItem(storageKey);
    // 如果是传入函数，则初始化执行一次，不需要调用者再次执行
    if (typeof triggerAction === 'function') {
      triggerAction();
    }
    var storeChange = function storeChange(e) {
      if (!unmountedRef.current) {
        var _ref = e,
          newValue = _ref.newValue,
          newKey = _ref.newKey,
          sourceAction = _ref.triggerAction;
        if (_action.includes(sourceAction) && newKey === storageKey) {
          if (newValue !== oldStoreValue.current) {
            // 如果传入执行函数，则立即执行
            if (typeof triggerAction === 'function') {
              triggerAction();
            } else {
              setStorageChange(Math.random());
            }
            oldStoreValue.current = newValue;
          }
        }
      }
    };
    window.addEventListener('storeChange', storeChange);
    return function () {
      unmountedRef.current = true;
      window.removeEventListener('storeChange', storeChange);
    };
  }, []);
  if (typeof triggerAction !== 'function') {
    return storageChange;
  }
  return undefined;
}
export default useStorageChange;