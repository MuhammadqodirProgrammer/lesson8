import axios from "axios";
import { Modal } from "../../components/Modal/Modal";
import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../context/UserContex";
import "./post.css";
export const Posts = () => {
  const { user } = useContext(UserContext);
  const titleRef = useRef();
  const titleEditRef = useRef();
  const bodyEditRef = useRef();
  const bodyRef = useRef();
  const [posts, setPosts] = useState([]);
  const [postModal, setPostModal] = useState(false);
  const [editModal, seteditModal] = useState(false); 
  const [id ,setId] = useState("")
  const getPosts = async () => {
    const data = await axios.get("http://localhost:7777/posts");
    if (data) {
      setPosts(data.data);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);
  const handlePost = (evt) => {
    evt.preventDefault();
    axios
      .post("http://localhost:7777/posts", {
        title: titleRef.current.value,
        body: bodyRef.current.value,
        autor: user.first_name + " " + user.last_name,
      })
      .then((data) => {
        if (data.status === 201) {
          setPostModal(false);
          getPosts();
        }
      })
      .catch((err) => console.log(err));
  };
  const deletePosts = async (id) => {
    const data = await axios.delete(`http://localhost:7777/posts/${id}`);
    if (data) {
      getPosts();
    }
  };

  const handleDelete = (evt) => {
    let id = evt.target.dataset.postId;
    deletePosts(id);
  };

  const handleEditSubmit = (evt) => {
    evt.preventDefault();
    axios
      .put(`http://localhost:7777/posts/${id}`, {
        title: titleEditRef.current.value,
        body: bodyEditRef.current.value,
        autor: user.first_name + " " + user.last_name,
      })
      .then((data) => {
        if (data.status === 200) {
          seteditModal(false);
          getPosts();
        }
      })
      .catch((err) => console.log(err));
  };
  const Submit = (evt) => {
    let idDataset = evt.target.dataset.postId;
    setId(idDataset)
    seteditModal(true);
    handleEditSubmit()
    

  };
  return (
    <div>
      <button onClick={() => setPostModal(true)} className="btn btn-secondary">
        ADD POST +{" "}
      </button>
      <h2 className="h2 text-center my-5">Posts</h2>

      {posts.length ? (
        <div className=" posts-box ">
          {posts.map((post) => (
            <div key={post.id} class="card">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <h6 className="card-subtitle mb-5 text-muted">{post.body} </h6>
                <div className="btns-box">
                  <button
                    onClick={Submit}
                    data-post-id={post.id}
                    className="btn btn-warning "
                  >
                    EDIT
                  </button>
                  <button
                    onClick={handleDelete}
                    data-post-id={post.id}
                    className="btn btn-danger"
                  >
                    DELETE
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
      {postModal ? (
        <Modal modal={postModal} setModal={setPostModal} title={"Add post"}>
          <form onSubmit={handlePost}>
            <input
              className="form-control mb-3"
              ref={titleRef}
              type="text"
              placeholder="Title"
            />
            <input
              className="form-control mb-3"
              ref={bodyRef}
              type="text"
              placeholder="Body"
            />
            <button type="submit" className="btn btn-primary">
              SEND
            </button>
          </form>
        </Modal>
      ) : (
        ""
      )}
      {editModal ? (
        <Modal modal={editModal} setModal={seteditModal} title={"Edit post"}>
          <form onSubmit={handleEditSubmit}>
            <input
              className="form-control mb-3"
              ref={titleEditRef}
              type="text"
              placeholder="Title"
            />
            <input
              className="form-control mb-3"
              ref={bodyEditRef}
              type="text"
              placeholder="Body"
            />
            <button type="submit" className="btn btn-primary">
              SEND
            </button>
          </form>
        </Modal>
      ) : (
        ""
      )}
    </div>
  );
};
