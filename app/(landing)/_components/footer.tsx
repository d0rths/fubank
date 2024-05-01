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
    <footer className="flex bg-light pl-[7.5rem]">
      <div>
        <div className="flex flex-row">
          <div className="flex flex-col pt-[7.5rem]">
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
          <div className="flex flex-col pt-[7.5rem] px-24">
            <h2 className="text-custom text-[2rem] font-bold pb-10">ПРО НАС</h2>
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
        </div>
        <Image
          src={Logo}
          alt="Logo"
          width={273}
          height={70}
          className="py-[7.5rem]"
        />
        <div>
          <p className="text-2xl text-muted-foreground font-medium">
            2024 Financial Universal Bank. All rights reserved!
          </p>
          <div className="flex flex-row pt-5 pb-20">
            <Link href="" className="hover:text-fill">
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

      <div className="pt-[7.5rem] pl-[7.5rem] relative">
        <Image
          src={RightSection}
          alt="Right section background"
          width={1054}
          height={796}
          className="absolute bottom-0 right-0"
        />
        <div className="z-[999]">
          <h3 className="text-[2.5rem] text-white z-[999]">Вперше в FUBank?</h3>
          <h2 className="text-6xl font-bold text-white z-[999]">
            Введіть свій<br></br>Email і почніть зараз
          </h2>
        </div>
        <div className="flex flex-row z-[999]">
          <input type="text" className="backdrop-blur"></input>
          <Button className="mx-8 z-20">Розпочати</Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
