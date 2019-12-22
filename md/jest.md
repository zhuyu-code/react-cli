# React+jest
### 搭建脚手架集成react
1. 在create-react-app中是默认集成了jest，自己搭建的脚手架就需要自己集成。
2. 首先安装jest到开发依赖中
```
npm install jest --d
```
3. 配置jest.config.js,可通过`jest --init`生成，也可以配置在package.json上面，直接copy官方网站的内容进行操作
<details>
<summary>jest.config配置代码详情</summary>
<code>
<pre>
  "jest": {
    "roots": [
      "<rootDir>/src"
    ],
    "collectCoverageFrom": [
      "src/**/*.{js,jsx,ts,tsx}",
      "!src/**/*.d.ts"
    ],
    "setupFilesAfterEnv": ["./node_modules/jest-enzyme/lib/index.js"],
    "testMatch": [
      "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
      "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}"
    ],
    "testEnvironment": "",
    "transform": {
      "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
      "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
      "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": "<rootDir>/config/jest/fileTransform.js"
    },
    "transformIgnorePatterns": [
      "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$",
      "^.+\\.module\\.(css|sass|scss)$"
    ],
    "modulePaths": [],
    "moduleNameMapper": {
      "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy"
    },
    "moduleFileExtensions": [
      "js",
      "ts",
      "tsx",
      "json",
      "jsx"
    ]
  },
</pre>
</code>
</details>

4. 配置的config主要是对一些加载文件类型，css不作处理怎么操作，生成coverage的文件后缀等等进行优化配置，babel-jest在2.24版本后面就已经自己集成了，不需要在单独安装
5. 现在就可以通过App.test.js测试文件DOM，但是不能测试state和props，airbob提供了一个enzyme方便测试
6. 安装enzyme和适配器
7. 引入包开始使用
8. 进行单元测试和集成测试
9. 安装jest-enzyme进行更加简洁的使用enzyme内容
---
#### 参考文档

### jest中enzyme使用心得
<details>
  <summary>enzyme怎么使用</summary>
<p>
    <ul>
    <li>文件命名</li>
    <li>单元测试</li>
    <li>集成测试</li>
    <li>功能测试</li>
    </ul>
</p>
</details>

