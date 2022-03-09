/* These interfaces inform base level environment configuration for individual apps. If there is a requirement for additional properties that
are APP SPECIFIC, there should be specific interfaces inside of that app that extend these to define the app specific interfaces. */

export interface EnvironmentConfig {
    coreLibVersion: any;
    production: boolean;
    mockdata: boolean;
    api: EnvironmentApiConfig;
    configFile?: string;
  }
  
  export interface EnvironmentApiConfig {
    globalResponseDelay: number;
    manualErrorTriggerEndpoints?: string[];
    baseUrls: {
      auth: string;
      general: string;
      file: string;
      fileupload: string;
      usage: string;
      teach: string;
      school: string;
      grant: string
    };
    recentViews: EnvironmentApiUrl;
    curriculum: EnvironmentApiUrl;
    book: EnvironmentApiUrl;
  
    lessonPlan: EnvironmentApiUrl;
    tpResource: EnvironmentApiUrl;
    tqResource: EnvironmentApiUrl;
    assetResource: EnvironmentApiUrl;
    assetResourceQuestion: EnvironmentApiUrl;
    getFile: EnvironmentApiUrl;
  
    clientId: EnvironmentApiUrl;
    signIn: EnvironmentApiUrl;
    refreshToken: EnvironmentApiUrl;
    extendSession: EnvironmentApiUrl;
    organizations: EnvironmentApiUrl;
    organization: EnvironmentApiUrl;
    changePassword: EnvironmentApiUrl;
    generatePin: EnvironmentApiUrl;
    checkPin: EnvironmentApiUrl;
    changePin: EnvironmentApiUrl;
    logout: EnvironmentApiUrl;
    updateResource: EnvironmentApiUrl;
    addResource: EnvironmentApiUrl;
    dynamicCustomResource: EnvironmentApiUrl;
    saveWb: EnvironmentApiUrl;
    shareCustomResource: EnvironmentApiUrl;
    dynamicCustomResourceDelete: EnvironmentApiUrl;
    searchFilter: EnvironmentApiUrl;
    searchSuggestion: EnvironmentApiUrl;
    saveCustomBookJSON: EnvironmentApiUrl;
    getCustomBookJSON: EnvironmentApiUrl;
    addCustomChapter: EnvironmentApiUrl;
    editCustomChapter: EnvironmentApiUrl;
    deleteCustomChapter: EnvironmentApiUrl;
    addCustomTopic: EnvironmentApiUrl;
    editCustomTopic: EnvironmentApiUrl;
    deleteCustomTopic: EnvironmentApiUrl;
    getUserProfile: EnvironmentApiUrl;
    getQuestionBank: EnvironmentApiUrl;
    addQuestion: EnvironmentApiUrl;
    editQuestion: EnvironmentApiUrl;
    deleteQuestion: EnvironmentApiUrl;
    userList: EnvironmentApiUrl;
    adminUser: EnvironmentApiUrl;
    adminUsers: EnvironmentApiUrl;
    schoolGrades: EnvironmentApiUrl;
    schoolGrade: EnvironmentApiUrl;
    contentGrades: EnvironmentApiUrl;
    gradeCategories: EnvironmentApiUrl;
    schoolSubjectsGrade: EnvironmentApiUrl;
    contentSubjects: EnvironmentApiUrl;
    schoolSubject: EnvironmentApiUrl;
    schoolSubjectGrade: EnvironmentApiUrl;
    schoolSubjectsClassify: EnvironmentApiUrl;
    subjectTypes: EnvironmentApiUrl;
    schoolSubjectClassify: EnvironmentApiUrl;
    schoolTerminals: EnvironmentApiUrl;
    schoolTerminal: EnvironmentApiUrl;
    schoolSettings: EnvironmentApiUrl;
    audittrailEntries: EnvironmentApiUrl;
    toolStates: EnvironmentApiUrl;
    toolCities: EnvironmentApiUrl;
    boardList: EnvironmentApiUrl;
    board: EnvironmentApiUrl;
    curriculums: EnvironmentApiUrl;
    curriculumBoard: EnvironmentApiUrl;
    schoolLicenceTypeAndStatus: EnvironmentApiUrl;
    users: EnvironmentApiUrl;
    modules: EnvironmentApiUrl;
    school: EnvironmentApiUrl;
    licenseAgreement: EnvironmentApiUrl;
    curriculumAgreement: EnvironmentApiUrl;
    terminalAgreement: EnvironmentApiUrl;
    schoolAgreements: EnvironmentApiUrl;
    agreementList: EnvironmentApiUrl;
    adminorganizations: EnvironmentApiUrl;
    schoolDetails: EnvironmentApiUrl;
    notification:EnvironmentApiUrl;
    schoolList:EnvironmentApiUrl;
    feedback:EnvironmentApiUrl;
    feedBackSubmit:EnvironmentApiUrl;
    menu:EnvironmentApiUrl;
    feedBackQuestionList:EnvironmentApiUrl;
    feedBackQuestion:EnvironmentApiUrl;
    feedBackUniqueQuestionId:EnvironmentApiUrl;
    feedBackSaveQuestion:EnvironmentApiUrl;
    feedBackDelink:EnvironmentApiUrl;
    licenseExport:EnvironmentApiUrl;
    schoolLicense:EnvironmentApiUrl;
    allSubject:EnvironmentApiUrl;
    schoolLists:EnvironmentApiUrl;
    agreements:EnvironmentApiUrl;
    organizationAgreements:EnvironmentApiUrl;
    updateCurriculumAgreement:EnvironmentApiUrl;
    deleteTerminal:EnvironmentApiUrl;
    addServer:EnvironmentApiUrl;
    deleteServer: EnvironmentApiUrl;
  }
  
  export interface EnvironmentApiUrl {
    url: string;
    baseUrlType: EnvironmentApiBaseUrlType;
  }
  
  export enum EnvironmentApiBaseUrlType {
    AUTH = 'auth',
    GENERAL = 'general',
    FILE = 'file',
    FILEUPLOAD = 'fileupload',
    USAGE = 'usage',
    TEACH = 'teach',
    SCHOOL = 'school',
    GRANT = 'grant'
  }
  