import Link from "next/link";
import React from "react";
import { FaPenToSquare, FaRightToBracket } from "react-icons/fa6";

const Header = () => {
  return (
    <header>
      <nav className="h-[70px] bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <Link href="/" className="text-white font-semibold text-2xl">
            BlogX
          </Link>
          <ul className="flex gap-4 text-white">
            <li>
              <Link href="/login" className="inline-flex items-center">
                <FaRightToBracket size={17} className="pr-1" />
                Login
              </Link>
            </li>
            <li>
              <Link href="/register" className="inline-flex items-center">
                <FaPenToSquare className="pr-1" />
                Register
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
