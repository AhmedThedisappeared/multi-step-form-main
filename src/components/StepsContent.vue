<template>
    <KeepAlive>
        <component :is="activeComponent"></component>
    </KeepAlive>
</template>

<script>
    import { mapState } from 'vuex';
    import PersonalInfo from './PersonalInfo.vue'
    import Plan from './Plan.vue';
    import AddOns from './AddOns.vue';
    import FinishingUp from './FinishingUp.vue'
    export default {
        components: {
            PersonalInfo,
            Plan,
            AddOns,
            FinishingUp
        },
        computed: {
            ...mapState(['activeComponent'])
        }
    }
</script>

<style lang="scss" scoped></style>