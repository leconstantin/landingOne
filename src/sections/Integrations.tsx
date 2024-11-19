import { FaFigma } from "react-icons/fa";
import { RiNotionLine } from "react-icons/ri";
import { FaSlack } from "react-icons/fa";
import { FaTrello } from "react-icons/fa6";
import { FiFramer } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import Tag from "@/components/Tag";
import IntegrationColumns from "@/components/IntegrationColumns";
const integrations = [
  {
    name: "Figma",
    icon: <FaFigma className="size-24" />,
    description:
      "A collaborative design and prototyping tool for teams to create and share designs in real-time.",
  },
  {
    name: "Notion",
    icon: <RiNotionLine className="size-24" />,
    description:
      "An all-in-one workspace for note-taking, project management, and team collaboration.",
  },
  {
    name: "Slack",
    icon: <FaSlack className="size-24" />,
    description:
      "A messaging platform designed for workplace communication and team collaboration.",
  },
  {
    name: "Relume",
    icon: <FaTrello className="size-24" />,
    description:
      "A library of Webflow components to speed up web development and design processes.",
  },
  {
    name: "Framer",
    icon: <FiFramer className="size-24" />,
    description:
      "A design and prototyping tool for creating interactive and high-fidelity prototypes.",
  },
  {
    name: "Github",
    icon: <FaGithub className="size-24" />,
    description:
      "A platform for version control and collaboration, enabling developers to manage code repositories.",
  },
];
export type IntegrationType = typeof integrations;
export default function Integration() {
  return (
    <section className="py-24 px-4">
      <div className="container">
        <div className="grid lg:grid-cols-2 items-center gap-16">
          <div>
            <Tag>Integrations</Tag>
            <h2 className="text-6xl font-medium mt-6">
              Palys well with <span className="text-lime-400">others</span>
            </h2>
            <p className="text-white/50 mt-4 text-lg">
              Layers seamlessly connects with your favorite tools it is easy to
              plug into any workflow and collaborate on different platforms
            </p>
          </div>

          <div className="h-[400px] lg:h-[800px] mt-8 lg:mt-0 overflow-hidden grid md:grid-cols-2 gap-4 [mask-image:linear-gradient(to_bottom,transparent,black,black_10%,black_90%,transparent)]">
            <IntegrationColumns integrations={integrations} />
            <IntegrationColumns
              integrations={integrations.slice().reverse()}
              className="hidden md:flex"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
