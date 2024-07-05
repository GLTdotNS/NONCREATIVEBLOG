import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import { useState } from "react";
import { MdOutlineZoomOutMap } from "react-icons/md";

export const serializers = {
  types: {
    image: (props) => {
      const [modalOpen, setModalOpen] = useState(false);

      const assetRef = props.node.asset?._ref;
      const baseUrl = `https://cdn.sanity.io/images/${"y8gn2piz"}/production/`;
      const imageId = assetRef
        ? assetRef.replace("image-", "").replace(/-\w+$/, "")
        : "";
      const extension = assetRef ? assetRef.split("-").pop() : "jpg";
      const imageUrl = `${baseUrl}${imageId}.${extension}`;
      return (
        <div className="relative rounded-lg mx-auto mr-4 float-left flex items-center justify-center bg-yellow-50 p-2   text-black mt-4 mb-8 ">
          <figure
            onClick={() => setModalOpen(true)}
            className="cursor-pointer "
          >
            <img
              className=" mx-auto w-full md:w-64 lg:w-1/2"
              src={imageUrl}
              alt={props.node.alt || "noncreativeblog"}
            />

            <figcaption className="p-2 text-gray-700 bg-yellow-100  lg:w-1/2 mx-auto">
              {props.node.caption}
            </figcaption>

            <MdOutlineZoomOutMap
              onClick={() => setModalOpen(true)}
              className="absolute top-2 left-0 text-2xl"
            />
          </figure>

          {modalOpen && (
            <div className=" fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 modal">
              <div className="relative">
                <button
                  className="absolute top-0 right-0 z-50 m-4 text-white bg-gray-700 bg-opacity-90 p-2 text-3xl"
                  onClick={() => setModalOpen(false)}
                >
                  &times;
                </button>
                <img
                  className="fade-in-element max-w-full max-h-full"
                  style={{ maxHeight: "90vh" }} // Limit height to 90% of viewport height
                  src={imageUrl}
                  alt={props.node.alt || "Image"}
                />
              </div>
            </div>
          )}
        </div>
      );
    },
    block: (props) => {
      const { style = "normal" } = props.node;

      if (/^h\d/.test(style)) {
        const level = style.replace(/[^\d]/g, "");
        return React.createElement(
          style,
          { className: `heading-${level}` },
          props.children
        );
      }

      if (style === "blockquote") {
        return (
          <blockquote
            style={{
              position: "relative",
              display: "block",
              width: "90%",
              margin: "auto",
              padding: "5%",
              justifyContent: "center",
              fontSize: "20px",
              textAlign: "left",
              alignItems: "center !important",
            }}
          >
            {" "}
            {props.children}
          </blockquote>
        );
      }

      return BlockContent.defaultSerializers.types.block(props);
    },
    block: (props) => {
      const style = props.node.style;

      if (/^h\d/.test(style == "normal")) {
        const level = style.replace(/[^\d]/g, "");
        return React.createElement(
          style,
          { className: `heading-${level} ` },
          props.children
        );
      }
      if (style === "h4") {
        return <p className="font-bold text-2xl">{props.children}</p>;
      }
      if (style === "blockquote ") {
        return <blockquote> {props.children}</blockquote>;
      }

      return BlockContent.defaultSerializers.types.block(props);
    },
  },
  list: (props) =>
    props.type === "bullet" ? (
      <ul className="list-disc p-2 ml-2 mt-2 mb-2 ">{props.children}</ul>
    ) : (
      <ol>{props.children}</ol>
    ),
  listItem: (props) =>
    props.type === "bullet" ? (
      <li className="list-disc mt-4">{props.children}</li>
    ) : (
      <li>{props.children}</li>
    ),
  marks: {
    strong: (props) => <strong>{props.children}</strong>,

    em: (props) => <em>{props.children}</em>,
    code: (props) => {
      return (
        <p>
          <code> {props.children === "string" ? "d" : props.children}</code>
        </p>
      );
    },
  },
};
