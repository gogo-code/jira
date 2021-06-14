import React,{FormEvent} from 'react'

// interface Base {
//     id:number
// }

// interface Person extends Base {
//     name:string
// }

// const p:person={
//     name:'123',
//     id:123
// }

export const LoginScreen = () => {
    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const username=(e.currentTarget.elements[0] as HTMLInputElement).value
        const password=(e.currentTarget.elements[1] as HTMLInputElement).value
    }
    
    return <form action="" onSubmit={handleSubmit}>
        <div>
            <label htmlFor="username">用户名</label>
            <input type="text" />
        </div>
        <div>
            <label htmlFor="password">密码</label>
            <input type="text" />
        </div>
        <button type={"submit"}>登录</button>
    </form>

}
