<template>
    <div class="summary flex flex-column">
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>
        <div class="container flex flex-column">
            <div class="inputs flex flex-column">
                <div class="details">
                    <div class="plan-details flex-center-between">
                        <div class="left flex flex-column">
                            <h3>{{ chosenplan.type }} <span>({{ chosenplan.class }})</span></h3>
                            <a href="#" @click="updateChosenPlan">Change</a>
                        </div>
                        <div class="right">
                            <p>${{ chosenplan.period }}</p>
                        </div>
                    </div>
                    <hr>
                    <div class="add-details flex flex-column">
                        <div class="row flex-center-between" v-for="(add, index) in selectedAdd" :key="index">
                            <p>{{ add.title }}</p>
                            <span>+${{ add.period }}</span>
                        </div>
                    </div>
                </div>
                <div class="total flex-center-between">
                    <p>Total (per {{ per }})</p>
                    <div>
                        <span>+${{ total }}</span><span>/{{ chosenplan.pre }}</span>
                    </div>
                </div>
            </div>
            <div class="buttons">
                <div>
                    <a v-if="back" @click="goBack" href="#">Go Back</a>
                </div>
                <div>
                    <button v-if="next" class="next">Next Step</button>
                    <button v-if="confirm" class="confirm" @click="confirmSelections">Confirm</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState ,mapMutations } from 'vuex';

    export default {
        name:'FinishingUp',
        data() {
            return {
                hardCodePlan:{ class: 'Monthy', type: 'Arcade', img: 'icon-arcade.svg', period: '9/mo', free: false ,pre:'mo'}
            }
        },
        computed: {
            ...mapState(['chosenplan' ,'back', 'next', 'confirm','selectedAdd' ,'total','activePlan']),
            per() {
                if (this.activePlan) {
                    return 'month'
                } else {
                    return 'year'
                }
            },
        },
        methods: {
            ...mapMutations(['NAVIGATE_SIDEBAR','CONFIRM']),
            goBack() {
                this.NAVIGATE_SIDEBAR(3)
            },
            confirmSelections() {
                this.CONFIRM();
            },
            updateChosenPlan() {
                this.NAVIGATE_SIDEBAR(2)
            }
        },
    }
</script>

<style lang="scss" scoped>
    .summary {
        flex: 1;
        h1 {
            color: var(--Marine-blue);
        }
        > p {
            margin: 0.8rem 0 2rem;
            color: var(--Cool-gray);
        }
        .container {
            flex: 1;
            justify-content: space-between;
            .inputs {
                gap: 1.5rem;

            }
            .details {
                background-color: var(--Alabaster);
                padding: 1.5rem 1rem;
                border-radius: 6px;
                .plan-details {
                    h3 {
                        color: var(--Marine-blue);
                    }
                    a {
                        margin-top: 5px;
                        color: var(--Cool-gray);
                        text-decoration: underline;
                        transition: all 0.5s ease-in-out;
                        &:hover {
                            color: var(--Marine-blue);
                        }
                    }
                    p {
                        font-weight: bold;
                        color: var(--Marine-blue);
                    }
                }
                .add-details {
                    gap: 1rem;
                    p {
                        color: var(--Cool-gray);
                    }
                    span {
                        font-weight: 500;
                        color: var(--Marine-blue);
                    }
                }
                hr {
                    margin: 1rem 0;
                }
            }
            .total {
                padding: 0 1rem;
                p {
                    color: var(--Cool-gray);
                }
                span {
                    font-size: 1.2rem;
                    font-weight: 700;
                    color: var(--Purplish-blue);
                }
            }
        }
        @media (max-width:991px) {
            flex: unset;
            background-color: var(--White);
            top: 3rem;
            z-index: 2;
            padding: 2rem 1.5rem;
            border-radius: 8px;
            margin-top: 3rem;
        }
    }
</style>