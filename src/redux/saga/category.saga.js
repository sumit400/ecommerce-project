import {
    put,
    takeLatest
} from "redux-saga/effects"
import {
    ADD_CATEGORY_START,
    DELETE_CATEGORY_START,
    GET_CATEGORY_START
} from "../constants/category.constant";
import {
    addCategoryToFirebase,
    deleteCategoryToFirebase,
    getCategoryFromFirebase
} from "../services/category.service";
import {
    addCategoryError,
    getCategoryError,
    getCategoryStart,
    getCategorySuccess
} from "../actions/category.action";

function* getCategory() {
    try {
        let result = yield getCategoryFromFirebase()
        yield put(getCategorySuccess(result))
    } catch (error) {
        yield put(getCategoryError(error.message))
    }
}

function* addCategory({
    payload
}) {
    try {
        yield addCategoryToFirebase(payload)
        yield put(getCategoryStart())
    } catch (error) {
        yield put(addCategoryError(error.message))
    }
}


function* deleteCategory({
    payload
}) {
    try {
        yield deleteCategoryToFirebase(payload)
        yield put(getCategoryStart())
    } catch (error) {
        yield put(addCategoryError(error.message))
    }
}

export default function* category() {
    yield takeLatest(GET_CATEGORY_START, getCategory)
    yield takeLatest(ADD_CATEGORY_START, addCategory)
    yield takeLatest(DELETE_CATEGORY_START, deleteCategory)

}