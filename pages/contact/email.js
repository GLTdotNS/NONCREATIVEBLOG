import { useState } from "react";
import { useRouter } from "next/router";
import { FaSmile, FaRocket } from "react-icons/fa";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    privacyAccepted: false,
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setSuccessMessage("Form submitted successfully");
      setFormData({
        name: "",
        email: "",
        message: "",
        privacyAccepted: false,
      });
      setLoading(false);
      router.push("/contact/success");
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("Failed to submit form. Please try again later.");
      setLoading(false);
    }
  };

  return (
    <div className="w-full lg:w-10/12 mx-auto p-12 mt-24 rounded-lg shadow-lg">
      {!successMessage &&
        !errorMessage && ( // Only show the form if no success or error message
          <div className="lg:flex lg:space-x-8">
            {/* Left Column */}
            <div className="lg:w-1/3 mb-8 lg:mb-0 text-center lg:text-left border-r-2 border-gray-600 pr-8">
              <h2 className="text-2xl font-bold mb-2 text-yellow-300">
                Здравейте! <FaSmile className="inline text-yellow-500" />
              </h2>
              <p className="mb-4 text-gray-300">
                Тук можете да ми изпратите съобщение. Не се срамувайте, не хапя!
                Е, поне не по имейл.
                <FaRocket className="inline text-red-500" />
              </p>
              <p className="text-gray-300">
                Очаквам с нетърпение да чуя от вас! 😊
              </p>
            </div>

            {/* Right Column */}
            <div className="lg:w-1/2 mx-auto ">
              <h1 className="text-2xl font-bold mb-4 text-center text-yellow-300">
                Изпрати съобщение{" "}
              </h1>
              <form
                onSubmit={handleSubmit}
                className="space-y-4 w-full lg:w-5/6 mx-auto"
              >
                <div className="flex flex-col">
                  <label htmlFor="name" className="mb-1 text-gray-200">
                    Име
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border border-gray-300 rounded px-3 py-2 text-gray-800"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="mb-1 text-gray-200">
                    Електронна поща
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border border-gray-300 rounded px-3 py-2 text-gray-800"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="message" className="mb-1 text-gray-200">
                    Съобщение
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="border border-gray-300 rounded px-3 py-2 text-gray-800"
                  ></textarea>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="privacyAccepted"
                    name="privacyAccepted"
                    checked={formData.privacyAccepted}
                    onChange={handleChange}
                    required
                    className="mr-2"
                  />
                  <label
                    htmlFor="privacyAccepted"
                    className="text-sm text-gray-300"
                  >
                    Съгласявам се с{" "}
                    <a
                      href="/cookies&privacy"
                      className="text-blue-500 hover:underline"
                    >
                      политиката за поверителност и бисквитките.
                    </a>
                  </label>
                </div>
                {loading ? (
                  <p className="text-sm text-gray-600 mt-4">
                    Изпращане... Моля изчакайте.
                  </p>
                ) : (
                  <button
                    type="submit"
                    className="bg-yellow-300 text-gray-700 font-bold w-full px-4 py-2 rounded transition-colors duration-300 hover:bg-yellow-400"
                    disabled={loading}
                  >
                    Изпрати
                  </button>
                )}
              </form>
            </div>
          </div>
        )}
    </div>
  );
};

export default ContactForm;
