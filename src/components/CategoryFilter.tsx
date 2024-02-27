'use client';

import { iconObj } from '@/lib/icon';
import { useCategoryStore } from '@/lib/store';
import React, { FC } from 'react';


type CategoryFilterProps = {
  categories: string[];
};

const CategoryFilter: FC<CategoryFilterProps> = ({ categories }) => {
  const selected = useCategoryStore((state) => state.selected);
  const updateCategory = useCategoryStore((state) => state.updateCategory);


  return (
    <div className='flex w-full gap-5 p-4 mb-2 overflow-auto'>
      {categories.map((category) => (
        <div
          key={category}
          className={`flex gap-1.5 items-center border rounded-lg px-4 py-2 cursor-pointer hover:scale-105 transition shadow-sm  ${
            category === selected && 'bg-slate-100 border-2 border-slate-300'
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
