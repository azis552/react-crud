import { useState, useEffect } from "react"

import api from "../../api"

import { Link } from "react-router-dom"

export default function PostsIndex() {
    const [posts, setPosts] = useState([]);

    const fetchDataPosts = async () => {
        await api.get("/posts").then((response) => {
            setPosts(response.data.data.data);
        })
    };

    useEffect(() => {
        fetchDataPosts();
    }, []);
 
    return (
        <div className="container mt-5 mb-5 ">
            <div className="row">
                <div className="col-md-12">
                    <div className="card border-0 shadow">
                        <div className="card-body">
                            <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Content</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {posts.map((post) => (
                                        <tr key={post.id}>
                                            <td>{post.id}</td>
                                            <td>{post.title}</td>
                                            <td>{post.content}</td>
                                            <td>
                                                aksi
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}