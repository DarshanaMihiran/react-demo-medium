import React, { CSSProperties } from "react"

export type WelcomeMessageProps = {
    firstname: string
}

export type UserInfoProps = {
    isAuthenticate: boolean
    userRoles: UserRoles[]
}

export type UserRoles = {
    id: number
    name: string
}

export type UserPaymentInfoProps = {
    status: 'Pending' | 'Not Paid' | 'Paid'
}

export type UserAccountProps = {
    children: React.ReactNode
}

export type UserProps = {
    id: number
    name: string
    age?: number
}

export type SimpleButtonProps = {
    handleClick: (event : React.MouseEvent<HTMLButtonElement>, index: number) => void
}

export type CustomCssContainerProps = {
    styles: CSSProperties
}