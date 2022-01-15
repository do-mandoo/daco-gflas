import React from 'react';

// const Posts = ({ posts }) => {
//   return (
//     <div>

//     </div>
//   );
// };

const ExampleShowResult = ({ searchResult }) => {
  // console.log(searchResult[0], '서치리절트');
  console.log(searchResult, '값 입력');
  const posts = searchResult[0];
  // console.log(posts, '이거 맞지않아?');

  if (posts) {
    <div>{posts.data.sequences}</div>;
    return null;
  }
  if (!posts) {
    return <div>값이 없습니다.</div>;
  }
  // const mapsearch = posts.map(post => console.log(post, 'postpsot'));

  // console.log(mapsearch);
  return (
    <div>
      <div>찾은 값:</div>
      {posts && posts.map(post => <div key={post.data.result}>{post.data.result}</div>)}
    </div>
  );
};

export default ExampleShowResult;
