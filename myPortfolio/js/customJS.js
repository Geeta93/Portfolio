var myPortfolio = angular.module('myPortfolio', []);

myPortfolio.controller('aboutMeController', ['$scope', function($scope){
    $scope.points = [
        {description: "3 years of hands on experience in Java Programming and deep understanding of J2EE patterns such as MVC, DAO, POJO, etc"},
        {description: "Well skilled in Java/ J2EE design patterns like Singleton, Model View Controller (MVC), Data Access Object (DAO) and core Java concepts like Collections, Multi-Threading"},
        {description: "Expert in implementing the projects with Servlets, JSP, JDBC"},
        {description: "Experience in implementing Spring IoC, Spring MVC"},
        {description: "Proficient with the ORM tool Hibernate involving Connection pooling, Mappings, Hibernate Query Language (HQL)"},
        {description: "Expertise in Relational Database Management Systems (RDBMS) such as Oracle, MySQL using JDBC Drivers"},
        {description: "Experienced in using IDE Tools like Eclipse and IntelliJ"},
        {description: "Experience in using Servers such as JBoss and Tomcat"},
        {description: "Knowledge in using HTML, CSS, JavaScript, AngularJS, Bootstrap for user interface design"}
    ];
}]);

myPortfolio.controller('sharePointController',['$scope', function($scope){
    $scope.project = [
        {description: "Web-based research platform (using MS SharePoint 2013technology)enabling disciplinary and interdisciplinary group  of researchers  from  University  at  Albany  and  SUNY  Downstate  Medical  Centre  to communicate, access information, share ideas, and utilize tools/resources aimed at fostering research" },
        {description: "This  Microsoft  SharePoint  initiative  will  create  a  dynamic,  collaboration  web-based platform  using  MS SharePoint  that  provides  User profiles,  News/announcements,  Integrated  e-mail  /calendaring,  Discussion forums, Document sharing/storage, Faculty profiles/workspaces, Space for ideas, proposals, and reviewers, project workspace and dashboards" },
        {description: "Design web pages, according to Client requirements like Researchers’ Profiles, Publications, Social media, News (National and Faculty News), Important Documents(Reading Room), Subsites for Funding Opportunities" }
    ];
}]);

myPortfolio.controller('cdacController', ['$scope', function($scope){
    $scope.project = [
        {description: "Many biological databases are getting introduced with lots of information to the user and many of these databases are linked to other databases" },
        {description: "Though these databases are highly linked, user has to visit the other databases for further information"},
        {description: "Hence we proposed a model for linking all these biological databases with sufficient information and connections between biological entities and concepts" },
        {description: "This model contains information which is extracted from all databases as a graph, where nodes correspond to concept and edges corresponds to all possible properties and all possible relationships between all nodes" },
        {description: "Therefore end graph model contains potential information from all databases limiting the user for frequent visit to other databases" }
    ];
}]);

myPortfolio.controller('project1Controller', ['$scope', function($scope){
    $scope.project = [
        {description: "E-Commerce application, where end users can buy desired cosmetics from online" },
        {description: "Application is developed using HMTL, CSS, JavaScript, Java, Servlets, JSP, JDBC, MySQL, Apache Tomcat, Eclipse" }
    ];
}]);

myPortfolio.controller('project2Controller', ['$scope', function($scope){
    $scope.project = [
        {description: "Maven Web-based application which allows administrator to perform CRUD operations" },
        {description: "Application is developed using HMTL, CSS, JavaScript, Java, Spring MVC, JSP, Hibernate, JDBC, MySQL, Apache Tomcat, Eclipse, Bootstrap" }
    ];
}]);

myPortfolio.controller('project3Controller', ['$scope', function($scope){
    $scope.project = [
        {description: "Maven Web-based application which allows administrator to perform CRUD operations for publications and respective categories" },
        {description: "Application is developed using HMTL, CSS, JavaScript, Java, Spring MVC, JSP, Hibernate, JDBC, MySQL, Apache Tomcat, Eclipse, Bootstrap" }
    ];
}]);

myPortfolio.controller('project4Controller', ['$scope', function($scope){
    $scope.project = [
        {description: "Web-based Application for managing the information of University Hostel residents" },
        {description: "Application is developed using HMTL, CSS, JavaScript, JDBC, MySQL, Apache Tomcat, Eclipse" }
    ];
}]);