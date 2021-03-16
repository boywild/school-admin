import request from '@/utils/request'

export function dict(dict) {
  return request({
    url: `/dict/${dict}`,
    method: 'get'
  })
}

/**
 * 政治面貌 PoliticsEnum
 * 学科 StudentSubjectEnum
 * 录入平台 AdmitPlatformEnum
 * StudentApplyTypeEnum
 * StudentExpenseTypeEnum
 * 所报学习形式 StudentLearnStyleEnum
 * AuthLevelEnum
 * 班型 ClassTypeEnum
 * 来源 FeeSourceTypeEnum
 * 性别 GenderTypeEnum
 * 毕业信息采集 GraduateGatherEnum
 * 户口 HouseholdEnum
 * 户籍 HuJiEnum
 * 证件种类 IdTypeEnum
 * 语种 LanuageEnum
 * 授课方式 LessonStyleEnum
 * 民族 NationEnum
 * 成绩查询 ScoreResultEnum
 * 所报层次2 StudentApplyLevel2Enum
 * 所报层次 StudentApplyLevelEnum
 * 专科/本科 StudentDegreeLevelEnum
 * 学位性质 StudentDegreeTypeEnum
 * 毕业论文 StudentPaperEnum
 * 学位分数 StudentPassEnum
 * StudentPictureTypeEnum
 * 来源 StudentSourceTypeEnum
 * 学习形式 StudentStudyWayEnum
 * StudentTermEnum
 * 培训类型 TraningTypeEnum
 */
