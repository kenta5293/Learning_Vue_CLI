<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Kenta>
      <!-- 
        2개 이상의 <slot>을 사용할 때에는 <template> 태그를 이용한다.
        여기에 v-slot: 이라는 속성을 이용하여, name으로 구분한 slot을 설정해줄 수 있다.
        즉, <template v-slot:header>는 name이 header인 <slot>을 의미하고, 이 템플릿에 작성한
        HTML코드는 컴포넌트의 <slot name="header"> 이 곳에 들어가게 된다.

        slot을 통해 받아온 데이터를 이용하고 싶을 때에는 템플릿에 v-slot:(slotName)="slotProps"
        이렇게 작성하고, 템플릿 태그 안에는 {{ slotProps.dataName }} 이렇게 작성하면 된다.
        여기서 slotProps는 임의의 이름으로 작성해준다.

        v-slot은 v-bind를 : 으로 대체하여 쓸 수 있는 것과 같이 #으로 대체가능하다.
        [ v-slot:header는 #header로 대체가능 ]
      -->

      <!-- <template v-slot:header="props"> -->
      <template v-slot:header="{ uploadKenta }">
        <p>No.1 | Header</p>
        <!-- <p>No.2 | {{ props.uploadKenta }}</p> -->
        <p>No.2 | {{ uploadKenta }}</p>
      </template>

      <template #default>
        <p>Body Content</p>
      </template>
    </Kenta>
  </div>
</template>

<script>
import Kenta from "@/components/Kenta.vue";
export default {
  components: {
    Kenta
  }
};
</script>