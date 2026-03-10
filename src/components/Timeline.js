import { useNavigate } from "react-router-dom";
import BackButton from "./BackButton";

function Timeline() {

  const navigate = useNavigate();

  const events = [
    "The day we met ✨",
    "Our first long conversation 🌙",
    "That unforgettable trip 🚗",
    "All the random chaos in between 😂"
  ];

  return (
    <div className="portal">

      <BackButton />

      <h1>🕰 Our Timeline</h1>

      <ul style={{marginTop:"40px"}}>
        {events.map((event,i)=>(
          <li key={i} style={{margin:"15px"}}>
            {event}
          </li>
        ))}
      </ul>

      <button
        style={{marginTop:"40px"}}
        onClick={()=>navigate("/gallery")}
      >
        Next → Gallery
      </button>

    </div>
  );
}

export default Timeline;