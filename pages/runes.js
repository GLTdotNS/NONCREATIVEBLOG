import React, { useState } from "react";
import cover from "../styles/viking.png";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
import {
  BsInfoCircle,
  BsCheckCircle,
  BsExclamationTriangle,
} from "react-icons/bs";

const Runes = () => {
  const [runicSymbol, setRunicSymbol] = useState("Canis Lupus");
  const [displayResult, setDisplayResult] = useState("ᚲᚨᚾᛁᛊ ᛚᚢᛈᚢᛊ");
  const [latinOrEF, setLatinOrEf] = useState("Latin");
  const copyToClipboard = (text) => {
    const elem = document.createElement("textarea");
    elem.value = text;
    document.body.appendChild(elem);
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
    toast.success(`🦄 Успешно копирахте -  ${displayResult}!`, {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  const runicToLatinMap = {
    A: "ᚨ",
    B: "ᛒ",
    C: "ᚲ",
    D: "ᛞ",
    E: "ᛖ",
    F: "ᚠ",
    G: "ᚷ",
    H: "ᚺ",
    I: "ᛁ",
    J: "ᛃ",
    K: "ᚲ",
    L: "ᛚ",
    M: "ᛗ",
    N: "ᚾ",
    O: "ᛟ",
    P: "ᛈ",
    Q: "ᚳ",
    R: "ᚱ",
    S: "ᛊ",
    T: "ᛏ",
    U: "ᚢ",
    V: "ᚢ",
    W: "ᚹ",
    X: "ᚦ",
    Y: "ᛇ",
    Z: "ᛉ",
    TH: "ᚦ",
    NG: "ᛝ",
    " ": "  ",
  };

  const elderToLatinMap = {
    ᚨ: "A",
    ᛒ: "B",
    ᚲ: "C",
    ᛞ: "D",
    ᛖ: "E",
    ᚠ: "F",
    ᚷ: "G",
    ᚺ: "H",
    ᛁ: "I",
    ᛃ: "J",
    ᛚ: "L",
    ᛗ: "M",
    ᚾ: "N",
    ᛟ: "O",
    ᛈ: "P",
    ᚳ: "Q",
    ᚱ: "R",
    ᛊ: "S",
    ᛏ: "T",
    ᚢ: "U",
    ᚹ: "W",
    ᚦ: "X",
    ᛇ: "Y",
    ᛉ: "Z",
    ᚦ: "TH",
    ᛝ: "NG",
    " ": " ",
  };

  const convertFunctionLatinToEF = (input) => {
    let result = "";
    for (let i = 0; i < input.length; i++) {
      const element = input[i].toUpperCase();
      let char = runicToLatinMap[element] || element;
      if (i + 1 < input.length) {
        const nextTwoChars = input.substr(i, 2).toUpperCase();
        if (runicToLatinMap[nextTwoChars]) {
          char = runicToLatinMap[nextTwoChars];
          i += 2;
        }
      }
      result += char;
    }

    setDisplayResult(result);
  };

  const convertFunctionEFtoLatin = (input) => {
    let result = "";
    for (let i = 0; i < input.length; i++) {
      const element = input[i].toUpperCase();
      let char = elderToLatinMap[element] || element;
      if (i + 1 < input.length) {
        const nextTwoChars = input.substr(i, 2).toUpperCase();
        if (elderToLatinMap[nextTwoChars]) {
          char = elderToLatinMap[nextTwoChars];
          i += 2;
        }
      }
      result += char;
    }

    setDisplayResult(result);
  };

  return (
    <div>
      <Head>
        <title>
          Скандинавски руни: История, значение и употреба - NONCREATIVEBLOG
        </title>
        <meta
          name="description"
          content="Открийте историята, значение и употреба на скандинавските руни. Как са използвани днес и какво представляват."
        />
        <meta
          name="keywords"
          content="скандинавски руни, руни, Elder Futhark, скандинавска писменост, история на руните"
        />
        <meta
          property="og:title"
          content="Скандинавски руни: История, значение и употреба - NONCREATIVEBLOG"
        />
        <meta
          property="og:description"
          content="Открийте историята, значение и употреба на скандинавските руни. Как са използвани днес и какво представляват."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://noncreativeblog.net/runes" />
        <meta
          property="og:image"
          content="https://noncreativeblog.net/cover.png"
        />
      </Head>
      <div class="relative w-full absolute top-0 mx-auto mt-4 lg:mt-16 ">
        <Image
          src={cover}
          alt="noncreativeblog"
          class="w-full lg:w-10/12 h-auto  lg:h-[380px]  mx-auto    object-cover rounded-b-lg "
        />
      </div>
      <div className=" w-full lg:w-11/12 container mx-auto">
        {" "}
        <div className="w-full lg:w-5/6 mx-auto p-4 rounded-lg shadow-md">
          <div className="info-box mb-4">
            <p className="text-lg bg-yellow-50 p-4 mb-4 rounded-lg">
              <BsInfoCircle className="inline-block mr-2 text-yellow-500" />
              Протогерманската писменост е една от най-старите познати на
              човечеството. Първите сведения за нея датират от 160 години преди
              Христа. Първата руническа азбука, наречена Elder Futhark, се
              използвала между II и VII век и е била широко разпространена сред
              германските народи, особено в Скандинавия. Според митологията
              произходът на руните се свързва със скандинавската митология и Бог
              Один, който, според легендата, получил руни след като слязъл от
              дървото на живота Игдрасил. Руните се смятат за носители на
              мъдрост и тайни знания, като самата дума "руна" може да се преведе
              като "шепот" или "мистериозен шепот".
            </p>
            <p className="text-lg bg-yellow-50 p-4 mb-4 rounded-lg">
              <BsInfoCircle className="inline-block mr-2 text-yellow-500" />В
              таблицата по-долу можете да се запознаете със състава на Elder
              Futhark и значението на отделните руни. Руните са не само азбука,
              но и комплексни символи, използвани за гадаене, пречистване и
              лечение. Всяка руна има своето уникално значение, като възприема
              звуци и букви от латинската азбука. Въпреки че руните биват
              изместени от латинската азбука с настъпването на християнството в
              Европа, те остават в употреба и до днес за различни декоративни и
              мистични цели, като изработка на амулети, медальони и украшения.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <BsCheckCircle className="h-8 w-8 text-green-500 mr-2" />
            <p className="text-lg text-green-500">
              Достъпна информация и конвертор за руни
            </p>
          </div>
        </div>
        <div className=" overflow-x-scroll ">
          <table className="min-w-full bg-white text-2xl">
            <thead>
              <tr
                className={` bg-gray-500 text-gray-100 uppercase text-sm leading-normal`}
              >
                <th className="py-3 px-6 text-left border-r-2">
                  Elder Futhark
                </th>
                <th className="py-3 px-6 text-left border-r-2">Латиница</th>
                <th className="py-3 px-6 text-left border-r-2">Наименование</th>
                <th className="py-3 px-6 text-left border-r-2">Значение</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-bold">
              <tr className="border-b border-gray-200 ">
                <td className="py-3 px-6 text-left whitespace-nowrap border-r-2">
                  ᚨ
                </td>
                <td className="py-3 px-6 text-left border-r-2">A</td>
                <td className="py-3 px-6 text-left border-r-2">Ansuz</td>
                <td className="py-3 px-6 text-left">
                  Один и предците богове, въздух, комуникация
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-6 text-left whitespace-nowrap border-r-2">
                  ᛒ
                </td>
                <td className="py-3 px-6 text-left border-r-2">B</td>
                <td className="py-3 px-6 text-left border-r-2">Berkana</td>
                <td className="py-3 px-6 text-left">
                  Раждане, плодородие, женственост, защита, здраве
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-6 text-left whitespace-nowrap border-r-2">
                  ᚲ
                </td>
                <td className="py-3 px-6 text-left border-r-2">C</td>
                <td className="py-3 px-6 text-left border-r-2">Kaunaz</td>
                <td className="py-3 px-6 text-left">
                  Светлина, енергия, страст, креативност, преобразяване
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-6 text-left whitespace-nowrap border-r-2">
                  ᛞ
                </td>
                <td className="py-3 px-6 text-left border-r-2 ">D</td>
                <td className="py-3 px-6 text-left border-r-2">Dagaz</td>
                <td className="py-3 px-6 text-left">
                  Светлина, Интуиция, Креативност, Визия
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-6 text-left whitespace-nowrap border-r-2">
                  ᛖ
                </td>
                <td className="py-3 px-6 text-left border-r-2">E</td>
                <td className="py-3 px-6 text-left border-r-2">Ehwaz</td>
                <td className="py-3 px-6 text-left">
                  Кон, партньорство, напредък, приятелство
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-6 text-left whitespace-nowrap border-r-2">
                  ᚠ
                </td>
                <td className="py-3 px-6 text-left border-r-2">F</td>
                <td className="py-3 px-6 text-left border-r-2">Fehu</td>
                <td className="py-3 px-6 text-left">
                  Крави, изобилие, богатство, материални придобивки
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-6 text-left whitespace-nowrap border-r-2">
                  ᚷ
                </td>
                <td className="py-3 px-6 text-left border-r-2">G</td>
                <td className="py-3 px-6 text-left border-r-2">Gebo</td>
                <td className="py-3 px-6 text-left">
                  Подарък, благодарност, обмен, получаване чрез жертвоприношение
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-6 text-left whitespace-nowrap border-r-2">
                  ᚺ
                </td>
                <td className="py-3 px-6 text-left border-r-2">H</td>
                <td className="py-3 px-6 text-left border-r-2">Hagalaz</td>
                <td className="py-3 px-6 text-left">
                  Градушка, временни затруднения, промяна на планове, забавяне
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-6 text-left whitespace-nowrap border-r-2">
                  ᛁ
                </td>
                <td className="py-3 px-6 text-left border-r-2">I</td>
                <td className="py-3 px-6 text-left border-r-2">Isaz</td>
                <td className="py-3 px-6 text-left">Лед, инерция</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-6 text-left whitespace-nowrap border-r-2">
                  ᛃ
                </td>
                <td className="py-3 px-6 text-left border-r-2">J</td>
                <td className="py-3 px-6 text-left border-r-2">Jera</td>
                <td className="py-3 px-6 text-left">
                  Жетва, цикъл, отблагодаряване, реколта
                </td>
              </tr>
              <tr className="border-b border-gray-200 ">
                <td className="py-3 px-6 text-left whitespace-nowrap border-r-2">
                  ᚲ
                </td>
                <td className="py-3 px-6 text-left border-r-2">K</td>
                <td className="py-3 px-6 text-left border-r-2">Kaunaz</td>
                <td className="py-3 px-6 text-left">
                  Светлина, енергия, страст, креативност, преобразяване
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-6 text-left whitespace-nowrap border-r-2">
                  ᛚ
                </td>
                <td className="py-3 px-6 text-left border-r-2">L</td>
                <td className="py-3 px-6 text-left border-r-2">Laguz</td>
                <td className="py-3 px-6 text-left">
                  Вода, течение, пътуване навътре, дълбина
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-6 text-left whitespace-nowrap border-r-2">
                  ᛗ
                </td>
                <td className="py-3 px-6 text-left border-r-2">M</td>
                <td className="py-3 px-6 text-left border-r-2">Mannaz</td>
                <td className="py-3 px-6 text-left">
                  Човечност, баланс, божествен потенциал, талантливост
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-6 text-left whitespace-nowrap border-r-2">
                  ᚾ
                </td>
                <td className="py-3 px-6 text-left border-r-2">N</td>
                <td className="py-3 px-6 text-left border-r-2">Nauthiz</td>
                <td className="py-3 px-6 text-left">
                  Нужда, преодоляване на предизвикателства, изявление,
                  проявление
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-6 text-left whitespace-nowrap border-r-2">
                  ᛟ
                </td>
                <td className="py-3 px-6 text-left border-r-2">O</td>
                <td className="py-3 px-6 text-left border-r-2">Othala</td>
                <td className="py-3 px-6 text-left">
                  Наследство, завещание, мъдрост, таланти, завръщане
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-6 text-left whitespace-nowrap border-r-2">
                  ᛈ
                </td>
                <td className="py-3 px-6 text-left border-r-2">P</td>
                <td className="py-3 px-6 text-left border-r-2">Perthro</td>
                <td className="py-3 px-6 text-left">
                  Гадание, търсене на самопознание, съдба
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-6 text-left whitespace-nowrap border-r-2">
                  ᚲ
                </td>
                <td className="py-3 px-6 text-left border-r-2">Q</td>
                <td className="py-3 px-6 text-left border-r-2">Kaunaz</td>
                <td className="py-3 px-6 text-left border-r-2">
                  Светлина, енергия, страст, креативност, преобразяване
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-6 text-left whitespace-nowrap border-r-2">
                  ᚱ
                </td>
                <td className="py-3 px-6 text-left border-r-2">R</td>
                <td className="py-3 px-6 text-left border-r-2">Raidho</td>
                <td className="py-3 px-6 text-left border-r-2">
                  Колесница, пътуване, ритъм, пътешествие
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-6 text-left whitespace-nowrap border-r-2">
                  ᛊ
                </td>
                <td className="py-3 px-6 text-left border-r-2">S</td>
                <td className="py-3 px-6 text-left border-r-2">Sowulo</td>
                <td className="py-3 px-6 text-left border-r-2">
                  Слънце, духовна сила и просветление, успех, личностно
                  израстване
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-6 text-left whitespace-nowrap border-r-2">
                  ᛏ
                </td>
                <td className="py-3 px-6 text-left border-r-2">T</td>
                <td className="py-3 px-6 text-left border-r-2">Tiwaz</td>
                <td className="py-3 px-6 text-left border-r-2">
                  Тир, храброст, борба за справедливост и чест, саможертва за
                  по-висша обществена цел
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-6 text-left whitespace-nowrap border-r-2">
                  ᚢ
                </td>
                <td className="py-3 px-6 text-left border-r-2">U</td>
                <td className="py-3 px-6 text-left border-r-2">Uruz</td>
                <td className="py-3 px-6 text-left ">
                  Див бивол, сила, добро здраве
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-6 text-left whitespace-nowrap border-r-2">
                  ᚢ
                </td>
                <td className="py-3 px-6 text-left border-r-2">V</td>
                <td className="py-3 px-6 text-left border-r-2">Uruz</td>
                <td className="py-3 px-6 text-left -r-2">
                  Див бивол, сила, добро здраве
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-6 text-left whitespace-nowrap border-r-2">
                  ᚹ
                </td>
                <td className="py-3 px-6 text-left border-r-2">W</td>
                <td className="py-3 px-6 text-left border-r-2">Wunjo</td>
                <td className="py-3 px-6 text-left">
                  Радост, удовлетворение, благополучие, период на щастие
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-6 text-left whitespace-nowrap border-r-2">
                  ᚦ
                </td>
                <td className="py-3 px-6 text-left border-r-2">X</td>
                <td className="py-3 px-6 text-left border-r-2">Thurisaz</td>
                <td className="py-3 px-6 text-left">
                  Гигант, трън, защита, нарушение
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-6 text-left whitespace-nowrap border-r-2">
                  ᛇ
                </td>
                <td className="py-3 px-6 text-left border-r-2">Y</td>
                <td className="py-3 px-6 text-left border-r-2">Eihwaz</td>
                <td className="py-3 px-6 text-left">
                  Тис, мъдрост, тайната на живота и смъртта, отвъдното
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-6 text-left whitespace-nowrap border-r-2">
                  ᛉ
                </td>
                <td className="py-3 px-6 text-left border-r-2">Z</td>
                <td className="py-3 px-6 text-left border-r-2 ">Algiz</td>
                <td className="py-3 px-6 text-left">
                  Елк, късмет и защита, духовна връзка със себеси, убежище
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-6 text-left whitespace-nowrap border-r-2">
                  ᚦ
                </td>
                <td className="py-3 px-6 text-left border-r-2">Th</td>
                <td className="py-3 px-6 text-left border-r-2">Thurisaz</td>
                <td className="py-3 px-6 text-left">
                  Гигант, трън, защита, нарушение
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-6 text-left whitespace-nowrap border-r-2">
                  ᛝ
                </td>
                <td className="py-3 px-6 text-left border-r-2">Ng</td>
                <td className="py-3 px-6 text-left border-r-2">Ingwaz</td>
                <td className="py-3 px-6 text-left">
                  Плодородие, сексуалност, потенциална енергия, семейство и рода
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-gray-300 text-gray-700 w-full p-4 text-center">
          <div className=" text-center mt-4 bg-red-50 text-red-700 p-4 rounded-md flex items-center justify-center">
            <BsExclamationTriangle className="h-6 w-6 mr-2 text-red-500" />
            <p className="text-sm">
              Бележка: Този софтуер конвертира само отделни символи и знаци. Той
              не е предназначен за превод на рунически надписи.
            </p>
          </div>
          <h2 className="text-2xl mb-4">Конвертор</h2>
          <div className="mb-4">
            <select
              value={latinOrEF}
              className="p-2 bg-gray-100 rounded"
              onChange={(e) => {
                setLatinOrEf(e.target.value);
                if (e.target.value === "Latin") {
                  setDisplayResult("ᚲᚨᚾᛁᛊ ᛚᚢᛈᚢᛊ");
                  setRunicSymbol("Canis Lupus");
                } else {
                  setRunicSymbol(" ᚲᚨᚾᛁᛊ ᛚᚢᛈᚢᛊ");
                  setDisplayResult("Canis Lupus");
                }
              }}
            >
              <option value="Latin">Latin - Elder Furthark</option>
              <option value="EF">Elder Furthark - Latin</option>
            </select>
          </div>

          <div className="mb-4 text-xl max-w-full overflow-hidden">
            {latinOrEF === "Latin" ? "Elder Furthark" : "Latin"}:
            <p className="font-bold  w-full lg:w-1/2 mx-auto text-blue-700 border-b border-gray-200 overflow-ellipsis overflow-hidden break-words">
              {displayResult}
            </p>
            <button
              className="ml-2 p-2 bg-gray-400 rounded mt-4"
              onClick={() => copyToClipboard(displayResult)}
            >
              Копирай
            </button>
          </div>

          <div className="mb-4">
            <input
              type="text"
              className="p-2 bg-gray-200 rounded"
              placeholder="Въведете текст"
              value={runicSymbol}
              onChange={(e) => setRunicSymbol(e.target.value)}
            />
          </div>

          <button
            className="p-2 w-64 bg-yellow-300 text-gray-700 rounded font-bold"
            onClick={() => {
              if (latinOrEF === "Latin") {
                convertFunctionLatinToEF(runicSymbol);
              } else {
                convertFunctionEFtoLatin(runicSymbol);
              }
            }}
          >
            Конвертирай
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Runes;
