<template>
    <div class="card">
        <div class="card-inner">

        </div>
    </div>
</template>
<script>
export default {
    name: "RepositoresCard",
    components: {},
    props: {
        cardInfo: {
            required: true,
            type: Object,
            default: () => ({}),
        },
    },
    computed: {},
    created() {
        
    }
};
</script>
<style lang="scss">
.card {
    &-inner {
        display: flex;
        flex-flow: column nowrap;
    }
}
</style>