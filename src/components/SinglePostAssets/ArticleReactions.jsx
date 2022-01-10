import React from "react";
import { ClapButton, LikeButton } from "@lyket/react";

const ArticleReactions = () => {
  return (
    <div>
      <h4 className="self-center mb-6">ARTICLE REACTIONS</h4>
      <div className="grid grid-cols-4 lg:grid-cols-2 gap-6 justify-between items-center">
        <LikeButton id="like" namespace="post" hideCounterIfLessThan={0}>
          {({
            handlePress,
            totalLikes,
            userLiked,
            isLoading,
            isCounterVisible,
          }) => (
            <>
              <button
                onClick={handlePress}
                disabled={isLoading}
                className={userLiked ? "activeReaction" : "inactiveReaction"}
              >
                👍
                {isCounterVisible && (
                  <span className="flex flex-col text-lg">
                    {totalLikes}
                    <span className="font-segoe text-base">LIKE</span>
                  </span>
                )}
              </button>
            </>
          )}
        </LikeButton>
        <ClapButton
          id="clap"
          namespace="post"
          component={ClapButton.templates.Twitter}
        >
          {({
            handlePress,
            totalClaps,
            userClaps,
            isLoading,
            isCounterVisible,
          }) => (
            <>
              <button
                onClick={handlePress}
                disabled={isLoading}
                className={userClaps ? "activeReaction" : "inactiveReaction"}
              >
                👏
                {isCounterVisible && (
                  <span className="flex flex-col text-lg">
                    {totalClaps}
                    <span className="font-segoe text-base">CLAP</span>
                  </span>
                )}
              </button>
            </>
          )}
        </ClapButton>

        <LikeButton id="love" namespace="post">
          {({
            handlePress,
            totalLikes,
            userLiked,
            isLoading,
            isCounterVisible,
          }) => (
            <>
              <button
                onClick={handlePress}
                disabled={isLoading}
                className={userLiked ? "activeReaction" : "inactiveReaction"}
              >
                ❤️
                {isCounterVisible && (
                  <span className="flex flex-col text-lg">
                    {totalLikes}
                    <span className="font-segoe text-base">LOVE</span>
                  </span>
                )}
              </button>
            </>
          )}
        </LikeButton>

        <LikeButton id="party" namespace="post">
          {({
            handlePress,
            totalLikes,
            userLiked,
            isLoading,
            isCounterVisible,
          }) => (
            <>
              <button
                onClick={handlePress}
                disabled={isLoading}
                className={userLiked ? "activeReaction" : "inactiveReaction"}
              >
                🎉
                {isCounterVisible && (
                  <span className="flex flex-col text-lg">
                    {totalLikes}
                    <span className="font-segoe text-base">LOVE</span>
                  </span>
                )}
              </button>
            </>
          )}
        </LikeButton>
      </div>
    </div>
  );
};

export default ArticleReactions;
