import { Label } from "@/components/ui/label";

export const timetables = {
    1: {
      label: '12.AI',
      schedules: {
        0: [ // Sunday
        { subject: "ML301", teacher: "AA", room: "B7", start: "07:15", end: "08:45" },
        { subject: "DL301", teacher: "SG/AA", room: "C1", start: "08:45", end: "09:30" },
        { subject: "Break 1", teacher: "N/A", room: "N/A", start: "09:30", end: "09:50" },            
        { subject: "DL301", teacher: "SG/AA", room: "C1", start: "09:50", end: "10:35" },
        { subject: "English", teacher: "SS", room: "A5", start: "10:35", end: "12:05" },
        { subject: "Physics", teacher: "SK", room: "Ph. Lab", start: "12:05", end: "12:45" },
        { subject: "Break 2", teacher: "N/A", room: "N/A", start: "12:45", end: "13:05" },
        { subject: "Physics", teacher: "SK", room: "Ph. Lab", start: "13:05", end: "13:45" },
    ],
    1: [ // Monday
        { subject: "GRD301", teacher: "AA/AA", room: "B7", start: "07:15", end: "08:45" },
        { subject: "ML301", teacher: "AA", room: "C1", start: "08:45", end: "09:30" },
        { subject: "Break 1", teacher: "N/A", room: "N/A", start: "09:30", end: "09:50" },
        { subject: "ML301", teacher: "AA", room: "C1", start: "09:50", end: "10:35" },
        { subject: "Arab", teacher: "AM", room: "A8", start: "10:35", end: "11:20" },
        { subject: "Math", teacher: "JA", room: "B3", start: "11:20", end: "12:05" },
        { subject: "English", teacher: "SS", room: "A5", start: "12:05", end: "12:45" },
        { subject: "Break 2", teacher: "N/A", room: "N/A", start: "12:45", end: "13:05" },
        { subject: "English", teacher: "SS", room: "A5", start: "13:05", end: "13:45" },
    ],
    2: [ // Tuesday
        { subject: "GRD301", teacher: "AA/AA", room: "B7", start: "07:15", end: "08:45" },
        { subject: "Math", teacher: "JA", room: "B3", start: "08:45", end: "09:30" },
        { subject: "Break 1", teacher: "N/A", room: "N/A", start: "09:30", end: "09:50" },
        { subject: "Math", teacher: "JA", room: "B3", start: "09:50", end: "10:35" },
        { subject: "Chemistry", teacher: "RY/DN", room: "CH. Lab", start: "10:35", end: "11:20" },
        { subject: "English", teacher: "SS", room: "A5", start: "12:05", end: "12:45" },
        { subject: "Break 2", teacher: "N/A", room: "N/A", start: "12:45", end: "13:05" },
        { subject: "English", teacher: "SS", room: "A5", start: "13:05", end: "13:45" },
    ],
    3: [ // Wednesday 
        { subject: "English", teacher: "SS", room: "A5", start: "07:15", end: "08:45" },
        { subject: "Islam", teacher: "AR", room: "A1", start: "08:45", end: "09:30" },
        { subject: "Break 1", teacher: "N/A", room: "N/A", start: "09:30", end: "09:50" },
        { subject: "History", teacher: "SZ", room: "A7", start: "09:50", end: "10:35" },
        { subject: "DL301", teacher: "SG/AA", room: "B7", start: "10:35", end: "12:05" },
        { subject: "IOT301", teacher: "AA", room: "B7", start: "12:05", end: "12:45" },
        { subject: "Break 2", teacher: "N/A", room: "N/A", start: "12:45", end: "13:05" },
        { subject: "IOT301", teacher: "AA", room: "B7", start: "13:05", end: "13:45" },
  
    ],
    4: [ 
        { subject: "Physics", teacher: "SK", room: "B9", start: "07:00", end: "08:20" },
        { subject: "IOT301", teacher: "AA", room: "B7", start: "08:20", end: "09:00" },
        { subject: "Break 1", teacher: "N/A", room: "N/A", start: "09:00", end: "09:15" },
        { subject: "IOT301", teacher: "AA", room: "B7", start: "09:15", end: "09:55" },
        { subject: "Math", teacher: "JA", room: "B3", start: "09:55", end: "11:15" },
        { subject: "History", teacher: "SZ", room: "A7", start: "11:15", end: "11:55" },
        { subject: "Break 2", teacher: "N/A", room: "N/A", start: "11:55", end: "12:10" },
        { subject: "Arab", teacher: "AM", room: "A8", start: "12:10", end: "12:50" },
        { subject: "Clubs", teacher: "???", room: "???", start: "12:55", end: "13:45" },
    ]
      }
    },
    0: {
      label: '12.CCP',
      schedules: {
        0: [ // Sunday
        { subject: "GRD301", teacher: "AK/MS", room: "B8", start: "07:15", end: "08:45" },
        { subject: "Math", teacher: "KNT/JA", room: "B3", start: "08:45", end: "09:30" },
        { subject: "Break 1", teacher: "N/A", room: "N/A", start: "09:30", end: "09:50" },
        { subject: "Math", teacher: "KNT/JA", room: "B3", start: "09:50", end: "10:35" },
        { subject: "Arab", teacher: "AM", room: "A8", start: "10:35", end: "11:20" },
        { subject: "ISL", teacher: "AR", room: "A8", start: "11:20", end: "12:05" },
        { subject: "IOT301", teacher: "AA", room: "B7", start: "12:05", end: "12:45"},
        { subject: "Break 2", teacher: "N/A", room: "N/A", start: "12:45", end: "13:05" },
        { subject: "IOT301", teacher: "AA", room: "B7", start: "13:05", end: "13:45" },
    ],
    1: [ // Monday
        { subject: "Chem", teacher: "DN/AH", room: "CHM. Lab", start: "07:15", end: "08:45" },
        { subject: "Math", teacher: "KNT/JA", room: "B3", start: "08:45", end: "09:30" },
        { subject: "Break 1", teacher: "N/A", room: "N/A", start: "09:30", end: "09:50" },
        { subject: "History", teacher: "AR", room: "A7", start: "09:50", end: "10:35" },
        { subject: "English", teacher: "SS", room: "A5", start: "10:35", end: "12:05" },
        { subject: "ARC301", teacher: "AK", room: "B8", start: "12:05", end: "12:45" },
        { subject: "Break 2", teacher: "N/A", room: "N/A", start: "12:45", end: "13:05" },
        { subject: "ARC301", teacher: "AK", room: "B8", start: "13:05", end: "13:45" },
    ],
    2: [ // Tuesday
        { subject: "History", teacher: "AR", room: "A7", start: "07:15", end: "08:00" },
        { subject: "Arab", teacher: "AM", room: "A8", start: "08:00", end: "08:45" },
        { subject: "English", teacher: "SS", room: "A6", start: "08:45", end: "09:30" },
        { subject: "Break 1", teacher: "N/A", room: "N/A", start: "09:30", end: "09:50" },
        { subject: "English", teacher: "SS", room: "A6", start: "09:50", end: "10:35" },
        { subject: "GRD301", teacher: "AK/MS", room: "B8", start: "10:35", end: "12:05" },
        { subject: "Physics", teacher: "SK", room: "B9", start: "12:05", end: "12:45" },
        { subject: "Break 2", teacher: "N/A", room: "N/A", start: "12:45", end: "13:05" },
        { subject: "Physics", teacher: "SK", room: "B9", start: "13:05", end: "13:45" },
    ],
    3: [ // Wednesday 
        { subject: "ARC301", teacher: "AK", room: "B8", start: "07:15", end: "08:45" },
        { subject: "Physics", teacher: "SK", room: "Ph. Lab", start: "08:45", end: "09:30" },
        { subject: "Break 1", teacher: "N/A", room: "N/A", start: "09:30", end: "09:50" },
        { subject: "Physics", teacher: "SK", room: "Ph. Lab", start: "09:50", end: "10:35" },
        { subject: "CC301", teacher: "AK", room: "B8", start: "10:35", end: "12:05" },
        { subject: "English", teacher: "SS", room: "A5", start: "12:05", end: "12:45" },
        { subject: "Break 2", teacher: "N/A", room: "N/A", start: "12:45", end: "13:05" },
        { subject: "English", teacher: "SS", room: "A5", start: "13:05", end: "13:45" },
  
    ],
    4: [ 
        { subject: "CC301", teacher: "AK", room: "B8", start: "07:00", end: "08:20" },
        { subject: "English", teacher: "SS", room: "A5", start: "08:20", end: "09:00" },
        { subject: "Break 1", teacher: "N/A", room: "N/A", start: "09:00", end: "09:15" },
        { subject: "English", teacher: "SS", room: "A5", start: "09:15", end: "09:55" },
        { subject: "IOT301", teacher: "AA", room: "B7", start: "09:55", end: "11:15" },
        { subject: "Math", teacher: "KNT/JA", room: "B3", start: "11:15", end: "11:55" },
        { subject: "Break 2", teacher: "N/A", room: "N/A", start: "11:55", end: "12:10" },
        { subject: "Math", teacher: "KNT/JA", room: "B3", start: "12:10", end: "12:50" },
        { subject: "Clubs", teacher: "???", room: "???", start: "12:55", end: "13:45" },
    ]
      }
    },
    2: {
      label: '12.SEC',
      schedules: {
        0: [ // Sunday
        { subject: "Math", teacher: "KNT", room: "B3", start: "07:15", end: "08:00" },
        { subject: "History", teacher: "SZ", room: "A7", start: "08:00", end: "08:45" },
        { subject: "GDV301", teacher: "HA", room: "C3", start: "08:45", end: "09:30" },
        { subject: "Break 1", teacher: "N/A", room: "N/A", start: "09:30", end: "09:50" },
        { subject: "GDV301", teacher: "HA", room: "C3", start: "09:50", end: "10:35" },
        { subject: "IOT301", teacher: "KM/AA", room: "B7", start: "10:35", end: "12:05" },
        { subject: "English", teacher: "SS", room: "A5", start: "12:05", end: "12:45" },
        { subject: "Break 2", teacher: "N/A", room: "N/A", start: "12:45", end: "13:05" },
        { subject: "English", teacher: "SS", room: "A5", start: "13:05", end: "13:45" },
    ],
    1: [ // Monday
        { subject: "English", teacher: "AA", room: "A5", start: "07:15", end: "08:45" },
        { subject: "Phy", teacher: "SK", room: "Ph.Lab", start: "08:45", end: "09:30" },
        { subject: "Break 1", teacher: "N/A", room: "N/A", start: "09:30", end: "09:50" },
        { subject: "Physics", teacher: "SK", room: "Ph.Lab", start: "09:50", end: "10:35" },
        { subject: "SEC311", teacher: "KM", room: "C3", start: "10:35", end: "12:05" },
        { subject: "Islam", teacher: "AR", room: "A7", start: "12:05", end: "12:45" },
        { subject: "Break 2", teacher: "N/A", room: "N/A", start: "12:45", end: "13:05" },
        { subject: "Arab", teacher: "AM", room: "A8", start: "13:05", end: "13:45" },
    ],
    2: [ // Tuesday
        { subject: "Math", teacher: "KNT", room: "B3", start: "07:15", end: "08:45" },
        { subject: "GRD301", teacher: "KM/IA", room: "C4", start: "08:45", end: "09:30" },
        { subject: "Break 1", teacher: "N/A", room: "N/A", start: "09:30", end: "09:50" },
        { subject: "GRD301", teacher: "KM/IA", room: "C4", start: "09:50", end: "10:35" },
        { subject: "Physics", teacher: "SK", room: "B9", start: "10:35", end: "11:20" },
        { subject: "Chemistry", teacher: "RY/DN", room: "CH.Lab", start: "12:05", end: "12:45" },
        { subject: "Break 2", teacher: "N/A", room: "N/A", start: "12:45", end: "13:05" },
        { subject: "Chemistry", teacher: "RY/DN", room: "CH.Lab", start: "13:05", end: "13:45" },
    ],
    3: [ // Wednesday 
        { subject: "GDV301", teacher: "HA", room: "C3", start: "07:15", end: "08:45" },
        { subject: "IOT301", teacher: "KM/AA", room: "B7", start: "08:45", end: "09:30" },
        { subject: "Break 1", teacher: "N/A", room: "N/A", start: "09:30", end: "09:50" },
        { subject: "IOT301", teacher: "KM/AA", room: "B7", start: "09:50", end: "10:35" },
        { subject: "English", teacher: "SS", room: "A5", start: "10:35", end: "12:05" },
        { subject: "Math", teacher: "KNT", room: "B3", start: "12:05", end: "12:45" },
        { subject: "Break 2", teacher: "N/A", room: "N/A", start: "12:45", end: "13:05" },
        { subject: "Math", teacher: "KNT", room: "B3", start: "13:05", end: "13:45" },
    ],
    4: [ 
        { subject: "English", teacher: "SS", room: "A5", start: "07:00", end: "08:20" },
        { subject: "GRD301", teacher: "KM/IA", room: "C4", start: "08:20", end: "09:00" },
        { subject: "Break 1", teacher: "N/A", room: "N/A", start: "09:00", end: "09:15" },
        { subject: "GRD301", teacher: "KM/IA", room: "C4", start: "09:15", end: "09:55" },
        { subject: "History", teacher: "SZ", room: "A7", start: "09:55", end: "10:35" },
        { subject: "Arab", teacher: "AM", room: "A8", start: "10:35", end: "11:15" },
        { subject: "SEC311", teacher: "KM", room: "C3", start: "11:15", end: "11:55" },
        { subject: "Break 2", teacher: "N/A", room: "N/A", start: "11:55", end: "12:10" },
        { subject: "SEC", teacher: "KM", room: "C3", start: "12:10", end: "12:50" },
        { subject: "Clubs", teacher: "???", room: "???", start: "12:55", end: "13:45" },
    ]
      }
    },
    3: { // 11.CCP
        label:"11.CCP",
        schedules:{
        0: [ // Sunday
            { subject: "DB201", teacher: "DR", room: "C2", start: "07:15", end: "08:45" },
            { subject: "OS201", teacher: "AA", room: "C2", start: "08:45", end: "09:30" },
            { subject: "Break 1", teacher: "N/A", room: "N/A", start: "09:30", end: "09:50" },
            { subject: "OS201", teacher: "AA", room: "C2", start: "09:50", end: "10:35" },
            { subject: "WEB102", teacher: "AK", room: "C4", start: "10:35", end: "12:05" },
            { subject: "ENG201", teacher: "JP", room: "A2", start: "12:05", end: "12:45" },
            { subject: "Break 2", teacher: "N/A", room: "N/A", start: "12:45", end: "13:05" },
            { subject: "ENG201", teacher: "JP", room: "A2", start: "13:05", end: "13:45" },
        ],
        1: [ // Monday
            { subject: "ARC201", teacher: "MS/IA", room: "C3", start: "07:15", end: "08:00" },
            { subject: "MAT201", teacher: "YA", room: "B6", start: "08:00", end: "08:45" },
            { subject: "WEB201", teacher: "AK", room: "C4", start: "08:45", end: "09:30" },
            { subject: "Break 1", teacher: "N/A", room: "N/A", start: "09:30", end: "09:50" },
            { subject: "WEB201", teacher: "AK", room: "C4", start: "09:50", end: "10:35" },
            { subject: "ENG201", teacher: "JP", room: "A2", start: "10:35", end: "12:05" },
            { subject: "OS201", teacher: "AA", room: "C2", start: "12:05", end: "12:45" },
            { subject: "Break 2", teacher: "N/A", room: "N/A", start: "12:45", end: "13:05" },
            { subject: "OS201", teacher: "AA", room: "C2", start: "13:05", end: "13:45" },
        ],
        2: [ // Tuesday
            { subject: "CHM201", teacher: "RY/SS", room: "Ch. Lab", start: "07:15", end: "08:45" },
            { subject: "MAT201", teacher: "YA", room: "B6", start: "08:45", end: "09:30" },
            { subject: "Break 1", teacher: "N/A", room: "N/A", start: "09:30", end: "09:50" },
            { subject: "MAT201", teacher: "YA", room: "B6", start: "09:50", end: "10:35" },
            { subject: "PHY201", teacher: "FM", room: "B9", start: "10:35", end: "12:05" },
            { subject: "ARB", teacher: "HS", room: "A7", start: "12:05", end: "12:45" },
            { subject: "Break 2", teacher: "N/A", room: "N/A", start: "12:45", end: "13:05" },
            { subject: "ISL", teacher: "NS", room: "A8", start: "13:05", end: "13:45" },
        ],
        3: [ // Wednesday
            { subject: "ARB", teacher: "HS", room: "A1", start: "07:15", end: "08:00" },
            { subject: "NE", teacher: "NS", room: "A8", start: "08:00", end: "08:45" },
            { subject: "ARC201", teacher: "MS/IA", room: "C3", start: "08:45", end: "09:30" },
            { subject: "Break 1", teacher: "N/A", room: "N/A", start: "09:30", end: "09:50" },
            { subject: "ARC201", teacher: "MS/IA", room: "C3", start: "09:50", end: "10:35" },
            { subject: "MAT201", teacher: "YA", room: "B6", start: "10:35", end: "12:05" },
            { subject: "DB201", teacher: "DR", room: "C1", start: "12:05", end: "12:45" },
            { subject: "Break 2", teacher: "N/A", room: "N/A", start: "12:45", end: "13:05" },
            { subject: "DB201", teacher: "DR", room: "C1", start: "13:05", end: "13:45" },
        ],
        4: [ // Thursday
            { subject: "PHY201", teacher: "FM", room: "BB1", start: "07:00", end: "08:20" },
            { subject: "Break 1", teacher: "N/A", room: "N/A", start: "08:20", end: "08:45" },
            { subject: "PE", teacher: "O", room: "PE", start: "08:45", end: "09:55" },
            { subject: "ARC201", teacher: "MS/IA", room: "C1", start: "09:55", end: "11:15" },
            { subject: "ENG201", teacher: "JP", room: "A2", start: "11:15", end: "11:55" },
            { subject: "Break 2", teacher: "N/A", room: "N/A", start: "11:55", end: "12:10" },
            { subject: "ENG201", teacher: "JP", room: "A2", start: "12:10", end: "12:55" },
            { subject: "Clubs", teacher: "???", room: "???", start: "12:55", end: "13:45" },
        ]
    }}
  };
  