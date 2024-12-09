import apiClient from './apiClient';
import { Post } from '../types/post';

export const fetchPosts = async (): Promise<Post[]> => {
  const response = await apiClient.get('/posts');
  return response.data;
};

export const addPost = async (title: string, body: string): Promise<Post> => {
  const response = await apiClient.post('/posts', { title, body });
  return response.data;
};


export const editPost = async (id: string | number, title: string, body: string): Promise<Post[]> => {
  const response = await apiClient.put(`/posts/${id}`, { title, body });
  return response.data;
};