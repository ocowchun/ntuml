###怎麼樣可以有一個機器學習的演算法，來判斷是否要給信用卡的問題?
我們預期會有一個可以判斷是否要發放信用卡的函式(f)，從資料(D)出發，將資料丟給學習的演算法(A)，產出一個預測方法(g)，我們希望g越接近f越好，然後我們會將新的資料x丟入預測的方法(g)得到預測的結果(y)

###H(g的集合)會長什麼樣子？

####A Simple Hypothesis Set: the Perceptron

For \\(x=(x_{1},x_{2}...x_{d})\\) `features of customer` ,compute a weight `score` and

accept credit if
\\(
\large \sum\limits_{i=1}^{d} W_{i}X_{i} >threshold
\\)

deny credit if
\\(
\large \sum\limits_{i=1}^{d} W_{i}X_{i} < threshold
\\)

我們用+1來代表好，-1代表不好
我們可以將是否發放信用卡轉化成一個函式
line formula \\(h \in H\\)

\\(
\large h(x)=sign((\sum\limits_{i=1}^{d} W_{i}X_{i})-threshold)
\\)

perceptron(感知器)

####Vector Form of Perceptron Hypothesis
\\(
\large h(x)=sign((\sum\limits_{i=1}^{d} W_{i}X_{i})-threshold)
\\)

\\(
\large =sign((\sum\limits_{i=1}^{d} W_{i}X_{i})+(-threshold)\times(+1))
\\)

\\(
\large =sign((\sum\limits_{i=0}^{d} W_{i}X_{i})
\\)

\\(
\large = sign(w^Tx)
\\)

也就是說每個h實際上就是一條線

\\(perceptrons linear(binary) \Leftrightarrow classifiers\\)

有時候也稱perceptrons為線性分類器