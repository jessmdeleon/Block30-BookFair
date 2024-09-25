/* TODO - add your code to create a functional React component that renders account details for a logged in user. 
Fetch the account data from the provided API. 
You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */

import React, { useState, useEffect } from "react";

function Account() {
  const [account, setAccount] = useState(null); // account is an object
  const [loading, setLoading] = useState(true); // loading is a boolean
  const [error, setError] = useState(null); // error is a string
  const API_URL =
    "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me"; // API_URL is a string

  useEffect(() => {
    // useEffect hook is used to fetch account data from the API
    const fetchAccount = async () => {
      // fetchAccount is an async function
      try {
        // try block is used to handle errors
        const token = ""; // token is an empty string
        const response = await fetch(API_URL, {
          // fetch account data from the API

          headers: {
            // headers are used to set the content type and authorization
            "Content-Type": "application/json", // content type is set to application/json
            Authorization: `Bearer ${token}`, // authorization is set to Bearer token
          }, // end of headers
        }); // end of fetch
        setAccount(response.data); // set account data to the response data
      } catch (error) {
        // catch block is used to handle errors
        setError("Failed to fetch account data"); // set error message
      } finally {
        // finally block is used to set loading to false
        setLoading(false); // set loading to false
      } // end of finally
    }; // end of fetchAccount
    fetchAccount(); // call fetchAccount function
  }, []); // end of useEffect

  // render account details
  return (
    <div className="account">
      {/* display loading message */}
      {loading && <p>Loading...</p>}
      {/* display error message */}
      {error && <p>{error}</p>}
      {/*  display account details */}
      {account && (
        <div>
          <h2>Account Details</h2>
          <p>ID: {account.ID}</p>
          <p>Username: {account.username}</p>
          <p>Email: {account.email}</p>
          {account.books &&
            account.books.length > 0 && ( // check if user has books
              <div>
                <h3>Books</h3>
                <ul>
                  {account.books.map(
                    (
                      book // display user's books
                    ) => (
                      <li key={book.ID}>{book.title}</li>
                    )
                  )}
                </ul>
              </div>
            )}
        </div>
      )}
    </div>
  );
}

export default Account;
