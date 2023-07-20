<template>
  <div>
    <input v-model="message" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
    };
  },
  watch: {
    message(newValue, oldValue) {
      console.log(`新しいメッセージ: ${newValue}、古いメッセージ: ${oldValue}`);
    },
  },
};
</script>
