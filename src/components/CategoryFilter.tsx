'use client';

import { useCategoryStore } from '@/lib/store';
import React, { FC } from 'react';
import { IconType } from 'react-icons';
import { FaLaptopCode, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { TfiPencilAlt } from 'react-icons/tfi';

type IconObj = {
  [key: string]: [IconType, string];
};

type CategoryFilterProps = {
  categories: string[];
};

const CategoryFilter: FC<CategoryFilterProps> = ({ categories }) => {
  const selected = useCategoryStore((state) => state.selected);
  const updateCategory = useCategoryStore((state) => state.updateCategory);

  const iconObj: IconObj = {
    All: [FaLaptopCode, ''],
    TypeScript: [SiTypescript, '#0179CB'],
    React: [FaReact, '#60DBFB'],
    NextJs: [TbBrandNextjs, '#000'],
    NodeJs: [FaNodeJs, '#80BD00'],
    회고: [TfiPencilAlt, ''],
  };

  return (
    <div className='flex gap-5 p-4 mb-2 overflow-x-auto'>
      {categories.map((category) => (
        <div
          key={category}
          className={`flex gap-1.5 items-center border rounded-lg px-4 py-2 cursor-pointer hover:scale-105 transition  ${
            category === selected && 'bg-slate-100 border-2 border-slate-700'
          } `}
          onClick={() => updateCategory(category)}
        >
          {category}
          {React.createElement(iconObj[category][0] || 'div', {
            style: { color: iconObj[category][1] },
          })}
        </div>
      ))}
    </div>
  );
};

export default CategoryFilter;
