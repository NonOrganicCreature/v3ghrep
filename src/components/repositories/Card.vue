<template>
    <router-link
        class="card"
        :to="{ name: 'RepositoryForks', params: { id: preparedCardInfo.id } }"
    >
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
    </router-link>
</template>
<script>
export default {
    name: "RepositoriesCard",
    components: {},
    props: {
        cardInfo: {
            required: true,
            type: Object,
            default: () => ({}),
        },
        cardType: {
            type: String,
            default: 'repository'
        }
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
    cursor: pointer;
    text-decoration: none;
    color: #fff;
    &-inner {
        display: flex;
        flex-flow: column nowrap;
        padding: 10px;
        height: 100%;
    }
    &-info {
        display: flex;
        flex-flow: column nowrap;
        height: 100%;
        justify-content: space-evenly;
        color: #000;
        &__item {
            &.title {
                font-weight: 700;
            }
        }
    }
}
</style>