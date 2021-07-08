<template>
    <div class="home">
        <search />
        <list />
    </div>
</template>

<script>
import Search from "@/components/Search";
import List from "@/components/repositories/List";
export default {
    name: "Home",
    components: { Search, List },
};
</script>
<style lang="scss">
    .home {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
    }
</style>
