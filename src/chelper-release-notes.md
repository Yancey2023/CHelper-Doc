# CHelper 更新日志

v0.3.11 20250714
1. 修复：分数范围补全提示异常
2. 修复：say命令和tell命令解析没有正确匹配message参数

v0.3.10 20250713
1. 增加：设置界面支持不显示命令错误原因
2. 修复：json字符串补全提示错误且导致软件崩溃
3. 修复：紧凑模式下如果注释不存在会显示null
4. 修复：目标选择器使用quantity字段使用不等号时解析出错
5. 修改：将所有ID同步到最新版

v0.3.9 20250708
1. 修复：json字符串补全提示错误

v0.3.8 20250708
1. 修复：部分情况下应用崩溃

v0.3.7 20250706
1. 修复：目标选择器补全提示缺失

v0.3.6 20250704
1. 修复：json文本解析错误
2. 修复：部分情况下，文本变更时补全提示不会刷新

v0.3.5 20250704
1. 新增：本地命令库支持的数据导入导出
2. 修复：部分情况下应用崩溃
3. 修改：execute命令的命令结构会把中间的参数用...代替以减小长度
4. 修改：将所有ID同步到最新版

v0.3.4 20250607
1. 修复：悬浮窗模式返回键失效

v0.3.3 20250606
1. 修复：部分情况下应用崩溃

v0.3.2 20250604
1. 修复：相对坐标与局部坐标混用没有报错
2. 修复：悬浮窗图标点击后位置会偏移

v0.3.1 20250601
1. 修复：打开软件会恢复默认命令分支
2. 修改：优化界面样式

v0.3.0 20250531
1. 增加：支持软件公告、新版本提醒

v0.2.46 20250530
1. 修复：部分设备输入法在返回上一个界面时无法收回
2. 修复：部分设备顶部导航栏覆盖了内容

v0.2.45 20250530
1. 修复：悬浮窗图标位置错误
2. 修改：将所有ID同步到最新版

v0.2.44 20250529
1. 修复：编辑本地命令库时应用崩溃

v0.2.43 20250529
1. 修复：用户设置在某些情况下没有保存
2. 修改：优化背景图片加载性能，并支持背景图片全屏显示
3. 修改：提升部分界面可读性

v0.2.42 20250528
1. 增加：支持本地命令库
2. 增加：集成友盟SDK用于分析数据和性能监控
3. 修改：移除了部分老旧设备的支持
4. 修复：加载背景图片卡顿

v0.2.41 20250527
1. 修复：自定义背景缩放比例错误

v0.2.40 20250527
1. 新增：支持自定义背景
2. 新增：支持手动切换浅色模式和深色模式

v0.2.39 20250527
1. 修改：优化用户界面
2. 修改：长度大于200的文本自动关闭语法高亮以优化性能
3. 修改：对于小米和红米手机用户，在开启悬浮窗时提示用户将写入剪切板权限设为始终允许

v0.2.38 20250526
1. 修复：安卓15应用界面覆盖系统状态栏和导航栏
2. 修复：打开和关闭悬浮窗时界面会抽搐

v0.2.37 20250525
1. 修复：适配新版命令库
2. 修改：更新关于界面
3. 修改：将所有ID同步到最新版

v0.2.36 20250128
1. 修改：修改了公有命令库的数据源

v0.2.35 20250128
1. 新增：增加了公有命令库
2. 修复：execute命令in分支的维度ID错误

v0.2.34 20250126
1. 修改：旧命令语法转新命令语法支持多行文本
2. 修改：将所有ID同步到最新版

v0.2.33 20241210
1. 修改：旧命令语法转新命令语法出错

v0.2.32 20241209
1. 新增：设置界面支持关闭高亮显示
2. 修复：穷举界面深色模式字体颜色错误
3. 修改：将所有ID同步到最新版

v0.2.31 20240922
1. 修复：修复部分情况下补全提示的错误
2. 修改：将所有ID同步到最新版

v0.2.30 20240827
1. 修复：中国版资源包加载失败

v0.2.29 20240827
1. 修改：将所有ID同步到最新版
2. 修复：解析部分ID会使软件崩溃
3. 修复：输入法模式的命令转换会导致我的世界文本框的文字消失
4. 修复：camera和spreadplayers命令缺少命令分支

v0.2.28 20240813
1. 新增：命令错误位置增加红色下划线

v0.2.27 20240810
1. 修复：命令语法高亮有时显示不出来
2. 修复：撤回和恢复功能出错

v0.2.26 20240810
1. 修复：命令分支加载错误

v0.2.25 20240810
1. 修复：删除文字不顺畅
2. 修复：命令分支显示出错

v0.2.24 20240810
1. 新增：支持命令语法高亮显示
2. 修改：将所有ID同步到最新版

v0.2.23 20240731
1. 新增：支持深色模式
2. 新增：增加了"/"补全提示作为命令开始字符
3. 修复：参数介绍在execute命令参数不完整时会错误地显示为“子命令”
4. 修复："scoreboard players list ..."命令分支的目标选择器参数类型错误
5. 修复："scoreboard objectives setdisplay below_name ..."中的below_name参数ID错误
6. 修复：部分参数不支持使用*

