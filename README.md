# 如何在 React 中导入 Markdown 文件

## 目录：

- 基本语法
    1. [标题](#标题)
    2. [段落](#段落)
    3. [换行符](#换行符)
    4. [强调](#强调)
        - [粗体](#粗体)
        - [斜体](#斜体)
        - [粗体和斜体](#粗体和斜体)
    5. [块引用](#块引用)
        - [多个段落](#多个段落)
        - [嵌套块引用](#嵌套块引用)
        - [带有其他元素的块引用](#带有其他元素的块引用)
    6. [列表](#列表)
        - [有序列表](#有序列表)
        - [无序列表](#无序列表)
        - [在列表中添加元素](#在列表中添加元素)
    7. [代码](#代码)
        - [转义反引号](#转义反引号)
        - [代码块](#代码块)
    8. [水平线](#水平线)
    9.  [链接](#链接)
        - [添加标题](#添加标题)
        - [URL和电子邮件](#地址和电子邮件)
        - [格式化链接](#格式化链接)
        - [参考风格链接](#参考风格链接)
    10. [图片](#图片)
        - [链接图片](#链接图片)
    11. [转义字符](#转义字符)
    12. [HTML](#HTML)
- 进阶语法
    1.  [表格](#表格)
    2.  [隔离代码块](#隔离代码块)
    3.  [脚注](#脚注)
    4.  [标题ID](#title-id)
    5.  [定义列表](#定义列表)
    6.  [删除线](#删除线)
    7.  [任务列表](#任务列表)
    8.  [表情符号](#表情符号)
    9.  [强调](#强调)
    10. [下标](#下标)
    11. [上标](#上标)
    12. [自动URL链接](#URL)
    13. [禁用自动URL链接](#DisabledURL)
    14. [折叠部分](#折叠部分)
- React
    1.  [安装 markdown-to-jsx](#Install)
    2.  [渲染本地md文件](#renderlocal)
    3.  [渲染在线md文件](#renderonline)
    4.  [options.overrides 覆盖 HTML 标签](#overrides)
    5.  [使用插件react-syntax-highlighter](#react-syntax)
    6.  [使用overrides 覆盖 code](#overridescode)
    7.  [处理标题ID](#dealtitleid)

<br />

## 基本语法

#### 标题

**`# Heading level 1`**

**`## Heading level 2`**

**`### Heading level 3`**

**`#### Heading level 4`**

**`##### Heading level 5`**

**`###### Heading level 6`**

<br />

#### 段落

**除非段落在列表中，否则不要使用空格或制表符缩进段落。**

<br />

#### 换行符

使用两个或多个空格（通常称为“尾随空格”）作为换行符。

也可以在支持 HTML 的 Markdown 程序中使用 `<br />`

<br />

#### 强调

    我是 **粗体字**

    我是 __粗体字__

    我是 *斜体字*

    我是 _斜体字_

    我是 ***粗体加斜体字***

    我是 ___粗体加斜体字___

    我是 __*粗体加斜体字*__

    我是 **_粗体加斜体字_**

<br />

#### 块引用

要创建块引用，请在段落前添加一个 `> `

`> 这是一个块`

##### 多个段落

块引用可以包含多个段落。在段落之间的空白行上添加一个 `> `

    > 这是块的第一行
    >
    > 这是块的第三行

##### 嵌套块引用

块引用可以嵌套。在要嵌套的段落前面添加一个 `>> `

    > 这是块的第一行
    >
    >> 这是块的第三行

##### 带有其他元素的块引用

块可以包含其他 Markdown 格式的元素。

    > ### 这是标题3
    >
    > - 这是无序列表1
    > - 这是无序列表2
    >
    > 这是 *斜体* 和 **粗体**

<br />

#### 列表

##### 有序列表

创建有序列表，请添加带有数字和句点的行项目。

数字不必按数字数序排列。**但是列表应当以数字 1 作为开头**。

    1. 项目1
    2. 项目2
    3. 项目3

    or >

    1. 项目1
    2. 项目2
    3. 项目3

    or >

    1. 项目1
    2. 项目2
    3. 项目3

    嵌套列表 >

    1. 项目1
    2. 项目2
    3. 项目3
        1. 缩进的项目1
        2. 缩进的项目2

##### 无序列表

要创建无序列表，请在行项目前添加 - 、\* 或 + 。缩进一项或多项以创建嵌套列表。

    - 项目1
    - 项目2
    - 项目3

    or >

    * 项目1
    * 项目2
    * 项目3

    or >

    + 项目1
    + 项目2
    + 项目3

    嵌套列表 >

    - 项目1
    - 项目2
    - 项目3
        - 缩进的项目1
        - 缩进的项目2

###### 以数字开头的无序列表项

如果您需要以数字后跟句点开头的无序列表项，可以使用反斜杠 ( \)转义句点。

    - 1992\. 这一年
    - 比 1993 早了一年

- 1992\. 这一年
- 比 1993 早了一年

##### 在列表中添加元素

要在列表中添加另一个元素同时保持列表的连续性，请将元素缩进四个空格或一个制表符。

###### 段落

    * 这是第一个项目
    * 这是第二个项目

        这是一个不属于列表的项目

    * 这是第三个项目

###### 块引用

    * 这是第一个项目
    * 这是第二个项目

        > 这是一个块

    * 这是第三个项目


###### 代码块

代码块通常缩进四个空格或一个制表符。当它们在列表中时，将它们缩进八个空格或两个制表符。

    1. 这是项目1
    2. 这是项目2

            <html>
                <head>
                    <title>Test</title>
                </head>
            </html>

    3. 这是项目3

###### 图片

    1. 这是项目1
    2. 这是项目2

        ![Img](/src/assets/img%402x.png)

    3. 这是项目3

###### 列表

您可以将无序列表嵌套在有序列表中，反之亦然。

    1. 有序列表项目1
    2. 有序列表项目2
        - 无序列表项目1
        - 无序列表项目2
    3. 有序列表项目3

<br />

#### 代码

要将单词或短语表示为代码，请将其括在反引号 ( `) 中。

    在React中使用 `import` 引入文件。

##### 转义反引号

如果要表示为代码的单词或短语包含一个或多个反引号，则可以通过将单词或短语括在双反引号 ( ``) 中来对其进行转义。

    ``Use `code` in your Markdown file.``


##### 代码块

要创建代码块，请将块的每一行缩进至少四个空格或一个制表符。

        <html>
            <head>
            </head>
        </html>

<br />

#### 水平线

要创建水平线，请在一行上单独使用三个或更多 \*\*\* 、--- 或 \_\_\_ 。

    ***

    ___

    __________

<br />

#### 链接

要创建链接，请将链接文本括在中括号中，然后在紧跟的括号中添加 URL。

    我平时用的搜索引擎是 [Google](https://www.google.com./) 。

##### 添加标题

您可以选择为链接添加标题。当用户将鼠标悬停在链接上时，这将显示为工具提示。要添加标题，请在 URL 后用引号将其括起来。

    我平时用的搜索引擎是 [Google](https://www.google.com./ "这是提示") 。

##### 地址和电子邮件

要将 URL 或电子邮件地址快速转换为链接，请将其括在尖括号中。

    <https://www.google.com./>

    <Test01@gmail.com>

##### 格式化链接

要强调链接，请在方括号和圆括号前后添加星号。要将链接表示为 code，请在括号中添加反引号。

    我平时用的搜索引擎是 **[Google](https://www.google.com./)** 。

    我平时用的搜索引擎是 *[Google](https://www.google.com./)* 。

    查看代码 [`基本语法`](#基本语法).

##### 参考风格链接

参考风格的链接由两部分构成：与文本保持内联的部分和存储在文件中其他位置以使文本易于阅读的部分。

###### 格式化链接的第一部分

引用样式链接的第一部分使用两组括号进行格式化。第一组括号为链接的文本。第二组括号显示一个标签，用于指向您存储在文档中其他位置的链接。

第二组括号中的标签不区分大小写，可以包含字母、数字、空格或标点符号。

    - [文本1] [1]
    - [文本2] [2]

###### 格式化链接的第二部分

引用样式链接的第二部分使用以下属性进行格式化：

1. 括号中的标签紧跟一个冒号和至少一个空格（例如，[label]: ）。
2. 链接的 URL，您可以选择将其括在尖括号中。
3. 链接的可选标题，可以用双引号、单引号或括号括起来。

        [1]: https://en.wikipedia.org/wiki/Hobbit#Lifestyle
        [1]: https://en.wikipedia.org/wiki/Hobbit#Lifestyle "Hobbit lifestyles"
        [1]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> "Hobbit lifestyles"

###### 放在一起的示例

    In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends
    of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to
    eat: it was a [hobbit-hole][1], and that means comfort.

    [1]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> "Hobbit lifestyles"

<br />

#### 图片

要添加图片，请添加感叹号 ( !)，后跟括号中的替代文本，以及括号中图片资源的路径或 URL。您可以选择在路径或 URL 后添加引号中的标题。

    ![插图](src/assets/img@2x.png "这是一张插图")

##### 链接图片

要添加指向图像的链接，请将图像的 Markdown 括在括号中，然后将链接添加到括号中。

    [![插图](src/assets/img@2x.png "这是一张插图")](XXXURL)

<br />

#### 转义字符

要显示原本用于在 Markdown 文档中格式化文本的文字字符，请在字符前面添加反斜杠 \ 。

| 符号  | 名称 | 符号  | 名称 |
| --- | --- | --- | --- |
| \  | 反斜杠  | `  | 反引号  |
| *  | 星号  | _  | 下划线  |
| {}  | 大括号  | []  | 方括号  |
| <>  | 尖括号  | ()  | 括号  |
| #  | #  | +  | 加号  |
| -  | 减号  | .  | 点  |
| !  | 感叹号  | \|  | 管道  |

<br />

#### HTML

许多 Markdown 应用程序允许您在 Markdown 格式的文本中使用 HTML 标签。

    This **word** is bold. This <em>word</em> is italic.

## 进阶语法

#### 表格

要添加表格，请使用三个或更多连字符 --- 来创建每一列的标题，并使用竖线 | 分隔每一列。为了兼容性，您还应该在行的任一端添加一个 ｜ 。

    | Syntax      | Description |
    | ----------- | ----------- |
    | Header      | Title       |
    | Paragraph   | Text        |

##### 对齐

您可以通过在标题行内连字符的左侧、右侧或两侧添加冒号 : 来将列中的文本向左、向右或居中对齐。

    | Syntax      | Description | Test Text     |
    | :---        |    :----:   |          ---: |
    | Header      | Title       | Here's this   |
    | Paragraph   | Text        | And more      |

##### 格式化表格文本

可以添加链接、代码（仅在反引号 ( `) 中的单词或短语。

不能使用标题、块引用、列表、水平线、图像或大多数 HTML 标记。

##### 转义表格中的管道字符

可以使用其 HTML 字符代码 `&#124;` 在表格中显示竖线。

<br />

#### 隔离代码块

在代码块前后的行上使用三个反引号 ``` 或三个波浪号 ~~~ 创建代码块。

##### 语法高亮

许多 Markdown 处理器支持对受保护的代码块进行语法高亮显示。此功能允许您为编写代码的任何语言添加颜色突出显示。要添加语法突出显示，请在受保护的代码块之前的反引号旁边指定一种语言。

    ```json
    {
    "firstName": "John",
    "lastName": "Smith",
    "age": 25
    }
    ```

<br />

#### 脚注

脚注允许您添加注释和参考，而不会弄乱文档的正文。

`[^1]`创建脚注引用，在方括号内插入符号和标识符。标识符可以是数字或单词，但不能包含空格或制表符。

脚注按顺序编号。

Here's a simple footnote,[^1] and here's a longer one.[^2]

[^2]: 这是脚注2

    `{ my code }`
[^1]: 这是脚注1

<br />

#### 标题ID {#title-id}

许多 Markdown 处理器支持标题的自定义ID——一些 Markdown 处理器会自动添加它们。添加自定义 ID 允许您直接链接到标题并使用 CSS 修改它们。要添加自定义标题 ID，请将自定义 ID 括在与标题相同的行上的花括号中。

    #### 标题ID {#title-id}

##### 链接到标题ID

    [标题ID](#title-id)

<br />

#### 定义列表

要创建定义列表，请在第一行键入术语。在下一行，键入一个冒号，后跟一个空格和定义。

    项目1
    : 项目1的描述内容

    项目2
    : 项目2的描述内容1
    : 项目2的描述内容2

<br />

#### 删除线

您可以通过在单词中心放置一条水平线来删除单词。

    ~~这是有删除线的文字。~~

<br />

#### 任务列表

任务列表/清单/待办事项列表 允许您创建带有复选框的项目列表。

要创建任务列表，请在任务列表项前添加 - 空格和[ ]。

[ ]是未选择选择复选框，[x]是已可选择选择复选框。

      `- [ ] Write the press release`
      `- [ ] Update the website`
      `- [x] Contact the media`

<br />

#### 表情符号

将表情符号添加到 Markdown 文件有两种方法：将表情符号复制并粘贴到 Markdown 格式的文本中，或键入emoji 短代码。

<br />

#### 强调 {#highlight}

要突出显示单词，请在单词前后使用两个等号 == 。

    I need to highlight these ==very important words==.

<br />

#### 下标

要创建下标，请在字符前后使用一个波浪号 ~ ,或者使用HTML标签 `<sub></sub>`。

    H~2~O

    H<sub>2</sub>O

<br />

#### 上标

要创建上标，请在字符前后使用一个插入符号 ^ ，或者使用HTML标签 `<sup></sup>`。

    X^2^
    X<sup>2</sup>

<br />

#### 自动 URL 链接 {#URL}

许多 Markdown 处理器会自动将 URL 转换为链接。这意味着如果您键入 http://www.example.com，即使您没有使用括号，您的 Markdown 处理器也会自动将其转换为链接。

<br />

#### 禁用自动 URL 链接 {#DisabledURL}

如果您不希望自动链接 URL，可以通过将 URL 表示为带有反引号的代码来删除链接。

    `http://www.example.com`

<br />

#### 折叠部分

可以通过创建读者可以选择展开的折叠部分来暂时隐藏 Markdown 的分区。 

`<details>` 块中的任何 Markdown 都将被折叠，直到读者单击展开详细信息。在 `<details>` 块中，使用 `<summary>` 标记在右侧创建一个标签。

    <details><summary>CLICK ME</summary>
    <p>

    #### We can hide anything, even code!

    ```ruby
    puts "Hello World"
    ```

    </p>
    </details>

<br />

## React

#### 安装 markdown-to-jsx {#Install}

安装 `markdown-to-jsx` :

`npm i markdown-to-jsx`

在 `App.js` 中导入 `Markdown` ：

```javascript
import Markdown from 'markdown-to-jsx`;
```

<br />

#### 渲染本地md文件 {#renderlocal}

##### 方法一

```javascript
import { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";
import md from "./assets/github.md";

function App() {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(md)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <div className="App">
      <Markdown>{markdown}</Markdown>
    </div>
  );
}
export default App;
```

##### 方法二

```javascript
...
  useEffect(() => {
    import(`./assets/github.md`).then((res) => {
      fetch(res.default)
        .then((res) => res.text())
        .then((text) => setMarkdown(text));
    });
  }, []);
...
```

##### 方法三

```javascript
...
  useEffect(() => {
    const fetchMd = async () => {
      const res = await fetch(md);
      const text = await res.text();
      setMarkdown(text);
    };
    fetchMd();
  }, []);
...
```

<br />

#### 渲染在线md文件 {#renderonline}

```javascript
import { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";

const markdownUrl =
  "https://raw.githubusercontent.com/Adamoo92/armoo-exercise/react-markdown/README.md";

function App() {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(markdownUrl)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <div className="App">
      <Markdown>{markdown}</Markdown>
    </div>
  );
}
export default App;
```

<br />

#### options.overrides 覆盖 HTML 标签 {#overrides}

```jsx
import Markdown from 'markdown-to-jsx';

const MyParagraph = ({ children, ...props}) => {
    <div {...props}>{children}</div>
}

export default function App() {
    return (
        <Markdown
            options={{
                overrides: {
                    h1: {
                        component: MyParagraph,
                        props: {
                            classname: 'foo'
                        }
                    }
                }
            }}
        >
        # Hello World!
        </Markdown>
    )
}
```

<br />

#### 使用插件react-syntax-highlighter {#react-syntax}

安装 `react-syntax-highlighter` :

`npm i react-syntax-highlighter`

在 `App.js` 中导入 `SyntaxHighlighter` ：

```javascript
import SyntaxHighlighter from 'react-syntax-highlighter';
```

##### 一个示例：

```javascript
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/prism";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const codetest = `useEffect(() => {
    fetch(markdownUrl)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);
`;

const CodeTest = () => {
  return (
    <SyntaxHighlighter language="javascript" style={oneDark}>
      {codetest}
    </SyntaxHighlighter>
  );
};
export default CodeTest;
```

##### Prism

使用Prism代替 highlighter.js，可以解决jsx高亮显示的问题。

```jsx
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
```

**`language`** : 高亮显示的代码的语言。

highlighter.js支持高亮显示的语言: [查看](https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/HEAD/AVAILABLE_LANGUAGES_HLJS.MD)

Prism支持高亮显示的语言： [查看](https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/HEAD/AVAILABLE_LANGUAGES_PRISM.MD)

**`style`** : 代码显示的样式，取决于使用的是 highlighter.js 还是 Prism 。

highlighter.js高亮显示的样式: [查看](https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/HEAD/AVAILABLE_STYLES_HLJS.MD)

Prism高亮显示的样式: [查看](https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/HEAD/AVAILABLE_STYLES_PRISM.MD)

<br />

#### 使用overrides 覆盖 code {#overridescode}

```jsx
// App.js
...
import Code from './Code';
...
 <Markdown
        options={{
          overrides: {
            code: {
              component: Code,
            },
          },
        }}
      >
        {markdown}
      </Markdown>
...

// Code.js
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Code = ({ children, className }) => {
  return (
    <div className="code">
      <SyntaxHighlighter
        language={className ? className.slice(5) : ""}
        // 判断我们是否在md里指定了代码的语言类型
        // 如果指定了语言类型，在转换时，语言类型前会被添加lang-
        // 使用String.prototype.slice()去除前面生成的lang-
        style={oneDark}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

export default Code;
```

<br />

#### 处理标题ID {#dealtitleid}

md的标题id的添加方法是在标题后添加 `{#id}` ,markdown-to-jsx 并没有正确的处理id。

而是会直接把 `{#id}` 显示出来：

```
# Heading 1 {#title1}

// output:
// Heading 1 {#title1}
```

使用 `overrides` 去除标题id的方法：

```jsx
// App.js
...
const H2 = ({ children }) => {
  const haveId = children.toString().includes("{");
  // 判断是否制定了标题Id
  const idIndex = haveId ? children.toString().indexOf("{") : null;
  // 如果指定了标题Id，返回Id起始符号 { 的索引
  console.log(children, haveId, idIndex);
  return (
    <h2 id={haveId ? children.toString().slice(idIndex + 2, -1) : children}>
    // 如果有指定了标题Id，使用指定Id，如果没有指定，使用children作为id
      {children.toString().slice(0, idIndex - 1)}
      // 如果指定了标题Id，去掉id
    </h2>
  );
};
...

...
<Markdown
    options={{
        overrides: {
            h2: {
                component: H2,
            },
          },
    }}
>
    {markdown}
</Markdown>
...
```