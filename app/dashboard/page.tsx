"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import EyeCrossed from "@/public/eye-crossed.svg";
import EyeOpen from "@/public/eye.svg";
import IconLogo from "@/public/Icon_logo.svg";
import { Bebas_Neue } from "next/font/google";
import { ArrowRight, Plus } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import TransactionsTable from "./_components/transactionsTable";
import TransferCard from "./_components/transferCard";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useTransfer } from "@/hooks/use-transfer";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

const DashboardPage = () => {
  const { user } = useUser();
  const users = useQuery(api.users.getById);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (users) {
      setLoading(false);
    }
  }, [users]);

  const authenticatedUserEmail = user && user?.email;
  const authenticatedUser = users?.find(
    (user) => user.email === authenticatedUserEmail
  );
  const authenticatedUserBalance = authenticatedUser?.balance;
  const authenticatedUserIncome = authenticatedUser?.income;
  const authenticatedUserExpence = authenticatedUser?.expence;

  let numbers = [
    authenticatedUserBalance,
    authenticatedUserIncome,
    authenticatedUserExpence,
  ];
  const [showNumbers, setShowNumbers] = useState(true);

  const toggleNumbers = () => {
    setShowNumbers(!showNumbers);
  };

  const hideNumbers = () => {
    return showNumbers
      ? numbers.map((number) =>
          number?.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })
        )
      : numbers.map(() => "XXXXX");
  };

  const pathname = usePathname();

  const transfer = useTransfer();

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-light z-50">
        <div className="loader">
          <Image src={IconLogo} alt="Loading" width={100} height={100} />
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-row pt-20">
      <div className="pr-[6.5rem]">
        <div>
          <div className="flex flex-row justify-between pb-5">
            <h2 className="text-2xl font-medium">Баланс Поточного Рахунку</h2>
            <Button
              className="bg-customGray py-6 hover:bg-[#d3d2d2]"
              onClick={toggleNumbers}
            >
              <Image
                src={showNumbers ? EyeOpen : EyeCrossed}
                alt={
                  showNumbers ? "Hide account balance" : "Show account balance"
                }
                width={16}
                height={16}
              />
            </Button>
          </div>
          <div className="flex flex-row bg-light pl-[2.625rem] py-8 rounded-xl">
            <div>
              <Image src={IconLogo} alt="Icon logo" width={64} height={64} />
            </div>
            <div className="flex flex-row w-[38rem] pl-10">
              <div className="w-1/3">
                <p className="text-link text-base font-medium">
                  Поточний баланс
                </p>
                <div className={bebasNeue.className}>
                  <h2 className="text-[2rem]">{hideNumbers()[0]} UAH</h2>
                </div>
              </div>
              <div className="w-1/3">
                <p className="text-link text-base font-medium">Прибуток</p>
                <div className={bebasNeue.className}>
                  <h2 className="text-[2rem]">{hideNumbers()[1]} UAH</h2>
                </div>
              </div>
              <div className="w-1/3">
                <p className="text-link text-base font-medium">Витрати</p>
                <div className={bebasNeue.className}>
                  <h2 className="text-[2rem]">{hideNumbers()[2]} UAH</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-row justify-between pb-5 pt-16">
            <h2 className="text-2xl font-medium">Переказ</h2>
            <Button
              onClick={transfer.onOpen}
              className="bg-customGray py-6 hover:bg-[#d3d2d2]"
            >
              <Plus width={16} height={16} className="text-inactive" />
            </Button>
          </div>
          <div>
            <TransferCard />
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-row justify-between">
          <h2 className="text-2xl font-medium">Транзакції</h2>
          <Link
            href="/dashboard/transactions"
            className="flex flex-row"
            style={{
              color:
                pathname === "/dashboard/transactions" ? "#33B786" : "#555555",
            }}
          >
            <ArrowRight
              width={26}
              height={26}
              className="mt-1 text-custom ml-80"
            />
          </Link>
        </div>
        <TransactionsTable />
      </div>
    </div>
  );
};

export default DashboardPage;
