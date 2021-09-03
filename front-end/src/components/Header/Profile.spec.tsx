import { render } from '@testing-library/react'
import React from 'react'
import { Profile } from './Profile'


jest.mock("next/router", () => {
    return {
        useRouter() {
            return {
                asPath: "/"
            }
        }
    }
})

describe("Profile", () => {
    it('Renderizando Profile', () => {
        const { getByText } = render(
            <Profile />
        )

        expect(getByText("Arthur Bernardo")).toBeInTheDocument()
        expect(getByText("Contato.arthurbernardoas@gmail.com")).toBeInTheDocument()
    })
})