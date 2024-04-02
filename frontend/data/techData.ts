import { LinkType } from "@/type/interface";

export const techTypes: string[] = [
  "언어",
  "프론트엔드",
  "백엔드",
  "모바일",
  "데이터",
  "데브옵스",
  "테스팅툴",
];

export const navLinks: LinkType[] = [
  { name: "채용 공고", href: "/main/recruit", icon: "📆" },
  // { name: "기술블로그", href: "/main/techBlog" },
  { name: "추천 공고", href: "/main/recommend", icon: "🏅" },
  { name: "미니 게임", href: "/main/game", icon: "🎮" },
  { name: "면접 대비", href: "/main/interview", icon: "📝" },
  { name: "마이 페이지", href: "/main/myPage/myBadge", icon: "💻" },
];

export const techDataMap: Map<string, string[]> = new Map([
  [
    "언어",
    [
      "Java",
      "Python",
      "Javascript",
      "Typescript",
      "Kotlin",
      "C Sharp",
      "Go",
      "Swift",
      "PHP",
      "Objective-C",
      "Scala",
      "Rust",
      "Ruby",
      "Dart",
      "Perl",
      "Lua",
    ],
  ],
  [
    "프론트엔드",
    [
      "ReactJS",
      "VueJS",
      "NextJS",
      "Angular",
      "Unity",
      "Redux",
      "Recoil",
      "GraphQL",
      "React Query",
      "ReactiveX",
      "MobX",
      "Storybook",
      "Zustand",
      "Emotion",
      "Tailwind",
      "StyledComponents",
      "OpenGL",
      "Svelte",
      "NuxtJS",
      "Electron",
      "Vuex",
      "Jotai",
      "Relay",
    ],
  ],
  [
    "백엔드",
    [
      "Spring",
      "NodeJS",
      "Django",
      "NestJS",
      "ExpressJS",
      "FastAPI",
      "Flask",
      "SpringBoot",
      "ASPNET",
      "MyBatis",
      "HiberNate",
      "Swagger",
      "Laravel",
      "GRPC",
      "AWS SES",
      "WebRTC",
      "RabbitMQ",
      "Ruby on Rails",
      "Apollo",
      "AWS Kinesis",
      "CodeIgniter",
      "Celery",
      "Koa",
      "Gin",
      "Netty",
      "Fastify",
    ],
  ],
  [
    "모바일",
    [
      "Flutter",
      "React Native",
      "Retrofit",
      "Lottie",
      "Glide",
      "Fastlane",
      "SnapKit",
      "Alamofire",
      "ReactorKit",
      "Tuist",
      "Dagger",
      "Google Firebase",
    ],
  ],
  [
    "데이터",
    [
      "Pytorch",
      "Tensorflow",
      "Kafka",
      "Tableau",
      "Spark",
      "Airflow",
      "Hadoop",
      "Google BigQuery",
      "Grafana",
      "Prometheus",
      "Redash",
      "Keras",
      "AWS Redshift",
      "Hive",
      "AWS Athena",
      "Looker",
      "Ray",
      "Presto",
      "Superset",
      "Google Data Studio",
      "Kibana",
      "MLflow",
      "Snowflake",
      "HBase",
      "Flink",
      "Kubeflow",
      "Metabase",
      "Zeppelin",
    ],
  ],
  [
    "데브옵스",
    [
      "Github",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "Github Action",
      "Gitlab",
      "Terraform",
      "Argo CD",
      "Bitbucket",
      "Ansible",
      "Helm",
      "AWS CodePipeline",
      "Istio",
      "Zabbix",
      "Nexus",
      "Vault",
      "AWS CodeDeploy",
      "Circle CI",
      "Azure DevOps",
      "Harbor",
      "Spinnaker",
      "Packer",
      "Gulp",
      "Drone",
      "AWS CodeBuild",
    ],
  ],
  [
    "테스팅툴",
    [
      "Jest",
      "Selenium",
      "JUnit",
      "Appium",
      "Mocha",
      "Cypress",
      "Testing Library",
      "Cucumber",
      "Jasmine",
      "Playwright",
      "Sonarqube",
    ],
  ],
]);

