import { Ref, ref } from 'vue';
import { IAlert } from '@/interfaces';
export default function alerts() {
    let id: number = 0;
    const alerts: Ref<IAlert[]> = ref([]);

    function add(text: IAlert['text'], critical: IAlert['critical']) {
        id++;
        const alert: IAlert = { id, text, critical };
        alerts.value.push(alert);

        if (!critical) {
            setTimeout(() => remove(alert.id), 5000);
        }
    }

    function remove(id: IAlert['id']) {
        alerts.value = alerts.value.filter(alert => alert.id !== id);
    }

    return {
        alerts,
        add,
        remove
    };
}
