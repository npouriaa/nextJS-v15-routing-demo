"use client";

import "../globals.css";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type NavLinkType = {
  name: string;
  href: `/${string}`;
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [input, setInput] = useState("");

  const navLinks: NavLinkType[] = [
    {
      name: "Login",
      href: "/login",
    },
    {
      name: "Register",
      href: "/register",
    },
    {
      name: "Forgot password",
      href: "/forgot-password",
    },
  ];

  const pathname = usePathname();

  return (
    <div className="py-4 flex flex-col gap-10">
      <div>
        <input
          className="text-black"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <ul className="flex gap-5">
        {navLinks.map((item) => (
          <li
            key={item.name}
            className={
              pathname === item.href ? "text-red-500" : "text-blue-400"
            }
          >
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>
      {children}
    </div>
  );
}
