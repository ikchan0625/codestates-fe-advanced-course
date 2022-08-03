# codestates-fe-advanced-course

배포 링크 : http://tunaboard.s3-website.ap-northeast-2.amazonaws.com
<br/>
<h3>gif 파일 </h3>

![pagenation](https://user-images.githubusercontent.com/62270168/182529681-ef113993-c4ea-4f9f-aef1-3093c3da559e.gif)
<h3>프로젝트 실행 방법  </h3>
1. termina에서 src 디렉토리로 진입  <pre><code>cd src </code></pre> <br/>
2. 로컬 환경에서 실행 <pre><code>npm run start </code></pre> 
<br/>
<br/>

<h3>사용한 스택 목록 </h3>
- React: v18.2.0 <br/>
- Styled-component: v5.3.5<br/>
- axios: v0.27.2<br/>
<br/>
<br/>


<h3>구현한 기능 목록 (Software Requirement Specification)</h3>

* 게시판 메인 페이지
  * 게시물 리스트
  * 하단 페이지네이션(페이지번호로 이동, 이전 페이지 이동, 다음페이지 이동)
* 게시물 상세 페이지
  * 게시물 상세정보
  * 게시물 댓글 보기


 
  <br/>
  <br/>

  <br/>
 <br/>
<h2>구현 방법 혹은 구현하면서 어려웠던 점</h3>

* 동적 라우팅
  * react-router-dom의 Routes, Route, Link, BrouserRouter 를 사용해 라우팅을 구현했습니다
  * App.js에서 '/posts/:id'로 path를 구분했습니다
* 게시물 목록 페이지
  * axios를 사용해서 API 를 호출하고, 해당 데이터의 userId, title 속성을 사용했습니다. 
  * API를 통해 전달 받은 데이터를 10개씩 잘라내어, 페이지를 구분했습니다.
* 게시물 상세 페이지
  * useParams를 사용해서, url에서 key값을 추출했습니다. 
  * 이후, key 값을 이용해서 , API 요청을 보내 게시글에 해당하는 댓글 데이터를 얻었습니다.


 
 <br/>
 <br/>
 <h2> 추가구현 사항 : Pagenation </h2>
 
 * Pagenation 구현 알고리즘 
  * 페이지네이션을 구현하기 위해서 게시물을 여러 페이지에 걸쳐서, 표시하려면 몇 개의 페이지가 필요한지 알아야 합니다. 
  * 이를 위해, const length = Math.ceil(pageLength / limit)
  * (length 는 게시글 전체의 수 , limit은 페이지당 보여지는 게시글 수 ) 전체 게시글의 수를, 페이지당 보여질 게시글의 수로 나누었습니다.
  * 이후, 나누어진 수를 Math.ceil()함수를 사용해, 크거나 같은 숫자 중 가장 작은 interger로 반환했습니다. 
  * ex) 95 / 10 = 10
  
* 페이지네이션 컴포넌트 구현 
  * 페이지네이션 컴포넌트는 메인 페이지의 보드 컴포넌트에서 총 게시글의 수 (pagelength), 페이지 당 게시글 수 (limit) , 현재 페이지 번호 (page)를 prop으로 전달 받습니다.
  * 위에서 구현해 놓은 알고리즘을 통해, length를 계산한 후, length만큼 루프를 돌면서 페이지 버튼을 출력하게 해주었습니다.
  * 그리고, 페이지 버튼에 onClick 이벤트가 발생하면, prop 으로 전달받은 setPage함수를 호출하여, 부모 컴포넌트의 상태를 변경해 줍니다. 
  * 이후, 재렌더링이 발생합니다.


<h2> 성능 최적화에 대한 고민  </h2>

* 상세보기 페이지 댓글 성능 개선 
  * 처음에 구상했던 방법은 Api에 url = 'https://jsonplaceholder.typicode.com/comments' 로 요청을 보내고,
  * 전달 받은 데이터에서 postId 가 일치하는 댓글의 정보를 사용하는 방식을 생각했었다.
  * 하지만, comments 의 갯수가 증가 할 수록, 사용하는 자원의 크기가 클것이 분명한 방식이었기에 다른 방식을 생각해야했다.


* useParams를 사용해, url 에서 key값을 추출 
  * useParams를 사용해, url 에서 key값을 추출하고,
  * API 에 key 값을 이용해서, 해당 게시글에 해당하는 댓글정보만을 얻었습니다. 
  * ex) https://jsonplaceholder.typicode.com/posts/${id}/comments
  
 

   
   
   
   
   
