export default function useDebounceMethod() {
    const debounce = function(fn, interval)  {
        let timer;
        return function debounced() {
            clearTimeout(timer);
            let args = arguments;
            let that = this;
            timer = setTimeout(() => {
                fn.apply(that, args);
            }, interval);
        };
    }
    return {
        debounce
    }
}
