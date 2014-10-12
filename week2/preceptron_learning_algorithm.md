所以H等於所有可能的線(二維空間)或是高維平面(三維以上)

我們要如何設計一個演算法從這麼多的線裡面找到最好的線
####什麼是最好的線?
最好的線就是理想上的f，不過我們不知道f會找怎麼樣

####如何找出最好的線
我們只知道資料是由f產生的，我們是否可以先要求g與f在看過的資料上很接近甚至一模一樣。

\\(
g \approx {f} \, on \, D
\\),idelly

\\(
g(x_{n})=f(x_{n})=y_{n}
\\)

####可是有太多線了啊
先隨便找一條線\\(g_0\\)出發，\\(g_0\\)可以用vector \\( w_0\\)來表示(
will represent \\(g_0\\) by its weight vector \\( w_0\\)
)

###Perceptron Learning Algorithm
start from some \\(w_0\\) and `correct` is mistakes on D

For t=0,1....

Step 1. find a mistake of \\(w_t\\) called ( \\(\large x_{n(t)},y_{n(t)}\\)
)

\\(
\large sign (w_{t}^TX_{n(t)} ) \neq y_{n(t)}
\\)

Step 2. (try to) correct the mistake by

\\(
\large w_{t+1} \leftarrow w_t+y_{n(t)}x_{n(t)}
\\)

until no more mistake

return last
\\(
w (called \, w_{pla}) \, as \, g
\\)

這條線會犯一些錯誤，把這些錯誤找出來
我們去調整w與x的角度
例如:如果我要的結果(y)是負的，可是w與x算出來是正的，代表w與x之間的角度太小了，我就把角度拉大一點

透過更新w來讓線的錯誤減少，更新到不再犯錯的時候，再回傳回去，也就是機器學習的結果

###practical implementation of PLA
從1,2一直到n個點，如果這個點沒有錯，就看下個點，如果犯了錯我就做修正。如果n個點都拜訪過再繞回來發現都沒有錯，就代表我做完了。
這種方式稱為 `a full cyle of not encountering mistakes`

因為一次只對一個點修正，所以會很容易轉很多次

####如果演算法停不下來怎麼辦QQ

####就算演算法停下來，也就是你找到g了，他與你想像中的f是否一樣



##作業
練習寫這個演算法，老師說他寫不到20行XD