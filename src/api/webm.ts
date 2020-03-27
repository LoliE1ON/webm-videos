import { api } from './utils';

const getVideos = async () => {
    const query = await api.get('files/getAll');
    return query.data.vendors;
};

export {
    getVideos
}