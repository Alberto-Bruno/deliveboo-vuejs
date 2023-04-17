import { reactive } from 'vue';

export const store = reactive({

    cartQuantity: JSON.parse(localStorage.getItem("cartDishes")) ? JSON.parse(localStorage.getItem("cartDishes")).length : 0
});