import React from 'react'



const Html = () => {
  return (
    <div>

        <p className='title mb-7'> HTML 题</p>
        
        <h2 className='question'> h1和title标签区别是什么？ </h2>
        <p className='answer'>
          h1标签：写在文章正文的标题部分，是展示给用户看的。
          title标签：写在网页的head部分，是展示给搜索引擎看的，搜索引擎的搜索结果中展示的标题就是这个title标签里的内容。</p>


        <h2 className='question'> img中alt和title的区别 </h2>

        <p className='answer'>
        图片中的 alt 属性是在图片不能正常显示时出现的文本提示。
        图片中的 title 属性是在鼠标在移动到元素上的文本提示。         
        </p>


        <h2 className='question'> 块级元素，行内元素，行内块级元素 </h2>

        <p className='answer'>
        常见的block块级元素：

div、p、h1…h6、ol、ul、dl、table、address、blockquote、form

常见的inline行内元素：

span、img、a、lable、input、abbr（缩写）、em（强调）、big、cite（引用）、i（斜体）、q（短引用）、textarea、select、small、sub、sup，strong、u（下划线）、button（默认display：inline-block）

常见的inline-block行内块级元素：

img、input

inline元素、block元素、inline-block元素的区别：

块级元素会独占一行，而行内元素和行内块级元素则会在一行内显示。
块级元素和行内块级元素可以设置 width、height 属性，而行内元素设置无效。
块级元素的 width 默认为 100%，而行内元素则是根据其自身的内容或子元素来决定其宽度。

        </p>


        <h2 className='question'> strong标签和b标签区别是什么？ </h2>

        <p className='answer'>
        可以通过css来改变 strong的具体表现。

但是B标签本身不具备HTML语义，如果精通HTML的人很快就会知道这个标签在HTML代码里面只有加粗的意思。Strong标签在HTML语义为强调，表示语气上的强调、加重。      
        </p>


        <h2 className='question'> 什么是 DOCTYPE， 有何作用 </h2>

        <p className='answer'>
        Doctype是HTML5的文档声明，通过它可以告诉浏览器，使用哪一个HTML版本标准解析文档   
        </p>


        <h2 className='question'> label的作用是什么？是怎么用的 </h2>

        <p className='answer'>
        它为鼠标用户改进了可用性，当我们在label元素内点击文本时就会触发此控件。也就是说，当用户选择该标签时，浏览器就会自动将焦点转到和标签相关的表单控件上     
        </p>




        <h2 className='question'> a元素除了用于导航外，还有什么作用 </h2>

<p className='answer'>
href属性中的url可以是浏览器支持的任何协议，所以a标签可以用来手机拨号<a href="tel:110">110</a>，也可以用来发送短信<a href="sms:110">110</a>，还有邮件等等
当然，a元素最常见的就是用来做锚点和 下载文件。


</p>

    <h2 className='question'> 简述一下src与href的区别 </h2>

        <p className='answer'>
        src用于替换当前元素，href用于在当前文档和引用资源之间确立联系。
        src是source的缩写，指向外部资源的位置，指向的内容将会嵌入到文档中当前标签所在位置；在请求src资源时会将其指向的资源下载并应用到文档内，例如js脚本，img图片和frame等元素 
        href是Hypertext Reference的缩写，指向网络资源所在位置，建立和当前元素（锚点）或当前文档（链接）之间的链接        
        </p>



  
    </div>
  )
}

export default Html