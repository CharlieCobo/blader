import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Props {
  username: string;
  image: string | ArrayBuffer | null;
  setUsername: (username: string) => void;
  setImage: (image: string | ArrayBuffer | null) => void;
  getImage: () => HTMLImageElement;
}

const initialState = {
  username: '',
  image: null,
};

export const useUser = create<Props>()(
  persist(
    (set, get) => ({
      ...initialState,
      setUsername: (username: string) => set({ username }),
      setImage: (image: string | ArrayBuffer | null) => set({ image }),
      getImage: () => {
        const img = new Image();
        img.src = get().image as string;
        return img;
      },
    }),
    { name: 'blader-storage' }
  )
);
