<template>
    <div class="forks">
        <list :cardsType="'forks'" />
    </div>
</template>
<script>
import List from "@/components/repositories/List";
import { mapGetters, mapActions } from "vuex";
export default {
    name: "Repository",
    components: { List },
    created() {
        this.setSelectedRepository(+this.$route.params.id);
        this.setForks();
    },
    computed: {
        ...mapGetters({
            forks: "repositories/getForks",
            searchValue: 'search/getSearchValue'
        }),
    },
    methods: {
        ...mapActions({
            setSelectedRepository: "repositories/setSelectedRepository",
            setForks: "repositories/setForks",
        }),
    },
    // if we came from only fork id and haven't searchValue(username)
    beforeRouteEnter(to, from, next) {
        next(vm => {
            if (!vm.searchValue) {
                vm.$router.push({ name: 'Home' })
            }
        })
    }
};
</script>
<style lang="scss">
.forks {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
}
</style>