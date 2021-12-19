import React, { useEffect, useState } from 'react'
import API from '../API';
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config'
import NoImage from '../images/no_image.jpg'

function Home() {
  const [state, setState] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovies = async (page, searchTerm = '') => {
    try {
      setError(false);
      setLoading(true);
      const movies = await API.fetchMovies(searchTerm, page);
      console.log(process.env.REACT_APP_API_KEY)
      console.log(movies)
    } catch (err) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchMovies(1);
  }, [])

  return (
    <div>
      Home Page
    </div>
  )
}

export default Home
