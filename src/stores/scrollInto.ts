import { defineStore } from "pinia";
import { ref } from "vue";

export const useScrollInto = defineStore('scrollInto', () => {
    const label = ref('');
    function setNewLabel(newLabel: string) {
        label.value = newLabel;
    }

    return { label, setNewLabel };
});