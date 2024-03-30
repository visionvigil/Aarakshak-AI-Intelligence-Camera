import AWS from 'aws-sdk';

let region = 'ap-south-1';
let securityKey = 'SqwOJQ+kYWKUBKyEkw7GvTsXucxhPi3AZvESq6H8';
let accessKeyId =  'AKIAUI6LFRBNBWXACRCT';

// aws-config.js
const awsConfig = {
    accessKeyId: `${accessKeyId}`,
    secretAccessKey: `${securityKey}`,
    region: `${region}`,
};

AWS.config.update(awsConfig);

const s3 = new AWS.S3();

const uploadToS3 = (file, key) => {
  const params = {
    Bucket: 'videouploading-aarakshak',
    Key: key,
    Body: file,
    ContentType: file.type,
  };

  return s3.upload(params).promise();
};

export default uploadToS3;