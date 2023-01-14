---
id: math
sidebar_position: 10
---

# LaTeX数学公式

本文参考: 
1. [超详细 LaTex数学公式](https://blog.csdn.net/ViatorSun/article/details/82826664)
2. [Katex Function](https://katex.org/docs/supported.html)

## 希腊字母
|||||
|---------------|-------------|-------------|---------------|
| $\Alpha$ `\Alpha` | $\Beta$ `\Beta` | $\Gamma$ `\Gamma`| $\Delta$ `\Delta`
| $\Epsilon$ `\Epsilon` | $\Zeta$ `\Zeta` | $\Eta$ `\Eta` | $\Theta$ `\Theta`
| $\Iota$ `\Iota` | $\Kappa$ `\Kappa` | $\Lambda$ `\Lambda` | $\Mu$ `\Mu`
| $\Nu$ `\Nu` | $\Xi$ `\Xi` | $\Omicron$ `\Omicron` | $\Pi$ `\Pi`
| $\Rho$ `\Rho` | $\Sigma$ `\Sigma` | $\Tau$ `\Tau` | $\Upsilon$ `\Upsilon`
| $\Phi$ `\Phi` | $\Chi$ `\Chi` | $\Psi$ `\Psi` | $\Omega$ `\Omega`
| $\varGamma$ `\varGamma`| $\varDelta$ `\varDelta` | $\varTheta$ `\varTheta` | $\varLambda$ `\varLambda`  |
| $\varXi$ `\varXi`| $\varPi$ `\varPi` | $\varSigma$ `\varSigma` | $\varUpsilon$ `\varUpsilon` |
| $\varPhi$ `\varPhi`  | $\varPsi$ `\varPsi`| $\varOmega$ `\varOmega` ||
| $\alpha$ `\alpha`| $\beta$ `\beta`  | $\gamma$ `\gamma` | $\delta$ `\delta`|
| $\epsilon$ `\epsilon` | $\zeta$ `\zeta`  | $\eta$ `\eta`| $\theta$ `\theta`|
| $\iota$ `\iota` | $\kappa$ `\kappa` | $\lambda$ `\lambda`| $\mu$ `\mu`|
| $\nu$ `\nu`| $\xi$ `\xi` | $\omicron$ `\omicron`  | $\pi$ `\pi`|
| $\rho$ `\rho`  | $\sigma$ `\sigma` | $\tau$ `\tau`| $\upsilon$ `\upsilon` |
| $\phi$ `\phi`  | $\chi$ `\chi`| $\psi$ `\psi`| $\omega$ `\omega`|
| $\varepsilon$ `\varepsilon` | $\varkappa$ `\varkappa` | $\vartheta$ `\vartheta` | $\thetasym$ `\thetasym`
| $\varpi$ `\varpi`| $\varrho$ `\varrho`  | $\varsigma$ `\varsigma` | $\varphi$ `\varphi`
| $\digamma$ `\digamma`||||

## 其他字符

||||||
|:----------|:----------|:----------|:----------|:----------|
|$\imath$ `\imath`|$\nabla$ `\nabla`|$\Im$ `\Im`|$\Reals$ `\Reals`|$\text{\OE}$ `\text{\OE}`
|$\jmath$ `\jmath`|$\partial$ `\partial`|$\image$ `\image`|$\wp$ `\wp`|$\text{\o}$ `\text{\o}`
|$\aleph$ `\aleph`|$\Game$ `\Game`|$\Bbbk$ `\Bbbk`|$\weierp$ `\weierp`|$\text{\O}$ `\text{\O}`
|$\alef$ `\alef`|$\Finv$ `\Finv`|$\N$ `\N`|$\Z$ `\Z`|$\text{\ss}$ `\text{\ss}`
|$\alefsym$ `\alefsym`|$\cnums$ `\cnums`|$\natnums$ `\natnums`|$\text{\aa}$ `\text{\aa}`|$\text{\i}$ `\text{\i}`
|$\beth$ `\beth`|$\Complex$ `\Complex`|$\R$ `\R`|$\text{\AA}$ `\text{\AA}`|$\text{\j}$ `\text{\j}`
|$\gimel$ `\gimel`|$\ell$ `\ell`|$\Re$ `\Re`|$\text{\ae}$ `\text{\ae}`
|$\daleth$ `\daleth`|$\hbar$ `\hbar`|$\real$ `\real`|$\text{\AE}$ `\text{\AE}`
|$\eth$ `\eth`|$\hslash$ `\hslash`|$\reals$ `\reals`|$\text{\oe}$ `\text{\oe}`

## 运算符

|||||
|------------------|-------------------------|--------------------------|--------------|
| $\sum$ `\sum`    | $\prod$ `\prod`         | $\bigotimes$ `\bigotimes`| $\bigvee$ `\bigvee`
| $\int$ `\int`    | $\coprod$ `\coprod`     | $\bigoplus$ `\bigoplus`  | $\bigwedge$ `\bigwedge`
| $\iint$ `\iint`  | $\intop$ `\intop`       | $\bigodot$ `\bigodot`    | $\bigcap$ `\bigcap`
| $\iiint$ `\iiint`| $\smallint$ `\smallint` | $\biguplus$ `\biguplus`  | $\bigcup$ `\bigcup`
| $\oint$ `\oint`  | $\oiint$ `\oiint`       | $\oiiint$ `\oiiint`      | $\bigsqcup$ `\bigsqcup`

||||
|:--------------------------|:----------------------------|:-----
|$\frac{a}{b}$ `\frac{a}{b}`|$\tfrac{a}{b}$ `\tfrac{a}{b}`|$\genfrac ( ] {2pt}{1}a{a+1}$ `\genfrac ( ] {2pt}{1}a{a+1}`
|${a \over b}$ `{a \over b}`|$\dfrac{a}{b}$ `\dfrac{a}{b}`|${a \above{2pt} b+1}$ `{a \above{2pt} b+1}`
|$a/b$ `a/b`                |  |$\cfrac{a}{1 + \cfrac{1}{b}}$ `\cfrac{a}{1 + \cfrac{1}{b}}`

||||
|:------------------------------|:------------------------------|:--------
|$\binom{n}{k}$ `\binom{n}{k}`  |$\dbinom{n}{k}$ `\dbinom{n}{k}`|${n\brace k}$ `{n\brace k}`
|${n \choose k}$ `{n \choose k}`|$\tbinom{n}{k}$ `\tbinom{n}{k}`|${n\brack k}$ `{n\brack k}`

|||||
|:--------------------|:--------------------|:----------------|:--------------|
| $\arcsin$ `\arcsin` | $\cosec$ `\cosec`   | $\deg$ `\deg`   | $\sec$ `\sec` |
| $\arccos$ `\arccos` | $\cosh$ `\cosh`     | $\dim$ `\dim`   | $\sin$ `\sin` |
| $\arctan$ `\arctan` | $\cot$ `\cot`       | $\exp$ `\exp`   | $\sinh$ `\sinh` |
| $\arctg$ `\arctg`   | $\cotg$ `\cotg`     | $\hom$ `\hom`   | $\sh$ `\sh` |
| $\arcctg$ `\arcctg` | $\coth$ `\coth`     | $\ker$ `\ker`   | $\tan$ `\tan` |
| $\arg$ `\arg`       | $\csc$ `\csc`       | $\lg$ `\lg`     | $\tanh$ `\tanh` |
| $\ch$ `\ch`         | $\ctg$ `\ctg`       | $\ln$ `\ln`     | $\tg$ `\tg` |
| $\cos$ `\cos`       | $\cth$ `\cth`       | $\log$ `\log`   | $\th$ `\th` |
| $\operatorname{f}$ `\operatorname{f}`     | |||
| $\argmax$ `\argmax` | $\injlim$ `\injlim` | $\min$ `\min`   | $\varinjlim$ `\varinjlim` |
| $\argmin$ `\argmin` | $\lim$ `\lim`       | $\plim$ `\plim` | $\varliminf$ `\varliminf` |
| $\det$ `\det`       | $\liminf$ `\liminf` | $\Pr$ `\Pr`     | $\varlimsup$ `\varlimsup` |
| $\gcd$ `\gcd`       | $\limsup$ `\limsup` | $\projlim$ `\projlim` | $\varprojlim$ `\varprojlim` |
| $\inf$ `\inf`       | $\max$ `\max`       | $\sup$ `\sup`   ||
| $\operatorname*{f}$ `\operatorname*{f}` | $\operatornamewithlimits{f}$ `\operatornamewithlimits{f}` |||


|||||
|-------------|-------------------|-------------------|--------------------|
| $+$ `+`| $\cdot$ `\cdot`  | $\gtrdot$ `\gtrdot`| $x \pmod a$ `x \pmod a`|
| $-$ `-`| $\cdotp$ `\cdotp` | $\intercal$ `\intercal` | $x \pod a$ `x \pod a` |
| $/$ `/`| $\centerdot$ `\centerdot`| $\land$ `\land`  | $\rhd$ `\rhd` |
| $*$ `*`| $\circ$ `\circ`  | $\leftthreetimes$ `\leftthreetimes` | $\rightthreetimes$ `\rightthreetimes` |
| $\amalg$ `\amalg` | $\circledast$ `\circledast`  | $\ldotp$ `\ldotp` | $\rtimes$ `\rtimes` |
| $\And$ `\And`| $\circledcirc$ `\circledcirc` | $\lor$ `\lor`| $\setminus$ `\setminus`  |
| $\ast$ `\ast`| $\circleddash$ `\circleddash` | $\lessdot$ `\lessdot`  | $\smallsetminus$ `\smallsetminus`|
| $\barwedge$ `\barwedge` | $\Cup$ `\Cup`| $\lhd$ `\lhd`| $\sqcap$ `\sqcap`  |
| $\bigcirc$ `\bigcirc`  | $\cup$ `\cup`| $\ltimes$ `\ltimes`| $\sqcup$ `\sqcup`  |
| $\bmod$ `\bmod`  | $\curlyvee$ `\curlyvee` | $x \mod a$ `x\mod a`| $\times$ `\times`  |
| $\boxdot$ `\boxdot`| $\curlywedge$ `\curlywedge`  | $\mp$ `\mp` | $\unlhd$ `\unlhd`  |
| $\boxminus$ `\boxminus` | $\div$ `\div`| $\odot$ `\odot`  | $\unrhd$ `\unrhd`  |
| $\boxplus$ `\boxplus`  | $\divideontimes$ `\divideontimes`  | $\ominus$ `\ominus`| $\uplus$ `\uplus`  |
| $\boxtimes$ `\boxtimes` | $\dotplus$ `\dotplus`  | $\oplus$ `\oplus` | $\vee$ `\vee` |
| $\bullet$ `\bullet`| $\doublebarwedge$ `\doublebarwedge` | $\otimes$ `\otimes`| $\veebar$ `\veebar` |
| $\Cap$ `\Cap`| $\doublecap$ `\doublecap`| $\oslash$ `\oslash`| $\wedge$ `\wedge`  |
| $\cap$ `\cap`| $\doublecup$ `\doublecup`| $\pm$ `\pm` or `\plusmn` | $\wr$ `\wr`  |



||||
|:----------------------------|:----------------------------------------------------|:------
|$a'$ `a'`  |$\tilde{a}$ `\tilde{a}`|$\mathring{g}$ `\mathring{g}`
|$a''$ `a''`|$\widetilde{ac}$ `\widetilde{ac}`  |$\overgroup{AB}$ `\overgroup{AB}`
|$a^{\prime}$ `a^{\prime}` |$\utilde{AB}$ `\utilde{AB}`  |$\undergroup{AB}$ `\undergroup{AB}`
|$\acute{a}$ `\acute{a}`|$\vec{F}$ `\vec{F}` |$\Overrightarrow{AB}$ `\Overrightarrow{AB}`
|$\bar{y}$ `\bar{y}` |$\overleftarrow{AB}$ `\overleftarrow{AB}`|$\overrightarrow{AB}$ `\overrightarrow{AB}`
|$\breve{a}$ `\breve{a}`|$\underleftarrow{AB}$ `\underleftarrow{AB}` |$\underrightarrow{AB}$ `\underrightarrow{AB}`
|$\check{a}$ `\check{a}`|$\overleftharpoon{ac}$ `\overleftharpoon{ac}`  |$\overrightharpoon{ac}$ `\overrightharpoon{ac}`
|$\dot{a}$ `\dot{a}` |$\overleftrightarrow{AB}$ `\overleftrightarrow{AB}`  |$\overbrace{AB}$ `\overbrace{AB}`
|$\ddot{a}$ `\ddot{a}`  |$\underleftrightarrow{AB}$ `\underleftrightarrow{AB}`|$\underbrace{AB}$ `\underbrace{AB}`
|$\grave{a}$ `\grave{a}`|$\overline{AB}$ `\overline{AB}` |$\overlinesegment{AB}$ `\overlinesegment{AB}`
|$\hat{\theta}$ `\hat{\theta}`|$\underline{AB}$ `\underline{AB}`  |$\underlinesegment{AB}$ `\underlinesegment{AB}`
|$\widehat{ac}$ `\widehat{ac}`|$\widecheck{ac}$ `\widecheck{ac}`  |$\underbar{X}$ `\underbar{X}`



|||||
|:---------------------|:---------------------|:---------------------|:-----
|$\text{\'{a}}$ `\'{a}`|$\text{\~{a}}$ `\~{a}`|$\text{\.{a}}$ `\.{a}`|$\text{\H{a}}$ `\H{a}`
|$\text{\`{a}}$ <code>\\`{a}</code>|$\text{\={a}}$ `\={a}`|$\text{\"{a}}$ `\"{a}`|$\text{\v{a}}$ `\v{a}`
|$\text{\^{a}}$ `\^{a}`|$\text{\u{a}}$ `\u{a}`|$\text{\r{a}}$ `\r{a}`|


|||||
|---------------|-------------|-------------|---------------|
| $\Alpha$ `\Alpha` | $\Beta$ `\Beta` | $\Gamma$ `\Gamma`| $\Delta$ `\Delta`
| $\Epsilon$ `\Epsilon` | $\Zeta$ `\Zeta` | $\Eta$ `\Eta` | $\Theta$ `\Theta`
| $\Iota$ `\Iota` | $\Kappa$ `\Kappa` | $\Lambda$ `\Lambda` | $\Mu$ `\Mu`
| $\Nu$ `\Nu` | $\Xi$ `\Xi` | $\Omicron$ `\Omicron` | $\Pi$ `\Pi`
| $\Rho$ `\Rho` | $\Sigma$ `\Sigma` | $\Tau$ `\Tau` | $\Upsilon$ `\Upsilon`
| $\Phi$ `\Phi` | $\Chi$ `\Chi` | $\Psi$ `\Psi` | $\Omega$ `\Omega`
| $\varGamma$ `\varGamma`| $\varDelta$ `\varDelta` | $\varTheta$ `\varTheta` | $\varLambda$ `\varLambda`  |
| $\varXi$ `\varXi`| $\varPi$ `\varPi` | $\varSigma$ `\varSigma` | $\varUpsilon$ `\varUpsilon` |
| $\varPhi$ `\varPhi`  | $\varPsi$ `\varPsi`| $\varOmega$ `\varOmega` ||
| $\alpha$ `\alpha`| $\beta$ `\beta`  | $\gamma$ `\gamma` | $\delta$ `\delta`|
| $\epsilon$ `\epsilon` | $\zeta$ `\zeta`  | $\eta$ `\eta`| $\theta$ `\theta`|
| $\iota$ `\iota` | $\kappa$ `\kappa` | $\lambda$ `\lambda`| $\mu$ `\mu`|
| $\nu$ `\nu`| $\xi$ `\xi` | $\omicron$ `\omicron`  | $\pi$ `\pi`|
| $\rho$ `\rho`  | $\sigma$ `\sigma` | $\tau$ `\tau`| $\upsilon$ `\upsilon` |
| $\phi$ `\phi`  | $\chi$ `\chi`| $\psi$ `\psi`| $\omega$ `\omega`|
| $\varepsilon$ `\varepsilon` | $\varkappa$ `\varkappa` | $\vartheta$ `\vartheta` | $\thetasym$ `\thetasym` |
| $\varpi$ `\varpi`| $\varrho$ `\varrho`  | $\varsigma$ `\varsigma` | $\varphi$ `\varphi` |
| $\digamma$ `\digamma`| | | |

||||||
|:----------|:----------|:----------|:----------|:----------|
|$\imath$ `\imath`|$\nabla$ `\nabla`|$\Im$ `\Im`|$\Reals$ `\Reals`|$\text{\OE}$ `\text{\OE}`
|$\jmath$ `\jmath`|$\partial$ `\partial`|$\image$ `\image`|$\wp$ `\wp`|$\text{\o}$ `\text{\o}`
|$\aleph$ `\aleph`|$\Game$ `\Game`|$\Bbbk$ `\Bbbk`|$\weierp$ `\weierp`|$\text{\O}$ `\text{\O}`
|$\alef$ `\alef`|$\Finv$ `\Finv`|$\N$ `\N`|$\Z$ `\Z`|$\text{\ss}$ `\text{\ss}`
|$\alefsym$ `\alefsym`|$\cnums$ `\cnums`|$\natnums$ `\natnums`|$\text{\aa}$ `\text{\aa}`|$\text{\i}$ `\text{\i}`
|$\beth$ `\beth`|$\Complex$ `\Complex`|$\R$ `\R`|$\text{\AA}$ `\text{\AA}`|$\text{\j}$ `\text{\j}`
|$\gimel$ `\gimel`|$\ell$ `\ell`|$\Re$ `\Re`|$\text{\ae}$ `\text{\ae}`
|$\daleth$ `\daleth`|$\hbar$ `\hbar`|$\real$ `\real`|$\text{\AE}$ `\text{\AE}`
|$\eth$ `\eth`|$\hslash$ `\hslash`|$\reals$ `\reals`|$\text{\oe}$ `\text{\oe}`


## Annotation

|||
|:------------------------------|:-----
|$\cancel{5}$ `\cancel{5}`|$\overbrace{a+b+c}^{\text{note}}$ `\overbrace{a+b+c}^{\text{note}}`
|$\bcancel{5}$ `\bcancel{5}` |$\underbrace{a+b+c}_{\text{note}}$ `\underbrace{a+b+c}_{\text{note}}`
|$\xcancel{ABC}$ `\xcancel{ABC}`|$\not =$ `\not =`
|$\sout{abc}$ `\sout{abc}`|$\boxed{\pi=\frac c d}$ `\boxed{\pi=\frac c d}`
|$a_{\angl n}$ `$a_{\angl n}`|$a_\angln$ `a_\angln`
|$\phase{-78^\circ}$`\phase{-78^\circ}` |


|||||
|:--------------------|:--------------------------|:----------------------------|:-----
|$\forall$ `\forall`  |$\complement$ `\complement`|$\therefore$ `\therefore`    |$\emptyset$ `\emptyset`
|$\exists$ `\exists`  |$\subset$ `\subset`  |$\because$ `\because`              |$\empty$ `\empty`
|$\exist$ `\exist`    |$\supset$ `\supset`  |$\mapsto$ `\mapsto`                |$\varnothing$ `\varnothing`
|$\nexists$ `\nexists`|$\mid$ `\mid`        |$\to$ `\to`                        |$\implies$ `\implies`
|$\in$ `\in`          |$\land$ `\land`      |$\gets$ `\gets`                    |$\impliedby$ `\impliedby`
|$\isin$ `\isin`      |$\lor$ `\lor`        |$\leftrightarrow$ `\leftrightarrow`|$\iff$ `\iff`
|$\notin$ `\notin`    |$\ni$ `\ni`          |$\notni$ `\notni`                  |$\neg$ `\neg` or `\lnot`

## 关系

|||||
|:--------|:------------------------|:----------------------------|:------------------|
| $=$ `=` | $\doteqdot$ `\doteqdot` | $\lessapprox$ `\lessapprox` | $\smile$ `\smile` |
| $<$ `<` | $\eqcirc$ `\eqcirc` | $\lesseqgtr$ `\lesseqgtr` | $\sqsubset$ `\sqsubset` |
| $>$ `>` | $\eqcolon$ `\eqcolon` or    `\minuscolon` | $\lesseqqgtr$ `\lesseqqgtr` | $\sqsubseteq$ `\sqsubseteq` |
| $:$ `:` | $\Eqcolon$ `\Eqcolon` or    `\minuscoloncolon` | $\lessgtr$ `\lessgtr` | $\sqsupset$ `\sqsupset` |
| $\approx$ `\approx` | $\eqqcolon$ `\eqqcolon` or    `\equalscolon` | $\lesssim$ `\lesssim` | $\sqsupseteq$ `\sqsupseteq` |
| $\approxcolon$ `\approxcolon` | $\Eqqcolon$ `\Eqqcolon` or   `\equalscoloncolon` | $\ll$ `\ll` | $\Subset$ `\Subset` |
| $\approxcoloncolon$ `\approxcoloncolon` | $\eqsim$ `\eqsim` | $\lll$ `\lll` | $\subset$ `\subset` or `\sub` |
| $\approxeq$ `\approxeq` | $\eqslantgtr$ `\eqslantgtr` | $\llless$ `\llless` | $\subseteq$ `\subseteq` or `\sube` |
| $\asymp$ `\asymp` | $\eqslantless$ `\eqslantless` | $\lt$ `\lt` | $\subseteqq$ `\subseteqq` |
| $\backepsilon$ `\backepsilon` | $\equiv$ `\equiv` | $\mid$ `\mid` | $\succ$ `\succ` |
| $\backsim$ `\backsim` | $\fallingdotseq$ `\fallingdotseq` | $\models$ `\models` | $\succapprox$ `\succapprox` |
| $\backsimeq$ `\backsimeq` | $\frown$ `\frown` | $\multimap$ `\multimap` | $\succcurlyeq$ `\succcurlyeq` |
| $\between$ `\between` | $\ge$ `\ge` | $\origof$ `\origof` | $\succeq$ `\succeq` |
| $\bowtie$ `\bowtie` | $\geq$ `\geq` | $\owns$ `\owns` | $\succsim$ `\succsim` |
| $\bumpeq$ `\bumpeq` | $\geqq$ `\geqq` | $\parallel$ `\parallel` | $\Supset$ `\Supset` |
| $\Bumpeq$ `\Bumpeq` | $\geqslant$ `\geqslant` | $\perp$ `\perp` | $\supset$ `\supset` |
| $\circeq$ `\circeq` | $\gg$ `\gg` | $\pitchfork$ `\pitchfork` | $\supseteq$ `\supseteq` or `\supe` |
| $\colonapprox$ `\colonapprox` | $\ggg$ `\ggg` | $\prec$ `\prec` | $\supseteqq$ `\supseteqq` |
| $\Colonapprox$ `\Colonapprox` or    `\coloncolonapprox` | $\gggtr$ `\gggtr` | $\precapprox$ `\precapprox` | $\thickapprox$ `\thickapprox` |
| $\coloneq$ `\coloneq` or    `\colonminus` | $\gt$ `\gt` | $\preccurlyeq$ `\preccurlyeq` | $\thicksim$ `\thicksim` |
| $\Coloneq$ `\Coloneq` or    `\coloncolonminus` | $\gtrapprox$ `\gtrapprox` | $\preceq$ `\preceq` | $\trianglelefteq$ `\trianglelefteq` |
| $\coloneqq$ `\coloneqq` or   `\colonequals` | $\gtreqless$ `\gtreqless` | $\precsim$ `\precsim` | $\triangleq$ `\triangleq` |
| $\Coloneqq$ `\Coloneqq` or   `\coloncolonequals` | $\gtreqqless$ `\gtreqqless` | $\propto$ `\propto` | $\trianglerighteq$ `\trianglerighteq` |
| $\colonsim$ `\colonsim` | $\gtrless$ `\gtrless` | $\risingdotseq$ `\risingdotseq` | $\varpropto$ `\varpropto` |
| $\Colonsim$ `\Colonsim` or    `\coloncolonsim` | $\gtrsim$ `\gtrsim` | $\shortmid$ `\shortmid` | $\vartriangle$ `\vartriangle` |
| $\cong$ `\cong` | $\imageof$ `\imageof` | $\shortparallel$ `\shortparallel` | $\vartriangleleft$ `\vartriangleleft` |
| $\curlyeqprec$ `\curlyeqprec` | $\in$ `\in` or `\isin` | $\sim$ `\sim` | $\vartriangleright$ `\vartriangleright` |
| $\curlyeqsucc$ `\curlyeqsucc` | $\Join$ `\Join` | $\simcolon$ `\simcolon` | $\vcentcolon$ `\vcentcolon` or   `\ratio` |
| $\dashv$ `\dashv` | $\le$ `\le` | $\simcoloncolon$ `\simcoloncolon` | $\vdash$ `\vdash` |
| $\dblcolon$ `\dblcolon` or   `\coloncolon` | $\leq$ `\leq` | $\simeq$ `\simeq` | $\vDash$ `\vDash` |
| $\doteq$ `\doteq` | $\leqq$ `\leqq` | $\smallfrown$ `\smallfrown` | $\Vdash$ `\Vdash` |
| $\Doteq$ `\Doteq` | $\leqslant$ `\leqslant` | $\smallsmile$ `\smallsmile` | $\Vvdash$ `\Vvdash` |

|||||
|--------------|-------------------|---------------------|------------------|
| $\gnapprox$ `\gnapprox`  | $\ngeqslant$ `\ngeqslant`| $\nsubseteq$ `\nsubseteq`  | $\precneqq$ `\precneqq`|
| $\gneq$ `\gneq`| $\ngtr$ `\ngtr`  | $\nsubseteqq$ `\nsubseteqq` | $\precnsim$ `\precnsim`|
| $\gneqq$ `\gneqq`  | $\nleq$ `\nleq`  | $\nsucc$ `\nsucc`| $\subsetneq$ `\subsetneq`  |
| $\gnsim$ `\gnsim`  | $\nleqq$ `\nleqq` | $\nsucceq$ `\nsucceq` | $\subsetneqq$ `\subsetneqq` |
| $\gvertneqq$ `\gvertneqq` | $\nleqslant$ `\nleqslant`| $\nsupseteq$ `\nsupseteq`  | $\succnapprox$ `\succnapprox`|
| $\lnapprox$ `\lnapprox`  | $\nless$ `\nless` | $\nsupseteqq$ `\nsupseteqq` | $\succneqq$ `\succneqq`|
| $\lneq$ `\lneq`| $\nmid$ `\nmid`  | $\ntriangleleft$ `\ntriangleleft` | $\succnsim$ `\succnsim`|
| $\lneqq$ `\lneqq`  | $\notin$ `\notin` | $\ntrianglelefteq$ `\ntrianglelefteq`  | $\supsetneq$ `\supsetneq`  |
| $\lnsim$ `\lnsim`  | $\notni$ `\notni` | $\ntriangleright$ `\ntriangleright`| $\supsetneqq$ `\supsetneqq` |
| $\lvertneqq$ `\lvertneqq` | $\nparallel$ `\nparallel`| $\ntrianglerighteq$ `\ntrianglerighteq` | $\varsubsetneq$ `\varsubsetneq`  |
| $\ncong$ `\ncong`  | $\nprec$ `\nprec` | $\nvdash$ `\nvdash`  | $\varsubsetneqq$ `\varsubsetneqq` |
| $\ne$ `\ne`  | $\npreceq$ `\npreceq`  | $\nvDash$ `\nvDash`  | $\varsupsetneq$ `\varsupsetneq`  |
| $\neq$ `\neq` | $\nshortmid$ `\nshortmid`| $\nVDash$ `\nVDash`  | $\varsupsetneqq$ `\varsupsetneqq` |
| $\ngeq$ `\ngeq`| $\nshortparallel$ `\nshortparallel` | $\nVdash$ `\nVdash`  |
| $\ngeqq$ `\ngeqq`  | $\nsim$ `\nsim`  | $\precnapprox$ `\precnapprox`|

## 箭头

||||
|:----------|:----------|:----------|
|$\circlearrowleft$ `\circlearrowleft`|$\leftharpoonup$ `\leftharpoonup`|$\rArr$ `\rArr`
|$\circlearrowright$ `\circlearrowright`|$\leftleftarrows$ `\leftleftarrows`|$\rarr$ `\rarr`
|$\curvearrowleft$ `\curvearrowleft`|$\leftrightarrow$ `\leftrightarrow`|$\restriction$ `\restriction`
|$\curvearrowright$ `\curvearrowright`|$\Leftrightarrow$ `\Leftrightarrow`|$\rightarrow$ `\rightarrow`
|$\Darr$ `\Darr`|$\leftrightarrows$ `\leftrightarrows`|$\Rightarrow$ `\Rightarrow`
|$\dArr$ `\dArr`|$\leftrightharpoons$ `\leftrightharpoons`|$\rightarrowtail$ `\rightarrowtail`
|$\darr$ `\darr`|$\leftrightsquigarrow$ `\leftrightsquigarrow`|$\rightharpoondown$ `\rightharpoondown`
|$\dashleftarrow$ `\dashleftarrow`|$\Lleftarrow$ `\Lleftarrow`|$\rightharpoonup$ `\rightharpoonup`
|$\dashrightarrow$ `\dashrightarrow`|$\longleftarrow$ `\longleftarrow`|$\rightleftarrows$ `\rightleftarrows`
|$\downarrow$ `\downarrow`|$\Longleftarrow$ `\Longleftarrow`|$\rightleftharpoons$ `\rightleftharpoons`
|$\Downarrow$ `\Downarrow`|$\longleftrightarrow$ `\longleftrightarrow`|$\rightrightarrows$ `\rightrightarrows`
|$\downdownarrows$ `\downdownarrows`|$\Longleftrightarrow$ `\Longleftrightarrow`|$\rightsquigarrow$ `\rightsquigarrow`
|$\downharpoonleft$ `\downharpoonleft`|$\longmapsto$ `\longmapsto`|$\Rrightarrow$ `\Rrightarrow`
|$\downharpoonright$ `\downharpoonright`|$\longrightarrow$ `\longrightarrow`|$\Rsh$ `\Rsh`
|$\gets$ `\gets`|$\Longrightarrow$ `\Longrightarrow`|$\searrow$ `\searrow`
|$\Harr$ `\Harr`|$\looparrowleft$ `\looparrowleft`|$\swarrow$ `\swarrow`
|$\hArr$ `\hArr`|$\looparrowright$ `\looparrowright`|$\to$ `\to`
|$\harr$ `\harr`|$\Lrarr$ `\Lrarr`|$\twoheadleftarrow$ `\twoheadleftarrow`
|$\hookleftarrow$ `\hookleftarrow`|$\lrArr$ `\lrArr`|$\twoheadrightarrow$ `\twoheadrightarrow`
|$\hookrightarrow$ `\hookrightarrow`|$\lrarr$ `\lrarr`|$\Uarr$ `\Uarr`
|$\iff$ `\iff`|$\Lsh$ `\Lsh`|$\uArr$ `\uArr`
|$\impliedby$ `\impliedby`|$\mapsto$ `\mapsto`|$\uarr$ `\uarr`
|$\implies$ `\implies`|$\nearrow$ `\nearrow`|$\uparrow$ `\uparrow`
|$\Larr$ `\Larr`|$\nleftarrow$ `\nleftarrow`|$\Uparrow$ `\Uparrow`
|$\lArr$ `\lArr`|$\nLeftarrow$ `\nLeftarrow`|$\updownarrow$ `\updownarrow`
|$\larr$ `\larr`|$\nleftrightarrow$ `\nleftrightarrow`|$\Updownarrow$ `\Updownarrow`
|$\leadsto$ `\leadsto`|$\nLeftrightarrow$ `\nLeftrightarrow`|$\upharpoonleft$ `\upharpoonleft`
|$\leftarrow$ `\leftarrow`|$\nrightarrow$ `\nrightarrow`|$\upharpoonright$ `\upharpoonright`
|$\Leftarrow$ `\Leftarrow`|$\nRightarrow$ `\nRightarrow`|$\upuparrows$ `\upuparrows`
|$\leftarrowtail$ `\leftarrowtail`|$\nwarrow$ `\nwarrow`
|$\leftharpoondown$ `\leftharpoondown`|$\Rarr$ `\Rarr`

|||
|:----------------------------------------------------|:-----
|$\xleftarrow{abc}$ `\xleftarrow{abc}`                |$\xrightarrow[under]{over}$ `\xrightarrow[under]{over}`
|$\xLeftarrow{abc}$ `\xLeftarrow{abc}`                |$\xRightarrow{abc}$ `\xRightarrow{abc}`
|$\xleftrightarrow{abc}$ `\xleftrightarrow{abc}`      |$\xLeftrightarrow{abc}$ `\xLeftrightarrow{abc}`
|$\xhookleftarrow{abc}$ `\xhookleftarrow{abc}`        |$\xhookrightarrow{abc}$ `\xhookrightarrow{abc}`
|$\xtwoheadleftarrow{abc}$ `\xtwoheadleftarrow{abc}`  |$\xtwoheadrightarrow{abc}$ `\xtwoheadrightarrow{abc}`
|$\xleftharpoonup{abc}$ `\xleftharpoonup{abc}`        |$\xrightharpoonup{abc}$ `\xrightharpoonup{abc}`
|$\xleftharpoondown{abc}$ `\xleftharpoondown{abc}`    |$\xrightharpoondown{abc}$ `\xrightharpoondown{abc}`
|$\xleftrightharpoons{abc}$ `\xleftrightharpoons{abc}`|$\xrightleftharpoons{abc}$ `\xrightleftharpoons{abc}`
|$\xtofrom{abc}$ `\xtofrom{abc}`                      |$\xmapsto{abc}$ `\xmapsto{abc}`
|$\xlongequal{abc}$ `\xlongequal{abc}`||

## 符号和标点符号

||||
|:----------|:----------|:----------|
|`% comment`|$\dots$ `\dots`|$\KaTeX$ `\KaTeX`
|$\%$ `\%`|$\cdots$ `\cdots`|$\LaTeX$ `\LaTeX`
|$\#$ `\#`|$\ddots$ `\ddots`|$\TeX$ `\TeX`
|$\&$ `\&`|$\ldots$ `\ldots`|$\nabla$ `\nabla`
|$\_$ `\_`|$\vdots$ `\vdots`|$\infty$ `\infty`
|$\text{\textunderscore}$ `\text{\textunderscore}`|$\dotsb$ `\dotsb`|$\infin$ `\infin`
|$\text{--}$ `\text{--}`|$\dotsc$ `\dotsc`|$\checkmark$ `\checkmark`
|$\text{\textendash}$ `\text{\textendash}`|$\dotsi$ `\dotsi`|$\dag$ `\dag`
|$\text{---}$ `\text{---}`|$\dotsm$ `\dotsm`|$\dagger$ `\dagger`
|$\text{\textemdash}$ `\text{\textemdash}`|$\dotso$ `\dotso`|$\text{\textdagger}$ `\text{\textdagger}`
|$\text{\textasciitilde}$ `\text{\textasciitilde}`|$\sdot$ `\sdot`|$\ddag$ `\ddag`
|$\text{\textasciicircum}$ `\text{\textasciicircum}`|$\mathellipsis$ `\mathellipsis`|$\ddagger$ `\ddagger`
|$`$ <code>`</code>|$\text{\textellipsis}$ `\text{\textellipsis}`|$\text{\textdaggerdbl}$ `\text{\textdaggerdbl}`
|$\text{\textquoteleft}$ `text{\textquoteleft}`|$\Box$ `\Box`|$\Dagger$ `\Dagger`
|$\lq$ `\lq`|$\square$ `\square`|$\angle$ `\angle`
|$\text{\textquoteright}$ `\text{\textquoteright}`|$\blacksquare$ `\blacksquare`|$\measuredangle$ `\measuredangle`
|$\rq$ `\rq`|$\triangle$ `\triangle`|$\sphericalangle$ `\sphericalangle`
|$\text{\textquotedblleft}$ `\text{\textquotedblleft}`|$\triangledown$ `\triangledown`|$\top$ `\top`
|$"$ `"`|$\triangleleft$ `\triangleleft`|$\bot$ `\bot`
|$\text{\textquotedblright}$ `\text{\textquotedblright}`|$\triangleright$ `\triangleright`|$\$$ `\$`
|$\colon$ `\colon`|$\bigtriangledown$ `\bigtriangledown`|$\text{\textdollar}$ `\text{\textdollar}`
|$\backprime$ `\backprime`|$\bigtriangleup$ `\bigtriangleup`|$\pounds$ `\pounds`
|$\prime$ `\prime`|$\blacktriangle$ `\blacktriangle`|$\mathsterling$ `\mathsterling`
|$\text{\textless}$ `\text{\textless}`|$\blacktriangledown$ `\blacktriangledown`|$\text{\textsterling}$ `\text{\textsterling}`
|$\text{\textgreater}$ `\text{\textgreater}`|$\blacktriangleleft$ `\blacktriangleleft`|$\yen$ `\yen`
|$\text{\textbar}$ `\text{\textbar}`|$\blacktriangleright$ `\blacktriangleright`|$\surd$ `\surd`
|$\text{\textbardbl}$ `\text{\textbardbl}`|$\diamond$ `\diamond`|$\degree$ `\degree`
|$\text{\textbraceleft}$ `\text{\textbraceleft}`|$\Diamond$ `\Diamond`|$\text{\textdegree}$ `\text{\textdegree}`
|$\text{\textbraceright}$ `\text{\textbraceright}`|$\lozenge$ `\lozenge`|$\mho$ `\mho`
|$\text{\textbackslash}$ `\text{\textbackslash}`|$\blacklozenge$ `\blacklozenge`|$\diagdown$ `\diagdown`
|$\text{\P}$ `\text{\P}` or `\P`|$\star$ `\star`|$\diagup$ `\diagup`
|$\text{\S}$ `\text{\S}` or `\S`|$\bigstar$ `\bigstar`|$\flat$ `\flat`
|$\text{\sect}$ `\text{\sect}`|$\clubsuit$ `\clubsuit`|$\natural$ `\natural`
|$\copyright$ `\copyright`|$\clubs$ `\clubs`|$\sharp$ `\sharp`
|$\circledR$ `\circledR`|$\diamondsuit$ `\diamondsuit`|$\heartsuit$ `\heartsuit`
|$\text{\textregistered}$ `\text{\textregistered}`|$\diamonds$ `\diamonds`|$\hearts$ `\hearts`
|$\circledS$ `\circledS`|$\spadesuit$ `\spadesuit`|$\spades$ `\spades`
|$\text{\textcircled a}$ `\text{\textcircled a}`|$\maltese$ `\maltese`|$\minuso$ `\minuso`|

## 字体


| LaTeX代码 | 效果 | LaTeX代码 | 效果 | 
| :-------------: | :-------------: | :-------------: | :-------------: |
| `\mathbb{A-Z}` | $\mathbb{A-Z}$ | `\mathit{A-Z,a-z,0-9}` | $\mathit{A-Z,a-z,0-9}$ |
| `\mathbf{A-Z,a-z,0-9}` | $\mathbf{A-Z,a-z}$ | `\pmb{A-Z,a-z,0-9` | $\pmb{A-Z,a-z,0-9}$ |
| `\mathtt{A-Z,a-z,0-9}` | $\mathtt{A-Z,a-z,0-9}$ | `\mathrm{A-Z,a-z,0-9}`   | $\mathrm{A-Z,a-z,0-9}$ |
| `\mathsf{A-Z,a-z,0-9}` | $\mathsf{A-Z,a-z,0-9}$ | `\mathcal{A-Z,a-z,0-9}`   | $\mathcal{A-Z,a-z,0-9}$ |
| `\mathscr{A-Z,a-z}` | $\mathscr{A-Z}$ | `\mathfrak{A-Z,a-z,0-9}`   | $\mathfrak{A-Z,a-z,0-9}$ |

## 上下标
$$
a^b \qquad a_1
$$
```tex
a^b    a_1
```

## 分式和根式

$$
3/8 \qquad \frac{3}{8} \qquad \tfrac{3}{8}
$$
```tex
3/8 \qquad \frac{3}{8} \qquad \tfrac{3}{8}
```

$$
\sqrt{x} \Leftrightarrow x^{1/2} \quad \sqrt[3]{2} \quad \sqrt{x^{2} + \sqrt{y}}
$$
```tex
\sqrt{x} \Leftrightarrow x^{1/2} \quad \sqrt[3]{2} \quad \sqrt{x^{2} + \sqrt{y}}
```

## 求和

$$
\sum_{i=1}^n \quad
\int_0^{\frac{\pi}{2}} dx \quad
\oint_0^{\frac{\pi}{2}} \quad
\prod_\epsilon 
$$
```tex
\sum_{i=1}^n \quad
\int_0^{\frac{\pi}{2}} dx\quad
\oint_0^{\frac{\pi}{2}} \quad
\prod_\epsilon 
```

## 连乘
$$
\prod_{i=0}^{n}a_i 
$$
```tex
\prod_{i=0}^{n}a_i
```

## 导数
$$
\frac{\mathrm{d} }{\mathrm{d} x} x^2
$$
```tex
\frac{\mathrm{d} }{\mathrm{d} x} x^2
```

## 积分

$$
\int_a^b f(x)\mathrm{d}x 
$$
```tex
\int_a^b f(x)\mathrm{d}x 
```

$$
\int\int f(x)g(y) \mathrm{d}x\mathrm{d}y
$$
```tex
\int\int f(x)g(y) \mathrm{d}x\mathrm{d}y
```

$$
\oint_0^{\frac{\pi}{2}}2\theta\mathrm{d}\theta
$$
```tex
\oint_0^{\frac{\pi}{2}}2\theta\mathrm{d}\theta
```

## 括号
LaTex表达式中的 ( ) 、 [ ] 均可以正常使用，但是对于 { } 需要使用转义字符使用，即使用 “\{” 和 “\}” 表示 { }

| LaTeX代码 | 效果 | 
| :-------------: | :-------------: |
| `\left( \cdots \right)` | $\left( \cdots \right)$ |
| `\vert \cdots \vert` | $\vert \cdots \vert$ |
| `\Vert \cdots \Vert` | $\Vert \cdots \Vert$ |
| `\langle \cdots \rangle` | $\langle \cdots \rangle$ |
| `\Biggl(\biggl(\Bigl(\bigl((\cdots)\bigr)\Bigr)\biggr)\Biggr)` | $\Biggl(\biggl(\Bigl(\bigl((\cdots)\bigr)\Bigr)\biggr)\Biggr)$ |

$$
f\left(
   \left[ 
     \frac{
       1+\left\{x,y\right\}
     }{
       \left(
          \frac{x}{y}+\frac{y}{x}
       \right)
       \left(u+1\right)
     }+a
   \right]^{3/2}
\right)
$$
```tex
f\left(
   \left[ 
     \frac{
       1+\left\{x,y\right\}
     }{
       \left(
          \frac{x}{y}+\frac{y}{x}
       \right)
       \left(u+1\right)
     }+a
   \right]^{3/2}
\right)
```

## 对齐方程

$$
\begin{align}
    \sqrt{37} & = \sqrt{\frac{73^2-1}{12^2}} \\
    & = \sqrt{\frac{73^2}{12^2}\cdot\frac{73^2-1}{73^2}} \\ 
    & = \sqrt{\frac{73^2}{12^2}}\sqrt{\frac{73^2-1}{73^2}} \\
    & = \frac{73}{12}\sqrt{1 - \frac{1}{73^2}} \\ 
    & \approx \frac{73}{12}\left(1 - \frac{1}{2\cdot73^2}\right)
\end{align}
$$
```tex
\begin{align}
    \sqrt{37} & = \sqrt{\frac{73^2-1}{12^2}} \\
    & = \sqrt{\frac{73^2}{12^2}\cdot\frac{73^2-1}{73^2}} \\ 
    & = \sqrt{\frac{73^2}{12^2}}\sqrt{\frac{73^2-1}{73^2}} \\
    & = \frac{73}{12}\sqrt{1 - \frac{1}{73^2}} \\ 
    & \approx \frac{73}{12}\left(1 - \frac{1}{2\cdot73^2}\right)
\end{align}
```


$$
\begin{align} 
    f(x)&=\left(x^3\right)+\left(x^3+x^2+x^1\right)+\left(x^3+x^‌​2\right)\\ 
    f'(x)&=\left(3x^2+2x+1\right)+\left(3x^2+2x\right)\\ 
    f''(x)&=\left(6x+2\right)\\ 
\end{align}
$$
```tex
\begin{align} 
    f(x)&=\left(x^3\right)+\left(x^3+x^2+x^1\right)+\left(x^3+x^‌​2\right)\\ 
    f'(x)&=\left(3x^2+2x+1\right)+\left(3x^2+2x\right)\\ 
    f''(x)&=\left(6x+2\right)\\ 
\end{align}
```


$$
\begin{equation}
    \begin{aligned} 
        f(x)&=\left(x^3\right)+\left(x^3+x^2+x^1\right)+\left(x^3+x^‌​2\right)\\ 
        f'(x)&=\left(3x^2+2x+1\right)+\left(3x^2+2x\right)\\ 
        f''(x)&=\left(6x+2\right)\\ 
    \end{aligned}
\end{equation}
$$
```tex
\begin{equation}
    \begin{aligned} 
        f(x)&=\left(x^3\right)+\left(x^3+x^2+x^1\right)+\left(x^3+x^‌​2\right)\\ 
        f'(x)&=\left(3x^2+2x+1\right)+\left(3x^2+2x\right)\\ 
        f''(x)&=\left(6x+2\right)\\ 
    \end{aligned}
\end{equation}
```

## 矩阵


$$
\begin{matrix}
   a & b \\
   c & d
\end{matrix}
$$
```tex
\begin{matrix}
   a & b \\
   c & d
\end{matrix}
```


$$
\begin{pmatrix}
   a & b \\
   c & d
\end{pmatrix}
$$
```tex
\begin{pmatrix}
   a & b \\
   c & d
\end{pmatrix}
```


$$
\begin{bmatrix}
   a & b \\
   c & d
\end{bmatrix}
$$
```tex
\begin{bmatrix}
   a & b \\
   c & d
\end{bmatrix}
```


$$
\begin{vmatrix}
   a & b \\
   c & d
\end{vmatrix}
$$
```tex
\begin{vmatrix}
   a & b \\
   c & d
\end{vmatrix}
```


$$
\begin{Vmatrix}
   a & b \\
   c & d
\end{Vmatrix}
$$
```tex
\begin{Vmatrix}
   a & b \\
   c & d
\end{Vmatrix}
```


$$
\begin{Bmatrix}
   a & b \\
   c & d
\end{Bmatrix}
$$
```tex
\begin{Bmatrix}
   a & b \\
   c & d
\end{Bmatrix}
```


$$
\begin{pmatrix}
 1 & a_1 & a_1^2 & \cdots & a_1^n \\
 1 & a_2 & a_2^2 & \cdots & a_2^n \\
 \vdots  & \vdots& \vdots & \ddots & \vdots \\
 1 & a_m & a_m^2 & \cdots & a_m^n    
 \end{pmatrix}
$$
```tex
\begin{pmatrix}
    1 & a_1 & a_1^2 & \cdots & a_1^n \\
    1 & a_2 & a_2^2 & \cdots & a_2^n \\
    \vdots  & \vdots& \vdots & \ddots & \vdots \\
    1 & a_m & a_m^2 & \cdots & a_m^n    
\end{pmatrix}
```

## 分段函数


$$
f(n) =
\begin{cases}
    n/2,  & \text{if $n$ is even} \\
    3n+1, & \text{if $n$ is odd}
\end{cases}
$$
```tex
f(n) =
\begin{cases}
    n/2,  & \text{if $n$ is even} \\
    3n+1, & \text{if $n$ is odd}
\end{cases}
```


$$
\left.
    \begin{array}{l}
        \text{if $n$ is even:}&n/2\\
        \text{if $n$ is odd:}&3n+1
    \end{array}
\right\}
=f(n)
$$
```tex
\left.
    \begin{array}{l}
        \text{if $n$ is even:}&n/2\\
        \text{if $n$ is odd:}&3n+1
    \end{array}
\right\}
=f(n)
```


$$
f(n) =
\begin{cases}
    \frac{n}{2},  & \text{if $n$ is even} \\[2ex]
    3n+1, & \text{if $n$ is odd}
\end{cases}
$$
```tex
f(n) =
\begin{cases}
    \frac{n}{2},  & \text{if $n$ is even} \\[2ex]
    3n+1, & \text{if $n$ is odd}
\end{cases}
```


## 方程组

$$
\left\{ 
    \begin{array}{c}
        a_1x+b_1y+c_1z=d_1 \\ 
        a_2x+b_2y+c_2z=d_2 \\ 
        a_3x+b_3y+c_3z=d_3
    \end{array}
\right.
$$
```tex
\left\{ 
    \begin{array}{c}
        a_1x+b_1y+c_1z=d_1 \\ 
        a_2x+b_2y+c_2z=d_2 \\ 
        a_3x+b_3y+c_3z=d_3
    \end{array}
\right.
```


$$
\begin{cases}
    a_1x+b_1y+c_1z=d_1 \\ 
    a_2x+b_2y+c_2z=d_2 \\ 
    a_3x+b_3y+c_3z=d_3
\end{cases}
$$
```tex
\begin{cases}
    a_1x+b_1y+c_1z=d_1 \\ 
    a_2x+b_2y+c_2z=d_2 \\ 
    a_3x+b_3y+c_3z=d_3
\end{cases}
```


$$
\left\{
    \begin{aligned} 
        a_1x+b_1y+c_1z &=d_1+e_1 \\ 
        a_2x+b_2y&=d_2 \\ 
        a_3x+b_3y+c_3z &=d_3 
    \end{aligned} 
\right. 
$$
```tex
\left\{
    \begin{aligned} 
        a_1x+b_1y+c_1z &=d_1+e_1 \\ 
        a_2x+b_2y&=d_2 \\ 
        a_3x+b_3y+c_3z &=d_3 
    \end{aligned} 
\right. 
```


$$
\begin{cases}
    a_1x+b_1y+c_1z=\frac{p_1}{q_1} \\[2ex] 
    a_2x+b_2y+c_2z=\frac{p_2}{q_2} \\[2ex] 
    a_3x+b_3y+c_3z=\frac{p_3}{q_3}
\end{cases}
$$
```tex
\begin{cases}
    a_1x+b_1y+c_1z=\frac{p_1}{q_1} \\[2ex] 
    a_2x+b_2y+c_2z=\frac{p_2}{q_2} \\[2ex] 
    a_3x+b_3y+c_3z=\frac{p_3}{q_3}
\end{cases}
```


$$
\begin{cases}
    a_1x+b_1y+c_1z=\frac{p_1}{q_1} \\
    a_2x+b_2y+c_2z=\frac{p_2}{q_2} \\
    a_3x+b_3y+c_3z=\frac{p_3}{q_3}
\end{cases}
$$
```tex
\begin{cases}
    a_1x+b_1y+c_1z=\frac{p_1}{q_1} \\
    a_2x+b_2y+c_2z=\frac{p_2}{q_2} \\
    a_3x+b_3y+c_3z=\frac{p_3}{q_3}
\end{cases}
```