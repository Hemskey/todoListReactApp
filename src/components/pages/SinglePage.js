import React from 'react'
import {useParams} from 'react-router-dom'

const SinglePage = () => {
    const aboutData = [
        {
            slug:'about-app',
            title:'About the app',
            description:'This todo app is simple - add things you need to get done, then mark it complete. If you need to delete something, send it to the bin by clicking the minus button!'
        },
        {
            slug:'about-author',
            title:'About the author',
            description:'My name is Joe MacDonald, and this is my first app!'
        }
    ]

    const {slug} = useParams()
    const aboutContent = aboutData.find(item =>item.slug === slug)
    const {title,description} = aboutContent
    
    return (
        <div className='main__content'>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}

export default SinglePage