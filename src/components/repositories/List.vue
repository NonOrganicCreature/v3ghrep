<template>
    <div class="list">
        <div class="list-inner">
            <card v-for="repository in repositories" :key="repository.id"/>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Card from '@/components/repositories/Card'
export default {
    name: 'RepositoresList',
    components: { Card },
    computed: {
        ...mapGetters({
            repositories: 'repositories/getRepositories'
        })
    }
}
</script>
<style lang="scss">
.list {
    &-inner {
        display: flex;
        flex-flow: row wrap;
    }
}
</style>