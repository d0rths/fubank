import Image from "next/image";
import Service1 from "@/public/service1.svg";
import Service2 from "@/public/service2.svg";
import Service3 from "@/public/service3.svg";
import Service4 from "@/public/service4.svg";
import Service5 from "@/public/service5.svg";
import Service6 from "@/public/service6.svg";
import Question from "@/public/question_sign.svg";
import Mastercard from "@/public/Mastercard.png";
import Visa from "@/public/Visa.png";
import Paypal from "@/public/PayPal.png";
import Payoneer from "@/public/Payoneer.png";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "./_components/header";
import Footer from "./_components/footer";

const LangingPage = () => {
  return (
    <div>
      <Header />
      <main>
        <div className="px-[7.5rem] py-[7.5rem]">
          <h2 className="text-6xl font-bold">Сервіси</h2>
          <div className="flex flex-row py-[7.5rem] flex-wrap gap-y-20">
            <div>
              <Image
                src={Service1}
                alt="Service 1 image"
                width="75"
                height="75"
              />
            </div>
            <div className="px-10">
              <h3 className="text-[2.5rem] text-custom font-bold">
                Заощаджувальні рахунки
              </h3>
              <p className="py-5 max-w-xl text-justify text-2xl text-muted-foreground">
                Financial Universal Bank може запропонувати різноманітні ощадні
                рахунки з різними відсотковими ставками та строками, що
                дозволило б клієнтам заощаджувати гроші та заробляти відсотки з
                плином часу. Ці рахунки можуть включати такі функції, як
                автоматичні перекази, захист від овердрафту та доступ до
                мобільного банкінгу.
              </p>
            </div>

            <div className="pl-44">
              <Image
                src={Service2}
                alt="Service 2 image"
                width="75"
                height="75"
              />
            </div>
            <div className="px-10">
              <h3 className="text-[2.5rem] text-custom font-bold">
                Персональні позики
              </h3>
              <p className="py-5 max-w-xl text-justify text-2xl text-muted-foreground">
                Financial Universal Bank може запропонувати кредити на різні
                цілі, такі як консолідація боргу, покращення житла або великі
                покупки. Клієнти можуть подати заявку онлайн і швидко отримати
                рішення, з гнучкими умовами погашення та конкурентоспроможними
                відсотковими ставками.
              </p>
            </div>

            <div>
              <Image
                src={Service3}
                alt="Service 3 image"
                width="75"
                height="75"
              />
            </div>
            <div className="px-10">
              <h3 className="text-[2.5rem] text-custom font-bold">
                Кредитні картки
              </h3>
              <p className="py-5 max-w-xl text-justify text-2xl text-muted-foreground">
                Financial Universal Bank може запропонувати кредитні картки з
                різними програмами винагород та перевагами, такими як повернення
                готівки, винагороди за подорожі або низькі відсоткові ставки.
                Клієнти можуть керувати своїми картками онлайн і отримувати
                сповіщення про підозрілу активність або прострочені платежі.
              </p>
            </div>

            <div className="pl-44">
              <Image
                src={Service4}
                alt="Service 4 image"
                width="75"
                height="75"
              />
            </div>
            <div className="px-10">
              <h3 className="text-[2.5rem] text-custom font-bold">
                Інвестиційні послуги
              </h3>
              <p className="py-5 max-w-xl text-justify text-2xl text-muted-foreground">
                Financial Universal Bank може запропонувати інвестиційні послуги
                для клієнтів, які прагнуть примножити свої статки з часом. Ці
                послуги можуть включати взаємні фонди, біржові фонди та інші
                інвестиційні інструменти з доступом до професійних фінансових
                консультацій та аналізу.
              </p>
            </div>

            <div>
              <Image
                src={Service5}
                alt="Service 5 image"
                width="75"
                height="75"
              />
            </div>
            <div className="px-10">
              <h3 className="text-[2.5rem] text-custom font-bold">
                Оплата рахунків онлайн
              </h3>
              <p className="pt-5 max-w-xl text-justify text-2xl text-muted-foreground">
                Financial Universal Bank може запропонувати зручний сервіс
                оплати рахунків онлайн, що дозволить клієнтам сплачувати рахунки
                та керувати витратами зі свого комп'ютера або мобільного
                пристрою. Ця послуга може включати такі функції, як автоматичні
                платежі, нагадування про рахунки та настроювані графіки
                платежів.
              </p>
            </div>

            <div className="pl-44">
              <Image
                src={Service6}
                alt="Service 6 image"
                width="75"
                height="75"
              />
            </div>
            <div className="px-10">
              <h3 className="text-[2.5rem] text-custom font-bold">
                Бізнес-банкінг
              </h3>
              <p className="pt-5 max-w-xl text-justify text-2xl text-muted-foreground">
                Financial Universal Bank може запропонувати малим та середнім
                підприємствам низку банківських послуг, включаючи розрахункові
                рахунки, бізнес-кредити, торговельні послуги та інструменти для
                управління готівкою. Ці послуги можуть допомогти бізнесу
                оптимізувати свої фінансові операції та з часом розширити свою
                діяльність.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-light flex flex-row">
          <div className="px-[7.5rem] py-[7.5rem]">
            <h2 className="text-6xl font-bold">FAQs</h2>
            <h3 className="text-[2.5rem] text-custom font-bold underline pt-16 leading-small">
              Як відкрити рахунок в <br></br> Financial Universal Bank?
            </h3>
            <p className="pt-24 max-w-screen-md text-justify text-2xl text-muted-foreground">
              Ви можете відкрити рахунок в FUBank онлайн, відвідавши наш
              веб-сайт і заповнивши форму онлайн-заявки. Після того, як ваша
              заявка буде схвалена, ви отримаєте інструкції з налаштування
              вашого рахунку та доступу до нашої платформи онлайн-банкінгу.
            </p>
          </div>

          <div className="flex flex-col pt-56">
            <Link
              href=""
              className="pt-10 text-justify text-2xl font-bold max-w-screen-sm underline text-link z-10 flex flex-row"
            >
              Які типи рахунків пропонує FUBank?
            </Link>
            <Link
              href=""
              className="pt-10 text-justify text-2xl font-bold max-w-screen-sm underline text-link z-10"
            >
              Чи застрахований FUBank?
            </Link>
            <Link
              href=""
              className="pt-10 text-justify text-2xl font-bold max-w-screen-sm underline text-link z-10"
            >
              Як я можу отримати доступ до свого рахунку в FUBank онлайн?
            </Link>
            <Link
              href=""
              className="pt-10 text-justify text-2xl font-bold max-w-screen-sm underline text-link z-10"
            >
              Які заходи безпеки вживає FUBank для захисту моєї фінансової
              інформації?
            </Link>
          </div>
          <div className="flex flex-col pt-[16.775rem]">
            <Link href="" className="z-10">
              <ArrowRight className="w-6 h-6 ml-6 text-link" />
            </Link>
            <Link href="" className="z-10">
              <ArrowRight className="w-6 h-6 ml-6 mt-12 text-link" />
            </Link>
            <Link href="" className="z-10">
              <ArrowRight className="w-6 h-6 ml-6 mt-[3.125rem] text-link" />
            </Link>
            <Link href="" className="z-10">
              <ArrowRight className="w-6 h-6 ml-6 mt-[4.775rem] text-link" />
            </Link>
          </div>
          <Image
            src={Question}
            alt="Question sign"
            width="453"
            height="1200"
            className="absolute place-content-end right-0 z-0"
          />
        </div>

        <div>
          <h2 className="text-[2.5rem] text-center font-bold pt-[7.5rem]">
            Підтримується різними фінансовими сервісами
          </h2>
          <div className="flex flex-row justify-around py-[7.5rem]">
            <Image
              src={Mastercard}
              alt="Mastercard logo"
              width="155.47"
              height="96"
            />
            <Image src={Visa} alt="Visa logo" width="236.5" height="96" />
            <Image src={Paypal} alt="Paypal logo" width="288" height="96" />
            <Image
              src={Payoneer}
              alt="Payoneer logo"
              width="437.69"
              height="96"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LangingPage;
