import { Route, Switch, Redirect } from "react-router-dom";
import AllQuotest from "./components/pages/AllQuotes";
import NewQuotest from "./components/pages/NewQuotes";
import QuoteDetail from "./components/pages/QuoteDetail";
import Layout from "./components/layout/Layout";
function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact> 
          <Redirect to="/quotes"/>
        </Route>

        <Route path='/quotes' exact>
          <AllQuotest></AllQuotest>
        </Route>

        <Route path='/quotes/:quoteId'>
          <QuoteDetail></QuoteDetail>
        </Route>

        <Route path='/new-quote'>
          <NewQuotest></NewQuotest>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
