<template>
    <div class="sidebar">
        <div class="container flex flex-column">
            <div class="row flex" :class="{ active: step.show }" v-for="(step, index) in stepList" :key="index"
                @click="navigateSidebar(step.id)">
                <div class="left">
                    <span>{{ step.id }}</span>
                </div>
                <div class="right flex flex-column">
                    <span>{{ step.stepTitle }}</span>
                    <span>{{ step.stepBody }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
export default {
    computed: {
        ...mapState(['stepList','confirmForm']),
    },
    methods: {
        ...mapMutations(['NAVIGATE_SIDEBAR','GET_TOTAL']),
        navigateSidebar(id) {
            if(!this.confirmForm) {
                this.NAVIGATE_SIDEBAR(id);
            }
            if(id === 4) {
                this.GET_TOTAL();
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.sidebar {
    background-image: url(../assets/images/bg-sidebar-desktop.svg);
    background-repeat: no-repeat;
    border-radius: 8px;
    background-size: contain;

    .container {
        gap: 1.5rem;
        padding: 2rem 6rem 2rem 2rem;

        .row {
            gap: 1rem;
            align-items: center;
            cursor: pointer;

            .left {
                span {
                    display: grid;
                    place-items: center;
                    width: 2.5rem;
                    height: 2.5rem;
                    border: 2px solid var(--Light-blue);
                    border-radius: 50%;
                    font-weight: 700;
                    color: var(--Light-gray);
                    transition: all 0.5s ease-in-out;
                }
            }

            &.active {
                .left {
                    span {
                        background-color: var(--Light-blue);
                        color: var(--Marine-blue);
                    }
                }
            }

            .right {
                gap: 4px;

                span {
                    text-transform: uppercase;
                }

                span:first-of-type {
                    font-weight: 500;
                    color: var(--Cool-gray);
                    font-size: 14px;
                }

                span:last-child {
                    color: var(--Light-gray);
                    letter-spacing: 1px;
                    word-spacing: 3px;
                    font-weight: 700;
                }
            }
        }
    }

    @media (max-width:991px) {
        background-image: url(../assets/images/bg-sidebar-mobile.svg);
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        right: 0;
        border-radius: 0;
        height: 200px;
        width: 100%;
        background-size: cover;

        .container {
            padding: 2rem;
            justify-content: center;
            flex-direction: row;

            .row {
                .right {
                    display: none;
                }
            }
        }
    }

    @media (max-width:460px) {
        background-size: contain;
    }
}</style>