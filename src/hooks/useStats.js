import { useEffect, useState } from 'react'
import {
  stringBytesCount,
  stringLinesCount,
  stringSymbolsCount
} from '../utils/string'

export default (source) => {
  const [symbols, setSymbols] = useState(0)
  const [lines, setLines] = useState(0)
  const [bytes, setBytes] = useState(0)

  useEffect(() => {
    setLines(stringLinesCount(source))
    setBytes(stringBytesCount(source))
    setSymbols(stringSymbolsCount(source))
  }, [source])

  return [symbols, lines, bytes]
}
