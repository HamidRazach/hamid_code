import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import Image from 'next/image';

const TechnologySection = () => {
  const [activeTab, setActiveTab] = useState('1');
  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className="section_space">
      <div className="heading_block text-center">
        <div
          className="heading_focus_text has_underline d-inline-flex">
          Our Technologies
        </div>
        <h2 className="heading_text mb-0">
          We Use <mark>Technologies</mark>
        </h2>
      </div>

      <div className="tab_block_wrapper">
        <Nav tabs className="nav justify-content-center">
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '1' })}
              onClick={() => toggle('1')}
            >
              Web Platform
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '2' })}
              onClick={() => toggle('2')}
            >
              Databases
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '3' })}
              onClick={() => toggle('3')}
            >
              Cloud & DevOps
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '4' })}
              onClick={() => toggle('4')}
            >
              Mobile Apps
            </NavLink>
         
          </NavItem>
          <NavItem>
              <NavLink
              className={classnames({ active: activeTab === '5' })}
              onClick={() => toggle('5')}
            >
              Another Network
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={activeTab}>
          {/* Tab 1 - Web Platform */}
          <TabPane tabId="1">
            <div className="web_development_technologies row justify-content-center">
              {/* html */}
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                  <div className="iconbox_icon">
                    <Image src="/images/icons/Web_Platform/html.png" alt="PHP icon" width={50} height={50} loading="lazy" />
                  </div>
                  <div className="iconbox_content"><h3 className="iconbox_title mb-0">HTML5</h3></div>
                </div>
              </div>
              {/* css */}
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                  <div className="iconbox_icon">
                    <Image src="/images/icons/Web_Platform/css.png" alt="css icon" width={50} height={50} loading="lazy" />
                  </div>
                  <div className="iconbox_content"><h3 className="iconbox_title mb-0">CSS3</h3></div>
                </div>
              </div>
              {/* Bootstrap */}
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                  <div className="iconbox_icon">
                    <Image src="/images/icons/Web_Platform/bootstrap.png" alt="bootstrap icon" width={50} height={50} loading="lazy" />
                  </div>
                  <div className="iconbox_content"><h3 className="iconbox_title mb-0">Bootstrap</h3></div>
                </div>
              </div>
              {/* Jquery */}
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                  <div className="iconbox_icon">
                    <Image src="/images/icons/Web_Platform/jquery.png" alt="Jquery icon" width={50} height={50} loading="lazy" />
                  </div>
                  <div className="iconbox_content"><h3 className="iconbox_title mb-0">Jquery</h3></div>
                </div>
              </div>
              {/* javascript */}
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                  <div className="iconbox_icon">
                    <Image src="/images/icons/Web_Platform/javascript.png" alt="Javascript icon" width={50} height={50} loading="lazy" />
                  </div>
                  <div className="iconbox_content"><h3 className="iconbox_title mb-0">Javascript</h3></div>
                </div>
              </div>
              {/* react js  */}
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                  <div className="iconbox_icon">
                    <Image src="/images/icons/icon_react_js.svg" alt="react js icon" width={50} height={50} loading="lazy" />
                  </div>
                  <div className="iconbox_content"><h3 className="iconbox_title mb-0">React Js</h3></div>
                </div>
              </div>
              {/* next js  */}
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                  <div className="iconbox_icon">
                    <Image src="/images/icons/Web_Platform/next.png" alt="next icon" width={50} height={50} loading="lazy" />
                  </div>
                  <div className="iconbox_content"><h3 className="iconbox_title mb-0">Javascript</h3></div>
                </div>
              </div>
              {/* php */}
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                  <div className="iconbox_icon">
                    <Image src="/images/icons/icon_php.svg" alt="php icon" width={50} height={50} loading="lazy" />
                  </div>
                  <div className="iconbox_content"><h3 className="iconbox_title mb-0">PHP</h3></div>
                </div>
              </div>
              {/* laravel */}
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                  <div className="iconbox_icon">
                    <Image src="/images/icons/icon_laravel.svg" alt="laraval icon" width={50} height={50} loading="lazy" />
                  </div>
                  <div className="iconbox_content"><h3 className="iconbox_title mb-0">Laraval</h3></div>
                </div>
              </div>
              {/* node */}
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                  <div className="iconbox_icon">
                    <Image src="/images/icons/Web_Platform/Node.png" alt="node icon" width={50} height={50} loading="lazy" />
                  </div>
                  <div className="iconbox_content"><h3 className="iconbox_title mb-0">Node</h3></div>
                </div>
              </div>
              {/* angular */}
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                  <div className="iconbox_icon">
                    <Image src="/images/icons/Web_Platform/angular.png" alt="angular icon" width={50} height={50} loading="lazy" />
                  </div>
                  <div className="iconbox_content"><h3 className="iconbox_title mb-0">Angular</h3></div>
                </div>
              </div>
              {/* Codeigniter */}
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                  <div className="iconbox_icon">
                    <Image src="/images/icons/Web_Platform/codeigniter.png" alt="codeigniter icon" width={50} height={50} loading="lazy" />
                  </div>
                  <div className="iconbox_content"><h3 className="iconbox_title mb-0">Codeigniter</h3></div>
                </div>
              </div>
              {/* express */}
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                  <div className="iconbox_icon">
                    <Image src="/images/icons/Web_Platform/express.png" alt="express icon" width={50} height={50} loading="lazy" />
                  </div>
                  <div className="iconbox_content"><h3 className="iconbox_title mb-0">Express</h3></div>
                </div>
              </div>
              {/*  python */}
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                  <div className="iconbox_icon">
                    <Image src="/images/icons/icon_python.svg" alt="python icon" width={50} height={50} loading="lazy" />
                  </div>
                  <div className="iconbox_content"><h3 className="iconbox_title mb-0">Python</h3></div>
                </div>
              </div>
              {/* java */}
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                  <div className="iconbox_icon">
                    <Image src="/images/icons/icon_java.svg" alt="java icon" width={50} height={50} loading="lazy" />
                  </div>
                  <div className="iconbox_content"><h3 className="iconbox_title mb-0">java</h3></div>
                </div>
              </div>
              {/* Ruby */}
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                  <div className="iconbox_icon">
                    <Image src="/images/icons/icon_ruby.svg" alt="Ruby icon" width={50} height={50} loading="lazy" />
                  </div>
                  <div className="iconbox_content"><h3 className="iconbox_title mb-0">Ruby</h3></div>
                </div>
              </div>
              {/* swift */}
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                  <div className="iconbox_icon">
                    <Image src="/images/icons/icon_swift.svg" alt="Swift icon" width={50} height={50} loading="lazy" />
                  </div>
                  <div className="iconbox_content"><h3 className="iconbox_title mb-0">Swift</h3></div>
                </div>
              </div>
            </div>
          </TabPane>

          {/* Tab 2 - Databases */}
          <TabPane tabId="2">
            <div className="web_development_technologies row justify-content-center">
              {/* PostgreSQL */}
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                  <div className="iconbox_icon">
                    <Image src="/images/case/icon_elephent.svg" alt="PostgreSQL icon" width={50} height={50} loading="lazy" />
                  </div>
                  <div className="iconbox_content"><h3 className="iconbox_title mb-0">PostgreSQL</h3></div>
                </div>
              </div>
                {/* my SQL */}
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                  <div className="iconbox_icon">
                    <Image src="/images/icons/database/my_sql.png" alt="My SQL icon" width={50} height={50} loading="lazy" />
                  </div>
                  <div className="iconbox_content"><h3 className="iconbox_title mb-0">MY SQL</h3></div>
                </div>
              </div>
              {/* SQL */}
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                  <div className="iconbox_icon">
                    <Image src="/images/icons/database/sql.png" alt="PostgreSQL icon" width={50} height={50} loading="lazy" />
                  </div>
                  <div className="iconbox_content"><h3 className="iconbox_title mb-0">SQL</h3></div>
                </div>
              </div>
              {/* oracle */}
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                  <div className="iconbox_icon">
                    <Image src="/images/icons/database/oracle.png" alt="oracle icon" width={50} height={50} loading="lazy" />
                  </div>
                  <div className="iconbox_content"><h3 className="iconbox_title mb-0">Oracle</h3></div>
                </div>
              </div>
              {/* mongodb */}
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                  <div className="iconbox_icon">
                    <Image src="/images/icons/database/mongodb.png" alt="mongodb icon" width={50} height={50} loading="lazy" />
                  </div>
                  <div className="iconbox_content"><h3 className="iconbox_title mb-0">Mongodb</h3></div>
                </div>
              </div>
            </div>
          </TabPane>

          {/* Tab 3 - Cloud & DevOps */}
          <TabPane tabId="3">
            <div className="web_development_technologies row justify-content-center">
              {/* git */}
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                  <div className="iconbox_icon">
                    <Image src="/images/icons/DevOps/git.png" alt="git icon" width={50} height={50} loading="lazy" />
                  </div>
                  <div className="iconbox_content"><h3 className="iconbox_title mb-0">Git</h3></div>
                </div>
              </div>
              {/* Github*/}
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                  <div className="iconbox_icon">
                    <Image src="/images/icons/DevOps/github.png" alt="Github icon" width={50} height={50} loading="lazy" />
                  </div>
                  <div className="iconbox_content"><h3 className="iconbox_title mb-0">GitHub</h3></div>
                </div>
              </div>
                {/* bitbucket */}
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                  <div className="iconbox_icon">
                    <Image src="/images/icons/DevOps/bitbucket.png" alt="bitbucket icon" width={50} height={50} loading="lazy" />
                  </div>
                  <div className="iconbox_content"><h3 className="iconbox_title mb-0">Bitbucket</h3></div>
                </div>
              </div>
                {/* gitlab */}
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                  <div className="iconbox_icon">
                    <Image src="/images/icons/DevOps/gitlab.png" alt="gitlab icon" width={50} height={50} loading="lazy" />
                  </div>
                  <div className="iconbox_content"><h3 className="iconbox_title mb-0">Git Lab</h3></div>
                </div>
              </div>

              {/* aws */}
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                  <div className="iconbox_icon">
                    <Image src="/images/icons/DevOps/aws.png" alt="G318 icon" width={50} height={50} loading="lazy" />
                  </div>
                  <div className="iconbox_content"><h3 className="iconbox_title mb-0">AWS</h3></div>
                </div>
              </div>

              {/* microsoftazure */}
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                  <div className="iconbox_icon">
                    <Image src="/images/icons/DevOps/microsoftazure.png" alt="microsoftazure icon" width={50} height={50} loading="lazy" />
                  </div>
                  <div className="iconbox_content"><h3 className="iconbox_title mb-0">Microsoft Azure</h3></div>
                </div>
              </div>
                    {/* googlecloud */}
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                  <div className="iconbox_icon">
                    <Image src="/images/icons/DevOps/googlecloud.png" alt="googlecloud icon" width={50} height={50} loading="lazy" />
                  </div>
                  <div className="iconbox_content"><h3 className="iconbox_title mb-0">Google Cloud</h3></div>
                </div>
              </div>
                {/* oracle */}
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                  <div className="iconbox_icon">
                    <Image src="/images/icons/DevOps/oracle.png" alt="oracle icon" width={50} height={50} loading="lazy" />
                  </div>
                  <div className="iconbox_content"><h3 className="iconbox_title mb-0">Oracle</h3></div>
                </div>
              </div>
              {/* codepipline */}
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                  <div className="iconbox_icon">
                    <Image src="/images/icons/DevOps/codepipline.png" alt="codepipline icon" width={50} height={50} loading="lazy" />
                  </div>
                  <div className="iconbox_content"><h3 className="iconbox_title mb-0">CodePipeline</h3></div>
                </div>
              </div>
                {/* Git CI/CD */}
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                  <div className="iconbox_icon">
                    <Image src="/images/icons/DevOps/gitcicd.png" alt="gitcicd icon" width={50} height={50} loading="lazy" />
                  </div>
                  <div className="iconbox_content"><h3 className="iconbox_title mb-0">Git CI/CD</h3></div>
                </div>
              </div>
               {/* jenkin */}
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                  <div className="iconbox_icon">
                    <Image src="/images/icons/DevOps/jenkin.png" alt="jenkin icon" width={50} height={50} loading="lazy" />
                  </div>
                  <div className="iconbox_content"><h3 className="iconbox_title mb-0">jenkin</h3></div>
                </div>
              </div>
            </div>
          </TabPane>

          {/* Tab 4 - Mobile Apps */}
          <TabPane tabId="4">
            <div className="web_development_technologies row justify-content-center">
              {/* node */}
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                  <div className="iconbox_icon">
                    <Image src="/images/icons/Web_Platform/Node.png" alt="Node icon" width={50} height={50} loading="lazy" />
                  </div>
                  <div className="iconbox_content"><h3 className="iconbox_title mb-0">Node Js</h3></div>
                </div>
              </div>
              {/* React Native */}
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                  <div className="iconbox_icon">
                    <Image src="/images/icons/icon_react_js.svg" alt="React Native icon" width={50} height={50} loading="lazy" />
                  </div>
                  <div className="iconbox_content"><h3 className="iconbox_title mb-0">React Native</h3></div>
                </div>
              </div>
                {/* icon_python.svg */}
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                  <div className="iconbox_icon">
                    <Image src="/images/icons/icon_python.svg" alt="python icon" width={50} height={50} loading="lazy" />
                  </div>
                  <div className="iconbox_content"><h3 className="iconbox_title mb-0">python</h3></div>
                </div>
              </div>
              {/* php */}
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                  <div className="iconbox_icon">
                    <Image src="/images/icons/icon_php.svg" alt="php icon" width={50} height={50} loading="lazy" />
                  </div>
                  <div className="iconbox_content"><h3 className="iconbox_title mb-0">PHP</h3></div>
                </div>
              </div>
               {/* laravel */}
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                  <div className="iconbox_icon">
                    <Image src="/images/icons/icon_laravel.svg" alt="laraval icon" width={50} height={50} loading="lazy" />
                  </div>
                  <div className="iconbox_content"><h3 className="iconbox_title mb-0">Laraval</h3></div>
                </div>
              </div>
              {/* flutter */}
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                  <div className="iconbox_icon">
                    <Image src="/images/icons/Mobile_app/flutter.png" alt="flutter icon" width={50} height={50} loading="lazy" />
                  </div>
                  <div className="iconbox_content"><h3 className="iconbox_title mb-0">Flutter</h3></div>
                </div>
              </div>
              {/* ionic */}
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                  <div className="iconbox_icon">
                    <Image src="/images/icons/Mobile_app/ionic.png" alt="ionic icon" width={50} height={50} loading="lazy" />
                  </div>
                  <div className="iconbox_content"><h3 className="iconbox_title mb-0">Ionic</h3></div>
                </div>
              </div>
                {/* ios */}
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                  <div className="iconbox_icon">
                    <Image src="/images/icons/Mobile_app/ios.png" alt="ios icon" width={50} height={50} loading="lazy" />
                  </div>
                  <div className="iconbox_content"><h3 className="iconbox_title mb-0">iOS</h3></div>
                </div>
              </div>
              {/* java */}
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                  <div className="iconbox_icon">
                    <Image src="/images/icons/Mobile_app/java.png" alt="java icon" width={50} height={50} loading="lazy" />
                  </div>
                  <div className="iconbox_content"><h3 className="iconbox_title mb-0">Java</h3></div>
                </div>
              </div>
              {/* javascript */}
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                  <div className="iconbox_icon">
                    <Image src="/images/icons/Mobile_app/javascript.png" alt="javascript icon" width={50} height={50} loading="lazy" />
                  </div>
                  <div className="iconbox_content"><h3 className="iconbox_title mb-0">JavaScript</h3></div>
                </div>
              </div>
              {/* kotlin */}
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                  <div className="iconbox_icon">
                    <Image src="/images/icons/Mobile_app/kotlin.png" alt="kotlin icon" width={50} height={50} loading="lazy" />
                  </div>
                  <div className="iconbox_content"><h3 className="iconbox_title mb-0">Kotlin</h3></div>
                </div>
              </div>
              {/* objective */}
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                  <div className="iconbox_icon">
                    <Image src="/images/icons/Mobile_app/objective.png" alt="objective icon" width={50} height={50} loading="lazy" />
                  </div>
                  <div className="iconbox_content"><h3 className="iconbox_title mb-0">Objective-C</h3></div>
                </div>
              </div>
              {/* swift */}
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                  <div className="iconbox_icon">
                    <Image src="/images/icons/Mobile_app/swift.png" alt="swift icon" width={50} height={50} loading="lazy" />
                  </div>
                  <div className="iconbox_content"><h3 className="iconbox_title mb-0">Swift</h3></div>
                </div>
              </div>

              {/* Xamarin */}
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                  <div className="iconbox_icon">
                    <Image src="/images/icons/Mobile_app/Xamarin.png" alt="Xamarin icon" width={50} height={50} loading="lazy" />
                  </div>
                  <div className="iconbox_content"><h3 className="iconbox_title mb-0">Xamarin</h3></div>
                </div>
              </div>
            </div>
          </TabPane>

             {/* Tab 5 -another network */}
          <TabPane tabId="5">
            <div className="web_development_technologies row justify-content-center">
              {/* node */}
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                  <div className="iconbox_icon">
                    <Image src="/images/icons/Web_Platform/Node.png" alt="Node icon" width={50} height={50} loading="lazy" />
                  </div>
                  <div className="iconbox_content"><h3 className="iconbox_title mb-0">Node Js</h3></div>
                </div>
              </div>
              {/* React Native */}
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                  <div className="iconbox_icon">
                    <Image src="/images/icons/icon_react_js.svg" alt="React Native icon" width={50} height={50} loading="lazy" />
                  </div>
                  <div className="iconbox_content"><h3 className="iconbox_title mb-0">React Native</h3></div>
                </div>
              </div>
              {/* icon_python.svg */}
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                  <div className="iconbox_icon">
                    <Image src="/images/icons/icon_python.svg" alt="python icon" width={50} height={50} loading="lazy" />
                  </div>
                  <div className="iconbox_content"><h3 className="iconbox_title mb-0">python</h3></div>
                </div>
              </div>
               {/* react js  */}
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                  <div className="iconbox_icon">
                    <Image src="/images/icons/icon_react_js.svg" alt="react js icon" width={50} height={50} loading="lazy" />
                  </div>
                  <div className="iconbox_content"><h3 className="iconbox_title mb-0">React Js</h3></div>
                </div>
              </div>
              {/* next js  */}
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                  <div className="iconbox_icon">
                    <Image src="/images/icons/Web_Platform/next.png" alt="next icon" width={50} height={50} loading="lazy" />
                  </div>
                  <div className="iconbox_content"><h3 className="iconbox_title mb-0">Javascript</h3></div>
                </div>
              </div>
              {/* php */}
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                  <div className="iconbox_icon">
                    <Image src="/images/icons/icon_php.svg" alt="php icon" width={50} height={50} loading="lazy" />
                  </div>
                  <div className="iconbox_content"><h3 className="iconbox_title mb-0">PHP</h3></div>
                </div>
              </div>
              {/* laravel */}
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                  <div className="iconbox_icon">
                    <Image src="/images/icons/icon_laravel.svg" alt="laraval icon" width={50} height={50} loading="lazy" />
                  </div>
                  <div className="iconbox_content"><h3 className="iconbox_title mb-0">Laraval</h3></div>
                </div>
              </div>
                {/* my SQL */}
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                  <div className="iconbox_icon">
                    <Image src="/images/icons/database/my_sql.png" alt="My SQL icon" width={50} height={50} loading="lazy" />
                  </div>
                  <div className="iconbox_content"><h3 className="iconbox_title mb-0">MY SQL</h3></div>
                </div>
              </div>
              {/* SQL */}
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                  <div className="iconbox_icon">
                    <Image src="/images/icons/database/sql.png" alt="PostgreSQL icon" width={50} height={50} loading="lazy" />
                  </div>
                  <div className="iconbox_content"><h3 className="iconbox_title mb-0">SQL</h3></div>
                </div>
              </div>
              {/* oracle */}
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                  <div className="iconbox_icon">
                    <Image src="/images/icons/database/oracle.png" alt="oracle icon" width={50} height={50} loading="lazy" />
                  </div>
                  <div className="iconbox_content"><h3 className="iconbox_title mb-0">Oracle</h3></div>
                </div>
              </div>
            </div>
          </TabPane>
        </TabContent>
      </div>
    </div>
  );
};

export default TechnologySection;
