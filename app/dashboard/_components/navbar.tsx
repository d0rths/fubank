"use client";

import Image from "next/image";
import Logo from "@/public/Logo.svg";
import NavImage1 from "@/public/dashboard_nav_1.svg";
import NavImage2 from "@/public/dashboard_nav_2.svg";
import NavImage3 from "@/public/dashboard_nav_3.svg";
import NavImage4 from "@/public/dashboard_nav_4.svg";
import NavImage1Alt from "@/public/dashboard_nav_1_alt.svg";
import NavImage2Alt from "@/public/dashboard_nav_2_alt.svg";
import NavImage3Alt from "@/public/dashboard_nav_3_alt.svg";
import NavImage4Alt from "@/public/dashboard_nav_4_alt.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { useTransfer } from "@/hooks/use-transfer";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <div className="pl-[7.5rem] pr-[6.5rem] w-max">
      <div className="py-10">
        <Image src={Logo} alt="Logo" width={273} height={64} />
      </div>
      <div className={"flex flex-col py-16 gap-y-10"}>
        <Link
          href="/dashboard"
          className="flex flex-row"
          style={{ color: pathname === "/dashboard" ? "#33B786" : "#555555" }}
        >
          <Image
            src={pathname === "/dashboard" ? NavImage1Alt : NavImage1}
            alt="Navigation bar image 1"
            width={32}
            height={32}
          />
          <p className="text-xl font-medium ml-10">Огляд</p>
        </Link>
        <Link
          href="/dashboard/accounts"
          className="flex flex-row"
          style={{
            color: pathname === "/dashboard/accounts" ? "#33B786" : "#555555",
          }}
        >
          <Image
            src={pathname === "/dashboard/accounts" ? NavImage2Alt : NavImage2}
            alt="Navigation bar image 2"
            width={32}
            height={32}
          />
          <p className="text-xl font-medium ml-10">Рахунки</p>
        </Link>
        <Link
          href="/dashboard/transactions"
          className="flex flex-row"
          style={{
            color:
              pathname === "/dashboard/transactions" ? "#33B786" : "#555555",
          }}
        >
          <Image
            src={
              pathname === "/dashboard/transactions" ? NavImage3Alt : NavImage3
            }
            alt="Navigation bar image 3"
            width={39}
            height={32}
          />
          <p className="text-xl font-medium ml-8">Транзакції</p>
        </Link>
        <Link
          href="/dashboard/profile"
          className="flex flex-row"
          style={{
            color: pathname === "/dashboard/profile" ? "#33B786" : "#555555",
          }}
        >
          <Image
            src={pathname === "/dashboard/profile" ? NavImage4Alt : NavImage4}
            alt="Navigation bar image 4"
            width={32}
            height={32}
          />
          <p className="text-xl font-medium ml-10">Профіль</p>
        </Link>
      </div>
      <div className="pt-80 pb-14">
        <a href="/api/auth/logout" className="flex flex-row">
          <ArrowLeft width={32} height={32} />
          <p className="text-xl font-medium ml-10 text-inactive">
            Вихід з системи
          </p>
        </a>
      </div>
    </div>
  );
};

export default Navigation;
