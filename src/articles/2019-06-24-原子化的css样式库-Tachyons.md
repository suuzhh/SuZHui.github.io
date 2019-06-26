---
path: "/article/use-tachyons-lib"
date: "2019-06-24"
title: "原子化的css样式库-Tachyons"
excerpt: "在React中使用tachyons代替css module"
---

> 在React编写组件化的css一直是令人头疼的问题, 从css modules到JSS,再到styled-components, 大家一直在寻找最好的解决方案。


## Tachyons

tachyons不像大部分css框架，它没有很多组件规模的css类。
bootstrap作为css框架的弊端：无法对样式进行细粒度拆分，完成组件内的重组，当你完全在框架提供的方案内使用时一切轻松愉快，但一旦你希望定制化，等待你的是无尽的痛。

tachyons提供了极其细粒度的类，[[查看官方文档]](http://tachyons.io/)

比如一个按钮：

![按钮](http://tachyons.io/components/buttons/basic-rounded/screenshot.jpg?version=b47fd033e0a58053c53dbc45a6354b9e)

代码如下
```html
<div class="ph3">
    <a class="f6 link dim br3 ph3 pv2 mb2 dib white bg-black" href="#0">Button Text</a>
    <a class="f6 link dim br3 ph3 pv2 mb2 dib white bg-near-black" href="#0">Button Text</a>
    <a class="f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-gray" href="#0">Button Text</a>
    <a class="f6 link dim br3 ph3 pv2 mb2 dib white bg-mid-gray" href="#0">Button Text</a>
</div>
```
#### 对应的样式

- **f6** 参考[scale](http://tachyons.io/docs/typography/scale/),

```css
/* Type Scale */
.f1 { font-size: 3rem; }
.f2 { font-size: 2.25rem; }
.f3 { font-size: 1.5rem; }
.f4 { font-size: 1.25rem; }
.f5 { font-size: 1rem; }
.f6 { font-size: .875rem; }
.f7 { font-size: .75rem; } /* Small and hard to read for many people so use with extreme caution */
```
- **link** 参考[links](http://tachyons.io/docs/elements/links/)

```css
/*

   LINKS
   Docs: http://tachyons.io/docs/elements/links/

*/

  .link {
    text-decoration: none;
    transition: color .15s ease-in;
  }

  .link:link,
  .link:visited {
    transition: color .15s ease-in;
  }
  .link:hover   {
    transition: color .15s ease-in;
  }
  .link:active  {
    transition: color .15s ease-in;
  }
  .link:focus   {
    transition: color .15s ease-in;
    outline: 1px dotted currentColor;
  }
```

- **dim** 参考[hovers](http://tachyons.io/docs/themes/hovers/)

```css
/*

  Dim element on hover by adding the dim class.

*/
.dim {
  opacity: 1;
  transition: opacity .15s ease-in;
}
.dim:hover,
.dim:focus {
  opacity: .5;
  transition: opacity .15s ease-in;
}
.dim:active {
  opacity: .8; transition: opacity .15s ease-out;
}
```
- **br3** 参考[border-radius](http://tachyons.io/docs/themes/border-radius/)

```css
.br0 {        border-radius: 0; }
.br1 {        border-radius: .125rem; }
.br2 {        border-radius: .25rem; }
.br3 {        border-radius: .5rem; }
.br4 {        border-radius: 1rem; }
.br-100 {     border-radius: 100%; }
.br-pill {    border-radius: 9999px; }
.br--bottom {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.br--top {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.br--right {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.br--left {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
```
- **pv3** 参考[spacing](http://tachyons.io/docs/layout/spacing/)

```css
.pv0 {
  padding-top: var(--spacing-none);
  padding-bottom: var(--spacing-none);
}
.pv1 {
  padding-top: var(--spacing-extra-small);
  padding-bottom: var(--spacing-extra-small);
}
.pv2 {
  padding-top: var(--spacing-small);
  padding-bottom: var(--spacing-small);
}
.pv3 {
  padding-top: var(--spacing-medium);
  padding-bottom: var(--spacing-medium);
}
.pv4 {
  padding-top: var(--spacing-large);
  padding-bottom: var(--spacing-large);
}
.pv5 {
  padding-top: var(--spacing-extra-large);
  padding-bottom: var(--spacing-extra-large);
}
.pv6 {
  padding-top: var(--spacing-extra-extra-large);
  padding-bottom: var(--spacing-extra-extra-large);
}

.pv7 {
  padding-top: var(--spacing-extra-extra-extra-large);
  padding-bottom: var(--spacing-extra-extra-extra-large);
}
```

- **ph3** 参考[spacing](http://tachyons.io/docs/layout/spacing/)

```css
.ph0 {
  padding-left: var(--spacing-none);
  padding-right: var(--spacing-none);
}

.ph1 {
  padding-left: var(--spacing-extra-small);
  padding-right: var(--spacing-extra-small);
}

.ph2 {
  padding-left: var(--spacing-small);
  padding-right: var(--spacing-small);
}

.ph3 {
  padding-left: var(--spacing-medium);
  padding-right: var(--spacing-medium);
}

.ph4 {
  padding-left: var(--spacing-large);
  padding-right: var(--spacing-large);
}

.ph5 {
  padding-left: var(--spacing-extra-large);
  padding-right: var(--spacing-extra-large);
}

.ph6 {
  padding-left: var(--spacing-extra-extra-large);
  padding-right: var(--spacing-extra-extra-large);
}

.ph7 {
  padding-left: var(--spacing-extra-extra-extra-large);
  padding-right: var(--spacing-extra-extra-extra-large);
}
```
- **mb2** 参考[spacing](http://tachyons.io/docs/layout/spacing/) 

```css
.mb0  {  margin-bottom: var(--spacing-none); }
.mb1 {  margin-bottom: var(--spacing-extra-small); }
.mb2  {  margin-bottom: var(--spacing-small); }
.mb3  {  margin-bottom: var(--spacing-medium); }
.mb4  {  margin-bottom: var(--spacing-large); }
.mb5  {  margin-bottom: var(--spacing-extra-large); }
.mb6 {  margin-bottom: var(--spacing-extra-extra-large); }
.mb7 { margin-bottom: var(--spacing-extra-extra-extra-large); }
```

- **dib** 参考[display](http://tachyons.io/docs/layout/display/)

```css
.dn {              display: none; }
.di {              display: inline; }
.db {              display: block; }
.dib {             display: inline-block; }
.dit {             display: inline-table; }
.dt {              display: table; }
.dtc {             display: table-cell; }
.dt-row {          display: table-row; }
.dt-row-group {    display: table-row-group; }
.dt-column {       display: table-column; }
.dt-column-group { display: table-column-group; }
```

- **white & bg-black** 参考[skins](http://tachyons.io/docs/themes/skins/)

```css
.black {         color: var(--black); }
.near-black {    color: var(--near-black); }
.dark-gray {     color: var(--dark-gray); }
.mid-gray {      color: var(--mid-gray); }
.gray {          color: var(--gray); }
.silver  {       color: var(--silver); }
.light-silver {  color: var(--light-silver); }
.moon-gray {     color: var(--moon-gray); }
.light-gray {    color: var(--light-gray); }
.near-white {    color: var(--near-white); }
.white {         color: var(--white); }
```

#### 更多好处

1. 使用模板字符串轻松完成动态css
2. 样式的重用性会极大提高
3. 优雅的媒体查询 参考[**measure**](http://tachyons.io/docs/typography/measure/)
4. 自带良好的样式规范, 不仅仅是长度宽度和颜色，项目风格统一
5. debug类 参考[**debug**](http://tachyons.io/docs/debug/)
6. 细节上的便利, 可方便使用内置样式进行样式修改