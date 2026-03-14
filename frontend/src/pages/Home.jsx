import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()

    return (
        <div>
            <Navbar />
            <div style={{ padding: '48px 32px' }}>
                <h1 style={{ fontSize: '48px', marginBottom: '16px' }}>
                    Algorithm <span style={{ color: '#7c3aed' }}>Visualizer</span>
                </h1>
                <p style={{ color: '#aaa', fontSize: '18px', marginBottom: '32px' }}>
                    Algoritmalarını yaz, adım adım izle.
                </p>
                <button
                    onClick={() => navigate('/visualizer')}
                    style={{
                        backgroundColor: '#7c3aed',
                        color: '#fff',
                        border: 'none',
                        padding: '14px 32px',
                        fontSize: '16px',
                        borderRadius: '8px',
                        cursor: 'pointer'
                    }}
                >
                    Başla →
                </button>
            </div>
        </div>
    )
}

export default Home