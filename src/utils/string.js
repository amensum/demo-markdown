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

/**
 *
 * @param str
 * @returns {string}
 */
export const stringEncBase64 = str => window.btoa(
  unescape(encodeURIComponent(str)),
)

/**
 *
 * @param str
 * @returns {string}
 */
export const stringDecBase64 = str => decodeURIComponent(
  escape(window.atob(str)),
)