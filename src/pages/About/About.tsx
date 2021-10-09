import { FC } from 'react'

const About: FC = () => {
  var hostName = window.location.host
  return <div>Hello {hostName}</div>
}

export default About
