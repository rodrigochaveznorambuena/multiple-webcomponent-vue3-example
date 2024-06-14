import { defineCustomElement } from 'vue';
import SimpleFormCe from '@/webcomponents/SimpleForm/SimpleForm.ce.vue';

const CustomElement = defineCustomElement(SimpleFormCe);

customElements.define('simple-form', CustomElement);
