import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

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
        const { detail } = await response.json()
        throw new Error(detail)
      }
    } catch(err) {
      if (err.message === "You do not have permission to perform this action.") {
        history.push("/forbidden")
      }
      setError(err.message)
    }
    // setIsEditing(false);
  };

  const ReadProject = () => {
    return (
      <div className="project">
        <h1>{projectData.title}</h1>
        <img src={projectData.image} />
        <h3>{`Description: ${projectData.description}`}</h3>
        <div className="project-details">
          <h4>{`Suburb: ${projectData.suburbs}`}</h4>
          <h4>Created: {formattedDate}</h4>
          <h4>{`Beehive goal: ${projectData.beehives}`}</h4>
          <h4>{`Minimum: $${projectData.min_required}`}</h4>
          <h4>{`Goal: $${projectData.goal}`}</h4>
          <h4>{`Status: ${projectData.status}`}</h4>
        </div>
        <progress value="30" max="100" />
        <h2>Pledges</h2>
        <div className="container-pledges">
          {projectData.pledges.map((pledgeData, key) => {
            return (
              <ul>
                ${pledgeData.amount} from Supporter {pledgeData.supporter} "
                {pledgeData.comment}"
              </ul>
            );
          })}
        </div>
      </div>
    );
  };

  console.log("project data is:", projectData);
  
  const handleClick = () => {
    console.log("about to delete")
    fetch(`${process.env.REACT_APP_API_URL}projects/${project_id}/`, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    })
  }

  return (
    <div>
      <div>
        {localStorage.getItem("token") && isEditing === false && (
          <button className="btn" onClick={() => setIsEditing(true)}>
            Edit Project
          </button>
        )}
      </div>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Title:</label>
          <input
            value={projectData.title}
            type="text"
            id="title"
            placeholder=""
            onChange={handleChange}
          />
          <div>
            <label htmlFor="username">Description:</label>
            <input
              value={projectData.description}
              name="description"
              type="text"
              id="description"
              placeholder="Edit description"
              onChange={handleChange}
            />
            <div>
              <label htmlFor="username">Suburb:</label>
              <input
                value={projectData.suburbs}
                name="suburbs"
                type="text"
                id="suburbs"
                placeholder="Suburb"
                onChange={handleChange}
              />
            </div>
            <div>
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
            <div>
              <label htmlFor="username">Image:</label>
              <input
                value={projectData.image}
                name="image"
                type="text"
                id="image"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="username">Is_open:</label>
              <input
                value={projectData.is_open}
                name="is_open"
                type="text"
                id="is_open"
                onChange={handleChange}
              />
            </div>
          </div>
          <button className="btn" type="submit">
            Update Project
          </button>
          <div>{error && <div>{error}</div>}</div>
          <button className="btn" onClick={() => setIsEditing(false)}>
            Cancel
          </button>
          <button onClick={handleClick}>Delete Project</button>
        </form>
      ) : (
        <ReadProject />
      )}
    </div>
  );
}

export default ProjectPage;
