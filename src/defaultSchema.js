const Schema = require("@sanity/schema").default;

module.exports = Schema.compile({
  name: "myBlog",
  types: [
    {
      type: "object",
      name: "blogPost",
      fields: [
        {
          title: "Title",
          type: "string",
          name: "title"
        },
        {
          title: "Body",
          name: "body",
          type: "array",
          of: [
            { type: "block" },
            {
              name: "figure",
              type: "object",
              fields: [
                {
                  name: "alt",
                  type: "string"
                },
                {
                  name: "caption",
                  type: "string"
                },
                {
                  name: "image",
                  type: "image"
                }
              ]
            },
            {
              name: "code",
              type: "object",
              title: "Code",
              fields: [
                {
                  title: "Code",
                  name: "code",
                  type: "text"
                },
                {
                  name: "language",
                  title: "Language",
                  type: "string"
                },
                {
                  title: "Highlighted lines",
                  name: "highlightedLines",
                  type: "array",
                  of: [
                    {
                      type: "number",
                      title: "Highlighted line"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
});
