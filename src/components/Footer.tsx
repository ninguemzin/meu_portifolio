import GithubIcon from "../assets/github.svg";
import LinkedinIcon from "../assets/linkedin.svg";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-12">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <p className="font-semibold">Emerson.dev</p>
          <span className="text-sm text-gray-500">• Front-end Developer</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/ninguemzin"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <img src={GithubIcon} alt="GitHub" className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/emersonalm/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <img src={LinkedinIcon} alt="LinkedIn" className="w-5 h-5" />
          </a>
        </div>

        <div className="flex items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Emerson Marques
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-sm text-blue-600 hover:underline"
          >
            Voltar ao topo
          </button>
        </div>
      </div>
    </footer>
  );
}
