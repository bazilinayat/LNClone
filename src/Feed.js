import React, { useState, useEffect } from 'react'
import './Feed.css'
import InputOption from './InputOption'
import Post from './Post'
import CreateIcon from '@mui/icons-material/Create'
import ImageIcon from '@mui/icons-material/Image'
import SubscritpionsIcon from '@mui/icons-material/Subscriptions'
import EventNoteIcon from '@mui/icons-material/EventNote'
import CalenarViewDayIcon from '@mui/icons-material/CalendarViewDay'

import { db } from './handleFirebase'
import { orderBy, query, serverTimestamp, addDoc, getDocs, collection } from 'firebase/firestore';

function Feed() {

    const [input, setInput] = useState('')

    /*
    state - like a react variable
    if we have multiple posts
    every variable you create using state, should have a set of functions
    posts - variables
    setPosts - function associated with each variable
    useState - called a hook, in the (), add the initial value for the variable 'posts'
    */
    const [posts, setPosts] = useState([])

    /*
    useEffect is a special hook
    Allows to fire up code when a feed component loads
    useEffect(() => {

    }, [])
    See the empty second argument '[]', this is a empty dependency
    this is make sure that even when the component re-renders, the code inside will not be executed

    Also, allows us to fire up code when the client re-renders - Only if we don't pass a second argument
    useEffect(() => {

    }, [a1, a2, ...])
    If the second argument is passed, the code inside will be executed whenever the component re-renders
     */

    useEffect(() => {

        const postsRef = collection(db, "posts");
        const q = query(postsRef, orderBy("timestamp", 'desc'));
        const querySnapshot = getDocs(q);
        querySnapshot.then((snap) => {
            snap.forEach((doc) => {
                setPosts(
                    snap.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data()
                    }))
                )
            })
        })
    });

    const sendPost = e => {
        e.preventDefault();

        addDoc(collection(db, "posts"), {
            name: 'BI',
            description: 'test',
            message: input,
            photoUrl: '',
            timestamp: serverTimestamp()
        });

        setInput("");
    };

  return (
    <div className='feed'>
        <div className='feed__inputContainer'>
            <div className='feed__input'>
                <CreateIcon />
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} type='text' />
                    <button onClick={sendPost} type='submit'>Send</button>
                </form>
            </div>

            <div className='feed__inputOptions'>
                <InputOption title='Photo' Icon={ImageIcon} colour='#70B5F9' />
                <InputOption title='Video' Icon={SubscritpionsIcon} colour='#E7A33E' />
                <InputOption title='Event' Icon={EventNoteIcon} colour='#C0CBCD' />
                <InputOption title='Write article' Icon={CalenarViewDayIcon} colour='#7FC15E' />
            </div>
        </div>

        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
            <Post 
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
            />
        ))}
       <Post 
            name='Bazil Inayat' 
            description='Some description here' 
            message='WOW what a clone sirji!!' 
       />

    </div>
  )
}

export default Feed
