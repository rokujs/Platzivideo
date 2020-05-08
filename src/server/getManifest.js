import fs from 'fs';

const getManifest = () => {
  try {
    return JSON.parse(fs.readFileSync(`${__dirname}/public/manifest.json`));
  } catch (e) {
    console.error(e);
  }
};

export default getManifest;
