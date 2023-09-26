import { InjectionKey } from 'vue';
import { TApi } from '@/api';

const ApiInject = Symbol() as InjectionKey<TApi>;
export default ApiInject;
