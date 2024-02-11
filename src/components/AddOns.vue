<template>
    <div class="add-ons flex flex-column">
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
        <form @submit.prevent="submitAdds">
            <div class="container flex flex-column">
                <div class="inputs flex flex-column">
                    <AddLabel v-for="(plan, index) in addList" :key="index" :plan="plan" />
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
import AddLabel from './AddLabel.vue'
import { mapState ,mapMutations } from 'vuex';
export default {
    name: 'AddOns',
    data() {
        return {
            classList: {
                Monthly: [
                    { class: 'Monthly', id: 'OnlineService', title: 'Online service', body: 'Access to multiplayer games', period: '1/mo', check: true },
                    { class: 'Monthly', id: 'LargerStorage', title: 'Larger storage', body: 'Extra 1TB of cloud save', period: '2/mo', check: true },
                    { class: 'Monthly', id: 'CustomizableProfile', title: 'Customizable Profile', body: 'Custom theme on your profile', period: '2/mo', check: false },
                ],
                Yearly: [
                    { class: 'Yearly', id: 'OnlineService', title: 'Online service', body: 'Access to multiplayer games', period: '10/yr', check: true },
                    { class: 'Yearly', id: 'LargerStorage', title: 'Larger storage', body: 'Extra 1TB of cloud save', period: '20/yr', check: true },
                    { class: 'Yearly', id: 'CustomizableProfile', title: 'Customizable Profile', body: 'Custom theme on your profile', period: '20/yr', check: false },
                ]
            },
            
        }
    },
    components: {
        AddLabel,
    },
    computed: {
        ...mapState(['activePlan', 'back', 'next', 'confirm','selectedAdd']),
        addList() {
            if (this.activePlan) {
                return this.classList.Monthly
            } else {
                return this.classList.Yearly
            }
        }
    },
    methods: {
        ...mapMutations(['NAVIGATE_SIDEBAR','UPDATE_SELETED_ADD','GET_TOTAL']),
        goBack() {
            this.NAVIGATE_SIDEBAR(2)
        },
        submitAdds() {
            const selectedAdd =this.addList.filter(add => add.check === true);
            
            if(selectedAdd.length > 0) {
                this.NAVIGATE_SIDEBAR(4)
                this.UPDATE_SELETED_ADD(selectedAdd)
            }
            this.GET_TOTAL();
        },
    }
}
</script>

<style lang="scss" scoped>
.add-ons {
    flex: 1;

    h1 {
        color: var(--Marine-blue);
    }

    >p {
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

        h1 {
            font-size: 1.5rem;
        }

        p {
            margin-bottom: 10px;
            margin-right: 5px;
            line-height: 1.5;
        }

        form {
            .container {
                gap: 1rem;
            }
        }
    }
}</style>