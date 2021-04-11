<template>
  <div class="form-group">
    <label for>Name</label>
    <!-- input이벤트를 실행할 때마다 updateName 메소드가 실행된다.  -->
    <input type="text" :value="value" @input="$emit('input', $event.target.value)" />
    <!-- <input type="text" name="name" :value="name" @input="updateName" /> -->
    <!-- <input type="text" name="name" v-bind:value="name" v-on:input="updateName" /> -->
  </div>
</template>

<script>
export default {
  props: {
    value: {
      // name: {
      type: String,
      required: true
    }
  },
  methods: {
    updateName(e) {
      console.log(e.target.value);
      // $emit('eventName', value)
      // eventName의 이름으로 value 값을 담아서 부모 컴포넌트에 보낼 수 있다.
      // 즉 update-name이라는 이벤트에 e.target.value를 담는다는 의미인듯.
      this.$emit("update-name", e.target.value);
    }
  }
};
</script>

<style scoped>
.form > .form-group {
  padding: 12px;
}
.form > .form-group > label {
  font-size: 12px;
  margin: 0 10px 0 0;
}
.form > .form-group > input {
  font-size: 12px;
  padding: 10px;
}
</style>