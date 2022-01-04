import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./ProjectForm.css";

const ProjectForm = () => {
  const [projectData, setProjectData] = useState({
    title: "",
    description: "",
    suburbs: "",
    beehives: "",
    image: "https://www.teahub.io/photos/full/85-854286_honey-bee.jpg",
    is_open: "true",
    date_created: new Date().toISOString(),
  });

  const [errors, setErrors] = useState([]);
  const [message, setMessage] = useState("");

  const history = useHistory();

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
      console.log("we have errors");
      return;
    }

    const token = window.localStorage.getItem("token");

    fetch(`${process.env.REACT_APP_API_URL}projects/`, {
      method: "POST",
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(projectData),
    })
      .then((response) => {
        console.log("we're posting a project");
        console.log(response);
        console.log("status text:", response.statusText);
        console.log(projectData);
        
        alert("Your Beebay Project has been created.");
        // if (response.ok) {
        //   throw Error("please complete all fields");
        // }
        // console.log(response.json);
        return response.json();
      })
      .then((response) => {
        // history.push("/")
        window.location = `${window.location.origin}/`;
      })
      .then((results) => console.log(results))
      .catch((error) => console.log(error.message));
    // console.log(projectData);
  };

  return (
    <div>
      <form className="main-container">
        <h3>Create your Beebay project!</h3>
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
          <select
            name="suburbs"
            type="text"
            id="suburbs"
            placeholder="Select suburb"
            onChange={handleChange}
          >
            <option value="">Please select a suburb</option>
            <option value="ANNERLEY">ANNERLEY</option>
            <option value="ASPLEY">ASPLEY</option>
            <option value="BANYO">BANYO</option>
            <option value="BOONDALL">BOONDALL</option>
            <option value="BRISBANE CITY">BRISBANE CITY</option>
            <option value="CHELMER">CHELMER</option>
            <option value="DARRA">DARRA</option>
            <option value="ENOGGERA">ENOGGERA</option>
            <option value="FERNY GROVE">FERNY GROVE</option>
            <option value="FIG TREE POCKET">FIG TREE POCKET</option>
            <option value="GREENSLOPES">GREENSLOPES</option>
            <option value="HAWTHORNE">HAWTHORNE</option>
            <option value="INALA">INALA</option>
            <option value="JAMBOREE HEIGHTS">JAMBOREE HEIGHTS</option>
            <option value="KARANA DOWNS">KARANA DOWNS</option>
            <option value="LAKE MANCHESTER">LAKE MANCHESTER</option>
            <option value="MOOROOKA">MOOROOKA</option>
            <option value="NUNDAH">NUNDAH</option>
            <option value="OXLEY">OXLEY</option>
            <option value="PORT OF BRISBANE">PORT OF BRISBANE</option>
            <option value="RICHLANDS">RICHLANDS</option>
            <option value="SANDGATE">SANDGATE</option>
            <option value="SUNNYBANK">SUNNYBANK</option>
            <option value="TENNYSON">TENNYSON</option>
            <option value="TOOWONG">TOOWONG</option>
            <option value="THE GAP">THE GAP</option>
            <option value="WACOL">WACOL</option>
            <option value="YERONGA">YERONGA</option>
            <option value="ZILLMERE">ZILLMERE</option>
          </select>
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
