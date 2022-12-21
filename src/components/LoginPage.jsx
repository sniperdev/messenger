import React, {useState} from "react";
import { BsFacebook } from "react-icons/bs";
import { FaDiscord, FaGoogle } from "react-icons/fa";
import { createClient} from "@supabase/supabase-js";

const supabase = createClient("https://nnxltibbeinfapesebwh.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ueGx0aWJiZWluZmFwZXNlYndoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA4OTA1MzcsImV4cCI6MTk4NjQ2NjUzN30.q_NZMo0LiOEIAib0e0_YUhjZbAcH7vbnHRgM21hLPzY")
const LoginPage = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  async function LoginWithPassword(e) {
    e.preventDefault();
    const {error, data} = await supabase.auth.signUp({
      email: email,
      password: password,
    });
  }

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-neutral-800">
      <section className="h-2/3 w-1/4 bg-neutral-900 rounded-lg border border-orange-700">
        <div className="flex flex-col h-2/3 px-20 py-10">
          <h1 className="text-lg font-bold text-amber-600">Login</h1>
          <form action="">
            <input
              type="email"
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="Email address"
              className="block rounded-xl p-1 w-full my-4 bg-zinc-800 text-amber-600 placeholder:text-amber-700 outline-none focus:outline-amber-600"
            />
            <input
              type="password"
              onChange={(e)=>setPassword(e.target.value)}
              placeholder="Password"
              className="block rounded-xl p-1 w-full my-4 bg-zinc-800 text-amber-600 placeholder:text-amber-700 outline-none focus:outline-amber-600"
            />
            <button
              type="submit"
              onClick={LoginWithPassword}
              className="block w-full py-2 my-2 rounded-xl bg-gradient-to-b from-orange-600 to-orange-700 text-white"
            >
              Login
            </button>
          </form>
        </div>
        <div className="h-1/3 px-20 py-10 bg-zinc-800">
          <p className="text-white text-center">Login with social media</p>
          <div className="flex justify-around m-4">
            <BsFacebook className="inline w-8 h-8 text-blue-500" />
            <FaDiscord className="inline w-8 h-8 text-violet-800" />
            <FaGoogle className="inline w-8 h-8 text-red-800" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
