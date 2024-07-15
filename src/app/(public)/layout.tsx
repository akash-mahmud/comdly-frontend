import PublicApolloClient from '@/providers/PublicApolloClient'
import React, { ReactNode } from 'react'

export default function layout({children}:{children:ReactNode}) {
  return (
<>
<PublicApolloClient>
{children}
</PublicApolloClient>

</>
  )
}
