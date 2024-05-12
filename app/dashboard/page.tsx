"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import EyeCrossed from "@/public/eye-crossed.svg";
import EyeOpen from "@/public/eye.svg";
import IconLogo from "@/public/Icon_logo.svg";
import { Bebas_Neue } from "next/font/google";
import { ArrowLeft, ArrowRight, Plus } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import Transactions from "./_components/transactions";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

const DashboardPage = () => {
  let numbers = [10000, 15000, 5000, 24000, 13000];
  const [showNumbers, setShowNumbers] = useState(true);

  const toggleNumbers = () => {
    setShowNumbers(!showNumbers);
  };

  const hideNumbers = () => {
    return showNumbers
      ? numbers.map((number) =>
          number.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })
        )
      : numbers.map(() => "XXXXX");
  };

  const pathname = usePathname();
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
            <h2 className="text-2xl font-medium">Рахунки</h2>
            <Link href="/dashboard/accounts">
              <Button className="bg-customGray py-6 hover:bg-[#d3d2d2]">
                <Plus width={16} height={16} className="text-inactive" />
              </Button>
            </Link>
          </div>
          <div className="flex flex-row justify-between">
            <div className="bg-light rounded-xl pl-8 py-10 w-[14rem]">
              <p className="text-link text-base font-medium">Основний баланс</p>
              <div className={bebasNeue.className}>
                <h2 className="text-[2rem]">{hideNumbers()[0]} UAH</h2>
              </div>
            </div>
            <div className="bg-light rounded-xl pl-8 py-10 w-[14rem]">
              <p className="text-link text-base font-medium">На відпустку</p>
              <div className={bebasNeue.className}>
                <h2 className="text-[2rem]">{hideNumbers()[3]} UAH</h2>
              </div>
            </div>
            <div className="bg-light rounded-xl pl-8 py-10 w-[14rem]">
              <p className="text-link text-base font-medium">Збереження</p>
              <div className={bebasNeue.className}>
                <h2 className="text-[2rem]">{hideNumbers()[4]} UAH</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Transactions />
      </div>
    </div>
  );
};

export default DashboardPage;
