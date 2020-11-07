<template>
  <LRX75Hero>
    <template v-slot:header>Loan shark</template>
    <template v-slot:image
      ><img src="https://www.flaticon.com/svg/static/icons/svg/2721/2721156.svg"
    /></template>
    A loan shark is a person who loans money to an individual at excessively high interest rates.
    Loan sharks commonly employ violence to collect their debts.
    This paints sharks in an inaccurate and negative aspect, as sharks are responsible for a mere 10 deaths per year, compared to the 100 million sharks killed by humans.
  </LRX75Hero>
</template>

<script>
import LRX75Hero from "@/components/LRX75Hero.vue";

export default {
  name: "2LoanShark",
  components: {
    LRX75Hero
  }
};
</script>
