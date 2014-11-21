###batch learning
把成批的資料塞給機器，讓機器去學習，是一種最常見的學習方式。

###online learning(which sequentially)
收到一封郵件時，先由機器去判斷是不是垃圾郵件，由使用者來檢驗是否判斷正確，如果判斷錯誤的話，當下就告訴機器
1. observe an email \\(x_t\\)
2. predict spam status with current \\(g_t(x_t)\\)
3. receove `desired label` \\(y_t\\) from user, and then update \\(g_t\\) with ( \\( x_t,y_t\\) )

常見於:
* PLA
* reinforcement learning

hypothesis improves through receiving data instances sequentially
每一輪修正一點，讓結果慢慢變好

batch與online都是被動的，我們是否可以讓機器自己去問問題=>active learning

###active learning 
query the \\(y_n\\) of the `chosen` \\(x_n\\)

improve hypothesis with fewer labels (hopefully) by asking questions strategically
