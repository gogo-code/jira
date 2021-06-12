import React, { useState, useEffect } from 'react'

export interface User {
    id:string;
    name:string;
    email:string;
    title:string;
    organization:string;
}

// 规定类型
interface SearchPanelProps {
    users:User[],
    param:{
        name:string;
        personId:string;
    }
    setParam:(param:SearchPanelProps['param'])=>void;
}

export const SearchPanel = ({users,param,setParam}:SearchPanelProps) => {
    return <form>
        <div>
            {/* 浅拷贝 */}
            {/* setParam(Object.assign({},)) */}
            <input type="text" value={param.name} onChange={evt=>setParam({...param,name:evt.target.value})}/>
            <select name="" id="" value={param.personId} onChange={evt=>setParam({...param,personId:evt.target.value})}>
                <option value="">负责人</option>
                {
                    users.map(user=><option value={user.id} key={user.id}>{user.name}</option>)
                }
            </select>
        </div>
    </form>
}