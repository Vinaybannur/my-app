import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';


//1. Named import and export - latest one
//2. default import and export

 function Counter(){
    const[like,setLike]=useState(0);
    const[dislike,setdisLike]=useState(0);
    const incrementLike = ()=>setLike(like+1);
    const decrementLike = ()=>setdisLike(dislike+1);
    return(
      <div className="likecontainer">
        {/* <button onClick={incrementLike}>👍{like}</button> */}
        <IconButton onClick={incrementLike} aria-label="delete"  color="primary">
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
       
       </IconButton>
        {/* <button onClick={incrementLike}>👎{dislike}</button> */}
        <IconButton onClick={decrementLike} aria-label="delete"  color="error">
        <Badge badgeContent={dislike} color="error">
        👎
        </Badge>
       
       </IconButton>

      </div>
  
    )
  }


  export{Counter}

// we can export everything at the bottom

//type 2 
//2. default import and export
// export default Counter
