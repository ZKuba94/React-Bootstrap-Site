import {useState} from "react";

export const useBoolean = (initialState = false) => {
    const [show,setShow] = useState(initialState);
    const close = () => setShow(false);
    const open = () => setShow(true);

    return [show, open, close]
}