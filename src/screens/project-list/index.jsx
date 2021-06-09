import {SearchPanel} from './search-panel'
import {List} from './list'
import React, { useState, useEffect } from 'react'

export const ProjectListScreen = (params) => {
    const [param, setParam] = useState({name:'',personId:''})
    const [list, setList] = useState([])

    useEffect(()=> {
        fetch('http://localhost:3001/projects').then(async response=> {
            if(response.ok) {
                setList(await response.json())
            }
        })
    },[param])
    return <div>
        <SearchPanel param={param} setParam={setParam}></SearchPanel>
        <List list={list}></List>
    </div>
}
