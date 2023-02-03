import { posts } from "../../data/posts";

const headers = {
  type: "CRUD", // Specify the header as a `CRUD` type
  options: {
    name: "Posts", // Name the sidebar option and the page title
    route: { path: "/posts" }, // Specify the page url
    posts,
    tableOptions: {
      isEditable: true, // Enable edit rows
      isDeletable: true, // Enable delete rows
    },
  },
  sections: [
    {
      fields: [
        {
          property: "ID", // Specify the prop you want to show
        },
        {
          label: "Image",
          property: "image",
          type: "image",
          tableOptions: {
            show: false,
          },
        },
        {
          property: "Title",
        },
        {
          label: "Date",
          property: "Date",
          type: "date",
        },
        {
          property: "Content",
        },
        {
          property: "Category",
        },
        {
          property: "Visible",
        },
      ],
    },
  ],
};

export default headers;
