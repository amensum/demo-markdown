/**
 *
 * @param url
 * @param auth
 * @returns {Promise<{result: any, status: number}>}
 */
export const load = async (url, auth) => {
  const options = {
    method: 'GET',
    headers: {
      Authorization: auth,
    },
  }
  const response = await fetch(url, options)

  return {
    status: response.status,
    result: await response.json(),
  }
}

/**
 *
 * @param url
 * @param auth
 * @param content
 * @param sha
 * @returns {Promise<{result: any, status: number}>}
 */
export const save = async (url, auth, content, sha) => {
  const put_options = {
    method: 'PUT',
    headers: {
      Authorization: auth,
    },
    body: JSON.stringify({
      message: 'update',
      content: btoa(content),
      sha: sha,
    }),
  }
  const response = await fetch(url, put_options)

  return {
    status: response.status,
    result: await response.json(),
  }
}
