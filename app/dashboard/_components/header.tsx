"use client";
import Image from "next/image";
import SearchIcon from "@/public/Search_icon.svg";
import AvatarPlaceholder from "@/public/avatar_placeholder.png";
import { Bebas_Neue } from "next/font/google";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Link } from "lucide-react";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

const DashboardHeader: React.FC<{ pathname: string }> = ({ pathname }) => {
  const { user } = useUser();
  let pageTitle = "Огляд"; // Заголовок за замовчуванням

  switch (pathname) {
    case "/dashboard":
      pageTitle = "Огляд";
      break;
    case "/dashboard/accounts":
      pageTitle = "Рахунки";
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
            Rostyslav Hubariev
          </p>
          <div className={bebasNeue.className}>
            <h2 className="text-[2.5rem] leading-tight text-right">
              1234567890
            </h2>
          </div>
        </div>
      </div>
      <div className="flex flex-row pt-8 pl-[6.5rem] pr-32">
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
      </div>
      <a href="/dashboard/profile">
        <img
          src={user && user.picture}
          alt="Avatar"
          className="mt-14 w-[56px] h-[56px] rounded-full"
        />
      </a>
    </div>
  );
};

export default DashboardHeader;
