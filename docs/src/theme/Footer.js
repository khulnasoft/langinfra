import React from "react";
import Footer from "@theme-original/Footer";
import { MendableFloatingButton } from "@mendable/search";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function FooterWrapper(props) {
  const iconSpan1 = React.createElement(
    "img",
    {
      src: "/img/langinfra-icon-black-transparent.svg",
      srcDark: "",
      style: { width: "40px" },
    },
    null
  );

  const icon = React.createElement(
    "div",
    {
      style: {
        color: "#000000",
        fontSize: "22px",
        width: "48px",
        height: "48px",
        margin: "0px",
        padding: "0px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      },
    },
    [iconSpan1]
  );
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();

  const mendableFloatingButton = React.createElement(MendableFloatingButton, {
    floatingButtonStyle: { color: "#000000", backgroundColor: "#f6f6f6" },
    anon_key: customFields.mendableAnonKey,
    showSimpleSearch: true,
    icon: icon,
  });

  return (
    <>
      <Footer />
      {mendableFloatingButton}
    </>
  );
}
