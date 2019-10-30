export default class Storage {
    set(key, value, stringify = false){
        if(stringify) {
            localStorage.setItem(key, JSON.stringify(value));
        } else {
            localStorage.setItem(key, value);
        }
    }
    get(key){
        let data = localStorage.getItem(key);
        return JSON.parse(data);
    }
    clear() {
        localStorage.clear();
    }
}