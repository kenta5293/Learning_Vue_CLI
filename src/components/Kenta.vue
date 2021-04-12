<template>
  <div>
    <!-- emit -->
    <!-- <h1>{{ title }}</h1>
    <slot></slot>
    <p>{{ name }}</p>
    <slot></slot>
    <button @click="updateName">Update Name</button>-->

    <!-- slot -->
    <!-- 
      컴포넌트 사이에 다른 코드를 작성하고 싶은 경우에는 "slot" 이라는 것을 추가하면 된다.
      <slot>을 컴포넌트에 작성하고, 컴포넌트 태그를 열어서 그 안에 HTML 코드를 작성하면,
      그 코드가 <slot>에 들어가게 된다.

      또, <slot>은 여러번 작성이 가능한데, 이를 구분 할 때에는 name 속성을 추가해야 한다.
      ( name 속성이 없을 경우 default가 들어가는 듯. )

      slot에 데이터를 보내줄 수 도 있다. v-bind:(name)="(data)" 이런 형식으로, 
      (data)를 (name)이라는 이름으로 slot에 보내어, 뷰 페이지에서 사용이 가능하다.
    -->
    <p>Header</p>
    <slot name="header" :uploadKenta="kenta"></slot>
    <p>Body</p>
    <slot></slot>
    <p>Footer</p>
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
      default: "Default Title" // 만약 title을 보내지 않았을 경우의 default 값.
      // required: false // required를 true로 하면 반드시 보내줘야 하고, false일 경우 반드시 보낼 필요는 없다.
    },
    name: {
      type: String,
      default: "Default Name"
    }
  },
  data() {
    return {
      // name: "Kenta"
      kenta: "Web-Kenta"
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
