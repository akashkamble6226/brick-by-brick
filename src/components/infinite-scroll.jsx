// problem statement

// fetch data
// create single post UI
// fetch initially 10 , as goes beyond 9th post , fetch 10 more likewise
// repeate,

//https://dummyjson.com/posts

import { useEffect, useState, useRef, useCallback } from "react";
import classes from "./infinite-scroll.module.css";

const InfiniteScroll = () => {
  const [posts, setPosts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const observerTarget = useRef(null);

  const fetchPosts = useCallback(async (skipValue) => {
    setIsLoading(true);
    try {
      const res = await fetch(
        `https://dummyjson.com/posts?limit=10&skip=${skipValue}`
      );
      const data = await res.json();
      setPosts((prev) => [...prev, ...data.posts]);
      setSkip(skipValue + 10);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Initial fetch
  useEffect(() => {
    fetchPosts(0);
  }, []);

  // Intersection Observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading) {
          fetchPosts(skip);
        }
      },
      { threshold: 0.1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => observer.disconnect();
  }, [skip, isLoading, fetchPosts]);

  return (
    <>
      <div className={classes.outerCard}>
        {posts.map((item, index) => (
          <SinglePost key={item.id} item={item} />
        ))}
        <div ref={observerTarget} style={{ height: "20px" }} />
        {isLoading && <p style={{ textAlign: "center" }}>Loading...</p>}
      </div>
    </>
  );
};

const SinglePost = ({ item }) => {
  return (
    <>
      <div className={classes.postCard}>
        <span>{item.title}</span>
        <p>{item.body}</p>
        <div className={classes.likeSection}>
          <span>Likes {item.reactions.likes}</span>
          <span>Dislikes {item.reactions.dislikes}</span>
          <span>Views {item.views}</span>
        </div>
      </div>
    </>
  );
};

export default InfiniteScroll;
