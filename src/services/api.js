import apiClient from './axiosConfig'

export const fetchCities = (limit, offset) => {
  return apiClient.get('/cities', {
    params: {
      limit,
      offset
    }
  })
}

export const fetchNearbyCities = (cityId) => {
  return apiClient.get(`/cities/${cityId}/nearbyCities`, {
    params: {
      radius: 100
    }
  })
}

export const searchCitiesByRegion = (countryId, limit, offset) => {
  return apiClient.get('/cities', {
    params: {
      countryIds: countryId,
      limit,
      offset
    }
  })
}
