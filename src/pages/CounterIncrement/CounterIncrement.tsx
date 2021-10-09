import { useCounter } from 'hooks'
import { useEffect } from 'react'
import { FC } from 'react'

const CounterIncrement: FC = () => {
  const { counter, incrementCounter } = useCounter()

  useEffect(() => {
    incrementCounter()
  }, [incrementCounter])

  return <div>{counter}</div>
}

export default CounterIncrement
