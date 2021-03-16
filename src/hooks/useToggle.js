import {useState} from "react";

export default (initialValue=true) => {
    const [value,setValue] = useState(initialValue);

    const toggle = ()=>{
        setValue(!value);
    }

    return [value,toggle];
}