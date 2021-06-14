import { useEffect, useState } from "react"

export const isFalsy = (value:unknown) => {
    return value===0 ? false : !value
}

// 在一个函数里，改变传入的对象本身是不好的
export const cleanObject = (object?: { [key: string]: unknown }) => {
    const result={...object}
    Object.keys(result).forEach(key=> {
        
        const value=result[key]
        if(isFalsy(value)) {
            delete result[key]
        }
    })
    return result
}

// 自定义hook函数必须以use开头
export const useMount = (callback:()=>void) => {
    useEffect(() => {
        callback()
    }, [])
}

export const useDebounce = <v>(value:v,delay?:number) => {
    const [deboucedValue, setDeboucedValue] = useState(value)
    useEffect(() => {
        // 每次在value变化之后，设置一个定时器
        const timeout=setTimeout(()=>setDeboucedValue(value),delay)
        // 每次在上一个useEffect处理完后再运行
        return () => {
            clearTimeout(timeout)
        }
    }, [value,delay])
    return deboucedValue
}