v0.2.22 20240716
1. 修复：json文件组件"with"参数缺少了语法

v0.2.21 20240712
1. 修改：将所有ID同步到最新版，新增中国版命令分支

v0.2.20 20240707
1. 修改：replaceitem命令中将destroy和keep补全提示放在前面
2. 修复：指令转换不支持方块状态的冒号转等号
3. 修复：输入朝向时缺少空格补全提示并且有局部坐标补全提示
4. 修复：复制的时候可能会崩溃

v0.2.19 20240630
1. 修改：重构软件主页，对软件功能的位置进行了调整
2. 修复：分数范围不支持负数
3. 修复：execute rotated的角度参数不支持相对坐标
4. 修复：目标选择器ry参数描述错误
5. 修复：旧版语法转新版语法中存在的问题
6. 修复：修复相邻的坐标参数之间使用空格补全会出错的问题

v0.2.18 20240629
1. 新增：支持切换内置资源包
2. 新增：未完工的原始Json文本生成器
3. 修改：引导用户启用并切换输入法
4. 修复：camera set ... 命令分支的错误注释
5. 修复：目标选择器部分参数使用小数会解析错误
6. 修复：目标选择器部分参数使用局部坐标没有报错
7. 修复：旧版命令语法转新版语法的错误
8. 修复：scoreboard命令的分数参数使用*会解析错误

v0.2.17 20240615
1. 新增：命令转换输入法
2. 修改：去除了一些execute命令转换后的不必要参数

v0.2.16 20240614
1. 新增：1.18.30命令转1.20.10命令
2. 修改：将软件内置的资源包从1.21.0.23版本降为1.20.80.05版本
3. 修改：对软件页面进行了一些小编辑
4. 修复：目标选择器m参数使用整数值会解析错误
5. 修复：loot命令使用的战利品ID应该使用双引号

v0.2.15 20240606
1. 新增：loot命令的战利品表补全提示
2. 修改：最低sdk降为24，从安卓7开始支持
3. 修复：xp命令的经验等级不能识别以L结尾的经验等级
4. 修复：局部坐标的补全提示有误
5. 修复：补全单个符号时会替换掉后面的符号

v0.2.14 20240531
1. 修复：软件在部分情况会崩溃
2. 修复：execute命令的解析

v0.2.13 20240530
1. 修复：目标选择器有些参数其实不可以用=!
2. 修复：execute只有if|unless分支的命令才可以作为命令的结尾
3. 修复：对于坐标参数，补全~或^之后，不应该自动加空格
4. 修复：方块状态的字符串参数应该使用双引号
5. 修复：replace命令使用replace时报错错误
6. 修改：悬浮窗图标缩小
7. 修改：在悬浮窗模式去掉收藏和穷举图标，因为它们在悬浮窗模式中有bug
8. 新增：空格补全提示
9. 新增：支持资源包的二进制读写，资源包读取速度加快

v0.2.12 20240514
1. 修复：对于一些命令参数，解析带有数字和符号的内容会产生错误
2. 修复：悬浮窗可以拖到屏幕外面

v0.2.11 20240511
1. 新增：请求悬浮窗权限的弹窗
2. 修复：部分设备使用悬浮窗会崩溃

v0.2.10 20240510
1. 新增：关于界面
2. 新增：支持进入应用后自动不恢复上次输入的命令，在设置界面关闭
3. 新增：紧凑模式，在设置界面开启
4. 修改：部分界面布局和样式
5. 修复：通过注释搜索不出命令名字

v0.2.9 20240509
1. 新增：粒子ID注释（因为wiki上的注释不全，所以仍然有许多的粒子ID没有注释）
2. 新增：music命令的曲目名称支持补全提示
3. 修复：重复的实体ID

v0.2.8 20240508
1. 修改：将方块ID和方块状态更新至1.21.0.23命令

v0.2.7 20240505
1. 新增：设置界面，有2个设置：根据光标位置获取补全提示 复制后隐藏悬浮窗
2. 修复：返回到桌面再进入获取不了补全提示

v0.2.6 20240505
1. 修复：打开页面会闪退
2. 修复：悬浮窗会导致其它应用的输入框打不开

v0.2.5 20240505
1. 新增：悬浮窗功能
2. 修改：删除了ability命令，增加了script和scriptevent命令
3. 修改：除了方块ID和方块状态，所有ID更新至1.21.0.23，并增加了配方表ID
4. 修复：使用中文获取补全提示只有省略了命名空间的ID
5. 修复：difficulty命令的难度等级有错误
6. 修复：function命令的函数名错误地需要转义字符
7. 修复：scoreboard命令的运算操作识别错误
8. 修复：recipe命令的配方不支持*
9. 修复：使用撤回按钮复原后输入框的光标错误

v0.2.5以前
无记录