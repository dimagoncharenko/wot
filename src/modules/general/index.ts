import generalReduser from './generalSlice';
import { actions } from './generalSlice';
import * as selectors from './selectors';
export { generalReduser };

const generalModule = {
  actions,
  selectors,
};

export default generalModule;
