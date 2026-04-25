export type Project = {
  id: string;
  title: string;
  description: string;
  url: string;
  repoUrl: string;
  tags: string[];
  year: string;
};

export const projects: Project[] = [
   {
    id: "geo-memories-blog",
    title: "Geo Memories",
    description: "An illustrated travel journal mapped across China — vintage film diary aesthetic.",
    url: "https://graceth1020.github.io/geo-memories-blog/",
    repoUrl: "https://github.com/Graceth1020/geo-memories-blog",
    tags: ["React", "ECharts", "Lovable"],
    year: "2025",
  },
  {
    id: "daily-dish-delight",
    title: "Daily Dish Delight",
    description: "A recipe discovery app exploring everyday cooking inspiration.",
    url: "https://graceth1020.github.io/daily-dish-delight/#/",
    repoUrl: "https://github.com/Graceth1020/daily-dish-delight",
    tags: ["React", "Lovable"],
    year: "2025",
  },
];

export const writing = {
  title: "Chronicles",
  description: "A personal blog of study notes, learning logs, and longer-form writing.",
  url: "https://graceth1020.github.io/Chronicles/",
};
