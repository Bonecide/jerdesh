
import { BASE_API_URL } from '@/utils/const/env';
import {buildQueryParams} from './buildQueryParams';
import {Data, RentalFetchConfig, RequestFunc} from './rentalFetch.types';

export const withLogger = async (
  func: RequestFunc,
  path: string,
  data: Data,
  config?: RentalFetchConfig,
) => {
  let isFinished = false;
  const queryParams = buildQueryParams(data);
  const url = `${BASE_API_URL}/${path}${queryParams}`;

  data.signal?.addEventListener('abort', () => {
    if (isFinished) {
      return;
    }

    console.info('<<Aborted>>', url);
  });

  const result = await func(path, data, config);
  isFinished = true;
  return result;
};
