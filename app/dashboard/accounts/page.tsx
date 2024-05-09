"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Plus } from "lucide-react";
import { Bebas_Neue } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import EyeCrossed from "@/public/eye-crossed.svg";
import Eye from "@/public/eye.svg";
import Image from "next/image";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

const Accounts = () => {
  const pathname = usePathname();
  return (
    <div className="pt-20">
      <div>
        <div className="flex flex-row justify-between">
          <div className="bg-light rounded-xl px-8 py-8 w-[17rem]">
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
            <div className="flex flex-row justify-between pt-4">
              <Button className="text-xs font-bold px-5 h-8">Покласти</Button>
              <Button className="text-xs font-bold text-muted-foreground bg-customGray hover:bg-[#d3d2d2] px-7 h-8">
                Зняти
              </Button>
            </div>
          </div>
          <div className="bg-light rounded-xl px-8 py-8 w-[17rem]">
            <div className="flex flex-row justify-between">
              <p className="text-link text-base font-medium">На Відпустку</p>
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
              <h2 className="text-[2rem]">24,000.00 UAH</h2>
            </div>
            <div className="flex flex-row justify-between pt-4">
              <Button className="text-xs font-bold px-5 h-8">Покласти</Button>
              <Button className="text-xs font-bold text-muted-foreground bg-customGray hover:bg-[#d3d2d2] px-7 h-8">
                Зняти
              </Button>
            </div>
          </div>
          <div className="bg-light rounded-xl px-8 py-8 w-[17rem]">
            <div className="flex flex-row justify-between">
              <p className="text-link text-base font-medium">Збереження</p>
              <Link href="" className="pt-1">
                <Image
                  src={EyeCrossed}
                  alt="Hide account balance"
                  width={16}
                  height={16}
                />
              </Link>{" "}
            </div>
            <div className={bebasNeue.className}>
              <h2 className="text-[2rem]">13,000.00 UAH</h2>
            </div>
            <div className="flex flex-row justify-between pt-4">
              <Button className="text-xs font-bold px-5 h-8">Покласти</Button>
              <Button className="text-xs font-bold text-muted-foreground bg-customGray hover:bg-[#d3d2d2] px-7 h-8">
                Зняти
              </Button>
            </div>
          </div>
          <div className="bg-customGray rounded-xl px-8 py-8 w-[17rem] text-muted-foreground hover:bg-custom hover:text-white ">
            <div className="flex flex-row justify-between">
              <Plus width={28} height={28} />
              <p className="text-base font-bold">Додати рахунок</p>
            </div>
            <div className={bebasNeue.className}>
              <h2 className="text-[2rem] pt-10">0.00 UAH</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between pt-10">
        <h1 className="text-2xl font-medium">Транзакції</h1>
        <Link
          href="/dashboard/transactions"
          className="flex flex-row"
          style={{
            color:
              pathname === "/dashboard/transactions" ? "#33B786" : "#555555",
          }}
        >
          <p className="font-bold text-base text-custom pr-2">
            Переглянути Всі
          </p>
          <ArrowRight width={26} height={26} className="text-custom" />
        </Link>
      </div>
    </div>
  );
};

export default Accounts;
