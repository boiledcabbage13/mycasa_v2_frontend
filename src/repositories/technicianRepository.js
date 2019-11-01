import Repository from '@/repository';

const resource = 'technicians';
// const limit = process.env.VUE_APP_SEARCH_LIMIT;

export default {
    get({limit = process.env.VUE_APP_SEARCH_LIMIT, search= '', page= 1}) {
        return Repository.get(`${resource}?limit=${limit}&search=${search}&page=${page}`);
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