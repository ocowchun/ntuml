##More about PLA
####guarantee
as long as linear separable and corrct by mistake

* inner product of \\(w_f\\) and \\(w_t\\) grows fast,length of \\(w_t\\) grows slowly
* PLA lines are more and more aligned with \\(w_f \Rightarrow\\) halts

####Pros
simple to implement,fast works in any dimension d
####Cons
* `assumes linear separable D to halt`我們不知道是否真的有\\(w_f\\)可以線性分割整個資料集(如果知道就不用PLA了)
* 就算PLA會停，也不知道多久會停( 
\\(
\rho \,depends \, on \, w_f
\\)
)

##Noisy data
我們取得的資料可能是有雜訊的，就算真的有一條\\(w_f\\)存在，可是有可能在搜集資料的過程中，不小心摻入一些錯誤的資料，使資料集變成線性不可分，當這樣的情況發生時，我們要如何找出\\(w_f\\)?

###Line with Noise Tolerance
* assume little noise(假設雜訊很少): \\(y_n = f(x_n)\\) usually
* if so, \\(g \thickapprox f \, on \, D \Leftrightarrow y_n=g(x_n) \\) usually
* how about

\\(
\large w_g \leftarrow argmin \sum_{n=1}^{N} [ y_n \neq sign(w^Tx_n) ]
\\)

也就是轉而去找最少錯誤的\\(w_g\\)

##Pocket Algorithm
modify PLA algorithm (black lines) by keep best weights in pocket
每次都把最好的線抓在手上

initialize pocket weights \\( \hat{w}\\)

For t=0,1...
 
 1. find a random mistake of \\(w_t\\) called \\(
(x_{n(t)},y_{n(t)})
 \\)
 2. (try to) correct the mistake by \\(w_{t+1} \leftarrow w_t + y_{n(t)}x_{n(t)} \\)
 3. if \\(w_{t+1}\\) makes fewer mistakes than \\(\hat{w}\\), replace \\(\hat{w}\\) by \\(w_{t+1}\\)
until **enough iterations**

return \\(\hat(w)
(called w_{pocket})
\\) as g