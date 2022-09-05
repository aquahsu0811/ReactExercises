import { useEffect } from 'react';

import QuoteList from '../components/quotes/QuoteList';
import useHttp from '../components/hooks/use-http';
import { getAllQuotes } from '../components/lib/api';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import NoQuotesFound from '../components/quotes/NoQuotesFound';

// const DUMMY_QUOTES =[
//   {id:'q1', author:'Max', text:'Learning React is fun!'},
//   {id:'q2', author:'Mary', text:'Learning Vuejs is fun!'},
// ];

const AllQuotest =()=>{
  const{ sendRequest, status, data: loadedQuoted, error } = useHttp(getAllQuotes, true);

  useEffect(()=>{
    sendRequest();
  }, [sendRequest]);

  if(status === 'pending'){
    return <div className='centered'>
      <LoadingSpinner />
    </div>
  }

  if(error){
    return <p className='centered focused'>{error}</p>
  }

  if(status === 'completed' && (!loadedQuoted || loadedQuoted.length===0)){
    return <NoQuotesFound />
  }

  return(
    <QuoteList quotes={loadedQuoted}/>
  );
};

export default AllQuotest;