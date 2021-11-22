<h1>Beebay</h1>
<p>Beebay is a crowdfunding app supporting bees! Beebay connects people who have space for beehives with local bee-keepers and people wanting to support the cost of setting up new hives. Site owners get a share of the honey, bee-keepers get to do what they love and our planet has more bees! Win, win, win.</p>

<h2>View</h2>
<p><em>Note: View in mobile view - iphone 6/7/8 Plus</em></p>
<p>Git Repo: https://github.com/LucySargent/React_crowdfunding</p>
<p>Deployed API: https://pure-cliffs-12549.herokuapp.com (with Heroku Postgres DB attached)</p>

<h4>Run locally:</h4>
<p>Run backend from new terminal:</p>
<ul>
<li>From backend directory 'plus-bris-2021-robust-code-beans-react'> venv/Scripts/activate</li>
<li>Launch the server: python manage.py runserver</li>
<li>Go to http://localhost:8000/ in your browser or test in Insomnia</li>
    </ul>

<p>Run frontend from new terminal:</p>
    <ul>
<li>Launch the client app from frontend directory 'plus-bris-2021-robust-code-beans-react'> npm start</li>
<li>Go to http://localhost:3000/</li>
</ul>

<h2>Stack</h2>
<p>Beebay was built with React. It is integrated with a backend API via<a href="https://github.com/LucySargent/crowdfunding"> Django/DRF.</a>

<h4>Dependencies</h4>
react-router-dom: ^6.0.2


<h2>Insomnia API Endpoints</h2>
<ol>
    <li>POST <code>users/</code> - Create new user.</li>
    <li>POST <code>api-token-auth/</code> - Login</li>
    <li>POST <code>projects/</code> - Create new project.</li>
    <li>POST <code>beefriends/</code> - Adopt a site.</li>
    <li>POST <code>pledges/</code> - Pledge to a project.</li>
    <li>GET <code>users/</code> - Return list of users.</li>
    <li>GET <code>projects/</code> - Return list of projects.</li>
    <li>GET <code>beefirends/</code> - Return list of befrienders.</li>
    <li>GET <code>pledges/:id</code> - Return list of pledges.</li>
    <li>PUT <code>users/:id</code> - Update user details.</li>
    <li>PUT <code>projects/:id</code> - Update project details.</li>
    <li>PUT <code>befriends/:id</code> - Update befriends details.</li>
    <li>PUT <code>pledges/:id</code> - Update pledge details.</li>
    <li>DELETE <code>users/:id</code> - Delete user.</li>
    <li>DELETE <code>projects/:id</code> - Delete project.</li>
    <li>DELETE <code>befriends/:id</code> - Delete befriends.</li>
    <li>DELETE <code>pledges/:id</code> - Delete pledge.</li>
    </ol>

<h2>Functionality</h2> 
<ul>
    <li>Sign Up</li>
    <li>Login</li>
    <li>Logged in user can create a project</li>
    <li>Logged in project owner can update their project/s</li>
    <li>Logged in user can adopt (befriend) a project</li>
    <li>Logged in user can pledge $ to a project</li>
    <li>Admin can delete a user</li>
    <li>Admin can delete a project</li>
    </ul>
    
<h2>Features</h2>     
    <ul>
    <li>Project pledges display on the project page.</li>
    <li>Projects have a $ pledge target based on the number of hives a site can accommodate. This is based on the logic that one hive is $300. Pledge target = number of hives * 300. Progress towards pledge target displays on screen.</li>
</ul>

<h4>Validation</h4>
<ul>
<li>User sees validation messages if create project form data is incomplete.</li>
<li>User sees a confirmation message when project is created successfully.</li>
     </ul>

<h4>Permissions</h4>
<ul>
<li>Updating a project is limited to the project owner. Unauthorised users are directed to a forbidden notice.</li>
<li>Deleting a project is limited to the project owner and Admin. Unauthorised users are directed to a forbidden notice.</li>
    </ul>

<h3>Screenshots</h3>


![Home / Create User / Pledges](/screenshots/home_create_unauthorised.jpg "")
![Login / Sign Up / Unauthorised](/screenshots/login_signup_unauthorised.jpg "")

<h2>Known Bugs<h2>
