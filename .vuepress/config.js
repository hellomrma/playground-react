const sidebar = require('./sidebar');

module.exports = {
  title: 'playground-react',
  description: 'react 스터디 진행하면서 정리한 내용 입니다.',
  themeConfig: {
    logo: 'https://avatars1.githubusercontent.com/u/18749057?s=460&v=4', // 로고 이미지
    nav: [
      { text: 'Home', link: '/' }
    ],
    sidebar,
  }
}