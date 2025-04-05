(function(Scratch, runtime) {
	async function require(url){
		const body = await fetch(url);
		const func = await body.text();
		new Function(func)();
		return func;
	};
	function parse(obj){
		if(typeof obj=="object") return obj;
		return JSON.parse(obj);
	};
	let buttontext=typeof mdui=='undefined' ? '加载mdui' : '加载成功';
	let button2text='更新mdui';
	const blockIconURI='data:image/png;base64,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';
	class mdui_ext {
		constructor(_runtime){
			runtime = _runtime;
			runtime.on("PROJECT_LOADED", () => {
				if(window._mdui_update_){
					return this.更新.call(this);
				}
				const storage = runtime.extensionStorage.mdui;
				if (typeof mdui!='undefined') return;
				if (!storage?.[0]) return;
				if (!storage?.[1]) return;
				new Function(storage[0])();
				this.appendCss(storage[1]);
				buttontext='加载成功';
				runtime.emit("TOOLBOX_EXTENSIONS_NEED_UPDATE");
			});
			this.style={};
			this._addStyle=element=>{
				if(element) Object.entries(this.style).forEach(([type, style])=>{
					try{
						Object.assign(
							element.shadowRoot.querySelector(`[part="${type}"]`).style,
							style
						);
					}
					catch(e){}
				});
			}
		}
		getInfo() {
			return {
				id: 'mdui',
				name: 'mdui弹窗',
				color1: '#6b7fd5',
				docsURI: 'https://assets.ccw.site/extension/mdui',
				blockIconURI,
				blocks: [
					{
						func: '加载',
						blockType: Scratch.BlockType.BUTTON,
						text: buttontext,
					},
					{
						func: '更新提示',
						blockType: Scratch.BlockType.BUTTON,
						text: button2text,
						hideFromPalette: typeof mdui=='undefined',
					},
					{
						blockType: Scratch.BlockType.LABEL,
						text: '弹窗',
					},
					{
						opcode: 'alert',
						blockType: Scratch.BlockType.COMMAND,
						text: '弹窗，标题[headline]内容[description]按钮文本[confirmText]点击遮罩层[closeOnOverlayClick]关闭弹窗',
						arguments: {
							headline: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "弹窗",
							},
							description: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "这是一个弹窗",
							},
							confirmText: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "确定",
							},
							closeOnOverlayClick: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "false",
								menu: "tf2",
							},
						},
					},
					{
						opcode: 'confirm',
						blockType: Scratch.BlockType.BOOLEAN,
						text: '询问，标题[headline]内容[description]按钮文本[cancelText][confirmText]点击遮罩层[closeOnOverlayClick]关闭弹窗',
						arguments: {
							headline: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "询问",
							},
							description: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "确定要这样做吗",
							},
							cancelText: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "取消",
							},
							confirmText: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "确定",
							},
							closeOnOverlayClick: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "false",
								menu: "tf2",
							},
						},
					},
					{
						opcode: 'prompt',
						blockType: Scratch.BlockType.REPORTER,
						text: '输入框，标题[headline]内容[description]默认值[value]提示[label]行数[rows]只读模式[readonly]样式[variant]类型[type]按钮文本[cancelText][confirmText]点击遮罩层[closeOnOverlayClick]关闭弹窗',
						allowDropAnywhere: true,
						arguments: {
							headline: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "输入框",
							},
							description: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "请输入内容",
							},
							value: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "内容",
							},
							label: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "输入内容",
							},
							rows: {
								type: Scratch.ArgumentType.NUMBER,
								defaultValue: "1",
								menu: "rows",
							},
							readonly: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "false",
								menu: "tf",
							},
							variant: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "filled",
								menu: "variant",
							},
							type: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "text",
								menu: "inputType",
							},
							cancelText: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "取消",
							},
							confirmText: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "确定",
							},
							closeOnOverlayClick: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "false",
								menu: "tf2",
							},
						},
					},
					{
						opcode: 'dialog',
						blockType: Scratch.BlockType.REPORTER,
						text: '选择框，标题[headline]内容[description]选项[actions]点击遮罩层[closeOnOverlayClick]关闭弹窗',
						allowDropAnywhere: true,
						arguments: {
							headline: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "选择框",
							},
							description: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "请选择一个内容",
							},
							actions: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: `[
	"取消",
	"确定",
	{
		"text": "关闭",
		"value": "close"
	}
]`,
							},
							closeOnOverlayClick: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "false",
								menu: "tf2",
							},
						},
					},
					{
						opcode: 'select',
						blockType: Scratch.BlockType.REPORTER,
						text: '选择框2.0，标题[headline]内容[description]选项[items]多选[multiple]默认值[value]提示[label]样式[variant]按钮文本[cancelText][confirmText]点击遮罩层[closeOnOverlayClick]关闭弹窗',
						allowDropAnywhere: true,
						arguments: {
							headline: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "选择框",
							},
							description: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "请选择一个内容",
							},
							items: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: `[
	"选项1",
	"---",
	{
		"text": "选项2",
		"value": 2
	},
	{
		"text": "选项3",
		"value": "a"
	}
]`,
							},
							multiple: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "false",
								menu: "tf",
							},
							variant: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "filled",
								menu: "variant",
							},
							value: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "选项1",
							},
							label: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "选择内容",
							},
							variant: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "filled",
								menu: "variant",
							},
							cancelText: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "取消",
							},
							confirmText: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "确定",
							},
							closeOnOverlayClick: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "false",
								menu: "tf2",
							},
						},
					},
					{
						opcode: 'htmldialog',
						blockType: Scratch.BlockType.REPORTER,
						text: 'html选择框，标题[headline]内容[description]html[body]选项[actions]点击遮罩层[closeOnOverlayClick]关闭弹窗',
						allowDropAnywhere: true,
						arguments: {
							headline: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "html选择框",
							},
							description: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "请选择一个内容",
							},
							body: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: `支持<strong>html</strong>，比如<mdui-button onclick="mdui.snackbar({message: '点击了按钮'})">按钮</mdui-button>`,
							},
							actions: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: '["取消","确定",{"text":"关闭","value":"close"}]',
							},
							closeOnOverlayClick: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "false",
								menu: "tf2",
							},
						},
					},
					{
						opcode: 'snackbar',
						blockType: Scratch.BlockType.COMMAND,
						text: '在[placement]弹窗，标题[message]按钮文本[action]，[autoCloseDelay]毫秒后关闭',
						arguments: {
							placement: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "bottom",
								menu: "placement",
							},
							message: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "底部弹窗",
							},
							action: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "确定",
							},
							autoCloseDelay: {
								type: Scratch.ArgumentType.NUMBER,
								defaultValue: 5000,
							},
						},
					},
					{
						blockType: Scratch.BlockType.LABEL,
						text: '设置',
					},
					{
						opcode: 'setTheme',
						blockType: Scratch.BlockType.COMMAND,
						text: '设置主题为[theme]',
						arguments: {
							theme: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "auto",
								menu: "theme",
							},
						},
					},
					{
						opcode: 'setColorScheme',
						blockType: Scratch.BlockType.COMMAND,
						text: '设置主要颜色为[color]',
						arguments: {
							color: {
								type: Scratch.ArgumentType.COLOR,
								defaultValue: "#00ffff",
							},
						},
					},
					{
						opcode: 'removeColorScheme',
						blockType: Scratch.BlockType.COMMAND,
						text: '还原主要颜色',
						arguments: {},
					},
					{
						blockType: Scratch.BlockType.LABEL,
						text: '样式',
					},
					{
						opcode: 'improtStyle',
						blockType: Scratch.BlockType.COMMAND,
						text: '从[style]导入样式',
						arguments: {
							style: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "{}",
							},
						},
					},
					{
						opcode: 'exportStyle',
						blockType: Scratch.BlockType.REPORTER,
						text: '导出样式',
						arguments: {},
					},
					{
						opcode: 'addStyle',
						blockType: Scratch.BlockType.COMMAND,
						text: '设置[part]的[style]为[value]',
						arguments: {
							part: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "panel",
								menu: "CSSPart",
							},
							style: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "backgroundColor",
								menu: "style",
							},
							value: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "#00ffff",
							},
						},
						hideFromPalette: true,
					},
					{
						opcode: '_addStyle',
						blockType: Scratch.BlockType.XML,
						xml: `
							<block type="mdui_addStyle">
								<value name="part">
									<shadow type="mdui_menu_CSSPart">	
										<field name="CSSPart">panel</field>
									</shadow>
								</value>
								<value name="style">
									<shadow type="mdui_menu_style">
										<field name="style">backgroundColor</field>
									</shadow>
								</value>
								<value name="value">
									<shadow type="text">
										<field name="TEXT">#00ffff</field>
									</shadow>
									<block type="mdui_color">
										<value name="value">
											<shadow type="colour_picker">
												<field name="COLOUR">#00ffff</field>
											</shadow>
										</value>
									</block>
								</value>
							</block>
						`,
					},
					{
						opcode: 'removeStyle',
						blockType: Scratch.BlockType.COMMAND,
						text: '还原样式',
						arguments: {},
					},
					{
						opcode: 'px',
						blockType: Scratch.BlockType.REPORTER,
						text: '[value]px',
						arguments: {
							value: {
								type: Scratch.ArgumentType.NUMBER,
								defaultValue: 10,
							},
						},
					},
					{
						opcode: 'color',
						func: 'return',
						blockType: Scratch.BlockType.REPORTER,
						text: '颜色[value]',
						arguments: {
							value: {
								type: Scratch.ArgumentType.COLOR,
								defaultValue: "#00ffff",
							},
						},
					},
					{
						opcode: '()',
						blockType: Scratch.BlockType.REPORTER,
						text: '[value1]([value2])',
						arguments: {
							value1: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "blur",
							},
							value2: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "10px",
							},
						},
						hideFromPalette: true,
					},
					{
						opcode: '_()',
						blockType: Scratch.BlockType.XML,
						xml: `
							<block type="mdui_()">
								<value name="value1">
									<shadow type="text">
										<field name="TEXT">blur</field>
									</shadow>
								</value>
								<value name="value2">
									<shadow type="text">
										<field name="TEXT">10px</field>
									</shadow>
									<block type="mdui_px">
										<value name="value">
											<shadow type="math_number">
												<field name="NUM">10</field>
											</shadow>
										</value>
									</block>
								</value>
							</block>
						`,
					},
					{
						opcode: ',',
						blockType: Scratch.BlockType.REPORTER,
						text: '[value1],[value2]',
						arguments: {
							value1: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "",
							},
							value2: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "",
							},
						},
					},
					{
						opcode: 'rgba',
						blockType: Scratch.BlockType.REPORTER,
						text: 'rgba([r],[g],[b],[a])',
						arguments: {
							r: {
								type: Scratch.ArgumentType.NUMBER,
								defaultValue: 255,
							},
							g: {
								type: Scratch.ArgumentType.NUMBER,
								defaultValue: 255,
							},
							b: {
								type: Scratch.ArgumentType.NUMBER,
								defaultValue: 255,
							},
							a: {
								type: Scratch.ArgumentType.NUMBER,
								defaultValue: 0.75,
							},
						},
					},
					{
						blockType: Scratch.BlockType.LABEL,
						text: '其他',
					},
					{
						opcode: 'eq',
						blockType: Scratch.BlockType.BOOLEAN,
						text: '[value1]是[value2]',
						arguments: {
							value1: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "",
							},
							value2: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: "null",
								menu: "val",
							},
						},
					},
					{
						opcode: 'n',
						blockType: Scratch.BlockType.COMMAND,
						text: '[a]',
						arguments: {
							a: {
								type: null,
							},
						},
					},
				],
				menus: {
					placement: {
						acceptReporters: true,
						items: [
							{
								text: '左上角',
								value: 'top-start'
							},
							{
								text: '顶部',
								value: 'top'
							},
							{
								text: '右上角',
								value: 'top-end'
							},
							{
								text: '左下角',
								value: 'bottom-start'
							},
							{
								text: '底部',
								value: 'bottom'
							},
							{
								text: '右下角',
								value: 'bottom-end'
							},
						]
					},
					theme: {
						acceptReporters: true,
						items: [
							{
								text: '默认',
								value: 'auto'
							},
							{
								text: '亮色',
								value: 'light'
							},
							{
								text: '暗色',
								value: 'dark'
							},
						]
					},
					tf: {
						acceptReporters: true,
						items: [
							{
								text: '启用',
								value: 'true'
							},
							{
								text: '禁用',
								value: 'false'
							},
						]
					},
					tf2: {
						acceptReporters: true,
						items: [
							{
								text: '会',
								value: 'true'
							},
							{
								text: '不会',
								value: 'false'
							},
						]
					},
					rows: {
						acceptReporters: true,
						items: [
							{
								text: '单行',
								value: '1'
							},
							{
								text: '多行',
								value: '2'
							},
							{
								text: '多行（自动调整高度）',
								value: 'autosize'
							},
						]
					},
					val: {
						acceptReporters: true,
						items: [
							{
								text: 'null（输入框选择取消的返回值）',
								value: 'null'
							},
							{
								text: 'undefined（点击遮罩层的返回值）',
								value: 'undefined'
							},
						]
					},
					variant: {
						acceptReporters: true,
						items: [
							{
								text: 'filled',
								value: 'filled'
							},
							{
								text: 'outlined',
								value: 'outlined'
							},
						]
					},
					inputType: {
						acceptReporters: true,
						items: [
							{
								text: '文本',
								value: 'text'
							},
							{
								text: '数字',
								value: 'number'
							},
							{
								text: '密码',
								value: 'password'
							},
							{
								text: 'URL',
								value: 'url'
							},
							{
								text: '邮箱',
								value: 'email'
							},
							{
								text: '搜索',
								value: 'search'
							},
							{
								text: '电话号码',
								value: 'tel'
							},
							{
								text: '颜色',
								value: 'color'
							},
							{
								text: '日期',
								value: 'date'
							},
							{
								text: '日期和时间',
								value: 'datetime-local'
							},
							{
								text: '年月',
								value: 'month'
							},
							{
								text: '时间',
								value: 'time'
							},
							{
								text: '周',
								value: 'week'
							},
						]
					},
					CSSPart: {
						acceptReporters: true,
						items: [
							{
								text: '遮罩层',
								value: 'overlay'
							},
							{
								text: '弹窗容器',
								value: 'panel'
							},
							{
								text: '弹窗标题',
								value: 'headline'
							},
							{
								text: '弹窗body',
								value: 'body'
							},
							{
								text: '副文本',
								value: 'description'
							},
							{
								text: '操作按钮',
								value: 'action'
							},
							{
								text: '消息文本（snackbar）',
								value: 'message'
							},
						]
					},
					style: {
						acceptReporters: true,
						items: [
							{
								text: '自定义CSS',
								value: 'cssText'
							},
							{
								text: '背景',
								value: 'background'
							},
							{
								text: '背景颜色',
								value: 'backgroundColor'
							},
							{
								text: '背景图片',
								value: 'backgroundImage'
							},
							{
								text: '文本颜色',
								value: 'color'
							},
							{
								text: '背景过滤器',
								value: 'backdropFilter'
							},
							{
								text: '不透明度',
								value: 'opacity'
							},
							{
								text: '宽度',
								value: 'width'
							},
							{
								text: '高度',
								value: 'height'
							},
							{
								text: '大小',
								value: 'size'
							},
							{
								text: '圆角大小',
								value: '--shape-corner'
							},
						]
					},
				}
			};
		}
		async 加载(){
			try{
				if(buttontext=='加载mdui'){
					runtime.extensionStorage.mdui=[];
					buttontext='加载css中';
					runtime.emit("TOOLBOX_EXTENSIONS_NEED_UPDATE");
					const css=await fetch("https://unpkg.com/mdui@2/mdui.css")
						.then((r) => r.text());
					this.appendCss(css);
					buttontext='加载js中';
					runtime.emit("TOOLBOX_EXTENSIONS_NEED_UPDATE");
					runtime.extensionStorage.mdui[0]= await require("https://unpkg.com/mdui@2/mdui.global.js");
					runtime.extensionStorage.mdui[1]=css;
					buttontext='加载成功';
					runtime.emit("TOOLBOX_EXTENSIONS_NEED_UPDATE");
					mdui.alert({
						headline: "加载成功",
						description: "mdui库加载成功",
						confirmText: "确定",
						onConfirm: ()=>{},
					});
				}
			}catch(e){
				alert("加载失败 "+String(e));
				console.error("加载失败 "+String(e));
				buttontext='加载mdui';
				runtime.emit("TOOLBOX_EXTENSIONS_NEED_UPDATE");
			}
		}
		async 更新(){
			try{
				if(button2text=='更新mdui'){
					console.log("mdui库更新中");
					runtime.extensionStorage.mdui=[];
					button2text='更新css中';
					runtime.emit("TOOLBOX_EXTENSIONS_NEED_UPDATE");
					const css=await fetch("https://unpkg.com/mdui@2/mdui.css")
						.then((r) => r.text());
					this.appendCss(css);
					button2text='更新js中';
					runtime.emit("TOOLBOX_EXTENSIONS_NEED_UPDATE");
					runtime.extensionStorage.mdui[0]= await require("https://unpkg.com/mdui@2/mdui.global.js");
					runtime.extensionStorage.mdui[1]=css;
					button2text='更新mdui';
					buttontext='加载成功';
					runtime.emit("TOOLBOX_EXTENSIONS_NEED_UPDATE");
					mdui.alert({
						headline: "更新成功",
						description: "mdui更新成功",
						confirmText: "确定",
						onConfirm: ()=>{},
					});
					console.log("mdui库更新成功");
				}
			}catch(e){
				alert("更新失败 "+String(e));
				console.error("更新失败 "+String(e));
				button2text='更新mdui';
				runtime.emit("TOOLBOX_EXTENSIONS_NEED_UPDATE");
			}
		}
		// 旧版
		/*
		更新提示(){
			return new Promise((resolve, reject) => {
				mdui.dialog({
					headline: "更新",
					body: `先刷新页面，并在作品加载前输入以下代码到控制台（f12打开控制台）后等待更新<mdui-text-field value="window._mdui_update_=true;" readonly class="js"></mdui-text-field><mdui-button class="copy">复制代码</mdui-button><mdui-button class="reload">复制并刷新</mdui-button><div style="color:#797979">点击空白处关闭</div>`,
					actions: [],
					closeOnOverlayClick: true,
					onOverlayClick: (e)=>{
						resolve(e);
					},
					onOpen: (e)=>{
						let js=mdui.$(".js");
						function reload(){
							window.location.reload(true);
						};
						mdui.$(".copy").on({
							click(e){
								js.get(0).select();
								document.execCommand('copy');
							},
						});
						mdui.$(".reload").on({
							click(e){
								mdui.$(".copy").trigger("click");
								setTimeout(reload,200);
							},
						});
						js.on({
							copy(e){
								mdui.snackbar({
									message: "复制成功",
									action: "刷新",
									onActionClick: reload,
								});
							},
							click(e){
								js.get(0).select();
							},
						});
					},
				});
			});
		}
		*/
		更新提示(){
			return new Promise((resolve, reject) => {
				mdui.confirm({
					headline: "更新",
					description: "是否清除储存在作品里的mdui库，清除后刷新页面再次加载mdui库即可",
					cancelText: "取消",
					onCancel: ()=>resolve(false),
					confirmText: "清除",
					onConfirm: ()=>resolve(delete runtime.extensionStorage.mdui),
					closeOnOverlayClick: true,
					onOverlayClick: ()=>resolve(false),
				});
			}).then(e=>{
				if(e) return mdui.snackbar({
					message: "已清除",
					action: "刷新",
					onActionClick: ()=>window.location.reload(true),
				});
			}).catch(e=>mdui.alert({
				headline: "错误",
				description: e,
				confirmText: "关闭",
				onConfirm: ()=>{},
			}));
		}
		appendCss(text){
			const link = document.createElement("link");
			link.rel = "stylesheet";
			if(text.startsWith("data:")) link.href = text; // 兼容旧版储存方式
			else link.href = "data:text/css;charset=utf-8;base64,"+btoa(text);
			document.head.appendChild(link);
		}
		alert({headline, description, confirmText, closeOnOverlayClick}){
			try{
				if(typeof mdui=='undefined') return "未加载";
				return new Promise((resolve, reject) => {
					mdui.alert({
						headline,
						description,
						confirmText,
						onConfirm: ()=>resolve(true),
						onOpen: this._addStyle,
						closeOnOverlayClick: Scratch.Cast.toBoolean(closeOnOverlayClick),
						onOverlayClick: ()=>{
							if(Scratch.Cast.toBoolean(closeOnOverlayClick)) resolve(undefined);
						},
					});
				});
			}catch(e){
				return e;
			}
		}
		confirm({headline, description, confirmText, cancelText, closeOnOverlayClick}){
			try{
				if(typeof mdui=='undefined') return "未加载";
				return new Promise((resolve, reject) => {
					mdui.confirm({
						headline,
						description,
						cancelText,
						onCancel: ()=>resolve(false),
						confirmText,
						onConfirm: ()=>resolve(true),
						onOpen: this._addStyle,
						closeOnOverlayClick: Scratch.Cast.toBoolean(closeOnOverlayClick),
						onOverlayClick: ()=>{
							if(Scratch.Cast.toBoolean(closeOnOverlayClick)) resolve(undefined);
						},
					});
				});
			}catch(e){
				return e;
			}
		}
		prompt({headline, description, label, value, readonly, rows, variant, type, confirmText, cancelText, closeOnOverlayClick}){
			try{
				if(typeof mdui=='undefined') return "未加载";
				return new Promise((resolve, reject) => {
					mdui.prompt({
						headline,
						description,
						textFieldOptions: {
							label,
							value,
							readonly: Scratch.Cast.toBoolean(readonly),
							rows: rows=='autosize' ? undefined : Math.max(Scratch.Cast.toNumber(rows),0),
							autosize: rows=='autosize',
							variant,
							type,
						},
						confirmText,
						onConfirm: (value)=>resolve(value),
						cancelText,
						onCancel: (value)=>resolve(null),
						onOpen: this._addStyle,
						closeOnOverlayClick: Scratch.Cast.toBoolean(closeOnOverlayClick),
						onOverlayClick: ()=>{
							if(Scratch.Cast.toBoolean(closeOnOverlayClick)) resolve(undefined);
						},
					});
				});
			}catch(e){
				return e;
			}
		}
		dialog({headline, description, confirmText, cancelText, actions, closeOnOverlayClick}){
			try{
				if(typeof mdui=='undefined') return "未加载";
				return new Promise((resolve, reject) => {
					mdui.dialog({
						headline,
						description,
						actions: parse(actions).map((e)=>({
							text: typeof e=='string' ? e : String(e.text),
							onClick: ()=>resolve(typeof e=='string' ? e : e.value),
						})),
						onOpen: this._addStyle,
						closeOnOverlayClick: Scratch.Cast.toBoolean(closeOnOverlayClick),
						onOverlayClick: ()=>{
							if(Scratch.Cast.toBoolean(closeOnOverlayClick)) resolve(undefined);
						},
					});
				});
			}catch(e){
				return e;
			}
		}
		select({headline, description, confirmText, cancelText, items, multiple, label, value, variant, closeOnOverlayClick}){
			try{
				multiple=Scratch.Cast.toBoolean(multiple);
				if(typeof mdui=='undefined') return "未加载";
				let selectElement=document.createElement("mdui-select");
				if(multiple){
					try{
						selectElement.value=parse(value);
					}
					catch{
						selectElement.value=[value];
					}
				}
				else selectElement.value=value;
				selectElement.setAttribute("variant", variant);
				selectElement.setAttribute("label", label);
				selectElement.setAttribute("multiple", multiple);
				parse(items).forEach(item=>{
					let itemElement=document.createElement("mdui-menu-item");
					if(item==="---") return selectElement.appendChild(document.createElement("mdui-divider"));
					else if(typeof item=="object"){
						itemElement.value=item.value;
						itemElement.innerHTML=item.text;
					}
					else{
						itemElement.value=item;
						itemElement.innerHTML=item;
					}
					selectElement.appendChild(itemElement);
				});
				return new Promise((resolve, reject) => {
					mdui.dialog({
						headline,
						description,
						body: selectElement,
						actions: [
							{
								text: cancelText,
								onClick: ()=>resolve(null),
							},
							{
								text: confirmText,
								onClick: ()=>resolve(
									multiple ?
									JSON.stringify(selectElement.value) :
									selectElement.value
								),
							},
						],
						onOpen: this._addStyle,
						closeOnOverlayClick: Scratch.Cast.toBoolean(closeOnOverlayClick),
						onOverlayClick: ()=>{
							if(Scratch.Cast.toBoolean(closeOnOverlayClick)) resolve(undefined);
						},
					});
				});
			}catch(e){
				return e;
			}
		}
		htmldialog({headline, description, confirmText, cancelText, actions, body: html, closeOnOverlayClick}){
			try{
				if(typeof mdui=='undefined') return "未加载";
				let body=document.createElement("div");
				if(html instanceof Element) body=html;
				else body.innerHTML=html;
				return new Promise((resolve, reject) => {
					mdui.dialog({
						headline,
						description,
						body,
						actions: parse(actions).map((e)=>({
							text: typeof e=='string' ? e : String(e.text),
							onClick: ()=>resolve(typeof e=='string' ? e : e.value),
						})),
						onOpen: this._addStyle,
						closeOnOverlayClick: Scratch.Cast.toBoolean(closeOnOverlayClick),
						onOverlayClick: ()=>{
							if(Scratch.Cast.toBoolean(closeOnOverlayClick)) resolve(undefined);
						},
					});
				});
			}catch(e){
				return e;
			}
		}
		snackbar({placement, message, action, autoCloseDelay}){
			try{
				if(typeof mdui=='undefined') return "未加载";
				return new Promise((resolve, reject) => {
					mdui.snackbar({
						placement,
						message,
						action,
						onOpen: this._addStyle,
						onActionClick: ()=>resolve(true),
					});
					setTimeout(()=>resolve(false), Scratch.Cast.toNumber(autoCloseDelay));
				});
			}catch(e){
				return e;
			}
		}
		setTheme({theme}){
			try{
				if(typeof mdui=='undefined') return "未加载";
				return mdui.setTheme(theme);
			}catch(e){
				return e;
			}
		}
		setColorScheme({color}){
			try{
				if(typeof mdui=='undefined') return "未加载";
				return mdui.setColorScheme(color);
			}catch(e){
				return e;
			}
		}
		removeColorScheme(){
			try{
				if(typeof mdui=='undefined') return "未加载";
				return mdui.removeColorScheme();
			}catch(e){
				return e;
			}
		}
		improtStyle({style}){
			try{
				return this.style=parse(style);
			}catch(e){
				return e;
			}
		}
		exportStyle(){
			return JSON.stringify(this.style);
		}
		addStyle({part, style, value}){
			if(style==="--shape-corner") return this.style[style]=value;
			if(!this.style[part]) this.style[part]={};
			return this.style[part][style]=value;
		}
		removeStyle(){
			this.style={};
		}
		px=({value})=>value+"px";
		return=({value})=>value;
		["()"]=({value1, value2})=>`${value1}(${value2})`;
		[","]=({value1, value2})=>`${value1},${value2}`;
		rgba=({r, g, b, a})=>a=="" ? `rgb(${r},${g},${b})` : `rgba(${r},${g},${b},${a})`;
		eq({value1, value2}){
			if(value2==="null") value2=null;
			if(value2==="undefined") value2=undefined;
			return value1===value2;
		}
		n(){}
	}
	
	if(Scratch?.vm?.runtime) Scratch.extensions.register(new mdui_ext(Scratch.vm.runtime));
	else window.tempExt = {
		Extension: mdui_ext,
		info: {
			name: "mdui",
			extensionId: 'mdui',
			featured: true,
			disabled: false,
		},
	};
})(Scratch);
