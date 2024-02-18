import { useState } from 'react'
import './App.css'
import PopUpExit from './components/popup/PopUpExit.jsx'
import PopUpNewCard from './components/popup/PopUpExit.jsx'
import PopUpBrowse from './components/popup/PopUpExit.jsx'
import Header from './components/header/Header.jsx'
import ColumnNoStatus from './components/main/column/ColumnNoStatus.jsx'
import ColumnNeedDone from './components/main/column/ColumnNeedDone.jsx'
import ColumnInJob from './components/main/column/ColumnInJob.jsx'
import ColumnInTesting from './components/main/column/ColumnInTesting.jsx'
import ColumnWellDone from './components/main/column/ColumnWellDone.jsx'


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

        <main className="main">
          <div className="container">
            <div className="main__block">
              <div className="main__content">

                <ColumnNoStatus StatusCard={"Без статуса"} />

                <ColumnNeedDone StatusCard={"Нужно сделать"} />

                <ColumnInJob StatusCard={"В работе"} />

                <ColumnInTesting StatusCard={"Тестирование"} />

                <ColumnWellDone StatusCard={"Готово"} />

              </div>
            </div>
          </div>
        </main>

      </div>
      <script src="js/script.js"></script>
    </>

  )

}

export default App