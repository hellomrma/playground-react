
**인프런** <https://www.inflearn.com/course/react-velopert/dashboard>
- 위 인프런 강의를 요약한 내용이며 개인적인 리마인드를 위해 간략하게 정리함
- 전체 콘텐츠를 확인할려면 다음의 페이지로 이동 <https://react-anyone.vlpt.us>
- 추가로 도움되는 페이지 <https://react.vlpt.us>

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

### state 사용법
- 동적인 데이터 다룰 때 사용
- 메소드는 화살표 함수로 작성해야함
```javascript
import React, { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0
  }
  // Method
  handleIncrease = () => {
    // setState
    this.setState({
      number: this.state.number + 1
    });
  }

  handleDecrease = () => {
    this.setState({
      number: this.state.number - 1
    });
  }

  render() {
    return (
      <div>
        <h1>카운터</h1>
        <div>값: {this.state.number}</div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
}

export default Counter;
```

**setState**
- state에 있는 값 변경을 위함
- 객체로 전달되는 값만 업데이트 해줌
- 아래와 같이 depth가 높은 단계일 경우에는 확인을 못함
```javascript
state = {
  number: 0,
  foo: {
    bar: 0,
    foobar: 1
  }
}
```
- 위와 같은 상황일때는 아래와 같이 전개연산자(...) 사용해서 처리 (더 편하게 쓸려면 immutable.js / immer.js)
```javascript
this.setState({
  number: 0,
  foo: {
    ...this.state.foo,
    foobar: 2
  }
});
```

**setState에 객체 대신 함수 전달**
- 기본
```javascript
this.setState({
  number: this.state.number + 1
});
```
- 다른방법1
```javascript
this.setState(
  (state) => ({
    number: state.number
  })
);
```
- 다른방법2 (비구조화 할당 / 구조 분해 할당)
```javascript
this.setState(
  ({ number }) => ({
    number: number + 1
  })
);
```
- 위 함수를 다음과 같이 처리 가능함
```javascript
handleIncrease = () => {
  const { number } = this.state;
  this.setState({
    number: number + 1
  });
}

handleDecrease = () => {
  this.setState(
    ({ number }) => ({
      number: number - 1
    })
  );
}
```
### 이벤트 설정
- 이벤트 이름은 camelCase
- 이벤트에 전달해주는 값은 함수여야 함. onClick={this.handleIncrease()} 이렇게 호출하면 안됨.
```javascript
render() {
  return (
    <div>
      <h1>카운터</h1>
      <div>값: {this.state.number}</div>
      <button onClick={this.handleIncrease}>+</button>
      <button onClick={this.handleDecrease}>-</button>
    </div>
  );
}
```
## 섹션 4. LifeCycle API
컴포넌트의 브라우저에서 나타날 때, 사라질 때, 업데이트 될 때 호출되는 API

**constructor - 새롭게 만들어 질때**
```javascript
constructor(props) {
  super(props);
}
```
**componentWillMount - 화면에 나가기 직전에 호출됨 (16.3 이후 사용안됨)**
```javascript
componentWillMount() {

}
```
**componentDidMount - 화면에 나ㅏ나게 되었을때 호출됨. 외부 라이브러리 연동, axios,fetch 등 데이터 요청시 사용**
```javascript
componentDidMount() {
  // 외부 라이브러리 연동: D3, masonry, etc
  // 컴포넌트에서 필요한 데이터 요청: Ajax, GraphQL, etc
  // DOM 에 관련된 작업: 스크롤 설정, 크기 읽어오기 등
}
```
**componentWillReceiveProps - 컴포넌트가 새로운 props를 받게됐을 때 (16.3 이후 사용안됨)**
```javascript
componentWillReceiveProps(nextProps) {
  // this.props 는 아직 바뀌지 않은 상태
}
```
**static getDerivedStateFromProps() - props로 받아온 값을 state로 동기화하는 작업을 할 경우**
```javascript
static getDerivedStateFromProps(nextProps, prevState) {
  // 여기서는 setState 를 하는 것이 아니라
  // 특정 props 가 바뀔 때 설정하고 설정하고 싶은 state 값을 리턴하는 형태로
  // 사용됩니다.
  /*
  if (nextProps.value !== prevState.value) {
    return { value: nextProps.value };
  }
  return null; // null 을 리턴하면 따로 업데이트 할 것은 없다라는 의미
  */
}
```
**shouldComponentUpdate - 컴포넌트 최적화용. 쓸대없이 낭비되는 CPU 처리량을 줄이기 위해 Virtual DOM에 리렌더링하는것도 불필요할 경우 방지하기 위함**
```javascript
shouldComponentUpdate(nextProps, nextState) {
  // return false 하면 업데이트를 안함
  // return this.props.checked !== nextProps.checked
  return true;
}
```
... 이외 다양한 LifeCycle API는 [LifeCycle API](https://react-anyone.vlpt.us/05.html)에서 확인

## 섹션 6. 인풋 상태 관리
[예제 프로젝트 전체 코드 github](https://github.com/vlpt-playground/phone-book)

아래의 몇가지 코드를 통하여 중요하다고 판단되는 내용들을 간략하게 정리함.
```javascript
// file: src/components/PhoneForm.js
import React, { Component } from 'react';

class PhoneForm extends Component {
  state = {
    name: ''
  }
  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  render() {
    return (
      <form>
        <input
          placeholder="이름"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <div>{this.state.name}</div>
      </form>
    );
  }
}

export default PhoneForm;
```
- onChange 텍스트 값이 바뀔때 마다 발생. handleChange 설정됨.
- 아래 코드와 같이 컴포넌트 불러옴
```javascript
// file: src/App.js
import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';


class App extends Component {
  render() {
    return (
      <div>
        <PhoneForm />
      </div>
    );
  }
}

export default App;
```
- 여러 값을 받아와야 할 경우 다음과 같이 작성
```javascript
// file: src/components/PhoneForm.js
import React, { Component } from 'react';

class PhoneForm extends Component {
  state = {
    name: '',
    phone: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  render() {
    return (
      <form>
        <input
          placeholder="이름"
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
        />
        <input
          placeholder="전화번호"
          value={this.state.phone}
          onChange={this.handleChange}
          name="phone"
        />
        <div>{this.state.name} {this.state.phone}</div>
      </form>
    );
  }
}

export default PhoneForm;
```
### 부모 컴포넌트에게 정보 전달하기
- app.js에서 handleCreate 만듬
- phoneform.js에서 submit 하였을때 부모에게 값을 전달
- preventDefault는 submit 기본 기능 막아줌
```javascript
// file: src/App.js
import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';

class App extends Component {
  handleCreate = (data) => {
    console.log(data);
  }
  render() {
    return (
      <div>
        <PhoneForm
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}

export default App;
```
```javascript
// file: src/components/PhoneForm.js
import React, { Component } from 'react';

class PhoneForm extends Component {
  state = {
    name: '',
    phone: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    // 페이지 리로딩 방지
    e.preventDefault();
    // 상태값을 onCreate 를 통하여 부모에게 전달
    this.props.onCreate(this.state);
    // 상태 초기화
    this.setState({
      name: '',
      phone: ''
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="이름"
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
        />
        <input
          placeholder="전화번호"
          value={this.state.phone}
          onChange={this.handleChange}
          name="phone"
        />
        <button type="submit">등록</button>
      </form>
    );
  }
}

export default PhoneForm;
```
## 섹션 7. 배열 데이터 렌더링 및 관리

### 배열 생성과 렌더링

### 제거와 수정

## 섹션 8. 최적화, 활용, Ref