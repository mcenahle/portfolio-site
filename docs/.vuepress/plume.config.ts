/**
 * 查看以下文档了解主题配置
 * - @see https://theme-plume.vuejs.press/config/intro/ 配置说明
 * - @see https://theme-plume.vuejs.press/config/theme/ 主题配置项
 *
 * 请注意，对此文件的修改不会重启 vuepress 服务，而是通过热更新的方式生效
 * 但同时部分配置项不支持热更新，请查看文档说明
 * 对于不支持热更新的配置项，请在 `.vuepress/config.ts` 文件中配置
 *
 * 特别的，请不要在两个配置文件中重复配置相同的项，当前文件的配置项会覆盖 `.vuepress/config.ts` 文件中的配置
 */

import {defineThemeConfig} from 'vuepress-theme-plume'
import navbar from './navbar'
import collections from './collections'

/**
 * @see https://theme-plume.vuejs.press/config/theme/
 */
export default defineThemeConfig({
    logo: 'icon.png',

    editLinkText: "在 GitHub 上编辑此页",
    appearanceText: "浅色/深色切换",
    sidebarMenuLabel: "菜单",

    appearance: true,  // 配置 深色模式

    social: [
        {icon: 'github', link: 'https://github.com/mcenahle/portfolio-site'},
    ],
    navbarSocialInclude: ['github'], // 允许显示在导航栏的 social 社交链接
    aside: true, // 页内侧边栏， 默认显示在右侧
    outline: [2, 3], // 页内大纲， 默认显示 h2, h3

    /**
     * 文章版权信息
     * @see https://theme-plume.vuejs.press/guide/features/copyright/
     */
    copyright: 'CC-BY-NC-SA-4.0',

    // prevPage: true,   // 是否启用上一页链接
    // nextPage: true,   // 是否启用下一页链接
    // createTime: true, // 是否显示文章创建时间

    /* 站点页脚 */
    footer: {
        message: '备案信息：<a target="_blank" href="https://beian.miit.gov.cn/">沪ICP备2025116360号-2</a> | <a target="_blank" href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31015102000201">沪公网安备31015102000201号</a>',
        copyright: '© 2025-2026 portfolio.mcenahle.cn。网站采用 CC-BY-NC-SA-4.0 知识共享协议。',
    },

    /**
     * @see https://theme-plume.vuejs.press/config/theme/#profile
     */
    profile: {
        avatar: '/icon.png',
        name: 'portfolio.mcenahle.cn',
        description: '',
        circle: true,
        location: '上海市崇明区',
        // organization: '',
    },

    navbar: [
        {text: '首页', link: '/'},
        {
            text: '项目展示',
            items: [
                {text: '视频制作', link: '/motion/'},
            ]
        },
        {text: '博客', link: '/blog/'},
        {text: '标签', link: '/blog/tags/'},
        {text: '归档', link: '/blog/archives/'},
    ],

    sidebar: {
        '/motion/': [
            {
                text: '视频制作',
                items: [
                    {text: '视频制作 - 首页', link: '/motion/'},
                ]
            },
            /* {
                text: '正在计划的视频',
                collapsed: false,
                items: [
                    { text: '猫 meme', link: '/motion/cat-meme' },
                ]
            }, */
            {
                text: '视频展示（制作软件：AE）',
                // collapsed: false,
                items: [
                    { text: '城南花已开 - 音频波形动画', link: '/motion/chengnanhuayikai/' }
                ]
            },
            {
                text: '视频展示（剪辑软件：达芬奇）',
                // collapsed: false,
                items: [
                    { text: '初夏的记忆与天堂', link: '/motion/earlysummer-paradise/' }
                ]
            },
            {
                text: '视频展示（剪辑软件：PR）',
                // collapsed: false,
                items: [
                    { text: '猫 meme', link: '/motion/cat-meme/' },
                    { text: '2025.11.18 豫园 Vlog', link: '/motion/2025.11.18-yuyuan-garden-vlog/' },
                    { text: '去月球三部曲 - 完结', link: '/motion/end-to-the-moon-series/' },
                    { text: '2025.6.23 上海游记视频', link: '/motion/2025.6.23-movie/' },
                    { text: '杨逸 - 鹳羽', link: '/motion/guanyu-yangyi/' },
                    { text: '挑战通过科目一', link: '/motion/pass-the-subject-1/' },
                    { text: '2024年终视频', link: '/motion/2024-end-movie/' }
                ]
            }
        ],
        '/ae/': [
            {
                text: 'After Effects 相关',
                items: [
                    {text: 'After Effects 文档', link: '/ae/'},
                    {text: 'AE 属性快捷键', link: '/ae/properties-shoutcut-key/'},
                ]
            }
        ],
        '/system/': [
            {
                text: '电脑系统相关',
                items: [
                    {text: '电脑系统相关文档', link: '/system/'},
                    {text: 'Windows 路径', link: '/system/windows-path/'},
                    {text: '停止 Windows 更新', link: '/system/stop-windows-update/'},
                ]
            }
        ],
    },

    collections,

    /**
     * 公告板
     * @see https://theme-plume.vuejs.press/guide/features/bulletin/
     */
    // bulletin: {
    //   layout: 'top-right',
    //   contentType: 'markdown',
    //   title: '公告板标题',
    //   content: '公告板内容',
    // },

    /* 过渡动画 @see https://theme-plume.vuejs.press/config/theme/#transition */
    transition: {
        page: true,        // 启用 页面间跳转过渡动画
        postList: true,    // 启用 博客文章列表过渡动画
        appearance: 'fade',  // 启用 深色模式切换过渡动画, 或配置过渡动画类型
    },

})
