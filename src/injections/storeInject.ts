import { InjectionKey } from 'vue';
import { TStore } from '@/store';

const StoreInject = Symbol() as InjectionKey<TStore>;
export default StoreInject;
