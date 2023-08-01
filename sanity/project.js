export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 90,
      },
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "details",
      title: "Details",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "client",
      title: "Client",
      type: "string",
    },
  ],
};
