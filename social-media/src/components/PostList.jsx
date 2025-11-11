import { useContext, useEffect, useState } from "react";
import { PostList as PostListData } from "../store/post-list-store";
import Post from "./Post";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {

  const { postList, fetching } = useContext(PostListData);  

  return(
    <>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 w-full sm:pl-70 pl-6 sm:pr-10 md:pr-6 pb-20 pt-20 gap-4">
        {fetching && <LoadingSpinner />}
        {!fetching && postList.length === 0 && <WelcomeMessage />}
        {!fetching && postList.map((post) => ( 
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  )
}

export default PostList;