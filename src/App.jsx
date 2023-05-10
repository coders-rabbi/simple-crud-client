import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import { Link } from 'react-router-dom';

function App() {

  const handleUser = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email }
    console.log(user);
    toast("Wow so easy!");
    fetch('http://localhost:5000/user', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (user.insertedId) {
          alert('added')
          toast("Wow so easy!");
        }
        form.reset();
      })

  }
  return (
    <>
      <form onSubmit={handleUser}>
        <input type="text" name="name" id="" placeholder='name' required />
        <br />
        <input type="email" name="email" id="" placeholder='email' required />
        <br />
        <input type="submit" value="Add User" />
      </form>
      <h1>Simple Crud</h1>
      <Link to="/users">All Users</Link>

      <ToastContainer />
    </>
  )
}

export default App
