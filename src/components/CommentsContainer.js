import React from "react";
import CommentsList from "./Comments";

const commentsData = [
  {
    name: "Khusbu",
    text: "A computer program can easily produce gibberish - especially if it has been provided with garbage beforehand. ",
    replies: [],
  },
  {
    name: "Unknown",
    text: "This program does something a little different.",
    replies: [
      {
        name: "Person1",
        text: "First level of nesting",
        replies: [
          {
            name: "Person2",
            text: "Second level of nesting",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Khusbu",
    text: "A computer program can easily produce gibberish - especially if it has been provided with garbage beforehand.",
    replies: [
      {
        name: "Ramesh",
        text: "This program does something a little different",
        replies: [],
      },
    ],
  },
  {
    name: "Unknown",
    text: "It takes a block of text as input and works out the proportion of characters",
    replies: [
        {
          name: "Ramesh",
          text: "This program does something a little different",
          replies: [],
          },
          {
            name: "Khusbu",
            text: "This program does something a little different",
            replies: [],
          },
    ],
  },
  {
    name: "Khusbu",
    text: "This program does something a little different",
    replies: [
      {
        name: "Person1",
        text: "First level of nesting",
        replies: [
          {
            name: "Person2",
            text: "Second level of nesting",
            replies: [
              {
                name: "Person3",
                text: "Third level of nesting",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Khusbu",
    text: "This program does something a little different",
    replies: [],
  },
];





const CommentsContainer = () => {
  return (
    <div className="m-3 p-2">
      <h2 className="font-bold text-2xl">Comments </h2>
      <CommentsList comments={commentsData}/>
    </div>
  );
};

export default CommentsContainer;
