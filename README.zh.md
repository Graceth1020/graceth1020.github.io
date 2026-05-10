# graceth1020.github.io

个人作品集网站，基于 React + Vite + Tailwind CSS 构建。  
欢迎直接 Fork 此仓库作为模板搭建你自己的网站！  
[English README](README.md)

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
├── config/            # 项目数据和翻译
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
