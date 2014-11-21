收集一堆銅板，將這些銅板的資料(大小,重量)與意義(1塊,5塊,10塊)

###supervised learning
給定的資料包含標籤(資料的意義)，常見於分類問題

###unsupervised learning
給定的資料不包含標籤
常見的問題有
####分群問題
對文章最分類
####density estimation:
我們給電腦一堆點，電腦是否可以告訴我們哪裡比較密,哪裡比較稀疏(ex:交通事故的分析)
####outlier detection
找出資料的離群值(ex:不正常運作的機器)

unsupervised learning:目標比較發散，不容易衡量演算法的好壞。

###semi-supervised learning:半監督式學習
給定的資料少部分會包含標籤(資料的意義)
leverage unlabeled data to avoid `expensive` leabeling

##Reinforcement Learning
> a very different but natural way of learning

我們沒有實際的結果，不過我們可以去判斷結果的好壞時，用獎勵處罰法的方式讓機器去學習

例如:跟你的狗說坐下，如果狗做錯了就處罰他，
* cannot easily show the dog that \\(y_n\\) =sit when \\(x_n\\)=sit down
* but can `punish` to say \\(\widetilde{y_n}\\)=pee is wrong
* but can `reward` to say \\(\widetilde{y_n}\\)=sit is good



learning with `partial/implicit information` (often sequentially)

