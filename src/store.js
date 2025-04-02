import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            isLoading: false,            
            isSearchActive: false,
            search: "",
            products: [],   
            filteredProducts: []         
        }        
    }
});

export default store;