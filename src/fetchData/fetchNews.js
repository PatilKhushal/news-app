const base = "https://newsapi.org/v2/top-headlines";
const country = "in";
const fetchNews = async (category, page = 1) => {
  try {
    let response = await fetch(
      `${base}?country=${country}&category=${category}&apiKey=${
        import.meta.env.VITE_API_KEY
      }&page=${page}`
    );
    let data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export { fetchNews };
