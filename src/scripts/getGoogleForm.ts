import { googleFormsToJson } from 'react-google-forms-hooks';
import fs from 'fs';
import path from 'path';

const saveJsonToFile = (filename: string, json: object) => {
  const filePath = path.resolve(__dirname, filename);
  fs.writeFile(filePath, JSON.stringify(json), 'utf8', function (err) {
    if (err) throw err;
  });
};

export const run = async () => {
  const result = await googleFormsToJson(
    'https://docs.google.com/forms/d/e/1FAIpQLSe5U3qvg8WHs4nkU-e6h2RlAD7fKoCkou6HO2w2-tXYIA_F8g/viewform',
  );
  // https://forms.gle/UeRKKVb5sdV4U1sk9
  saveJsonToFile('form.json', result);
};
