import { InjectionKey } from 'vue';
import { Store } from '@/store';

const StoreInject = Symbol() as InjectionKey<Store>;
export default StoreInject;
