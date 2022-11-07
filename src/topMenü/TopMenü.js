import React from 'react'
import {  Link} from "react-router-dom";
function TopMenü() {
  return (
    <div>
        <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/employee">EMPLOYEE LİST</Link></li>
        <li><Link to="/employee/add">EMPLOYEE ADD</Link></li>
      </ul>
    </div>
  )
}

export default TopMenü