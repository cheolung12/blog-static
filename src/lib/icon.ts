import { IconType } from 'react-icons';
import { FaLaptopCode, FaNodeJs, FaProductHunt, FaReact } from 'react-icons/fa';
import { ImBooks } from "react-icons/im";
import { SiJavascript, SiThealgorithms, SiTypescript, SiYarn } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { TfiPencilAlt } from 'react-icons/tfi';

type IconObj = {
  [key: string]: [IconType, string];
};

export const iconObj: IconObj = {
  // 일반 게시물 아이콘
  All: [FaLaptopCode, ''],
  JavaScript: [SiJavascript, '#EFD81D'],
  TypeScript: [SiTypescript, '#0179CB'],
  React: [FaReact, '#60DBFB'],
  NextJS: [TbBrandNextjs, '#000'],
  NodeJS: [FaNodeJs, '#80BD00'],
  Library: [SiYarn, '#2F2A69'],
  회고: [TfiPencilAlt, ''],

  // 알고리즘 아이콘
  Algorithm: [SiThealgorithms, 'd84d69'],
  Baekjoon: [ImBooks, '#2a82da'],
  Programmers: [FaProductHunt, '#1D2A3C'],
};
