import { createStore } from 'vuex'

export default createStore({
  state: {
    confirmForm: false,
    selectedAdd: [
      {
        class: "Monthly",
        id: "OnlineService",
        title: "Online service",
        body: "Access to multiplayer games",
        period: "1/mo",
        check: true,
      },
      {
        class: "Monthly",
        id: "LargerStorage",
        title: "Larger storage",
        body: "Extra 1TB of cloud save",
        period: "2/mo",
        check: true,
      }
    ],
    total: null,
    chosenplan: {
      class: "Monthy",
      type: "Arcade",
      img: "icon-arcade.svg",
      period: "9/mo",
      free: false,
      pre: "mo",
    },
    activePlan: true,
    activeComponent: "PersonalInfo",
    back: false,
    next: true,
    confirm: false,
    addList: {
      Monthly: [
        {
          class: "Monthly",
          id: "OnlineService",
          title: "Online service",
          body: "Access to multiplayer games",
          period: "1/mo",
          check: true,
        },
        {
          class: "Monthly",
          id: "LargerStorage",
          title: "Larger storage",
          body: "Extra 1TB of cloud save",
          period: "2/mo",
          check: true,
        },
        {
          class: "Monthly",
          id: "CustomizableProfile",
          title: "Customizable Profile",
          body: "Custom theme on your profile",
          period: "2/mo",
          check: false,
        },
      ],
      Yearly: [
        {
          class: "Yearly",
          id: "OnlineService",
          title: "Online service",
          body: "Access to multiplayer games",
          period: "10/yr",
          check: true,
        },
        {
          class: "Yearly",
          id: "LargerStorage",
          title: "Larger storage",
          body: "Extra 1TB of cloud save",
          period: "20/yr",
          check: true,
        },
        {
          class: "Yearly",
          id: "CustomizableProfile",
          title: "Customizable Profile",
          body: "Custom theme on your profile",
          period: "20/yr",
          check: false,
        },
      ],
    },
    stepList: [
      {
        id: 1,
        stepTitle: "step 1",
        stepBody: "your info",
        show: true,
        component: "PersonalInfo",
      },
      {
        id: 2,
        stepTitle: "step 2",
        stepBody: "select plan",
        show: false,
        component: "Plan",
      },
      {
        id: 3,
        stepTitle: "step 3",
        stepBody: "add-ons",
        show: false,
        component: "AddOns",
      },
      {
        id: 4,
        stepTitle: "step 4",
        stepBody: "summary",
        show: false,
        component: "FinishingUp",
      },
    ],
  },
  getters: {},
  mutations: {
    CHOSE_PLAN(state, payload) {
      state.chosenplan = payload;
    },
    UPDATE_SELETED_ADD(state, payload) {
      state.selectedAdd = payload;
    },
    TOGGLE_ACTIVE_PLAN(state) {
      state.activePlan = !state.activePlan;
    },
    NAVIGATE_SIDEBAR(state, payload) {
      state.stepList.forEach((step) => {
        if (step.id === payload) {
          step.show = true;
          state.activeComponent = step.component;
        } else {
          step.show = false;
        }
      });

      if (state.activeComponent === "PersonalInfo") {
        state.back = false;
      } else {
        state.back = true;
      }
      if (state.activeComponent === "FinishingUp") {
        state.next = false;
        state.confirm = true;
      } else {
        state.next = true;
        state.confirm = false;
      }
    },
    GET_TOTAL(state) {
      const accumulator = parseInt(state.chosenplan.period);
      state.total = state.selectedAdd.reduce((acc, current) => {
        return parseInt(current.period) + acc;
      }, accumulator);
    },
    CONFIRM(state) {
      state.confirmForm = !state.confirmForm;
    },
  },
  actions: {},
  modules: {},
});
