import React from "react";
import BlogCard from "./BlogCard";
import { Button } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Blog = () => {
  return (
    <div className="mx-40"> 
      <div className="flex flex-col items-center justify-center">
        <h2 className="m-0 font-MontserratBold">Blogs</h2>
        <h6 className="m-0 font-MontserratSemiBold text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h6>
        <div className="grid grid-cols-3 gap-20 my-10">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
        <div className="flex justify-center">
          <Button auto rounded className="z-[0] !bg-dSecondary">
            View More
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
