import { ButtonHTMLAttributes, ReactNode } from "react"
import styled from "styled-components"

type ButtonElement = {
	width?: string
	textColor?: string
	backgroundColor?: string
}

const ButtonElement = styled.button<ButtonElement>`
	display: flex;
	justify-content: center;
	align-items: center;
	appearance: none;
	position: relative;
	cursor: pointer;
	text-align: center;
	line-height: normal;
	white-space: nowrap;
	margin: 0;
	padding: 10px 12px;
	width: ${props => props.width ?? "100%"};
	color: ${props => props.textColor ?? "#fff"};
	background: ${props => props.backgroundColor ?? "#ff612f"};
	font-family: var(--sans);
	font-weight: 500;
	font-style: normal;
	font-size: 16px;
	border-radius: 4px;
	border: none;

	&:disabled {
		cursor: not-allowed;
		opacity: 0.7;
	}
`

export type NativeButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export type CustomButtonProps = {
	loading?: boolean
	width?: string
	textColor?: string
	backgroundColor?: string
	leftIcon?: string
	rightIcon?: string
	children?: ReactNode
}

export type ButtonProps = CustomButtonProps & NativeButtonProps

export const Button = (props: ButtonProps) => {
	const { textColor, backgroundColor, children, ...rest } = props

	return (
		<ButtonElement
			backgroundColor={backgroundColor}
			textColor={textColor}
			{...rest}
		>
			{children}
		</ButtonElement>
	)
}
