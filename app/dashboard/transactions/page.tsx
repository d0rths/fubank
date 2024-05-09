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

const Transactions = () => {
  const pathname = usePathname();
  return (
    <div className="pt-20">
      <div>
        <div className="flex flex-row justify-between">
          <div className="bg-light rounded-xl px-8 py-8 w-[23rem]">
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
          <div className="bg-light rounded-xl px-8 py-8 w-[23rem]">
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
          </div>
          <div className="bg-light rounded-xl px-8 py-8 w-[23rem]">
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
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Transactions;
