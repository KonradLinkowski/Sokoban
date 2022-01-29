import { useEffect, useState } from 'react'
import { Tile } from './Tile'

export function Board({ board, player }) {
  const [tiles, setTiles] = useState(null)
  useEffect(() => {
    if (!board) return
    const tls = board.map((row, y) => {
      const cells = row.map((cell, x) => <Tile key={x} type={cell} />)
      return (
        <div className="flex" key={y}>
          {cells}
        </div>
      )
    })
    setTiles(tls)
  }, [board])

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="relative">
        {tiles}
        {player && (
          <div
            className="w-8 h-8 bg-green-500 absolute top-0 left-0"
            style={{
              transform: `translate(${player.x * 2}rem, ${player.y * 2}rem)`
            }}></div>
        )}
      </div>
    </div>
  )
}
