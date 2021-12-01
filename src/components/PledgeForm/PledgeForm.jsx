import React, { useState } from "react";
import { useParams } from "react-router";
import "./PledgeForm.css";

const PledgeForm = () => {
  const { id } = useParams();
  const [pledgeData, setPledgeData] = useState({
    amount: "0",
    comment: "",
    anonymous: "false",
    project_id: id,
  });

  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    setPledgeData({
      ...pledgeData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePledgeSubmit = (e) => {
    e.preventDefault();
    const token = window.localStorage.getItem("token");

    fetch(`${process.env.REACT_APP_API_URL}pledges/`, {
      method: "POST",
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pledgeData),
    }).then((response) => {
      setSubmitMessage("Thank you for supporting this project.");
      return response.json();
    });
  };

  return (
    <div className="pledge-form">
      <form>
        <div>
          <input
            name="amount"
            type="text"
            id="amount"
            placeholder="Amount"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            name="comment"
            type="text"
            id="comment"
            placeholder="Comment"
            onChange={handleChange}
          />
        </div>
        {/* <div>
          <input
            name="project_id"
            type="text"
            id="project_id"
            placeholder="Project ID"
            onChange={handleChange}
          />
        </div> */}
        <div>
          <button className="btn" type="submit" onClick={handlePledgeSubmit}>
            Donate now
          </button>
        </div>
        <div>{submitMessage}</div>
      </form>
      <h3>Recent donations</h3>
    </div>
  );
};

export default PledgeForm;
