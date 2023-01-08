import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import rootSaga from "../store/rootSaga";


export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(rootSaga, dispatch)
}