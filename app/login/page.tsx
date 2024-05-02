import Image from "next/image";
import Link from "next/link";
import LoginBackground from "@/public/login_page_bg.png";
import Logo from "@/public/Logo.svg";
import Facebook from "@/public/facebook_logo.svg";
import Instagram from "@/public/instagram_logo.svg";
import Twitter from "@/public/twitter_logo.svg";
import { Button } from "@/components/ui/button";

const LoginPage = () => {
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
          <Image src={Logo} alt="Logo" width={280} height={65} />
        </div>
        <div className="px-[7.5rem] pt-36">
          <h2 className="text-custom font-medium text-[2rem]">
            Financial Universal Bank
          </h2>
          <h1 className="text-[5rem] font-bold">З Поверненням</h1>
          <p className="text-2xl text-muted-foreground pt-10">
            Введіть свої дані для повторного входу в Особистий кабінет!
          </p>
          <div className="flex flex-row py-[8.7rem]">
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
      <div className=" bg-white px-20 pt-16 pb-10 mx-24 my-44 z-20 rounded-3xl flex flex-col">
        <h2 className="text-[2.5rem] text-custom font-semibold">Login</h2>
        <p className="text-base font-bold pt-10">Email</p>
        <input
          type="text"
          placeholder="Введіть ваш Email"
          className="backdrop-blur bg-transparent border-[1px] border-gray-400 rounded-lg py-5 pl-4 pr-[26rem] mt-3 text-base font-medium shadow-[0_0_40px_-20px_rgba(0,0,0,0.23)]"
        />
        <p className="text-base font-bold pt-5">Password</p>
        <input
          type="text"
          placeholder="Введіть ваш пароль"
          className="backdrop-blur bg-transparent border-[1px] border-gray-400 rounded-lg py-5 pl-4 pr-[26rem] mt-3 text-base font-medium shadow-[0_0_40px_-20px_rgba(0,0,0,0.23)]"
        />
        <Button className="text-2xl text-white font-semibold mt-10 py-8">
          Login
        </Button>
        <p className="text-base text-muted-foreground mt-4">
          Не маєте облікового запису?{" "}
          <Link href="" className="text-base text-bold text-custom">
            Реєстрація
          </Link>
        </p>
      </div>
    </main>
  );
};

export default LoginPage;
