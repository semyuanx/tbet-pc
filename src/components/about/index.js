import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import AboutContainer from './about_container.js';
import AboutUs from './about_item/about_us'; // 关于我们
import AboutNotice from './about_item/about_notice'; //最新公告
import AboutDuty from './about_item/about_duty'; //博彩责任
import AboutQuestion from './about_item/about_question'; //常见问题
import AboutSafety from './about_item/about_safetys'; //隐私安全
import AboutContactus from './about_item/about_contactus'; //联系我们
import AboutClause from './about_item/about_clause'; //条款与协议

require('./css/style.css');

var About = (
    <Route path="/about.html" component={AboutContainer}>
        <IndexRedirect to="/about_us.html" />
        <Route path="/about_us.html" component={AboutUs} />
        <Route path="/notice.html" component={AboutNotice} />
        <Route path="/duty.html" component={AboutDuty} />
        <Route path="/question.html" component={AboutQuestion} />
        <Route path="/safetys.html" component={AboutSafety} />
        <Route path="/contact_us.html" component={AboutContactus} />
        <Route path="/clause.html" component={AboutClause} />
    </Route>
);
export default About;





