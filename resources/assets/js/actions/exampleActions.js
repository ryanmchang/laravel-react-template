import axios from "axios";

export function sendExampleAction(){
    return {
        type: 'EXAMPLE_ACTION',
        payload: axios.get("/api/example")
    }
}

export function resetStore(){
    return {
        type: 'STORE::RESET'
    }
}