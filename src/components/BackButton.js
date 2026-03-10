import { useNavigate } from "react-router-dom";

function BackButton(){

const navigate = useNavigate();

return(

<button
style={{
position:"absolute",
top:"30px",
left:"30px",
padding:"10px 18px",
borderRadius:"10px",
border:"none",
background:"#ff66cc",
color:"white",
cursor:"pointer"
}}
onClick={()=>navigate("/home")}
>

⬅ Back to Galaxy

</button>

);

}

export default BackButton;