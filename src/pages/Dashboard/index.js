import React from "react";
import { Button } from "../../components/AuthForm";
import { useAuth } from "../../context/auth";

function Dashboard(props) {
  const { setAuthTokens } = useAuth();

  function logOut() {
    setAuthTokens();
  }

  return (
    <div>
      <div>Dashboard</div>
      <Button onClick={logOut}>Log out</Button>
    </div>
  );
}

export default Dashboard;