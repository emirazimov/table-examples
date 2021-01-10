import React from "react";
import { inputValue } from './Actions.js'

export function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Donut", 452, 25.0, 51, 4.9),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Honeycomb", 408, 3.2, 87, 6.5),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Jelly Bean", 375, 0.0, 94, 0.0),
  createData("KitKat", 518, 26.0, 65, 7.0),
  createData("Lollipop", 392, 0.2, 98, 0.0),
  createData("Marshmallow", 318, 0, 81, 2.0),
  createData("Nougat", 360, 19.0, 9, 37.0),
  createData("Oreo", 437, 18.0, 63, 4.0),
];

// { name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
// { name: "Donut", calories: 452, fat: 25.0, carbs: 51, protein: 4.9 },
// { name: "Eclair", calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
// { name: "Frozen yoghurt", calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
// { name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
// { name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
// { name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
// { name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
// { name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
// { name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
// { name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
// { name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
// { name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },

const initialState = {
  inputValue: rows,
};

export const CatalogReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INPUT_VALUE": {
      return { ...state, inputValue: action.payload };
    }
    default:
      return state;
  }
};
