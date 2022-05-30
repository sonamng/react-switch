 




// if-else in react js 

// import React,{useState} from "react";
// function Show(){
//     const [num,setNum]=useState(true)

// const print=()=>{
//     if(num){
//         return(
//             <h1>yaah it ois here</h1>
//         )

//     }else{
//         return(
//             <h1>it is not here </h1>
//         )
//     }
// }
//     return(
//         <div>
//             <h1>React conditions</h1>
//             {print()}
//         </div>
//     )
// }
// export default Show;

 


import React,{useState} from "react";
function Show(){
    const [num,setNum]=useState(true)

const Num=()=>{
    switch(num){
        case true:
        return(
            <h1>HAAA </h1>
        )
        default:return(<h1>NOOO</h1>) 

    }
}
    return(
        <div>
            <h1>React conditions</h1>
            {Num()}
        </div>
    )
}
export default Show;

