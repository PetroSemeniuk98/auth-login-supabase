import React, { useEffect, useState } from "react";
import { supabase } from "./config";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container } from "react-bootstrap";

function Success() {
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    async function getUserData() {
      await supabase.auth.getUser().then((value) => {
        if (value.data?.user) {
          setUser(value.data.user);
        } else {
          navigate("/");
        }
      });
    }
    getUserData();
  }, []);

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    navigate("/");
    if (error) throw error;

    window.location.reload();
  };

  return (
    <div className="App">
      <header className="success">
        {user !== null ? (
          <>
            <div className="position">
              <h1>Success</h1>
              <p>Your Email: {user.email}</p>
              <Button onClick={() => signOut()}>Sign Out</Button>
            </div>
            <Container>
              <hr style={{ color: "white" }} />
            </Container>
          </>
        ) : (
          <>
            <h1>User is Undefined</h1>
            <Button onClick={() => navigate("/")}>Go Home</Button>
          </>
        )}
      </header>
    </div>
  );
}

export default Success;
