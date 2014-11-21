十個h(x)代表你有十個罐子
其中一個罐子(h(x))在你所看到的資料上全對,你要不要選他?
這個h(x)好不好

##Coin Game
請一百五十位同學丟五次銅板
可能有人丟的銅板 五次都是正面
究竟是這個人銅板的正面機率比其他人高,還是他很幸運五次都是銅板?

就算所有銅板都是公平的銅板,還是有可能出現五次都是正面的情況
$ 1-(31/32)^150>99\% $

我取樣出來的結果大部份的情況下會與罐子的情況一下

不好的這件事情很小,有選擇的時候這些選擇會惡化這些情形。


##何謂不好的資料

如果 $E_{out}與E_{in}$ 距離很遠,就是不好的資料

$D_1,D_2,...D_n$


Hoeffding的理論在敘述,整體來說不好的資料很少。

##如果今天有很多個假設
Bad data for many h
好多個假社是為了讓演算法可以做選擇

* 好的資料是,演算法可以選到正確的假設
* 不好的資料是,演算法可能會選到錯誤的假設,也就是說 $E_{in}與E_{out}$ 差距很遠

我們希望演算法可以自由的做選擇(不用怕選到錯誤的假設),所以我們想要知道不好的資料發生的機率是多少

##Bound of BAD Data

$\mathbb{P}_D[D_{bad}] \\
=\mathbb{P}_D[D_{bad}\, for \,h_1\,or\,D_{bad} \, for \, h_2 ... \,or\,D_{bad} \, for \, h_M] \\
\leq \mathbb{P}_D[D_{bad} \, for \, h_1]+\leq \mathbb{P}_D[D_{bad} \, for \, h_2]+...\leq \mathbb{P}_D[D_{bad} \, for \, h_m] \\
(union bound) \\
\leq 2exp(-2\epsilon^2N)+2exp(-2\epsilon^2N)+...+2exp(-2\epsilon^2N) \\
= 2Mexp(-2\epsilon^2N)$

* fitite-bin version of Hoeffding,valid for all M,N,and $\epsilon$
* does not depend on any $E_{out}(h_m)$ , no need to know $E_{out}(h_m)$ -- f and P can stay unknown
* " $E_{in}(g)=E_{out}(g)$ " is PAC,regardless of A


如果我的假設是有限的選擇,我的資料夠多,不管怎麼選,我的 $E_{in}與E_{out}$ 都會很接近
如果我的演算法找到一個 $E_in$ 很小,那在大部份的情況下(PAC) $E_{out}$ 也會很小,所以機器學習是有可能的。

如果假設的數目(M)趨近於無限的話(like perceptrons)的話呢？請看下一次上課。