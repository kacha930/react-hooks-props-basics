import React from "react";
import BlogContent from "./BlogContent";
import Comment from "./Comment";
// We can add as many additional props as we want by assigning them in the parent component: <BlogContent
                                                                            //articleText="Dear Reader: Bjarne Stroustrup has the perfect lecture oration."
                                                                             //isPublished={true}
                                                                             //minutesToRead={1}
                                                                                ///>

   //Note: for props that are strings, we don't need to place curly braces around the values; for other data types (numbers, booleans, objects, etc), we need curly braces.                                                                             
function BlogPost() {
  return (
    <div id="blog-post">
    
      <BlogContent articleText="Dear Reader: Bjarne Stroustrup has the perfect lecture oration." />
      <Comment commentText="I agree with this statement. - Angela Merkel" />
      <Comment commentText="A universal truth. - Noam Chomsky" />
      <Comment commentText="Truth is singular. Its ‘versions’ are mistruths. - Sonmi-451" />
    </div>
  );
}

export default BlogPost;
