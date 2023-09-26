import useApi from './useApi';
import { TApi } from '@/api';
import { ref, UnwrapRef } from 'vue';
import {
    FlattenObjectKeys,
    GetByDotKey,
    getByDotKey,
    runFnWithTuple
} from '@utility/objects';

type TApiKeys = FlattenObjectKeys<TApi, true>;

function useApiRequest<T extends TApiKeys>(
    key: T,
    ...params: Parameters<GetByDotKey<TApi, T>>
) {
    const api = useApi();
    const apiFn = getByDotKey(api, key);
  type DataType = Awaited<ReturnType<typeof apiFn>>;

  const result = ref<ApiRequest<DataType>>({
      done: false,
      data: null,
      error: null
  });

  runFnWithTuple(apiFn, params)
      .then(
          data =>
              (result.value = {
                  done: true,
                  data: data as UnwrapRef<DataType>,
                  error: null
              })
      )
      .catch(
          e =>
              (result.value = {
                  done: false,
                  data: null,
                  error: e
              })
      );

  return result;
}

export default useApiRequest;

type ApiRequestPending = {
    done: false;
    data: null;
    error: null;
};

type ApiRequestSuccess<T> = {
    done: true;
    data: T;
    error: null;
};

type ApiRequestError = {
    done: false;
    data: null;
    error: Error;
};

type ApiRequest<T> = ApiRequestPending | ApiRequestSuccess<T> | ApiRequestError;
