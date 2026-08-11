export const moviedetails = async ({ params }) => {
  const id = params.movieID;

  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&i=${id}&plot=full`
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};