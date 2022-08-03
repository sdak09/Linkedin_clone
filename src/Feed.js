import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import PhotoIcon from "@material-ui/icons/Photo";
import YouTubeIcon from "@material-ui/icons/YouTube";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import InputOption from "./inputOption";
import Post from "./Post";
import { getDocs, colRef } from "./firebase";
// import firebase from 'firebase';

function Feed() {
  const [input, setInput] = useState(" ");
  const [allPosts, setAllPosts] = useState([]);

  // useEffect(() => {
  //       db.collection("posts").orderBy("timestamp","desc")
  //       .onSnapshot(Snapshot => (
  //         setPosts(Snapshot.docs.map(doc => ({

  //             id: doc.id,
  //             data: doc.data(),

  //         }))
  //         )
  //       ))
  //       }, []);
  // connect with firebase

  const sendPost = async (event) => {
    event.preventDefault();
    if (input) {
      const res = await fetch(
        "https://linkedin-clone-yt-80e9a-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            input,
          }),
        }
      );
      if (res) {
        alert("Data Stored");
      }
    } else {
      alert("Please fill the data");
    }

    // db.collection('posts').add({
    //   name:'Dakshita Sharma',
    //   description: 'this is a test',
    //   message: input,
    //   photoUrl:'',
    //   timestamp: firebase.firestore.fieldvalue.serverTimestamp()
    // })
    setInput("");
  };

  useEffect(() => {
    const getPost = () => {
      let filterData = [];

      getDocs(colRef).then((snapshot) => {
        snapshot.docs.forEach((docs) => {
          filterData.push({ ...docs.data(), id: docs.id });
          setAllPosts(filterData);
        });
      });
    };
    getPost();
  }, []);
  console.log(allPosts);
  return (
    <div>
      <div className="Feed">
        <div className="Feed__input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              type="text"
              placeholder="Create a post"
            />
            <button onClick={sendPost} type="submit">
              {" "}
              Send
            </button>
          </form>
        </div>
        <div className="Feed__inputOption">
          <InputOption Icon={PhotoIcon} title="Photo" color="#005ce6" />
          <InputOption Icon={YouTubeIcon} title="Video" color="#009900" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#e68a00" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#cc2900"
          />
        </div>
      </div>
      {/* {posts.map(({ id, data: { name, description, message, photoUrl } }) => {
        <Post
          keys={id}
          name={name}
          description={description}
          photoUrl={photoUrl}
        />;

      })} */}
      {allPosts?.map((data) => {
        return <Post key={data._id} message={data?.post} />;
      })}
    </div>
  );
}
export default Feed;
