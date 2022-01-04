import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import PledgeForm from "../components/PledgeForm/PledgeForm";
import "./ProjectPage.css";

function ProjectPage() {
  //starting state is object with empty array
  const [projectData, setProjectData] = useState({ pledges: [] });
  //this gets the thing we have called id from url(individual project)
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState(null);
  const history = useHistory();
  const { id: project_id } = useParams();
  const formattedDate = new Date(projectData.date_created).toLocaleDateString();

  useEffect(() => {
    //get project data - but this time it's the single project ID
    fetch(`${process.env.REACT_APP_API_URL}projects/${project_id}`)
      .then((results) => {
        console.log("results", results);
        return results.json();
      })
      .then((data) => {
        console.log("data", data);
        setProjectData(data);
      });
  }, [project_id]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    console.log("we are updating the project");
    setProjectData({
      ...projectData,
      [id]: value,
    });
  };

  //async await - alot of stuff happening simultaneously. Use await to control the load.
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}projects/${project_id}/`,
        {
          method: "put",
          headers: {
            Authorization: `Token ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(projectData),
        }
      );
      if (!response.ok) {
        const { detail } = await response.json();
        throw new Error(detail);
      }
    } catch (err) {
      if (
        err.message === "You do not have permission to perform this action."
      ) {
        history.push("/forbidden");
      }
      setError(err.message);
    }
    // setIsEditing(false);
    history.push("/");
  };

  const ReadProject = () => {
    return (
      <div className="big-container">
        <div className="project-container">
          <h2 a>{projectData.title}</h2>
          <p>{`Suburb: ${projectData.suburbs}`}</p>
          <img
            className="single-project-image"
            src={projectData.image}
            alt="bee"
          />
          <div className="description">
            <p>{`${projectData.description}`}</p>
          </div>
          {/* <p>Created: {formattedDate}</p> */}
          <div className="project-details">
            <p>{`Beehive target: ${projectData.beehives}`}</p>
            <p>{`Goal: $${projectData.goal}`}</p>
            <p>{`Status: ${projectData.status}`}</p>
          </div>
          <div>
            <progress value="30" max="100" />
          </div>
          <p>Created: {formattedDate}</p>
          <p>Project_ID: {projectData.id}</p>
        </div>
        <div className="pledge-container">
          <PledgeForm />
          <div>
            <div className="pledges">
              <h3 className="recent">Recent donations</h3>
              {projectData?.pledges.map((pledgeData, key) => {
                return (
                  <ul>
                    Supporter {pledgeData.supporter} "{pledgeData.comment}" $
                    {pledgeData.amount}
                  </ul>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  };

  console.log("project data is:", projectData);

  // const deleteProject = async () => {
  //   console.log("about to delete");
  //   fetch(`${process.env.REACT_APP_API_URL}projects/${project_id}/`, {
  //     method: "DELETE",
  //     headers: {
  //       Authorization: `Token ${localStorage.getItem("token")}`,
  //     },
  //   }).then(() => {
  //     history.push("/");
  //   });
  // };
  // console.log(projectData);

  const deleteProject = async () => {
    console.log("about to delete");
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}projects/${project_id}/`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Token ${localStorage.getItem("token")}`,
          },
        }
      );
      if (!response.ok) {
        const { detail } = await response.json();
        throw new Error(detail);
      }
    } catch (err) {
      if (err.message === "Not found.") {
        history.push("/forbidden");
      }
      setError(err.message);
    }
  };

  return (
    <div>
      <div className="edit-project-div">
        {localStorage.getItem("token") && isEditing === false && (
          <button className="edit-btn" onClick={() => setIsEditing(true)}>
            Edit Project
          </button>
        )}
      </div>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div className="edit-project-container">
            <div>
            <h3>Have your project details changed? Update them here!</h3>
            </div>
            <div>
            <label htmlFor="username">Title:</label>
            <input
              value={projectData.title}
              type="text"
              id="title"
              placeholder=""
              onChange={handleChange}
            />
          </div>
          <div className="edit-move">
            <label htmlFor="username">Description:</label>
            <input 
              value={projectData.description}
              name="description"
              type="text"
              id="description"
              placeholder="Edit description"
              onChange={handleChange}
            />
          </div>
          <div className="edit-suburb">
          <label htmlFor="username">Suburb:</label>
          <select
          value={projectData.suburbs}
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
          <div className="edit-beehives">
            <label htmlFor="username">Beehives:</label>
            <input
              value={projectData.beehives}
              name="beehives"
              type="text"
              id="beehives"
              placeholder="Edit number of beehives"
              onChange={handleChange}
            />
          </div>
          <div className="edit-image"> 
            <label htmlFor="username">Image:</label>
            <input
              value={projectData.image}
              name="image"
              type="text"
              id="image"
              onChange={handleChange}
            />
          </div>
          <div className="edit-isopen">
            <label htmlFor="username">Is_open:</label>
            <input
              value={projectData.is_open}
              name="is_open"
              type="text"
              id="is_open"
              onChange={handleChange}
            />
          </div>
          <div className="edit-buttons-container">
            <button type="submit">Update</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
            <button onClick={deleteProject}>Delete</button>
          </div>
          </div>
        
        </form>
      ) : (
        <ReadProject />
      )}
    </div>
  );
}

export default ProjectPage;
