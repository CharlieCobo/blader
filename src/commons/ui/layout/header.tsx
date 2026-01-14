import { Menu } from 'lucide-react';

export const Header = () => {
  return (
    <header className="h-12 flex justify-between items-center uppercase font-bold px-1.5">
      <button title="Menu Button" className="cursor-pointer">
        <Menu />
      </button>
      Blader App
      <div className="w-6" />
    </header>
  );
};
