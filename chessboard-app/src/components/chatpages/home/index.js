import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom'; // Add this

const Home = ({ username, setUsername, room, setRoom, socket, roomJoined }) => {
  const navigate = useNavigate(); // Add this

  const joinRoom = () => {
    if (room !== '' && username !== '') {
      socket.emit('join_room', { username, room });
    }

    roomJoined(true)
    // Redirect to /chat
    // navigate('/chat', { replace: true });
  };
  

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>{`Chess Chat`}</h1>
        <input
          className={styles.input}
          placeholder='Username...'
          onChange={(e) => setUsername(e.target.value)}
        />

        <select
          className={styles.input}
          onChange={(e) => setRoom(e.target.value)}
        >
          <option>-- Select Room --</option>
          <option value='general chat'>General Chat</option>
          <option value='Serious Gamers Only'>Serious Gamers Only</option>
          <option value='Beginners To Experts'>Beginners To Experts</option>
          <option value='Best Moves'>Best Moves</option>
        </select>

        <button
          className='btn btn-secondary'
          style={{ width: '100%' }}
          onClick={joinRoom}
        >
          Join Room
        </button>


        
      </div>
    </div>
  );
};

export default Home;