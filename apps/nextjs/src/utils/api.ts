import { createTRPCReact } from '@trpc/react-query'

import type { AppRouter } from '@doodleblab/api'

export const api = createTRPCReact<AppRouter>()

export { type RouterInputs, type RouterOutputs } from '@doodleblab/api'
