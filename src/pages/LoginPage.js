import { Auth } from "@supabase/auth-ui-react";
import React from "react";
import { supabase } from "./config";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  supabase.auth.onAuthStateChange((event) => {
    if (event === "SIGNED_IN") {
      navigate("/success");
    } else {
      navigate("/");
    }
  });

  return (
    <div className="App">
      <header className="header">
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={["google", "facebook"]}
        />
      </header>
    </div>
  );
}

export default LoginPage;
