import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/Logo.svg";
import Facebook from "@/public/facebook_logo.svg";
import Instagram from "@/public/instagram_logo.svg";
import Twitter from "@/public/twitter_logo.svg";
import RightSection from "@/public/right_section.png";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer id="Contacts" className="flex bg-light pl-[7.5rem] justify-between">
      <div>
        <div className="flex flex-row w-2/5">
          <div className="flex flex-col pt-[7.5rem] min-w-80">
            <h2 className="text-custom text-[2rem] font-bold pb-10">
              ПІДТРИМКА
            </h2>
            <Link href="" className="py-3 text-2xl text-muted-foreground">
              Центр підтримки
            </Link>
            <Link href="" className="py-3 text-2xl text-muted-foreground">
              Зв'яжіться з нами
            </Link>
            <Link href="" className="py-3 text-2xl text-muted-foreground">
              Спосіб використання
            </Link>
          </div>
          <div className="flex flex-col pt-[7.5rem] min-w-80">
            <h2 className="text-custom text-[2rem] font-bold pb-10">ПРО НАС</h2>
            <Link href="" className="py-3 text-2xl text-muted-foreground">
              Про FUBank
            </Link>
            <Link href="" className="py-3 text-2xl text-muted-foreground">
              Умови та положення
            </Link>
            <Link href="" className="py-3 text-2xl text-muted-foreground">
              Політика конфіденційності
            </Link>
          </div>
        </div>
        <Image
          src={Logo}
          alt="Logo"
          width={273}
          height={70}
          className="py-[5rem]"
        />
        <div>
          <p className="text-2xl text-muted-foreground font-medium">
            2024 Financial Universal Bank. All rights reserved!
          </p>
          <div className="flex flex-row pt-5 pb-20">
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

      <div className="ml-[7.5rem] pb-[5rem] relative flex items-center flex-col justify-end w-3/5">
        <Image
          src={RightSection}
          alt="Right section background"
          width={1054}
          height={796}
          className="absolute bottom-0 right-0 z-0 w-full h-[90%]"
        />
        <div className="z-20 mb-8">
          <h3 className="text-[2.5rem] text-white z-20 ml-[-4.225rem]">
            Вперше в FUBank?
          </h3>
          <h2 className="text-6xl font-bold text-white z-20 ml-[-4.225rem]">
            Введіть свій<br></br>Email і почніть зараз
          </h2>
        </div>
        <div className="flex items-center flex-row z-20">
          <input
            type="text"
            placeholder="Введіть ваш Email"
            className="backdrop-blur bg-transparent border-2 border-rose-500 rounded-lg px-10 py-4 text-2xl text-white"
          ></input>
          <Button className="mx-8 px-10 py-8 text-2xl">
            <p className="mb-1">Розпочати</p>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
