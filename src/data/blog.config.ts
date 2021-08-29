import { IConfig } from '@/types';
import Package from '../../package.json';

const config: IConfig = {
  title: '니힐 홈페이지',
  description: '웹 개발자를 지향하는 초보 프로그래머 니힐을 설명하는 웹 사이트.',
  keywords: '프로그래밍, 코딩, 웹 프로그래밍, 웹 코딩, 웹 개발',
  URL: process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://nihilncunia.github.io',
  image: '/images/site-image.png',
  author: Package.author,
  version: Package.version,
};

export default config;
