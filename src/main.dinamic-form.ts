import { defineCustomElement } from 'vue';
import DinamicFormCe from '@/webcomponents/DinamicForm/DinamicForm.ce.vue';

const CustomElement = defineCustomElement(DinamicFormCe);

customElements.define('dynamic-form', CustomElement);
