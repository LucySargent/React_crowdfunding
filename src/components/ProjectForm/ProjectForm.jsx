import React, { useState } from "react";
import "./ProjectForm.css";

const ProjectForm = () => {
  const [projectData, setProjectData] = useState({
    title: "",
    description: "",
    suburbs: "",
    beehives: "",
    image: "",
    is_open: "true",
    date_created: "2021-11-05T00:28:23.382748+10:00",
  });

  const [errors, setErrors] = useState([]);
  const [message, setMessage] = useState("");

  //could call setProjectData and put this functionality inline and not have handleChange
  const handleChange = (e) => {
    setProjectData({
      ...projectData,
      [e.target.name]: e.target.value,
    });
  };

  const checkForErrors = () => {
    setErrors([]);
    if (projectData.title === "") {
      setErrors((prevErrors) => [...prevErrors, "Don't forget your title!"]);
    }
    console.log(errors);
    if (projectData.description === "") {
      setErrors((prevErrors) => [...prevErrors, "Please add a description!"]);
    }
    console.log(errors);
    if (projectData.suburb === "") {
      setErrors((prevErrors) => [
        ...prevErrors,
        "Suburb can't be empty and must be caps!",
      ]);
    }
    console.log(errors);
    if (projectData.image === "") {
      setErrors((prevErrors) => [...prevErrors, "Please add an image!"]);
    }
    console.log(errors);
    if (projectData.beehives === "") {
      setErrors((prevErrors) => [...prevErrors, "Beehives needs a number!"]);
    }
    console.log(errors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkForErrors();
    if (errors.length > 0) {
      //early return
      return;
    }

    const token = window.localStorage.getItem("token");

    /* 
      myHeaders.append('Content-Type', 'application/json'); 
      since it's a get request you don't need to specify your content-type
    */

    fetch(
      `${process.env.REACT_APP_API_URL}projects/`,
      //this is an options object - to say we're posting
      {
        method: "POST",
        headers: {
          Authorization: `Token ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(projectData),
      }
    )
      //fetch returns a promise - think "after fetch, I can add a .then and do more things!"
      //could use async await here
      .then((response) => {
        // console.log("we're posting a project");
        // console.log(response);
        // console.log(projectData)
        setMessage("Your Beebay Project has been created.");
        // if (response.ok) {
        //   throw Error("please complete all fields");
        // }
        // console.log(response.json);
        return response.json();
      });
    //   .then((results) => console.log(results))
    //   .catch((error) => console.log(error.message));
    // console.log(projectData);
  };

  return (
    <div>
      <h3 className="head">Create your Beebay project!</h3>
      <form className="project-form-container">
        <div>
          <input
            name="title"
            type="text"
            id="title"
            placeholder="Title"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            name="description"
            type="text"
            id="description"
            placeholder="Please add a description"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            name="suburbs"
            type="text"
            id="suburbs"
            placeholder="Enter your suburb"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            name="beehives"
            type="text"
            id="beehives"
            placeholder="Number of beehives"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            name="image"
            type="text"
            id="image"
            placeholder="Add an image"
            onChange={handleChange}
          />
        </div>
        <div>
          <button
            className="submit-project-btn"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
        <div>
          <ul>
            {errors.map((error, key) => {
              return <li key={key}>{error}</li>;
            })}
          </ul>
        </div>
      </form>
    </div>
  );
};

export default ProjectForm;
