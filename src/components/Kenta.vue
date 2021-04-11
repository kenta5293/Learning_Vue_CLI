<template>
  <div>
    <p>{{ name }}</p>
    <button @click="updateName">Update Name</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Kenta"
    };
  },
  methods: {
    updateName() {
      this.name = `Kenta Updated`;
    }
  }
};
</script>

<style scoped>
</style>
