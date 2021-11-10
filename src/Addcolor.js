import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

// -------------------------------------------------------------
export function Addcolor() {
  const [color, setcolor] = useState("white");
  const style = { backgroundColor: color };
  const [colors, setcolors] = useState(["violet", "pink", "blue"]);
  // const colors =["violet","pink","blue"];
  return <div>
    {/* <input
        value={color}
        onChange = {(event)=>setcolor(event.target.value)}
        style={style}
        placeholder="Enter a color"/> */}
    <TextField id="Enter a color"
      value={color}
      onChange={(event) => setcolor(event.target.value)}
      style={style}
      label="Standard" variant="standard" />

    {/* <button onClick={()=>setcolors([...colors,color])}>Add color</button> */}
    <Button onClick={() => setcolors([...colors, color])} variant="outlined">Add color</Button>
    {colors.map((list, index) => <Colorbox key={index} color={list} />)}
  </div>;
}
function Colorbox({ color }) {
  const style = {
    backgroundColor: color,
    height: "25px",
    width: "250px",
    marginTop: "10px"
  };
  return <div style={style}>

  </div>;
}
