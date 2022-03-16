import { UserInfoProps } from "../types/basic-types";
import { UserAccount } from "./user-account";
import { UserPaymentInfo } from "./user-payment-info";

export const UserInfo = (props: UserInfoProps) => {
    return (
        <div>
            {props.isAuthenticate ? (
                <p>
                    <p>Authentication completed..</p>
                    {props.userRoles.map(role => {
                        return (
                            <p>
                                <p>{role.id}</p>
                                <p>{role.name}</p>
                            </p>
                        )
                    })}
                    <UserAccount>
                        <p>
                            <UserPaymentInfo status={'Paid'} />
                        </p>
                    </UserAccount>
                </p>
            ) : (
                <p>Please log into the system</p>
            )}
        </div>
    );
}

