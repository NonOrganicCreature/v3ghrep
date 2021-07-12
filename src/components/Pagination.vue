<template>
    <div class="pagination">
        <div class="pagination-inner">
            <div
                class="pagination__arrow-left"
                @click.stop="setSelectedPage(selectedPage - 1)"
            >
                &larr;
            </div>
            <div class="pagination-items">
                <div
                    v-for="page in pagesToShow"
                    :key="page"
                    class="pagination__item"
                    @click.stop="setSelectedPage(page)"
                    :class="{
                        selected: page === selectedPage,
                    }"
                >
                    {{ page }}
                </div>
            </div>
            <div
                class="pagination__arrow-right"
                @click.stop="setSelectedPage(selectedPage + 1)"
            >
                &rarr;
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
    name: "Pagination",
    components: {},
    methods: {
        ...mapActions({
            setSelectedPage: "pagination/setSelectedPage",
            setTotalPage: "pagination/setTotalPage",
            setRepositories: "repositories/setRepositories",
        }),
    },
    computed: {
        ...mapGetters({
            selectedPage: "pagination/getSelectedPage",
            pagesToShow: "pagination/getPagesToShow",
            searchValue: "search/getSearchValue",
        }),
    }
};
</script>
<style lang="scss">
.pagination {
    &-inner {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        position: relative;
    }
    &-items {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        color: #fff;
    }
    &__item {
        padding: 10px;
        font-size: 20px;
        &.selected {
            font-size: 25px;
            font-weight: 700;
        }
        &:hover {
            font-weight: 700;
            cursor: pointer;
        }
    }
    &__arrow-left,
    &__arrow-right {
        padding: 5px;
        font-size: 20px;
        color: #fff;
        font-weight: 700;
        position: absolute;
        &:hover {
            font-size: 22px;
            cursor: pointer;
        }
    }
    &__arrow-left {
        left: -30px;
    }
    &__arrow-right {
        right: -30px;
    }
}
</style>