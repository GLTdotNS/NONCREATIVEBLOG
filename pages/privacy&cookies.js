import React from "react";
import { FaArrowLeft, FaShieldAlt, FaRegQuestionCircle } from "react-icons/fa";
import { IoMdHelpCircle } from "react-icons/io";
import rtaLogo from "../styles/rta.gif";
import Image from "next/image";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <div
      id="privacy-policy"
      className="max-w-5xl mx-auto p-8 text-gray-400 rounded "
    >
      <button
        onClick={() => window.history.back()}
        className="flex items-center text-blue-500 mb-6 mt-24"
      >
        <FaArrowLeft className="mr-2" />
        Back
      </button>
      <h2 className="text-5xl font-bold mb-10">Privacy Policy</h2>
      <p className="text-lg mb-10">
        At Redhead, safeguarding your privacy is of utmost importance. We are
        committed to transparently managing your data in accordance with legal
        requirements and industry best practices. This policy outlines how we
        collect, use, and protect your information.
      </p>
      <h3 className="text-3xl font-semibold flex items-center mb-6">
        <FaShieldAlt className="mr-4" />
        Data Collection
      </h3>
      <p className="text-lg mb-8">
        <em>Browsing the Website:</em> We respect your privacy and only collect
        data with your explicit consent. We use cookies and may gather IP
        addresses to enhance user experience, personalize content, and provide
        tailored suggestions.
      </p>
      <h3 className="text-3xl font-semibold flex items-center mb-6">
        <FaShieldAlt className="mr-4" />
        Data Usage
      </h3>
      <p className="text-lg mb-8">
        We utilize the collected data to deliver a customized experience on
        Redhead. This includes recommending content, improving website
        functionality, and optimizing our services to better meet your needs.
      </p>
      <h3 className="text-3xl font-semibold flex items-center mb-6">
        <FaShieldAlt className="mr-4" />
        Data Security
      </h3>
      <p className="text-lg mb-8">
        Protecting your data is paramount to us. We employ robust security
        measures to safeguard your information against unauthorized access,
        misuse, or alteration. However, please note that no method of data
        transmission over the internet is entirely secure.
      </p>
      <h3 className="text-3xl font-semibold flex items-center mb-6">
        <FaShieldAlt className="mr-4" />
        RTA Compliance
      </h3>
      <p className="text-lg mb-8">
        Redhead is committed to providing a safe and secure browsing experience
        for your children. We adhere to standards set by Restricted to Adults
        (RTA) to ensure that our content is intended for adults. Everyone using
        the site has confirmed that they are 18+ years of age. For more
        information about the RTA and how to protect your children from unwanted
        access to content unsuitable for them, please click on the link shown
        below:
      </p>
      <div className="flex items-center mb-10">
        <Image
          width={200}
          height={100}
          src={rtaLogo}
          alt="RTA Logo"
          className="w-32 h-20 mr-4"
        />
        <a
          href="https://www.rtalabel.org/?content=parents"
          className="text-lg text-blue-600"
        >
          Restricted To Adults (RTA)
        </a>
      </div>
      <p className="text-lg text-gray-600 mb-10">
        For any questions or concerns regarding our Privacy Policy, please
        contact us
        <Link href="/contact">here</Link>.
      </p>
      <h2 className="text-4xl mt-10">18 U.S.C. § 2257 STATEMENT</h2>
      <p className="text-lg mb-10">
        Although we are not subject to United States law, we voluntarily comply
        with certain legal safeguards. For the purposes of 18 U.S.C. § 2257,
        Redhead is not a producer (primary or secondary) of any content found on
        this website. For § 2257 records for any content found on this website,
        please direct your request to the site or user which produced the
        content.
      </p>
      <div className="flex items-center mb-6 text-blue-500">
        <IoMdHelpCircle className="mr-2" />
        <Link href={"/contact"} className="text-lg">
          For any additional queries, feel free to contact us.
        </Link>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
