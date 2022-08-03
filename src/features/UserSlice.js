import { createSlice } from "@reduxjs/toolkit";
import { addDoc, collection } from "firebase/firestore";

import { db } from "../config/FirebaseConfig";

const defaultValue = {
  fullName: "",
  email: "",
  password: "",
};

export const UserSlice = createSlice({
  name: "user",
  initialState: {
    value: defaultValue,
  },
  reducers: {
    addUser: async (action) => {
      try {
        await addDoc(collection(db, "Users"), {
          Email: action.payload.email,
          FullName: action.payload.fullname,
          Password: action.payload.password,
        });
      } catch (e) {
        console.log("error");
      }
    },
  },
});

export const { addUser } = UserSlice.actions;

export default UserSlice.reducer;
