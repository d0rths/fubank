import Image from "next/image";
import Link from "next/link";
import LoginBackground from "@/public/login_page_bg.png";
import Logo from "@/public/Logo.svg";
import Facebook from "@/public/facebook_logo.svg";
import Instagram from "@/public/instagram_logo.svg";
import Twitter from "@/public/twitter_logo.svg";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const RegisterPage = () => {
  return (
    <main className="bg-light w-full h-full relative flex flex-row">
      <div className="absolute z-0 inset-0">
        <Image
          src={LoginBackground}
          alt="Login background"
          layout="fill"
          objectFit="cover"
          priority={true}
          className="opacity-10"
        />
      </div>
      <div className="z-20 relative">
        <div className="px-[7.5rem] pt-40">
          <Link href="/" scroll={false}>
            <Image src={Logo} alt="Logo" width={280} height={65} />
          </Link>
        </div>
        <div className="px-[7.5rem] pt-32">
          <h2 className="text-custom font-medium text-[2rem]">
            Financial Universal Bank
          </h2>
          <h1 className="text-[5rem] font-bold leading-none">
            Безтурботний банкінг
          </h1>
          <p className="text-2xl text-muted-foreground pt-10">
            Насолоджуйтесь простим, безпечним та безтурботним банкінгом.
            Попрощайтеся з довгими чергами та складними процедурами і привітайте
            безтурботний банкінг з FUBank.
          </p>
          <div className="flex flex-row py-20">
            <Link href="">
              <Image
                src={Facebook}
                alt="Facebook logo"
                width={40}
                height={40}
              />
            </Link>
            <Link href="">
              <Image
                src={Instagram}
                alt="Instagram logo"
                width={40}
                height={40}
                className="ml-5"
              />
            </Link>
            <Link href="">
              <Image
                src={Twitter}
                alt="Twitter logo"
                width={40}
                height={40}
                className="ml-5"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className=" bg-white px-20 pt-16 pb-10 mx-24 my-24 z-20 rounded-3xl flex flex-col shadow-[0_0_100px_40px_rgba(51,183,134,0.25)]">
        <h2 className="text-[2.5rem] text-custom font-semibold">Реєстрація</h2>
        <p className="text-base font-bold pt-10">Ім'я</p>
        <input
          type="text"
          placeholder="Введіть ваше ім'я"
          className="border-[1px] border-gray-400 rounded-lg py-5 pl-4 pr-[26rem] mt-3 text-base font-medium shadow-[0_0_40px_-20px_rgba(0,0,0,0.23)]"
        />
        <p className="text-base font-bold pt-5">Пошта</p>
        <input
          type="text"
          placeholder="Введіть ваш Email"
          className="border-[1px] border-gray-400 rounded-lg py-5 pl-4 pr-[26rem] mt-3 text-base font-medium shadow-[0_0_40px_-20px_rgba(0,0,0,0.23)]"
        />
        <p className="text-base font-bold pt-5">Пароль</p>
        <input
          type="text"
          placeholder="Введіть ваш пароль"
          className="border-[1px] border-gray-400 rounded-lg py-5 pl-4 pr-[26rem] mt-3 text-base font-medium shadow-[0_0_40px_-20px_rgba(0,0,0,0.23)]"
        />
        <div className="flex flex-row items-center mt-6">
          <Checkbox id="terms" />
          <p className="text-base text-muted-foreground ml-2">
            Я погоджуюся з усіма{" "}
            <Link href="" className="text-base text-bold text-custom">
              Умовами, Політикою конфіденційності
            </Link>{" "}
            та{" "}
            <Link href="" className="text-base text-bold text-custom">
              Тарифами
            </Link>
            .
          </p>
        </div>

        <Button className="text-2xl text-white font-semibold mt-8 py-8">
          Зареєструватися
        </Button>
        <p className="text-base text-muted-foreground mt-4 mb-4">
          Вже є обліковий запис?{" "}
          <Link
            href="/login"
            scroll={false}
            className="text-base text-bold text-custom"
          >
            Увійти
          </Link>
        </p>
      </div>
    </main>
  );
};

export default RegisterPage;
