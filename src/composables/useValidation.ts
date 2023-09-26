import { ref, Ref, computed, ComputedRef } from 'vue';
import { useVuelidate, ValidationRule, ErrorObject } from '@vuelidate/core';

type ValidationRules = {
    [key: string]: {
        [key: string]: ValidationRule;
    };
};
type FormTypeFromRules<R extends ValidationRules> = {
    [K in keyof R]: string | null;
};

const useValidationErrors = <T>(errors: ErrorObject[]): T => {
    return errors.reduce((acc, value) => {
        return { ...acc, [value.$property]: value.$message };
    }, {} as T);
};

export default function useValidation<R extends ValidationRules>(
    rules: ComputedRef<R>,
    formObj: FormTypeFromRules<R>
) {
    const loading: Ref<boolean> = ref(false);
    const form = ref(formObj) as Ref<FormTypeFromRules<R>>;
    const v$ = useVuelidate(rules, form);

    const errors = computed<Record<keyof FormTypeFromRules<R>, string>>(() =>
        useValidationErrors<Record<keyof typeof formObj, string>>(v$.value.$errors)
    );
    return {
        loading,
        form,
        v$,
        errors
    };
}
