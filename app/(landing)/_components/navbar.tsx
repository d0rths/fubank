"use client";
import Image from "next/image";
import Logoimg from "@/public/Logo.svg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useUser } from "@auth0/nextjs-auth0/client";
import { redirect } from "next/navigation"; // Імпорт хука навігації

export const Navbar = () => {
  const { user, isLoading } = useUser();

  if (!isLoading && user) {
    redirect(`/dashboard`);
  }
  return (
    <nav
      className="flex justify-between items-center bg-light px-[7.5rem] py-16"
      id="navbar"
    >
      <div className="flex items-center gap-x-28">
        <div>
          <Image src={Logoimg} alt="Logo" width={280} height={65} />
        </div>
        <div className="flex gap-x-16">
          <Link href="#More" className="text-2xl">
            Про нас
          </Link>
          <Link href="#Contacts" className="text-2xl">
            Контакти
          </Link>
        </div>
      </div>
      <div>
        <a href="/api/auth/login">
          <Button variant="outline" className="text-2xl px-10 py-8 rounded-lg">
            Login
          </Button>
        </a>
      </div>
    </nav>
  );
};
