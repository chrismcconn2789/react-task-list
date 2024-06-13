import { GithubFill, Globe, LinkedinBoxFill } from "akar-icons";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="mb-4 flex flex-col gap-4 items-center">
      <div className="flex flex-row gap-4">
        <a href="https://github.com/chrismcconn2789">
          <GithubFill strokeWidth={2} size={24} />
        </a>
        <a href="https://linkedin.com/in/cmcconnell89">
          <LinkedinBoxFill strokeWidth={2} size={24} />
        </a>
        <a href="https://chrismcconnell.dev">
          <Globe strokeWidth={2} size={24} />
        </a>
      </div>
      <div className="font-light text-md">
        <span className="font-thin text-lg">&copy;</span> Chris McConnell {year}
      </div>
    </div>
  );
};

export default Footer;
