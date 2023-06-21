const BASE_URL = "https://pixabay.com/api";
const KEY = "36946759-7e5fc12dbc6128b490595b505";

    export const getImage = async (page, query) => {
     const params = new URLSearchParams({
    image_type: "photo",
         key: KEY,
         q: query,
    page: page,
     }); 
    
    const response = await fetch(`${BASE_URL}/?${params}`);

    if (!response.ok) {
        throw new Error("Smth went wrong");
    }

    return response.json();
}