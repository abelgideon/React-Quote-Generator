import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { thunk } from "redux-thunk";

// Redux actions and reducer
const GETQUOTE = "GET QUOTE";
const getQuote = (data) => ({ type: GETQUOTE, data });

const quoteReducer = (state = {}, action) => {
  switch (action.type) {
    case GETQUOTE:
      return action.data;
    default:
      return state;
  }
};

const fetchQuote = () => {
  return async function (dispatch) {
    try {
      let res = await fetch("https://quotes-api-self.vercel.app/quote");
      let data = await res.json();
      dispatch(getQuote(data));
    } catch (err) {
      console.log(err);
    }
  };
};

// Redux store
const store = createStore(quoteReducer, applyMiddleware(thunk));

// React components
const App = () => {
  return (
    <div className="container bg-dark">
      <div id="quote-box" className="row text-center align-items-center">
        <div className="col-sm-12">
          <Title title="Random Quote Generator" />
          <ConnectedQuote />
        </div>
      </div>
    </div>
  );
};

const Title = (props) => <p className="display-4 text-light mb-5">{props.title}</p>;

const Quote = ({ quote, fetchQuote }) => {
  useEffect(() => {
    fetchQuote();
  }, [fetchQuote]);

  const tweetText = encodeURIComponent(`"${quote.quote}"\n\n- ${quote.author}`);
  const tweet = `https://twitter.com/intent/tweet?text=${tweetText}`;

  return (
    <>
      <p id="text" className="h2 text-light">
        <span className="quotations">❝ </span>
        {quote.quote || "Click the 'New quote' button to get a random quote"}
      </p>
      <p id="author" className="h7 text-light mb-5">
        {quote.author ? `- ${quote.author}` : ""}
      </p>
      <div class="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3">
        <TweetBtn tweet={tweet} />
        <NewQuote fetchQuote={fetchQuote} />
      </div>
    </>
  );
};

const TweetBtn = ({ tweet }) => (
  <a target="_blank" className="btn btn-info btn-lg" id="tweet-quote" href={tweet}>
    Tweet
  </a>
);

const NewQuote = (props) => (
  <button id="new-quote" className="btn btn-primary btn-lg" onClick={props.fetchQuote}>
    New quote
  </button>
);

// Map Redux state to React props
const mapStateToProps = (state) => ({
  quote: state,
});

const mapDispatchToProps = (dispatch) => ({
  fetchQuote: () => dispatch(fetchQuote()),
});

const ConnectedQuote = connect(mapStateToProps, mapDispatchToProps)(Quote);

// Render the React app with Redux store
const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;