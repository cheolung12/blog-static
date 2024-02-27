import { IconType } from 'react-icons';
import { FaLaptopCode, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiJavascript, SiTypescript } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { TfiPencilAlt } from 'react-icons/tfi';

type IconObj = {
  [key: string]: [IconType, string];
};

export const iconObj: IconObj = {
  All: [FaLaptopCode, ''],
  JavaScript: [SiJavascript, '#EFD81D'],
  TypeScript: [SiTypescript, '#0179CB'],
  React: [FaReact, '#60DBFB'],
  NextJS: [TbBrandNextjs, '#000'],
  NodeJS: [FaNodeJs, '#80BD00'],
  회고: [TfiPencilAlt, ''],
};
