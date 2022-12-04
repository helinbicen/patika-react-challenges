import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: [
      {id: 1, 
       title: "deneme1",
       colorCategory: "pink"
      },
      {id: 2, 
        title: "deneme2",
        colorCategory: "blue"
       }

    ],
    filtered: "",
  },
  reducers:{
    addNote: (state, action) => {
      state.items.push(action.payload)
    },
    findNote: {
      reducer(state, action) {
          state.filtered = action.payload
      }
  },
  changeColor: {
      reducer(state, action) {
          state.color = action.payload;
      }
  },
  },
});

export const {addNote, findNote, changeColor} = notesSlice.actions;
export default notesSlice.reducer;
