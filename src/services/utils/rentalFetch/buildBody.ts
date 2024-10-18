

import {Data} from './rentalFetch.types';

export const buildBody = ({body}: Data) => {
  if (body) {
    return body instanceof FormData
      ? body
      : JSON.stringify(body);
  }
};
