import React from 'react'
import { Header,Content,Footer } from './func-components'
import Calender from './class-components'

function App() {
  //แบบที่ 1 กำหนดฟังก์ชันทั้งหมดที่จะแสดงในแบบอาเรย์
  return(
    <>
    <Header/>
    <p><center><Calender/></center></p>
    <Content/>
    <Footer/>
    </>
  )
  }
  export default App;


