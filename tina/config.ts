import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "3ef5f341-1012-4209-b31e-11292ecf3abd", // Get this from tina.io
  token: "4367dc59dabdd0723969c55e6e9c72efe8923491", // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "src/content/",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "author",
            label: "autor",
          },
          {
            label: "Date",
            name: "pubDatetime",
            type: "datetime",
            ui: {
              dateFormat: 'YY-MM-DD',
              parse: (value) => value && value.format('YY-MM-DD'),
            },
          },
          {
            type: "boolean",
            name: "featured",
            label: "feature"
          },
          {
            type: "boolean",
            name: "draft",
            label: "draft"
          },
          {
            type: 'image',
            label: 'foto del entrevistado',
            name: 'entrevistadoFoto',
          },
          {
            type: "string",
            label: "entrevista",
            name: "entrevistaUrl"
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
      
     
  
 
    
        ],
      },
    ],
  },
});
