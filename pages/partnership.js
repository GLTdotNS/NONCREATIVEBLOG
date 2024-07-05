import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaClock } from "react-icons/fa"; // Извличане на допълнителни икони от React Icons

const PartnershipPage = () => {
  const [faq, setFaq] = useState([
    {
      question: "Какъв вид съдържание предлагате?",
      answer:
        "Предлагаме уникални статии и материали, свързани със скандинавската митология, лични истории и хендкрафт неща.",
      isOpen: false,
    },
    {
      question: "Какъв е процесът за сътрудничество?",
      answer:
        "Моля, свържете се с нас чрез имейл или формата за контакт по-горе, за да обсъдим детайлите на сътрудничеството.",
      isOpen: false,
    },
    {
      question: "Какви са условията за рекламни кампании?",
      answer:
        "За информация относно рекламни кампании и тяхното участие с нас, свържете се директно чрез нашата контактна форма или имейл.",
      isOpen: false,
    },
    {
      question:
        "Колко време отнема процесът на одобрение на предложение за сътрудничество?",
      answer:
        "Обикновено процесът на одобрение на предложение отнема до 5 работни дни. Моля, бъдете търпеливи по време на този период.",
      isOpen: false,
    },
  ]);

  const toggleAccordion = (index) => {
    setFaq((prevFaq) =>
      prevFaq.map((item, i) => {
        if (i === index) {
          return { ...item, isOpen: !item.isOpen };
        } else {
          return { ...item, isOpen: false };
        }
      })
    );
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-24">
      <h1 className="text-3xl font-bold mb-4">Страница за Партньорство</h1>
      <p className="text-lg mb-4">
        Заинтересовани ли сте от възможност за сътрудничество с NONCREATIVEBLOG?
        Ние ценим вашия интерес и готовността ви да споделяте общи цели. Моля,
        свържете се с нас, за да обсъдим как можем да сътрудничим.
      </p>
      <h2 className="text-2xl font-bold mb-2">
        Защо да изберете нас за партньор?
      </h2>
      <p className="mb-4">
        NONCREATIVEBLOG предлага уникално съдържание в областта на
        скандинавската митология, лични истории и хендкрафт неща. Нашата
        аудитория е ангажирана и заинтересована в подобни теми.
      </p>
      <h2 className="text-2xl font-bold mb-2">
        Предимства от партньорство с нас
      </h2>
      <ul className="list-disc pl-4 mb-4">
        <li>Достъп до уникални и вдъхновяващи материали и статии</li>
        <li>
          Достигане до аудитория с интереси в културата и традициите на Северна
          Европа
        </li>
        <li>Бърз и лесен за навигация уебсайт</li>
        <li>
          Гъвкави възможности за сътрудничество - от рекламни кампании до
          съвместни проекти
        </li>
        <li>
          Професионализъм и висок стандарт на качество във всяко сътрудничество
        </li>
      </ul>
      <h2 className="text-2xl font-bold mb-2">Как да станем партньори?</h2>
      <p className="mb-4">
        За да научите повече или да започнем сътрудничество, моля,{" "}
        <a href="/contact/email" className="text-blue-500 hover:underline">
          свържете се с нас
        </a>{" "}
        и ни изпратете вашия линк и описание на вашето предложение.
      </p>
      <div className="flex items-center mb-4">
        <FaEnvelope className="text-2xl mr-2 text-blue-500" />
        <span className="text-lg">
          Имейл:{" "}
          <a
            href="mailto:your-email@example.com"
            className="text-blue-500 hover:underline"
          >
            noncreativeblog@gmail.com
          </a>
        </span>
      </div>
      {/* FAQ Section */}
      <h2 className="text-2xl font-bold mb-2">Често задавани въпроси (FAQ)</h2>
      {faq.map((item, index) => (
        <div key={index} className="mb-4">
          <button
            className="flex items-center justify-between w-full bg-gray-200 p-4 rounded-lg"
            onClick={() => toggleAccordion(index)}
          >
            <span className="text-lg font-medium">{item.question}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 transition-transform duration-300 transform ${
                item.isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {item.isOpen && (
            <div className="bg-gray-100 p-4 rounded-lg mt-2">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PartnershipPage;
