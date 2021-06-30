import { useEffect, useRef, useState } from "react";

export const isFalsy = (value: unknown) => {
  return value === 0 ? false : !value;
};

export const isVoid = (value: unknown) =>
  value === undefined || value === null || value === "";

// 这里不用object类型，原因是object很广泛，可以是函数，那么就没有键值,后面对象拷贝后是空对象，result[key]就有问题
// 在一个函数里，改变传入的对象本身是不好的
export const cleanObject = (object?: { [key: string]: unknown }) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isVoid(value)) {
      delete result[key];
    }
  });
  return result;
};

// 自定义hook函数必须以use开头
export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useDebounce = <v>(value: v, delay?: number) => {
  const [deboucedValue, setDeboucedValue] = useState(value);
  useEffect(() => {
    // 每次在value变化之后，设置一个定时器
    const timeout = setTimeout(() => setDeboucedValue(value), delay);
    // 每次在上一个useEffect处理完后再运行
    return () => {
      clearTimeout(timeout);
    };
  }, [value, delay]);
  return deboucedValue;
};

export const useArray = <T>(initialArray: T[]) => {
  const [value, setValue] = useState(initialArray);
  return {
    value,
    setValue,
    add: (item: T) => setValue([...value, item]),
    clear: () => setValue([]),
    removeIndex: (index: number) => {
      const copy = [...value];
      copy.splice(index, 1);
      setValue(copy);
    },
  };
};

export const useDocumentTitle = (title: string, keepOnUnmount = true) => {
  const oldTitle = useRef(document.title).current;
  // 页面加载时: 旧title
  // 加载后：新title

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    return () => {
      if (!keepOnUnmount) {
        // 如果不指定依赖，读到的就是旧title
        document.title = oldTitle;
      }
    };
  }, [keepOnUnmount, oldTitle]);
};
