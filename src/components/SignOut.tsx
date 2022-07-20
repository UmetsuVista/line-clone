import { Call } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { authentication, auth } from "../firebase";

function SignOut() {
  return (
    <div className="header">
      <Button
        style={{ color: "white", fontSize: "15px" }}
        onClick={() => authentication.signOut()}
      >
        サインアウト
      </Button>
      <h3>{auth.currentUser?.displayName}</h3>
      <Call />
    </div>
  );
}

export default SignOut;
