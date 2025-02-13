import { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";

import api from "../../api";
import { use } from "react";

export default function PostsEdit() {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [error, setError] = useState([]);

  const navigate = useNavigate();

  const { id } = useParams();

  const fetchDetailsPost = async () => {
    await api.get(`/posts/${id}`).then((response) => {
        console.log(response.data.data);
      setTitle(response.data.data.title);
      setContent(response.data.data.content);
      setImage(response.data.data.image);
    });
  };

  useEffect(() => {
    fetchDetailsPost();
  }, []);

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      console.log("Selected file:", file); // Debugging
      setImage(file);
    }
  };

  const updatePost = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("content", content);
    formData.append("_method", "PUT");

    await api.post(`/posts/${id}`, formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    )
        .then(() => {
            navigate("/posts");
        })
        .catch(error => {
            setError(error.response.data);
        });
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-12">
            <div className="card border-0 shadow">
                <div className="card-body">

                    <form onSubmit={updatePost}>
                        <div className="mb-3">
                            <label htmlFor="image" className="form-label fw-bold">Image</label>
                            <input type="file" className="form-control" 
                            id="image" onChange={handleFileChange} />
                            {
                                error.image && (
                                    <div className="alert alert-danger mt-2">
                                        {error.image}
                                    </div>
                                )
                            }
                            <img src={image} alt="" style={{ width: "100px" }} className="mt-2"/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="title" className="form-label fw-bold">Title</label>
                            <input type="text" className="form-control" 
                            id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                            {
                                error.title && (
                                    <div className="alert alert-danger mt-2">
                                        {error.title}
                                    </div>
                                )
                            }
                        </div>

                        <div className="mb-3">
                            <label htmlFor="content" className="form-label fw-bold">Content</label>
                            <textarea className="form-control" 
                            id="content" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                            {
                                error.content && (
                                    <div className="alert alert-danger mt-2">
                                        {error.content}
                                    </div>
                                )
                            }
                        </div>

                        <button type="submit" className="btn btn-primary btn-md rounded-sm shadow border-0">Update</button>
                    </form>

                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
