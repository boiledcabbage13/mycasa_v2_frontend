import Repository from '@/repository';

const resource = 'ads';
const limit = process.env.VUE_APP_SEARCH_LIMIT;

export default {
    get() {
        return Repository.get(`${resource}?limit=${limit}`);
    },
    create(payload) {
        return Repository.post(`${resource}`, payload);
    },
    update(payload, id) {
        return Repository.put(`${resource}/${id}`, payload);
    },
    getUsingId(id) {
        return Repository.get(`${resource}/${id}`);
    },
    getAll() {
        return Repository.get(`${resource}`);
    }
}