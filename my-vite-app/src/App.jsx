

import Header from "./Components/Header"
import { Balance } from "./Components/Balance"
import TransactionList from "./Components/TransactionList"
import AddTransactions from "./Components/AddTransactions"
import { Layout } from "./Components/Layout"


function App() {


  return (
    <Layout>
      <Header />
      <Balance />
      <TransactionList />
      <AddTransactions />
    </Layout>
  )
}

export default App
