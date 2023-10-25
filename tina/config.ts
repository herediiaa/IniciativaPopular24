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
        path: "src/content/blog",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titulo",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "author",
            label: "Autor",
          },
          {
            label: "Fecha",
            name: "pubDatetime",
            type: "datetime",
            ui: {
              timeFormat: "HH:mm"
            },
          },
          {
            type: "boolean",
            name: "featured",
            label: "Feature"
          },
          {
            type: "boolean",
            name: "draft",
            label: "Borrador"
          },
          {
            type: 'image',
            label: 'Imagen',
            name: 'entrevistadoFoto',
          },
          {
            type: "string",
            label: "Link de Entrevista",
            name: "entrevistaUrl"
          },
          {
            type: "string",
            name: "description", 
            label: "Descripcion",
            required: true
          },
     
      
     
  
 
    
        ],
      },
    ],
  },
});
