function ArrayVisualizer({ array, highlightIndices = [] }) {
    const maxVal = Math.max(...array)

    return (
        <div style={{
            display: 'flex',
            alignItems: 'flex-end',
            gap: '8px',
            height: '200px',
            padding: '16px',
            backgroundColor: '#1a1a1a',
            borderRadius: '12px',
            border: '1px solid #2a2a2a'
        }}>
            {array.map((num, i) => {
                const isHighlighted = highlightIndices.includes(i)
                const heightPercent = (num / maxVal) * 100

                return (
                    <div key={i} style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '6px',
                        flex: 1
                    }}>
                        <span style={{ fontSize: '12px', color: '#aaa' }}>{num}</span>
                        <div style={{
                            width: '100%',
                            height: `${heightPercent}%`,
                            backgroundColor: isHighlighted ? '#f59e0b' : '#7c3aed',
                            borderRadius: '4px 4px 0 0',
                            transition: 'all 0.3s ease'
                        }} />
                    </div>
                )
            })}
        </div>
    )
}

export default ArrayVisualizer