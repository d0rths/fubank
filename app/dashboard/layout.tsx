"use client";
import Navbar from "./_components/navbar";
import Header from "./_components/header";
import Image from "next/image";
import bg from "@/public/login_page_bg.svg";
import { usePathname } from "next/navigation";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-row">
      <div className="absolute z-[-1] inset-0 bg-[#f5fcfa]">
        <Image
          src={bg}
          alt="Login background"
          layout="fill"
          objectFit="cover"
          priority={true}
          className="opacity-5"
        />
      </div>
      <Navbar />
      <div className="flex flex-col">
        <Header pathname={pathname} />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
