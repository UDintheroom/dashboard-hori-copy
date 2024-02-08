import { Heading } from "@chakra-ui/react"

const Title = (props) => {
  return (
    <Heading as={'h3'} my={30} fontSize={30} color={'#A86AFF'} fontWeight={700}>
      {props.children}
    </Heading>
  )
}

export const TitleH4 = (props) => {
  return (
    <Heading as={'h4'} my={4} fontSize={20} color={'#BF9EEE'} fontWeight={700}>
      {props.children}
    </Heading>
  )
}

export default Title