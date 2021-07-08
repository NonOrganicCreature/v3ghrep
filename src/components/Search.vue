<template>
    <div class="search">
        <div class="search__input input_base">
            <input @input="onInputSearch($event.target.value)">
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
import useDebounceMethod from '@/composables'
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
            this.debounce((function() {
                this.setSearchValue(inputValue)
                this.setRepositories()
            }).bind(this), 1000)()  
        },
    }
}
</script>
<style lang="scss">
.search {
    &__input {

    }
}
</style>