import { groupIconMdPlugin, groupIconVitePlugin } from "vitepress-plugin-group-icons";
import { withMermaid } from "vitepress-plugin-mermaid";

const GITURL = "https://github.com/sugarscat/docs";

// https://vitepress.dev/reference/site-config
export default withMermaid({
  title: "Document",
  description: "Document Center.",

  vite: {
    // Vite 配置选项
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
    plugins: [
      groupIconVitePlugin({
        customIcon: {
          javascript: "vscode-icons:file-type-js",
          markdown: "vscode-icons:file-type-markdown",
          python: "vscode-icons:file-type-python",
          java: "vscode-icons:file-type-java",
          c: "vscode-icons:file-type-c",
          "c++": "vscode-icons:file-type-cpp",
          go: "vscode-icons:file-type-go",
        },
      }),
    ],
    build: {
      chunkSizeWarningLimit: 500,
      rollupOptions: {
        output: {},
      },
    },
  },

  markdown: {
    config: (md) => {
      // use more markdown-it plugins!
      md.use(groupIconMdPlugin);
    },
    math: true,
    image: {
      // 默认禁用；设置为 true 可为所有图片启用懒加载。
      lazyLoading: true,
    },
  },

  // optionally set additional config for plugin itself with MermaidPluginConfig
  mermaidPlugin: {
    class: "mermaid", // set additional css classes for parent container
  },

  lastUpdated: true,
  cleanUrls: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: GITURL }],

    outline: {
      // 右侧导航目录显示层级
      level: "deep",
    },

    editLink: {
      pattern: GITURL + "/edit/main/:path",
    },
  },
});
