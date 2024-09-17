## 說明 blob, tree, commit, branch, head 分別是什麼
- blob
    - git的物件種類之一，每當==git add==檔案的時候，就會產生一個blob物件。這個物件會紀錄檔案的內容，但不會紀錄檔名！
    - 每當執行==git add==指令，.git/objects/ 裡就會多一個資料夾
    - ex: 
        - $git cat-file -t <sha-1 value>  #顯示該sha1 value是屬於那一種物件
        - $git cat-file -p <sha-1 value>  #顯示該sha1 value物件的內容
- tree
    - git的物件種類之一，藉由tree object，我們可以儲存資料的結構以及檔名。
    - 每當commit一遍，便會新增一個tree object 裡面儲存了blob object 及檔名等資訊
- commit
    - Commit object顧名思義是進行commit後會出現的一個物件，他紀錄了一些有關每次commit需要有的資訊
    - 每當commit一遍，便會新增一個commit object裡面紀錄了tree, author, committer, 以及commit message。
- branch
    - Git 分支在本質上是一條獨立的開發線。在處理新功能或 bug 修補時，您可以使用分支來將您的工作與其他團隊成員的工作隔離開來。
    - 單獨的分支可以合併為一個分支
    - 主分支或其他分支中的變更不會影響你的分支，除非從這些分支中拉取最新變更
    - 為每個任務 (即 bug 修補、新功能等) 建立一個新分支是一種常見的做法。這種方法讓其他人可以輕鬆識別預期的變化並簡化回溯。
    - ex: 
        - git branch [分支名稱] #建立新的分支
        - git checkout [分支名稱] #切換分支
        - git branch -d [分支名稱] #刪除分支
- head
    - ==HEAD== 是一個指標，指向某一個分支，通常可以把 ==HEAD== 當做「目前所在分支」看待。在 .git 目錄裡有一個檔名為 HEAD 的檔案，就是記錄著 HEAD 的內容。 
    - ==HEAD== 通常會指向目前所在的分支。不過 HEAD 也不一定總是會指向某個分支，當 ==HEAD== 沒有指向某個分支的時候便會造成「detached HEAD」的狀態

## 紀錄在 git repo 操作過程中，.git 檔案夾裡的變化，看看你可以觀察到什麼
- git add readme.md
    - .git/多了index
    - .git/objects 多了一資料夾(blob object)
- git commit -m "add readme.md"
    - .git/多了COMMIT_EDITMSG file
    - .git/logs/ 多了HEAD file 以及 refs/heads/master file
    - .git/objects 又多了兩個資料夾(tree object & commit object)
    - .git/refs/heads/ 多了master file
- git commit -m "add video.md"
    - COMMIT_EDITMSG 從add readme.md 變成 add video.md
    - .git/refs/heads/master 變成指向最新的一筆commit
    - .git/objects中又多了一些資料夾，包含tree object & commit object
    - .git/logs/HEAD 與 .git/logs/refs/heads/master 中多了一行新的版號 

## commit message 應該怎麼寫比較好？應該有什麼 style 嗎？
- 每次 Commit 都是針對異動的檔案做說明：Why & What。這樣的 Commit Message 能讓日後的維護人員更快進入狀況
- 一個 Commit Message 主要由 Header + Body + Footer 組成
- Message Header:
    - type：commit 的類別
        - 如：feat, fix, docs, style, refactor, test, chore
    - scope：commit 影響的範圍
        - 如：資料庫、控制層、模板層等，視專案不同改變
    - subject：commit 的簡短描述
- Message Body:
    - 對本次 Commit 的詳細描述，解釋 What & Why & How
    - 可以分成多行
    - 說明程式碼變動的項目與原因，還有與先前行為的對比
- Message Footer:
    - 填寫任務編號 issue #0001
    - BREAKING CHANGE，記錄不兼容的變動，後面是對變動的描述、以及變動原因和遷移方法



