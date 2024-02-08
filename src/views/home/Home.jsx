import Title, { TitleH4 } from '../../components/common/Title'
import { Section } from '../../components/layout/Container'
import Layout from '../../components/layout/Layout'
import { Button, ButtonGroup, Container } from '@chakra-ui/react'
import MainSlide from './components/MainSlide'

const Home = () => {
  return (
    <>
      <MainSlide/>
      <Section isLightBackground={true}>
        <Container>
          <Title>회사소개</Title>
          <TitleH4>사장님 말씀</TitleH4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, dolores impedit? Sunt omnis dolores quaerat. In ipsa odio sequi aliquid error eius laudantium, blanditiis, quasi, labore unde exercitationem facilis culpa!
          <TitleH4>회사 정보 뭐시기</TitleH4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Container>
      </Section>
      <Section>
        <Container>
          <Title>회사비전</Title>
          <TitleH4>우리 회사 비전 짱임</TitleH4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, dolores impedit? Sunt omnis dolores quaerat. In ipsa odio sequi aliquid error eius laudantium, blanditiis, quasi, labore unde exercitationem facilis culpa!
        </Container>
      </Section>
      <Section isLightBackground={true}>
        <Container>
          <Title>회사 소개</Title>
          <TitleH4>사장님 말씀</TitleH4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore qui magnam assumenda, adipisci iste
          sint provident tempore mollitia. Deserunt labore ipsa quod odit dolore animi repudiandae vero
          dolorum delectus similique?
          <TitleH4>사모님 말씀</TitleH4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore qui magnam assumenda, adipisci iste
          sint
        </Container>
      </Section>
    </>
  )
}

export default Home