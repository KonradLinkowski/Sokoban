import { useParams } from 'react-router-dom'
import { useLoadLevel } from '../hooks/useLoadLevel'
import { Board } from '../components/Board'
import { useState } from 'react'
import { useEffect } from 'react'
import { useKeyDown } from '../hooks/useKeyDown'

export function Game() {
  const { lvl } = useParams()
  const { loading, error, level } = useLoadLevel(lvl)
  const [player, setPlayer] = useState(null)

  useEffect(() => {
    if (!level) return
    setPlayer({ ...level.player })
  }, [level])

  useKeyDown(['ArrowUp', 'KeyW'], () => setPlayer((pos) => ({ ...pos, y: pos.y - 1 })))
  useKeyDown(['ArrowDown', 'KeyS'], () => setPlayer((pos) => ({ ...pos, y: pos.y + 1 })))
  useKeyDown(['ArrowLeft', 'KeyA'], () => setPlayer((pos) => ({ ...pos, x: pos.x - 1 })))
  useKeyDown(['ArrowRight', 'KeyD'], () => setPlayer((pos) => ({ ...pos, x: pos.x + 1 })))

  return (
    <div className="relative">
      {error && 'Error'}
      {loading && 'Loading...'}
      {level && <Board board={level.board} player={player} />}
    </div>
  )
}
