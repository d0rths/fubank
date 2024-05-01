import Image from "next/image";
import CreditImg from "@/public/Credit-card.png";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex bg-light px-[7.5rem] py-16">
      <div>
        <h3 className="text-custom text-[2rem] font-medium">
          Financial Universal Bank
        </h3>
        <h1 className="text-[5rem] leading-none font-bold mb-12">
          Насолоджуйтесь
          <br />
          безтурботним банкінгом
        </h1>
        <p className="text-muted-foreground text-2xl max-w-3xl mb-12">
          Насолоджуйтесь простим, безпечним та безтурботним банкінгом.
          Попрощайтеся з довгими чергами та складними процедурами і привітайте
          безтурботний банкінг з Financial Universal Bank.
        </p>
        <div className="flex gap-x-10">
          <Button className="text-2xl px-[4rem] py-[2.15rem]">
            <Link href="" className="flex items-center">
              <p className="mb-1">Почати</p>
            </Link>
          </Button>
          <Button
            variant="outline"
            className="px-12 py-8 flex items-center justify-center"
          >
            <Link href="" className="flex items-center text-2xl">
              <p className="mb-1">Більше</p>
              <ArrowRight className="w-5 h-5 ml-4" />
            </Link>
          </Button>
        </div>
      </div>
      <div>
        <Image src={CreditImg} alt="Credit Card" width={700} height={700} />
      </div>
    </header>
  );
};

export default Header;
