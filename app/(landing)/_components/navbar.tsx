import Image from "next/image";
import Logoimg from "@/public/Logo.svg";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
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
          <Link href="/" className="text-2xl">
            Про нас
          </Link>
          <Link href="#contacts" className="text-2xl">
            Контакти
          </Link>
        </div>
      </div>
      <div>
        <Button variant="outline" className="text-2xl px-10 py-8 rounded-lg">
          <a href="/login">Login</a>
        </Button>
      </div>
    </nav>
  );
};
