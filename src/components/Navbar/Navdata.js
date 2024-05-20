export const menu = [
  {
    id: 1,
    label: "Home",
    to: "/",
  },
  {
    id: 2,
    label: "Admin",
    to: "/admin",
    private: true,
  },
  {
    id: 3,
    label: "Teachers",
    to: "/teacher",
  },
  {
    id: 4,
    label: "Courses",
    to: "#",
    submenu: [
      {
        id: 42,
        label: "Orion Computer Institute",
        to: "/course/orion_computer_institute",
        sibling: [
          {
            id: 421,
            label: "MS Office",
            to: "/course/ms",
          },
          {
            id: 422,
            label: "Database Programming",
            to: "/course/dp",
          },
          {
            id: 423,
            label: "Graphics Design",
            to: "/course/gd",
          },
        ],
      },
      {
        id: 41,
        label: "Orion Selai Proshikhon Center",
        to: "/course/orion_selai_proshikhon_center",
        sibling: [
          {
            id: 411,
            label: "Dress Making",
            to: "/course/dress",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    label: "Students",
    to: "/student",
    private: true,
  },

  {
    id: 7,
    label: "Notice",
    to: "/notice",
  },
  {
    id: 8,
    label: "Registration",
    to: "/registration",
  },
  {
    id: 9,
    label: "Gallery",
    to: "/gallery",
  },
  {
    id: 10,
    label: "Result",
    to: "/result",
  },
  {
    id: 11,
    label: "About Us",
    to: "/about",
  },
];
