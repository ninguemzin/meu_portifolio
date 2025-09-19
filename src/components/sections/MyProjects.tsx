import DevLivery from "../../assets/devlivery.png";
import DevFit from "../../assets/devfit.png";

type Project = {
  title: string;
  description: string;
  image?: string;
  demoUrl?: string;
  repoUrl?: string;
};

const projects: Project[] = [
  {
    title: "Projeto Full-stack DevFit",
    description:
      "DevFit é um sistema de gerenciamento de atividades fitness focado em fornecer uma solução eficiente e organizada para facilitar e otimizar as operações administrativas e operacionais.",
    image: DevFit,
    demoUrl: "#",
    repoUrl:
      "https://github.com/Projeto-Integrador-Grupo-05/projeto-integrador-devfit-front",
  },
  {
    title: "Projeto Full-stack DevLivery",
    description:
      "O DevLivery é uma plataforma de compras online rápida e segura, com uma interface intuitiva que conecta você a uma variedade de produtos e serviços. A plataforma se destaca por sua seção de produtos saudáveis, facilitando o acesso a uma alimentação equilibrada.",
    image: DevLivery,
    demoUrl: "#",
    repoUrl:
      "https://github.com/Projeto-Integrador-Grupo-05/projeto-integrador-devlivery-front",
  },
];

export default function MyProjects() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold mb-6 text-center">Meus Projetos</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              {p.image && (
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h4 className="text-lg font-semibold mb-2">{p.title}</h4>
                <p className="text-sm text-gray-600 mb-4">{p.description}</p>

                <div className="flex items-center gap-3">
                  <a
                    href={p.demoUrl}
                    className="inline-block px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ver Projeto
                  </a>
                  <a
                    href={p.repoUrl}
                    className="inline-block px-3 py-2 border rounded text-gray-700 hover:bg-gray-100"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Repositório
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
