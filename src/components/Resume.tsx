import { resumeData, TitleType, SkillType, ExperienceType, SkillKey, ExperienceKey } from "./data/resumedata";
import { SkillContainer } from "./styling";
import React, { useState } from 'react';
const Resume = () => {
  const [title, setTitle] = useState<TitleType>('default');

  const titleChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTitle(event.target.value as TitleType);
  };

  const filterData = (datas: Array<SkillType> | Array<ExperienceType>) => {
    return datas.filter(data => data.tags.includes(title));
  };

  const filteredLanguages = filterData(resumeData.languages) as SkillType[];
  const filteredFrameworks = filterData(resumeData.frameworks) as SkillType[];
  const filteredSoftwares = filterData(resumeData.softwares) as SkillType[];
  const filteredExperiences = filterData(resumeData.experiences) as ExperienceType[];
  const filteredProjects = filterData(resumeData.projects) as ExperienceType[];

  return (
    <>
      <div className="resume-container">
        <h1>Shaurya Kumar</h1>
        <h2>{resumeData.titles[title]}</h2>
        <h3>Skills</h3>
        <SkillContainer>
          <ul>Languages
            {filteredLanguages.map(language => (
              <li>{language.name}</li>
            ))}
          </ul>
          <ul>Frameworks
            {filteredFrameworks.map(framework => (
              <li>{framework.name}</li>
            ))}
          </ul>
          <ul>Softwares
            {filteredSoftwares.map(software => (
              <li>{software.name}</li>
            ))}
          </ul>
        </SkillContainer>
        <div className="experience-container">
          <ul>Experience
            {filteredExperiences.map(experience => (
              <li>{experience.title}</li>
            ))}
          </ul>
          <ul>Projects
            {filteredProjects.map(project => (
              <li>{project.title}</li>
            ))}
          </ul>
        </div>
      </div>
      <select onChange={titleChangeHandler} defaultValue={title}>
        {Object.keys(resumeData.titles).map((key) => (
          <option key={key} value={key}>
            {resumeData.titles[key as keyof typeof resumeData.titles]}
          </option>
        ))}
      </select>
    </>
  )
}

export default Resume;
