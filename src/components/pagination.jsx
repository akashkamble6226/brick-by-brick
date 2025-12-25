// thinking
//

import { useCallback, useEffect, useState } from "react";
import classes from "./infinite-scroll.module.css";
import pageClasses from "./pagination.module.css";

const Pagination = () => {
  const [posts, setPosts] = useState([]);
  const [skip, setSkip] = useState([]);
  const [totalPostsCount, setTotalPostsCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchPosts = useCallback(async (skipVal) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://dummyjson.com/posts?limit=10&skip=${skipVal}`
      );
      const data = await res.json();
      //   console.log("data", data.posts);
      setPosts(data.posts);
      setSkip(skipVal + 10);
      setTotalPostsCount(data.total);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPosts(0);
  }, []);

  const handlePageChange = (pageNum) => {
    fetchPosts(pageNum * 10);
  };
  return (
    <>
      {loading ? (
        <p style={{ textAlign: "center" }}>Loading...</p>
      ) : (
        <div className={classes.outerCard}>
          {posts.map((item, index) => (
            <SinglePost key={item.id} item={item} />
          ))}

          <PaginationComponent
            total={totalPostsCount}
            handlePageChange={handlePageChange}
          />
        </div>
      )}
    </>
  );
};

const PaginationComponent = ({ total, handlePageChange }) => {
  const totalPages = Math.floor(total / 10);
  console.log("totalPages", totalPages);
  return (
    <>
      <div className={pageClasses.paginationBox}>
        {Array.from({ length: totalPages }, (_, index) => (
          <div
            onClick={() => handlePageChange(index)}
            className={pageClasses.singlePage}
            key={index}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </>
  );
};

const SinglePost = ({ item }) => {
  return (
    <>
      <div className={classes.postCard}>
        <span>{item.title}</span>
        <span>{item.id}</span>
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

export default Pagination;
