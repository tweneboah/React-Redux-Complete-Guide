import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes.js";


function App() {
  return (
    <div>
      <Header />
      {notes.map((note) => {
        return <Note note={note} key={note.id} />
      })}
      <Footer />
    </div>
  );
}

export default App;
