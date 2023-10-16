import { useState } from "react";

const AddPost = ({ onAdd }) => {
    let [postValue, setPostValue] = useState("Here is a pre-filled new post")
    return <div>
        <textarea placeholder="Add post here" value={postValue} onChange={(e) => setPostValue(e.target.value)} />
        <button onClick={() => onAdd(postValue)}>Add</button>
    </div>
}

export default AddPost;