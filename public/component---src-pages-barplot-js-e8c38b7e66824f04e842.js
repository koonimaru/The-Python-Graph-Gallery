(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"2mCb":function(e,a,t){},"59G+":function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var l=t("q1tI"),n=t.n(l),o=t("eynx"),r=t("JI6e"),i=t("Wbzz");function c(e){var a=e.imgName,t=e.caption,l=e.linkTo;return n.a.createElement(r.a,{xs:12,md:4},n.a.createElement(i.a,{to:l},n.a.createElement(o.a,{imgName:a,caption:t})))}},eynx:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));t("2mCb");var l=t("q1tI"),n=t.n(l),o=t("Wbzz"),r=t("9eSz"),i=t.n(r),c=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function m(e){var a=e.imgName,t=e.caption;if(c.includes(a))return n.a.createElement("p",null,"TODO");var l=Object(o.c)("3289484431").allFile.edges.find((function(e){return e.node.name.includes(a)}));return l?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"chartImageContainer"},n.a.createElement(i.a,{alt:a,fluid:l.node.childImageSharp.fluid,className:"chartImageImg"}),n.a.createElement("div",{className:"chartImageOverlay"},n.a.createElement("div",{className:"chartImageOverlayText"},n.a.createElement("p",null,t))))):null}},gMBH:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var l=t("q1tI"),n=t.n(l);function o(){return n.a.createElement("div",{className:"spacing",style:{height:140}})}},trRG:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return f}));var l=t("q1tI"),n=t.n(l),o=t("4/Vk"),r=t("7oih"),i=t("7vrA"),c=t("6+GL"),m=t("3Z9Z"),s=t("59G+"),p=t("pJaR"),u=t("Wbzz"),d=t("Hrqu"),b=t("JI6e"),h=t("ZJrt"),E=t("eynx"),g=t("gMBH");function f(){return n.a.createElement(r.a,{title:"Barplot",isTocEnabled:!0},n.a.createElement(o.a,{title:"Barplot",description:"<p>A <a href='https://www.data-to-viz.com/graph/barplot.html'>barplot</a> shows the relationship between a numeric and a categoric variable. Each entity of the categoric variable is represented as a bar. The size of the bar represents its numeric value. This section shows how to build a barplot with <code>Python</code>, using <code>Matplotlib</code> and <code>Seaborn</code>."}),n.a.createElement(i.a,null,n.a.createElement("h2",{id:"Quick"},"⏱ Quick start"),n.a.createElement(m.a,{className:"align-items-center"},n.a.createElement(b.a,{md:6},n.a.createElement("p",null,n.a.createElement("code",null,"Matplotlib")," is pretty convenient to build a barplot thanks to its ",n.a.createElement("code",null,"bar()")," function. Seaborn works perfectly as well, see its dedicated section.🔥")),n.a.createElement(b.a,{md:6},n.a.createElement(u.a,{to:"/1-basic-barplot"},n.a.createElement(E.a,{imgName:"1_basic_barplot",caption:"Most basic barplot with Python & Matplotlib."})))),n.a.createElement(h.a,null,"# Libraries\nimport numpy as np\nimport matplotlib.pyplot as plt\n\n# Make a random dataset:\nheight = [3, 12, 5, 18, 45]\nbars = ('A', 'B', 'C', 'D', 'E')\ny_pos = np.arange(len(bars))\n\n# Create bars\nplt.bar(y_pos, height)\n\n# Create names on the x-axis\nplt.xticks(y_pos, bars)\n\n# Show graphic\nplt.show()\n")),n.a.createElement(g.a,null),n.a.createElement(i.a,null,n.a.createElement("h2",{id:"Matplotlib"},n.a.createElement(d.b,null),"Barplot with ",n.a.createElement("code",null,"Matplotlib")),n.a.createElement("p",null,n.a.createElement("code",null,"Matplotlib")," is probably the most famous and flexible python library for data visualization. It is appropriate to build any kind of chart, including the barchart thanks to its ",n.a.createElement("code",null,"bar()")," function."),n.a.createElement("p",null,"The examples below should get you started. They go from ",n.a.createElement(u.a,{to:"/1-basic-barplot"},"basic examples")," to the details on how to ",n.a.createElement(u.a,{to:"/3-control-color-of-barplots"},"customize")," a barplot appropriately."),n.a.createElement(m.a,null,n.a.createElement(s.a,{imgName:"2_horizontal_barplot",caption:"Horizontal barplot, handy to make labels more readable.",linkTo:"/2-horizontal-barplot"}),n.a.createElement(s.a,{imgName:"3_control_color_barplot2",caption:"Barplot and color customization.",linkTo:"/3-control-color-of-barplots"}),n.a.createElement(s.a,{imgName:"3_control_color_barplot4",caption:"Change the bar stroke colors.",linkTo:"/3-control-color-of-barplots"}),n.a.createElement(s.a,{imgName:"4_add_title_and_axe_labels",caption:"Title and axis labels with Matplotlib.",linkTo:"/4-add-title-and-axis-label"}),n.a.createElement(s.a,{imgName:"5_custom_space_between_bars",caption:"Custom bar width. Can be handy to illustrate the sample size.",linkTo:"/5-control-width-and-space-in-barplots"}),n.a.createElement(s.a,{imgName:"5_custom_width_of_bars",caption:"Custom space between bars.",linkTo:"/5-control-width-and-space-in-barplots"}),n.a.createElement(s.a,{imgName:"6_change_texture",caption:"Change bar texture.",linkTo:"/3-control-color-of-barplots"}),n.a.createElement(s.a,{imgName:"7_increase_margin",caption:"More space under X axis to fit long labels.",linkTo:"/7-custom-barplot-layout"}),n.a.createElement(s.a,{imgName:"7_custom_label",caption:"Customize the bar labels.",linkTo:"/7-custom-barplot-layout"}),n.a.createElement(s.a,{imgName:"8_confidence_interval",caption:"Barplot with confidence interval.",linkTo:"/8-add-confidence-interval-on-barplot"}),n.a.createElement(s.a,{imgName:"10_barplot_with_number_of_observations",caption:"Highly customized barplot with colors, legend, labels and more.",linkTo:"/10-barplot-with-number-of-observation"}))),n.a.createElement(g.a,null),n.a.createElement(i.a,null,n.a.createElement("h2",{id:"Seaborn"},n.a.createElement(d.e,null),"Barplot with ",n.a.createElement("code",null,"Seaborn")),n.a.createElement("p",null,n.a.createElement("code",null,"Seaborn")," is definitely a good alternative to ",n.a.createElement("code",null,"Matplotlib")," to build a barplot. It comes with a ",n.a.createElement("code",null,"barplot()")," function that will get you started in minutes."),n.a.createElement("p",null,"As often, note that the ",n.a.createElement("code",null,"Seaborn")," alternative allows to write less code to build the chart, but is slighlty more limited in term of customization"),n.a.createElement(m.a,null,n.a.createElement(s.a,{imgName:"90_Input_format_for_heatmap1",caption:"The heatmap() function and how to apply it to any kind of data input",linkTo:"/90-heatmaps-with-various-input-format"}))),n.a.createElement(g.a,null),n.a.createElement(i.a,null,n.a.createElement("h2",{id:"Stacked & Grouped"},n.a.createElement(d.b,null),"Stacked and Grouped barplot with ",n.a.createElement("code",null,"Matplotlib")),n.a.createElement("p",null,n.a.createElement("u",null,"Stacked")," and ",n.a.createElement("u",null,"Grouped")," barplots are a variation of the more simple barplot. They display the value of a numeric variable for each group and subgroups of a dataset. Subgroups can be stacked (stacked barplot) or set one beside the other (grouped barplot)."),n.a.createElement("p",null,"The three examples below are in-depth tutorial explaining how to build them with Python."),n.a.createElement(m.a,null,n.a.createElement(s.a,{imgName:"12_stacked_barplot",caption:"How to build a stacked barplot with Python.",linkTo:"/11-grouped-barplot"}),n.a.createElement(s.a,{imgName:"12_grouped_barplot",caption:"How to build a grouped barplot with Python.",linkTo:"/12-stacked-barplot-with-matplotlib"}),n.a.createElement(s.a,{imgName:"12_stacked_barplot",caption:"How to build a percent stacked barplot with Python..",linkTo:"/13-percent-stacked-barplot"}))),n.a.createElement(g.a,null),n.a.createElement("div",{className:"greySection",id:"related"},n.a.createElement(i.a,null,n.a.createElement(p.a,{chartFamily:"ranking"}))),n.a.createElement(g.a,null),n.a.createElement(i.a,null,n.a.createElement(c.a,null)),n.a.createElement(g.a,null))}}}]);
//# sourceMappingURL=component---src-pages-barplot-js-e8c38b7e66824f04e842.js.map