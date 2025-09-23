import { Client, Databases, ID, Query } from 'appwrite';

const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;
const ENDPOINT = import.meta.env.VITE_APPWRITE_ENDPOINT;

const client = new Client().setEndpoint(ENDPOINT).setProject(PROJECT_ID);

const database = new Databases(client);

export const updateSearchCount = async (searchTerm, movie) => {
    try{
        // Check if the search term already exists in the database
        const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [Query.equal("searchTerm", searchTerm)]);
        // If it exists, increment the count
        if(result.documents.length > 0){
            const doc = result.documents[0];
            const updatedCount = (doc.count || 0) + 1;
            await database.updateDocument(DATABASE_ID, COLLECTION_ID, doc.$id, { count: updatedCount });
        }
        // If it doesn't exist, create a new document with count 1
        else{
            await database.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), { 
            searchTerm, 
            count: 1, 
            movie_id: movie.id, 
            poster_url: "https://image.tmdb.org/t/p/w500" + movie.poster_path,
            movie_title: movie.title });
        }
    }
    catch(error){
        console.error("Error updating search count:", error);
    }
}

export const getTrendingMovies = async () => {
    try{
        const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [Query.orderDesc("count"), Query.limit(5)]);
        return result.documents;
    }
    catch(error){
        console.error("Error fetching trending movies:", error);
    }   
}

