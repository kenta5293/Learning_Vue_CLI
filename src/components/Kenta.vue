<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ name }}</p>
    <button @click="updateName">Update Name</button>
  </div>
</template>

<script>
export default {
  // 컴포넌트에 데이터 값을 보내고 싶을 때에는 "props" 라는 것을 이용하면 된다.
  // props를 작성할 때에는 Object 형식으로 작성하고, 여러 개를 받아오는 것이 가능하다.
  // 또한, props에 작성한 이름은 data의 이름과 중복되서는 안된다.
  // 그리고 부모 컴포넌트에서 보내 준 데이터 즉, "props"는 자식 컴포넌트에서
  // 값을 변경해서는 안된다. ( 작동은 되나, 경고가 뜸. )

  props: {
    // title 이라는 이름의 props.
    title: {
      type: String, // title의 데이터타입이 String 이어야 한다는 뜻. 다른 타입일 경우 경고를 보냄.
      default: "Default Title", // 만약 title을 보내지 않았을 경우의 default 값.
      required: false // required를 true로 하면 반드시 보내줘야 하고, false일 경우 반드시 보낼 필요는 없다.
    }
  },
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
