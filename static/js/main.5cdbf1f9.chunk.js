(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(t,e,n){t.exports=n(202)},161:function(t,e){},163:function(t,e){},179:function(t,e,n){},202:function(t,e,n){"use strict";n.r(e);n(104),n(133);var s=n(0),a=n.n(s),r=n(37),o=n.n(r),c=n(27),i=n(97),u=n(98),l=n(100),p=n(99),h=n(101),f=n(3),g=n(60),v=n(38),m=n.n(v),d=(n(179),n(102)),w=n(61),E={given_answers:[],step:0,history:[]},j={given_answers:[],step:1},b=function(t,e){var n=t.calcScore(e.given_answers),s=Object(c.a)({},e,{score:n});if(t.isDebugging()){for(var a in console.group("historyRecord"),s)console.log(a,s[a]);console.groupEnd("historyRecord")}t.setState({history:Object(w.a)(t.state.history).concat([s])})},y=function(t){var e=Object(w.a)(t.state.history);e.pop();var n=(e=e.length?e:j)[e.length-1];if(t.isDebugging()){for(var s in console.group("historyGoBack"),n)console.log(s,n[s]);console.groupEnd("historyGoBack")}n.score;var a=Object(d.a)(n,["score"]);t.setState(Object(c.a)({},{history:e},a))},k=function(t){return"/api/".concat(t)},_=n(183),O=function(t){return a.a.createElement(g.Transition,Object.assign({in:!0,exit:!0},t,{timeout:900}),function(e){var n="transition ".concat(e);return a.a.createElement("div",{className:n},t.children)})};function S(t){return a.a.createElement(O,t,a.a.createElement("p",null,"Henter data..."))}function q(t){return a.a.createElement(O,t,a.a.createElement("div",{className:"test-wrapper--intro"},m()(t.intro),a.a.createElement("button",{onClick:t.start},"Start testen")))}function N(t){var e=t.info,n=t.onClick,s=t.answered,r=e.answers.map(function(t){return t.answer_id});return a.a.createElement("div",{className:"test-wrapper--step"},a.a.createElement("h2",null,e.question),e.text&&e.text.map(function(t,e){return a.a.createElement("p",{key:e},t)}),e.answers&&e.answers.map(function(t){var e;return s.includes(t.answer_id)&&(e="active"),a.a.createElement("div",{key:t.answer_id},a.a.createElement("button",{className:e,onClick:n.bind(null,t.answer_id,r)},t.text))}),e.extra&&m()(e.extra))}function A(t){var e=t.question,n=t.given_answers,s=t.recordAnswerAndStep;return a.a.createElement(O,t,a.a.createElement("div",{className:"Question"},a.a.createElement(N,{info:e,onClick:function(t,e){s(t,e)},answered:n})))}function C(t){var e=t.result,n="result result__group--".concat(e.group);return a.a.createElement(O,t,a.a.createElement("div",{className:"test-wrapper--result"},a.a.createElement("div",{className:n},m()(e.html))))}function x(t){for(var e=[],n=0;n<t.count;++n)e[n]="";for(var s=0;s<t.step-1;++s)e[s]+="seen ";return e[t.step-1]+="active ",e[t.count-1]+="final ",a.a.createElement("ul",{className:"test-wrapper--status"},e.map(function(t,e){return a.a.createElement("li",{key:e,className:t},a.a.createElement("i",null))}))}var B=function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(l.a)(this,Object(p.a)(e).call(this,t))).startTest=function(){n.setState(function(){return{step:1}}),b(Object(f.a)(Object(f.a)(n)),j)},n.recordAnswerAndStep=function(t,e){var s=n.state.given_answers.filter(function(t){return!e.includes(t)});s.push(t);var a={given_answers:s};if(n.calcScore(s)<0)return a.step=n.state.count,b(Object(f.a)(Object(f.a)(n)),{step:a.step,given_answers:a.given_answers}),void n.setState(a);var r=0,o=n.state.step+1;for(o>=n.state.count&&(r=n.state.count);!r&&o<n.state.count;){var c=n.state.json.questions[o-1],i=c.depends||[];i.length?function(){var t=0;i.forEach(function(e){s.forEach(function(n){e===n&&++t})}),0<t&&(c.operator&&"or"===c.operator&&(r=o),t===i.length&&(r=o))}():r=o,o++}(!r||r>=n.state.count)&&(r=n.state.count),a.step=r,b(Object(f.a)(Object(f.a)(n)),{step:a.step,given_answers:a.given_answers}),n.setState(a)},n.findScores=function(t,e,n){for(var s=0;s<e.length;++s){var a=e[s];t[a.answer_id]=Array.isArray(a.score)?a.score[n]:a.score}return t},n.calcScore=function(t){if(!n.state.json)return 0;for(var e=t||n.state.given_answers,s=n.state.json.questions,a=[],r=e[0]||0,o=0;o<s.length;++o){var c=s[o];n.findScores(a,c.answers,r),c.sub&&c.sub.forEach(function(t){n.findScores(a,t.answers,r)})}return e.reduce(function(t,e){return t+a[e]},0)},n.getResult=function(){for(var t=n.calcScore(),e=n.state.json.results,s=0;s<e.length;++s){var a=e[s];if(a.up_to&&t<a.up_to||a.in&&a.in.includes(t)||!a.in&&!a.up_to)return a}return{}},n.goBack=function(){return y(Object(f.a)(Object(f.a)(n)))},n.isDebugging=function(){return!0},t.json?n.state=Object(c.a)({},E,{steps:t.json.questions[t.json.questions.length-1].step+1,count:t.json.questions.length+1,json:t.json}):(n.state=E,_.get(k(n.props.quiz)).then(function(t){var e=t.data;n.setState(function(){return{steps:e.questions[e.questions.length-1].step+1,count:e.questions.length+1,json:e}})}).catch(function(t){console.warn&&console.warn(t)})),n}return Object(h.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=0;return this.state.step&&(t=this.state.step>=this.state.count?this.state.steps:this.state.json.questions[this.state.step-1].step),this.isDebugging()&&(console.group("Current state"),console.log("History",this.state.history),console.log("Current score",this.calcScore()),console.log("State",this.state),console.groupEnd("Current state")),a.a.createElement("div",{className:"test-wrapper"},1<this.state.step&&a.a.createElement("a",{className:"back-button",onClick:this.goBack},"Tilbage"),a.a.createElement("div",{className:"test-wrapper-body"},a.a.createElement(g.TransitionGroup,null,0===this.state.step&&!this.state.json&&a.a.createElement(S,{key:"loading"}),0===this.state.step&&this.state.json&&a.a.createElement(q,{key:"testintro",intro:this.state.json.intro,start:this.startTest}),0<this.state.step&&this.state.step>=this.state.count&&a.a.createElement(C,{key:"result",result:this.getResult()}),0<this.state.step&&this.state.step<this.state.count&&a.a.createElement(A,{key:"question"+this.state.step,question:this.state.json.questions[this.state.step-1],given_answers:this.state.given_answers,recordAnswerAndStep:this.recordAnswerAndStep}),0<this.state.step&&a.a.createElement(x,{key:"status",step:t,count:this.state.steps}))))}}]),e}(s.Component);o.a.render(a.a.createElement(B,{quiz:"danmark-testen"}),document.getElementById("danmark-testen"))}},[[103,2,1]]]);
//# sourceMappingURL=main.5cdbf1f9.chunk.js.map