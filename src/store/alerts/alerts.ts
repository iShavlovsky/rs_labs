import { Ref, ref } from 'vue';
import type { Alert } from './alerts.types';

export default function alerts() {
    let id: number = 0;
    const alerts: Ref<Alert[]> = ref([]);

    function add(text: Alert['text'], critical: Alert['critical']) {
        id++;
        const alert: Alert = { id, text, critical };
        alerts.value.push(alert);
        console.log('alert', alert);
        if (!critical) {
            setTimeout(() => remove(alert.id), 5000);
        }
    }

    function remove(id: Alert['id']) {
        alerts.value = alerts.value.filter(alert => alert.id !== id);
    }

    return {
        alerts,
        add,
        remove
    };
}
