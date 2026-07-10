// hooks must be called on top
// do not call inside loops,condition,nested functions, etc
// React stores hook state by call position, not by variable name.
import { useState } from "react";
let isLoggedIn;
if(isLoggedIn){
    const [user,setUser] = useState(null)
}