<template>
    <div class="search">
        <div class="search__input input_base">
            <input @input="onInputSearch($event.target.value)">
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
import useDebounceMethod from '@/composables/mixin'
export default {
    name: 'Search',
    components: {},
    setup() {
        const { debounce } = useDebounceMethod()
        return {
            debounce
        }
    },
    methods: {
        ...mapActions({
            setSearchValue: 'search/setSearchValue',
            setRepositories: 'repositories/setRepositories'
        }),
        onInputSearch(inputValue) {
            this.setSearchValue(inputValue)
            this.debouncedSearch()
        },
    },
    computed: {
        debouncedSearch() {
            return this.debounce((function() {
                this.setRepositories()
            }), 1000)
        }
    }
}
</script>
<style lang="scss">
.search {
    &__input {

    }
}
</style>