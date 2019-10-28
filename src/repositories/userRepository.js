import Repository from '@/repository';

const resource = 'users';
const limit = process.env.VUE_APP_SEARCH_LIMIT;

export default {
    get(search='') {
        return Repository.get(`${resource}?limit=${limit}&search=${search}`);
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
    },
    login(payload) {
        console.log({payload})
        return Repository.post(`${resource}`, payload);
    }
}