import QuoteList from '../quotes/QuoteList';

const DUMMY_QUOTES =[
  {id:'q1', author:'Max', text:'Learning React is fun!'},
  {id:'q2', author:'Mary', text:'Learning Vuejs is fun!'},
];

const AllQuotest =()=>{
  return(
    <QuoteList quotes={DUMMY_QUOTES}/>
  );
};

export default AllQuotest;