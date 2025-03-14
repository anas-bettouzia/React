import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { getallEvents } from '../services/api';

const useEventStore = create(
    persist(
        (set) => ({
            events: [],
            error: null,

            
            fetchEvents: async () => {
                try {
                    const response = await getallEvents();
                    set({ events: response.data, error: null });
                } catch (error) {
                    set({ error: error.message });
                }
            },

           
            addEvent: (event) => set((state) => ({
                events: [...state.events, event],
            })),

           
            removeEvent: (id) => set((state) => ({
                events: state.events.filter((e) => e.id !== id),
            })),

            
            updateEvent: (updatedEvent) => set((state) => ({
                events: state.events.map((event) =>
                    event.id === updatedEvent.id ? updatedEvent : event
                ),
            })),
        }),
        {
            name: 'event-storage',  
            getStorage: () => localStorage,  
        }
    )
);
export default useEventStore;