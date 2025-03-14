import { create } from 'zustand';
import { getallEvents } from '../services/api';

const useEventStore = create(
    (set) => ({
    events: [],
    fetchEvents: async () => {
        try{
            const response = await getallEvents();
            set({events: response.data });
        }
        catch(error){
            set({error:error});
        }
    },
    addEvent: (event) => set((state) => 
        ({ 
            events: [...state.events, event] }
        )),
    removeEvent: (event) => set((state) => 
        ({ 
            events: state.events.filter((e) => e !== event) }
        )),
    updateEvent: (updatedEvent) => set((state) => 
        ({
         events: state.events.map((event) =>
             event.id === updatedEvent.id ? updatedEvent : event
         )}
        )),
    

})
);


export default useEventStore;







    // resetEvents: () => set({ events: [] }),
    //}));