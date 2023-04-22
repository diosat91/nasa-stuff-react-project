import $ from 'jquery'

export default function NasaApiCall(query) {
  if (query) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: `https://images-api.nasa.gov/search?q=${query}`,
        success: (json) => {
          resolve(json.collection.items);
        },
        error: (xhr, status, error) => {
          reject(error);
        }
      });
    });
  }
}


