##Iferring Something Unknown

你有一個大瓶子,裡面有很多橘色彈珠與綠色彈珠,你要怎麼去知道這些彈珠裡面橘色的比例佔多少?
因為彈珠太多,沒辦法一顆一顆抽

assume 
 orange probability = \\(\mu\\)
 green probability=1-\\(\mu\\)
with \\(\mu\\) ubknown

方法一:
從瓶子裡面抽十顆,看橘色彈珠的比例

N marbles sampled independently with
orange fraction = \\(\nu\\)
green fraction = 1 -\\(\nu\\)
now \\(\nu\\) known

####does in-sample \\(\nu\\) anything about out-of-sample \\(\mu\\)?
* 有可能你抽出來的綠色佔多數,但實際上瓶子裡面比較多橘色,所以沒有意義
(possibly not:sample can be mostly green while bin is mostly orange)

* 有可能實際上瓶子裡面橘色的比例跟你抽樣的比例是一樣的。

##Hoeffding's Inequality
如果我抽一大把,大致上來說\\(\nu\\)會很接近\\(\mu\\)
in big sample(N large),\\(\nu\\) is probably clsose to \\(\mu\\) (within \\(\epsilon\\))

\\(
\mathbb{P}[|\nu-\mu| > \epsilon ] \leq 2 exp(-2 \epsilon^2N)
\\)

當N很大的時候\\(\nu\\)與\\(\mu\\)的差距會很小(小於\\(\epsilon\\)
這個不等式稱為Hoeffding's Inqeuality

the statement '\\(\nu=\mu\\)' is probably approximately correct(PAC)
這個推論('\\(\nu=\mu\\)' )大概是對的


* valid for all N and \\(\epsilon\\)
* dose not depend on \\(\mu\\),no need to know \\(\mu\\)
* larger sample size N or looser gap \\(\epsilon\\)) => higher probability for '\\(\nu=\mu\\)'

如果樣本夠大的話,我們大概可以推論\\(\nu\\)會類似於\\(\mu\\)

