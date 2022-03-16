import { SimpleButtonProps } from "../types/basic-types";

export const SimpleButton = (props: SimpleButtonProps) => {
    const index = 1;

    return <button onClick={(event) => props.handleClick(event, index)}>Submit</button>
}

