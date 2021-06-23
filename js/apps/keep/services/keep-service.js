import { storageService } from '../../../services/async-storage-service.js'

const KEEPS_KEY = 'keeps';
const gKeeps = _createKeeps();

export const keepService = {
    query,
    remove,
    save,
    getById,
    getNextCarId
};

function query() {
    return storageService.query(KEEPS_KEY);
}

function remove(keepId) {
    return storageService.remove(KEEPS_KEY, keepId);
}

function save(keep) {
    if (keep.id) {
        return storageService.put(KEEPS_KEY, keep);
    } else {
        return storageService.post(KEEPS_KEY, keep);
    }
}

function getById(keepId) {
    return storageService.get(KEEPS_KEY, keepId);
}

function getNextCarId(keepId) {
    return query()
        .then(keeps => {
            const idx = keeps.findIndex(keep => keep.id === keepId)
            return (idx === keeps.length - 1) ? keeps[0].id : keeps[idx + 1].id
        })
}


function _createKeeps() {
    let keeps = utilService.loadFromStorage(KEEPS_KEY);
    if (!keeps || !keeps.length) {
        keeps = [];
        keeps.push(_createKeep());
        utilService.saveToStorage(KEEPS_KEY, keeps);
    }
    return keeps;
}

function _createKeep() {
    const keep = {
        id: utilService.makeId(),
    };
    return keep;
}