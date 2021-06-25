import { storageService } from "../../../services/async-storage-service.js";
export const notesList = {
   getInitialNotes
}


function getInitialNotes() {
    return [
        {
            id: storageService.makeId(),
            isPinned: false,
            type: "noteTxt",
            isPinned: true,
            info: {
                title: "Fullstack Me Baby!",
                freeTxt: 'Free Text Here'
            }
        },
        {
            id: storageService.makeId(),
            isPinned: false,
            type: "noteImg",
            info: {
                url: "https://mayersinsgroup.com/wp-content/uploads/2019/04/home-exterior-today-180726-tease_3f99937c609d875fece6a12af1594bd9.jpg",
                title: "Children",
            },
        },
        {
            id: storageService.makeId(),
            isPinned: false,
            type: "noteTxt",
            info: {
                title: "Fullstack Me Baby!",
                freeTxt: 'Free Text Here'
            }
        },
        {
            id: storageService.makeId(),
            isPinned: false,
            type: "noteImg",
            info: {
                url: "https://www.nbn.org.il/wp-content/uploads/2019/04/h3.jpg",
                title: "Laptop",
            },
        },
        {
            id: storageService.makeId(),
            isPinned: false,
            type: "noteVideo",
            info: {
                url: "https://www.youtube.com/watch?v=9FlhDq8aCBo",
                title: "Dynamic Component"
            },
        },
    ];

}