import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="flex justify-center border-t p-4 font-medium">
      <div className="flex items-center gap-2 lg:gap-3">
        <div className="text-xs text-gray-500 lg:text-sm">
        © 2024 cheolung.dev blog Powered by Next.js
        </div>
      </div>
    </footer>
  )
}

export default Footer