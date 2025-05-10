import { useState } from 'react';
import BookingForm from './BookingForm';
import Chat from './Chat';
import Login from './Login';
import Register from './Register';
import ITHelp from './ITHelp';


function Home() {
    const [view, setView] = useState('home');

    const renderView = () => {
        switch (view) {
            case 'booking':
                return <BookingForm />;
            case 'chat':
                return <Chat />;
            case 'login':
                return <Login />;
            case 'register':
                return <Register />;
            case 'help':
                return <ITHelp />;

            default:
                return <p>Välkommen! Välj en funktion ovan.</p>;
        }
    };

    return (
        <div>
            <h1>Startsida</h1>
            <nav>
                <button onClick={() => setView('booking')}>Boka</button>
                <button onClick={() => setView('chat')}>Chatt</button>
                <button onClick={() => setView('login')}>Logga in</button>
                <button onClick={() => setView('register')}>Registrera</button>
                <button onClick={() => setView('help')}>IT-hjälp</button>
            </nav>
            <hr />
            <div>{renderView()}</div>
        </div>
    );
}

export default Home;

