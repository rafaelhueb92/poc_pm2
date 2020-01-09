const axios = require("axios");

const fetchGithubInfo = async url => {
  console.log(`Fetching ${url}`);
  const githubInfo = await axios(url); // API call to get user info from Github.
  return {
    name: githubInfo.data.name,
    bio: githubInfo.data.bio,
    repos: githubInfo.data.public_repos
  };
};

// Iterates all users and returns their Github info.
const fetchUserInfo = async names => {
  const requests = names.map(name => {
    console.log(`Requesting user ${name}`);
    const url = `https://api.github.com/users/${name}`;
    return fetchGithubInfo(url) // Async function that fetches the user info.
      .then(a => {
        return a; // Returns the user info.
      });
  });
  return Promise.all(requests); // Waiting for allW the requests to get resolved.
};

module.exports = { fetchUserInfo };

/*
fetchUserInfo(["sindresorhus", "rafaelhueb92", "gaearon"]).then(a =>
  console.log(JSON.stringify(a))
);
*/
