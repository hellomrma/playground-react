
# 인프런
> <https://www.inflearn.com/course/react-velopert/dashboard>

## 누구든지 하는 리액트: 초심자를 위한 react 핵심 강좌
- 섹션 0. 리액트는 무엇인가
- 섹션 1. 리액트 프로젝트 시작하기
- 섹션 2. JSX
- 섹션 3. props 와 state
- 섹션 4. LifeCycle API
- 섹션 5. 리액트 작업환경 직접 설정하기
- 섹션 6. 인풋 상태 관리
- 섹션 7. 배열 데이터 렌더링 및 관리
- 섹션 8. 최적화, 활용, Ref

### 섹션 0. 리액트는 무엇인가
- 지속해서 데이터가 변화하는 대규모 애플리케이션 구축을 위해 제작됨.
- Virtual DOM 사용 (DOM 변화를 최소화 시켜주는 역할)
- 생태계가 크다. 많은 곳에서 사용한다.
- JSX 문법
- 자유도가 높다.

### 섹션 1. 리액트 프로젝트 시작하기
>Webpack, Babel 역할  
>여러 컴포넌트 파일을 합치기 위한 Webpack , JSX 문서 해석을 위한 Babel

>Node.js - 자바스크립트 런타임
> Yarn - Node Pakage Manager의 개선된 버전 (속도, 캐싱 시스템)

- 리액트는 create-react-app(<https://create-react-app.dev/>)을 통하여 시작

설치  
```
npm install -g create-react-app
yarn global add create-react-app
```

사용  
```
create-react-app hello-react
cd hello-react
yarn start
```

### 섹션 2. JSX
- JSX 문법을 사용할려면 아래와 같이 React를 꼭 import 해줘야 함.
```javascript	
import React, { Component } from 'react';
```

#### 컴포넌트 생성
```javascript
class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
			</div>
		);
	}
}
export default App;
```

#### 컴포넌트 불러오기
```javascript
import App from './App';
<div id="root"></div>
```

#### 코드작성 유의사항
- 태그는 닫혀야 한다
- 두개 이상의 엘리먼트는 하나의 엘리먼트로 감싸야한다.  
  또는 Fragment 사용

```javascript
import React, { Component, Fragment } from 'react';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div>
          Hello
        </div>
        <div>
          Bye
        </div>
      </Fragment>
    );
  }
}

export default App;
```

#### JSX 안에 자바스크립트 값 사용
```javascript
import React, { Component } from 'react';

class App extends Component {
  render() {
    const name = 'react';
    return (
      <div>
        hello {name}!
      </div>
    );
  }
}

export default App;
```

#### 조건부 렌더링
- If문 사용 불가 (사용하려면 즉시 실행 함수 표현 사용해야 함)
- 보통 JSX 내부에서는 삼항 연산자 또는 AND 연산자 사용

>삼항 연산자
```javascript
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        {
          1 + 1 === 2 
            ? (<div>맞아요!</div>)
            : (<div>틀려요!</div>)
        }
      </div>
    );
  }
}

export default App;
```
>AND 연산자
```javascript
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        {
          1 + 1 === 2 && (<div>맞아요!</div>)
        }
      </div>
    );
  }
}

export default App;
```

>즉시 실행 함수 표현 사용시
```javascript
import React, { Component } from 'react';

class App extends Component {
  render() {
    const value = 1;
    return (
      <div>
        {
          (function() {
            if (value === 1) return (<div>하나</div>);
            if (value === 2) return (<div>둘</div>);
            if (value === 3) return (<div>셋</div>);
          })()
        }
      </div>
    );
  }
}

export default App;

(() => {
	if (value === 1) return (<div>하나</div>);
	if (value === 2) return (<div>둘</div>);
	if (value === 3) return (<div>셋</div>);
})()
```
### 섹션 3. props 와 state

### 섹션 4. LifeCycle API

### 섹션 5. 리액트 작업환경 직접 설정하기

### 섹션 6. 인풋 상태 관리

### 섹션 7. 배열 데이터 렌더링 및 관리
### 섹션 8. 최적화, 활용, Ref

#### 관련 자료
- <https://react-anyone.vlpt.us>
- <https://react.vlpt.us>