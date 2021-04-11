
<!--
기존 Vue 컴포넌트를 만들때에는 Object안에 template라는 속성으로
HTMl태그를 넣었지만 .vue 파일에서는 <template /> 태그를 이용한다.

views 폴더에는 페이지 컴포넌트를 작성하고, 그 외의 작은 컴포넌트들은 components 폴더에서 작성한다.
-->

<template>
  <div class="home">
    <h1>This is Home page</h1>
    <!-- <Kenta /> -->
    <form action class="form">
      <!-- <InputField :name="name" @update-name="updateName" /> -->
      <InputField v-model="name" />
      <button>Submit</button>
    </form>

    <br />
    {{ name }}
  </div>
</template>

<script>
// import를 하고 경로에 @를 적는 이유는 @는 src를 의미하기 때문이다.
// import Kenta from "@/components/Kenta.vue";
import InputField from "@/components/InputField.vue";

export default {
  components: {
    InputField
  },
  data() {
    // 여기서 data를 작성할 때 Function으로 작성하고, Object를 리턴하여 사용한다.
    return {
      name: ""
    };
  },
  methods: {
    updateName(name) {
      this.name = name;
    }
  }
};
</script>

<style lang="css" scoped>
/* 여기에는 CSS코드를 적어 사용하면 된다. */
/* 또 scoped 라는 속성이 있는데 이는, scoped를 작성하지 않으면, */
/* index 전체에 여기 작성된 CSS가 적용되므로, 보통은 scoped를 작성한다. */
/* scoped를 작성하면, 현재 이 컴포넌트 즉, Home.vue에만 적용된다. */
/* 컴포넌트 별로 CSS를 관리할 수 있다는 장점이 존재한다. */
h1 {
  color: red;
}
.form {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 16px;
  margin: 12px auto;
  border: 1px solid #525252;
  font-size: 10px;
}
.form > button {
  display: inline;
}
</style>
