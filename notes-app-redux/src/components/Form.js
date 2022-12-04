import { useState } from "react";
import "./index.css";

import { useDispatch } from "react-redux";

import { nanoid } from "@reduxjs/toolkit";
import { addNote } from "../redux/notes/notesSlice";

import { FaCheck } from "react-icons/fa";

function Form() {
  const [title, setTitle] = useState("");
  const [colorCategory, setColorCategory] = useState("pink");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addNote({ id: nanoid(), title, colorCategory }));
    setTitle("");

  };



  return (
    <div className="add-note">
      <form className="input-container"  onSubmit={handleSubmit}>
        <input
          className="new-note"
          placeholder="Enter your note here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <div className="colors-container">
          <button
            className="pink-button"
            onClick={() => setColorCategory("pink")}
          >
            <FaCheck className={`${colorCategory === "pink" ? "icon active" : "icon "}`} />
          </button>

          <button
            className="purple-button"
            onClick={() => setColorCategory("purple")}
          >
            <FaCheck className={`${colorCategory === "purple" ? "icon active" : "icon"}`} />
          </button>
          <button
            className="yellow-button"
            onClick={() => setColorCategory("yellow")}
          >
            <FaCheck className={`${colorCategory==="yellow" ? "icon active" : "icon"}`} />
          </button>
          <button
            className="blue-button"
            onClick={() => setColorCategory("blue")}
          >
            <FaCheck className={`${colorCategory ==="blue" ? "icon active" : "icon"}`} />
          </button>
          <button
            className="green-button"
            onClick={() => setColorCategory("green")}
          >
            <FaCheck className={`${colorCategory==="green" ? "icon active" : "icon"}`} />
          </button>

         
        </div>
        <input type="submit" value="ADD" className="submit-btn" />
      </form>
    
    </div>
  );
}

export default Form;
