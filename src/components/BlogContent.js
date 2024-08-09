import React from "react";

function BlogContent(props) {


  // If we add a console.log in the BlogContent component to inspect the props: => // => { articleText: "Dear Reader: Bjarne Stroustrup has the perfect lecture oration." }

  //This line is telling React to place the value that props.articleText represents within the <div>.
  return <div id="blog-content">{props.articleText}</div>;
}

export default BlogContent;
