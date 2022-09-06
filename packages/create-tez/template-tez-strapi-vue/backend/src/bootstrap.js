const fs = require("fs");
const path = require("path");
const mime = require("mime-types");
const lodash = require("lodash");
const {
    categories,
    authors,
    masterpages,
    articles,
    robots,
    pages
  } = require("../data/data.json");
  function getFileSizeInBytes(filePath) {
    const stats = fs.statSync(filePath);
    const fileSizeInBytes = stats["size"];
    return fileSizeInBytes;
  }
  function getFileData(fileName) {
    const filePath = `./data/uploads/${fileName}`;
  
    // Parse the file metadata
    const size = getFileSizeInBytes(filePath);
    const ext = fileName.split(".").pop();
    const mimeType = mime.lookup(ext);
  
    return {
      path: filePath,
      name: fileName,
      size,
      type: mimeType,
    };
  }
  
  async function setPublicPermissions(newPermissions) {
    const publicRole = await strapi
      .query("plugin::users-permissions.role")
      .findOne({
        where: {
          type: "public",
        },
      });
  
    // Create the new permissions and link them to the public role
    const allPermissionsToCreate = [];
    Object.keys(newPermissions).map(controller => {
      const actions = newPermissions[controller];
      const permissionsToCreate = actions.map(action => {
        return strapi.query("plugin::users-permissions.permission").create({
          data: {
            action: `api::${controller}.${controller}.${action}`,
            role: publicRole.id,
          },
        });
      });
      allPermissionsToCreate.push(...permissionsToCreate);
    });
    await Promise.all(allPermissionsToCreate);
  }
  async function createEntry({ model, entry, files }) {
    try {
      if (files) {
        for (const [key, file] of Object.entries(files)) {
          // Get file name without the extension
          const [fileName] = file.name.split('.');
          // Upload each individual file
          
          const uploadedFile = await strapi
            .plugin("upload")
            .service("upload")
            .upload({
              files: file,
              data: {
                fileInfo: {
                  alternativeText: fileName,
                  caption: fileName,
                  name: fileName,
                },
              },
            });
  
          // Attach each file to its entry
         lodash.set(entry, key, uploadedFile[0].id);
        }
      }
  
      // Actually create the entry in Strapi
      entry = {...entry,...{publishedAt:new Date().getTime()}}
      const createdEntry = await strapi.entityService.create(
        `api::${model}.${model}`,
        {
          data: entry,
        }
      );
    } catch (e) {
      console.log("model", entry, e);
    }
  }
  async function importCategories() {
    return Promise.all(
      categories.map((category) => {
        
        return createEntry({ model: "category", entry: category });
      })
    );
  }
  async function importRobots() {
    return Promise.all(
      robots.map((category) => {
        return createEntry({ model: "robot", entry: category });
      })
    );
  }
  async function importAuthors() {
    return Promise.all(
       
      authors.map((author) => {
        const files = {"Picture":getFileData(`${author.Name.replace(' ',"").toLowerCase()}.jpg`)}
        
        return createEntry({ model: "author", entry: author,files });
      })
    );
  }

  async function importMasterPages() {
    return Promise.all(
      masterpages.map((category) => {
        return createEntry({ model: "master-page", entry: category });
      })
    );
  }

  async function importPages() {
    return Promise.all(
      pages.map((category) => {
        return createEntry({ model: "page", entry: category });
      })
    );
  }


  async function importArticles() {
    return Promise.all(
      articles.map((article) => {
        const files = {"Image":getFileData(`${article.Title.replace(/ /g,"_").replace(/'/g,"_").replace(/;/g,"").toLowerCase()}.jpg`)}
        return createEntry({ model: "article", entry: article,files });
      })
    );
  }

async function isFirstRun() {
    const pluginStore = strapi.store({
      environment: strapi.config.environment,
      type: "type",
      name: "setup",
    });
    const initHasRun = await pluginStore.get({ key: "initHasRun" });
    await pluginStore.set({ key: "initHasRun", value: true });
    return !initHasRun;
  }
  async function importSeedData() {
    // Allow read of application content types
    await setPublicPermissions({
      article: ["find", "findOne"],
      author: ["find", "findOne"],
      "master-page": ["find", "findOne"],
      category: ["find", "findOne"],
      page: ["find", "findOne"],
      robot: ["find", "findOne"],

    });
  
    // Create all entries
    await importCategories();
    await importAuthors();
    await importRobots();
    await importMasterPages();
    await importPages();
    await importArticles();
  }
module.exports = async () => {
    const shouldImportSeedData = await isFirstRun();
  
    if (shouldImportSeedData) {
      try {
        console.log("Setting up the template...");
        await importSeedData();
        console.log("Ready to go");
      } catch (error) {
        console.log("Could not import seed data");
        console.error(error);
      }
    }
  };