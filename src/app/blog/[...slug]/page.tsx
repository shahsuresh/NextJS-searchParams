import React from "react";

const BlogPage = async (props: any) => {
  const { slug } = await props.params;

  //http://localhost:3000/blog/technoloogy/frontend/javascript/nodejs
  console.log(slug, "SLUG");

  //output: Server   (4) ['technoloogy', 'frontend', 'javascript', 'nodejs']0: "technoloogy"1: "frontend"2: "javascript"3: "nodejs"length: 4[[Prototype]]: Array(0) SLUG
  return <div>BlogPage</div>;
};

export default BlogPage;
