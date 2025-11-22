import { useRef, useState } from "react";
import { Button } from "../components/Buttons";
import { Input } from "../components/Input";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const userNameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function signup() {
    setLoading(true);
    const username = userNameRef.current?.value;
    const password = passwordRef.current?.value;

    await axios.post(`${BACKEND_URL}/api/v1/signup`, {
      username: username,
      password: password,
    });
    navigate("/signin");
    alert("You have signed up");

    setLoading(false);
  }
  return (
    <div className="flex flex-col h-screen w-screen bg-gray-200 flex justify-center items-center">
      <div className="flex flex-col bg-white rounded-xl border border-slate-200 mid-w-48 p-8">
        <Input
          placeholder="Username"
          id="Username"
          type="text"
          ref={userNameRef}
        />
        <Input
          placeholder="Password"
          id="Password"
          type="text"
          ref={passwordRef}
        />
        <div className="flex justify-center pt-4">
          <Button
            variant="primary"
            size="md"
            text="Sign up"
            loading={loading}
            onClick={() => {
              signup();
            }}
            fullWidth={true}
          />
        </div>
      </div>
    </div>
  );
};
