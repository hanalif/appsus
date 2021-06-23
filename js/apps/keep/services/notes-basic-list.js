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
                url: "https://mayersinsgroup.com/wp-content/uploads/2019/04/home-exterior-today-180726-tease_3f99937c609d875fece6a12af1594bd9.jpg",
                title: "Children",
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
                url: "https://www.nbn.org.il/wp-content/uploads/2019/04/h3.jpg",
                title: "Laptop",
            },
            style: {
                    backgroundColor: "#00d"
                    }
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