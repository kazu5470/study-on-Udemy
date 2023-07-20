// count up to 100 and then stop
<template>
  <div>
    <h1>{{ count }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  watch: {
    count(newValue, oldValue) {
      if (newValue > 100) {
        this.count = 0;
      }
    },
  },
  created() {
    setInterval(() => {
      this.count++;
    }, 1000);
  },
};
</script>
