import { render } from '@testing-library/react'
import React from 'react'
import { RedesSociais } from './RedesSociais'


jest.mock("next/router", () => {
    return {
        useRouter() {
            return {
                asPath: "/"
            }
        }
    }
})

describe("RedesSociais", () => {
    it('Renderizando RedesSociais', () => {
        const { getByText } = render(
            <RedesSociais />
        )
    })
})