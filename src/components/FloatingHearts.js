import { motion } from "framer-motion";

function FloatingHearts(){

 const hearts = new Array(20).fill(0);

 return(

 <div className="hearts">

 {hearts.map((_,i)=>(
    <motion.div
      key={i}
      className="heart"
      animate={{ y:[0,-800] }}
      transition={{ duration:10, repeat:Infinity, delay:i*0.5 }}
    >
      ❤️
    </motion.div>
 ))}

 </div>

 );

}

export default FloatingHearts;