import { UserInfoProps, UserRoles, WelcomeMessageProps } from "../types/basic-types"
import { CustomCssContainer } from "./custom-css-container";
import { SimpleButton } from "./simple-button";
import { UserInfo } from "./user-info";

export const WelcomeMessage = (props: WelcomeMessageProps) => {
    const userRoles: UserRoles[] = [{ id: 1, name: 'admin' }, { id: 2, name: 'hr manager' }, { id: 3, name: 'project manager' }];
    const userInfo: UserInfoProps = {
        isAuthenticate: true,
        userRoles: userRoles
    }

    return (
        <>
            <div>
                <p>Welcome to the application {props.firstname}</p>
                <UserInfo isAuthenticate={true} userRoles={userRoles} />
            </div>

            <div>
                <SimpleButton handleClick={(event, index) => {
                    console.log (`Simple Button is sumitted for index: ${index}` ,event)
                }} />
            </div>

            <CustomCssContainer styles={{padding: '2px', textAlign: 'right'}}/>
        </>
    )
}

