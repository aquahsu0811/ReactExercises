import { Fragment, useEffect } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";

import HighLightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';
import useHttp from "../components/hooks/use-http";
import { getSingleQuote } from "../components/lib/api";
import LoadingSpinner from '../components/UI/LoadingSpinner';

// const DUMMY_QUOTES =[
//   {id:'q1', author:'Max', text:'Learning React is fun!'},
//   {id:'q2', author:'Mary', text:'Learning Vuejs is fun!'},
// ];

const QuoteDetail =()=>{
  const params = useParams();
  const match = useRouteMatch();

  const{ sendRequest, status, data: loadedQuoted, error } = useHttp(getSingleQuote, true);

  useEffect(()=>{
    sendRequest(params.quoteId);
  },[sendRequest, params.quoteId]);

  if(status === 'pending'){
    return <div className='centered'>
      <LoadingSpinner />
    </div>
  }

  if(error){
    return <p className='centered focused'>{error}</p>
  }

  //const quote = DUMMY_QUOTES.find((q)=> q.id === params.quoteId );

  if(!loadedQuoted){
    return <p> No quote find.</p>
  }

  console.log("path:", match.path);
  console.log("url",match.url);

  return(
    <Fragment>
      <HighLightedQuote author={loadedQuoted.author} text={loadedQuoted.text}/>
      <Route path={match.path} exact>
        <div className='centered'>
          <Link className='btn--flat' to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;