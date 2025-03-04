export type TitleType = "gamedev" | "robotics" | "devops" | "default";

export type TitleDictionary = Record<TitleType, string>;

export interface SkillType {
    name: string;
    level: number;
    tags: TitleType[];
};

export interface ExperienceType {
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string[];
    tags: TitleType[];
};

export interface ResumeType {
  name: string;
  titles: TitleDictionary;
  languages: SkillType[];
  frameworks: SkillType[];
  softwares: SkillType[];
  experiences: ExperienceType[];
  projects: ExperienceType[];
};

export const resumeData: ResumeType = {
  name: "Shaurya Kumar",
      titles: {
          gamedev: "Game and Engine Developer",
          robotics: "Robotics Engineer",
          devops: "DevOps and Platform Engineer",
          default: "Software Engineer"
      },
      languages: [
          { name: "Modern C++(17-23)", level: 5, tags: ["robotics", "devops", "gamedev", "default"] },
          { name: "Embedded C", level: 3, tags: ["robotics"] },
          { name: "Python", level: 5, tags:["robotics", "devops", "gamedev", "default"]},
          { name: "C#", level: 3, tags:["devops", "gamedev"] },
          { name: "TypeScript", level: 4, tags:["devops"] },
          { name: "Rust", level: 4, tags:["robotics", "gamedev"] },
      ],
      frameworks: [
          { name: "ROS 2", level: 5, tags: ["robotics"] },
          { name: "Yocto Project", level: 3, tags: ["robotics", "devops"] },
          { name: "GitHub Actions", level: 4, tags: ["devops"] },
          { name: "GitLab CI/CD", level: 4, tags: ["devops"] },
          { name: "Docker", level: 5, tags: ["robotics", "devops", "gamedev", "default"] },
          { name: "ONNX", level: 4, tags: ["robotics", "gamedev"] },
          { name: "React", level: 3, tags: ["gamedev"] },
          { name: "MoveIt", level: 4, tags: ["robotics"] },
          { name: "Ansible", level: 3, tags: ["devops"] },
          { name: "OpenCV", level: 4, tags: ["robotics"] },
          { name: "OpenGL", level: 3, tags: ["gamedev"] },
          { name: "Vulkan", level: 3, tags: ["gamedev"] },
          { name: "Nav2", level: 4, tags: ["robotics"] },
      ],
      softwares: [
          { name: "Unity", level: 4, tags: ["robotics", "gamedev"] },
          { name: "Unreal Engine 5", level: 3, tags: ["gamedev"] },
          { name: "MoveIt Pro", level: 5, tags: ["robotics"] },
          { name: "VSCode", level: 5, tags: ["robotics", "gamedev", "devops", "default"] },
          { name: "Zed", level: 5, tags: ["robotics", "gamedev", "devops", "default"] },
      ],
      experiences: [
        {
          title: "Software Engineer",
          company: "ABC Company",
          location: "San Francisco, CA",
          startDate: "2020-01-01",
          endDate: "2022-12-31",
          description: [
          ],
          tags: ["default"],
        },
      ],
      projects: [
        {
          title: "Project Name",
          company: "ABC Company",
          location: "San Francisco, CA",
          startDate: "2020-01-01",
          endDate: "2022-12-31",
          description: [
          ],
          tags: ["default"],
        },
      ],
  };
