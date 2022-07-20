import React from "react";
import { Button } from "@mui/material";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { authentication } from "../firebase";

function SignIn() {
  function signInWighGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider);
  }
  return (
    <div>
      <Button onClick={signInWighGoogle}>グーグルでログインする</Button>
    </div>
  );
}

export default SignIn;
