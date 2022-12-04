import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { findNote } from "../redux/notes/notesSlice";

function SearchNote() {
  const dispatch = useDispatch();
  const filtered = useSelector((state) => state.notes.filtered);

  return (
    <div className="search-note">
      <input
        placeholder="Search Note"
        type="search"
        className="search-input"
        value={filtered}
        onChange={(e) => dispatch(findNote(e.target.value))}
        required
      />
    </div>
  );
}

export default SearchNote;
