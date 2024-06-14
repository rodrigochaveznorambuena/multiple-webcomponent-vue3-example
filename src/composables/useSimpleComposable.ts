import { reactive, watch } from 'vue';

const simpleComposable = () => {
  const input = reactive({
    value: 'this is the initial value',
    error: '',
  });

  watch(() => input.value, () => {
    input.error = '';
  });

  return {
    input,
  };
};

export default simpleComposable;
