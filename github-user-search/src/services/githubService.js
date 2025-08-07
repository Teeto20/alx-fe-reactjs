import axios from "axios";

export const fetchUserData = async ({ username, location, minRepos }) => {
  let query = username ? `${username} in:login` : "";
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;
  if (!query) return []; // Prevent empty search

  const url = `https://api.github.com/search/users?q=${encodeURIComponent(query)}`;
  try {
    const response = await axios.get(url);
    // Fetch full user profiles
    const users = await Promise.all(
      response.data.items.map(async (user) => {
        const userDetails = await axios.get(user.url);
        return userDetails.data;
      })
    );
    return users;
  } catch (error) {
    throw error;
  }
};