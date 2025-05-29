// import React, { useRef, useState } from "react";

// const App = () => {

//   // const [data,setData] = useState([]);
//   // const inputRef = useRef(null);

//   //let x = "React.js";
//   //let data = "boy"
//   //let array = ["user1", "user2", "user3", "user4"];
//   //{x}
//   //{array.map((user) => {return <h2>{user}</h2>})}

//   //{data==="boy"?<h1>Boy</h1>:<h1>Girl</h1>}

// //   ----------------------------------------------

//   // return (
//   //   <div>
//   //     <input ref={inputRef} type="text" />
//   //     <button onClick={()=> {setData([...data,inputRef.current.value])}}>Submit</button>
//   //     {data.map((item,index)=>{return <h2 key={index}>{item}</h2>})}

//   //   </div>
//   // )
// }

import Todo from "./Components/Todo"

const App = () => {

    return(
        <div>
            <Todo />
        </div>
    )
}
export default App