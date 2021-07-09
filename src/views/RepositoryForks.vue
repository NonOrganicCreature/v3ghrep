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
        }),
    },
    methods: {
        ...mapActions({
            setSelectedRepository: "repositories/setSelectedRepository",
            setForks: "repositories/setForks",
        }),
    },
};
</script>
<style lang="scss">
.forks {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
}
</style>