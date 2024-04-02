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
    <div className={`flex ${type === 'Algorithm' && 'lg:justify-center'} justify-start w-full gap-3 sm:gap-5 p-4 mb-2 overflow-auto px-2 bg-slate-50 rounded-md hide-scrollbar border-x-8 border-x-slate-100`}>
      {categories.map((category) => (
        <div
          key={category}
          className={`flex gap-1.5 items-center border rounded-lg px-4 py-2 cursor-pointer hover:scale-105 transition shadow-md text-sm sm:text-base bg-white  ${
            category === selected && 'border-signature3 border-[2.5px]'
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
