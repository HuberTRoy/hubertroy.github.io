webpackJsonp([15],{N2h9:function(t,e){},UcW8:function(t,e){},iZGN:function(t,e){},xtKT:function(t,e){},"yJ/u":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("lC5x"),a=r.n(n),s=r("J0Oq"),_=r.n(s),o=r("4YfN"),i=r.n(o),c=r("nfw7"),p=r.n(c),l=r("7JaI"),u=r("lRiA"),d=r("2bvH"),v={components:{VueMarkDown:p.a,Comments:u.a,CommentDialog:l.a},computed:i()({},Object(d.d)({report_info:function(t){return t.reports.report_information}}))},f={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"report_main_content_div"},[t.report_info.author?r("div",{staticClass:"report_main_content_base_info"},[r("div",{staticClass:"report_main_content_base_info_user_info"},[r("img",{staticClass:"report_main_content_avatar",attrs:{src:t.report_info.author.avatar_url}}),t._v(" "),r("span",[t._v("\n                "+t._s(t.report_info.author.name)),r("span",{staticClass:"level"},[t._v("L"+t._s(t.report_info.author.level))])]),t._v(" "),r("span",{staticClass:"report_created_time"},[t._v(t._s(t.report_info.author.created_at))]),t._v(" "),r("a",{attrs:{href:"javascript:;"}},[t._v(t._s(t.report_info.lab_name))])]),t._v(" "),r("div",{staticClass:"report_main_content_base_info_check_info"},[r("i",{staticClass:"far fa-eye"}),t._v(" "),r("span",{staticClass:"report_check_info_span"},[t._v(t._s(t.report_info.views_count))]),t._v(" "),r("i",{staticClass:"far fa-comments"}),t._v(" "),r("span",{staticClass:"report_check_info_span"},[t._v(t._s(t.report_info.comments_count))])])]):t._e(),t._v(" "),r("div",{staticClass:"report_main_content_article"},[r("div",{staticClass:"report_main_content_base_info_title"},[r("p",{staticClass:"report_main_content_article_course_name"},[t._v(" "+t._s(t.report_info.course_name)+" ")]),t._v(" "),r("a",{staticClass:"report_main_content_article_lab_name",attrs:{href:"javascript:;"}},[t._v("\n                "+t._s(t.report_info.lab_name)+"\n            ")]),t._v(" "),t.report_info.content?r("VueMarkDown",{staticClass:"report_content",attrs:{source:t.report_info.content}}):t._e()],1)]),t._v(" "),r("div",{staticClass:"report_main_content_comments"},[r("CommentDialog",{attrs:{_name:"labreport"}}),t._v(" "),r("Comments",{attrs:{_name:"labreport"}})],1)])},staticRenderFns:[]};var m=r("C7Lr")(v,f,!1,function(t){r("UcW8")},null,null).exports,h={data:function(){return{learn_data_dict:{study_minutes:"学习时间",operation_minutes:"操作时间",keystrokes_count:"按键次数",running_times:"实验次数"},learn_data_dict2:{study_minutes:"分钟",operation_minutes:"分钟",keystrokes_count:"次",running_times:"次"}}},computed:i()({},Object(d.d)({learn_data:function(t){return t.reports.learn_data},related:function(t){return t.reports.related}}))},C={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"report_side_div"},[r("div",{staticClass:"report_side_block"},[r("p",{staticClass:"report_side_header"},[t._v("实验数据")]),t._v(" "),r("div",{staticClass:"report_side_learn_data"},t._l(t.learn_data,function(e,n){return r("div",{key:n},[r("span",{staticClass:"report_side_learn_data_span"},[t._v(t._s(t.learn_data_dict[n]))]),t._v(" "),r("span",{staticClass:"report_side_learn_data_span"},[t._v(t._s(e)+" "+t._s(t.learn_data_dict2[n]))])])}),0)]),t._v(" "),r("div",{staticClass:"report_side_block"},[r("p",{staticClass:"report_side_header"},[t._v("相关报告")]),t._v(" "),t._l(t.related,function(e,n){return r("div",{key:e.id,staticClass:"report_side_related_report"},[r("router-link",{attrs:{tag:"span",to:{name:"report",params:{id:e.id}}}},[t._v("\n                    "+t._s(e.course_name)+" : "+t._s(e.lab_name)+" 实验报告\n                 ")])],1)})],2)])},staticRenderFns:[]};var b={components:{MainReport:m,Side:r("C7Lr")(h,C,!1,function(t){r("N2h9")},null,null).exports},computed:i()({},Object(d.d)({report_info:function(t){return t.reports.report_information}})),methods:i()({},Object(d.b)({get_report_info:"reports/change_report_information",get_learn_data:"reports/change_learn_data",get_related:"reports/change_related"})),watch:{$route:function(){var t=_()(a.a.mark(function t(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.get_report_info({id:this.$route.params.id});case 2:return t.next=4,this.get_learn_data({id:this.$route.params.id});case 4:return t.next=6,this.get_related({id:this.$route.params.id});case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},created:function(){var t=_()(a.a.mark(function t(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.get_report_info({id:this.$route.params.id});case 2:return t.next=4,this.get_learn_data({id:this.$route.params.id});case 4:return t.next=6,this.get_related({id:this.$route.params.id});case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},g={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"report_content_div"},[r("div",{staticClass:"report_content_nav_div"},[r("router-link",{staticClass:"report_content_nav_span",attrs:{tag:"span",to:{name:"courses"}}},[t._v("\n            全部课程\n        ")]),t._v(" "),r("router-link",{staticClass:"report_content_nav_span",attrs:{tag:"span",to:{name:"reports"}}},[t._v("\n            实验报告\n        ")]),t._v(" "),r("span",{staticClass:"report_content_nav_span_no_link"},[t._v('\n            "'+t._s(t.report_info.course_name)+'"的实验报告\n        ')])],1),t._v(" "),r("div",{staticClass:"report_content_home_layout"},[r("MainReport"),t._v(" "),r("Side")],1)])},staticRenderFns:[]};var k={components:{Report:r("C7Lr")(b,g,!1,function(t){r("xtKT")},null,null).exports}},x={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"report_home_div"},[e("Report")],1)},staticRenderFns:[]};var y=r("C7Lr")(k,x,!1,function(t){r("iZGN")},null,null);e.default=y.exports}});
//# sourceMappingURL=15.14194971e3a601e137e6.js.map