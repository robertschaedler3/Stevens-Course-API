// type Section = {
//     id: number
//     section: String
//     title: String
//     instructor: String
//     credits: number
//     enrollment: {
//         current: number
//         max: number
//     }
//     status: String
//     prereqs?: String
//     coreqs?: String
//     meetings: Event[]
// }

// export class Section {
//     id: number;
//     section: String;
//     title: String;
//     instructor: String;
//     credits: number;
//     enrollment: {
//         current: number;
//         max: number;
//     };
//     status: String;
//     prereqs?: String;
//     coreqs?: String;
//     meetings: Meeting[];
// }

// export interface Meeting {
//     room: String;
//     building: String;
//     day?: String;
//     start?: String;
//     end?: String;
// }

export const TEST_DATA = [
    {
        id: 10100,
        section: "CS115",
        title: "Intro to CS",
        instructor: "RAVI",
        credits: 4,
        current: 30,
        max: 32,
        status: "O",
        prereqs: "None",
        coreqs: "LAB",
        meetings: [
            {
                room: "222",
                building: "BC",
                day: "MWF",
                start: "8:00",
                end: "8:50"
            }
        ]
    },
    {
        id: 10101,
        section: "CS284",
        title: "Data Structures",
        instructor: "Bonelli",
        credits: 4,
        current: 51,
        max: 60,
        status: "O",
        coreqs: "REC",
        meetings: [
            {
                room: "212",
                building: "GS",
                day: "MWF",
                start: "10:00",
                end: "10:50"
            },
            {
                room: "213",
                building: "GS",
                day: "R",
                start: "12:00",
                end: "12:50"
            }
        ]
    },
    {
        id: 10102,
        section: "CS284",
        title: "Data Structures",
        instructor: "Bonelli",
        credits: 4,
        current: 45,
        max: 60,
        status: "O",
        coreqs: "REC",
        meetings: [
            {
                room: "213",
                building: "GS",
                day: "MWF",
                start: "1:00",
                end: "1:50"
            },
            {
                room: "213",
                building: "GS",
                day: "R",
                start: "2:00",
                end: "2:50"
            }
        ]
    }
]