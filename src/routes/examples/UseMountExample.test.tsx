import { render, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'

import UseMountExample from './UseMountExample'

it('UseMountExample', async () => {
  const { getByText } = render(<UseMountExample />, { wrapper: MemoryRouter })
  const toggleButton = getByText('Mount') as HTMLButtonElement

  fireEvent.click(toggleButton)

  const beforeMessage = getByText(/1초 후에 메시지가 바뀝니다./)
  expect(beforeMessage).toBeInTheDocument()

  await waitFor(
    () => {
      const afterMessage = getByText(/메시지가 마운트되었습니다!/)
      expect(afterMessage).toBeInTheDocument()
    },
    { timeout: 2000 }
  )
})
