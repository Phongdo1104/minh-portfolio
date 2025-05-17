import { defineStore } from "pinia";
import { ref } from "vue";

export const windowSize = defineStore('windowSize', () => {
    const width = ref('');
    const height = ref('');

    function setWidth(newWidth: string) {
        width.value = newWidth;
    }
    function setHeight(newHeight: string) {
        height.value = newHeight;
    }

    return { width, height, setWidth, setHeight };
});