import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import { Bebas_Neue } from "next/font/google";
import Eye from "@/public/eye.svg";
import EyeCrossed from "@/public/eye-crossed.svg";
import Image from "next/image";
import IconLogo from "@/public/Icon_logo.svg";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

interface AccountCardsProps {
  index: string;
}

const AccountCards: React.FC<AccountCardsProps> = ({ index }) => {
  const pathname = usePathname();
  const { user } = useUser();

  const users = useQuery(api.users.getById);
  const salary = useQuery(api.salary.getById);
  const retirement = useQuery(api.retirement.getById);

  const authenticatedUserEmail = user && user?.email;
  let balance, income, expence;

  if (index === "0") {
    const authenticatedUser = users?.find(
      (user) => user.email === authenticatedUserEmail
    );
    balance = authenticatedUser?.balance;
    income = authenticatedUser?.income;
    expence = authenticatedUser?.expence;
  } else if (index === "1") {
    const salaryAccount = salary?.find(
      (account) => account.email === authenticatedUserEmail
    );
    balance = salaryAccount?.balance;
    income = salaryAccount?.income;
    expence = salaryAccount?.expence;
  } else if (index === "2") {
    const retirementAccount = retirement?.find(
      (account) => account.email === authenticatedUserEmail
    );
    balance = retirementAccount?.balance;
    income = retirementAccount?.income;
    expence = retirementAccount?.expence;
  }

  const formattedBalance = balance?.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const formattedIncome = income?.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const formattedExpence = expence?.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const blockWidth = pathname === "/dashboard" ? "w-[38rem]" : "w-[42rem]";

  return (
    <div className="flex flex-row justify-between w-full">
      <div className="flex flex-row bg-light pl-[2.625rem] py-8 rounded-xl">
        {pathname === "/dashboard" && (
          <div>
            <Image src={IconLogo} alt="Icon logo" width={64} height={64} />
          </div>
        )}
        <div className={`flex flex-row ${blockWidth} pl-10`}>
          <div className="w-1/3">
            <p className="text-link text-base font-medium">Поточний баланс</p>
            <div className={bebasNeue.className}>
              <h2 className="text-[2rem]">{formattedBalance} UAH</h2>
            </div>
          </div>
          <div className="w-1/3">
            <p className="text-link text-base font-medium">Прибуток</p>
            <div className={bebasNeue.className}>
              <h2 className="text-[2rem]">{formattedIncome} UAH</h2>
            </div>
          </div>
          <div className="w-1/3">
            <p className="text-link text-base font-medium">Витрати</p>
            <div className={bebasNeue.className}>
              <h2 className="text-[2rem]">{formattedExpence} UAH</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountCards;
