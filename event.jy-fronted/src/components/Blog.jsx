import React from "react";
import BlogCard from "./EventCard";
import { Button } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Blog = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="m-0">Blogs</h2>
      <h6 className="m-0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h6>
      <div className="grid grid-cols-3 gap-20 my-10">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <div className="flex justify-center">
        <Button auto rounded>
          <h6 className="m-0 z-[-10]">View More</h6>{" "}
          <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default Blog;
