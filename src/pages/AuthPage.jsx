import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button.jsx";
import { useNavigate } from "react-router-dom";

const AuthPage = ({ isSignInPage = true }) => {
  const [isMemeber, setIsMember] = useState(false);


  console.log("isSignInPage :>>", isSignInPage);
  const [data, setData] = useState({
    ...(!isSignInPage && {
      fullName: "",
    }),
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   console.log("data :>>", data);
  //   e.preventDefault();
  //   const res = await fetch(
  //     `http://localhost:8000/api/${isSignInPage ? "login" : "register"}`,
  //     {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(data),
  //     }
  //   );

  //   if (res.status === 400) {
  //     alert("Invalid credentials");
  //   } else {
  //     const resData = await res.json();
  //     if (resData.token) {
  //       localStorage.setItem("user:token", resData.token)
  //       localStorage.setItem("user:detail", JSON.stringify(resData.user))
  //       navigate("/");
  //     }
  //   }
  // };
  return (
    <div className="bg-primary h-screen flex justify-center items-center">
      <div className="bg-white w-[600px] h-[800px] shadow-lg rounded-lg flex flex-col justify-center items-center">
        <h1 className="text-4xl font-extrabold mb-10">Solaire Chat</h1>
        <div className="m-10 opacity-50 text-2xl">
          {isMemeber ? "Login" : "Register"}
        </div>
        <form
          className="flex flex-col items-center w-full"
        // onSubmit={(e) => handleSubmit(e)}
        >
          {!isMemeber && (
            <Input
              label="Full name"
              name="name"
              placeholder="Enter your full name"
              className="mb-6 w-[50%]"
            // value={data.fullName}
            // onChange={(e) => setData({ ...data, fullName: e.target.value })}
            />
          )}
          <Input
            label="Email address"
            type="email"
            name="mail"
            placeholder="Enter your email"
            className="mb-6 w-[50%]"
          // value={data.email}
          // onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <Input
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your Password"
            className="mb-6 w-[50%]"
          // value={data.password}
          // onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <Button
            label={isMemeber ? "Sign in" : "sign up"}
            type="submit"
            className="w-1/2 my-5"
          />
        </form>

        <div>
          {isMemeber
            ? "Didn't have an account?"
            : "Already have an account?"}
          <span
            className="text-primary cursor-pointer underline"
            onClick={() =>
              setIsMember(!isMemeber)
            }
          >
            {isMemeber ? "Sign Up" : "Sign in"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;