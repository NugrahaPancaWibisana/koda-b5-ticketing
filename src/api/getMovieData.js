export default async function movieApi(url) {
  try {
    const res = await fetch(url, {
      headers: {
        Authorization: import.meta.env.VITE_API_KEY,
      },
    });    

    if (!res.ok) throw new Error(`${res.status}: ${res.statusText}`);

    const data = res.json();

    return data;
  } catch (error) {    
    return error.message;
  }
}
