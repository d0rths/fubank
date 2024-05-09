"use client";
import Navbar from "./_components/navbar";
import Header from "./_components/header";
import Image from "next/image";
import bg from "@/public/login_page_bg.svg";
import { usePathname } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  const pathname = usePathname();

  if (user)
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
