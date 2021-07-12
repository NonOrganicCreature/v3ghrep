<template>
    <div class="search">
        <div class="search__input input_base">
            <input @input="onInputSearch($event.target.value)" />
        </div>
    </div>
</template>
<script>
import { mapActions } from "vuex";
import useDebounceMethod from "@/composables/mixin";
export default {
    name: "Search",
    components: {},
    setup() {
        // only instead of mixins,
        // cause i don't know how to pass vuex mapped methods to composable,
        // only with dispatch and string params, but i don't think that is good idea
        const { debounce } = useDebounceMethod();
        return {
            debounce,
        };
    },
    data() {
        const dsFunction = this.debounce(function () {
            this.setRepositories();
        }.bind(this), 1000);

        return {
            debouncedSearch: dsFunction,
        };
    },
    methods: {
        ...mapActions({
            setSearchValue: "search/setSearchValue",
            setRepositories: "repositories/setRepositories",
        }),
        onInputSearch(inputValue) {
            this.setSearchValue(inputValue);
            this.debouncedSearch();
        },
    },
};
</script>
<style lang="scss">
.search {
    &__input {
    }
}
</style>