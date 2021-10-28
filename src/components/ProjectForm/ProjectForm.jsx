import React, { useState } from "react";
import "./ProjectForm.css";

const ProjectForm = () => {
  const [projectData, setProjectData] = useState({
    title: "",
    description: "",
    suburbs: "",
    beehives: "",
    image: "",
    is_open: "True",
    date_created: "2021-09-25T00:28:23.382748+10:00",
  });

  //could call setProjectData and put this functionality inline and not have handleChange
  const handleChange = (e) => {
    setProjectData({
      ...projectData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(newProject)
    const token = window.localStorage.getItem("token");
    console.log(token)
    const bearer = 'Bearer ' + token;

    const myHeaders = new Headers();

    /* 
      myHeaders.append('Content-Type', 'application/json'); 
      since it's a get request you don't need to specify your content-type
    */
  
    myHeaders.append('Authorization', `Token ${token}`);
    myHeaders.append("Content-Type", "application/json");

    fetch(
        `${process.env.REACT_APP_API_URL}projects/`,
        //options object to say we're posting
      {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(projectData),
      }
      //fetch returns a promise - think "after fetch, I can add a .then and do more things!"
      //could use async await here
    ).then((response) => {
      return response.json()
    }).then(results => console.log(results))
    .catch(error => console.log(error))
    console.log(projectData)
  };

  return (
    <form>
      <div>
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
        <button type="submit" onClick={handleSubmit}>
          Add your project!
        </button>
      </div>
    </form>
  );
};

export default ProjectForm;
