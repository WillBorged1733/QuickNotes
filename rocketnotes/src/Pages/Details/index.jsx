import { Container } from "./styles"
import { Button } from "../../components/Button"


export function Details () {
  return (
    <Container>
      <h1>Hello World</h1>
      <p>Ayhamyza</p>
      <Button title = "login" loading/>
      <Button title = "cadastrar"/>
      <Button title = "voltar"/>
    </Container>
  )
}