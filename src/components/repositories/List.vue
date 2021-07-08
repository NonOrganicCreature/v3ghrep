<template>
    <div class="list">
        <div class="list-inner">
            <card
                v-for="repository in repositories"
                :key="repository.id"
                :cardInfo="repository"
            />
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
import Card from "@/components/repositories/Card";
export default {
    name: "RepositoresList",
    components: { Card },
    computed: {
        ...mapGetters({
            repositories: "repositories/getRepositories",
        }),
    },
};
</script>
<style lang="scss">
.list {
    width: 100%;
    &-inner {
        display: flex;
        flex-flow: row wrap;
        padding: 30px;
        justify-content: center;
        & > *:not(:first-child) {
            margin-left: 30px;
        }
    }
}
</style>