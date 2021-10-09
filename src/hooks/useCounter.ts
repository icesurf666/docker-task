export const useCounter = () => {
  const counter = Number(localStorage.getItem('counter')) || Number(process.env.REACT_APP_COUNTER_DEFAULT) || 0
  const incrementCounter = () => localStorage.setItem('counter', String(counter + 1))
  return { counter, incrementCounter }
}
