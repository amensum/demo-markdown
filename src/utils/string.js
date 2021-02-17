/**
 *
 * @param str
 * @returns {number}
 */
export const stringBytesCount = str => new Blob([str]).size

/**
 *
 * @param str
 * @returns {*}
 */
export const stringLinesCount = str => str.split(/\n/).length

/**
 *
 * @param str
 * @returns {*}
 */
export const stringSymbolsCount = str => str.length
