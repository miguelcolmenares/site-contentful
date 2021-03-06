import { Component } from 'react'
import styled, { css, ThemeProvider } from 'styled-components'
import Page from '../../layouts/base'
import Content from '../../components/Content'
import { ArticleTitle } from '../../components/Labs'
import { Pre } from '../../components/MarkDown/styled-components'

const Form = styled.form`
`

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 0;
  font-size: 18px;
`

const InputWrap = styled.div`
  padding: 25px;
  background: #333;
`

const CopyText = styled.div``

const CopyButton = styled.button`
  font-size: 16px;
  padding: 5px 20px;
  border: 2px solid;
  ${props => (props.copied ? css`
    background: #333;
    color: white;
  ` : '')}
  
`

const CopyHidden = styled.textarea`
  position: absolute;
  left: -9999px;
`
class Index extends Component {
  constructor (props) {
    super(props)

    this.state = {
      oldUrl: '',
      newUrl: '',
      copied: false
    }

    this.textArea = ''
    this.hiddenTextarea = ''

    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.copyText = this.copyText.bind(this)
  }

  handleKeyUp (ev) {
    const fieldName = ev.target.getAttribute('name')

    this.setState({
      [fieldName]: ev.target.value
    })
  }

  copyText () {
    const code = this.textArea.innerText
    this.hiddenTextarea.value = code
    const copyTextarea = this.hiddenTextarea
    copyTextarea.select()

    try {
      document.execCommand('copy')

      this.setState({
        copied: true
      })

      setTimeout(() => {
        this.setState({
          copied: false
        })
      }, 1000)
    } catch (err) {
      console.log('Oops, unable to copy')
    }
  }

  get oldUrl () {
    return this.state.oldUrl || 'http://www.oldurl'
  }

  get newUrl () {
    return this.state.newUrl || 'http://www.newurl'
  }

  render () {
    const theme = {
      color: '#333'
    }
    return (
      <ThemeProvider theme={theme}>
        <Page title={`Jepser Bernardino | Script de migración para WordPress`}>
          <ArticleTitle>
            Script de Migración para WordPress
          </ArticleTitle>
          <Content>
            <p>Usa este script para:</p>
            <ul>
              <li>
                Crear un sitio en tu máquina local y necesitas publicar el sitio en producción.
              </li>
              <li>Migras tu sitio web de abc.com a xyz.com</li>
            </ul>
            <h2>A migrar nuestro WordPress</h2>
            <Form onSubmit={e => e.preventDefault()}>
              <h4>1. Agrega la url actual de sitio web.</h4>
              <InputWrap>
                <Input
                  onKeyUp={this.handleKeyUp}
                  name='oldUrl'
                  type='url'
                  placeholder='http://urlvieja.com'
                />
              </InputWrap>
              <h4>2. Agrega la url a donde migrarás tu sitio web.</h4>
              <InputWrap>
                <Input
                  onKeyUp={this.handleKeyUp}
                  name='newUrl'
                  type='url'
                  placeholder='http://urlnueva.com'
                />
              </InputWrap>
              <h4>2. Copia este código</h4>
              <CopyText>
                <Pre innerRef={textarea => (this.textArea = textarea)}>
                  UPDATE wp_options SET option_value = replace(option_value, '
                  {this.oldUrl}
                  ', '
                  {this.newUrl}
                  ') WHERE option_name = 'home' OR option_name = 'siteurl';
                  <br />
                  UPDATE wp_posts SET guid = replace(guid, '
                  {this.oldUrl}
                  ','
                  {this.newUrl}
                  ');
                  <br />
                  UPDATE wp_posts SET post_content = replace(post_content, '
                  {this.oldUrl}
                  ', '
                  {this.newUrl}
                  ');
                  <br />
                  UPDATE wp_postmeta SET meta_value = replace(meta_value,'
                  {this.oldUrl}
                  ','
                  {this.newUrl}
                  ');
                  <br />
                </Pre>
                <CopyButton onClick={this.copyText} copied={this.state.copied}>
                  {this.state.copied ? 'Copiado!' : 'Copiar'}
                </CopyButton>
              </CopyText>
            </Form>
            <CopyHidden
              innerRef={textarea => (this.hiddenTextarea = textarea)}
            />
            <h4>
              3. Ve a to PHPMyAdmin (normalmente está en
              {' '}
              <a href='http://localhost/phpmyadmin/'>
                http://localhost/phpmyadmin/
              </a>
              )
            </h4>
            <h4>4. Selecciona la base de datos del sitio que quieres migrar</h4>
            <h4>5. Ve a la Tab de SQL, pega el código y preciona "Go"</h4>
            <img src='/migration-script/phpmyadmin.jpg' />
            <h4>
              6. Si tu base de datos está en local, exporta la base de datos, la importas en el sitio en producción y listo!
            </h4>
          </Content>
        </Page>
      </ThemeProvider>
    )
  }
}

export default Index
