const AWS = require('aws-sdk');
AWS.config.update({
  region: 'eu-west-1',
  apiVersion: "latest",
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_AWS,
    secretAccessKey: process.env.SECRET_KEY_AWS,
  },
})
const s3 = new AWS.S3();

const utils = (function () {
  return {
    writeNewData,
    readData,
    getRelevantSubjects,
  };

  async function writeNewData(path, data) {
    const classBucketParams = {
      Bucket: 'student-assignment-class-bucket', 
      Key: `${path}.json`, 
      Body: JSON.stringify(data)
    }
    await s3.putObject(classBucketParams).promise();
  }

  async function readData(path) {
    const classBucketParams = {Bucket: 'student-assignment-class-bucket', Key: `${path}.json`}
    const response = await s3.getObject(classBucketParams).promise()
    const fileContent = response.Body.toString('utf-8');
    let fileContentObject = JSON.parse(fileContent);
    console.log(fileContentObject);

    return fileContentObject;
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
})();

module.exports = utils;