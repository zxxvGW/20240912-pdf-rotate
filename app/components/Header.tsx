import Link from "next/link"
import styled from "styled-components"
import { Logo } from "./Logo"
import {
	Dispatch,
	MutableRefObject,
	SetStateAction,
	useEffect,
	useRef,
	useState,
} from "react"

const Container = styled.div`
	display: block;
	width: 100%;
	position: relative;
`

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 100%;
	margin: 0 auto;
	padding: 10px;
`

const Section = styled.div`
	* {
		display: flex;
		align-items: center;
	}
`

const LogoContainer = styled.a`
	padding: 10px;
	font-weight: 700;
	font-size: 20px;
	font-family: var(--serif);
`

const Links = styled.div`
	justify-content: flex-end;

	a {
		padding: 10px;
		font-weight: 500;
		font-size: 15px;
	}
`

const LINKS = [
	{ label: "Pricing", href: "/pricing" },
	{ label: "Chrome extension", href: "/chrome-extension" },
	{ label: "Use cases", href: "/use-cases" },
	{ label: "Get started →", href: "/auth/sign-in" },
]

export function Header() {
	const [open, setOpen] = useState(false)
	const menuRef = useRef<HTMLDivElement | null>(null)
	useOutsideClick({ ref: menuRef, open, setOpen })

	return (
		<Container ref={menuRef}>
			<Wrapper>
				<Section>
					<LogoContainer href="/">
						<Logo fill="black" />
						PDF.ai
					</LogoContainer>
				</Section>
				<Section className="hide-mobile">
					<Links>
						{LINKS.map((link, i) => {
							return (
								<Link href={link.href} key={i} className="hover:underline">
									{link.label}
								</Link>
							)
						})}
					</Links>
				</Section>
			</Wrapper>
		</Container>
	)
}

interface UseOutsideClickProps {
	ref: MutableRefObject<HTMLDivElement | null>
	open: boolean
	setOpen: Dispatch<SetStateAction<boolean>>
}

function useOutsideClick({ ref, open, setOpen }: UseOutsideClickProps) {
	useEffect(() => {
		function handleClick(e: MouseEvent) {
			if (ref.current && !ref.current.contains(e.target as Node | null)) {
				setOpen(false)
			}
		}
		if (open) {
			document.addEventListener("click", handleClick)
		}

		return () => document.removeEventListener("click", handleClick)
	}, [ref, open, setOpen])
}
