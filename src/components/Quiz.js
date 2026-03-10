import { useState } from "react";
import { questions } from "../data/questions";
import { useNavigate } from "react-router-dom";
import BackButton from "./BackButton";

function Quiz(){

  const navigate = useNavigate();

  const [index,setIndex] = useState(0);
  const [score,setScore] = useState(0);

  const current = questions[index];

  const answer = (option) => {

  let newScore = score;

  if(option === current.answer){
    newScore = score + 1;
    setScore(newScore);
  }

  if(index + 1 < questions.length){
    setIndex(index + 1);
  }
  else{
    navigate("/score", { state: { score: newScore } });
  }

};

  return(

    <div className="portal">

      <BackButton />

      <h1>🎮 Memory Quiz</h1>

      <h2 style={{marginTop:"30px"}}>
        {current.question}
      </h2>

      <div style={{marginTop:"30px"}}>

        {current.options.map((o,i)=>(
          <div key={i}>
            <button
              style={{margin:"10px"}}
              onClick={()=>answer(o)}
            >
              {o}
            </button>
          </div>
        ))}

      </div>

    </div>

  );

}

export default Quiz;