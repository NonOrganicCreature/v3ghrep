import { onUnmounted, ref } from 'vue'
export default function useDebounceMethod() {
    const timerRef = ref(0)
    const debounce = function (fn, interval) {
        return function debounced() {
            clearTimeout(timerRef.value);
            let args = arguments;
            let that = this;
            timerRef.value = setTimeout(() => {
                fn.apply(that, args);
            }, interval);
        };
    }
    const clearAfterUnmounted = () => { clearTimeout(timerRef.value) }
    onUnmounted(clearAfterUnmounted)

    return {
        debounce,
        clearAfterUnmounted
    }
}
