import { RouterContext } from 'next/dist/shared/lib/router-context'
import GlobalStyles from '../src/styles/global'

import * as nextImage from 'next/image'

// This is needed to use next/image
/* eslint-disable */
Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => <img {...props} />
})

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider
  }
}

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  )
]
