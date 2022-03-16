import { UserAccountProps } from "../types/basic-types"

export const UserAccount = (props: UserAccountProps) => {
    return(
        <div>{props.children}</div>
    )
}