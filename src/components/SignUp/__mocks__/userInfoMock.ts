// 카카오 로그인 cors error 해결 중인 관계로 일단 더미데이터로 구현합니다.
export const userInfoMock = {
  user_info: {
    id: 2251300871,
    connected_at: '2022-05-21T06:30:34Z',
    properties: { nickname: '\uc774\uc870\uc740' },
    kakao_account: {
      profile_nickname_needs_agreement: false,
      profile: { nickname: '\uc774\uc870\uc740' },
      has_email: true,
      email_needs_agreement: false,
      is_email_valid: true,
      is_email_verified: true,
      email: 'joyfuljoeunlee@gmail.com',
      has_gender: true,
      gender_needs_agreement: false,
      gender: 'female',
    },
  },
  access_token: 'WHYBJC17lSZl_-oyjfsMyNwRD9_ANvunN1ctYSv7CilvuQAAAYEtbAFi',
};
