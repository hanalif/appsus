import { storageService } from "../../../services/async-storage-service.js";
export const notesList = {
   getInitialNotes
}


function getInitialNotes() {
    return [
        // {
        //     id: storageService.makeId(),
        //     type: "noteTxt",
        //     isPinned: true,
        //     info: {
        //         txt: "Fullstack Me Baby!"
        //     }
        // },
        {
            id: storageService.makeId(),
            type: "noteImg",
            info: {
                url: "./keep-img/children.jpg",
                title: "Children",
                backgroundColor: "#00d"
                
            },
        },
        // {
        //     id: storageService.makeId(),
        //     type: "noteTodos",
        //     info: {
        //         label: "How was it:",
        //         todos: [
        //             { txt: "Do that", doneAt: null },
        //             { txt: "Do this", doneAt: 187111111 }
        //         ]
        //     }
        // },
        // {
        //     id: storageService.makeId(),
        //     type: "noteTxt",
        //     info: {
        //         txt: "Hello world!"
        //     }
        // },
        {
            id: storageService.makeId(),
            type: "noteImg",
            info: {
                url: "./keep-img/laptop.jpg",
                title: "Laptop",
                backgroundColor: "#00d"
            },
        },
        // {
        //     id: storageService.makeId(),
        //     type: "noteVideo",
        //     info: {
        //         url: "https://www.youtube.com/watch?v=VugasBUoBdI",
        //         title: "Dynamic Component"
        //     },
        //     style: {
        //         backgroundColor: "#00d"
        //     }
        // },
    ];

}