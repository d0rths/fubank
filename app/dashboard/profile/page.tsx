"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import { Bebas_Neue } from "next/font/google";
import Image from "next/image";
import EyeCrossed from "@/public/eye-crossed.svg";
import Eye from "@/public/eye.svg";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

const Profile = () => {
  const { user } = useUser();
  const pathname = usePathname();

  return (
    <div className="pt-12 flex flex-row justify-between">
      <div className="flex flex-col items-center bg-white w-[44.5rem] rounded-xl mr-[6.5rem]">
        <img
          src={user && user.picture ? user.picture : undefined}
          alt="Avatar"
          className="mt-10 w-[160px] h-[160px] rounded-full"
        />
        <h1 className="text-[2rem] py-5 font-bold">{user && user.name}</h1>
        <div className="pt-12 w-1/2">
          <p className="text-base font-medium text-custom">Пошта</p>
          <h2 className="text-2xl font-bold pb-5">{user && user.email}</h2>
          <hr></hr>
        </div>
        <div className="pt-5 w-1/2">
          <p className="text-base font-medium text-custom">Номер Телефону</p>
          <h2 className="text-2xl font-bold pb-5">+380 63 672 7712</h2>
          <hr></hr>
        </div>
        <div className="pt-5 w-1/2">
          <p className="text-base font-medium text-custom">Стать</p>
          <h2 className="text-2xl font-bold pb-5">Чол.</h2>
        </div>
        <a href="/api/auth/logout" className="w-1/2">
          <Button className="text-2xl py-7 mt-7 mb-10 w-full text-muted-foreground bg-customGray hover:bg-[#d3d2d2]">
            Вийти з системи
          </Button>
        </a>
      </div>
      <div>
        <div>
          <div className="bg-light rounded-xl px-8 py-8 w-[29.25rem]">
            <div className="flex flex-row justify-between">
              <p className="text-link text-base font-medium">Основний Баланс</p>
              <Link href="" className="pt-1">
                <Image
                  src={EyeCrossed}
                  alt="Hide account balance"
                  width={16}
                  height={16}
                />
              </Link>
            </div>
            <div className={bebasNeue.className}>
              <h2 className="text-[2rem]">10,000.00 UAH</h2>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-row justify-between pt-20">
            <h2 className="text-2xl font-medium">Транзакції</h2>
            <Link
              href="/dashboard/transactions"
              className="flex flex-row"
              style={{
                color:
                  pathname === "/dashboard/transactions"
                    ? "#33B786"
                    : "#555555",
              }}
            >
              <ArrowRight
                width={26}
                height={26}
                className="mt-1 text-custom ml-80"
              />
            </Link>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
