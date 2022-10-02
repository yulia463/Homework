import React from 'react'
import {useNavigate} from "react-router-dom";
import {PATH} from "./RoutesCustom";

function Header() {

const navigate=useNavigate()
    return (
        <div style={{
            width:'100%',
            height:'50px',
            backgroundColor:'pink'
        }}>
         <div onClick={()=>{navigate(PATH.PRE_JUNIOR)}}>
             Pre junior
         </div>

        </div>
    )
}

export default Header
