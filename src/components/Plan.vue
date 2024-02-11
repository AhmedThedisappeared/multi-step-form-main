<template>
    <div class="plan flex flex-column">
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
        <form @submit.prevent="submitThePlan">
            <div class="container flex flex-column">
                <div class="inputs flex flex-column">
                    <div class="input-content flex">
                        <PlanLabel v-for="(plan, index) in chosenList" :key="index" :plan="plan" @click.stop="choosePlan(index)"/>
                    </div>
                    <div class="toggler">
                        <p :class="{ open: activePlan }">Monthly</p>
                        <div @click="changePlan" :class="{ open: !activePlan}">
                            <span></span>
                        </div>
                        <p :class="{ open: !activePlan }">Yearly</p>
                    </div>
                </div>
                <div class="buttons">
                    <div>
                        <a v-if="back" href="#" @click="goBack">Go Back</a>
                    </div>
                    <div>
                        <button v-if="next" type="submit" class="next">Next Step</button>
                        <button v-if="confirm" class="confirm">Confirm</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import PlanLabel from './PlanLabel.vue'
export default {
    name: 'Plan',
    data() {
        return {
            planData: {
                monthly: [
                    { class: 'Monthy', type: 'Arcade', img: 'images/icon-arcade.svg', period: '9/mo', free: false ,pre:'mo', checked:true},
                    { class: 'Monthy', type: 'Advanced', img: 'images/icon-advanced.svg', period: '12/mo', free: false,pre:'mo' , checked:false},
                    { class: 'Monthy', type: 'Pro', img: 'images/icon-pro.svg', period: '15/mo', free: false,pre:'mo', checked:false },
                ],
                yearly: [
                    { class: 'Yearly', type: 'Arcade', img: 'images/icon-arcade.svg', period: '90/yr', free: true,pre:'yr', checked:true },
                    { class: 'Yearly', type: 'Advanced', img: 'images/icon-advanced.svg', period: '120/yr', free: true ,pre:'yr', checked:false},
                    { class: 'Yearly', type: 'Pro', img: 'images/icon-pro.svg', period: '150/yr', free: true,pre:'yr', checked:false },
                ],
            },
            // planInput: '',
        }
    },
    components: {
        PlanLabel,
    },
    methods: {
        ...mapMutations(['TOGGLE_ACTIVE_PLAN' ,'NAVIGATE_SIDEBAR']),
        changePlan() {
            this.TOGGLE_ACTIVE_PLAN()
            
        },
        submitThePlan() {
            if(!this.chosenplan) {
                return
            } else {
                this.NAVIGATE_SIDEBAR(3)
            }
        },
        goBack() {
            this.NAVIGATE_SIDEBAR(1);
        },
        choosePlan(index) {
            this.chosenList.forEach(plan => {
                plan.checked= false;
            });
            this.chosenList[index].checked= true;
        }

    },
    computed: {
        ...mapState(['activePlan', 'back', 'next', 'confirm','chosenplan']),
        chosenList() {
            if (this.activePlan) {
                return this.planData.monthly
            } else {
                return this.planData.yearly
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.plan {
    flex: 1;

    h1 {
        color: var(--Marine-blue);
    }

    > p {
        margin: 0.8rem 0 2rem;
        color: var(--Cool-gray);
    }

    form {
        flex: 1;

        .container {
            height: 100%;
            justify-content: space-between;

            .inputs {
                gap: 1.5rem;

                .input-content {
                    gap: 1rem;
                }

                .toggler {
                    margin-top: 2rem;
                    border-radius: 6px;
                    background-color: var(--Alabaster);
                    padding: 1rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 2rem;

                    p {
                        color: var(--Cool-gray);
                        transition: all 0.15s ease-in-out;

                        &.open {
                            color: var(--Marine-blue);
                        }
                    }

                    div {
                        width: 3rem;
                        height: 1.5rem;
                        background-color: var(--Marine-blue);
                        position: relative;
                        border-radius: 0.75rem;
                        transition: all 0.5s ease-in-out;
                        cursor: pointer;

                        span {
                            width: 1rem;
                            height: 1rem;
                            background-color: var(--White);
                            display: block;
                            margin: 0.25rem;
                            border-radius: 50%;
                            position: absolute;
                        }

                        &.open {
                            span {
                                right: 0;
                            }
                        }
                    }
                }
            }
        }
    }
    @media (max-width:991px) {
        flex: unset;
        background-color: var(--White);
        top: 3rem;
        z-index: 2;
        padding: 1rem;
        border-radius: 8px;
        margin-top: 3rem;

        h1 {
            font-size: 1.5rem;
        }

        p > {
            margin-bottom: 10px;
            margin-right: 5px;
            line-height: 1.5;
        }
        form {
            .container {
                .inputs  {
                    gap: 10px;
                    .input-content {
                        flex-direction: column;
                        gap: 10px;
                    }
                    .toggler {
                        margin-top: 1rem;
                        padding: 10px;
                    }
                }
            }
        }

    }
}</style>