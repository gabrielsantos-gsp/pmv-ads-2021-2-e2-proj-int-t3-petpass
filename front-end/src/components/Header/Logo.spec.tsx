import { render } from '@testing-library/react'
import React from 'react'
import { Logo } from './Logo'


jest.mock("next/router", () => {
    return {
        useRouter() {
            return {
                asPath: "/"
            }
        }
    }
})

describe("Logo", () => {
    it('Renderizando Logo', () => {
        const { getByText } = render(
            <Logo />
        )

        expect(getByText("PetPass")).toBeInTheDocument()
    })
})