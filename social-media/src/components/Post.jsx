import { useContext, useState } from "react";
import { PostList } from "../store/post-list-store";
import { MdDelete } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { TbView360 } from "react-icons/tb";

const Post = ({post}) => {

  const {deletePost} = useContext(PostList);

  return (
    <>
      <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white " >
          <button type="button" className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none " onClick={() => deletePost(post.id)}>
            <span className="sr-only">Notifications</span>
            <div className="absolute inline-flex items-center justify-center w-10 h-10 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-13 -end-90 sm:-top-13 sm:-end-90 md:-top-13 md:-end-75 xl:-end-90 dark:border-gray-900">
              <MdDelete />
            </div>
          </button>
        <div className="font-bold text-2xl">{post.id}</div>
          {post.title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{post.body}</p>
          {post.tags.map((tag) => (
            <span key={tag} className="bg-blue-800 text-white text-s font-medium me-2 p-2 rounded-sm dark:bg-blue-900 dark:text-blue-300">{tag}</span>
          ))}
        <div className="flex pt-5 gap-20">
          <div className="text-2xl">
            <AiFillLike />
            <span>
              {post.reactions?.likes ?? 0}
            </span>
          </div>
          <div className="text-2xl">
            <AiFillDislike  />
            <span>
              {post.reactions?.dislikes ?? 0}
            </span>
          </div>
          <div className="text-2xl">
            <TbView360 />
            <span className="text-black">
              {post.views}
            </span>
          </div>
        </div>
      </div>
    </>
  )

}

export default Post;