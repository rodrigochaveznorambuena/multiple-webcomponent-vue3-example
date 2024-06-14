<template>
  <div class="container">
    <h1>Simple Form web component</h1>
    <input v-model="simpleComposable.input.value">
    <small> {{ simpleComposable.input.value }} </small>
    <SharedComponent />
    <slot />
    <span>Failed response: {{ ResultResponse.failed }}</span>
  </div>
</template>

<script setup lang="ts">
import useSimpleComposable from '@/composables/useSimpleComposable';
import SharedComponent from '@/components/SharedComponent/SharedComponent.vue';

import { ResultResponse } from '@/config/constants';

const simpleComposable = useSimpleComposable();
</script>

<style lang="scss">
@import '@/webcomponents/SimpleForm/SimpleForm.scss';
@import '@/components/SharedComponent/SharedComponent.scss';
</style>
