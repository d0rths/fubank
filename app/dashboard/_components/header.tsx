"use client";
import Image from "next/image";
import SearchIcon from "@/public/Search_icon.svg";
import defaultProfile from "@/public/avatar_placeholder.png";
import { Bebas_Neue } from "next/font/google";
import { useUser } from "@auth0/nextjs-auth0/client";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

const DashboardHeader: React.FC<{ pathname: string }> = ({ pathname }) => {
  const { user } = useUser();
  const users = useQuery(api.users.getById);
  let pageTitle = "Огляд"; // Заголовок за замовчуванням

  const authenticatedUserEmail = user && user?.email;
  const authenticatedUser = users?.find(
    (user) => user.email === authenticatedUserEmail
  );
  const authenticatedUserCard = authenticatedUser?.card;
  const authenticatedUsername = authenticatedUser?.username;

  switch (pathname) {
    case "/dashboard":
      pageTitle = "Огляд";
      break;
    case "/dashboard/transfer":
      pageTitle = "Переказ";
      break;
    case "/dashboard/transactions":
      pageTitle = "Транзакції";
      break;
    case "/dashboard/profile":
      pageTitle = "Профіль";
      break;
    default:
      pageTitle = "Огляд"; // Заголовок за замовчуванням, якщо шлях не відповідає жодному з визначених
  }

  return (
    <div className="flex flex-row">
      <div className="flex flex-row min-w-[44.5rem] justify-between">
        <div className="pt-10">
          <h1 className="text-[2.5rem] font-bold">{pageTitle}</h1>
        </div>
        <div className="pt-12 pl-8">
          <p className="text-base font-medium text-custom text-right">
            {authenticatedUsername}
          </p>
          <div className={bebasNeue.className}>
            <h2 className="text-[2.5rem] leading-tight text-right">
              {authenticatedUserCard}
            </h2>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-row pt-8 pl-[6.5rem] pr-32">
        <Image
          src={SearchIcon}
          alt="Search icon"
          width={24}
          height={24}
          className="mt-4"
        />
        <input
          type="text"
          placeholder="Пошук"
          className="backdrop-blur bg-transparent py-2 pl-4 pr-10 mt-3 text-base font-medium outline-none text-muted-foreground"
        />
      </div> */}

      <a href="/dashboard/profile" className="pl-[32.5rem]">
        <img
          src={user && user.picture ? user.picture : undefined}
          alt="Avatar"
          className="mt-14 w-[52px] h-[52px] rounded-full"
        />
      </a>
    </div>
  );
};

export default DashboardHeader;
