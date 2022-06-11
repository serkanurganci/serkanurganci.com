import SkillItem from "../components/SkillItem";
import skills from "../utils/skills";

function Skills() {
  const skillsList = skills.map((skill, index) => {
    return (
      <SkillItem
        key={index}
        title={skill.title}
        icon={skill.icon}
        link={skill.href}
      />
    );
  });
  return (
    <div className="container-small">
      <div className="space-y-6">
        <div className="flex justify-center items-center gap-5 flex-wrap">
          {skillsList}
        </div>
      </div>
    </div>
  );
}

export default Skills;
