import { FaBlogger, FaCode, FaEnvelope, FaUser } from "react-icons/fa";
import { RiBook2Line, RiTeamLine } from "react-icons/ri";
import Link from "next/link";
import jojo from "../styles/jojo.png";
import biker from "../styles/bikerchetojojo.jpg";
import trick from "../styles/trick.jpg";
import cover from "../styles/cover.png";
const AboutMePage = () => {
  return (
    <>
      {" "}
      <div class="relative w-full lg:w-10/12 mx-auto mt-4">
        <img
          src={cover.src}
          alt="Cover Photo"
          class="w-full  object-cover rounded-lg"
        />

        <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <img
            src={jojo.src}
            alt="Profile Photo"
            class="w-24 h-24 lg:h-48 lg:w-48 object-cover rounded-full border-4 border-white bg-white shadow-lg"
          />
        </div>
      </div>
      <div className="  max-w-7xl  mx-auto ">
        <div className="  h-full bg-opacity-50 mx-auto">
          <div className="text-left text-lg">
            <header class=" border-b border-gray-200 py-4 ">
              <div class="container mx-auto px-4">
                <h1 class="text-3xl font-bold text-gray-100 mt-24">
                  Георги Тонков
                </h1>
                <p class="text-gray-400">Програмист и готвач</p>
              </div>
            </header>
            <article class="w-full p-2">
              <div>
                <p class="mb-4">
                  Аз съм блогър, който споделя идеи за съхранение на продукти,
                  рецепти, рецензии на заведения, както и споделям своите лични
                  интереси и истории. През деня съм <b>професионален готвач</b>{" "}
                  със страст към средиземноморската кухня 🍝🌿. Когато не съм в
                  кухнята, ще ме откриете да програмирам и да изследвам части от
                  скандинавската митология.
                </p>
              </div>
            </article>
            <section class=" mx-auto px-4 py-8 flex flex-wrap items-center justify-between text-gray-100">
              <article class="w-full md:w-1/2 p-2">
                <img
                  src={jojo.src}
                  alt="Image 1"
                  class="mx-auto  mb-4 md:ml-0 md:mr-auto"
                />
                <div>
                  <h2 class="text-xl font-bold mb-4">
                    👩‍🍳 Професионален готвач и програмист 💻
                  </h2>
                  <p class="mb-4">
                    Аз съм блогър, който споделя идеи за съхранение на продукти,
                    рецепти, рецензии на заведения, както и споделям своите
                    лични интереси и истории. През деня съм{" "}
                    <b>професионален готвач</b> със страст към
                    средиземноморската кухня 🍝🌿. Когато не съм в кухнята, ще
                    ме откриете да програмирам и да изследвам части от
                    скандинавската митология.
                  </p>
                </div>
              </article>

              <article class="w-full md:w-1/2 mt-8 md:mt-0 ">
                <div>
                  <h2 class="text-xl font-bold mb-4">
                    Пристрастен към ученето
                  </h2>
                  <p class="mb-4">
                    🚀 Като блогър, програмист и готвач съм ангажиран
                    непрекъснато с това да се усъвършенствам и развивам. Следя
                    последните технологии, както и последните тенденции в
                    кулинарния свят.
                  </p>
                  <p>
                    📈 Чрез участие в събития свързани с програмирането, както и
                    кулинарни такива, общуване с колеги ентусиасти и изследване
                    на нови гледни точки, гарантирам, че моето съдържание остава
                    актуално и ценно.
                  </p>
                </div>
                <img
                  src={biker.src}
                  alt="Image 2"
                  class="mx-auto mt-4 md:ml-auto md:mr-0 w-full "
                />
              </article>
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

            <div className="bg-yellow-200 mb-8 w-1/2 m-auto  w-full lg:w-1/2  flex justify-center text-gray-700 py-2 px-6 rounded-b-lg hover:bg-yellow-600 transition duration-200 flex items-center">
              <Link
                className=" py-2 px-6 rounded-lg transition duration-200 flex items-center ml-4"
                href="/contact"
              >
                <FaEnvelope className="mr-2" /> Пиши ми
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-3/4 m-auto">
            <div className="p-6 bg-pink-100 rounded-lg">
              <div className="flex items-center mb-4">
                <FaBlogger className="text-pink-600 text-4xl mr-4" />
                <h2 className="text-lg font-bold text-pink-600">Blogger</h2>
              </div>
              <p className="text-gray-700">
                Като блогър обичам да споделям своите мисли, преживявания и
                експертиза по различни теми. Следвайте ме за задълбочени статии
                и увлекателно съдържание.
              </p>
            </div>
            <div className="p-6 bg-pink-100 rounded-lg">
              <div className="flex items-center mb-4">
                <FaCode className="text-pink-600 text-4xl mr-4" />
                <h2 className="text-lg font-bold text-pink-600">
                  Web Developer
                </h2>
              </div>
              <p className="text-gray-700">
                С умение за програмиране и дизайн, аз съм специализиран в
                разработването на отзивчиви и удобни за потребителя уебсайтове.
                Нека превърнем вашите идеи в реалност!
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-lg text-gray-100">
              Интересувате се от уебсайт или помощ в дигиталното пространство ?
              Не се колебайте да се свържете с мен!
            </p>
          </div>
          <div className="flex justify-center space-x-4 ">
            <Link
              className="bg-yellow-300 rounded-full  py-2 px-6  mt-12 w-64 text-center text-lg text-gray-700 transition duration-200 flex items-center"
              href="/booking"
            >
              <RiBook2Line className="mr-2" /> Поръчай демо
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMePage;
