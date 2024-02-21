import Card from './components/Card/Card'

export default function MainColumn ({ title }) {
  return (
    <div class="main__column column">
      <div class="column__title">
        <p>{title}</p>
      </div>
      <div class="cards">
        <Card StatusTask={"Web Design"} NameTask={"Задача №1"} />
        <Card StatusTask={"Web Design"} NameTask={"Задача №2"} />
        <Card StatusTask={"Research"} NameTask={"Задача №3"} />
        <Card StatusTask={"Copywriting"} NameTask={"Задача №4"} />
        <Card StatusTask={"Web Design"} NameTask={"Задача №5"} />
      </div>
    </div>
  )
}