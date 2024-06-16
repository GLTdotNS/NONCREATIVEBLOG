import { useState } from "react";
import { useRouter } from "next/router";

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
    <div className="w-full lg:w-10/12 mx-auto p-4 mt-24 shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Contact Form</h1>
      {!successMessage &&
        !errorMessage && ( // Only show the form if no success or error message
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="border border-gray-300 rounded px-3 py-2"
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
              <label htmlFor="privacyAccepted" className="text-sm">
                I agree to the{" "}
                <a href="/privacy&policy" className="text-blue-500">
                  privacy policy and cookies
                </a>
              </label>
            </div>
            {loading ? (
              <p className="text-sm text-gray-600 mt-4">Sending...</p>
            ) : (
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
                disabled={loading}
              >
                Send
              </button>
            )}
          </form>
        )}
    </div>
  );
};

export default ContactForm;
