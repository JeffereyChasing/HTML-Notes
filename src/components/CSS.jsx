import React from 'react'

const CSS = () => {
  return (
    <div>
        

        <p className='title mb-7'> CSS 题</p>
        
        <h2 className='question'> px 和 em 的区别？ </h2>
        <p className='answer'>
        px全称pixel像素，是相对于屏幕分辨率而言的，它是一个绝对单位，但同时具有一定的相对性。因为在同一个设备上每个像素代表的物理长度是固定不变的，这点表现的是绝对性。但是在不同的设备之间每个设备像素所代表的物理长度是可以变化的，这点表现的是相对性
em是一个相对长度单位，具体的大小需要相对于父元素计算，比如父元素的字体大小为80px，那么子元素1em就表示大小和父元素一样为80px，0.5em就表示字体大小是父元素的一半为40px
</p>


          <h2 className='question'>  vw、vh 是什么？ </h2>
        <p className='answer'>
        vw 和 vh 是 CSS3 新单位，即 view width 可视窗口宽度 和 view height 可视窗口高度。1vw 就等于可视窗口宽度的百分之一，1vh 就等于可视窗口高度的百分之一。</p>



          <h2 className='question'> flex 布局如何使用？ </h2>

            <p className='answer'>
         flex 是 Flexible Box 的缩写，意为"弹性布局"。指定容器display: flex即可。
        容器有以下属性：flex-direction，flex-wrap，flex-flow，justify-content，align-items，align-content。

        flex-direction属性决定主轴的方向；

flex-wrap属性定义，如果一条轴线排不下，如何换行；
flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap；
justify-content属性定义了项目在主轴上的对齐方式。
align-items属性定义项目在交叉轴上如何对齐。
align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

项目（子元素）也有一些属性：order，flex-grow，flex-shrink，flex-basis，flex，align-self。

order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。
flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。
flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。
align-self 属性允许单个项目有与其他项目不一样的对齐方式，可覆盖 align-items 属性。默认值为 auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。

             </p>


        <h2 className='question'>  分析比较 opacity: 0、visibility: hidden、display: none 优劣和适用场景？ </h2>
        <p className='answer'>
        结构： display:none: 会让元素完全从渲染树中消失，渲染的时候不占据任何空间, 不能点击， visibility: hidden:不会让元素从渲染树消失，渲染元素继续占据空间，只是内容不可见，不能点击 opacity: 0: 不会让元素从渲染树消失，渲染元素继续占据空间，只是内容不可见，可以点击


继承： display: none和opacity: 0：是非继承属性，子孙节点消失由于元素从渲染树消失造成，通过修改子孙节点属性无法显示。 visibility: hidden：是继承属性，子孙节点消失由于继承了hidden，通过设置visibility: visible;可以让子孙节点显式。


性能： displaynone : 修改元素会造成文档回流,读屏器不会读取display: none元素内容，性能消耗较大 visibility:hidden: 修改元素只会造成本元素的重绘,性能消耗较少读屏器读取visibility: hidden元素内容 opacity: 0 ： 修改元素会造成重绘，性能消耗较少
。</p>


        <h2 className='question'>  Position？ </h2>
        <p className='answer'>
        4种: 相对，绝对，静态，粘性, fixed:</p>
        <p className='answer'>相对定位的元素是在文档中的正常位置偏移给定的值，但是不影响其他元素的偏移。</p>
        <p className='answer'>相对定位的元素并未脱离文档流，而绝对定位的元素则脱离了文档流。在布置文档流中其他元素时，绝对定位元素不占据空间。绝对定位元素相对于最近的非 static 祖先元素定位。当这样的祖先元素不存在时，则相对于 ICB（initial containing block，初始包含块）。</p>
        <p className='answer'>相对定位的元素并未脱离文档流，而绝对定位的元素则脱离了文档流。在布置文档流中其他元素时，绝对定位元素不占据空间。绝对定位元素相对于最近的非 static 祖先元素定位。当这样的祖先元素不存在时，则相对于 ICB（initial containing block，初始包含块）。</p>
        <p className='answer'>固定定位与绝对定位相似，但元素的包含块为 viewport 视口。该定位方式常用于创建在滚动屏幕时仍固定在相同位置的元素。</p>
        <p className='answer'>简单描述下生效过程，因为设定的阈值是 top:0 ，这个值表示当元素距离页面视口（Viewport，也就是fixed定位的参照）顶部距离大于 0px 时，元素以 relative 定位表现，而当元素距离页面视口小于 0px 时，元素表现为 fixed 定位，也就会固定在顶部。</p>




        <h2 className='question'>  vw、vh 是什么？ </h2>
        <p className='answer'>
        vw 和 vh 是 CSS3 新单位，即 view width 可视窗口宽度 和 view height 可视窗口高度。1vw 就等于可视窗口宽度的百分之一，1vh 就等于可视窗口高度的百分之一。</p>


        <h2 className='question'>  vw、vh 是什么？ </h2>
        <p className='answer'>
        vw 和 vh 是 CSS3 新单位，即 view width 可视窗口宽度 和 view height 可视窗口高度。1vw 就等于可视窗口宽度的百分之一，1vh 就等于可视窗口高度的百分之一。</p>

        <div className='tri'></div>
    
    
    </div>
  )
}

export default CSS