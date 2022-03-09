// import { version } from '../../../../../../../package.json';
import {
  EnvironmentApiBaseUrlType,
  EnvironmentConfig
} from './environment.interface';

/*
Baseline implementation of app-specific Environment Configuration.
*/
export const EnvironmentBaseline: EnvironmentConfig = {
  // coreLibVersion: version,
  coreLibVersion: "0.7.6 - 9 MAR",
  production: false,
  mockdata: false,
  configFile: '/assets/config.json',
  // earlier base url has phyical url + api, now it is '/api-name' only
  // this change will allow resolving relative api path
  api: {
    globalResponseDelay: 0,
    baseUrls: {
      auth: '../tce-auth-api',
      general: '../tce-teach-api',
      file: '../tce-repo-api',
      fileupload: '../tce-repo-api',
      usage: '../tce-usage-api',
      teach: '../tce-teach-api',
      school: '../tce-school-api',
      grant: '../tce-grant-api'
    },
    recentViews: {
      url: '/1/api/@apiVersion@/nav/recentviews',
      baseUrlType: EnvironmentApiBaseUrlType.GENERAL
    },
    curriculum: {
      url: '/1/api/@apiVersion@/curriculum',
      baseUrlType: EnvironmentApiBaseUrlType.SCHOOL
    },
    book: {
      url: '/1/api/@apiVersion@/curriculum/book/@bookid@',
      baseUrlType: EnvironmentApiBaseUrlType.GENERAL
    },

    lessonPlan: {
      url: '/1/api/@apiVersion@/serve/lp/@tpid@',
      baseUrlType: EnvironmentApiBaseUrlType.GENERAL
    },
    tpResource: {
      url: '/1/api/@apiVersion@/serve/tp?@ids@',
      baseUrlType: EnvironmentApiBaseUrlType.GENERAL
    },
    tqResource: {
      url: '/1/api/@apiVersion@/serve/tq?ids=@ids@',
      baseUrlType: EnvironmentApiBaseUrlType.GENERAL
    },
    assetResource: {
      url: '/1/api/@apiVersion@/serve/asset?ids=@ids@',
      baseUrlType: EnvironmentApiBaseUrlType.GENERAL
    },
    assetResourceQuestion: {
      url: '/1/api/@apiVersion@/serve/question?ids=@ids@',
      baseUrlType: EnvironmentApiBaseUrlType.GENERAL
    },
    getFile: {
      url: '/1/web/@apiVersion@/content/fileservice',
      baseUrlType: EnvironmentApiBaseUrlType.FILE
    },

    clientId: {
      url: '/0/api/@apiVersion@/sso/clientid',
      baseUrlType: EnvironmentApiBaseUrlType.AUTH
    },
    signIn: {
      url: '/0/api/@apiVersion@/sso/token',
      baseUrlType: EnvironmentApiBaseUrlType.AUTH
    },
    refreshToken: {
      url: '/0/api/@apiVersion@/sso/token',
      baseUrlType: EnvironmentApiBaseUrlType.AUTH
    },
    /**
     * TODO:add in mockdata also
     */
    extendSession: {
      url: '/1/api/@apiVersion@/sso/extend',
      baseUrlType: EnvironmentApiBaseUrlType.AUTH
    },
    organizations: {
      url: '/0/api/@apiVersion@/admin/organizations/tcde',
      baseUrlType: EnvironmentApiBaseUrlType.AUTH
    },
    organization: {
      url: '/0/api/@apiVersion@/admin/organizations/@query@',
      baseUrlType: EnvironmentApiBaseUrlType.AUTH
    },
    changePassword: {
      url: '/1/api/@apiVersion@/admin/user/password',
      baseUrlType: EnvironmentApiBaseUrlType.AUTH
    },
    generatePin: {
      url: '/0/api/@apiVersion@/sso/pin',
      baseUrlType: EnvironmentApiBaseUrlType.AUTH
    },
    checkPin: {
      url: '/0/api/@apiVersion@/sso/pin/',
      baseUrlType: EnvironmentApiBaseUrlType.AUTH
    },
    changePin: {
      url: '/1/api/@apiVersion@/admin/user/pin',
      baseUrlType: EnvironmentApiBaseUrlType.AUTH
    },
    logout: {
      url: '/1/api/@apiVersion@/sso/revoke/@currentRefreshToken@',
      baseUrlType: EnvironmentApiBaseUrlType.AUTH
    },
    updateResource: {
      url: '/1/api/@apiVersion@/serve/tp',
      baseUrlType: EnvironmentApiBaseUrlType.GENERAL
    },
    addResource: {
      url: '/1/api/@apiVersion@/content/package',
      baseUrlType: EnvironmentApiBaseUrlType.FILEUPLOAD
    },
    dynamicCustomResource: {
      url: '/1/api/@apiVersion@/serve/custom/asset',
      baseUrlType: EnvironmentApiBaseUrlType.GENERAL
    },
    dynamicCustomResourceDelete: {
      url: '/1/api/@apiVersion@/serve/custom/asset/@ids@',
      baseUrlType: EnvironmentApiBaseUrlType.GENERAL
    },
    saveWb: {
      url: '/1/api/@apiVersion@/serve/wb',
      baseUrlType: EnvironmentApiBaseUrlType.GENERAL
    },
    shareCustomResource: {
      url: '/1/api/@apiVersion@/serve/custom/asset?@ids@',
      baseUrlType: EnvironmentApiBaseUrlType.GENERAL
    },
    searchFilter: {
      url: '/1/api/@apiVersion@/content/search?@searchItem@',
      baseUrlType: EnvironmentApiBaseUrlType.GENERAL
    },
    searchSuggestion: {
      url: '/1/api/@apiVersion@/content/spell?@searchSuggestion@',
      baseUrlType: EnvironmentApiBaseUrlType.GENERAL
    },
    saveCustomBookJSON: {
      url: '/1/api/@apiVersion@/curriculum/custom/book',
      baseUrlType: EnvironmentApiBaseUrlType.GENERAL
    },
    getCustomBookJSON: {
      url: '/1/api/@apiVersion@/curriculum/custom/book/@bookid@',
      baseUrlType: EnvironmentApiBaseUrlType.GENERAL
    },
    addCustomChapter: {
      url: '/1/api/@apiVersion@/serve/custom/chp',
      baseUrlType: EnvironmentApiBaseUrlType.GENERAL
    },
    editCustomChapter: {
      url: '/1/api/@apiVersion@/serve/custom/chp',
      baseUrlType: EnvironmentApiBaseUrlType.GENERAL
    },
    deleteCustomChapter: {
      url: '/1/api/@apiVersion@/serve/custom/chp/@chpId@',
      baseUrlType: EnvironmentApiBaseUrlType.GENERAL
    },
    addCustomTopic: {
      url: '/1/api/@apiVersion@/serve/custom/tp',
      baseUrlType: EnvironmentApiBaseUrlType.GENERAL
    },
    editCustomTopic: {
      url: '/1/api/@apiVersion@/serve/custom/tp',
      baseUrlType: EnvironmentApiBaseUrlType.GENERAL
    },
    deleteCustomTopic: {
      url: '/1/api/@apiVersion@/serve/custom/tp/@tpId@',
      baseUrlType: EnvironmentApiBaseUrlType.GENERAL
    },
    getUserProfile: {
      url: '/1/api/@apiVersion@/admin/user/details',
      baseUrlType: EnvironmentApiBaseUrlType.AUTH
    },
    getQuestionBank: {
      url: '/1/api/@apiVersion@/serve/custom/qb',
      baseUrlType: EnvironmentApiBaseUrlType.GENERAL
    },
    addQuestion: {
      url: '/1/api/@apiVersion@/serve/custom/qb',
      baseUrlType: EnvironmentApiBaseUrlType.GENERAL
    },
    editQuestion: {
      url: '/1/api/@apiVersion@/serve/custom/qb',
      baseUrlType: EnvironmentApiBaseUrlType.GENERAL
    },
    deleteQuestion: {
      url: '/1/api/@apiVersion@/serve/custom/qb/@qbId@',
      baseUrlType: EnvironmentApiBaseUrlType.GENERAL
    },
    userList: {
      url: '/1/api/@apiVersion@/admin/organization/@orgId@/roles',
      baseUrlType: EnvironmentApiBaseUrlType.AUTH
    },
    adminUser: {
      url: '/1/api/@apiVersion@/admin/user',
      baseUrlType: EnvironmentApiBaseUrlType.AUTH
    },
    adminUsers: {
      url: '/1/api/@apiVersion@/admin/users',
      baseUrlType: EnvironmentApiBaseUrlType.AUTH
    },
    schoolGrades: {
      url: '/1/api/@apiVersion@/school/grades',
      baseUrlType: EnvironmentApiBaseUrlType.SCHOOL
    },
    schoolGrade: {
      url: '/1/api/@apiVersion@/school/grade',
      baseUrlType: EnvironmentApiBaseUrlType.SCHOOL
    },
    contentGrades: {
      url: '/1/api/@apiVersion@/curriculum/grades',
      baseUrlType: EnvironmentApiBaseUrlType.TEACH
    },
    gradeCategories: {
      url: '/1/api/@apiVersion@/tool/lookup/grade-categories',
      baseUrlType: EnvironmentApiBaseUrlType.AUTH
    },
    schoolSubjectsGrade: {
      url: '/1/api/@apiVersion@/school/subjects/grade',
      baseUrlType: EnvironmentApiBaseUrlType.SCHOOL
    },
    contentSubjects: {
      url: '/1/api/@apiVersion@/curriculum/subjects',
      baseUrlType: EnvironmentApiBaseUrlType.TEACH
    },
    schoolSubject: {
      url: '/1/api/@apiVersion@/school/subject',
      baseUrlType: EnvironmentApiBaseUrlType.SCHOOL
    },
    schoolSubjectGrade: {
      url: '/1/api/@apiVersion@/school/subject/grade',
      baseUrlType: EnvironmentApiBaseUrlType.SCHOOL
    },
    schoolSubjectsClassify: {
      url: '/1/api/@apiVersion@/school/subjects/classify',
      baseUrlType: EnvironmentApiBaseUrlType.SCHOOL
    },
    subjectTypes: {
      url: '/1/api/@apiVersion@/tool/lookup/subject-types',
      baseUrlType: EnvironmentApiBaseUrlType.AUTH
    },
    schoolSubjectClassify: {
      url: '/1/api/@apiVersion@/school/subject/classify',
      baseUrlType: EnvironmentApiBaseUrlType.SCHOOL
    },
    schoolTerminals: {
      url: '/1/api/@apiVersion@/school/terminals',
      baseUrlType: EnvironmentApiBaseUrlType.SCHOOL
    },
    schoolTerminal: {
      url: '/1/api/@apiVersion@/school/terminal',
      baseUrlType: EnvironmentApiBaseUrlType.SCHOOL
    },
    schoolSettings: {
      url: '/1/api/@apiVersion@/school/settings',
      baseUrlType: EnvironmentApiBaseUrlType.SCHOOL
    },
    audittrailEntries: {
      url: '/1/api/@apiVersion@/tool/audittrail/@id@/entries',
      baseUrlType: EnvironmentApiBaseUrlType.USAGE
    },
    toolStates: {
      url: '/1/api/@apiVersion@/tool/states',
      baseUrlType: EnvironmentApiBaseUrlType.USAGE
    },
    toolCities: {
      url: '/1/api/@apiVersion@/tool/cities',
      baseUrlType: EnvironmentApiBaseUrlType.USAGE
    },
    boardList: {
      url: '/1/api/@apiVersion@/boards',
      baseUrlType: EnvironmentApiBaseUrlType.GRANT
    },
    board: {
      url: '/1/api/@apiVersion@/board',
      baseUrlType: EnvironmentApiBaseUrlType.GRANT
    },
    curriculums: {
      url: '/1/api/@apiVersion@/curriculums',
      baseUrlType: EnvironmentApiBaseUrlType.TEACH
    },
    curriculumBoard: {
      url: '/1/api/@apiVersion@/curriculum/board',
      baseUrlType: EnvironmentApiBaseUrlType.TEACH
    },
    schoolLicenceTypeAndStatus: {
      url: '/1/api/@apiVersion@/license/school/type',
      baseUrlType: EnvironmentApiBaseUrlType.GRANT
    },
    users: {
      url: '/1/api/@apiVersion@/admin/users',
      baseUrlType: EnvironmentApiBaseUrlType.AUTH
    },
    modules: {
      url: '/1/api/@apiVersion@/tool/lookup/modules',
      baseUrlType: EnvironmentApiBaseUrlType.AUTH
    },
    school: {
      url: '/1/api/@apiVersion@/license/school',
      baseUrlType: EnvironmentApiBaseUrlType.GRANT
    },
    licenseAgreement: {
      url: '/1/api/@apiVersion@/license/agreement/@id@/@type@',
      baseUrlType: EnvironmentApiBaseUrlType.GRANT
    },
    curriculumAgreement: {
      url: '/1/api/@apiVersion@/license/agreement/curriculum',
      baseUrlType: EnvironmentApiBaseUrlType.GRANT
    },
    updateCurriculumAgreement: {
      url: '/1/api/@apiVersion@/license/agreement/@id@/curriculum',
      baseUrlType: EnvironmentApiBaseUrlType.GRANT
    },
    terminalAgreement: {
      url: '/1/api/@apiVersion@/license/agreement/terminal',
      baseUrlType: EnvironmentApiBaseUrlType.GRANT
    },
    schoolAgreements: {
      url: '/1/api/@apiVersion@/license/school/@id@/@type@',
      baseUrlType: EnvironmentApiBaseUrlType.GRANT
    },
    agreementList: {
      url: '/1/api/@apiVersion@/license/agreements',
      baseUrlType: EnvironmentApiBaseUrlType.GRANT
    },
    adminorganizations: {
      url: '/1/api/@apiVersion@/admin/organizations',
      baseUrlType: EnvironmentApiBaseUrlType.AUTH
    },
    schoolDetails: {
      url: '/1/api/@apiVersion@/license/school/@id@/organization',
      baseUrlType: EnvironmentApiBaseUrlType.GRANT
    },
    notification: {
      url: '/1/api/@apiVersion@/school/notification',
      baseUrlType: EnvironmentApiBaseUrlType.SCHOOL
    },
    schoolList: {
      url: '/1/api/@apiVersion@/license/schools',
      baseUrlType: EnvironmentApiBaseUrlType.GRANT
    },
    feedback: {
      url: '/1/api/@apiVersion@/school/feedback',
      baseUrlType: EnvironmentApiBaseUrlType.SCHOOL
    },
    feedBackSubmit:{
      url: '/1/api/@apiVersion@/school/submitFeedback',
      baseUrlType: EnvironmentApiBaseUrlType.SCHOOL
    },
    menu: {
      url: '/1/api/@apiVersion@/app/menu',
      baseUrlType: EnvironmentApiBaseUrlType.SCHOOL
  
    },
    feedBackQuestionList:{
      url:'/1/api/@apiVersion@/school/feedbackQuestionList',
      baseUrlType: EnvironmentApiBaseUrlType.SCHOOL
    },
    feedBackQuestion:{
      url:'/1/api/@apiVersion@/school/feedbackQuestion?questionId=@id@',
      baseUrlType: EnvironmentApiBaseUrlType.SCHOOL
    },
    feedBackUniqueQuestionId:{
      url:'/1/api/@apiVersion@/school/feedbackQuestionId',
      baseUrlType: EnvironmentApiBaseUrlType.SCHOOL
    },
    feedBackSaveQuestion:{
      url:'/1/api/@apiVersion@/school/saveFeedbackQuestion',
      baseUrlType: EnvironmentApiBaseUrlType.SCHOOL
    },
    feedBackDelink:{
      url:'/1/api/@apiVersion@/school/delinkNotificationFeedback',
      baseUrlType: EnvironmentApiBaseUrlType.SCHOOL
    },
    licenseExport:{
      url:'/1/api/@apiVersion@/license/export',
      baseUrlType: EnvironmentApiBaseUrlType.GRANT
    },
    schoolLicense:{
      url:'/1/api/@apiVersion@/school/license',
      baseUrlType: EnvironmentApiBaseUrlType.SCHOOL
      
    },
    allSubject:{
      url:'/1/api/@apiVersion@/curriculum/getAllSubjects',
      baseUrlType:EnvironmentApiBaseUrlType.GENERAL
    },
    schoolLists:{
      url:'/1/api/@apiVersion@/school/info',
      baseUrlType:EnvironmentApiBaseUrlType.SCHOOL
    },
    agreements:{
      url:'/1/api/@apiVersion@/license/agreements',
      baseUrlType:EnvironmentApiBaseUrlType.GRANT
    },
    organizationAgreements: {
      url: '/1/api/@apiVersion@/license/agreement/@id@/organization',
      baseUrlType: EnvironmentApiBaseUrlType.GRANT
    },

    deleteTerminal: {
      url: '/1/api/@apiVersion@/license/agreement/@id@/terminal',
      baseUrlType: EnvironmentApiBaseUrlType.GRANT
    },
    addServer: {
      url: '/1/api/@apiVersion@/license/agreement/server',
      baseUrlType: EnvironmentApiBaseUrlType.GRANT
    },
    deleteServer: {
      url: '/1/api/@apiVersion@/license/agreement/@id@/server',
      baseUrlType: EnvironmentApiBaseUrlType.GRANT
    }
  }
  };
