import loadConfigFile from 'rollup/dist/loadConfigFile';
import * as path from 'path';
import * as rollup from 'rollup';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const f = async () => {
  const bundleArray = [];

  const { options, warnings } = await loadConfigFile(path.resolve(__dirname, '../rollup.config.js'), { format: 'es' });

  console.log(`We currently have ${warnings.count} warnings`);
  warnings.flush();

  for (const optionsObj of options) {
    const bundle = await rollup.rollup(optionsObj);
    const { output } = await bundle.generate(optionsObj.output);
    bundleArray.push(output);

    // await Promise.all(optionsObj.output.map(bundle.write));

    console.log("bundleArray", bundleArray)
    return bundleArray;
  }

}

f();
