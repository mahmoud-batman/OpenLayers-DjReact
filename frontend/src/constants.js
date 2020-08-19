const localhost = "http://127.0.0.1:8000";

const apiURL = "/api/v1";

export const endpoint = `${localhost}${apiURL}`;

export const authurl = `${endpoint}/users/rest-auth`;

export const bookmarkUrl = `${endpoint}/bookmarks/`;
export const bookmarkDetailUrl = (id) => `${endpoint}/bookmarks/${id}/`;
