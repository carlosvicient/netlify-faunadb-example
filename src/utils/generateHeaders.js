
module.exports = function generateHeaders(netlifyIdendity) {
  const headers = { "Content-Type": "application/json" };
  if (netlifyIdentity.currentUser()) {
    return netlifyIdentity.currentUser().jwt().then((token) => {
      return { ...headers, Authorization: `Bearer ${token}` };
    })
  }
  return Promise.resolve(headers);
}
