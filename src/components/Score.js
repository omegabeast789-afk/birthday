import { useLocation,useNavigate } from "react-router-dom";
import BackButton from "./BackButton";

function Score(){

  const location = useLocation();
  const navigate = useNavigate();

  const score = location.state?.score || 0;

  return(

    <div className="portal">

      <BackButton />

      <h1>⭐ Quiz Score</h1>

      <h2 style={{marginTop:"30px"}}>
        You scored {score}
      </h2>

      <button
        style={{marginTop:"40px"}}
        onClick={()=>navigate("/gift")}
      >
        Claim Your Gift 🎁
      </button>

    </div>

  );

}

export default Score;