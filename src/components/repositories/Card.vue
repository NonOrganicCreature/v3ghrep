<template>
    <div class="card">
        <div class="card-inner">
            <div class="card-info">
                <div class="card-info__item title">
                    Name: {{ preparedCardInfo.name }}
                </div>
                <div class="card-info__item">
                    <a :href="preparedCardInfo.html_url">Repository url</a>
                </div>
                <div class="card-info__item">
                    Descriprion: {{ preparedCardInfo.description }}
                </div>
                <div class="card-info__item">
                    Stars: {{ preparedCardInfo.stargazers_count }}
                </div>
                <div class="card-info__item">
                    Forks: {{ preparedCardInfo.forks_count }}
                </div>
            </div>
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
    computed: {
        preparedCardInfo() {
            return {
                ...this.cardInfo,
                description: this.cardInfo.description
                    ? this.cardInfo.description
                    : "Empty",
            };
        },
    },
};
</script>
<style lang="scss">
.card {
    background: #888;
    border: 1px solid #fff;
    border-radius: 8px;
    width: 300px;
    &-inner {
        display: flex;
        flex-flow: column nowrap;
        padding: 10px;
    }
    &-info {
        display: flex;
        flex-flow: column nowrap;
        &__item {
            &:first-child ~ * {
                margin-top: 10px;
                margin-left: 10px;
            }
            &.title {
                font-weight: 700;
            }
        }
    }

}
</style>