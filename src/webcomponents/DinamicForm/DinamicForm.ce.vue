<template>
  <div class="container">
    <h1>Dynamic Form web component</h1>
    <slot name="title">
      <h2
        v-if="props.title"
        class="titleContainer"
      >
        {{ props.title }}
      </h2>
    </slot>

    <slot />
    <input v-model="simpleComposable.input.value">
    <small> {{ simpleComposable.input.value }} </small>
    <SharedComponent />
    <span>Ok response: {{ ResultResponse.ok }}</span>
    <button @click="showLazyComponent = !showLazyComponent">
      Toogle lazy component
    </button>
    <LazyComponent v-if="showLazyComponent" />
  </div>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue';
import SharedComponent from '@/components/SharedComponent/SharedComponent.vue';
import useSimpleComposable from '@/composables/useSimpleComposable';
import { ResultResponse } from '@/config/constants';

const LazyComponent = defineAsyncComponent(() => import('@/components/LazyComponent/LazyComponent.vue'));

const props = defineProps<{
  title?: string,
}>();

const simpleComposable = useSimpleComposable();

const showLazyComponent = ref(false);
</script>

<style lang="scss">
@import "@/webcomponents/DinamicForm/DinamicForm.scss";
@import "@/components/SharedComponent/SharedComponent.scss";
</style>
