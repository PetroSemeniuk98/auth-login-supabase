import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "../config";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  supabase.auth.onAuthStateChange((event) => {
    if (event === "SIGNED_IN") {
      navigate("/success");
    } else {
      navigate("/");
    }
  });

  return (
    <>
      <div className="App">
        <header className="header">
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            providers={["google", "github"]}
          />
        </header>
      </div>
    </>
  );
}

export default Login;
