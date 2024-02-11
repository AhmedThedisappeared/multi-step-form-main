<template>
    <label :for="plan.type" :class="{active:plan.checked}">
        <input type="radio" name="plan" :id="plan.type" @click.stop="choosePlan" v-model="plan.checked">
        <img :src="plan.img" alt="icon">
        <div>
            <h4>{{ plan.type }}</h4>
            <p>{{ plan.period }}</p>
            <span v-if="plan.free">2 months free</span>
        </div>
    </label>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
export default {
    name: 'PlanLabel',
    data() {
        return {
        }
    },
    props: ['plan'],
    methods: {
        ...mapMutations(['CHOSE_PLAN']),
        choosePlan() {
            this.CHOSE_PLAN(this.plan);
        }
    },
    computed: {
        ...mapState(['chosenplan']),
    }
}
</script>

<style lang="scss" scoped>
label {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    align-items: flex-start;
    position: relative;
    border: 1px solid var(--Light-gray);
    background-color: var(--White);
    transition: all 0.5s ease-in-out;
    border-radius: 6px;
    cursor: pointer;
    &.active {
        background-color: var(--Alabaster);
        outline: 1px solid var(--Purplish-blue);
    }

    &:hover {
        outline: 1px solid var(--Purplish-blue);
    }

    input {
        position: absolute;
        z-index: -1;
    }

    div {
        margin-top: 2.5rem;

        h4 {
            color: var(--Marine-blue);
        }

        p {
            color: var(--Cool-gray);
            margin: 0.5rem 0;
        }

        span {
            color: var(--Marine-blue);
            font-size: 15px;
        }
    }

    @media (max-width:991px) {

        flex-direction: row;
        align-items: flex-start;
        gap: 1rem;
        padding: 10px;

        div {
            margin-top: 0;

            p {
                margin: 3px 0;
            }
        }

    }
}
</style>