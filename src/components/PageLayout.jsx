import { Outlet } from "react-router-dom"
import Header from "./Header"
import Sidebar from "./Sidebar"
import { styled } from "styled-components"

const Container = styled.div`
   display: grid;
   grid-template-columns: 23rem 1fr;
   grid-template-rows: auto 1fr;
   /* min-height: 100vh; */
`

const PageLayout = () => {
  return (
     <Container>
        <Sidebar />
        <Header /> 
        <main>
           <Outlet />
        </main>
    </Container>
  )
}

export default PageLayout