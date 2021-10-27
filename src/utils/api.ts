import { stringify } from "qs";

export const apiUrl = "https://api.quran.com/api/v4";
export const fetcher = (url) => fetch(url).then((res) => res.json());

/**
 * Generates a url to make an api call to our backend
 * @param path the path for the call
 * @param parameters optional query params, {a: 1, b: 2} is parsed to "?a=1&b=2"
 */
export const makeUrl = (path: string, parameters?: Record<string, unknown>) => {
  if (!parameters) {
    return `${apiUrl}${path}`;
  }

  // The following section parses the query params for convenience
  // E.g. parses {a: 1, b: 2} to "?a=1&b=2"
  const queryParameters = `?${stringify(parameters)}`;
  return `${apiUrl}${path}${queryParameters}`;
};

/**
 * Compose the url for the tafsirs API.
 *
 * @param {string} language the user's language code.
 * @returns {string}
 */
export const makeTafsirsUrl = (language: string): string =>
  makeUrl("/resources/tafsirs", { language });
