import React from 'react'

const React_frame = () => {
  return (

    <div>

        <p className='text-[red] mt-5 mb-10 title'>React_frame</p>


        <h2 className='question'> React 是什么？ </h2>
        <p className='answer'>
        React是一個自由及開放原始碼的前端JavaScript工具庫， 用於基於UI組件構建使用者介面        </p>

        <h2 className='question'>  React的特点？ </h2>
        <p className='answer'>
        React采用了虚拟DOM，而不是真实/浏览器DOM。
        React采用单向数据绑定。</p>



        <h2 className='question'>  组件是什么？ </h2>
        <p className='answer'>
        组件是一个独立的、可复用的代码块，它将用户界面分成更小的部分，而不是在单个文件中构建整个UI。

React 中有两种组件：函数式组件和class组件</p>


        <h2 className='question'>  React类组件和函数组件的区别？ </h2>
        <p className='answer'>函数组件是一个纯函数，它接收一个 props 对象返回一个 react 元素； 类组件需要去继承 React.Component 并且创建 render 函数返回 react 元素</p>
        <p className='answer'>因为函数组件是一个纯函数，所以不能在组件中使用 setState()，这也是为什么把函数组件称作为无状态组件。
 如果要在组件中使用 state，可以选择创建一个类组件或者将 state 提升到你的父组件中，然后通过 props 对象传递到子组件</p>
        <p className=''>函数组件可以直接被调用，类组件需要先创建实例 然后render</p>

        <h2 className='question'>  怎么读取JSX文件 </h2>
        <p className='answer'>
        JSX并不是有效的JavaScript代码，浏览器没有内置读取和理解JSX的功能。我们需要将JSX编译成浏览器可以理解的JavaScript代码。所以我们使用Babel，一个JavaScript的编译器/转译器来实现这个功能。</p>


        <h2 className='question'>  Props是什么？ </h2>
        <p className='answer'>
        什么是Props？ Props也被称作属性。它们将数据从一个组件传递到另一个组件（从父组件到子组件）。它们通常被用来呈现动态数据。注意：子组件永远不能将props发送到父组件，因为此流程是单向的（父到子）</p>


        <h2 className='question'>  useEffect, useState, useRef的介绍</h2>
        <p className='answer'>
        useState Hook是一个可以在函数组件中使用状态变量的存储。你可以把初始状态传给这个函数，它将返回一个包含当前状态值（不一定是初始状态）的变量和另一个更新这个值的函数</p>
        <p className='answer'>
        useEffect Hook允许你在组件中执行副作用，例如数据获取、直接更新DOM、使用setTimeout()之类的计时器等等。这个hook接受两个参数：回调函数和依赖项，它们允许您控制何时执行副作用。注意：第二个参数是可选的。</p>
        <p className='answer'>
        useRef()hook，也被称为References hook，用于存储在更新时不需要重新渲染的可变值。也被用来存储特定React元素或组件的引用，当我们需要测量DOM或直接向组件添加方法时能派上用场。

useRefs的使用场景：

调整焦点，在文本和媒体播放之间进行选择。
使用第三方DOM库。
启动命令式动画。</p>


        <h2 className='question'>  State是什么？ </h2>
        <p className='answer'>
        State是一个React的内置对象，用于在组件中创建和管理数据。它与props的不同之处在于它用于存储数据而不是传递数据。State是可变的（数据可以更改）并且可以通过this.state()访问。。</p>

        <h2 className='question'>  State是什么？ </h2>
        <p className='answer'>
        State是一个React的内置对象，用于在组件中创建和管理数据。它与props的不同之处在于它用于存储数据而不是传递数据。State是可变的（数据可以更改）并且可以通过this.state()访问。。</p>

        <h2 className='question'>  State是什么？ </h2>
        <p className='answer'>
        State是一个React的内置对象，用于在组件中创建和管理数据。它与props的不同之处在于它用于存储数据而不是传递数据。State是可变的（数据可以更改）并且可以通过this.state()访问。。</p>

        






   </div>
  )
}

export default React_frame