<template>
    <div class="list">
        <div class="list-inner">
            <card
                v-for="repository in repositories"
                :key="repository.id"
                :cardInfo="repository"
            />
        </div>
        <pagination v-show="repositories.length > 0" class="pagination-outer" />
    </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import Card from "@/components/repositories/Card";
import Pagination from "@/components/Pagination";
export default {
    name: "RepositoresList",
    components: { Card, Pagination },
    computed: {
        ...mapGetters({
            repositories: "repositories/getRepositories",
            selectedPage: 'pagination/getSelectedPage'
        }),
    },
    methods: {
        ...mapActions({
            setRepositories: 'repositories/setRepositories'
        })
    },
    watch: {
        selectedPage: 'setRepositories'
    }
};
</script>
<style lang="scss">
.list {
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    &-inner {
        display: flex;
        flex-flow: row wrap;
        padding: 30px;
        justify-content: center;
        & > * {
            margin: 15px;
        }
    }
    .pagination-outer {
        align-self: center;
    }
}
</style>