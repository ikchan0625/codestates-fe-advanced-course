# codestates-fe-advanced-course

배포 링크 : http://tunaboard.s3-website.ap-northeast-2.amazonaws.com
<br/>

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

*게시판메인페이지
  *게시물리스트
  *하단페이지네이션(페이지번호로 이동, 이전 페이지 이동, 다음페이지 이동)
*게시물 상세 페이지
  *게시물 상세정보
  *게시물 댓글 보기

  

  <br/>
  <br/>

  <br/>
 <br/>
<h2>구현 방법 혹은 구현하면서 어려웠던 점</h3>
<h4>동적 라우팅</h4>
  ```react-router-dom``` 의 ```Routes```, ```Route```, ```Link```,```BrouserRouter``` 를 사용해 라우팅을 구현했습니다.<br/>
   App.js에서 ```'/posts/:id'``` path를 구분했습니다. 
<h4>게시물 목록 페이지</h4>
  - ```axios```를 사용해서 API 를 호출하고, 해당 데이터의 userId, title 속성을 사용했습니다.  <br/>
    API를 통해 전달 받은 데이터를 10개씩 잘라내어, 페이지를 구분했습니다. 
<h4>게시물 상세 페이지</h4>
  -```useParams```를 사용해서, url에서 key값을 추출했습니다. 이후, key 값을 이용해서 , API 요청을 보내 게시글에 해당하는 댓글 데이터를 얻었습니다.
 
 <br/>
 <br/>
 <h2> 추가구현 사항 : Pagenation </h2>
 <h4>Pagenation 구현 알고리즘 </h4>
  게시물을 여러 페이지에 걸쳐서, 표시하려면 몇 개의 페이지가 필요한지 알아야 합니다. <br/>
  이를 위해,  ```const length = Math.ceil(pageLength / limit);``` (length 는 게시글 전체의 수 , limit은 페이지당 보여지는 게시글 수 ) 전체 게시글의 수를, 페이지당 보여질 게시글의   수로 나누었습니다. <br/>
  이후, 나누어진 수를 Math.ceil()함수를 사용해, 크거나 같은 숫자 중 가장 작은 interger로 반환했습니다. ```ex) 95 / 10 = 10```</br>
  
  
  
  
  
  
 

   
   
   
   
   
