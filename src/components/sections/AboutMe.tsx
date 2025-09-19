import "./profile.css";
import GithubIcon from "../../assets/github.svg";
import LinkedinIcon from "../../assets/linkedin.svg";
import Typescripticon from "../../assets/typescript.svg";
import Javascripticon from "../../assets/javascript.svg";
import JavaIcon from "../../assets/java.svg";
import HtmlIcon from "../../assets/html5.svg";
import CssIcon from "../../assets/css.svg";
import ReactIcon from "../../assets/react.svg";
import MySqlIcon from "../../assets/mysql.svg";

export default function AboutMe() {
  return (
    <section id="about" className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-12">
          <div className="flex-shrink-0 w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60">
            <img
              src="https://i.imgur.com/GEw9mTN.jpeg"
              alt="profile"
              className="w-full h-full object-cover rounded-full animated-border"
            />
          </div>

          <div className="text-center md:text-left max-w-xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
              Front-End React Developer 👋
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-4">
              Olá, sou o Emerson 👨‍💻. Apaixonado por desenvolvimento Front-end
              com React e construção de interfaces modernas.
            </p>

            <div className="flex items-center justify-center md:justify-start gap-4">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/ninguemzin"
                className="text-gray-800 hover:text-black"
                aria-label="GitHub"
              >
                <img src={GithubIcon} alt="GitHub" className="w-6 h-6" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/emersonalm/"
                className="text-gray-800 hover:text-blue-600"
                aria-label="LinkedIn"
              >
                <img src={LinkedinIcon} alt="LinkedIn" className="w-6 h-6" />
              </a>
            </div>
            <div className="mt-14 flex items-center justify-center md:justify-start gap-4">
              <p className="font-bold">Tech Stack |</p>
              <img src={Typescripticon} alt="TypeScript" className="w-6 h-6" />
              <img src={JavaIcon} alt="Java" className="w-6 h-6" />
              <img src={HtmlIcon} alt="HTML5" className="w-6 h-6" />
              <img src={CssIcon} alt="CSS3" className="w-6 h-6" />
              <img src={Javascripticon} alt="JavaScript" className="w-6 h-6" />
              <img src={ReactIcon} alt="React" className="w-6 h-6" />
              <img src={MySqlIcon} alt="MySQL" className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
