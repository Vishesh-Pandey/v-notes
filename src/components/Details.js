import React from "react";

function Details(props) {
  return (
    <div className="row bg-secondary bg-opacity-25 rounded p-5">
      <div className="col-md-6 text-center">
        <img
          className="w-25 py-3"
          src="https://lh3.googleusercontent.com/WtFy33_FQYsE41cmmVKApHPDj3QWZWdvnjsivuE7jkZkWEWfbdCY6nBM0Kblxch6-w2JUWMTxciBnayg2opkNFo=w1280"
          alt="userIcon"
        />
        <h1>WELCOME {props.account.toUpperCase()}</h1>
      </div>
      <div className="col-md-6">
        <div className="row py-3">
          <div className="col-8 text-center">
            <h2>YOUR DETAILS</h2>
          </div>
          <div className="col-4 text-center">
            <button onClick={props.fetchDetails} className="btn btn-secondary">
              Refresh
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <table class="table table-secondary table-hover rounded">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">USERNAME </th>
                  <th scope="col">{props.account}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>NOTES COUNT</td>
                  <td>{props.details[0].notes_count}</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>NOTES CREATED </td>
                  <td>{props.details[0].notes_created}</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>NOTES DELETED</td>
                  <td>{props.details[0].notes_deleted}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
