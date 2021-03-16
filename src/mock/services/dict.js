import Mock from 'mockjs2'
import {
  YESORNO_ENMU,
  OPENORCLOSE_ENMU,
  STUDENT_FROM_ENMU,
  STUDY_LEVEL_ENMU,
  STUDY_LEVEL_ENMU2,
  STUDY_WAT_ENMU,
  SUBJECT_ENMU,
  INFO_GATHER_ENMU,
  DEGREE_ENMU,
  DEGREELEVEL_ENMU,
  THESIS_FROM_ENMU,
  REACH_ENMU,
  MZ_ENMU,
  HK_ENMU,
  LANG_ENMU,
  SEX_ENMU,
  HJ_ENMU,
  ZZMM_ENMU,
  CARDTYPE_ENMU,
  PLATFORM_ENMU,
  FEESOURCE_ENMU,
  SCOREQUERY_ENMU,
  TRAINING_ENMU,
  TEACHMETHOD_ENMU,
  CLASSTYPE_ENMU
} from '@/config/dict'
// import { builder } from '../util'

Mock.mock(/\/dict\/YesOrNoEnum/, 'get', YESORNO_ENMU)
Mock.mock(/\/dict\/OpenOrCloseEnum/, 'get', OPENORCLOSE_ENMU)
Mock.mock(/\/dict\/PoliticsEnum/, 'get', ZZMM_ENMU)
Mock.mock(/\/dict\/StudentSubjectEnum/, 'get', SUBJECT_ENMU)
Mock.mock(/\/dict\/AdmitPlatformEnum/, 'get', PLATFORM_ENMU)
Mock.mock(/\/dict\/StudentLearnStyleEnum/, 'get', STUDY_WAT_ENMU)
Mock.mock(/\/dict\/ClassTypeEnum/, 'get', CLASSTYPE_ENMU)
Mock.mock(/\/dict\/FeeSourceTypeEnum/, 'get', FEESOURCE_ENMU)
Mock.mock(/\/dict\/GenderTypeEnum/, 'get', SEX_ENMU)
Mock.mock(/\/dict\/GraduateGatherEnum/, 'get', INFO_GATHER_ENMU)
Mock.mock(/\/dict\/HouseholdEnum/, 'get', HK_ENMU)
Mock.mock(/\/dict\/HuJiEnum/, 'get', HJ_ENMU)
Mock.mock(/\/dict\/IdTypeEnum/, 'get', CARDTYPE_ENMU)
Mock.mock(/\/dict\/LanuageEnum/, 'get', LANG_ENMU)
Mock.mock(/\/dict\/LessonStyleEnum/, 'get', TEACHMETHOD_ENMU)
Mock.mock(/\/dict\/NationEnum/, 'get', MZ_ENMU)
Mock.mock(/\/dict\/ScoreResultEnum/, 'get', SCOREQUERY_ENMU)
Mock.mock(/\/dict\/StudentApplyLevel2Enum/, 'get', STUDY_LEVEL_ENMU2)
Mock.mock(/\/dict\/StudentApplyLevelEnum/, 'get', STUDY_LEVEL_ENMU)
Mock.mock(/\/dict\/StudentDegreeLevelEnum/, 'get', DEGREELEVEL_ENMU)
Mock.mock(/\/dict\/StudentDegreeTypeEnum/, 'get', DEGREE_ENMU)
Mock.mock(/\/dict\/StudentPaperEnum/, 'get', THESIS_FROM_ENMU)
Mock.mock(/\/dict\/StudentPassEnum/, 'get', REACH_ENMU)
Mock.mock(/\/dict\/StudentSourceTypeEnum/, 'get', STUDENT_FROM_ENMU)
Mock.mock(/\/dict\/StudentStudyWayEnum/, 'get', STUDY_WAT_ENMU)
Mock.mock(/\/dict\/TraningTypeEnum/, 'get', TRAINING_ENMU)
