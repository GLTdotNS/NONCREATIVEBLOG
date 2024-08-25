import { useRouter } from "next/router";
import { useState } from "react";
import React, { useContext } from "react";
import MyContext from "../../Context/context";
const CommentForm = ({ id }) => {
  const { isOpenSection, setSisOpenSection } = useContext(MyContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
    id: "",
  });
  const [loading, setLoading] = useState();
  const [sent, setSent] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value, id });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/comments", {
        method: "POST",
        body: JSON.stringify(formData),
        type: "application/json",
      }).then(() => {
        setLoading(false);
        setFormData({
          name: "",
          email: "",
          comment: "",
          id: "",
        });
      });
    } catch (err) {
    } finally {
      setSent(true);
    }
  };

  return (
    <>
      {!sent ? (
        <form
          onSubmit={onSubmit}
          class=" mx-auto p-8 rounded-lg w-full max-w-xl bg-white border border-gray-300 z-50"
        >
          <h2 class="text-2xl font-semibold mb-6 text-center text-gray-700">
            Остави мнение
          </h2>
          <div class="mb-4">
            <label for="name" class="block text-gray-600 font-medium mb-2">
              Име
            </label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Иван Иванов*"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div class="mb-4">
            <label for="email" class="block text-gray-600 font-medium mb-2">
              Електронна поща
            </label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Ел. поща*"
              required
              type="email"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div class="mb-4">
            <label for="comment" class="block text-gray-600 font-medium mb-2">
              Коментар
            </label>
            <textarea
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              placeholder="Какво мислиш..."
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows="4"
            ></textarea>
          </div>
          {loading ? (
            <p>Моля изчкайте, коментарът се изпраща</p>
          ) : (
            <button
              type="submit"
              class="w-full bg-yellow-300 cursor-pointer text-gray-700 font-bold py-2 rounded-lg hover:bg-yellow-200 transition duration-300"
            >
              Пуликувай
            </button>
          )}
        </form>
      ) : (
        <div class=" mx-auto p-8 rounded-lg h-full w-full max-w-xl bg-white border border-gray-300">
          <p>Коментарът ще бъде публикуван, след като бъде одобрен.</p>
          <button
            onClick={() => setSent(false)}
            className="rounded-full bg-yellow-300 w-5/6 mx-auto mt-4 p-2 flex items-center  justify-center"
          >
            Добави нов
          </button>
        </div>
      )}
    </>
  );
};

export default CommentForm;