export const techData2: string[] = [
  "Agit",
  "Airflow",
  "Android",
  "Ansible",
  "Apache",
  "Appium",
  "ArangoDB",
  "Arcus",
  "Armeria",
  "Asana",
  "ASP",
  "AWS AuroraDB",
  "AWS DocumentDB",
  "AWS MariaDB",
  "AWS SNS",
  "Babel",
  "BackboneJS",
  "Backend",
  "Bazel",
  "Bitrise",
  "Bootstrap",
  "Capistrano",
  "CassandraDB",
  "Central Dogma",
  "Ceph",
  "CI/CD",
  "Clean-Architecture",
  "Clickhouse",
  "Clojure",
  "CockroachDB",
  "Confluence",
  "CORS",
  "Couchbase",
  "Cubrid",
  "Dagger",
  "Database",
  "Discord",
  "Docusaurus",
  "Dooray",
  "Druid",
  "Echo",
  "ElasticSearch",
  "Elixir",
  "ELK",
  "EmberJS",
  "Envoy",
  "Enzyme",
  "Espresso",
  "ETC",
  "ExoPlayer",
  "Falcon",
  "Fiber",
  "Figma",
  "Flow",
  "Fluentd",
  "Frontend",
  "Gatsby",
  "Git",
  "Google Cloud Build",
  "Google Firestore",
  "Greenplum",
  "Groovy",
  "Google Data Studio",
  "Google Firebase",
  "GraphQL",
  "Hazelcast",
  "Hugo",
  "Immer",
  "Impala",
  "InfluxDB",
  "iOS",
  "Jaeger",
  "Jandi",
  "Jira",
  "JMeter",
  "JPA",
  "jQuery",
  "JSP",
  "Kakaotalk",
  "KakaoWork",
  "Karma",
  "Karpenter",
  "Kibana",
  "Kotest",
  "Ktor",
  "Kube-Bench",
  "Kudu",
  "Linkerd",
  "Linux",
  "Liquibase",
  "Locust",
  "Lua",
  "Luigi",
  "Memcached",
  "Meteor",
  "Microsoft-Teams",
  "MLOps",
  "Mobile",
  "Mobaxterm",
  "Mockito",
  "Monday",
  "MongoDB",
  "Moya",
  "MSA",
  "MS-SQL",
  "Naver Works",
  "Neo4j",
  "NestJS",
  "nGrinder",
  "NIFI",
  "Notion",
  "OAuth",
  "OpenEBS",
  "OracleDB",
  "Pandas",
  "Phoenix",
  "Playwright",
  "Postman",
  "Puppeteer",
  "QA",
  "R",
  "Rancher",
  "Ranger",
  "ReScript",
  "Rest-Assured",
  "RIBs",
  "RocksDB",
  "Rundeck",
  "Saltstack",
  "Sanic",
  "SASS",
  "SDLC/STLC",
  "SEO",
  "Sinon",
  "Slack",
  "Solr",
  "Swift",
  "Telegram",
  "Thrift",
  "Traefik",
  "Trello",
  "Trino",
  "TypeORM",
  "Unix",
  "Web",
  "WebPack",
  "Xcode",
  "Zipkin",
];
export const techMap2: Map<string, string> = new Map([
  ["agit", "Agit"],
  ["airflow", "Airflow"],
  ["android", "Android"],
  ["ansible", "Ansible"],
  ["apache", "Apache"],
  ["appium", "Appium"],
  ["arangodb", "ArangoDB"],
  ["arcus", "Arcus"],
  ["armeria", "Armeria"],
  ["asana", "Asana"],
  ["asp", "ASP"],
  ["aws auroradb", "AWS AuroraDB"],
  ["aws documentdb", "AWS DocumentDB"],
  ["aws mariadb", "AWS MariaDB"],
  ["aws sns", "AWS SNS"],
  ["babel", "Babel"],
  ["backbonejs", "BackboneJS"],
  ["backend", "Backend"],
  ["bazel", "Bazel"],
  ["bitrise", "Bitrise"],
  ["bootstrap", "Bootstrap"],
  ["capistrano", "Capistrano"],
  ["cassandradb", "CassandraDB"],
  ["central dogma", "Central Dogma"],
  ["ceph", "Ceph"],
  ["ci/cd", "CI/CD"],
  ["clean-architecture", "Clean-Architecture"],
  ["clickhouse", "Clickhouse"],
  ["clojure", "Clojure"],
  ["cockroachdb", "CockroachDB"],
  ["confluence", "Confluence"],
  ["cors", "CORS"],
  ["couchbase", "Couchbase"],
  ["cubrid", "Cubrid"],
  ["dagger", "Dagger"],
  ["database", "Database"],
  ["discord", "Discord"],
  ["docusaurus", "Docusaurus"],
  ["dooray", "Dooray"],
  ["druid", "Druid"],
  ["echo", "Echo"],
  ["elasticsearch", "ElasticSearch"],
  ["elixir", "Elixir"],
  ["elk", "ELK"],
  ["emberjs", "EmberJS"],
  ["envoy", "Envoy"],
  ["enzyme", "Enzyme"],
  ["espresso", "Espresso"],
  ["etc", "ETC"],
  ["exoplayer", "ExoPlayer"],
  ["falcon", "Falcon"],
  ["fiber", "Fiber"],
  ["figma", "Figma"],
  ["flow", "Flow"],
  ["fluentd", "Fluentd"],
  ["frontend", "Frontend"],
  ["gatsby", "Gatsby"],
  ["git", "Git"],
  ["google cloud build", "Google Cloud Build"],
  ["google firestore", "Google Firestore"],
  ["greenplum", "Greenplum"],
  ["groovy", "Groovy"],
  ["google data studio", "Google Data Studio"],
  ["google firebase", "Google Firebase"],
  ["graphql", "GraphQL"],
  ["hazelcast", "Hazelcast"],
  ["hugo", "Hugo"],
  ["immer", "Immer"],
  ["impala", "Impala"],
  ["influxdb", "InfluxDB"],
  ["ios", "iOS"],
  ["jaeger", "Jaeger"],
  ["jandi", "Jandi"],
  ["jira", "Jira"],
  ["jmeter", "JMeter"],
  ["jpa", "JPA"],
  ["jquery", "jQuery"],
  ["jsp", "JSP"],
  ["kakaotalk", "Kakaotalk"],
  ["kakaowork", "KakaoWork"],
  ["karma", "Karma"],
  ["karpenter", "Karpenter"],
  ["kibana", "Kibana"],
  ["kotest", "Kotest"],
  ["ktor", "Ktor"],
  ["kube-bench", "Kube-Bench"],
  ["kudu", "Kudu"],
  ["linkerd", "Linkerd"],
  ["linux", "Linux"],
  ["liquibase", "Liquibase"],
  ["locust", "Locust"],
  ["lua", "Lua"],
  ["luigi", "Luigi"],
  ["memcached", "Memcached"],
  ["meteor", "Meteor"],
  ["microsoft-teams", "Microsoft-Teams"],
  ["mlops", "MLOps"],
  ["mobile", "Mobile"],
  ["mobaxterm", "Mobaxterm"],
  ["mockito", "Mockito"],
  ["monday", "Monday"],
  ["mongodb", "MongoDB"],
  ["moya", "Moya"],
  ["msa", "MSA"],
  ["ms-sql", "MS-SQL"],
  ["naver works", "Naver Works"],
  ["neo4j", "Neo4j"],
  ["nestjs", "NestJS"],
  ["ngrinder", "nGrinder"],
  ["nifi", "NIFI"],
  ["notion", "Notion"],
  ["oauth", "OAuth"],
  ["openebs", "OpenEBS"],
  ["oracledb", "OracleDB"],
  ["pandas", "Pandas"],
  ["phoenix", "Phoenix"],
  ["playwright", "Playwright"],
  ["postman", "Postman"],
  ["puppeteer", "Puppeteer"],
  ["qa", "QA"],
  ["r", "R"],
  ["rancher", "Rancher"],
  ["ranger", "Ranger"],
  ["rescript", "ReScript"],
  ["rest-assured", "Rest-Assured"],
  ["ribs", "RIBs"],
  ["rocksdb", "RocksDB"],
  ["rundeck", "Rundeck"],
  ["saltstack", "Saltstack"],
  ["sanic", "Sanic"],
  ["sass", "SASS"],
  ["sdlc/stlc", "SDLC/STLC"],
  ["seo", "SEO"],
  ["sinon", "Sinon"],
  ["slack", "Slack"],
  ["solr", "Solr"],
  ["swift", "Swift"],
  ["telegram", "Telegram"],
  ["thrift", "Thrift"],
  ["traefik", "Traefik"],
  ["trello", "Trello"],
  ["trino", "Trino"],
  ["typeorm", "TypeORM"],
  ["unix", "Unix"],
  ["web", "Web"],
  ["webpack", "WebPack"],
  ["xcode", "Xcode"],
  ["zipkin", "Zipkin"],
]);
export const techAll: string[] = [
  "Java",
  "Python",
  "Javascript",
  "Typescript",
  "Kotlin",
  "C Sharp",
  "Go",
  "Swift",
  "PHP",
  "Objective-C",
  "Scala",
  "Rust",
  "Ruby",
  "Dart",
  "Perl",
  "Lua",
  "C++",
  "ReactJS",
  "VueJS",
  "NextJS",
  "Angular",
  "Unity",
  "Redux",
  "Recoil",
  "GraphQL",
  "React Query",
  "ReactiveX",
  "MobX",
  "Storybook",
  "Zustand",
  "Emotion",
  "Tailwind",
  "StyledComponents",
  "OpenGL",
  "Svelte",
  "NuxtJS",
  "Electron",
  "Vuex",
  "Jotai",
  "Relay",
  "Spring",
  "NodeJS",
  "Django",
  "ExpressJS",
  "FastAPI",
  "Flask",
  "SpringBoot",
  "ASPNET",
  "MyBatis",
  "HiberNate",
  "Swagger",
  "Laravel",
  "GRPC",
  "AWS SES",
  "WebRTC",
  "RabbitMQ",
  "Apollo",
  "AWS Kinesis",
  "CodeIgniter",
  "Celery",
  "Koa",
  "Gin",
  "Netty",
  "Fasify",
  "Flutter",
  "ReactNative",
  "Retrofit",
  "Lottie",
  "Glide",
  "Fastlane",
  "SnapKit",
  "Alamofire",
  "ReactorKit",
  "Tuist",
  "Dagger",
  "GoogleFirebase",
  "Pytorch",
  "Tensorflow",
  "Kafka",
  "Tableau",
  "Spark",
  "Airflow",
  "Hadoop",
  "GoogleBigQuery",
  "Grafana",
  "Prometheus",
  "Redash",
  "Keras",
  "AWS Redshift",
  "Hive",
  "AWS Athena",
  "Looker",
  "Ray",
  "Presto",
  "Superset",
  "GoogleDataStudio",
  "Kibana",
  "MLflow",
  "Snowflake",
  "HBase",
  "Flink",
  "Kubeflow",
  "Metabase",
  "Zeppelin",
  "ElasticSearch",
  "Redis",
  "PostgreSQL",
  "Github",
  "Docker",
  "Kubernetes",
  "Jenkins",
  "Github Action",
  "Gitlab",
  "Terraform",
  "Argo CD",
  "Bitbucket",
  "Ansible",
  "Helm",
  "AWS CodePipeline",
  "Istio",
  "Zabbix",
  "Nexus",
  "Vault",
  "AWS CodeDeploy",
  "Circle CI",
  "Azure DevOps",
  "Harbor",
  "Spinnaker",
  "Packer",
  "Gulp",
  "Drone",
  "AWS CodeBuild",
  "Jest",
  "Selenium",
  "JUnit",
  "Appium",
  "Mocha",
  "Cypress",
  "TestingLibrary",
  "Cucumber",
  "Jasmine",
  "Playwright",
  "Sonarqube",
  "Agit",
  "Android",
  "Apache",
  "ArangoDB",
  "Arcus",
  "Armeria",
  "Asana",
  "AWS AuroraDB",
  "AWS DocumentDB",
  "AWS DynamoDB",
  "AWS MariaDB",
  "AWS SNS",
  "AWS SQS",
  "Babel",
  "BackboneJS",
  "Bazel",
  "Bitrise",
  "Bootstrap",
  "Capistrano",
  "CassandraDB",
  "Central Dogma",
  "Ceph",
  "CI/CD",
  "Clickhouse",
  "Clojure",
  "CockroachDB",
  "Confluence",
  "CORS",
  "Couchbase",
  "Cubrid",
  "Docusaurus",
  "Dooray",
  "Dropwizard",
  "Druid",
  "Echo",
  "Elixir",
  "ELK",
  "EmberJS",
  "Envoy",
  "Enzyme",
  "Espresso",
  "ETC",
  "ExoPlayer",
  "Falcon",
  "Fastify",
  "Fiber",
  "Figma",
  "Flow",
  "Fluentd",
  "Gatsby",
  "Git",
  "Go CD",
  "Google BigQuery",
  "Google Cloud Build",
  "Google Data Studio",
  "Google Firebase",
  "Google Firestore",
  "Greenplum",
  "Groovy",
  "H2",
  "Harbor",
  "Hazelcast",
  "Hugo",
  "Immer",
  "Impala",
  "InfluxDB",
  "iOS",
  "Jaeger",
  "Jandi",
  "JDBC",
  "Jira",
  "JMeter",
  "JPA",
  "jQuery",
  "JSP",
  "Kakaotalk",
  "KakaoWork",
  "Karma",
  "Karpenter",
  "Kotest",
  "Ktor",
  "Kube-Bench",
  "Kudu",
  "Linkerd",
  "Linux",
  "Liquibase",
  "Locust",
  "Luigi",
  "Memcached",
  "Meteor",
  "Microsoft-Teams",
  "MLOps",
  "Mobile",
  "Mobaxterm",
  "Mockito",
  "Monday",
  "MongoDB",
  "Moya",
  "MSA",
  "MS-SQL",
  "MySQL",
  "Naver Works",
  "Neo4j",
  "NestJS",
  "nGrinder",
  "NIFI",
  "Notion",
  "OAuth",
  "OpenEBS",
  "OracleDB",
  "Pandas",
  "Phoenix",
  "Postman",
  "Puppeteer",
  "QA",
  "R",
  "Rancher",
  "Ranger",
  "React Context",
  "React Native",
  "React Query",
  "Realm",
  "ReScript",
  "Rest-Assured",
  "Retrofit",
  "RIBs",
  "RocksDB",
  "Ruby on Rails",
  "Rundeck",
  "Saltstack",
  "Sanic",
  "SASS",
  "SDLC/STLC",
  "SEO",
  "Sinon",
  "Slack",
  "Solr",
  "Styled-Components",
  "Telegram",
  "Testing Library",
  "Thrift",
  "Traefik",
  "Travis CI",
  "Trello",
  "Trino",
  "TypeORM",
  "Unix",
  "Web",
  "WebPack",
  "Xcode",
  "Zipkin",
];
export const techAllMap: Map<string, string> = new Map([
  ["java", "Java"],
  ["python", "Python"],
  ["javascript", "Javascript"],
  ["typescript", "Typescript"],
  ["kotlin", "Kotlin"],
  ["c sharp", "C Sharp"],
  ["go", "Go"],
  ["swift", "Swift"],
  ["php", "PHP"],
  ["objective-c", "Objective-C"],
  ["scala", "Scala"],
  ["rust", "Rust"],
  ["ruby", "Ruby"],
  ["dart", "Dart"],
  ["perl", "Perl"],
  ["lua", "Lua"],
  ["c++", "C++"],
  ["c#", "C#"],
  ["reactjs", "ReactJS"],
  ["vuejs", "VueJS"],
  ["nextjs", "NextJS"],
  ["angular", "Angular"],
  ["unity", "Unity"],
  ["redux", "Redux"],
  ["recoil", "Recoil"],
  ["graphql", "GraphQL"],
  ["react query", "React Query"],
  ["reactivex", "ReactiveX"],
  ["mobx", "MobX"],
  ["storybook", "Storybook"],
  ["zustand", "Zustand"],
  ["emotion", "Emotion"],
  ["tailwind", "Tailwind"],
  ["styledcomponents", "StyledComponents"],
  ["opengl", "OpenGL"],
  ["svelte", "Svelte"],
  ["nuxtjs", "NuxtJS"],
  ["electron", "Electron"],
  ["vuex", "Vuex"],
  ["jotai", "Jotai"],
  ["relay", "Relay"],
  ["spring", "Spring"],
  ["nodejs", "NodeJS"],
  ["django", "Django"],
  ["expressjs", "ExpressJS"],
  ["fastapi", "FastAPI"],
  ["flask", "Flask"],
  ["springboot", "SpringBoot"],
  ["aspnet", "ASPNET"],
  ["mybatis", "MyBatis"],
  ["hibernate", "HiberNate"],
  ["swagger", "Swagger"],
  ["laravel", "Laravel"],
  ["grpc", "GRPC"],
  ["aws ses", "AWS SES"],
  ["webrtc", "WebRTC"],
  ["rabbitmq", "RabbitMQ"],
  ["apollo", "Apollo"],
  ["aws kinesis", "AWS Kinesis"],
  ["codeigniter", "CodeIgniter"],
  ["celery", "Celery"],
  ["koa", "Koa"],
  ["gin", "Gin"],
  ["netty", "Netty"],
  ["fasify", "Fasify"],
  ["flutter", "Flutter"],
  ["reactnative", "ReactNative"],
  ["retrofit", "Retrofit"],
  ["lottie", "Lottie"],
  ["glide", "Glide"],
  ["fastlane", "Fastlane"],
  ["snapkit", "SnapKit"],
  ["alamofire", "Alamofire"],
  ["reactorkit", "ReactorKit"],
  ["tuist", "Tuist"],
  ["dagger", "Dagger"],
  ["googlefirebase", "GoogleFirebase"],
  ["pytorch", "Pytorch"],
  ["tensorflow", "Tensorflow"],
  ["kafka", "Kafka"],
  ["tableau", "Tableau"],
  ["spark", "Spark"],
  ["airflow", "Airflow"],
  ["hadoop", "Hadoop"],
  ["googlebigquery", "GoogleBigQuery"],
  ["grafana", "Grafana"],
  ["prometheus", "Prometheus"],
  ["redash", "Redash"],
  ["keras", "Keras"],
  ["aws redshift", "AWS Redshift"],
  ["hive", "Hive"],
  ["aws athena", "AWS Athena"],
  ["looker", "Looker"],
  ["ray", "Ray"],
  ["presto", "Presto"],
  ["superset", "Superset"],
  ["googledatastudio", "GoogleDataStudio"],
  ["kibana", "Kibana"],
  ["mlflow", "MLflow"],
  ["snowflake", "Snowflake"],
  ["hbase", "HBase"],
  ["flink", "Flink"],
  ["kubeflow", "Kubeflow"],
  ["metabase", "Metabase"],
  ["zeppelin", "Zeppelin"],
  ["elasticsearch", "ElasticSearch"],
  ["redis", "Redis"],
  ["postgresql", "PostgreSQL"],
  ["github", "Github"],
  ["docker", "Docker"],
  ["kubernetes", "Kubernetes"],
  ["jenkins", "Jenkins"],
  ["github action", "Github Action"],
  ["gitlab", "Gitlab"],
  ["terraform", "Terraform"],
  ["argo cd", "Argo CD"],
  ["bitbucket", "Bitbucket"],
  ["ansible", "Ansible"],
  ["helm", "Helm"],
  ["aws codepipeline", "AWS CodePipeline"],
  ["istio", "Istio"],
  ["zabbix", "Zabbix"],
  ["nexus", "Nexus"],
  ["vault", "Vault"],
  ["aws codedeploy", "AWS CodeDeploy"],
  ["circle ci", "Circle CI"],
  ["azure devops", "Azure DevOps"],
  ["harbor", "Harbor"],
  ["spinnaker", "Spinnaker"],
  ["packer", "Packer"],
  ["gulp", "Gulp"],
  ["drone", "Drone"],
  ["aws codebuild", "AWS CodeBuild"],
  ["jest", "Jest"],
  ["selenium", "Selenium"],
  ["junit", "JUnit"],
  ["appium", "Appium"],
  ["mocha", "Mocha"],
  ["cypress", "Cypress"],
  ["testinglibrary", "TestingLibrary"],
  ["cucumber", "Cucumber"],
  ["jasmine", "Jasmine"],
  ["playwright", "Playwright"],
  ["sonarqube", "Sonarqube"],
  ["agit", "Agit"],
  ["android", "Android"],
  ["apache", "Apache"],
  ["arangodb", "ArangoDB"],
  ["arcus", "Arcus"],
  ["armeria", "Armeria"],
  ["asana", "Asana"],
  ["aws auroradb", "AWS AuroraDB"],
  ["aws documentdb", "AWS DocumentDB"],
  ["aws dynamodb", "AWS DynamoDB"],
  ["aws mariadb", "AWS MariaDB"],
  ["aws sns", "AWS SNS"],
  ["aws sqs", "AWS SQS"],
  ["babel", "Babel"],
  ["backbonejs", "BackboneJS"],
  ["bazel", "Bazel"],
  ["bitrise", "Bitrise"],
  ["bootstrap", "Bootstrap"],
  ["capistrano", "Capistrano"],
  ["cassandradb", "CassandraDB"],
  ["centraldogma", "Central Dogma"],
  ["ceph", "Ceph"],
  ["ci/cd", "CI/CD"],
  ["clickhouse", "Clickhouse"],
  ["clojure", "Clojure"],
  ["cockroachdb", "CockroachDB"],
  ["confluence", "Confluence"],
  ["cors", "CORS"],
  ["couchbase", "Couchbase"],
  ["cubrid", "Cubrid"],
  ["docusaurus", "Docusaurus"],
  ["dooray", "Dooray"],
  ["dropwizard", "Dropwizard"],
  ["druid", "Druid"],
  ["echo", "Echo"],
  ["elixir", "Elixir"],
  ["elk", "ELK"],
  ["emberjs", "EmberJS"],
  ["envoy", "Envoy"],
  ["enzyme", "Enzyme"],
  ["espresso", "Espresso"],
  ["etc", "ETC"],
  ["exoplayer", "ExoPlayer"],
  ["falcon", "Falcon"],
  ["fastify", "Fastify"],
  ["fiber", "Fiber"],
  ["figma", "Figma"],
  ["flow", "Flow"],
  ["fluentd", "Fluentd"],
  ["gatsby", "Gatsby"],
  ["git", "Git"],
  ["go cd", "Go CD"],
  ["google bigquery", "Google BigQuery"],
  ["google cloud build", "Google Cloud Build"],
  ["google data studio", "Google Data Studio"],
  ["google firebase", "Google Firebase"],
  ["google firestore", "Google Firestore"],
  ["greenplum", "Greenplum"],
  ["groovy", "Groovy"],
  ["h2", "H2"],
  ["harbor", "Harbor"],
  ["hazelcast", "Hazelcast"],
  ["hugo", "Hugo"],
  ["immer", "Immer"],
  ["impala", "Impala"],
  ["influxdb", "InfluxDB"],
  ["ios", "iOS"],
  ["jaeger", "Jaeger"],
  ["jandi", "Jandi"],
  ["jdbc", "JDBC"],
  ["jira", "Jira"],
  ["jmeter", "JMeter"],
  ["jpa", "JPA"],
  ["jquery", "jQuery"],
  ["jsp", "JSP"],
  ["kakaotalk", "Kakaotalk"],
  ["kakaowork", "KakaoWork"],
  ["karma", "Karma"],
  ["karpenter", "Karpenter"],
  ["kotest", "Kotest"],
  ["ktor", "Ktor"],
  ["kube-bench", "Kube-Bench"],
  ["kudu", "Kudu"],
  ["linkerd", "Linkerd"],
  ["linux", "Linux"],
  ["liquibase", "Liquibase"],
  ["locust", "Locust"],
  ["luigi", "Luigi"],
  ["memcached", "Memcached"],
  ["meteor", "Meteor"],
  ["microsoft-teams", "Microsoft-Teams"],
  ["mlops", "MLOps"],
  ["mobile", "Mobile"],
  ["mobaxterm", "Mobaxterm"],
  ["mockito", "Mockito"],
  ["monday", "Monday"],
  ["mongodb", "MongoDB"],
  ["moya", "Moya"],
  ["msa", "MSA"],
  ["ms-sql", "MS-SQL"],
  ["mysql", "MySQL"],
  ["naver works", "Naver Works"],
  ["neo4j", "Neo4j"],
  ["nestjs", "NestJS"],
  ["ngrinder", "nGrinder"],
  ["nifi", "NIFI"],
  ["notion", "Notion"],
  ["oauth", "OAuth"],
  ["openebs", "OpenEBS"],
  ["oracledb", "OracleDB"],
  ["pandas", "Pandas"],
  ["phoenix", "Phoenix"],
  ["postman", "Postman"],
  ["puppeteer", "Puppeteer"],
  ["qa", "QA"],
  ["r", "R"],
  ["rancher", "Rancher"],
  ["ranger", "Ranger"],
  ["react context", "React Context"],
  ["react native", "React Native"],
  ["react query", "React Query"],
  ["realm", "Realm"],
  ["rescript", "ReScript"],
  ["rest-assured", "Rest-Assured"],
  ["retrofit", "Retrofit"],
  ["ribs", "RIBs"],
  ["rocksdb", "RocksDB"],
  ["ruby on rails", "Ruby on Rails"],
  ["rundeck", "Rundeck"],
  ["saltstack", "Saltstack"],
  ["sanic", "Sanic"],
  ["sass", "SASS"],
  ["sdlc/stlc", "SDLC/STLC"],
  ["seo", "SEO"],
  ["sinon", "Sinon"],
  ["slack", "Slack"],
  ["solr", "Solr"],
  ["styled-components", "Styled-Components"],
  ["telegram", "Telegram"],
  ["testing library", "Testing Library"],
  ["thrift", "Thrift"],
  ["traefik", "Traefik"],
  ["travis ci", "Travis CI"],
  ["trello", "Trello"],
  ["trino", "Trino"],
  ["typeorm", "TypeORM"],
  ["unix", "Unix"],
  ["web", "Web"],
  ["webpack", "WebPack"],
  ["xcode", "Xcode"],
  ["zipkin", "Zipkin"],
]);
export const techInfos: Map<string, number> = new Map([
  ["Java", 1],
  ["Python", 2],
  ["Javascript", 3],
  ["Typescript", 4],
  ["Kotlin", 5],
  ["CSharp", 6],
  ["Go", 7],
  ["Swift", 8],
  ["PHP", 9],
  ["Objective-C", 10],
  ["Scala", 11],
  ["Rust", 12],
  ["Ruby", 13],
  ["Dart", 14],
  ["Perl", 15],
  ["Lua", 16],
  ["C++", 17],
  ["C#", 18],
  ["ReactJS", 19],
  ["VueJs", 20],
  ["NextJS", 21],
  ["Angular", 22],
  ["Unity", 23],
  ["Redux", 24],
  ["Recoil", 25],
  ["GraphQL", 26],
  ["ReactQuery", 27],
  ["ReactiveX", 28],
  ["MobX", 29],
  ["Storybook", 30],
  ["Zustand", 31],
  ["Emotion", 32],
  ["Tailwind", 33],
  ["StyledComponents", 34],
  ["OpenGL", 35],
  ["Svelte", 36],
  ["NuxtJS", 37],
  ["Electron", 38],
  ["Vuex", 39],
  ["Jotai", 40],
  ["Relay", 41],
  ["Spring", 42],
  ["NodeJS", 43],
  ["Django", 44],
  ["ExpressJS", 46],
  ["FastAPI", 47],
  ["Flask", 48],
  ["SpringBoot", 49],
  ["ASPNET", 50],
  ["MyBatis", 51],
  ["HiberNate", 52],
  ["Swagger", 53],
  ["Laravel", 54],
  ["GRPC", 55],
  ["AWSSES", 56],
  ["WebRTC", 57],
  ["RabbitMQ", 58],
  ["RubyOnRails", 59],
  ["Apollo", 60],
  ["AWSKinesis", 61],
  ["CodeIgniter", 62],
  ["Celery", 63],
  ["Koa", 64],
  ["Gin", 65],
  ["Netty", 66],
  ["Fasify", 67],
  ["Flutter", 68],
  ["ReactNative", 69],
  ["Retrofit", 70],
  ["Lottie", 71],
  ["Glide", 72],
  ["Fastlane", 73],
  ["SnapKit", 74],
  ["Alamofire", 75],
  ["ReactorKit", 76],
  ["Tuist", 77],
  ["Dagger", 78],
  ["GoogleFirebase", 79],
  ["Pytorch", 80],
  ["Tensorflow", 81],
  ["Kafka", 82],
  ["Tableau", 83],
  ["Spark", 84],
  ["Airflow", 85],
  ["Hadoop", 86],
  ["GoogleBigQuery", 87],
  ["Grafana", 88],
  ["Prometheus", 89],
  ["Redash", 90],
  ["Keras", 91],
  ["AWSRedshift", 92],
  ["Hive", 93],
  ["AWSAthena", 94],
  ["Looker", 95],
  ["Ray", 96],
  ["Presto", 97],
  ["Superset", 98],
  ["GoogleDataStudio", 99],
  ["Kibana", 100],
  ["MLflow", 101],
  ["Snowflake", 102],
  ["HBase", 103],
  ["Flink", 104],
  ["Kubeflow", 105],
  ["Metabase", 106],
  ["Zeppelin", 107],
  ["ElasticSearch", 108],
  ["Redis", 109],
  ["PostgreSQL", 110],
  ["Github", 111],
  ["Docker", 112],
  ["Kubernetes", 113],
  ["Jenkins", 114],
  ["GithubAction", 115],
  ["Gitlab", 116],
  ["Terraform", 117],
  ["ArgoCD", 118],
  ["Bitbucket", 119],
  ["Ansible", 120],
  ["Helm", 121],
  ["AWSCodePipeline", 122],
  ["Istio", 123],
  ["Zabbix", 124],
  ["Nexus", 125],
  ["Vault", 126],
  ["AWSCodeDeploy", 127],
  ["CircleCI", 128],
  ["AzureDevOps", 129],
  ["Harbor", 130],
  ["Spinnaker", 131],
  ["Packer", 132],
  ["Gulp", 133],
  ["Drone", 134],
  ["AWSCodeBuild", 135],
  ["Jest", 136],
  ["Selenium", 137],
  ["JUnit", 138],
  ["Appium", 139],
  ["Mocha", 140],
  ["Cypress", 141],
  ["TestingLibrary", 142],
  ["Cucumber", 143],
  ["Jasmine", 144],
  ["Playwright", 145],
  ["Sonarqube", 146],
  ["Agit", 147],
  ["Android", 148],
  ["Apache", 149],
  ["ArangoDB", 150],
  ["Arcus", 151],
  ["Armeria", 152],
  ["Asana", 153],
  ["AWS AuroraDB", 154],
  ["AWS DocumentDB", 155],
  ["AWS DynamoDB", 156],
  ["AWS MariaDB", 157],
  ["AWS SNS", 158],
  ["AWS SQS", 159],
  ["Babel", 160],
  ["BackboneJS", 161],
  ["Bazel", 162],
  ["Bitrise", 163],
  ["Bootstrap", 164],
  ["Capistrano", 165],
  ["CassandraDB", 166],
  ["Central Dogma", 167],
  ["Ceph", 168],
  ["CI/CD", 169],
  ["Clickhouse", 170],
  ["Clojure", 171],
  ["CockroachDB", 172],
  ["Confluence", 173],
  ["CORS", 174],
  ["Couchbase", 175],
  ["Cubrid", 176],
  ["Docusaurus", 177],
  ["Dooray", 178],
  ["Dropwizard", 179],
  ["Druid", 180],
  ["Echo", 181],
  ["Elixir", 182],
  ["ELK", 183],
  ["EmberJS", 184],
  ["Envoy", 185],
  ["Enzyme", 186],
  ["Espresso", 187],
  ["ETC", 188],
  ["ExoPlayer", 189],
  ["Falcon", 190],
  ["Fastify", 191],
  ["Fiber", 192],
  ["Figma", 193],
  ["Flow", 194],
  ["Fluentd", 195],
  ["Gatsby", 196],
  ["Git", 197],
  ["Go CD", 198],
  ["Google BigQuery", 199],
  ["Google Cloud Build", 200],
  ["Google Data Studio", 201],
  ["Google Firebase", 202],
  ["Google Firestore", 203],
  ["Greenplum", 204],
  ["Groovy", 205],
  ["H2", 206],
  ["Harbor", 207],
  ["Hazelcast", 208],
  ["Hugo", 209],
  ["Immer", 210],
  ["Impala", 211],
  ["InfluxDB", 212],
  ["iOS", 213],
  ["Jaeger", 214],
  ["Jandi", 215],
  ["JDBC", 216],
  ["Jira", 217],
  ["JMeter", 218],
  ["JPA", 219],
  ["jQuery", 220],
  ["JSP", 221],
  ["Kakaotalk", 222],
  ["KakaoWork", 223],
  ["Karma", 224],
  ["Karpenter", 225],
  ["Kotest", 226],
  ["Ktor", 227],
  ["Kube-Bench", 228],
  ["Kudu", 229],
  ["Linkerd", 230],
  ["Linux", 231],
  ["Liquibase", 232],
  ["Locust", 233],
  ["Luigi", 234],
  ["Memcached", 235],
  ["Meteor", 236],
  ["Microsoft-Teams", 237],
  ["MLOps", 238],
  ["Mobile", 239],
  ["Mobaxterm", 240],
  ["Mockito", 241],
  ["Monday", 242],
  ["MongoDB", 243],
  ["Moya", 244],
  ["MSA", 245],
  ["MS-SQL", 246],
  ["MySQL", 247],
  ["Naver Works", 248],
  ["Neo4j", 249],
  ["NestJS", 250],
  ["nGrinder", 251],
  ["NIFI", 252],
  ["Notion", 253],
  ["OAuth", 254],
  ["OpenEBS", 255],
  ["OracleDB", 256],
  ["Pandas", 257],
  ["Phoenix", 258],
  ["Postman", 259],
  ["Puppeteer", 260],
  ["QA", 261],
  ["R", 262],
  ["Rancher", 263],
  ["Ranger", 264],
  ["React Context", 265],
  ["React Native", 266],
  ["React Query", 267],
  ["Realm", 268],
  ["ReScript", 269],
  ["Rest-Assured", 270],
  ["Retrofit", 271],
  ["RIBs", 272],
  ["RocksDB", 273],
  ["Ruby on Rails", 274],
  ["Rundeck", 275],
  ["Saltstack", 276],
  ["Sanic", 277],
  ["SASS", 278],
  ["SDLC/STLC", 279],
  ["SEO", 280],
  ["Sinon", 281],
  ["Slack", 282],
  ["Solr", 283],
  ["Styled-Components", 284],
  ["Telegram", 285],
  ["Testing Library", 286],
  ["Thrift", 287],
  ["Traefik", 288],
  ["Travis CI", 289],
  ["Trello", 290],
  ["Trino", 291],
  ["TypeORM", 292],
  ["Unix", 293],
  ["Web", 294],
  ["WebPack", 295],
  ["Xcode", 296],
  ["Zipkin", 297],
]);
