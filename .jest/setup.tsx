import '@testing-library/jest-dom'
import 'jest-styled-components'

// Fix next img in test env
/* eslint-disable */
jest.mock("next/image", () => ({ src, alt }) => <img src={src} alt={alt} />)
