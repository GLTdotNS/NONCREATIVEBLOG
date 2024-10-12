import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import { useState } from "react";
import { MdOutlineZoomOutMap } from "react-icons/md";
import getYouTubeId from "get-youtube-id";
import YouTube from "react-youtube";
import { FaFeatherPointed } from "react-icons/fa6";

export const serializers = {
  types: {
    youtube: ({ node }) => {
      const { url } = node;
      const id = getYouTubeId(url);
      if (!id) {
        return <div>Invalid YouTube URL</div>;
      }

      return <YouTube iframeClassName={"w-full p-4"} videoId={id} />;
    },
    image: (props) => {
      const [modalOpen, setModalOpen] = useState(false);

      const assetRef = props.node.asset?._ref;
      const baseUrl = `https://cdn.sanity.io/images/${"6kqgsbl2"}/production/`;
      const imageId = assetRef
        ? assetRef.replace("image-", "").replace(/-\w+$/, "")
        : "";
      const extension = assetRef ? assetRef.split("-").pop() : "jpg";
      const imageUrl = `${baseUrl}${imageId}.${extension}`;
      return (
        <div className="relative rounded-lg mx-auto  flex items-center justify-center bg-yellow-50  text-black ">
          <figure
            onClick={() => setModalOpen(true)}
            className="cursor-pointer "
          >
            <img
              className=" mx-auto w-full md:w-64 lg:w-1/2"
              src={imageUrl}
              alt={props.node.alt || "noncreativeblog"}
            />

            {props.node.caption && (
              <figcaption className="p-2 text-gray-700 bg-yellow-100  lg:w-1/2 mx-auto">
                {props.node.caption}
              </figcaption>
            )}

            <MdOutlineZoomOutMap
              onClick={() => setModalOpen(true)}
              className="absolute top-2 left-0 text-4xl text-blue-700"
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

      if (style === "anchor") {
        return <a className="text-red"> {props.children}</a>;
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
        return <h4 className="font-bold text-2xl">{props.children}</h4>;
      }
      if (style === "blockquote ") {
        return <blockquote> {props.children}</blockquote>;
      }
      if (style === "blockquote") {
        return (
          <blockquote className="relative w-full bg-slate-100 p-4 rounded-lg md:w-1/2 mx-auto">
            <FaFeatherPointed className=" absolute  top-4 right-4 text-4xl text-gray-700" />

            {props.children}
          </blockquote>
        );
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
      <li className="list-disc">{props.children}</li>
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
