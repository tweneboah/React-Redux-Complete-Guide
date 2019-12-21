import React from "react";

function Note(props) {
  return (
    <div className="note" key={props.mykey}>
      <h1 key={props.mykey}>{props.note.title}</h1>
      <p key={props.mykey}>{props.note.content}</p>
    </div>
  );
}

export default Note;
