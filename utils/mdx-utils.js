import { api } from '../services/api'

export const getPosts = async () => {
    try {
        const { data } = await api.get('/posts');
        return data || [];
    } catch (error) {
        console.error('API Error:', error);
        return [];
    }
}


export const getPostBySlug = async (id) => {

    //TODO: BUSCAR UM POST EM ESPECIFICO.
    try {
        const { data } = await api.get(`/posts?id=eq.${id}`);
        console.log('API Response:', data);
        return data[0] || {};
      } catch (error) {
        console.error('API Error:', error);
        return {};
      }
    }