import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(
  defineConfig({
    title: 'QVision',
    description: 'QVision Documentation',
    head: [
      ['script', { src: 'https://code.iconify.design/iconify-icon/1.0.8/iconify-icon.min.js', defer: '' }]
    ],
    base: '/', // 使用自定义域名时，base 应该设置为 '/'

    // 忽略死链检查
    ignoreDeadLinks: [
      // 忽略所有 localhost 链接
      /^https?:\/\/localhost/,
      // 忽略演示环境链接
      /^http:\/\/lm\.cedar-v\.com/
    ],

    locales: {
      root: {
        label: '中文',
        lang: 'zh-CN',
        themeConfig: {
          nav: [
            { text: '首页', link: '/' },
            { text: '指南', link: '/guide/' }
          ],
          sidebar: {
            '/guide/': [
              {
                text: '指南',
                items: [
                  { text: '介绍', link: '/guide/' },
                  { text: '快速开始', link: '/guide/getting-started' }
                ]
              }
            ]
          }
        }
      },
      en: {
        label: 'English',
        lang: 'en-US',
        themeConfig: {
          nav: [
            { text: 'Home', link: '/en/' },
            { text: 'Guide', link: '/en/guide/' }
          ],
          sidebar: {
            '/en/guide/': [
              {
                text: 'Guide',
                items: [
                  { text: 'Introduction', link: '/en/guide/' },
                  { text: 'Getting Started', link: '/en/guide/getting-started' }
                ]
              }
            ]
          }
        }
      }
    },

    themeConfig: {
      // 网站Logo
      logo: '/images/logo.png',

      // 导航栏
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/guide/' }
      ],

      // 侧边栏
      sidebar: {
        '/guide/': [
          {
            text: 'Guide',
            items: [
              { text: 'Introduction', link: '/guide/' },
              { text: 'Getting Started', link: '/guide/getting-started' }
            ]
          }
        ]
      },

      // 社交链接
      socialLinks: [
        { icon: 'github', link: 'https://github.com/your-repo' }
      ],

      // 页脚
      footer: {
        message: 'Released under the MIT License.',
        copyright: 'Copyright © 2024-present QVision'
      },

      // 搜索功能
      search: {
        provider: 'local'
      },

      // 编辑链接
      editLink: {
        pattern: 'https://github.com/your-repo/edit/main/docs/:path',
        text: 'Edit this page on GitHub'
      },

      // 最后更新时间
      lastUpdated: {
        text: 'Updated at',
        formatOptions: {
          dateStyle: 'full',
          timeStyle: 'medium'
        }
      },

      // 返回顶部
      returnToTopLabel: '回到顶部',
      sidebarMenuLabel: '菜单',
      darkModeSwitchLabel: '主题',
      lightModeSwitchLabel: '浅色'
    },

    markdown: {
      mermaid: true
    }
  })
)
