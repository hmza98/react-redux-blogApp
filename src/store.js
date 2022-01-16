import { createStore, bindActionCreators } from "redux";
import rootReducer from "./reducers/rootReducer";
import { actions } from "./actions/actions";

const store = createStore(rootReducer);
const actionCreators = bindActionCreators(actions, store.dispatch);

export { store, actionCreators };
