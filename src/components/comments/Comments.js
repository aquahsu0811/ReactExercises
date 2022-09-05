import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { getAllComments } from "../lib/api";
import useHttp from "../hooks/use-http";
import LoadingSpinner from "../UI/LoadingSpinner";
import NewCommentForm from "./NewCommentForm";
import CommentsList from "./CommentsList";

import classes from "./Comments.module.css";

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);

  const params = useParams();
  const { quoteId } = params;

  const { sendRequest, status, data:loadedComments } = useHttp(getAllComments);

  useEffect(()=>{
    sendRequest(quoteId);
  }, [quoteId, sendRequest]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const onAddedCommentHandler = useCallback(() => {
    sendRequest(quoteId);
  }, [quoteId, sendRequest]);

  let comments;

  if(status === 'pending'){
    comments = <div className="centered"> <LoadingSpinner/></div>
  }

  if(status === 'completed' && (loadedComments && loadedComments.length > 0)){
    comments = <CommentsList comments={loadedComments} />
  }

  if(status === 'completed' && (!loadedComments || loadedComments.length === 0)){
    comments = <p className="centered"> No comment were add yet.</p>
  }
  console.log("para:", params.quoteId);
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm
          quoteId={quoteId}
          onAddedComment={onAddedCommentHandler}
        />
      )}
      {comments}
    </section>
  );
};

export default Comments;
