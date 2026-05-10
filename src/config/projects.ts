export type Project = {
  id: string;
  title: string;
  description: { en: string; zh: string };
  url: string;
  repoUrl: string;
  tags: string[];
  year: string;
};

export const projects: Project[] = [
  {
    id: "geo-memories-blog",
    title: "Geo Memories",
    description: {
      en: "An illustrated travel journal mapped across China — vintage film diary aesthetic.",
      zh: "一幅跨越中国的插画旅行日志——复古胶片日记美学。",
    },
    url: "https://graceth1020.github.io/geo-memories-blog/",
    repoUrl: "https://github.com/Graceth1020/geo-memories-blog",
    tags: ["React", "ECharts", "Lovable"],
    year: "2025",
  },
  {
    id: "daily-dish-delight",
    title: "Daily Dish Delight",
    description: {
      en: "A recipe discovery app exploring everyday cooking inspiration.",
      zh: "一款探索日常烹饪灵感的食谱发现应用。",
    },
    url: "https://graceth1020.github.io/daily-dish-delight/#/",
    repoUrl: "https://github.com/Graceth1020/daily-dish-delight",
    tags: ["React", "Lovable"],
    year: "2025",
  },
];

export const writing = {
  title: "Chronicles",
  description: {
    en: "A personal blog of study notes, learning logs, and longer-form writing.",
    zh: "记录学习笔记、学习日志和长文写作的个人博客。",
  },
  url: "https://graceth1020.github.io/Chronicles/",
};
