export function Buttondisplay(props){
    console.log(props);
    return <button onClick={props.handle} className={props.style ? props.style :"p-5 text-xs "}  style={btnStyle}>{props.tittle ? props.tittle:"Defuatl"}</button>
}
const btnStyle= {
  
    // width:"100px",
    height:"50px",
    borderRadius:"5px",
    // margin:"10px",  

};
export function btnLogin(){
    return <button className="">Login</button>
}