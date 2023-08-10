import React, { useState }  from 'react'
import { Button, Input } from 'antd'
import style from './AddReview.module.css'
import { useDispatch } from 'react-redux';
import Actions from '../../../redux/actions';
import helperFunctions from '../../../helpers';

const {controlReviewAction: {addReview}} = Actions;
const {getFromLocalStorage} = helperFunctions

export default function AddReview({id}) {
    const dispatch = useDispatch();
    const [content, setContent] = useState('');
    const handleClick = () => {
        let user = getFromLocalStorage('currentUser')
        const payload = {
            id,
            author_details : {
                username: user.uname,
                avatar_path: null,
            },
            content,
        }
        dispatch(addReview(payload));
        setContent('');
    }

  return (
    <div className={style.addreview}>
        <Input.TextArea onPressEnter={handleClick} value={content} onChange={(e) => setContent(e.target.value)} rows={3} className={style.textarea}/>
        <Button onClick={() => handleClick()} className={`${style.textarea} ${style.button}`} type='primary' htmlType="submit">Add Review</Button>
    </div>
  )
}
