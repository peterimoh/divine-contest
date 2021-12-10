import React from 'react';
import { Upload, message } from 'antd';
import ImgCrop from 'antd-img-crop';
import { InboxOutlined } from '@ant-design/icons';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
// import { uploadDpAction } from '../../../store/action/detail.action';

const UploadDP = () => {
  const { Dragger } = Upload;

  const login = useSelector((state) => state.login.user.id);
  // const dispatch = useDispatch();

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt10M = file.size / 1024 / 1024 < 10;
    if (!isLt10M) {
      message.error('Image must smaller than 10MB!');
    }
    return isJpgOrPng && isLt10M;
  };

  const onChange = (info) => {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);

    if (imgWindow) {
      imgWindow.document.write(image.outerHTML);
    } else {
      window.location.href = src;
    }
  };

  const props = {
    name: 'profile_pic',
    multiple: false,
    onPreview: onPreview,
    action: `http://localhost:8080/api/auth/upload/${login}`,
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
    beforeUpload,
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  return (
    <div className='upload_profile'>
      {message.config({
        top: 100,
        duration: 2,
      })}
      <p>Upload Profile (HeadShot) Picture</p>
      <ImgCrop grid shape='round'>
        <Dragger {...props}>
          <p className='ant-upload-drag-icon'>
            <InboxOutlined  className='text-secondary'/>
          </p>
          <p className='ant-upload-text text-secondary fs-6'>
            Click or drag file to this area to upload Profile Picture
          </p>
        </Dragger>
      </ImgCrop>
      
    </div>
  );
};

export default UploadDP;
