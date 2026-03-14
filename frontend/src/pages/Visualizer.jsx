import { useState, useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'
import ArrayVisualizer from '../components/ArrayVisualizer'
import { bubbleSortSteps } from '../utils/bubbleSort'
import { quickSortSteps } from '../utils/quickSort'

function Visualizer() {
    const [steps, setSteps] = useState([])
    const [currentStep, setCurrentStep] = useState(0)
    const [inputArray, setInputArray] = useState('5, 2, 9, 1, 4, 8, 3')
    const [isPlaying, setIsPlaying] = useState(false)
    const [speed, setSpeed] = useState(600)
    const intervalRef = useRef(null)

    function handleRun() {
        const arr = inputArray.split(',').map(n => parseInt(n.trim())).filter(n => !isNaN(n))
        let result = []

        if (algorithm === 'Bubble Sort') result = bubbleSortSteps(arr)
        else if (algorithm === 'Quick Sort') result = quickSortSteps(arr)

        setSteps(result)
        setCurrentStep(0)
        clearInterval(intervalRef.current)
        setIsPlaying(false)
    }

    function handlePlay() {
        if (isPlaying) {
            clearInterval(intervalRef.current)
            setIsPlaying(false)
            return
        }
        setIsPlaying(true)
        intervalRef.current = setInterval(() => {
            setCurrentStep(s => {
                if (s >= steps.length - 1) {
                    clearInterval(intervalRef.current)
                    setIsPlaying(false)
                    return s
                }
                return s + 1
            })
        }, speed)
    }

    useEffect(() => {
        return () => clearInterval(intervalRef.current)
    }, [])

    return (
        <div>
            <Navbar />
            <div style={{ padding: '32px' }}>
                <h2 style={{ marginBottom: '24px', color: '#7c3aed' }}>Visualizer</h2>

                <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
                    <select
                        value={algorithm}
                        onChange={e => setAlgorithm(e.target.value)}
                        style={{
                            backgroundColor: '#1a1a1a',
                            color: '#fff',
                            border: '1px solid #2a2a2a',
                            padding: '10px 16px',
                            borderRadius: '8px',
                            fontSize: '14px'
                        }}>
                        <option>Bubble Sort</option>
                        <option>Quick Sort</option>
                    </select>

                    <select style={{
                        backgroundColor: '#1a1a1a',
                        color: '#fff',
                        border: '1px solid #2a2a2a',
                        padding: '10px 16px',
                        borderRadius: '8px',
                        fontSize: '14px'
                    }}>
                        <option>Python</option>
                        <option>JavaScript</option>
                        <option>Java</option>
                        <option>C++</option>
                    </select>
                </div>

                <input
                    value={inputArray}
                    onChange={e => setInputArray(e.target.value)}
                    placeholder="Dizi gir: 5, 2, 9, 1"
                    style={{
                        width: '100%',
                        backgroundColor: '#1a1a1a',
                        color: '#fff',
                        border: '1px solid #2a2a2a',
                        borderRadius: '8px',
                        padding: '12px 16px',
                        fontSize: '15px',
                        fontFamily: 'monospace'
                    }}
                />

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '16px' }}>
                    <span style={{ color: '#aaa', fontSize: '14px' }}>Hız:</span>
                    <input
                        type="range"
                        min="100"
                        max="1500"
                        step="100"
                        value={1600 - speed}
                        onChange={e => setSpeed(1600 - parseInt(e.target.value))}
                        style={{ width: '150px' }}
                    />
                    <span style={{ color: '#aaa', fontSize: '14px' }}>
                        {speed < 400 ? 'Hızlı' : speed < 900 ? 'Orta' : 'Yavaş'}
                    </span>
                </div>

                <button
                    onClick={handleRun}
                    style={{
                        marginTop: '16px',
                        backgroundColor: '#7c3aed',
                        color: '#fff',
                        border: 'none',
                        padding: '12px 28px',
                        fontSize: '15px',
                        borderRadius: '8px',
                        cursor: 'pointer'
                    }}>
                    Run →
                </button>

                {steps.length > 0 && (
                    <div style={{ marginTop: '32px' }}>

                        <div style={{ marginBottom: '24px' }}>
                            <ArrayVisualizer
                                array={steps[currentStep].array}
                                highlightIndices={steps[currentStep].highlight}
                            />
                        </div>

                        <p style={{
                            color: '#aaa',
                            marginBottom: '24px',
                            fontSize: '16px'
                        }}>
                            Adım {currentStep + 1} / {steps.length}: {steps[currentStep].description}
                        </p>

                        <div style={{ display: 'flex', gap: '12px' }}>
                            <button
                                onClick={() => setCurrentStep(s => Math.max(0, s - 1))}
                                disabled={currentStep === 0}
                                style={{
                                    backgroundColor: '#1a1a1a',
                                    color: '#fff',
                                    border: '1px solid #2a2a2a',
                                    padding: '10px 20px',
                                    borderRadius: '8px',
                                    cursor: 'pointer'
                                }}>
                                ← Geri
                            </button>
                            <button
                                onClick={handlePlay}
                                style={{
                                    backgroundColor: isPlaying ? '#dc2626' : '#16a34a',
                                    color: '#fff',
                                    border: 'none',
                                    padding: '10px 20px',
                                    borderRadius: '8px',
                                    cursor: 'pointer'
                                }}>
                                {isPlaying ? '⏸ Durdur' : '▶ Oynat'}
                            </button>
                            <button
                                onClick={() => setCurrentStep(s => Math.min(steps.length - 1, s + 1))}
                                disabled={currentStep === steps.length - 1}
                                style={{
                                    backgroundColor: '#1a1a1a',
                                    color: '#fff',
                                    border: '1px solid #2a2a2a',
                                    padding: '10px 20px',
                                    borderRadius: '8px',
                                    cursor: 'pointer'
                                }}>
                                İleri →
                            </button>
                        </div>

                    </div>
                )}

            </div>
        </div>
    )
}

export default Visualizer