import React, { useState } from 'react';
import { PlusOutlined,UserOutlined } from '@ant-design/icons';
import { Modal, Upload, Button , Avatar} from 'antd';
import ImgCrop from 'antd-img-crop';
import './ProfileImageUploader.css';
import helperFunctions from 'helpers';


const { localStorageHelperFunctions: {getFromLocalStorage} } = helperFunctions

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const ProfileImageUploader = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState([]);
  const [uploadSuccess, setUploadSuccess] = useState(false); 

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file) => {
    setUploadSuccess(false);
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };

  const handleChange = ({ file, fileList: newFileList }) => {
    console.log("SON STATUS : ",file.status)
    if (file.status === 'error'){
      setUploadSuccess(false);
        Modal.error({
          title: 'This is an error message',
          content:  `${file.name} file upload failed.`,
      });
      
    }
    else{
      setUploadSuccess(true);
    }
    setFileList(newFileList); 
    
  };

  const handleUpload = () => {
    if (fileList.length === 1 && fileList[0].response.status === 'done') {
      setUploadSuccess(true);
      const avatar_path = fileList[0].thumbUrl;
      const currentUser= getFromLocalStorage('currentUser');
      localStorage.setItem(
        'currentUser',
        JSON.stringify({
          ...JSON.parse(localStorage.getItem('currentUser')),
          avatar_path,
        })
      );
      localStorage.setItem(
        `user_${currentUser.uname}`,
        JSON.stringify({
          ...getFromLocalStorage(`user_${currentUser.uname}`),
          avatar_path,
        })
      );
      setUploadSuccess(false);
     
    }
  };

  const uploadButton = (
    <div className='upload'>
      {getFromLocalStorage('currentUser').avatar_path === null ? <><PlusOutlined/>  <div className='uploadtext'>Upload</div> </> :   <Avatar icon={<UserOutlined/>} className='avatar' src={getFromLocalStorage('currentUser')?.avatar_path} />}
    </div>
  );

  return (
    <div className="updatediv">
      <ImgCrop rotationSlider>
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-circle"
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}
        > 
          {fileList.length === 0 && uploadButton}
        </Upload>
      </ImgCrop>
      <Modal visible={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>
        <Button disabled={uploadSuccess === false} type='primary' onClick={handleUpload} className='buttonupdate'>
          Update Avatar
        </Button>
      
    </div>
  );
};

export default ProfileImageUploader;
