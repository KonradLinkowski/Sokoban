const typeColorMap = {
  '#': 'bg-red-500',
  ' ': 'bg-gray-500'
}

export function Tile({ type }) {
  const color = typeColorMap[type]
  return <div className={`w-8 h-8 ${color}`}></div>
}
