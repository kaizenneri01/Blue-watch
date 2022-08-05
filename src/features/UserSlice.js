import { createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";

import { auth, db } from "../config/FirebaseConfig";

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
    addUser: async (state, action) => {
      try {
        await createUserWithEmailAndPassword(
          auth,
          (state.email = action.payload.email),
          (state.password = action.payload.password)
        ).then();
        await addDoc(collection(db, "Users"), {
          Email: (state.email = action.payload.email),
          FullName: (state.fullName = action.payload.fullname),
          Password: (state.password = action.payload.password),
        });
      } catch {
        console.log("error");
      }
    },
    signIn: async (state, action) => {
      try {
        await signInWithEmailAndPassword(
          auth,
          (state.email = action.payload.email),
          (state.password = action.payload.password)
        );
      } catch {
        console.log("error");
      }
    },
  },
});

export const { addUser, signIn } = UserSlice.actions;

export default UserSlice.reducer;
