import SocialButton from "./SocialButton";
import { BsTwitter, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";

function Social() {
  return (
    <div className="p-2 flex justify-center sm:justify-start items-center gap-x-2 rounded-full">
      <SocialButton href="https://twitter.com/serkanurgancii">
        <BsTwitter size={22} />
      </SocialButton>
      <SocialButton href="https://www.instagram.com/serkanurganci">
        <BsInstagram size={22} />
      </SocialButton>
      <SocialButton href="https://www.linkedin.com/in/serkan-urganc%C4%B1-271285200">
        <BsLinkedin size={22} />
      </SocialButton>
      <SocialButton href="https://github.com/serkanurganci">
        <BsGithub size={22} />
      </SocialButton>
      <SocialButton href={"mailto:serkan.urganci10@gmail.com"}>
        <span className="font-semibold">Email</span>
      </SocialButton>
    </div>
  );
}

export default Social;
