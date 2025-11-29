import { useState, useEffect } from 'react'
import catImage from '../assets/images/cat.svg'
import './DancingCat.css'

function DancingCat() {
  const [isPlaying, setIsPlaying] = useState(true)

  const toggleAnimation = () => {
    setIsPlaying(!isPlaying)
  }

  // 키보드 접근성: 스페이스바로 애니메이션 제어
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === ' ' || event.key === 'Spacebar') {
        event.preventDefault()
        setIsPlaying(prev => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  return (
    <div className="dancing-cat-container">
      <div className={`cat-wrapper ${isPlaying ? 'dancing' : ''}`}>
        <img src={catImage} alt="Dancing Cat" className="cat-image" />
      </div>
      <button
        className="control-button"
        onClick={toggleAnimation}
        aria-label={isPlaying ? 'Stop cat dancing animation' : 'Start cat dancing animation'}
      >
        {isPlaying ? 'Stop Dancing' : 'Start Dancing'}
      </button>
      <p style={{
        color: 'white',
        fontSize: '0.9rem',
        opacity: 0.8,
        marginTop: '-1rem'
      }}>
        Press SPACE to toggle
      </p>
    </div>
  )
}

export default DancingCat