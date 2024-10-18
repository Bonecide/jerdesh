import {rentalFetch} from './rentalFetch';
import {Data, RentalFetchConfig} from './rentalFetch.types';
import {withLogger} from './withLogger';

export const rentalFetchUnauthorized = async (
  path: string,
  data: Data,
  config?: RentalFetchConfig,
) => {
  return await withLogger(rentalFetch, path, data, config);
};
