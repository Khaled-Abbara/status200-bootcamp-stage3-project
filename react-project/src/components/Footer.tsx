import ReactLogo from "../assets/react.svg";
import ViteLogo from "../assets/vite.svg";
import TypescriptLogo from "../assets/typescript.svg";
import JavascriptLogo from "../assets/javascript.svg";
import NodeJsLogo from "../assets/node-js.svg";
import Gitlogo from "../assets/git.svg";

function Footer() {
  const logos: string[] = [
    ReactLogo,
    ViteLogo,
    TypescriptLogo,
    JavascriptLogo,
    NodeJsLogo,
    Gitlogo,
  ];

  return (
    <>
      <div
        className="text-light text-center p-5"
        style={{ backgroundColor: "#111" }}>
        <div className="d-flex justify-content-center gap-2 pb-4">
          {logos.map((logo) => (
            <img style={{ width: "2rem" }} src={logo} alt={logo} />
          ))}
        </div>
        <p style={{ opacity: 0.6 }}>Privacy Policy | Contact Us | Our Goals</p>
        <p style={{ opacity: 0.6 }}>
          Copyright © 2023-{new Date().getFullYear()}. All Rights Reserved by
          GERBANG ALAF RESTAURANTS SDN BHD (Registration No. 198001011565
          (65351-M)). Licensee of Tasty® The [Tasty Logo] and “[Slogan Phrase]”
          are trademarks of Tasty® Corporation and its affiliates.
        </p>
      </div>
    </>
  );
}

export default Footer;
