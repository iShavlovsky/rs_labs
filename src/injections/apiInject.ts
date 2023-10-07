import { InjectionKey } from 'vue';
import { Api } from '@/api';

const ApiInject = Symbol() as InjectionKey<Api>;
export default ApiInject;
