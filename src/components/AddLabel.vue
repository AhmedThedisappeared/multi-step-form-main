<template>
    <label :for="plan.id" >
        <input type="checkbox" name="addOns" :id="plan.id" :checked="plan.check" @click="toggleChecked">
        <div class="add-content">
            <div class="left">
                <h4>{{ plan.title }}</h4>
                <p>{{ plan.body }}</p>
            </div>
            <div class="right">
                <p>+${{ plan.period }}</p>
            </div>
        </div>
    </label>
</template>

<script>
export default {
    name: 'PlanLabel',
    data() {
        return {
            addInput:[],
        }
    },
    props: ['plan'],
    methods: {
        toggleChecked() {
            this.plan.check= !this.plan.check;
        }
    }
}
</script>

<style lang="scss" scoped>
label {
    flex: 1;
    display: flex;
    padding: 1rem;
    align-items: center;
    position: relative;
    border: 1px solid var(--Light-gray);
    background-color: var(--White);
    transition: all 0.5s ease-in-out;
    border-radius: 6px;
    cursor: pointer;
    gap: 1rem;
    &:has(input:checked) {
        background-color: var(--Alabaster);
        outline: 1px solid var(--Purplish-blue);
    }

    &:hover {
        outline: 1px solid var(--Purplish-blue);
    }
    input {
        width: 1.2rem;
        height: 1.2rem;
    }
    .add-content {
        flex: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .left {
            h4 {
                color: var(--Marine-blue);
            }
            p {
                color: var(--Cool-gray);
                margin-top: 3px;
            }
        }
        .right {
            p {
                color:var(--Purplish-blue);
            }
        }
    }
    @media (max-width:991px) {
        padding: 10px;
        p {
            font-size: 14px;
        }

    }
}
</style>