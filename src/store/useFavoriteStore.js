import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useFavoriteStore = create(
    persist(
        (set) => ({
            favorites: [],

            addFavorite: (event) => set((state) => ({
                favorites: [...state.favorites, event],
            })),

            removeFavorite: (id) => set((state) => ({
                favorites: state.favorites.filter((e) => e.id !== id),
            })),

            clearFavorites: () => set({ favorites: [] }),
        }),
        {
            name: 'favorite-storage',
            getStorage: () => localStorage,
        }
    )
);

export default useFavoriteStore;