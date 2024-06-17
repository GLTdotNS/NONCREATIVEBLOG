import {
  FaBlogger,
  FaCode,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import { RiBook2Line, RiTeamLine } from "react-icons/ri";
import Link from "next/link";
import jojo from "../styles/jojo.png";
import biker from "../styles/bikerchetojojo.jpg";
import trick from "../styles/ne.gif";
import { SiBuymeacoffee } from "react-icons/si";

import Image from "next/image";
import cover from "../styles/cover.png";
const AboutMePage = () => {
  return (
    <>
      {" "}
      <div class="relative w-full lg:w-10/12 mx-auto mt-4 ">
        <Image
          src={cover}
          alt="Cover Photo"
          class="w-full  object-cover rounded-lg"
        />

        <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <Image
            src={jojo}
            alt="Profile Photo"
            class="w-24 h-24 lg:h-48 lg:w-48 object-contain rounded-full border-4 border-slate-100  shadow-lg"
          />
        </div>
      </div>
      <div className="  max-w-6xl  mx-auto ">
        <div className="  h-full bg-opacity-50 mx-auto">
          <div className="text-left text-lg">
            <header class=" border-b border-gray-200 py-4 text-center ">
              <div class=" mx-auto w-full lg:w-1/2 px-2 bg-zinc-300 rounded-md">
                <h1 class="text-2xl font-bold text-gray-700 mt-24 p-2">
                  Георги Тонков
                </h1>
                <p class="text-gray-600 p-2"> 👩‍🍳 Готвачин и JS Ninja 🥷 💻</p>
              </div>
            </header>
            <article className="w-full p-12 bg-zinc-300 rounded-lg lg:rounded-full proxima">
              <div>
                <p className="mb-4">
                  Аз съм блогър, който споделя идеи за съхранение на продукти,
                  рецепти, интересни места, както и споделям своите лични
                  интереси и истории. Имам страст към средиземноморската кухня,
                  скандинавската митология, програмиране и планинско колоездене.
                  Когато не готвя, а това е доста често 🤭, ще ме откриете да
                  програмирам и да изследвам части от скандинавската митология,
                  да пиша статии или да превземам туристически пътеки с моето
                  байкче 😜😎. Обичам да чета философия, както и да гледам
                  ужаси.
                </p>
                <div>
                  <div className="flex items-center justify-center">
                    {" "}
                    <a
                      href="https://facebook.com/georgitonkoff"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebook className="inline-block mr-4 text-4xl text-[#4267B2]" />
                    </a>
                    <a
                      href="https://instagram.com/georgitonkoff"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram className="inline-block mr-4 text-4xl text-[#ee2a7b]" />
                    </a>
                    <a
                      href="https://linkedin.com/in/georgi-tonkov"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="inline-block mr-4 text-4xl text-[#0a66c2]" />
                    </a>
                  </div>
                </div>
              </div>
            </article>

            <section class=" mx-auto rounded-lg px-4 py-8 flex flex-wrap items-center justify-center text-gray-700 bg-zinc-300 mt-8 mb-8">
              <article class="w-full md:w-1/2 p-2 ">
                <Image
                  src={jojo}
                  alt="Image 1"
                  class="mx-auto object-cover w-full lg:w-5/6 rounded-3xl   mb-4 md:ml-0 md:mr-auto"
                />
                <div>
                  <h2 class="text-xl font-bold mb-4">
                    Пристрастен към ученето (Just f*ckin Nerd)
                  </h2>
                  <p class="mb-4">
                    Това го разбрах на 26 годишна възраст 😬😬😬. <br />
                    Не мога, а и не искам да спра да уча нови неща. Както и като
                    блогър, програмист и готвач съм ангажиран непрекъснато с
                    това да се усъвършенствам и развивам. Следя последните
                    технологии, както и последните тенденции в кулинарния свят.
                  </p>

                  <div class="relative">
                    <blockquote class="border-l-4 text-center border-gray-300 italic text-lg text-gray-700 bg-gray-100 p-4 my-4">
                      I'm addicted to coding, can’t get enough of this drug
                      <br />
                      Every bug I debug, it gives me a buzz
                    </blockquote>
                    <div class="absolute top-6 left-4 transform -translate-x-2/3 -translate-y-1/2 text-3xl text-gray-400">
                      {"{"}
                    </div>
                    <div class="absolute bottom-8 right-6 transform translate-x-2/3 translate-y-1/2 text-4xl text-gray-400">
                      {"}"}
                    </div>
                  </div>
                </div>
              </article>

              <article class="w-full md:w-1/2 mt-8 md:mt-0 ">
                <div>
                  <h2 class="text-xl font-bold mb-4">Колоезденето</h2>

                  <p class="mb-4">
                    Не знам дали аз карам колелото или то мен 🙄, но скачайки из
                    между корените на дърветата в планината, се чувствам просто
                    невероятно, свободно - особено прелитайки ! Екстремното
                    колоездене е част от моят живот , особено през уикендите. Но
                    и по време на работната седмица не се отказвам от
                    адреналиновите изживявания в градска среда - камионите и
                    кучетата ме карат да бъда постоянно нащрек 😇 🤗 🤭. Само
                    един истински софийски байкър би ме разбрал 🫡🫡🫡. Сега понеже
                    съм столичанин в повече, ама в друга европейска столица, та
                    не ми се налага да бягам поне от кучета ❤️.
                  </p>
                </div>
                <Image
                  src={biker}
                  alt="Image 2"
                  class=" object-cover w-full lg:w-10/12  h-[500px]  w-full rounded-md  md:ml-0 "
                />
              </article>
              <div className="w-full ">
                <p className="text-center mt-12 font-bold">
                  Първият ми опит не бе толкова успешен, но продължавам напред.
                </p>
                <Image src={trick} alt="Image 1" class="  w-1/2 mx-auto  " />
              </div>
            </section>

            <footer class="container rounded-t-lg mx-auto w-full lg:w-1/2 px-4 py-8 bg-gray-600 text-white">
              <p class="text-xl mb-4">
                💼 Ако търсите информативно и атрактивно съдържание , сте на
                правилното място.
              </p>

              <p class="text-xl">
                🎨 Свържете се с мен, за да си сътрудничим или за да споделите
                мнението си или да пък да поговорим по различни теми.
              </p>
            </footer>

            <div className="bg-yellow-200 mb-8 w-1/2 m-auto  w-full lg:w-1/2  flex justify-center text-gray-700 py-2 px-6 rounded-b-lg hover:bg-yellow-400 transition duration-200 flex items-center">
              <Link
                className=" py-2 px-6 rounded-lg transition duration-200 flex items-center ml-4"
                href="/contact/email"
              >
                <FaEnvelope className="mr-2" /> Пиши ми
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-3/4 m-auto">
            <div className="p-6 bg-zinc-100 rounded-lg">
              <div className="flex items-center mb-4">
                <FaBlogger className="text-gray-600 text-4xl mr-4" />
                <h2 className="text-lg font-bold text-gray-600">Blogger</h2>
              </div>
              <p className="text-gray-700 mt-8">
                Винаги се радвам да обсъждам актуални теми, да споделям лични
                наблюдения и да предоставям полезни съвети въз основа на моите
                интереси и експертиза.
              </p>
              <a
                className="bg-yellow-300 rounded-full  py-2 px-6  mt-4  text-center text-lg text-gray-700 transition duration-200 flex items-center justify-center"
                href="https://buymeacoffee.com/tonkoff"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiBuymeacoffee className="mr-2" /> Buy me a coffee
              </a>
            </div>
            <div className="p-6 bg-zinc-100 rounded-lg">
              <div className="flex items-center mb-4">
                <FaCode className="text-gray-600 text-4xl mr-4" />
                <h2 className="text-lg font-bold text-gray-600">Web Dev</h2>
              </div>
              <p className="text-gray-700">
                Отдаден и страстен front-end разработчик, който се стреми да
                създава иновативни уеб приложения. Аз съм самоук програмист с
                опит с Javascript (включително NextJS и React) и Python.
              </p>
              <a
                className="bg-yellow-300 rounded-full  py-2 px-6  mt-2 p-2 text-center text-lg text-gray-700 transition duration-200 flex items-center justify-center"
                href="https://github.com/GLTdotNS"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="inline-block mr-4 text-xl" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMePage;
