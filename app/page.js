import "./globals.css";
import Table from "../components/graph";

async function startingFetch() {

  const respons = await fetch("https://651e69aa44a3a8aa47684b6e.mockapi.io/monthes/array")

  return respons.json()

}

export default async function home() {
  const fetchsData = await startingFetch()
  const dataShet = fetchsData[0].finance.periods[0].graph
  return (
    <>
      <Table data={dataShet} />
    </>
  )
}
