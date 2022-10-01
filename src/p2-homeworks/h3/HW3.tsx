import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {randomUUID} from "crypto";
// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<string>>([]) // need to fix any

    const addUserCallback = (name: string) => { // need to fix any
        setUsers([...users, name]) // need to fix
    }

    return (
        <div style={{display:"flex" , marginLeft:"39%" ,flexDirection:"column"}}>
            <hr/>
           <div>homeworks 3</div>

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}

export default HW3
