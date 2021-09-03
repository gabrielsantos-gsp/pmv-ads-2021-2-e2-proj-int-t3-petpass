import { render } from '@testing-library/react'
import React from 'react'
import { HeaderHome } from '.'

jest.mock("next/router", () => {
    return {
        useRouter() {
            return {
                asPath: "/"
            }
        }
    }
})

describe("HeaderHome component", () => {
    it('Renderizando HeaderHome', () => {
        const { getByText } = render(
            <HeaderHome />
        )

        expect(getByText("PetPass")).toBeInTheDocument()
        expect(getByText("Login")).toBeInTheDocument()
        expect(getByText("Registrar")).toBeInTheDocument()
    })
})