import {defineConfig} from "vitepress";

export default defineConfig({
    title: "Star导航",
    lang: "zh-CN",
    description: "软件开发导航",
    lastUpdated: true,
    cleanUrls: true,
    /* markdown 配置 */
    markdown: {
        lineNumbers: true,
    },
    head: [
        ['link', {rel: 'icon', href: 'https://blog.ahuaaa.cn/img/favicon.ico'}]
    ],
    themeConfig: {
        logo: "/logo.png",
        siteTitle: "Star导航",
        /* 右侧大纲配置 */
        outline: {
            level: "deep",
            label: "本页目录",
        },
        socialLinks: [{icon: "github", link: "https://github.com/ahua666/StarNavigation"}],
        footer: {
            message: 'Github开源项目',
            copyright: 'Copyright © 2023 Star'
        },
        darkModeSwitchLabel: '外观',
        returnToTopLabel: '返回顶部',
        lastUpdatedText: '上次更新',
        docFooter: {
            prev: '上一篇',
            next: '下一篇'
        }
    },

});
