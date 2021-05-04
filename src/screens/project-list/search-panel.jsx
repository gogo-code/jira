import React, { useState, useEffect } from 'react'

export const SearchPanel = (params) => {
    const [param, setParam] = useState({name:'',personId:''})
    const [users, setUsers] = useState([])
    const [list, setList] = useState([])

    useEffect(()=> {
        fetch('').then(async response=> {
            if(response.ok) {
                setList(await response.json())
            }
        })
    },[param])
    return <form>
        <div>
            {/* 浅拷贝 */}
            <input type="text" value={param.name} onChange={evt=>setParam({...param,name:evt.target.value})}/>
            <select name="" id="" value={param.personId} onChange={evt=>setParam({...param,personId:evt.target.value})}>
                <option value=""></option>
                {
                    users.map(user=><option value={user.id}>{user.name}</option>)
                }
            </select>
        </div>
    </form>
}
