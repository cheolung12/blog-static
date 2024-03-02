'use client';

import { iconObj } from '@/lib/icon';
import { useCategoryStore } from '@/lib/store';
import React, { FC } from 'react';

type CategoryFilterProps = {
  type: 'General' | 'Algorithm';
  categories: string[];
};

const CategoryFilter: FC<CategoryFilterProps> = ({ type, categories }) => {
  const selected = useCategoryStore((state) =>
    type === 'General' ? state.category : state.algoCategory
  );
  const updateCategory = useCategoryStore((state) =>
    type === 'General' ? state.updateCategory : state.updateAlgoCategory
  );

  return (
    <div className='flex justify-center w-full gap-3 sm:gap-5 p-4 mb-2 overflow-auto'>
      {categories.map((category) => (
        <div
          key={category}
          className={`flex gap-1.5 items-center border rounded-lg px-4 py-2 cursor-pointer hover:scale-105 transition shadow-sm text-sm sm:text-base  ${
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
