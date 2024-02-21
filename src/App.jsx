import { useState } from 'react'
import './App.css'

import PopUpExit from './components/popup/popexit/PopExit.jsx'
import PopUpNewCard from './components/popup/popnewcard/PopNewCard.jsx'
import PopUpBrowse from './components/popup/popbrowse/PopBrowse.jsx'
import Header from './components/Header/Header.jsx'
import MainColumn from './components/MainColumn/MainColumn.jsx'
import MainContent from './components/MainContent/MainContent.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="wrapper"><h1></h1>
        {/*<!-- pop-up start-->*/}

        <PopUpExit />
        <PopUpNewCard />
        <PopUpBrowse />
        {/*<!-- pop-up end-->*/}

        <Header />

        <MainContent>
          <MainColumn title={"Новый статус"} />
          <MainColumn title={"Нужно сделать"} />
          <MainColumn title={"В работе"} />
          <MainColumn title={"Тестирование"} />
          <MainColumn title={"Готово"} />
        </MainContent>
      </div>
      <script src="js/script.js"></script>
    </>

  )

}

export default App