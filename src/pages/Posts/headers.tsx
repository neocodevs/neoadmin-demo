import { posts } from "../../data/posts";

const headers = {
  type: "CRUD", // Specify the header as a `CRUD` type
  options: {
    name: "Post", // Name the sidebar option and the page title
    route: { path: "/posts", home: true }, // Specify the page url
    requests: {
      findRequest: () => Promise.resolve(posts),
    },
    tableOptions: {
      isEditable: true, // Enable edit rows
      isDeletable: true, // Enable delete rows
    },
  },
  sections: [
    {
      fields: [
        {
          property: "id", // Specify the prop you want to show
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
          property: "title",
        },
        {
          label: "Date",
          property: "date",
          type: "date",
        },
        {
          property: "content",
        },
        {
          property: "category",
        },
        {
          property: "visible",
        },
      ],
    },
  ],
};

export default headers;
