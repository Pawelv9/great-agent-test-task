import { LOAD_DATA } from "./types";

export const loadDataAction = data => ({
    type: LOAD_DATA,
    payload: data
})

