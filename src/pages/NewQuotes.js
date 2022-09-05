import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../components/hooks/use-http";
import { addQuote } from "../components/lib/api";

const NewQuotest =()=>{
  const {sendRequest, status} = useHttp(addQuote);
  const history =useHistory();

  useEffect(()=>{
    if(status === 'completed'){
      history.push('/quotes');
    }
  },[status, history])

  const  addQuoteHandler=(quoteData)=>{
    console.log(quoteData);
    sendRequest(quoteData);
    //history.push('/quotes');
  };

  return(
    
    <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler}></QuoteForm>
  );
};

export default NewQuotest;