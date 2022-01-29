import { useState, useEffect } from 'react'

export class LevelParsingError extends Error {
  constructor(message) {
    super('Level parsing error: ' + message)
  }
}

export function useLoadLevel(lvl) {
  const [level, setLevel] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(async () => {
    try {
      setLoading(true)
      const response = await fetch('./public/levels/1.txt')
      const data = await response.text()
      const parsed = parseTxt(data)
      validateLevel(parsed)
      setLevel(parsed)
      setLoading(false)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }, [lvl])

  return { level, loading, error }
}

function validateLevel({ player, holes, balls }) {
  if (!player.x) {
    throw new LevelParsingError('Missing player')
  }

  if (holes.length !== balls.length) {
    throw new LevelParsingError('Balls and holes number does not match')
  }

  if (!holes.length) {
    throw new LevelParsingError('Missing objectives')
  }
}

function parseTxt(data) {
  const balls = []
  const holes = []
  const player = {}
  const board = data.split('\n').map((row) => row.split(''))
  board.forEach((row, y) =>
    row.forEach((cell, x) => {
      switch (cell) {
        case 'P':
          player.x = x
          player.y = y
          break
        case 'B':
          balls.push({ x, y })
          break
        case 'H':
          holes.push({ x, y })
          break
      }
      if ('PBH'.includes(cell)) {
        board[y][x] = ' '
      }
    })
  )
  return {
    board,
    balls,
    holes,
    player
  }
}
