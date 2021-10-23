export const allProjects = [
{
    id: 9,
    title: "Another Bee Project  (Lucy)",
    description: "Bee Project test ...",
    suburbs: "TOOWONG",
    beehives: 1,
    image: "https://www.google.com.au/",
    is_open: true,
    date_created: "2021-09-25T00:28:23.382748+10:00",
    owner: 6,
    min_required: 300,
    goal: 300,
    status: "closed"
  },
  {
    id: 11,
    title: "Backyard beehive project",
    description: "Yard space suitable for beehives...",
    suburbs: "BRIGHTON",
    beehives: 1,
    image: "https://www.google.com.au/",
    is_open: true,
    date_created: "2021-09-25T00:28:23.382748+10:00",
    owner: 7,
    min_required: 300,
    goal: 300,
    status: 0
  }
]

export const oneProject = {
    id: 9,
    title: "Another Bee Project  (Lucy)",
    description: "Bee Project test ...",
    suburbs: "TOOWONG",
    beehives: 1,
    image: "https://www.google.com.au/",
    is_open: true,
    date_created: "2021-09-25T00:28:23.382748+10:00",
    owner: 6,
    min_required: 300,
    goal: 300,
    status: "closed",
    pledges: [
        {
            id: 6,
            amount: 300,
            comment: "Pledge from beekeeper",
            anonymous: false,
            supporter: 8,
            project_id: 9
          },
          {
            id: 7,
            amount: 10,
            comment: "Pledge from Betty",
            anonymous: false,
            supporter: 7,
            project_id: 9
          }
    ],
};