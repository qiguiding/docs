// .vuepress/config.js
module.exports = {
    themeConfig: {
        logo: '/assets/img/hero.png',
        nav: [
            { text: '首页', link: '/' },
            { text: '关于我', link: '/about/' },
            {
                text: '语言',
                items: [
                    {
                        text: '汉语',
                        items: [
                            { text: 'Home', link: '/' },]
                    },
                    {
                        text: '外语',
                        items: [
                            { text: 'Home', link: '/' },]
                    }
                ]
            }
        ],
        sidebar: [
            '/',
            'note',
          ]
    }
}