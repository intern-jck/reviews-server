const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');

const csvPathsTest = {
  'reviews': '../../../data-50K/reviews50K.csv',
  // 'reviews': '../../reviews-raw/reviews.csv',
  // 'photos': 'photosTest.csv',
  // 'reviewsChars': 'reviewCharTest.csv',
  // 'chars': 'charsTest.csv',
}

const getLength = (csvPath) => {
  console.log(csvPath);
  fs.createReadStream(path.resolve(__dirname, 'assets', csvPath))
  .pipe(csv.parse({ headers: true }))
  .on('error', error => console.error(error))
  .on('data', (row) => {
    // console.log(row);
    return row;
  })
  .on('end', (...args) => {
    console.log(`Parsed rows ${args}`)
    // return rowCount
  });
};

// console.log(getLength(csvPathsTest['reviews']));

// module.exports = {
//   getlength,
// }


getLength(csvPathsTest['reviews'])