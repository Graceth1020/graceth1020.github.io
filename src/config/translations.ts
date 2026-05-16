export type Locale = 'en' | 'zh';

export const locales: Locale[] = ['en', 'zh'];

export const localeNames: Record<Locale, string> = {
  en: 'EN',
  zh: '中',
};

type TranslationTree = {
  nav: { github: string; mustSeeDaily: string };
  hero: { label: string; greeting: string; description: string };
  work: { title: string; label: string };
  writing: { title: string; label: string; blogLabel: string };
  project: { viewSource: string };
  footer: { built: string };
};

export const translations: Record<Locale, TranslationTree> = {
  en: {
    nav: { github: 'GitHub', mustSeeDaily: 'Daily' },
    hero: {
      label: '— Personal Site',
      greeting: "Hi, I'm Grace.",
      description:
        'I build small, thoughtful things on the web and write about what I learn along the way. This is a quiet corner for my projects, notes, and ongoing experiments.',
    },
    work: { title: 'Selected Work', label: '01 / Work' },
    writing: { title: 'Writing', label: '02 / Notes', blogLabel: 'Blog' },
    project: { viewSource: 'View source' },
    footer: { built: 'Built with' },
  },
  zh: {
    nav: { github: 'GitHub', mustSeeDaily: '每日必看' },
    hero: {
      label: '— 个人主页',
      greeting: '你好，我是 Grace。',
      description:
        '我在网络上构建小巧而用心的作品，并记录沿途所学。这里是存放我的项目、笔记和持续探索的一隅静地。',
    },
    work: { title: '精选作品', label: '01 / 作品' },
    writing: { title: '写作', label: '02 / 笔记', blogLabel: '博客' },
    project: { viewSource: '查看源码' },
    footer: { built: '基于' },
  },
};
