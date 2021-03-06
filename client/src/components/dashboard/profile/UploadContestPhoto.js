import React from 'react';
import { Upload, message } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { apiUrl } from '../../../api';

const { Dragger } = Upload;


const UploadContestPhoto = () => {
  const login = useSelector((state) => state.login.user.id);

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt10M = file.size / 1024 / 1024 < 8;
    if (!isLt10M) {
      message.error('Image must smaller than 8MB!');
    }
    return isJpgOrPng && isLt10M;
  };

  const props = {
    name: 'contest_pic',
    multiple: false,
    action: `${apiUrl}/api/auth/upload-contestpics/${login}`,
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
    beforeUpload,
  };

  return (
    <div className='upload_profile'>
      <p className='text-secondary'>
        <b>Upload Picture to Take Part in Contest</b>
      </p>
      <Dragger {...props}>
        <p className='ant-upload-drag-icon'>
          <UserOutlined className='text-secondary' />
        </p>
        <p className='ant-upload-text text-secondary fs-6'>
          Click or drag file to this area to upload
        </p>
      </Dragger>
    </div>
  );
};

export default UploadContestPhoto;
