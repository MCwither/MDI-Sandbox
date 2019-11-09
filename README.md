# Material Design图标沙盒
## 重要注意
- 这是[MD图标](https://materialdesignicons.com/)主项目的附带项目。若要请求新图标、建议一个别名或对图标包作出贡献，请在主存储库中[创建问题](https://github.com/Templarian/MaterialDesign/issues)。
- 这个沙盒的一个主要目的是让我使用通常不使用的ECMAScript 6+功能。因此，我只能保证，该网站将在最新版本的谷歌Chrome工作。
## 特点和工具

### 图标库

这个项目的主要部分；MDI的一个加厚的“备忘单”。功能包括：
- 建立自己的图标库。
- 将自定义图标上传到收藏库中。
- 按关键字、类别或贡献者筛选图标。
- 以各种格式下载库、筛选的图标或单个图标。
- 将SVG标签、路径数据和代码点等图标信息直接复制到剪贴板。
- 编辑图标并以多种格式下载。
- 看看哪些图标是[收录了的](https://mcwither.github.io/MDI-Sandbox/?section=new)、[更新过的](https://mcwither.github.io/MDI-Sandbox/?section=updated)、[重命名过的](https://mcwither.github.io/MDI-Sandbox/?section=renamed)或[移除了的](https://mcwither.github.io/MDI-Sandbox/?section=removed)在最新版中。
- 查看即将收录的图标，在下一个图标版本要添加的[图标](https://mcwither.github.io/MDI-Sandbox/?section=soon)。
- 查看库中[已过期的图标](https://mcwither.github.io/MDI-Sandbox/?section=retired)。

### 预览生成器
![](https://petershaggynoble.github.io/MDI-Sandbox/img/readme/previews.png)

创建自定义图标预览图像，可以直接复制粘贴到GitHub问题（或其他任何地方）中 。
[预览生成器](https://petershaggynoble.github.io/MDI-Sandbox/preview/)

#### 自动预览生成器
为了节省您的工作，在[这里](http://mdi.houseofdesign.ie/tools/preview/)有一个仅从链接获取信息的预览网页。使用`icon` 参数从 [main library](https://mcwither.github.io/MDI-Sandbox/), [Material Icons Extended](https://mcwither.github.io/MDI-Sandbox/extended/), 和 [其他Google图标](https://mcwither.github.io/MDI-Sandbox/other/) 或者 [stock Google icons](https://mcwither.github.io/MDI-Sandbox/stock/) 和可直接链接到的预览。还有 `action` 参数提供要显示在右下角的动作图标的名称。
> **示例:** [/?icon=vector-square&action=link](http://mdi.houseofdesign.ie/tools/preview/?icon=vector-square&action=link)

或者，可以使用和`path` `name`参数来提供自定义路径和名称，而不是使用`icon`参数来提供现有图标的名称。
> **Example:** [/?name=vector-square&action=download&path=M2,2...Z](http://mdi.houseofdesign.ie/tools/preview/?name=vector-square&action=download&path=M2,2H8V4H16V2H22V8H20V16H22V22H16V20H8V22H2V16H4V8H2V2M16,8V6H8V8H6V16H8V18H16V16H18V8H16M4,4V6H6V4H4M18,4V6H20V4H18M4,18V20H6V18H4M18,18V20H20V18H18Z)

If necessary, you can override the auto-detected preview type using the `type` parameter. The values this parameter can accept can be found in the table below along with their corresponding colours & labels.
> **Example:** [/?name=vector-square&action=download&type=final&path=M2,2...Z](http://mdi.houseofdesign.ie/tools/preview/?name=vector-square&action=download&type=final&path=M2,2H8V4H16V2H22V8H20V16H22V22H16V20H8V22H2V16H4V8H2V2M16,8V6H8V8H6V16H8V18H16V16H18V8H16M4,4V6H6V4H4M18,4V6H20V4H18M4,18V20H6V18H4M18,18V20H20V18H18Z)

| Value       | Colour                                                           | Label            | Text                 |
| ----------- | ---------------------------------------------------------------- | ---------------- | -------------------- |
| `standard`  | ![#616161](https://placehold.it/19/616161/000000?text=+) Grey    |                  |                      |
| `google`    | ![#388e3c](https://placehold.it/19/388e3c/000000?text=+) Green   | Google Icon      | Not yet available    |
| `wip`       | ![#1976d2](https://placehold.it/19/1976d2/000000?text=+) Blue    | Work in Progress | Unreleased Draft     |
| `final`     | ![#303f9f](https://placehold.it/19/303f9f/000000?text=+) Indigo  | Final Draft      | Not yet available    |
| `example`   | ![#e64a19](https://placehold.it/19/e64a19/000000?text=+) Orange  | Example          | Not for release      |
| `simple`    | ![#111111](https://placehold.it/19/111111/000000?text=+) Black   | Simple Icons     | Not available in MDI |
| `removed`   | ![#5d4037](https://placehold.it/19/5d4037/000000?text=+) Brown   | Legacy Icon      | No longer available  |
| `rejected`  | ![#d32f2f](https://placehold.it/19/d32f2f/000000?text=+) Red     | Rejected         | Won't be added       |

### Additional Google Icons

A preview of the extra icons in Google's "Material Icons Extended" set is available at [petershaggynoble.github.io/MDI-Sandbox/extended/](https://petershaggynoble.github.io/MDI-Sandbox/extended/) and their GMP & AOG icons at [petershaggynoble.github.io/MDI-Sandbox/other/](https://petershaggynoble.github.io/MDI-Sandbox/other/). Icons can be downloaded but note that the `transform` attribute is used on the `path` elements to scale them down to 24 pixels.

### Issue Tracker
The [issue tracker](https://petershaggynoble.github.io/MDI-Sandbox/issues/) can be used to view the status of all [`Icon Request` issues](https://github.com/Templarian/MaterialDesign/issues?q=is%3Aissue+is%3Aopen+label%3A%22Icon+Request), sorted by number of reactions with the ability to filter requests for stock Google icons, home automation icons or brand icons. Please note that the issue tracker can currently only be updated manually so you may not be seeing the most up-to-date data. I am working on a way to keep it updated automatically.

### Icon Editor
The [custom icon editor](https://petershaggynoble.github.io/MDI-Sandbox/editor/) expands on the editor included in the icon library to allow creation of PNGs using the path data from _any_ 24x24, 48x48 or 512x512 (vertically flipped) SVG. Also includes the ability to add `block-helper` or `color-helper` as an overlay.

New features will occasionally be available to preview & test at [petershaggynoble.github.io/MDI-Sandbox/src/](https://petershaggynoble.github.io/MDI-Sandbox/src/).

## Background
When [we](https://houseofdesign.ie/) began to drop Font Awesome from our projects in favour of the much more comprehensive [Material Design Icons](https://materialdesignicons.com/), so used were we to FA's website that we struggled at times to find the icons we needed on the MDI website or "[cheatsheet](https://cdn.materialdesignicons.com/4.5.95/)". So I threw together my own "cheatsheet" with the initial focus being on better categorising the icons and adding some keywords to help with searching (both of which proved to be sizable jobs!).

As it was something that only we were going to be using, I also used it as an opportunity to play around with a few things I didn't normally get to play with in my everyday work back then such as [Google's Material Design](https://material.io/guidelines/) and, more importantly, ECMAScript 6+. But then it grew, especially once [Templarian](https://github.com/Templarian) invited me to be a collaborator on the main MDI project, and I started thinking about more possibilities for use by a wider audience which led to the creation of more tools, some of them "proofs of concept" that would eventually be integrated into the [new MDI site](http://dev.materialdesignicons.com/) currently under development.
