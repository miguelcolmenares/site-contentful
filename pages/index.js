import Page from '../layouts/base'

import {
  Title,
  Spacer,
  Wrap,
  OppositeWrap,
  Content,
  Container
} from '../components/Home/styled-components'

const Index = (props) => {
  return (
    <Page
      title='Jepser Bernardino | product engineer from Guatemala 🇬🇹'
      description='Software engineer with 8 years of experience in web technologies. Currently product engineering at Badi. Teaching coding at CodeOp. Previously doing Frontend at Typeform.'
    >
      <Wrap>
        <Container>
          <Content>
            <Title>Hi, I am Jepser Bernardino.</Title>
            <Title>Software engineer from Guatemala.</Title>
            <Title>I craft high-detailed & performant <br/>web apps  using the latest technologies.</Title>
            <Title>I have collaborated with: <br />Saatchi & Saatchi, BBDO, Taco Bell & Starmedia.</Title>
            <Spacer />
          </Content>
        </Container>
      </Wrap>
      <OppositeWrap>
        <Container>
          <Content>
            <Title>Co-founder of <a href='https://royalestudios.com'>royalestudios</a>.</Title>
            <Title>Currently, I live in Barcelona 🏖. </Title>
            <Title>Teaching coding at <a href="https://codeop.tech/">CodeOp</a>.</Title>
            <Title>Product engineer at <a href='https://badi.com'>Badi.</a></Title>
            <Title>Previously at <a href='https://www.typeform.com'>Typeform.</a></Title>
          </Content>
        </Container>
      </OppositeWrap>
      <Wrap>
        <Container>
          <Content>
            <Title>I developed a tracking tool for web-apps <a href='https://dev.to/jepser/hello-treacker-a-tracking-library-for-react-59bd'>meet Treacker</a>. </Title>
            <Title>I created the first <a href='https://www.typeform.com/blog/human-experience/cui/'>conversational article</a> in the world. </Title>
            <Title>Launched <a href='https://labs.typeform.com/cui/'>a product</a> that creates a better data collection experience.</Title>
            <Title>Developed an <a href='http://spotify-youtube.jepser.com'>application</a> that converts playlist from Spotify to Youtube.</Title>
            <Title>Integrated WooCommerce and Credomatic by <a href='http://jepser.com/labs/woocommerce-credomatic/'>creating a plugin</a> that makes possible online payments in Central America.</Title>
          </Content>
        </Container>
      </Wrap>
    </Page>
  )
}

export default Index
