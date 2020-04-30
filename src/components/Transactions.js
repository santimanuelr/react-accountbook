// src/components/contacts.js

import React from "react";

const Transactions = ({ transactions }) => {
  return (
    <div>
      <center>
        <h1>Transactions you did</h1>
      </center>
      {transactions &&
        transactions.map(transaction => (
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{transaction.id}</h5>
              <h6 class="card-subtitle mb-2 text-muted">
                {transaction.amount}
              </h6>
              <p class="card-text">{transaction.type}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Transactions;
