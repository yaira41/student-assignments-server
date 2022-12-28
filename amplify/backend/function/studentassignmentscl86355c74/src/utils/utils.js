const fs = require("fs");

const utils = (function () {
  return {
    writeNewData,
    readData,
    getRelevantSubjects,
  };

  function writeNewData(path, data) {
    // let parsedData = JSON.stringify(data, null, 2);
    fs.writeFile(`./data/${path}.json`, data, (err) => {
      if (err) throw err;
      console.log("Data written to file");
    });
  }

  function readData(path) {
    // let rawdata = fs.readFileSync('student.json');
    // let student = JSON.parse(rawdata);
    // console.log(student);

    let data = fs.readFileSync(`./data/${path}.json`);
    let a = JSON.parse(data);
    console.log(a);
    return a;
  }

  function getRelevantSubjects(keys, data) {
    const subjects = getOnlySubjects(data);

    for (let i = 0; i < subjects.length; i++) {
      const subject = subjects[i];
      Object.keys(subject).forEach(function (key) {
        if (!keys.includes(key)) {
          delete subject[key];
        }
      });
    }

    return subjects;
  }

  function getOnlySubjects(data) {
    return data.filter((raw) => !raw.hasOwnProperty("ת.ז."));
  }

  function checkIfMatch(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
      if (!arr2.includes(arr1[0])) return false;
    }
    return true;
  }
})();

module.exports = utils;