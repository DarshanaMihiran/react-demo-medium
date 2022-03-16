import { UserPaymentInfoProps } from "../types/basic-types";

export const UserPaymentInfo = (props: UserPaymentInfoProps) => {
    let message: string;
    let errorMsg: string = 'Please do the payments.';
    let sucessMsg: string = 'Payment is suceeded.'
    message= (props.status == 'Pending' || 'Not Paid') ? errorMsg : sucessMsg;

    return(
        <p>{message}</p>
    )
}