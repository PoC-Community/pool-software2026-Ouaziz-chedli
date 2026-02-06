// app/auth/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardBody, CardHeader } from "../../components/Card";

export default function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const res = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, userName: name, password }),
      });
      if (res.ok) {
        console.log("Register successful");
        const { accessToken, refreshToken } = await res.json();

        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 7);

        document.cookie = `accessToken=${accessToken}; path=/; expires=${expirationDate.toUTCString()}`;
        document.cookie = `refreshToken=${refreshToken}; path=/; expires=${expirationDate.toUTCString()}`;

        router.push("/auth/login");
        router.refresh();
      } else {
        alert("Register failed");
      }
    } catch (error) {
      console.error("Error registering:", error);
    }
  };
  return (
    <>
      <Card className=" mx-auto mt-10 justify-center w-2xs">
        <CardHeader className="mb-1.5 w-full text-center">Register</CardHeader>
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
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Username"
              className="rounded-lg"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password "
              className="rounded-lg"
            />
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password "
              className="rounded-lg"
            />
            <button
              type="submit"
              className="w-full text-center hover:bg-zinc-800 transition-all duration-200 cursor-pointer rounded-lg"
            >
              Register
            </button>
          </form>
        </CardBody>
      </Card>
    </>
  );
}
