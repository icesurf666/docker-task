import { useCounter } from 'hooks'
import { FC } from 'react'

const Counter: FC = () => {
  const { counter } = useCounter()
  return <div>{counter}</div>
}

export default Counter
