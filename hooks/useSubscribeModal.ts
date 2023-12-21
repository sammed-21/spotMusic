import { create } from 'zustand'

interface SubscribeModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;

}

const useSubscripeModal = create<SubscribeModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose:()=>set({isOpen:false})
}))

export default useSubscripeModal;