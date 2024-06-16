import React from "react";
import BlockContent from "@sanity/block-content-to-react";

import Image from "next/image";
import { useState } from "react";
export const serializers = {
  types: {
    youtube: ({ node }) => {
      const { url } = node;
      const id = getYouTubeId(url);
      return <YouTube videoId={id} />;
    },

    image: (props) => {
      const [modalOpen, setModalOpen] = useState(false);
      return (
        <div className={modalOpen ? "" : ""}>
          <figure>
            <img
              className="relative w-full lg:w-1/2 mx-auto object-cover"
              style={{ cursor: "pointer" }}
              src={`https://cdn.sanity.io/images/y8gn2piz/production/${props.node.asset?._ref
                .replace("image-", "")
                .replace("-jpg", "")}.jpg`}
            />

            {props.node.caption && !modalOpen ? (
              <figcaption className="p-2 bg-orange-100 ">
                {props.node.caption}
              </figcaption>
            ) : (
              ""
            )}
          </figure>
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
        return <blockquote> {props.children}</blockquote>;
      }

      return BlockContent.defaultSerializers.types.block(props);
    },
  },
  list: (props) =>
    props.type === "bullet" ? (
      <ul className="list-disc p-4 ml-4 mt-4 mb-4 ">{props.children}</ul>
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
