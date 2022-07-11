import { useState, useEffect } from "react";
import axios from "axios";

export const useGetApi = (_url) =>  {

  const [apiResponse, setApiResponse] = useState()

  const getApi = async () => {
    try {
      const { data } = await axios.get(_url)
      setApiResponse(data)
    } catch (error) {
      setApiResponse(error)
    }
  }

  return [getApi, apiResponse, setApiResponse]
} 

export const usePostApi = (_url, data) =>  {
  
  const postApi = async (data) => {
    try {
      console.log(data)
      const postedData = await axios.post(_url, {data})
      return postedData
    } catch (error) {
      return false
    }
  }

  return [postApi]
} 
