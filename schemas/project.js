export default {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },

    {
      name: "stack",
      title: "Stack",
      type: "array",
      of: [{ type: "reference", to: [{ type: "stack" }] }],
    },

    {
      name: "image",
      title: "Image",
      type: "image",
      validation: (Rule) => Rule.required(),
    },

    {
      name: "link",
      title: "Link",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
};
