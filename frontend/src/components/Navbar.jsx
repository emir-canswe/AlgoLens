function Navbar() {
    return (
        <nav style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 32px',
            borderBottom: '1px solid #2a2a2a',
            backgroundColor: '#0f0f0f'
        }}>
            <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#7c3aed' }}>
                AlgoLens
            </span>
            <div style={{ display: 'flex', gap: '24px' }}>
                <a href="/" style={{ color: '#aaa', textDecoration: 'none' }}>Home</a>
                <a href="/visualizer" style={{ color: '#aaa', textDecoration: 'none' }}>Visualizer</a>
                <a href="/compare" style={{ color: '#aaa', textDecoration: 'none' }}>Compare</a>
            </div>
        </nav>
    )
}

export default Navbar