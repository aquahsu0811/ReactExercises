import { Route, Switch, Redirect } from "react-router-dom";
import AllQuotest from "./pages/AllQuotes";
import NewQuotest from "./pages/NewQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import NotFound from "./pages/NotFound";
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

        <Route path='*'>
          <NotFound></NotFound>
        </Route>

      </Switch>
    </Layout>
  );
}

export default App;
