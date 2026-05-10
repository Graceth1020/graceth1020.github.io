# graceth1020.github.io

个人作品集网站，基于 React + Vite + Tailwind CSS 构建。  
欢迎直接 Fork 此仓库作为模板搭建你自己的网站！  

🔗 **在线预览：** [graceth1020.github.io](https://graceth1020.github.io/)  
📖 [English README](README.md)

---



## 技术栈

- **框架：** React 18 + TypeScript
- **构建工具：** Vite 5 + SWC
- **样式：** Tailwind CSS 3 + shadcn/ui
- **路由：** React Router v6
- **状态管理：** TanStack React Query
- **黑暗模式：** next-themes
- **国际化：** 轻量级 Context 方案（中/英）
- **包管理器：** Bun / npm

## 特性

- 简洁编辑风格设计，响应式布局
- 黑暗/明亮模式切换（默认跟随系统偏好）
- 双语支持——中文和英文（自动检测浏览器语言）
- 项目数据配置化，动态渲染
- GitHub 集成，附带源码链接
- 通过 GitHub Actions 自动部署到 GitHub Pages

## 自定义配置

按以下顺序修改文件即可将网站改为你自己的：

### 1. 个人信息 — `src/config/site.ts`

```ts
export const site = {
  name: "你的名字",          // 显示在问候语、版权、SEO 中
  handle: "yourhandle",       // 左上角导航品牌名
  url: "https://example.com",
  description: "你的 SEO 描述...",
  social: { github: "https://github.com/yourhandle" },
  year: "2025",
  builtWith: "你的框架",      // "Built with 你的框架"
};
```

### 2. 项目 — `src/config/projects.ts`

替换示例项目为你自己的作品。每个项目的 `description` 包含 `en` 和 `zh` 两个语言版本。

### 3. UI 文本与翻译 — `src/config/translations.ts`

修改问候语、个人简介、区块标签等中英文 UI 文本。

### 4. 搜索引擎标签 — `index.html`

修改 `<title>` 和 `<meta>` 标签作为静态回退（运行时会从 `site.ts` 自动同步）。

### 5. 配色 — `src/index.css`

调整 `:root`（亮色）和 `.dark`（暗色）中的 HSL 设计令牌以匹配你的品牌色。

### 6. 图标 / Favicon — `public/`

替换 `favicon.ico` 并添加你自己的资源文件。

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

访问 `http://localhost:8080`。

## 构建

```bash
npm run build    # 生产构建 → dist/
npm run preview  # 本地预览生产构建
```

## 项目结构

```
src/
├── components/        # 可复用 UI 组件
│   ├── ui/            # shadcn/ui 组件
│   ├── ThemeToggle.tsx
│   └── LanguageSwitcher.tsx
├── config/            # 集中配置
│   ├── site.ts        # 个人信息（名称、链接等）
│   ├── projects.ts    # 项目列表（多语言描述）
│   └── translations.ts
├── contexts/
│   └── LanguageContext.tsx  # i18n 提供者和 hook
├── pages/
│   ├── Index.tsx      # 主页
│   └── NotFound.tsx   # 404 页面
├── lib/utils.ts       # cn() 工具函数
├── App.tsx
├── index.css          # 设计令牌（亮色 + 暗色模式）
└── main.tsx           # 入口
```

## 许可

MIT
