import React, { useState, useEffect } from 'react'

export const SearchPanel = ({users,param,setParam}) => {
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
