import {s3} from '../../../utils/S3Bucket';
import {supabase} from '../../../utils/supabase';

export const uploadVideoToS3 = async (file: string) => {
  const fileExtension = file.split('.').pop();
  const bucketName = 'clipshare-app';
  const key = `${Date.now()}.${fileExtension}`;
  const contentType = `video/${fileExtension}`;
  const body = await fetch(file).then(res => res.blob());

  const params = {
    Bucket: bucketName,
    Key: key,
    Body: body,
    ContentType: contentType,
    ACL: 'public-read',
  };
  try {
    const response = await s3.upload(params).promise();
    console.log('Upload successful:', response.Location);
    return response.Location;
  } catch (error) {
    console.log(error);
  }
};

export const saveDataToSupabase = async (
  title: string,
  description: string,
  awsVideoUrl: string | undefined,
  users: never[],
) => {
  const {data, error} = await supabase
    .from('PostLists')
    .insert([{title, description, video: awsVideoUrl, user_id: users}])
    .select();
  if (data) {
    console.log(data);
  }
  if (error) {
    console.log(error);
  }
};
