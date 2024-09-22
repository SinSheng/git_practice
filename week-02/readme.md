# nodejs安裝
## 安裝的nodejs版本？
> 20.17.0(LTS)

---

## nvm 與 npm 分別是什麼

- **NVM**(node version manager):
    - Node.js 的版本管理器
    - 因為不同專案下使用的node版本可能不同,透過nvm來切換node版本來符合版本需求
    - 常用指令:
        - `nvm install <版本號>` #安裝指定版本node
        - `nvm list *available*` #用來查詢安裝過的node版本 加上available則可查詢所有可使用版本
        - `nvm use <版本號>` #切換使用node版本

- **NPM**(node package manager):
    - 用來管理專案使用到的套件
    - 透過npm init 建立一個npm專案 會產生一個package.json的檔案，會根據這個檔案紀錄 專案使用的套件
    - 常用指令:
        - `npm install <套件> -- save` #用來安裝套件且套件會被存放到node_modules資料夾 並將套件資訊記錄到package.json裡 *記得加上--save才會將資訊紀錄*


> 參考文章:
>> [medium](https://a0910288060.medium.com/%E4%BA%86%E8%A7%A3node-js-nvm-npm%E5%B7%AE%E5%88%A5-47cda7c1d569)
