<template>
    <div class="list">
        <div class="list-inner">
            <card
                v-for="repository in cardsByType"
                :key="repository.id"
                :cardInfo="repository"
                :cardType="cardsType"
            />
        </div>
        <pagination v-show="cardsByType.length > 0" class="pagination-outer" />
    </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import Card from "@/components/repositories/Card";
import Pagination from "@/components/Pagination";
export default {
    name: "RepositoresList",
    components: { Card, Pagination },
    props: {
        cardsType: {
            type: String,
            default: 'repository'
        }
    },
    computed: {
        ...mapGetters({
            repositories: "repositories/getRepositories",
            forks: "repositories/getForks",
            selectedPage: 'pagination/getSelectedPage'
        }),
        cardsByType() {
            console.log(this.cardsType)
            return this.cardsType === 'repository' ? this.repositories : this.forks
        }
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