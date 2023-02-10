import React from 'react'
import './index.css'
import Image from '../image'
import Icon from '../icon'

const Post = ({content, date,image, author}) => {
    const {name, nickname,photo} = author
    console.log(image)
    return (
        <div className='post'>
            <div className='postHeader'> 
                <Icon source={author.photo}/>
                <p className='authorName'>{author.name}<img className='verifiedIcon' src="https://cdn-icons-png.flaticon.com/512/7641/7641727.png"/></p>
                <p>{author.nickname}</p>
                <p>{date}</p>
            </div>
            <div className='postBody'>
                <p className='content'>{content}</p>
                <Image source={image}/>
            </div>
               
        </div>       
    )
}
export default Post
