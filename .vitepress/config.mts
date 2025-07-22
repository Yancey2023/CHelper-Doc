import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CHelper文档",
  description:
    "CHelper是一个我的世界基岩版的命令助手，致力于为我的世界指令玩家提供帮助。",
  head: [["link", { rel: "icon", href: "logo.webp" }]],
  lang: "zh-CN",
  cleanUrls: true,
  srcDir: "./src",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.webp",

    nav: [
      { text: "首页", link: "/" },
      { text: "文档", link: "/chelper" },
    ],

    sidebar: [
      {
        text: "简介",
        items: [
          { text: "什么是CHelper", link: "/chelper" },
          { text: "CHelper 更新日志", link: "/chelper-release-notes" },
        ],
      },
      {
        text: "资源包",
        items: [
          { text: "什么是CPack", link: "/cpack/cpack" },
          { text: "manifest.json", link: "/cpack/manifest" },
          { text: "命令的注册", link: "/cpack/command" },
          { text: "ID 的注册", link: "/cpack/id" },
          { text: "节点的定义", link: "/cpack/node" },
        ],
      },
      {
        text: "二次开发",
        items: [
          {
            text: "CHelper 安卓接口 / Java 接口文档",
            link: "/development/android",
          },
          { text: "CHelper 内核文档", link: "/development/core" },
          {
            text: "CHelper 网页接口 / JavaScript 接口文档",
            link: "/development/web",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/Yancey2023/CHelper-Core" },
    ],

    footer: {
      copyright: "©2025 By Yancey",
      message:
        '<a href="https://beian.miit.gov.cn/shouye.html">粤ICP备2024307783号</a>',
    },
  },

  lastUpdated: true,
});
