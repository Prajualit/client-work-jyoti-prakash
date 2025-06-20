"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { useSelector } from "react-redux";
import LoadingButton from "@/components/ui/LoadingButton.jsx";
import axios from "@/lib/axios.js";
import { useRouter, usePathname } from "next/navigation";
import NextImage from "next/image";
import { clearUser } from '@/redux/Slice/userSlice';
import { useDispatch } from "react-redux";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Nutrition", href: "/nutrition" },
  { label: "Query", href: "/query", showOnlyOnHome: true },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "#footer" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const user = useSelector((state) => state.user.user);
  const router = useRouter();
  const pathname = usePathname();

  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      const response = await axios.post("/users/logout");
      if (response.status === 200) {
        dispatch(clearUser()); 
        console.log("Logout successful");
        router.push("/login");
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  // Filter nav items based on current path
  const getVisibleNavItems = () => {
    return navItems.filter((item) => {
      if (item.showOnlyOnHome) {
        return pathname === "/";
      }
      return true;
    });
  };

  const AuthButton = user ? (
    <>
      <LoadingButton onClick={handleLogout}>
        <span className="text-sm">Logout</span>
      </LoadingButton>
      <Link href="/dashboard">
        <LoadingButton>
          <span className="text-sm">Dashboard</span>
        </LoadingButton>
      </Link>
      <div className="flex items-center space-x-2 ">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#eaeef1]">
          <NextImage
            width={20}
            height={20}
            src={user?.avatarUrl}
            alt="Profile"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </div>
    </>
  ) : (
    <Button variant="outline" className="cursor-pointer">
      <Link href="/login" className="flex items-center gap-2">
        <LoginIcon />
        Login
      </Link>
    </Button>
  );

  return (
    <header className="w-full flex items-center justify-between px-4 sm:px-8 py-4 bg-white shadow-md fixed top-0 z-50">
      <Link
        href="/"
        className="flex items-center gap-3 hover:opacity-80 transition-opacity"
      >
        <DumbbellIcon />
        <span className="font-black text-2xl tracking-tight text-gray-900">
          FitPro Trainer
        </span>
      </Link>

      <div className="flex items-center justify-center space-x-5">
        <nav className="hidden md:flex gap-6">
          {getVisibleNavItems().map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-black transition-all duration-300 hover:text-blue-600 
                   hover:-translate-y-0.5 hover:opacity-80 cursor-pointer"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        {AuthButton}
      </div>

      {/* Mobile Nav */}
      <div className="md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[250px] p-6">
            <div className="flex flex-col gap-4 mt-8">
              {getVisibleNavItems().map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-base font-medium text-muted-foreground hover:text-primary"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-4">{AuthButton}</div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function DumbbellIcon() {
  return (
    <svg
      className="w-6 h-6 text-primary"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 512"
      fill="currentColor"
    >
      <path d="M96 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32V224v64V448c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V384H64c-17.7 0-32-14.3-32-32V288c-17.7 0-32-14.3-32-32s14.3-32 32-32V160c0-17.7 14.3-32 32-32H96V64zm448 0v64h32c17.7 0 32 14.3 32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32v64c0 17.7-14.3 32-32 32H544v64c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32V288 224 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32zM416 224v64H224V224H416z" />
    </svg>
  );
}

function LoginIcon() {
  return (
    <svg
      className="w-5 h-5"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="currentColor"
    >
      <path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
    </svg>
  );
}
