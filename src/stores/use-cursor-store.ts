import { create } from 'zustand';

export type CursorType = 'default' | 'hover' | 'click' | 'text' | 'hidden';

interface CursorState {
  type: CursorType;
  isVisible: boolean;
  setType: (type: CursorType) => void;
  setVisible: (visible: boolean) => void;
}

export const useCursorStore = create<CursorState>((set) => ({
  type: 'default',
  isVisible: true,
  setType: (type) => set({ type }),
  setVisible: (isVisible) => set({ isVisible }),
}));
