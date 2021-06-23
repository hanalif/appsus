import { storageService } from '../../../services/async-storage-service.js'

const MAILS_KEY = 'mails';
const gMails = [{
        name: 'ben',
        subject: 'Wassap?',
        body: 'Pick up!',
        isRead: false,
        sentAt: 1551133930594
    },
    {
        name: 'hana',
        subject: 'helllo?',
        body: 'lets do it!',
        isRead: true,
        sentAt: 1551133930594
    }
]

export const mailService = {
    query,
    remove,
    save,
    getById,
    getNextCarId
};

function query() {
    return storageService.query(MAILS_KEY)
        .then(mails => {
            if (!mails.length || !mails) {
                mails = gMails
                saveToStorage(MAILS_KEY, gMails)
            }
            return mails
        });

}

function remove(mailId) {
    return storageService.remove(MAILS_KEY, mailId);
}

function save(mail) {
    if (mail.id) {
        return storageService.put(MAILS_KEY, mail);
    } else {
        return storageService.post(MAILS_KEY, mail);
    }
}

function getById(mailId) {
    return storageService.get(MAILS_KEY, mailId);
}

function getNextCarId(mailId) {
    return query()
        .then(mails => {
            const idx = mails.findIndex(mail => mail.id === mailId)
            return (idx === mails.length - 1) ? mails[0].id : mails[idx + 1].id
        })
}

function saveToStorage(key, val) {
    localStorage.setItem(key, JSON.stringify(val))
}

function loadFromStorage(key) {
    var val = localStorage.getItem(key)
    return JSON.parse(val)
}

function _createMails() {
    let mails = utilService.loadFromStorage(MAILS_KEY);
    if (!mails || !mails.length) {
        mails = [];
        mails.push(_createMail());
        utilService.saveToStorage(CARS_KEY, mails);
    }
    return mails;
}

function _createMail() {
    const mail = {
        id: utilService.makeId(),
    };
    return mail;
}