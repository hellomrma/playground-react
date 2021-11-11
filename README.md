
**인프런** <https://www.inflearn.com/course/react-velopert/dashboard>
- 위 인프런 강의를 요약한 내용임

# 누구든지 하는 리액트: 초심자를 위한 react 핵심 강좌
- 섹션 0. 리액트는 무엇인가
- 섹션 1. 리액트 프로젝트 시작하기
- 섹션 2. JSX
- 섹션 3. props 와 state
- 섹션 4. LifeCycle API
- 섹션 5. 리액트 작업환경 직접 설정하기
- 섹션 6. 인풋 상태 관리
- 섹션 7. 배열 데이터 렌더링 및 관리
- 섹션 8. 최적화, 활용, Ref

## 섹션 0. 리액트는 무엇인가
- 지속해서 데이터가 변화하는 대규모 애플리케이션 구축을 위해 제작됨.
- Virtual DOM 사용 (DOM 변화를 최소화 시켜주는 역할)
- 생태계가 크다. 많은 곳에서 사용한다.
- JSX 문법
- 자유도가 높다.

## 섹션 1. 리액트 프로젝트 시작하기
**Webpack, Babel**  
여러 컴포넌트 파일을 합치기 위한 Webpack , JSX 문서 해석을 위한 Babel  

**Node.js** - 자바스크립트 런타임  
**Yarn** - Node Pakage Manager의 개선된 버전 (속도, 캐싱 시스템)

- 리액트는 [create-react-app](https://create-react-app.dev/)을 통하여 시작

**설치**  
```sh
npm install -g create-react-app
yarn global add create-react-app
```

**사용**  
```sh
create-react-app hello-react  
cd hello-react  
yarn start
```

## 섹션 2. JSX
- JSX 문법을 사용할려면 아래와 같이 React를 꼭 import 해줘야 함.
```javascript	
import React, { Component } from 'react';
```

### 컴포넌트 생성
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

### 컴포넌트 불러오기
```javascript
import App from './App';
<div id="root"></div>
```

### 코드작성 유의사항
- 태그는 닫혀야 한다
- 두개 이상의 엘리먼트는 하나의 엘리먼트로 감싸야한다.  
  또는 Fragment 사용

```javascript
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
```

### JSX 안에 자바스크립트 값 사용
```javascript
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
```

### 조건부 렌더링
- If문 사용 불가 (사용하려면 즉시 실행 함수 표현 사용해야 함)
- 보통 JSX 내부에서는 삼항 연산자 또는 AND 연산자 사용

**삼항 연산자**
```javascript
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
```
**AND 연산자**
```javascript
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
```

**즉시 실행 함수 표현 사용시**
```javascript
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
```

```javascript
(() => {
	if (value === 1) return (<div>하나</div>);
	if (value === 2) return (<div>둘</div>);
	if (value === 3) return (<div>셋</div>);
})()
```

**CSS / 주석**
- 객체형태로 작성 필요
- class가 아니라 className으로 작성
```javascript
class App extends Component {
  render() {
    const style = {
      backgroundColor: 'black',
      padding: '16px',
      color: 'white',
      fontSize: '36px'
    };

    return <div style={style}>안녕하세요!</div>;
  }
}
```
```javascript
import React, { Component } from 'react';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        리액트
      </div>
      <div>
        {/* 주석은 이렇게 */}
        <h1
          // 태그 사이에
        >리액트</h1>
      </div>
    );
  }
}

export default App;
```
## 섹션 3. props 와 state
- props : 부모 컴포넌트가 자식 컴포넌트에게 주는 값. 자식 컴포넌트에서는 props를 받아오기만 하고 받아온 props를 수정 불가
- state : 컴포넌트 내부에서 선언. 내부에서 값 변경 가능

### props 사용법
**부모 컴포넌트**
```javascript
import React, { Component } from 'react';
import MyName from './MyName';

class App extends Component {
  render() {
    return (
      <MyName name="리액트" />
    );
  }
}

export default App;
```
**자식 컴포넌트**
```javascript
import React, { Component } from 'react';

class MyName extends Component {
  render() {
    return (
      <div>
        안녕하세요! 제 이름은 <b>{this.props.name}</b> 입니다.
      </div>
    );
  }
}

export default MyName;
```

### defaultProps  
- 실수로 props를 전달하지 않거나, 상황에 따라 빈값일 경우가 있어서 기본값 설정이 가능함
- 아래 두가지 방법으로 표현 가능
```javascript
import React, { Component } from 'react';

class MyName extends Component {
  static defaultProps = {
    name: '기본이름'
  }
  render() {
    return (
      <div>
        안녕하세요! 제 이름은 <b>{this.props.name}</b> 입니다.
      </div>
    );
  }
}

export default MyName;
```
```javascript
import React, { Component } from 'react';

class MyName extends Component {
  render() {
    return (
      <div>
        안녕하세요! 제 이름은 <b>{this.props.name}</b> 입니다.
      </div>
    );
  }
}

MyName.defaultProps = {
  name: '기본이름'
};

export default MyName;
```

### 함수형 컴포넌트
- 간편한 문법
- 클래스형 컴포넌트와 함수형 차이점은 state, lifecycle이 빠져있음
- 초기 마운트가 미세하게 빠르고 메모리 자원덜 사용함

```javascript
import React from 'react';

const MyName = ({ name }) => {
  return (
    <div>
      안녕하세요! 제 이름은 {name} 입니다.
    </div>
  );
};

export default MyName;
```

## 섹션 4. LifeCycle API

## 섹션 5. 리액트 작업환경 직접 설정하기

## 섹션 6. 인풋 상태 관리

## 섹션 7. 배열 데이터 렌더링 및 관리
## 섹션 8. 최적화, 활용, Ref

### 관련 자료
- <https://react-anyone.vlpt.us>
- <https://react.vlpt.us>