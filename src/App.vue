<template>
  <main>
    <StepsSidebar />
    <div class="content">
      <StepsContent v-if="!confirmForm" />
      <div v-else class="thank">
        <img src="images/icon-thank-you.svg" alt="">
        <h1>Thank you!</h1>
        <p>Thanks for confirming your subscription! We hope you have fun
          using our platform. If you ever need support, please feel free
          to email us at support@loremgaming.com.</p>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState } from 'vuex';
import StepsSidebar from './components/StepsSidebar.vue';
import StepsContent from './components/StepsContent.vue';
export default {
  data() {
    return {

    }
  },
  components: {
    StepsSidebar,
    StepsContent
  },
  computed: {
    ...mapState(['confirmForm'])
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap');

:root {
  --Marine-blue: hsl(213, 96%, 18%);
  --Purplish-blue: hsl(243, 100%, 62%);
  --Pastel-blue: hsl(228, 100%, 84%);
  --Light-blue: hsl(206, 94%, 87%);
  --Strawberry-red: hsl(354, 84%, 57%);
  --Cool-gray: hsl(231, 11%, 63%);
  --Light-gray: hsl(229, 24%, 87%);
  --Magnolia: hsl(217, 100%, 97%);
  --Alabaster: hsl(231, 100%, 99%);
  --White: hsl(0, 0%, 100%);
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: 'Ubuntu', sans-serif;
}

p {
  font-size: 1rem;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

#app {
  width: 100%;
  min-height: 100vh;
  background-color: var(--Magnolia);
  display: grid;
  place-items: center;

  main {
    width: 100%;
    max-width: 910px;
    padding: 1rem;
    height: 600px;
    border-radius: 8px;
    display: flex;

    .content {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .thank {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        gap: 1rem;
        h1 {
          color: var(--Marine-blue);
        }
        p {
          color: var(--Cool-gray);
          line-height: 1.5;
        }
      }
    }

    @media (max-width:991px) {
      flex-direction: column;
      .content {
        .thank {
            flex: unset;
            background-color: var(--White);
            top: 3rem;
            z-index: 2;
            padding: 4rem 1.5rem;
            border-radius: 8px;
            margin-top: 3rem;
        }
      }
    }

    @media (min-width:992px) {
      background-color: var(--White);
      box-shadow: 0 2px 10px 0 #ddd;

      .content {
        padding: 2rem 4rem 2rem;
      }
    }
  }
}

.flex {
  display: flex;
}

.flex-column {
  flex-direction: column;
}

.flex-center-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}


.buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    font-size: 1rem;
    color: var(--Cool-gray);
    transition: all 0.15s ease-in-out;

    &:hover {
      color: var(--Marine-blue);
    }
  }

  button {
    padding: 10px 16px;
    color: var(--Magnolia);
    border: none;
    font-weight: 500;
    border-radius: 4px;
    line-height: 1;
    vertical-align: middle;
    text-align: center;
    cursor: pointer;

    &.next {
      background-color: var(--Marine-blue);
    }

    &.confirm {
      background-color: var(--Purplish-blue);
    }
  }

  @media (max-width:991px) {
    background-color: var(--White);
    padding: 1rem;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
}</style>
