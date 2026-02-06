// app/auth/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardBody, CardFooter, CardHeader } from "../../components/Card";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (res.ok) {
        console.log("Login successful");
        const { accessToken, refreshToken } = await res.json();

        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 7);

        document.cookie = `accessToken=${accessToken}; path=/; expires=${expirationDate.toUTCString()}`;
        document.cookie = `refreshToken=${refreshToken}; path=/; expires=${expirationDate.toUTCString()}`;

        router.push("/tasks");
        router.refresh();
      } else {
        alert("Login failed");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };
  return (
    <>
      <Card className=" mx-auto mt-10 justify-center w-2xs">
        <CardHeader className="mb-1.5 w-full text-center">Login</CardHeader>
        <CardBody>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 w-full  rounded-lg "
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="rounded-lg"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password "
              className="rounded-lg"
            />
            <button
              type="submit"
              className="w-full text-center hover:bg-zinc-800 transition-all duration-200 cursor-pointer rounded-lg"
            >
              Login
            </button>
          </form>
        </CardBody>
        <CardFooter>
          <p className="text-center text-sm text-zinc-400">
            Don't have an account?{" "}
            <a href="/auth/register" className="text-zinc-100 hover:underline">
              Register
            </a>
          </p>
        </CardFooter>
      </Card>
    </>
  );
}
