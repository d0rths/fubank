import { Button } from "@/components/ui/button";
import Image from "next/image";
import EyeCrossed from "@/public/eye-crossed.svg";
import Eye from "@/public/eye.svg";
import IconLogo from "@/public/Icon_logo.svg";
import { Bebas_Neue } from "next/font/google";
import { Plus } from "lucide-react";
import { usePathname } from "next/navigation";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

const DashboardPage = () => {
  let pageTitle = "Огляд";
  return (
    <div className="pt-20 max-w-[44.5rem]">
      <div>
        <div>
          <div className="flex flex-row justify-between pb-5">
            <h2 className="text-2xl font-medium">Баланс Поточного Рахунку</h2>
            <Button className="bg-customGray py-6 hover:bg-[#d3d2d2]">
              <Image
                src={EyeCrossed}
                alt="Hide account balance"
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
                  <h2 className="text-[2rem]">10,000.00 UAH</h2>
                </div>
              </div>
              <div className="w-1/3">
                <p className="text-link text-base font-medium">Прибуток</p>
                <div className={bebasNeue.className}>
                  <h2 className="text-[2rem]">15,000.00 UAH</h2>
                </div>
              </div>
              <div className="w-1/3">
                <p className="text-link text-base font-medium">Витрати</p>
                <div className={bebasNeue.className}>
                  <h2 className="text-[2rem]">5000.00 UAH</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-row justify-between pb-5 pt-16">
            <h2 className="text-2xl font-medium">Рахунки</h2>
            <Button className="bg-customGray py-6 hover:bg-[#d3d2d2]">
              <Plus width={16} height={16} className="text-inactive" />
            </Button>
          </div>
          <div className="flex flex-row justify-between">
            <div className="bg-light rounded-xl pl-8 py-10 w-[14rem]">
              <p className="text-link text-base font-medium">Основний баланс</p>
              <div className={bebasNeue.className}>
                <h2 className="text-[2rem]">10,000.00 UAH</h2>
              </div>
            </div>
            <div className="bg-light rounded-xl pl-8 py-10 w-[14rem]">
              <p className="text-link text-base font-medium">На відпустку</p>
              <div className={bebasNeue.className}>
                <h2 className="text-[2rem]">24,000.00 UAH</h2>
              </div>
            </div>
            <div className="bg-light rounded-xl pl-8 py-10 w-[14rem]">
              <p className="text-link text-base font-medium">Збереження</p>
              <div className={bebasNeue.className}>
                <h2 className="text-[2rem]">13,000.00 UAH</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default DashboardPage;
