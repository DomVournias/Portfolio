import React from "react";
import ArticleReactions from "./ArticleReactions";
import ArticleShares from "./ArticleShares";

const SinglePostSidebarRight = (props) => {
  return (
    <div className="relative flex flex-col xs:w-4/4 lg:w-1/4 p-4 mt-6">
      <div className="sticky top-10 text-center flex flex-col gap-10">
        <ArticleReactions />
        <ArticleShares
          site={props.site}
          slug={props.slug}
          title={props.title}
        />
      </div>
    </div>
  );
};

export default SinglePostSidebarRight;
