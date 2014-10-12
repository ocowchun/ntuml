##Linear Separability
###pla的終止條件
沒有資料會被分到錯的地方時，pla就會停止。也就是說你的資料必須存在一條線，可以正確的分辨所有資料的對錯，pla才會停止。
這樣的條件稱之為linear separable(線性可分)。


###PLA Fact: \\(w_t\,Gets\,More\,Aligned\,with\,w_f\\)

linear separable D \\(\Leftrightarrow\\) exists perfect \\(w_f\\) such that \\(
y_n=sign(w^T_fx_n)
\\)

\\(w_f\\) perfect hence every \\(x_n\\) cprrectly away form line:

\\(
\large y_{n(t)}w^T_fx_{n(t)} \geq min\,y_nw^T_fx_n>0
\\)

by updating with any \\(x_{n(t)}y_{n(t)}\\)

\\(
\large w^T_fw_{t+1}=w^T_f(w_t+y_{n(t)}x_{n(t)})
\\)

\\(
\large \geq w^T_fw_t+min\,y_nw^T_fx_n
\\)

\\(
\large \gt w^T_fw_t+0
\\)


我們使用內積來衡量\\(w_f與w_t是否接近\\)，更新之後的\\(w_{t+1}\\)與\\(w_t\\)的內積越來越大，在不考慮\\(w_{t+1}\\)長度變得太長的情況下(因為長度也會影響內積)，可以說\\(w_{t+1}\\)與\\(w_t\\)越來越接近。

####接下來要處理向量長度的問題

###PLA Fact: \\(w_t\\)Does Not Grow Too Fast
\\(w_t\\) changed only when mistake \\(\Leftrightarrow\\)  \\( sign(w^T_tx_{n(t)})
\neq y_{n(t)} \Leftrightarrow y_{n(t)}w^T_tx_{n(t)} \leq 0
\\) 

mistake limits \\(
\Arrowvert w_t \Arrowvert^2
\\) growth,even when updating with longest \\(x_n\\)

\\(
\large \begin{align}
\Arrowvert w_{t+1} \Arrowvert^2 
& = \Arrowvert w_t+y_{n(t)}x_{n(t)} \Arrowvert^2 \\
& = \Arrowvert w_t \Arrowvert^2 +2y_{n(t)}w^T_tx_{n(t)}+\Arrowvert y_{n(t)}x_{n(t)} \Arrowvert^2 \\
& \leq \Arrowvert w_t \Arrowvert^2 +0 +\Arrowvert y_{n(t)}x_{n(t)} \Arrowvert^2 \\
& \leq \Arrowvert w_t \Arrowvert^2 +max \, \Arrowvert y_n x_n \Arrowvert^2\\
\end{align}
\\)

且\\(y_n=+1或-1\\)

