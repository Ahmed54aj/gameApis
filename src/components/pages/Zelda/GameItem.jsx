// bootstrap
import {   Button, Collapse } from "react-bootstrap";
// react
import { useState } from "react";

// reactS
// functional component
export default function GameItem({game}) {
  const [open, setOpen] = useState(false);
return (
<>
  <Button
  onClick={() => setOpen(!open)}
  aria-controls="example-collapse-tex t"
  aria-expanded={open}
>
  {game.name}
</Button>
<Collapse in={open} className="game-modal">
  <div id="example-collapse-text">
    <p><strong>Game Name:</strong> {game.name}</p>
    <p><strong>Developer:</strong> {game.developer}</p>
    <p><strong>Description:</strong> {game.description}</p>
    <p><strong>Publisher:</strong> {game.publisher}</p>
    <p><strong>Release Date:</strong> {game.released_date}</p>
  </div>
</Collapse>
</>
)
}