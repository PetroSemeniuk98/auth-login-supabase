import { useEffect, useState } from "react";
import { supabase } from "../config";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  console.log(user);
  useEffect(() => {
    async function getUserAccount() {
      await supabase.auth.getUser().then((value) => {
        if (value.data?.user) {
          setUser(value.data.user);
        }
      });
    }
    getUserAccount();
  }, []);

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    navigate("/");

    if (error) throw error;
  };
  return (
    <div className="App">
      <header className="success">
        {user !== null ? (
          <>
            <div className="position">
              <h1>Success</h1>
              <h4>Your Email Varificated: {user.email}</h4>
              <Button onClick={() => signOut()}>Sign Out</Button>
              <h1>Hello </h1>
              <p>You create this Account: {user.created_at}</p>
            </div>
          </>
        ) : (
          <>
            <div className="success">
              <h1>Your Account is not difined</h1>
              <Button onClick={() => navigate("/")}>Go Home</Button>
            </div>
          </>
        )}
      </header>
    </div>
  );
};

export default Success;
