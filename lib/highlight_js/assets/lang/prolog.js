hljs.registerLanguage("prolog",function(c){var b={b:/[a-z][A-Za-z0-9_]*/,r:0},r={cN:"symbol",v:[{b:/[A-Z][a-zA-Z0-9_]*/},{b:/_[A-Za-z0-9_]*/}],r:0},e={b:/\(/,e:/\)/,r:0},n={b:/\[/,e:/\]/},a={cN:"comment",b:/%/,e:/$/,c:[c.PWM]},t={cN:"string",b:/`/,e:/`/,c:[c.BE]},g={cN:"string",b:/0\'(\\\'|.)/},s={cN:"string",b:/0\'\\s/},o={b:/:-/},N=[b,r,e,o,n,a,c.CBCM,c.QSM,c.ASM,t,g,s,c.CNM];return e.c=N,n.c=N,{c:N.concat([{b:/\.$/}])}});