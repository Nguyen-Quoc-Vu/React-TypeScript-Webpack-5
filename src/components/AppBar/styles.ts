import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.btnBackground};
  min-width: 100vw;
  height: 3em;
  color: white;
`
export { Container }
