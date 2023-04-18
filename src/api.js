import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID ha52XIwxN4C-75Z7k6iqM0EZKd9h1M9kweHltk7y4No",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};
export default searchImages;
